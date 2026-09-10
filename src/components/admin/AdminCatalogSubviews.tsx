import React, { useState } from 'react';
import { Plus, Edit3, Trash2, Check, ArrowRight, Grid, Tag, Layers, Palette, Search, ShieldCheck } from 'lucide-react';
import { ShoeProduct, CategoryItem, BrandItem, CollectionItem } from '../../types';

interface CatalogSubviewsProps {
  section: 'CATEGORIES' | 'BRANDS' | 'COLLECTIONS' | 'SIZES_COLORS' | 'SKU_MATRIX';
  products: ShoeProduct[];
  onUpdateProductStock: (productId: string, colorName: string, size: string, newStock: number) => void;
  onShowToast: (msg: string) => void;
  onBackToProducts: () => void;
}

export const AdminCatalogSubviews: React.FC<CatalogSubviewsProps> = ({
  section,
  products,
  onUpdateProductStock,
  onShowToast,
  onBackToProducts,
}) => {
  // Categories State
  const [categories, setCategories] = useState<CategoryItem[]>([
    { id: 'cat-1', name: 'SNEAKERS', slug: 'sneakers', description: 'Architectural silhouette footwear with carbon core chassis', productCount: 18, isActive: true },
    { id: 'cat-2', name: 'BOOTS', slug: 'boots', description: 'Heavy-gauge combat derbies and minimal chelsea boots', productCount: 8, isActive: true },
    { id: 'cat-3', name: 'RUNNING', slug: 'running', description: 'Aerodynamic kinetic velocity trainers with nitrogen foam', productCount: 12, isActive: true },
    { id: 'cat-4', name: 'OUTERWEAR', slug: 'outerwear', description: 'Modular bonded membrane coats and technical shells', productCount: 6, isActive: true },
    { id: 'cat-5', name: 'FORMAL SHOES', slug: 'formal', description: 'Sculpted archival monkstraps and monolithic loafers', productCount: 4, isActive: true },
  ]);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');

  // Brands State
  const [brands, setBrands] = useState<BrandItem[]>([
    { id: 'br-1', name: 'VANTA ATELIER', country: 'Italy (Milan)', description: 'Primary in-house high-craft luxury monolithic laboratory', productCount: 36, isActive: true },
    { id: 'br-2', name: 'SALOMON ADVANCED', country: 'France (Annecy)', description: 'Technical alpine running collaborations & lab editions', productCount: 5, isActive: true },
    { id: 'br-3', name: 'NIKE ISPA', country: 'United States', description: 'Experimental improvisational athletic footwear specimens', productCount: 4, isActive: true },
    { id: 'br-4', name: 'NEW BALANCE TOKYO DESIGN', country: 'Japan (Tokyo)', description: 'Precision minimalist footwear prototypes', productCount: 3, isActive: true },
  ]);
  const [showAddBrandModal, setShowAddBrandModal] = useState(false);
  const [newBrandName, setNewBrandName] = useState('');
  const [newBrandCountry, setNewBrandCountry] = useState('Italy (Milan)');
  const [newBrandDesc, setNewBrandDesc] = useState('');

  // Collections State
  const [collections, setCollections] = useState<CollectionItem[]>([
    { id: 'col-1', name: 'ARCHIVAL SPECIMENS', tagline: 'Permanent Monolithic Vault Series 2024-2026', productCount: 22, status: 'ACTIVE' },
    { id: 'col-2', name: 'CHRONO NEW DROPS', tagline: 'Time-locked cryptographic releases', productCount: 8, status: 'ACTIVE' },
    { id: 'col-3', name: 'KINETIC VELOCITY', tagline: 'High-altitude carbon plate trail runners', productCount: 10, status: 'ACTIVE' },
    { id: 'col-4', name: 'STREETWEAR COUTURE', tagline: 'Architectural proportions for urban transit', productCount: 8, status: 'UPCOMING' },
  ]);
  const [showAddColModal, setShowAddColModal] = useState(false);
  const [newColName, setNewColName] = useState('');
  const [newColTagline, setNewColTagline] = useState('');

  // Sizes & Colors State
  const standardSizes = [
    { size: 'US 5.0', eu: 'EU 38', availability: 'ACTIVE', totalAllocated: 28 },
    { size: 'US 6.0', eu: 'EU 39', availability: 'ACTIVE', totalAllocated: 44 },
    { size: 'US 7.0', eu: 'EU 40', availability: 'ACTIVE', totalAllocated: 62 },
    { size: 'US 8.0', eu: 'EU 41', availability: 'ACTIVE', totalAllocated: 96 },
    { size: 'US 9.0', eu: 'EU 42.5', availability: 'ACTIVE', totalAllocated: 148 },
    { size: 'US 10.0', eu: 'EU 44', availability: 'ACTIVE', totalAllocated: 112 },
    { size: 'US 11.0', eu: 'EU 45', availability: 'ACTIVE', totalAllocated: 74 },
    { size: 'US 12.0', eu: 'EU 46', availability: 'ACTIVE', totalAllocated: 36 },
    { size: 'US 13.0', eu: 'EU 47.5', availability: 'ACTIVE', totalAllocated: 14 },
  ];

  const colorPalettes = [
    { name: 'TRAVERTINE CREAM', hex: '#F5F2EC', code: '-TC', specimensCount: 8 },
    { name: 'OBSIDIAN BLACK', hex: '#1A1A1A', code: '-OB', specimensCount: 14 },
    { name: 'RAW CLAY DESERT', hex: '#C29B7F', code: '-RC', specimensCount: 6 },
    { name: 'SANDSTONE MEMBRANE', hex: '#D8CFC4', code: '-SM', specimensCount: 5 },
    { name: 'PITCH OBSIDIAN', hex: '#0F0E0D', code: '-PO', specimensCount: 9 },
    { name: 'CHALK BONE', hex: '#EAE6DF', code: '-CB', specimensCount: 6 },
  ];

  // SKU Matrix state
  const [skuSearch, setSkuSearch] = useState('');

  // Handlers for Category
  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    const newCat: CategoryItem = {
      id: `cat-${Date.now()}`,
      name: newCatName.trim().toUpperCase(),
      slug: newCatName.trim().toLowerCase().replace(/\s+/g, '-'),
      description: newCatDesc.trim() || 'Archival footwear category division',
      productCount: 0,
      isActive: true,
    };
    setCategories([newCat, ...categories]);
    setShowAddCategoryModal(false);
    setNewCatName('');
    setNewCatDesc('');
    onShowToast(`CATEGORY CREATED: ${newCat.name}`);
  };

  const handleToggleCategoryStatus = (catId: string) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === catId ? { ...c, isActive: !c.isActive } : c))
    );
    onShowToast('CATEGORY STATUS UPDATED');
  };

  const handleDeleteCategory = (catId: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete category "${name}"?`)) {
      setCategories((prev) => prev.filter((c) => c.id !== catId));
      onShowToast(`CATEGORY DELETED: ${name}`);
    }
  };

  // Handlers for Brand
  const handleAddBrand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrandName.trim()) return;
    const newBrand: BrandItem = {
      id: `br-${Date.now()}`,
      name: newBrandName.trim().toUpperCase(),
      country: newBrandCountry.trim(),
      description: newBrandDesc.trim() || 'Verified footwear manufacturer partner',
      productCount: 0,
      isActive: true,
    };
    setBrands([newBrand, ...brands]);
    setShowAddBrandModal(false);
    setNewBrandName('');
    setNewBrandDesc('');
    onShowToast(`BRAND REGISTERED: ${newBrand.name}`);
  };

  const handleToggleBrandStatus = (brandId: string) => {
    setBrands((prev) =>
      prev.map((b) => (b.id === brandId ? { ...b, isActive: !b.isActive } : b))
    );
    onShowToast('BRAND STATUS TOGGLED');
  };

  const handleDeleteBrand = (brandId: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete brand "${name}"?`)) {
      setBrands((prev) => prev.filter((b) => b.id !== brandId));
      onShowToast(`BRAND DELETED: ${name}`);
    }
  };

  // Handlers for Collection
  const handleAddCollection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newColName.trim()) return;
    const newCol: CollectionItem = {
      id: `col-${Date.now()}`,
      name: newColName.trim().toUpperCase(),
      tagline: newColTagline.trim() || 'Atelier seasonal curation',
      productCount: 0,
      status: 'ACTIVE',
    };
    setCollections([newCol, ...collections]);
    setShowAddColModal(false);
    setNewColName('');
    setNewColTagline('');
    onShowToast(`COLLECTION CREATED: ${newCol.name}`);
  };

  const handleDeleteCollection = (colId: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete collection "${name}"?`)) {
      setCollections((prev) => prev.filter((c) => c.id !== colId));
      onShowToast(`COLLECTION DELETED: ${name}`);
    }
  };

  return (
    <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
      {/* Subview Top Navigation & Header */}
      <div>
        <div className="flex items-center justify-between font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          <span>ARCHIVE REGISTRY // {section}</span>
          <button
            onClick={onBackToProducts}
            className="text-[#1a1816] font-bold hover:underline cursor-pointer flex items-center gap-1"
          >
            ← BACK TO SPECIMENS
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              {section === 'CATEGORIES' && 'Category Taxonomy & Silhouettes'}
              {section === 'BRANDS' && 'Brand Partners & Atelier Labs'}
              {section === 'COLLECTIONS' && 'Curated Archival Collections'}
              {section === 'SIZES_COLORS' && 'Dimensional Matrix & Color Swatches'}
              {section === 'SKU_MATRIX' && 'Real-Time Multi-SKU Inventory Matrix'}
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1 max-w-2xl">
              {section === 'CATEGORIES' && 'Define, reorder, and structure the primary taxonomic classifications for the monolithic footwear archive.'}
              {section === 'BRANDS' && 'Manage verified atelier brand identities, provenance metadata, and production licensing origins.'}
              {section === 'COLLECTIONS' && 'Organize specimen drops into seasonal curations, time-locked series, and archival capsule editions.'}
              {section === 'SIZES_COLORS' && 'Audit dimensional grading standards across global sizing metrics and colorway formulation hex codes.'}
              {section === 'SKU_MATRIX' && 'Inline dimensional stock manager spanning all colorways and sizes with instant balance reallocation.'}
            </p>
          </div>

          <div className="font-mono text-[11px] shrink-0">
            {section === 'CATEGORIES' && (
              <button
                onClick={() => setShowAddCategoryModal(true)}
                className="px-4 py-2.5 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ ADD CATEGORY</span>
              </button>
            )}
            {section === 'BRANDS' && (
              <button
                onClick={() => setShowAddBrandModal(true)}
                className="px-4 py-2.5 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ REGISTER BRAND</span>
              </button>
            )}
            {section === 'COLLECTIONS' && (
              <button
                onClick={() => setShowAddColModal(true)}
                className="px-4 py-2.5 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ NEW COLLECTION</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ----------------- CATEGORIES VIEW ----------------- */}
      {section === 'CATEGORIES' && (
        <div className="border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-6 rounded-sm shadow-xs font-mono text-[11px] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
            <div className="font-bold text-[#1a1816] uppercase">
              REGISTERED TAXONOMY ({categories.length} CATEGORIES)
            </div>
            <div className="text-[10px] text-[#7b6e54]">ALL CATEGORIES ACTIVE IN PUBLIC FILTERS</div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#d5cdc0] text-[10px] text-[#7b6e54] tracking-widest uppercase">
                  <th className="py-2 px-3">CATEGORY NAME</th>
                  <th className="py-2 px-3">URL SLUG</th>
                  <th className="py-2 px-3">DESCRIPTION</th>
                  <th className="py-2 px-3">SPECIMENS</th>
                  <th className="py-2 px-3">STATUS</th>
                  <th className="py-2 px-3 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d5cdc0]/70">
                {categories.map((c) => (
                  <tr key={c.id} className="hover:bg-[#e4ddcf] transition-colors">
                    <td className="py-3 px-3 font-bold text-[#1a1816] uppercase">{c.name}</td>
                    <td className="py-3 px-3 text-[#7b6e54]">/{c.slug}</td>
                    <td className="py-3 px-3 text-[#59544c] max-w-xs truncate">{c.description}</td>
                    <td className="py-3 px-3 font-bold text-[#1a1816]">{c.productCount} Styles</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded-2xs ${
                          c.isActive ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#fee2e2] text-[#991b1b]'
                        }`}
                      >
                        {c.isActive ? 'ENABLED' : 'DISABLED'}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleToggleCategoryStatus(c.id)}
                          className="p-1 hover:bg-[#ded6c9] text-[#1a1816] text-[10px] font-bold underline cursor-pointer"
                        >
                          TOGGLE
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(c.id, c.name)}
                          className="p-1 text-[#991b1b] hover:bg-[#fee2e2] cursor-pointer"
                          title="Delete Category"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ----------------- BRANDS VIEW ----------------- */}
      {section === 'BRANDS' && (
        <div className="border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-6 rounded-sm shadow-xs font-mono text-[11px] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
            <div className="font-bold text-[#1a1816] uppercase">
              REGISTERED BRAND LABS &amp; ATELIERS ({brands.length})
            </div>
            <div className="text-[10px] text-[#7b6e54]">AUTHENTICATED LICENSING CERTIFICATES</div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#d5cdc0] text-[10px] text-[#7b6e54] tracking-widest uppercase">
                  <th className="py-2 px-3">BRAND NAME</th>
                  <th className="py-2 px-3">PROVENANCE ORIGIN</th>
                  <th className="py-2 px-3">DESCRIPTION</th>
                  <th className="py-2 px-3">SPECIMENS</th>
                  <th className="py-2 px-3">STATUS</th>
                  <th className="py-2 px-3 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d5cdc0]/70">
                {brands.map((b) => (
                  <tr key={b.id} className="hover:bg-[#e4ddcf] transition-colors">
                    <td className="py-3 px-3 font-bold text-[#1a1816] uppercase">{b.name}</td>
                    <td className="py-3 px-3 text-[#7b6e54]">{b.country}</td>
                    <td className="py-3 px-3 text-[#59544c] max-w-xs truncate">{b.description}</td>
                    <td className="py-3 px-3 font-bold text-[#1a1816]">{b.productCount} Styles</td>
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded-2xs ${
                          b.isActive ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#fee2e2] text-[#991b1b]'
                        }`}
                      >
                        {b.isActive ? 'ACTIVE' : 'INACTIVE'}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleToggleBrandStatus(b.id)}
                          className="p-1 hover:bg-[#ded6c9] text-[#1a1816] text-[10px] font-bold underline cursor-pointer"
                        >
                          TOGGLE
                        </button>
                        <button
                          onClick={() => handleDeleteBrand(b.id, b.name)}
                          className="p-1 text-[#991b1b] hover:bg-[#fee2e2] cursor-pointer"
                          title="Delete Brand"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ----------------- COLLECTIONS VIEW ----------------- */}
      {section === 'COLLECTIONS' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-[11px]">
          {collections.map((col) => (
            <div key={col.id} className="bg-[#ede7dd] border border-[#d5cdc0] p-5 space-y-3 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#d5cdc0]">
                <span className="font-bold text-[#1a1816] text-sm uppercase">{col.name}</span>
                <span className="px-2 py-0.5 bg-[#dcfce7] text-[#166534] font-bold text-[9px] uppercase">
                  {col.status}
                </span>
              </div>
              <p className="text-[#59544c] text-xs">{col.tagline}</p>
              <div className="flex items-center justify-between pt-2 text-[10px] text-[#7b6e54]">
                <span>{col.productCount} SPECIMENS CURATED</span>
                <button
                  onClick={() => handleDeleteCollection(col.id, col.name)}
                  className="text-[#991b1b] hover:underline flex items-center gap-1 cursor-pointer font-bold"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>DELETE</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ----------------- SIZES & COLORS VIEW ----------------- */}
      {section === 'SIZES_COLORS' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono text-[11px]">
          {/* Sizes Grading Matrix */}
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
              <div>
                <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
                  DIMENSIONAL ARCHIVE
                </div>
                <h3 className="font-headline text-xl font-bold text-[#1a1816]">
                  Standard Size Grading Matrix
                </h3>
              </div>
              <span className="px-2 py-0.5 bg-[#141312] text-[#f5efe6] text-[9px] font-bold">
                US / EU STANDARDS
              </span>
            </div>

            <div className="space-y-2">
              {standardSizes.map((sz) => (
                <div
                  key={sz.size}
                  className="bg-[#faf7f2] border border-[#d5cdc0] p-2.5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-[#1a1816] text-sm">{sz.size}</span>
                    <span className="text-[#7b6e54] text-[10px]">{sz.eu}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[#59544c] text-[10px]">{sz.totalAllocated} Units in Vault</span>
                    <span className="px-2 py-0.5 bg-[#dcfce7] text-[#166534] text-[9px] font-bold uppercase">
                      {sz.availability}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Palettes Library */}
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
              <div>
                <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
                  PIGMENT LIBRARY
                </div>
                <h3 className="font-headline text-xl font-bold text-[#1a1816]">
                  Archival Colorway Formulations
                </h3>
              </div>
              <span className="px-2 py-0.5 bg-[#141312] text-[#f5efe6] text-[9px] font-bold">
                {colorPalettes.length} FORMULATIONS
              </span>
            </div>

            <div className="space-y-2">
              {colorPalettes.map((c) => (
                <div
                  key={c.name}
                  className="bg-[#faf7f2] border border-[#d5cdc0] p-2.5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full border border-[#d5cdc0] shadow-2xs shrink-0"
                      style={{ backgroundColor: c.hex }}
                    ></span>
                    <div>
                      <div className="font-bold text-[#1a1816] text-xs uppercase">{c.name}</div>
                      <div className="text-[9px] text-[#7b6e54]">HEX: {c.hex} • SUFFIX: {c.code}</div>
                    </div>
                  </div>
                  <span className="text-[#59544c] text-[10px] font-bold">
                    {c.specimensCount} Master Styles
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ----------------- SKU MATRIX VIEW ----------------- */}
      {section === 'SKU_MATRIX' && (
        <div className="border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-6 rounded-sm shadow-xs font-mono text-[11px] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#d5cdc0]">
            <div>
              <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider font-bold">
                GLOBAL ATELIER INVENTORY
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#1a1816]">
                Master SKU Velocity &amp; Dimensional Stock Grid
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-[#faf7f2] border border-[#d5cdc0] px-3 py-1.5 min-w-[240px]">
              <Search className="w-3.5 h-3.5 text-[#7b6e54]" />
              <input
                type="text"
                value={skuSearch}
                onChange={(e) => setSkuSearch(e.target.value)}
                placeholder="Filter by SKU or Product..."
                className="bg-transparent border-none outline-none text-[#1a1816] text-[11px] font-mono w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            {products
              .filter((p) =>
                !skuSearch.trim() ||
                p.name.toLowerCase().includes(skuSearch.toLowerCase()) ||
                p.sku.toLowerCase().includes(skuSearch.toLowerCase())
              )
              .map((prod) => (
                <div key={prod.id} className="bg-[#faf7f2] border border-[#d5cdc0] p-4 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#d5cdc0]">
                    <div>
                      <span className="font-bold text-[#1a1816] text-sm uppercase">{prod.name}</span>
                      <span className="text-[#7b6e54] text-[10px] ml-2">MASTER SKU: {prod.sku} • ₹{prod.price.toLocaleString()}</span>
                    </div>
                    <span className="text-[#59544c] text-[10px] font-bold">
                      {prod.category.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {prod.colors.map((color) => {
                      const sizes = prod.sizeInventory[color.name] || [];
                      return (
                        <div key={color.name} className="p-2.5 bg-white border border-[#d5cdc0] space-y-2">
                          <div className="flex items-center justify-between text-[10px]">
                            <div className="flex items-center gap-2">
                              <span
                                className="w-3 h-3 rounded-full border border-[#d5cdc0]"
                                style={{ backgroundColor: color.hex }}
                              ></span>
                              <span className="font-bold text-[#1a1816] uppercase">{color.name}</span>
                            </div>
                            <span className="text-[#7b6e54]">
                              TOTAL: {sizes.reduce((sum, s) => sum + s.stock, 0)} PRS
                            </span>
                          </div>

                          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                            {sizes.map((sz) => (
                              <div
                                key={sz.size}
                                className={`border p-2 text-center flex flex-col justify-between ${
                                  sz.stock === 0
                                    ? 'bg-[#fee2e2] border-[#f87171] text-[#991b1b]'
                                    : sz.stock <= 3
                                    ? 'bg-[#fffbeb] border-[#fde68a] text-[#b45309]'
                                    : 'bg-[#faf7f2] border-[#d5cdc0] text-[#1a1816]'
                                }`}
                              >
                                <div className="text-[9px] text-[#7b6e54] font-bold">US {sz.size}</div>
                                <div className="my-1 flex items-center justify-center gap-1 font-mono">
                                  <button
                                    onClick={() =>
                                      onUpdateProductStock(prod.id, color.name, sz.size, Math.max(0, sz.stock - 1))
                                    }
                                    className="w-4 h-4 bg-[#ede7dd] hover:bg-[#d5cdc0] font-bold text-[9px] cursor-pointer"
                                  >
                                    -
                                  </button>
                                  <span className="font-bold text-sm px-1">{sz.stock}</span>
                                  <button
                                    onClick={() =>
                                      onUpdateProductStock(prod.id, color.name, sz.size, sz.stock + 1)
                                    }
                                    className="w-4 h-4 bg-[#ede7dd] hover:bg-[#d5cdc0] font-bold text-[9px] cursor-pointer"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="text-[8px] uppercase tracking-wider font-bold">
                                  {sz.stock === 0 ? 'DEPLETED' : sz.stock <= 3 ? 'LOW STOCK' : 'OPTIMAL'}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showAddCategoryModal && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-md w-full p-6 font-mono text-xs shadow-2xl space-y-4">
            <h3 className="font-headline text-xl font-bold text-[#1a1816]">Create New Category</h3>
            <form onSubmit={handleAddCategory} className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  CATEGORY NAME *
                </label>
                <input
                  type="text"
                  required
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder="e.g. SLIPPERS &amp; MULES"
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  DESCRIPTION
                </label>
                <textarea
                  value={newCatDesc}
                  onChange={(e) => setNewCatDesc(e.target.value)}
                  rows={3}
                  placeholder="Architectural classification details..."
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                />
              </div>
              <div className="pt-3 flex justify-end gap-2 border-t border-[#d5cdc0]">
                <button
                  type="button"
                  onClick={() => setShowAddCategoryModal(false)}
                  className="px-3 py-1.5 uppercase font-bold text-[10px] text-[#59544c]"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px]"
                >
                  CREATE CATEGORY
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Brand Modal */}
      {showAddBrandModal && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-md w-full p-6 font-mono text-xs shadow-2xl space-y-4">
            <h3 className="font-headline text-xl font-bold text-[#1a1816]">Register Brand Partner</h3>
            <form onSubmit={handleAddBrand} className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  BRAND / ATELIER NAME *
                </label>
                <input
                  type="text"
                  required
                  value={newBrandName}
                  onChange={(e) => setNewBrandName(e.target.value)}
                  placeholder="e.g. ADIDAS Y-3"
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none uppercase"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  PROVENANCE ORIGIN
                </label>
                <input
                  type="text"
                  value={newBrandCountry}
                  onChange={(e) => setNewBrandCountry(e.target.value)}
                  placeholder="e.g. Germany (Herzogenaurach)"
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  DESCRIPTION
                </label>
                <textarea
                  value={newBrandDesc}
                  onChange={(e) => setNewBrandDesc(e.target.value)}
                  rows={2}
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                />
              </div>
              <div className="pt-3 flex justify-end gap-2 border-t border-[#d5cdc0]">
                <button
                  type="button"
                  onClick={() => setShowAddBrandModal(false)}
                  className="px-3 py-1.5 uppercase font-bold text-[10px] text-[#59544c]"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px]"
                >
                  REGISTER BRAND
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Collection Modal */}
      {showAddColModal && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-md w-full p-6 font-mono text-xs shadow-2xl space-y-4">
            <h3 className="font-headline text-xl font-bold text-[#1a1816]">Create Archival Collection</h3>
            <form onSubmit={handleAddCollection} className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  COLLECTION TITLE *
                </label>
                <input
                  type="text"
                  required
                  value={newColName}
                  onChange={(e) => setNewColName(e.target.value)}
                  placeholder="e.g. MONOLITH RESIN EXPERIMENTS"
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none uppercase"
                />
              </div>
              <div>
                <label className="block text-[9px] font-bold uppercase text-[#1a1816] mb-1">
                  CURATION TAGLINE
                </label>
                <input
                  type="text"
                  value={newColTagline}
                  onChange={(e) => setNewColTagline(e.target.value)}
                  placeholder="e.g. Limited 100-pair global casting series"
                  className="w-full bg-white border border-[#d5cdc0] p-2 text-[11px] font-mono outline-none"
                />
              </div>
              <div className="pt-3 flex justify-end gap-2 border-t border-[#d5cdc0]">
                <button
                  type="button"
                  onClick={() => setShowAddColModal(false)}
                  className="px-3 py-1.5 uppercase font-bold text-[10px] text-[#59544c]"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px]"
                >
                  SAVE COLLECTION
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
