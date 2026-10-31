import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const db = new PrismaClient();
const dbProducts = await db.product.findMany();

const rawCatalog = fs.readFileSync('src/data/footwearCatalog.ts', 'utf8');
const fileMatches = rawCatalog.match(/"id":\s*"/g) || [];
console.log('Database product count:', dbProducts.length);
console.log('INITIAL_PRODUCTS file product count:', fileMatches.length);

// Check duplicate IDs and SKUs
const ids = new Set();
const skus = new Set();
let dupId = 0, dupSku = 0;
for (const p of dbProducts) {
  if (ids.has(p.id)) dupId++;
  ids.add(p.id);
  if (skus.has(p.sku.toLowerCase())) dupSku++;
  skus.add(p.sku.toLowerCase());
}
console.log('Duplicate IDs in DB:', dupId, 'Duplicate SKUs in DB:', dupSku);

// Check required fields
let missingRequired = 0;
for (const p of dbProducts) {
  const cat = p.catalog;
  if (!cat.id || !cat.name || !cat.brand || !cat.category || !cat.price || !cat.colors || !cat.sizeInventory) {
    missingRequired++;
  }
}
console.log('Missing required fields count:', missingRequired);

// Verify image URLs sample
const sampleImages = [];
for (const p of dbProducts.slice(0, 30)) {
  const front = p.catalog?.colors?.[0]?.images?.front;
  if (front && front.startsWith('http')) sampleImages.push(front);
}

console.log(`Checking ${sampleImages.length} sample CDN image URLs for 200 HTTP status...`);
let validImages = 0;
let invalidImages = 0;

for (const img of sampleImages) {
  try {
    const res = await fetch(img, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (res.ok) validImages++;
    else invalidImages++;
  } catch {
    invalidImages++;
  }
}

console.log(`Image URL verification: ${validImages} valid, ${invalidImages} invalid out of ${sampleImages.length} tested.`);

// Category breakdown
const catBreakdown = {};
for (const p of dbProducts) {
  catBreakdown[p.category] = (catBreakdown[p.category] || 0) + 1;
}
console.log('Category breakdown:', catBreakdown);

// Gender breakdown
const genderBreakdown = {};
for (const p of dbProducts) {
  genderBreakdown[p.catalog.gender] = (genderBreakdown[p.catalog.gender] || 0) + 1;
}
console.log('Gender breakdown:', genderBreakdown);

// Brand breakdown
const brandBreakdown = {};
for (const p of dbProducts) {
  brandBreakdown[p.brand] = (brandBreakdown[p.brand] || 0) + 1;
}
console.log('Brand breakdown:', brandBreakdown);

await db.$disconnect();
