import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const db = new PrismaClient();
const products = await db.product.findMany({
  orderBy: { createdAt: 'desc' }
});

console.log(`Fetched ${products.length} products from DB.`);

// Extract catalog json from each
const catalogProducts = products.map(p => p.catalog);

// Read current footwearCatalog.ts up to INITIAL_PRODUCTS
const currentFile = fs.readFileSync('src/data/footwearCatalog.ts', 'utf8');
const marker = 'export const INITIAL_PRODUCTS: ShoeProduct[] = ';
const markerIdx = currentFile.indexOf(marker);

const endMarker = 'export const INITIAL_DROPS: SneakerDrop[] = ';
const endIdx = currentFile.indexOf(endMarker);

if (markerIdx === -1 || endIdx === -1) {
  console.error('Markers not found!');
  process.exit(1);
}

const before = currentFile.slice(0, markerIdx + marker.length);
const after = currentFile.slice(endIdx);

const updatedContent = `${before}${JSON.stringify(catalogProducts, null, 2)};\n\n${after}`;

fs.writeFileSync('src/data/footwearCatalog.ts', updatedContent, 'utf8');
console.log('Successfully updated src/data/footwearCatalog.ts with all 206 products!');

await db.$disconnect();
