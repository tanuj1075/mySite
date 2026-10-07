import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { INITIAL_COUPONS, INITIAL_DROPS, INITIAL_FOOTWEAR_CATALOG } from '../src/data/footwearCatalog.js';

const prisma = new PrismaClient();
async function main() {
  const configuredAdminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!configuredAdminEmail || !adminPassword || adminPassword.length < 12) {
    throw new Error('Set ADMIN_EMAIL and an ADMIN_PASSWORD of at least 12 characters before seeding');
  }
  const adminEmail = configuredAdminEmail.toLowerCase();
  const adminPasswordHash = await bcrypt.hash(adminPassword, 12);
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { name: 'VANTA ADMIN', role: 'ADMIN', passwordHash: adminPasswordHash },
    create: { email: adminEmail, name: 'VANTA ADMIN', role: 'ADMIN', passwordHash: adminPasswordHash },
  });
  for (const product of INITIAL_FOOTWEAR_CATALOG) await prisma.product.upsert({ where: { id: product.id }, update: { catalog: product as object, price: product.price, mrp: product.mrp, name: product.name, brand: product.brand, category: product.category, sku: product.sku }, create: { id: product.id, sku: product.sku, name: product.name, brand: product.brand, category: product.category, price: product.price, mrp: product.mrp, catalog: product as object } });
  for (const coupon of INITIAL_COUPONS) await prisma.coupon.upsert({ where: { code: coupon.code }, update: {}, create: { code: coupon.code, discountPercent: coupon.discountPercent, minOrderValue: coupon.minOrderValue, maxDiscount: coupon.maxDiscount, description: coupon.description, isActive: coupon.isActive } });
  for (const drop of INITIAL_DROPS) await prisma.sneakerDrop.upsert({ where: { id: drop.id }, update: {}, create: drop });
  console.log(`Seeded ${INITIAL_FOOTWEAR_CATALOG.length} products, ${INITIAL_COUPONS.length} coupons, and ${INITIAL_DROPS.length} drops`);
}
main().finally(() => prisma.$disconnect());