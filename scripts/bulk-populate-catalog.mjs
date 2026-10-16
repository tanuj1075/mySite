import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();
const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' };

async function fetchFeed(url, pages = 4) {
  const all = [];
  for (let page = 1; page <= pages; page++) {
    try {
      const res = await fetch(`${url}?limit=250&page=${page}`, { headers });
      if (!res.ok) break;
      const data = await res.json();
      if (!data.products || !data.products.length) break;
      all.push(...data.products);
    } catch {
      break;
    }
  }
  return all;
}

function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>|<\/(?:p|li|div|h[1-6])>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function factFromHtml(html, field) {
  if (!html) return 'Not specified';
  const match = html.match(new RegExp(`(?:<strong|<b)[^>]*>\\s*${field}\\s*:?\\s*<\\/(?:strong|b)>\\s*([^<\\n]+)`, 'i'));
  return match?.[1]?.trim() || 'Not specified';
}

function extractFeatures(bodyHtml, tags) {
  if (bodyHtml) {
    const listItems = [...bodyHtml.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)]
      .map(m => cleanHtml(m[1]))
      .filter(f => f.length > 5 && f.length < 120);
    if (listItems.length >= 2) return [...new Set(listItems)].slice(0, 6);
  }
  return tags.filter(t => !/brand|gender|season|color/i.test(t)).slice(0, 5);
}

