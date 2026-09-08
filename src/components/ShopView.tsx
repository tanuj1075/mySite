import React, { useState } from 'react';
import { ShoppingBag, Eye, Filter, ArrowRight, Shield } from 'lucide-react';
import { CartItem } from '../types';

interface ShopViewProps {
  onAddToCart: (item: CartItem) => void;
  onOpenInspect: (item: CartItem) => void;
  onShowToast: (msg: string) => void;
}

const CATALOG_ITEMS: CartItem[] = [
  {
    id: 'vn-runner-01',
    code: 'RUNNER_01',
    name: 'X-01 CORE RUNNER',
    edition: 'PERMANENT TECH / 001',
    price: 480,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ThghKA86_Q_fCtpbOYWUAXmvMm4Kf4vgJ-95R0P-GQ7-54iwFQ62OpUehTva7Lrre3Ck5BjdqT7PUtCCGH_Wwz9Qk1N3F51WG23E6k-tKfVRluMWnTRRYRy6YduVh0jcNpwIPzJKKLLQNu5rPsw0IaxUNhwzkbSAvw_vY21enZZWo4B3GBLdESGfe0zbL-6o1u1T3qeO9zjOjR-QtFgx4y4HeU92YYx41_HJVG_A7dJiUenDyx1z',
    colorway: 'Obsidian Black',
    specification: 'US 10 / EU 44',
    availableSizes: [
      'US 8 / EU 41',
      'US 9 / EU 42.5',
      'US 10 / EU 44',
      'US 11 / EU 45',
      'US 12 / EU 46',
    ],
    allocationStatus: 'Allocation Secured // Vault Unit',
    quantity: 1,
  },
  {
    id: 'vn-derby-02',
    code: 'DERBY_02',
    name: 'SLATE PERFORMANCE DERBY',
    edition: 'EXPERIMENTAL HYBRID / 084',
    price: 540,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWMpXigzxhdIj1RlXkSXShH02NkcBTQuHgMX7b0Nqjm7EvezUQ0KbjyOK66K9tVk320d99qSb50XSUNKoMQVqSfwaxgbaJEHOe3fdwMmVGF97JYyglufvqM17P4F-i8wIwjsRUD8PVyzT5DLe7dUh3RfAtmzgtXQnrF4ub_fdckepg3UFGcZxgTHleFP-RZmYcLCVtRlHdzHFdsrKmvKg-c4k4Unv66kyNq1CFowryTIy5fRVfkcjF',
    colorway: 'Slate Grey / Noir',
    specification: 'US 9 / EU 42.5',
    availableSizes: ['US 8 / EU 41', 'US 9 / EU 42.5', 'US 10 / EU 44', 'US 11 / EU 45'],
    allocationStatus: 'Allocation Secured // 1 Unit Remaining',
    quantity: 1,
  },
  {
    id: 'vn-void-runner',
    code: 'VOID_02',
    name: 'VOID RUNNER SPEC 02',
    edition: 'LIMITED RUN / 500 UNITS',
    price: 590,
    image: '/src/assets/images/void_runner_heel_1788838329834.jpg',
    colorway: 'Carbon Void',
    specification: 'US 10 / EU 44',
    availableSizes: ['US 9 / EU 42.5', 'US 10 / EU 44', 'US 11 / EU 45'],
    allocationStatus: 'Active Drop // Small Batch',
    quantity: 1,
  },
  {
    id: 'vn-kinesis-x01',
    code: 'KINESIS_01',
    name: 'KINESIS ZERO MONOLITH',
    edition: 'ARCHIVAL DROP / VAULTED',
    price: 640,
    image: '/src/assets/images/kinesis_zero_shoe_1788838347108.jpg',
    colorway: 'Bone / Raw Carbon',
    specification: 'US 10 / EU 44',
    availableSizes: ['US 9.5 / EU 43', 'US 10 / EU 44', 'US 10.5 / EU 44.5'],
    allocationStatus: 'Tier-1 Curated Access Only',
    quantity: 1,
  },
  {
    id: 'vn-shell-01',
    code: 'SHELL_01',
    name: 'VANTA MODULAR SHELL 01',
    edition: '3L CORDURA / CHAPTER 04',
    price: 680,
    image: '/src/assets/images/modular_shell_jacket_1788838380925.jpg',
    colorway: 'Carbon Noir',
    specification: 'Size Large / 50',
    availableSizes: ['Size S / 46', 'Size M / 48', 'Size L / 50', 'Size XL / 52'],
    allocationStatus: 'In Stock // 4 Units',
    quantity: 1,
  },
  {
    id: 'vn-hoodie-01',
    code: 'HOODIE_01',
    name: 'BRUTALIST ARCHIVAL HOODIE',
    edition: '600GSM DENSE WEAVE / CHAPTER 04',
    price: 340,
    image: '/src/assets/images/brutalist_hoodie_model_1788838400495.jpg',
    colorway: 'Washed Graphite',
    specification: 'Size Oversized 2',
    availableSizes: ['Size 1 (S-M)', 'Size 2 (L-XL)', 'Size 3 (XXL)'],
    allocationStatus: 'In Stock // High Demand',
    quantity: 1,
  },
];

