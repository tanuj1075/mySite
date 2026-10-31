import 'dotenv/config';
import { mkdir, readFile, stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { Prisma, PrismaClient } from '@prisma/client';
import type { ShoeProduct, SizeStock } from '../src/types.js';

const DEFAULT_IMPORT_LIMIT = 60;
const PAGE_SIZE = 250;
const MIN_VALID_IMAGES = 3;
const MAX_PRODUCT_IMAGES = 5;
const IMAGE_SIZE_LIMIT = 12 * 1024 * 1024;
const NOT_SPECIFIED = 'Not specified';
const ASSET_DIRECTORY = path.resolve('public', 'catalog-images');

type ShopifyVariant = {
  id: number;
  sku: string | null;
  price: string;
  compare_at_price: string | null;
  available: boolean;
  option1: string | null;
  option2: string | null;
  option3: string | null;
};

type ShopifyImage = { src: string };
type ShopifyOption = { name: string };
type ShopifyProduct = {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  vendor: string;
  product_type: string;
  tags: string[] | string;
  variants: ShopifyVariant[];
  images: ShopifyImage[];
  options: ShopifyOption[];
};

type Source = {
  key: 'superkicks' | 'campus';
  name: string;
  shopUrl: string;
  feedUrl: string;
  footwearType: RegExp;
};

type Candidate = {
  source: Source;
  product: ShopifyProduct;
  brand: string;
  name: string;
  category: ShoeProduct['category'];
  gender: ShoeProduct['gender'];
  sizeSystem: string;
  price: number;
  mrp: number;
  variants: ShopifyVariant[];
  color: string;
  colorHex: string;
  sizeOptionIndexes: number[];
};

type Counts = {
  discovered: number;
  imported: number;
  duplicates: number;
  invalid: number;
  invalidImages: number;
};

const sources: Source[] = [
  {
    key: 'superkicks',
    name: 'Superkicks',
    shopUrl: 'https://www.superkicks.in',
    feedUrl: 'https://www.superkicks.in/products.json',
    footwearType: /sneaker|slides|clog|shoe|boot|sandal|running|football|basketball/i,
  },
  {
    key: 'campus',
    name: 'Campus Shoes',
    shopUrl: 'https://campusshoes.com',
    feedUrl: 'https://campusshoes.com/products.json',
    footwearType: /sneaker|slip.?on|shoe|boot|sandal|floater|running|walking|football|basketball|formal/i,
  },
];

function textContent(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>|<\/(?:p|li|div|h[1-6])>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_match, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_match, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s+/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

function normalizeKey(value: string): string {
  return value.toLocaleLowerCase('en').replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
}

function sourceBrand(vendor: string): string {
  const normalized = vendor.trim().toLocaleLowerCase('en');
  if (normalized === 'adidas') return 'ADIDAS';
  if (normalized === 'adidas originals') return 'ADIDAS ORIGINALS';
  if (normalized === 'campus shoes') return 'CAMPUS';
  return vendor.trim().toLocaleUpperCase('en');
}

function productName(source: Source, product: ShopifyProduct, color: string): string {
  let name = product.title.trim();
  if (source.key === 'superkicks') {
    name = name.replace(/^[^|]+\|\s*/, '').replace(/\s*\{[^{}]*\}\s*$/, '');
  } else if (color) {
    name = name.replace(new RegExp(`\\b${escapeRegExp(color)}\\b`, 'i'), '');
  }
  return name.replace(/\s+/g, ' ').replace(/\s+([,])/g, '$1').trim();
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function categoryFor(productType: string): ShoeProduct['category'] {
  const type = productType.toLocaleLowerCase('en');
  if (type.includes('basketball')) return 'Basketball';
  if (type.includes('football')) return 'Football';
  if (type.includes('running')) return 'Running';
  if (type.includes('walking')) return 'Walking';
  if (type.includes('training') || type.includes('gym')) return 'Training';
  if (type.includes('formal')) return 'Formal Shoes';
  if (type.includes('boot')) return 'Boots';
  if (type.includes('slipper') || type.includes('slide') || type.includes('clog')) return 'Slippers';
  if (type.includes('sandal') || type.includes('floater')) return 'Sandals';
  if (type.includes('casual')) return 'Casual Shoes';
  return 'Sneakers';
}

function genderFor(product: ShopifyProduct): ShoeProduct['gender'] {
  const tags = Array.isArray(product.tags) ? product.tags.join(' ') : product.tags;
  const source = `${product.title} ${tags}`.toLocaleLowerCase('en');
  const explicitGender = tags.match(/gender\s*-\s*(men|women|kids|unisex)/i)?.[1]?.toLocaleLowerCase('en');
  if (explicitGender) {
    if (explicitGender === 'men') return 'Men';
    if (explicitGender === 'women') return 'Women';
    if (explicitGender === 'kids') return 'Kids';
    return 'Unisex';
  }
  if (/\b(kids?|children|grade school|youth)\b/.test(source)) return 'Kids';
  if (/\bwomen'?s?\b|\bgirls?\b/.test(source)) return 'Women';
  if (/\bmen'?s?\b|\bboys?\b/.test(source)) return 'Men';
  return 'Unisex';
}

function colorDetails(value: string): { name: string; hex: string } {
  const colorHex: Array<[RegExp, string]> = [
    [/\bblack\b/i, '#181818'],
    [/\bwhite\b/i, '#f4f1eb'],
    [/\b(?:grey|gray|silver)\b/i, '#929292'],
    [/\bnavy\b/i, '#202e4d'],
    [/\bblue\b/i, '#4169a1'],
    [/\bred\b/i, '#b72d34'],
    [/\bgreen\b/i, '#417255'],
    [/\byellow\b/i, '#e2c13e'],
    [/\b(?:tan|brown|chocolate)\b/i, '#8a6246'],
    [/\b(?:beige|cream|off.?white|ivory)\b/i, '#d8cfbd'],
    [/\bpink\b/i, '#d58c9f'],
    [/\bpurple\b/i, '#76538d'],
    [/\borange\b/i, '#ce6a32'],
  ];
  const match = colorHex.find(([pattern]) => pattern.test(value));
  return { name: value || 'Standard colorway', hex: match?.[1] ?? '#8e8474' };
}

function tagsFor(product: ShopifyProduct): string[] {
  return (Array.isArray(product.tags) ? product.tags : product.tags.split(','))
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function factFromDescription(html: string, field: string): string {
  const escaped = escapeRegExp(field);
  const match = html.match(
    new RegExp(`(?:<strong|<b)[^>]*>\\s*${escaped}\\s*:?\\s*<\\/(?:strong|b)>\\s*([^<\\n]+)`, 'i'),
  );
  return match?.[1]?.trim() || NOT_SPECIFIED;
}

function categoryDetails(html: string, productType: string): string {
  const occasion = factFromDescription(html, 'Occasion');
  return occasion === NOT_SPECIFIED ? productType : occasion;
}

function extractFeatures(product: ShopifyProduct): string[] {
  const listItems = [...product.body_html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)]
    .map((match) => textContent(match[1]))
    .filter((feature) => feature.length > 0);
  if (listItems.length) return [...new Set(listItems)].slice(0, 8);
  return tagsFor(product)
    .filter((tag) => !/^brand\s*-|^gender\s*-|^season\s*:/i.test(tag))
    .slice(0, 8);
}

function candidateFor(source: Source, product: ShopifyProduct): Candidate | null {
  if (!product.id || !product.handle || !product.title || !product.vendor || !product.body_html) return null;
  const available = product.variants.filter((variant) => variant.available);
  if (available.length === 0) return null;

  const prices = new Set(available.map((variant) => Number(variant.price)));
  if ([...prices].some((price) => !Number.isFinite(price) || price <= 0) || prices.size !== 1) return null;
  const price = [...prices][0];
  const mrps = new Set(
    available.map((variant) => {
      const compareAt = Number(variant.compare_at_price);
      return Number.isFinite(compareAt) && compareAt >= price ? compareAt : price;
    }),
  );
  if (mrps.size !== 1) return null;

  const colorOptionIndex = product.options.findIndex((option) => /colou?r/i.test(option.name));
  const sizeOptionIndexes = product.options
    .map((option, index) => /size/i.test(option.name) ? index + 1 : -1)
    .filter((index) => index >= 0);
  if (sizeOptionIndexes.length === 0) return null;
  const color = colorOptionIndex >= 0
    ? available.map((variant) => [variant.option1, variant.option2, variant.option3][colorOptionIndex]).find(Boolean) ?? ''
    : source.key === 'superkicks'
      ? product.title.match(/\{([^{}]+)\}\s*$/)?.[1]?.trim() ?? ''
      : '';
  const sizeSystem = product.options[sizeOptionIndexes[0] - 1]?.name.match(/\b(UK|US|EU)\b/i)?.[1]?.toUpperCase()
    ?? 'Size';
  const name = productName(source, product, color);
  if (!name) return null;
  return {
    source,
    product,
    brand: sourceBrand(product.vendor),
    name,
    category: categoryFor(product.product_type),
    gender: genderFor(product),
    sizeSystem,
    price,
    mrp: [...mrps][0],
    variants: product.variants,
    color,
    colorHex: colorDetails(color).hex,
    sizeOptionIndexes,
  };
}

async function fetchProducts(source: Source): Promise<ShopifyProduct[]> {
  const products: ShopifyProduct[] = [];
  for (let page = 1; page <= 10; page++) {
    const url = new URL(source.feedUrl);
    url.searchParams.set('limit', String(PAGE_SIZE));
    url.searchParams.set('page', String(page));
    const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
    if (!response.ok) throw new Error(`${source.name} product feed returned HTTP ${response.status}`);
    const data = await response.json() as { products?: ShopifyProduct[] };
    const batch = Array.isArray(data.products) ? data.products : [];
    products.push(...batch);
    if (batch.length < PAGE_SIZE) break;
  }
  return products.filter((product) =>
    source.footwearType.test(product.product_type)
    && !/\b(?:t-?shirts?|tees?|bags?|caps?|shorts?|hoodies?|socks?|pants?|jerseys?|wallets?)\b/i.test(`${product.product_type} ${product.title}`),
  );
}

function diversify(candidates: Candidate[]): Candidate[] {
  const buckets = new Map<string, Candidate[]>();
  for (const candidate of candidates) {
    const key = `${candidate.brand}|${candidate.category}|${candidate.gender}`;
    const bucket = buckets.get(key) ?? [];
    bucket.push(candidate);
    buckets.set(key, bucket);
  }
  for (const bucket of buckets.values()) bucket.sort((a, b) => a.name.localeCompare(b.name));

  const keys = [...buckets.keys()].sort();
  const result: Candidate[] = [];
  let added = true;
  while (added) {
    added = false;
    for (const key of keys) {
      const next = buckets.get(key)?.shift();
      if (next) {
        result.push(next);
        added = true;
      }
    }
  }
  return result;
}

function sourceUrl(candidate: Candidate): string {
  return `${candidate.source.shopUrl}/products/${candidate.product.handle}`;
}

function duplicateKey(brand: string, name: string): string {
  return `${normalizeKey(brand)}|${normalizeKey(name)}`;
}

function productSize(variant: ShopifyVariant, optionIndexes: number[]): string | null {
  for (const index of optionIndexes) {
    const value = [variant.option1, variant.option2, variant.option3][index - 1]?.trim();
    if (value && /^\d{1,2}(?:\.5)?$/.test(value)) return value;
  }
  return null;
}

function createSizeInventory(candidate: Candidate): Record<string, SizeStock[]> | null {
  const sizes = new Map<string, SizeStock>();
  const skuPrefix = candidate.source.key === 'superkicks' ? 'SK' : 'CA';
  for (const variant of candidate.variants) {
    const size = productSize(variant, candidate.sizeOptionIndexes);
    if (!size) continue;
    const sku = variant.sku?.trim() || `${skuPrefix}-${candidate.product.id}-${size.replace('.', '-')}`;
    const next = { size, stock: variant.available ? 1 : 0, sku };
    const previous = sizes.get(size);
    if (!previous || (!previous.stock && next.stock)) sizes.set(size, next);
  }
  if (![...sizes.values()].some((size) => size.stock > 0)) return null;
  return { [candidate.color || 'Standard colorway']: [...sizes.values()].sort((a, b) => Number(a.size) - Number(b.size)) };
}

function imageExtension(contentType: string, data: Uint8Array): string | null {
  if (contentType.includes('image/jpeg') && data[0] === 0xff && data[1] === 0xd8) return 'jpg';
  if (contentType.includes('image/png') && data[0] === 0x89 && data[1] === 0x50) return 'png';
  if (contentType.includes('image/webp') && data[0] === 0x52 && data[8] === 0x57) return 'webp';
  if (contentType.includes('image/avif') && String.fromCharCode(...data.slice(4, 12)).includes('ftypavif')) return 'avif';
  return null;
}

async function downloadProductImages(candidate: Candidate): Promise<{ urls: string[]; files: string[] }> {
  const images: string[] = [];
  const files: string[] = [];
  const uniqueUrls = [...new Set(candidate.product.images.map((image) => image.src))];
  for (const url of uniqueUrls) {
    if (images.length === MAX_PRODUCT_IMAGES) break;
    let parsed: URL;
    try {
      parsed = new URL(url);
    } catch {
      continue;
    }
    if (parsed.protocol !== 'https:' || parsed.hostname !== 'cdn.shopify.com') continue;
    try {
      const response = await fetch(parsed, { signal: AbortSignal.timeout(20_000) });
      if (!response.ok) continue;
      const contentType = response.headers.get('content-type')?.split(';')[0].toLowerCase() ?? '';
      const length = Number(response.headers.get('content-length') ?? 0);
      if (!contentType.startsWith('image/') || length > IMAGE_SIZE_LIMIT) continue;
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (bytes.length === 0 || bytes.length > IMAGE_SIZE_LIMIT) continue;
      const extension = imageExtension(contentType, bytes);
      if (!extension) continue;

      const filename = `${candidate.source.key}-${candidate.product.id}-${images.length + 1}.${extension}`;
      const target = path.join(ASSET_DIRECTORY, filename);
      await writeFile(target, bytes, { flag: 'wx' }).catch(async (error: NodeJS.ErrnoException) => {
        if (error.code !== 'EEXIST') throw error;
        const fileInfo = await stat(target);
        if (fileInfo.size !== bytes.length) throw new Error(`Image already exists with unexpected size: ${filename}`);
        const existing = await readFile(target);
        if (!existing.equals(Buffer.from(bytes))) throw new Error(`Image already exists with different content: ${filename}`);
      });
      images.push(`/catalog-images/${filename}`);
      files.push(target);
    } catch (error) {
      if (error instanceof Error && !/fetch failed|timed out|aborted/i.test(error.message)) {
        console.warn(`Image skipped for ${candidate.name}: ${error.message}`);
      }
    }
  }
  if (images.length < MIN_VALID_IMAGES) {
    await Promise.all(files.map((file) => unlink(file).catch(() => undefined)));
    return { urls: [], files: [] };
  }
  return { urls: images, files };
}

function createCatalogProduct(candidate: Candidate, images: string[], sku: string): ShoeProduct | null {
  const colorName = candidate.color || 'Standard colorway';
  const sizeInventory = createSizeInventory(candidate);
  if (!sizeInventory) return null;
  const plainDescription = textContent(candidate.product.body_html);
  if (!plainDescription) return null;
  const descriptionParts = plainDescription.split(/(?<=[.!?])\s+/);
  const shortDescription = (descriptionParts[0] ?? plainDescription).slice(0, 240);
  const discountPercent = candidate.mrp > candidate.price
    ? Math.round((1 - candidate.price / candidate.mrp) * 100)
    : 0;
  const productId = `${candidate.source.key}-${candidate.product.id}`;
  const imageMap = {
    front: images[0],
    ...(images[1] ? { side: images[1] } : {}),
    ...(images[2] ? { back: images[2] } : {}),
    ...(images[3] ? { top: images[3] } : {}),
    ...(images[4] ? { sole: images[4] } : {}),
  };
  const tags = tagsFor(candidate.product);
  const collections = new Set<string>([candidate.category === 'Running' ? 'Running Collection' : 'Trending Now']);
  if (tags.some((tag) => /new arrivals?|new drops?/i.test(tag))) collections.add('New Drops');
  if (candidate.category === 'Sneakers' || candidate.category === 'Basketball') collections.add('Premium Sneakers');
  const upper = factFromDescription(candidate.product.body_html, 'Upper Material');
  const sole = factFromDescription(candidate.product.body_html, 'Sole Material');
  const material = factFromDescription(candidate.product.body_html, 'Material');
  const sourceSku = candidate.variants.find((variant) => variant.available && variant.sku?.trim())?.sku?.trim();
  const product = {
    id: productId,
    sku,
    code: productId.toUpperCase(),
    sourceProductId: String(candidate.product.id),
    sourceProductUrl: sourceUrl(candidate),
    sourceStore: candidate.source.name,
    sourceCategory: candidate.product.product_type,
    sourceTags: tags,
    sourceSku,
    shortDescription,
    productImages: images,
    color: colorName,
    features: extractFeatures(candidate.product),
    sizeSystem: candidate.sizeSystem,
    inventoryCountsAreExact: false,
    name: candidate.name,
    brand: candidate.brand,
    category: candidate.category,
    gender: candidate.gender,
    sport: candidate.category === 'Running' || candidate.category === 'Walking'
      || candidate.category === 'Football' || candidate.category === 'Basketball'
      || candidate.category === 'Training' ? candidate.category : 'Lifestyle',
    collections: [...collections],
    price: candidate.price,
    mrp: candidate.mrp,
    discountPercent,
    rating: 0,
    reviewsCount: 0,
    colors: [{ name: colorName, hex: candidate.colorHex, images: imageMap }],
    sizeInventory,
    upper: upper !== NOT_SPECIFIED ? upper : material,
    sole,
    closure: factFromDescription(candidate.product.body_html, 'Closure'),
    fitType: 'Not specified' as const,
    occasion: categoryDetails(candidate.product.body_html, candidate.product.product_type),
    use: candidate.product.product_type,
    weight: NOT_SPECIFIED,
    waterResistance: 'Not specified' as const,
    countryOfOrigin: factFromDescription(candidate.product.body_html, 'Country of Origin'),
    warranty: factFromDescription(candidate.product.body_html, 'Warranty'),
    description: plainDescription,
    fitIndicator: 'Not specified' as const,
    comfortScore: null,
    width: 'Not specified' as const,
    recommended: 'Not specified by the product source.',
    isNewArrival: tags.some((tag) => /new arrivals?|new drops?/i.test(tag)),
    isSale: discountPercent > 0,
    isLimitedDrop: false,
  } satisfies ShoeProduct;
  return product;
}

function buildExistingIndexes(
  records: Array<{ id: string; sku: string; brand: string; name: string; catalog: Prisma.JsonValue }>,
) {
  const ids = new Set<string>();
  const skus = new Set<string>();
  const names = new Set<string>();
  const sourcesSeen = new Set<string>();
  const urls = new Set<string>();
  for (const record of records) {
    ids.add(record.id);
    skus.add(record.sku.toLocaleLowerCase('en'));
    names.add(duplicateKey(record.brand, record.name));
    if (record.catalog && typeof record.catalog === 'object' && !Array.isArray(record.catalog)) {
      const catalog = record.catalog as { sourceProductId?: string; sourceStore?: string; sourceProductUrl?: string };
      if (catalog.sourceProductId && catalog.sourceStore) sourcesSeen.add(`${normalizeKey(catalog.sourceStore)}|${catalog.sourceProductId}`);
      if (catalog.sourceProductUrl) urls.add(catalog.sourceProductUrl.toLocaleLowerCase('en'));
    }
  }
  return { ids, skus, names, sourcesSeen, urls };
}

async function main(): Promise<void> {
  const limitArgument = process.argv.find((argument) => argument.startsWith('--limit='));
  const requestedLimit = limitArgument ? Number(limitArgument.slice('--limit='.length)) : DEFAULT_IMPORT_LIMIT;
  if (!Number.isInteger(requestedLimit) || requestedLimit < 1 || requestedLimit > 100) {
    throw new Error('Set --limit to a whole number from 1 to 100.');
  }
  await mkdir(ASSET_DIRECTORY, { recursive: true });

  const counts: Counts = { discovered: 0, imported: 0, duplicates: 0, invalid: 0, invalidImages: 0 };
  const candidates: Candidate[] = [];
  for (const source of sources) {
    const products = await fetchProducts(source);
    for (const product of products) {
      const candidate = candidateFor(source, product);
      if (candidate) candidates.push(candidate);
      else counts.invalid++;
    }
  }
  counts.discovered = candidates.length;
  if (candidates.length === 0) throw new Error('No valid in-stock footwear products were found in the public feeds.');

  const database = new PrismaClient();
  try {
    const current = await database.product.findMany({
      select: { id: true, sku: true, brand: true, name: true, catalog: true },
    });
    const indexes = buildExistingIndexes(current);
    const skuReservations = new Set(indexes.skus);
    const orderedCandidates = diversify(candidates);

    for (const candidate of orderedCandidates) {
      if (counts.imported >= requestedLimit) break;
      const id = `${candidate.source.key}-${candidate.product.id}`;
      const url = sourceUrl(candidate).toLocaleLowerCase('en');
      const sourceIdentity = `${normalizeKey(candidate.source.name)}|${candidate.product.id}`;
      const normalizedName = duplicateKey(candidate.brand, candidate.name);
      if (
        indexes.ids.has(id)
        || indexes.sourcesSeen.has(sourceIdentity)
        || indexes.urls.has(url)
        || indexes.names.has(normalizedName)
      ) {
        counts.duplicates++;
        continue;
      }

      const inventory = createSizeInventory(candidate);
      const variantSku = candidate.variants.find((variant) => variant.available && variant.sku?.trim())?.sku?.trim();
      const rawSku = variantSku ?? `${candidate.source.key.toUpperCase()}-${candidate.product.id}`;
      const skuPrefix = candidate.source.key === 'superkicks' ? 'SK' : 'CA';
      let productSku = `${skuPrefix}-${rawSku}`;
      let skuSuffix = 1;
      while (skuReservations.has(productSku.toLocaleLowerCase('en'))) {
        productSku = `${skuPrefix}-${candidate.product.id}-${rawSku}-${skuSuffix}`;
        skuSuffix++;
      }
      if (!inventory) {
        counts.invalid++;
        continue;
      }

      const downloaded = await downloadProductImages(candidate);
      if (downloaded.urls.length < MIN_VALID_IMAGES) {
        counts.invalid++;
        counts.invalidImages++;
        console.warn(`Skipped ${candidate.brand} ${candidate.name}: fewer than ${MIN_VALID_IMAGES} valid product images.`);
        continue;
      }
      const catalogProduct = createCatalogProduct(candidate, downloaded.urls, productSku);
      if (!catalogProduct) {
        counts.invalid++;
        await Promise.all(downloaded.files.map((file) => unlink(file).catch(() => undefined)));
        continue;
      }

      try {
        await database.product.create({
          data: {
            id: catalogProduct.id,
            sku: catalogProduct.sku,
            name: catalogProduct.name,
            brand: catalogProduct.brand,
            category: catalogProduct.category,
            price: catalogProduct.price,
            mrp: catalogProduct.mrp,
            catalog: catalogProduct as object,
          },
        });
      } catch (error) {
        await Promise.all(downloaded.files.map((file) => unlink(file).catch(() => undefined)));
        if (
          error instanceof Prisma.PrismaClientKnownRequestError
          && error.code === 'P2002'
        ) {
          counts.duplicates++;
          continue;
        }
        throw error;
      }

      skuReservations.add(productSku.toLocaleLowerCase('en'));
      indexes.ids.add(id);
      indexes.skus.add(productSku.toLocaleLowerCase('en'));
      indexes.names.add(normalizedName);
      indexes.sourcesSeen.add(sourceIdentity);
      indexes.urls.add(url);
      counts.imported++;
      console.log(`Imported ${catalogProduct.brand} — ${catalogProduct.name} (${catalogProduct.category})`);
    }
  } finally {
    await database.$disconnect();
  }

  console.log('\nCatalog import results');
  console.log(`Products discovered: ${counts.discovered}`);
  console.log(`Products imported: ${counts.imported}`);
  console.log(`Duplicates skipped: ${counts.duplicates}`);
  console.log(`Invalid products skipped: ${counts.invalid}`);
  console.log(`Products skipped for image validation: ${counts.invalidImages}`);
  console.log(`Images stored locally: ${counts.imported} products; ${MAX_PRODUCT_IMAGES} maximum images each`);
  console.log(`Target categories: ${[...new Set(candidates.map((candidate) => candidate.category))].sort().join(', ')}`);
  console.log(`Source brands: ${[...new Set(candidates.map((candidate) => candidate.brand))].sort().join(', ')}`);
  if (counts.imported === 0) throw new Error('No new products were imported. Check duplicates and source availability.');
}

main().catch((error: unknown) => {
  console.error('Footwear catalog import failed:', error);
  process.exitCode = 1;
});