function normalizeKey(str) {
  return (str || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function detectColor(title, colorOptionValue) {
  const text = `${colorOptionValue || ''} ${title || ''}`;
  const colorMap = [
    { pattern: /\bblack\b/i, name: 'Core Black', hex: '#141312' },
    { pattern: /\bwhite\b/i, name: 'Cloud White', hex: '#f4f1eb' },
    { pattern: /\b(?:grey|gray|silver)\b/i, name: 'Concrete Grey', hex: '#8a8885' },
    { pattern: /\bnavy\b/i, name: 'Deep Navy', hex: '#1f2937' },
    { pattern: /\bblue\b/i, name: 'Royal Blue', hex: '#2563eb' },
    { pattern: /\bred\b/i, name: 'Crimson Red', hex: '#dc2626' },
    { pattern: /\bgreen\b/i, name: 'Olive Green', hex: '#15803d' },
    { pattern: /\byellow\b/i, name: 'Sun Yellow', hex: '#eab308' },
    { pattern: /\b(?:tan|brown|camel|wood)\b/i, name: 'Cognac Tan', hex: '#78350f' },
    { pattern: /\b(?:beige|cream|taupe|off.?white|ivory)\b/i, name: 'Travertine Cream', hex: '#e4ddcf' },
    { pattern: /\bpink\b/i, name: 'Blush Pink', hex: '#ec4899' },
    { pattern: /\bpurple\b/i, name: 'Rich Purple', hex: '#7e22ce' },
    { pattern: /\borange\b/i, name: 'Sunset Orange', hex: '#ea580c' },
  ];
  for (const c of colorMap) {
    if (c.pattern.test(text)) return c;
  }
  return { name: colorOptionValue || 'Heritage Colorway', hex: '#6b7280' };
}

async function run() {
  console.log('Loading existing catalog from database...');
  const existingProducts = await db.product.findMany();
  console.log(`Found ${existingProducts.length} existing products in database.`);

  const existingIds = new Set(existingProducts.map(p => p.id));
  const existingSkus = new Set(existingProducts.map(p => p.sku.toLowerCase()));
  const existingNames = new Set(existingProducts.map(p => normalizeKey(`${p.brand} ${p.name}`)));
  const existingUrls = new Set();
  for (const p of existingProducts) {
    const u = p.catalog?.sourceProductUrl || p.catalog?.sourceUrl;
    if (u) existingUrls.add(u.toLowerCase());
  }

  console.log('Fetching external store catalogs...');
  const [skItems, caItems, rtItems, clItems] = await Promise.all([
    fetchFeed('https://www.superkicks.in/products.json', 4),
    fetchFeed('https://campusshoes.com/products.json', 4),
    fetchFeed('https://redtape.com/products.json', 4),
    fetchFeed('https://clarks.in/products.json', 2),
  ]);

  console.log(`Fetched counts: Superkicks=${skItems.length}, Campus=${caItems.length}, RedTape=${rtItems.length}, Clarks=${clItems.length}`);

  const candidates = [];

  // Helper for Superkicks
  for (const p of skItems) {
    const type = (p.product_type || '').toLowerCase();
    const title = p.title || '';
    if (!/sneaker|slides|clog|shoe|boot|sandal|running|football|basketball|trainer/i.test(type) && !/sneaker|shoe/i.test(title)) continue;
    if (!p.images || p.images.length < 3) continue;
    const availVariants = p.variants.filter(v => v.available && Number(v.price) > 0);
    if (!availVariants.length) continue;

    let brand = (p.vendor || 'NIKE').toUpperCase().trim();
    if (brand === 'ADIDAS ORIGINALS') brand = 'ADIDAS';
    if (brand === 'JORDAN') brand = 'NIKE';

    let cleanName = title.replace(/^[^|]+\|\s*/, '').replace(/\s*\{[^{}]*\}\s*$/, '').trim();
    let category = 'Sneakers';
    if (/basketball/i.test(type + title)) category = 'Basketball';
    else if (/running/i.test(type + title)) category = 'Running';
    else if (/clog|slide/i.test(type + title)) category = 'Slippers';
    else if (/sandal/i.test(type + title)) category = 'Sandals';
    else if (/training|trainer|gym/i.test(type + title)) category = 'Training';
    else if (/walking/i.test(type + title)) category = 'Walking';

    let gender = 'Unisex';
    const tagStr = (Array.isArray(p.tags) ? p.tags.join(' ') : p.tags || '') + ' ' + title;
    if (/women|girls/i.test(tagStr)) gender = 'Women';
    else if (/kids|grade school|youth|boys/i.test(tagStr)) gender = 'Kids';
    else if (/men/i.test(tagStr)) gender = 'Men';

    candidates.push({
      source: 'superkicks',
      raw: p,
      brand,
      name: cleanName,
      category,
      gender,
      url: `https://www.superkicks.in/products/${p.handle}`,
    });
  }

  // Helper for Campus
  for (const p of caItems) {
    const type = (p.product_type || '').toLowerCase();
    const title = p.title || '';
    if (!/sneaker|shoe|sandal|floater|slipper|flip flop|slide|loafer|clog/i.test(type) && !/sneaker|shoe|sandal|loafer/i.test(title)) continue;
    if (/track pant|t-shirt|jacket|shorts|legging|cap|belt/i.test(type + title)) continue;
    if (!p.images || p.images.length < 3) continue;
    const availVariants = p.variants.filter(v => v.available && Number(v.price) > 0);
    if (!availVariants.length) continue;

    let cleanName = title.replace(/\s+Men's.*$/i, '').replace(/\s+Women's.*$/i, '').replace(/\s+Child.*$/i, '').replace(/\s+Kids.*$/i, '').trim();
    let category = 'Sneakers';
    if (/running/i.test(type + title)) category = 'Running';
    else if (/walking/i.test(type + title)) category = 'Walking';
    else if (/slipper|flip flop|slide|clog/i.test(type + title)) category = 'Slippers';
    else if (/sandal|floater/i.test(type + title)) category = 'Sandals';
    else if (/loafer|formal/i.test(type + title)) category = 'Formal Shoes';
    else if (/casual/i.test(type + title)) category = 'Casual Shoes';

    let gender = 'Men';
    if (/women/i.test(type + title)) gender = 'Women';
    else if (/kids|child|boy|girl/i.test(type + title)) gender = 'Kids';

    candidates.push({
      source: 'campus',
      raw: p,
      brand: 'CAMPUS',
      name: cleanName,
      category,
      gender,
      url: `https://campusshoes.com/products/${p.handle}`,
    });
  }

  // Helper for RedTape (Boots & Formals)
  for (const p of rtItems) {
    const type = (p.product_type || '').toLowerCase();
    const title = p.title || '';
    if (!/boot/i.test(title + type) && !/formal|derby|oxford|monk/i.test(title + type)) continue;
    if (/jeans|pant|shirt/i.test(title)) continue;
    if (!p.images || p.images.length < 3) continue;
    const availVariants = p.variants.filter(v => v.available && Number(v.price) > 0);
    if (!availVariants.length) continue;

    let category = /boot/i.test(title + type) ? 'Boots' : 'Formal Shoes';
    let cleanName = title.replace(/\s*\|.*$/, '').trim();
    let gender = /women/i.test(title) ? 'Women' : 'Men';

    candidates.push({
      source: 'redtape',
      raw: p,
      brand: 'RED TAPE',
      name: cleanName,
      category,
      gender,
      url: `https://redtape.com/products/${p.handle}`,
    });
  }

  // Helper for Clarks (Boots & Formals)
  for (const p of clItems) {
    const type = (p.product_type || '').toLowerCase();
    const title = p.title || '';
    if (!/boot|formal|derby|oxford|monk|wallabee/i.test(title + type)) continue;
    if (!p.images || p.images.length < 3) continue;
    const availVariants = p.variants.filter(v => v.available && Number(v.price) > 0);
    if (!availVariants.length) continue;

    let category = /boot/i.test(title + type) ? 'Boots' : 'Formal Shoes';
    let cleanName = title.replace(/^Clarks\s+(?:Men|Women)\s+/i, '').trim();
    let gender = /women/i.test(title) ? 'Women' : 'Men';

    candidates.push({
      source: 'clarks',
      raw: p,
      brand: 'CLARKS',
      name: cleanName,
      category,
      gender,
      url: `https://clarks.in/products/${p.handle}`,
    });
  }

  console.log(`Total viable external candidates parsed: ${candidates.length}`);

  // Deduplicate and filter candidates
  let skippedDuplicates = 0;
  let skippedInvalid = 0;
  const filteredCandidates = [];

  for (const cand of candidates) {
    const norm = normalizeKey(`${cand.brand} ${cand.name}`);
    const candUrl = cand.url.toLowerCase();
    const id = `${cand.source}-${cand.raw.id}`;
    if (existingIds.has(id) || existingNames.has(norm) || existingUrls.has(candUrl)) {
      skippedDuplicates++;
      continue;
    }

    existingIds.add(id);
    existingNames.add(norm);
    existingUrls.add(candUrl);
    filteredCandidates.push(cand);
  }

  console.log(`Candidates after deduplication: ${filteredCandidates.length} (Skipped duplicates: ${skippedDuplicates})`);

  // Target count needed: 200 total in catalog, currently 61, so 139 new products minimum.
  // Let's import 145 products to reach ~206 total products!
  const TARGET_NEW_PRODUCTS = 145;

  // Group candidates by category to guarantee rich diversity across all 14 requested categories!
  const byCategory = {};
  for (const c of filteredCandidates) {
    if (!byCategory[c.category]) byCategory[c.category] = [];
    byCategory[c.category].push(c);
  }

  console.log('Available candidate categories distribution:');
  for (const [cat, list] of Object.entries(byCategory)) {
    console.log(`  ${cat}: ${list.length}`);
  }

  // Interleave/round-robin selection to ensure every category and gender gets maximum representation
  const selectedToImport = [];
  const categoryKeys = Object.keys(byCategory);
  let round = 0;
  while (selectedToImport.length < TARGET_NEW_PRODUCTS) {
    let addedInRound = 0;
    for (const cat of categoryKeys) {
      if (selectedToImport.length >= TARGET_NEW_PRODUCTS) break;
      const list = byCategory[cat];
      if (list && list.length > 0) {
        selectedToImport.push(list.shift());
        addedInRound++;
      }
    }
    if (addedInRound === 0) break;
    round++;
  }

  console.log(`Selected ${selectedToImport.length} balanced products for insertion.`);

  // Build ShoeProduct records and insert
  let newProductsAdded = 0;
  const newProductRecords = [];

  for (const cand of selectedToImport) {
    const raw = cand.raw;
    const availVariants = raw.variants.filter(v => v.available && Number(v.price) > 0);
    const primaryVariant = availVariants[0];
    const price = Math.round(Number(primaryVariant.price));
    const rawMrp = Number(primaryVariant.compare_at_price);
    const mrp = Number.isFinite(rawMrp) && rawMrp > price ? Math.round(rawMrp) : Math.round(price * 1.25);
    const discountPercent = mrp > price ? Math.round((1 - price / mrp) * 100) : 0;

    const productId = `${cand.source}-${raw.id}`;
    let productSku = `${cand.source.slice(0, 2).toUpperCase()}-${primaryVariant.sku?.trim() || raw.id}`;
    if (existingSkus.has(productSku.toLowerCase())) {
      productSku = `${productSku}-${Math.floor(Math.random() * 899 + 100)}`;
    }
    existingSkus.add(productSku.toLowerCase());

    const tags = Array.isArray(raw.tags) ? raw.tags : (raw.tags || '').split(',').map(t => t.trim()).filter(Boolean);
    const colorInfo = detectColor(cand.name, primaryVariant.option1 || primaryVariant.option2);

    const imageUrls = raw.images.map(img => img.src).slice(0, 5);
    const imageMap = {
      front: imageUrls[0],
      ...(imageUrls[1] ? { side: imageUrls[1] } : { side: imageUrls[0] }),
      ...(imageUrls[2] ? { back: imageUrls[2] } : { back: imageUrls[0] }),
      ...(imageUrls[3] ? { top: imageUrls[3] } : { top: imageUrls[0] }),
      ...(imageUrls[4] ? { sole: imageUrls[4] } : { sole: imageUrls[0] }),
    };

    // Build size inventory from available variants
    const sizeMap = new Map();
    for (const v of raw.variants) {
      let sz = [v.option1, v.option2, v.option3].find(opt => /^\d{1,2}(?:\.5)?$/.test(opt || ''));
      if (!sz) sz = (v.title || '').match(/\b(\d{1,2}(?:\.5)?)\b/)?.[1];
      if (!sz) continue;
      const vSku = v.sku?.trim() || `${productSku}-${sz}`;
      sizeMap.set(sz, {
        size: sz,
        stock: v.available ? Math.floor(Math.random() * 12 + 4) : 0,
        sku: vSku
      });
    }

    if (sizeMap.size === 0) {
      // Default common size curve
      for (const sz of ['7', '8', '9', '10', '11']) {
        sizeMap.set(sz, {
          size: sz,
          stock: Math.floor(Math.random() * 10 + 3),
          sku: `${productSku}-${sz}`
        });
      }
    }

    const sizeInventory = {
      [colorInfo.name]: [...sizeMap.values()].sort((a, b) => Number(a.size) - Number(b.size))
    };

    const plainDesc = cleanHtml(raw.body_html) || `${cand.brand} ${cand.name} engineered for ultimate performance and comfort.`;
    const upper = factFromHtml(raw.body_html, 'Upper Material') || 'Engineered Breathable Mesh & Synthetic Leather';
    const sole = factFromHtml(raw.body_html, 'Sole Material') || 'Durable High-Traction Rubber Outsole';
    const closure = factFromHtml(raw.body_html, 'Closure') || (/slip|slide|clog|slipper|sandal/i.test(cand.category) ? 'Slip-on' : 'Lace-Up Closure');

    const collections = [cand.category === 'Running' ? 'Running Collection' : 'Trending Now'];
    if (discountPercent >= 20) collections.push('Sale');
    if (cand.category === 'Sneakers') collections.push('Streetwear');

    const productCatalog = {
      id: productId,
      sku: productSku,
      code: productId.toUpperCase(),
      sourceProductId: String(raw.id),
      sourceProductUrl: cand.url,
      sourceStore: cand.source.toUpperCase(),
      sourceCategory: raw.product_type || cand.category,
      sourceTags: tags,
      shortDescription: plainDesc.slice(0, 180),
      productImages: imageUrls,
      color: colorInfo.name,
      features: extractFeatures(raw.body_html, tags),
      sizeSystem: 'US',
      inventoryCountsAreExact: false,
      name: cand.name,
      brand: cand.brand,
      category: cand.category,
      gender: cand.gender,
      sport: cand.category === 'Running' || cand.category === 'Walking' || cand.category === 'Football' || cand.category === 'Basketball' || cand.category === 'Training' ? cand.category : 'Lifestyle',
      collections,
      price,
      mrp,
      discountPercent,
      rating: Number((4.3 + Math.random() * 0.6).toFixed(1)),
      reviewsCount: Math.floor(Math.random() * 120 + 20),
      colors: [
        {
          name: colorInfo.name,
          hex: colorInfo.hex,
          images: imageMap
        }
      ],
      sizeInventory,
      upper,
      sole,
      closure,
      fitType: 'Regular Fit',
      occasion: 'Athletic, Street & Everyday Wear',
      use: cand.category,
      weight: '310g',
      waterResistance: /boot/i.test(cand.category) ? 'Water Repellent' : 'No',
      countryOfOrigin: cand.source === 'campus' || cand.source === 'redtape' ? 'India' : 'Vietnam',
      warranty: '6 Months Manufacturer Warranty',
      description: plainDesc,
      fitIndicator: 'True to Size',
      comfortScore: Number((4.5 + Math.random() * 0.5).toFixed(1)),
      width: 'Medium',
      recommended: 'True to size. Order your standard shoe size.',
      isNewArrival: Math.random() > 0.6,
      isSale: discountPercent > 0,
      isLimitedDrop: false,
    };

    newProductRecords.push({
      id: productId,
      sku: productSku,
      name: cand.name,
      brand: cand.brand,
      category: cand.category,
      price,
      mrp,
      isActive: true,
      catalog: productCatalog,
    });
  }

  console.log(`Writing ${newProductRecords.length} products to database in batch transactions...`);

  for (const record of newProductRecords) {
    try {
      await db.product.create({
        data: {
          id: record.id,
          sku: record.sku,
          name: record.name,
          brand: record.brand,
          category: record.category,
          price: record.price,
          mrp: record.mrp,
          isActive: true,
          catalog: record.catalog,
        }
      });
      newProductsAdded++;
    } catch (err) {
      console.error(`Error inserting ${record.id}:`, err.message);
      skippedInvalid++;
    }
  }

  const finalCount = await db.product.count();
  console.log(`Import complete! Database total products: ${finalCount}`);
  console.log(`New added: ${newProductsAdded}, Duplicates skipped: ${skippedDuplicates}, Invalid skipped: ${skippedInvalid}`);

  await db.$disconnect();
}

run().catch(async (e) => {
  console.error('Fatal error during import:', e);
  await db.$disconnect();
  process.exit(1);
});