export const ShopView: React.FC<ShopViewProps> = ({
  onAddToCart,
  onOpenInspect,
  onShowToast,
}) => {
  const [filter, setFilter] = useState<string>('ALL');
  const [sortOption, setSortOption] = useState<string>('FEATURED');

  const filteredItems = CATALOG_ITEMS.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'FOOTWEAR') return item.code.includes('RUNNER') || item.code.includes('DERBY') || item.code.includes('KINESIS') || item.code.includes('VOID');
    if (filter === 'OUTERWEAR') return item.code.includes('SHELL') || item.code.includes('HOODIE');
    return true;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOption === 'PRICE_LOW') return a.price - b.price;
    if (sortOption === 'PRICE_HIGH') return b.price - a.price;
    return 0;
  });

  return (
    <div className="w-full bg-[#ede7dd] text-[#1a1816] font-mono pb-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pt-8">
        {/* Header Title & Breadcrumb */}
        <div className="border-b border-[#d5cdc0] pb-8 mb-8">
          <div className="flex items-center gap-2 text-[10px] text-[#7b6e54] uppercase tracking-[0.2em] mb-4 font-bold">
            <span className="w-1.5 h-1.5 bg-[#1a1816] inline-block"></span>
            <span>INDEX REGISTRY // COMPREHENSIVE HARDWARE CATALOG</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-[#1a1816] leading-none mb-4">
                CATALOG
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#59544c] max-w-2xl leading-relaxed">
                Direct manufacturing allocations. Selected footwear and technical outerwear
                calibrated for rigorous architectural utility.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[10px] text-[#59544c] uppercase font-bold">SORT:</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] text-[10px] px-3 py-2 font-mono uppercase focus:outline-none focus:border-[#1a1816] cursor-pointer"
              >
                <option value="FEATURED">FEATURED CANON</option>
                <option value="PRICE_HIGH">PRICE: HIGHEST FIRST</option>
                <option value="PRICE_LOW">PRICE: LOWEST FIRST</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#d5cdc0] text-[10px]">
          <span className="text-[#7b6e54] mr-2 uppercase tracking-wider font-bold">CATEGORY:</span>
          {['ALL', 'FOOTWEAR', 'OUTERWEAR'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 uppercase tracking-wider transition-colors cursor-pointer border ${
                filter === cat
                  ? 'bg-[#1a1816] text-[#ede7dd] border-[#1a1816] font-bold'
                  : 'bg-[#f5efe6] text-[#59544c] border-[#d5cdc0] hover:text-[#1a1816] hover:border-[#1a1816]'
              }`}
            >
              {cat} [{cat === 'ALL' ? CATALOG_ITEMS.length : cat === 'FOOTWEAR' ? 4 : 2}]
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedItems.map((item) => (
            <div
              key={item.id}
              className="border border-[#d5cdc0] bg-[#f5efe6] p-6 flex flex-col justify-between group hover:border-[#1a1816] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4 text-[10px]">
                  <span className="text-[#59544c] tracking-widest font-bold">{item.code}</span>
                  <span className="text-[#1a1816] font-bold">${item.price.toFixed(2)}</span>
                </div>

                <div className="relative aspect-[4/3] bg-[#ede7dd] border border-[#d5cdc0] overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-2 left-2 bg-[#ede7dd]/90 border border-[#d5cdc0] px-2 py-0.5 text-[9px] text-[#7b6e54] font-bold">
                    {item.edition}
                  </div>
                </div>

                <h3 className="font-headline text-xl font-bold uppercase text-[#1a1816] tracking-tight mb-2">
                  {item.name}
                </h3>

                <div className="flex items-center justify-between text-[10px] text-[#59544c] mb-6">
                  <span>COLORWAY: <strong className="text-[#1a1816]">{item.colorway}</strong></span>
                  <span>SPEC: <strong className="text-[#1a1816]">{item.specification}</strong></span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#d5cdc0]">
                <button
                  onClick={() => onOpenInspect(item)}
                  className="py-2.5 bg-[#ede7dd] hover:bg-[#e4ddcf] text-[#1a1816] border border-[#d5cdc0] hover:border-[#1a1816] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>INSPECT</span>
                </button>

                <button
                  onClick={() => {
                    onAddToCart(item);
                    onShowToast(`ALLOCATION CLAIMED: ${item.name}`);
                  }}
                  className="py-2.5 bg-[#141312] hover:bg-[#35322e] text-[#f5efe6] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ADD TO BAG</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
