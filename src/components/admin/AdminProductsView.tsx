import React, { useState, useEffect } from 'react';
import { Download, Plus, Search, Edit3, Grid, ArrowUpDown, ChevronDown, Check, AlertCircle, Trash2 } from 'lucide-react';
import { ShoeProduct } from '../../types';
import { AdminCatalogSubviews } from './AdminCatalogSubviews';

interface SpecimenRegistryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  basePrice: number;
  totalStock: number;
  variantsText: string;
  status: 'ACTIVE' | 'CRITICAL' | 'DRAFT' | 'ARCHIVED';
  lastSynchronized: string;
  image: string;
  colorways: {
    name: string;
    code: string;
    skuSuffix: string;
    totalAvailable: number;
    sizes: {
      size: string;
      stock: number;
      label?: string;
    }[];
  }[];
}

const INITIAL_SPECIMENS: SpecimenRegistryItem[] = [
  {
    id: 'vnt-x01-core',
    name: 'X-01 CORE ARCHITECTURAL RUNNER',
    sku: 'VNT-X01-COR-00',
    category: 'SNEAKERS',
    basePrice: 42500,
    totalStock: 84,
    variantsText: '2 Clrs / 16 SKUs',
    status: 'ACTIVE',
    lastSynchronized: '12 MINS AGO',
    image: '/src/assets/images/cream_runner_pedestal_1788842341279.jpg',
    colorways: [
      {
        name: 'COLORWAY: TRAVERTINE CREAM',
        code: '#F5F2EC',
        skuSuffix: '-TC',
        totalAvailable: 54,
        sizes: [
          { size: 'US 5.0', stock: 4, label: 'IN STOCK' },
          { size: 'US 6.0', stock: 8, label: 'IN STOCK' },
          { size: 'US 7.0', stock: 0, label: 'DEPLETED' },
          { size: 'US 8.0', stock: 14, label: 'IN STOCK' },
          { size: 'US 9.0', stock: 18, label: 'OPTIMAL' },
          { size: 'US 10.0', stock: 12, label: 'IN STOCK' },
          { size: 'US 11.0', stock: 4, label: 'LOW STOCK' },
          { size: 'US 12.0', stock: 2, label: 'CRITICAL' },
        ],
      },
      {
        name: 'COLORWAY: OBSIDIAN BLACK',
        code: '#1A1A1A',
        skuSuffix: '-OB',
        totalAvailable: 30,
        sizes: [
          { size: 'US 5.0', stock: 2, label: 'CRITICAL' },
          { size: 'US 6.0', stock: 4, label: 'IN STOCK' },
          { size: 'US 7.0', stock: 5, label: 'IN STOCK' },
          { size: 'US 8.0', stock: 6, label: 'IN STOCK' },
          { size: 'US 9.0', stock: 7, label: 'IN STOCK' },
          { size: 'US 10.0', stock: 3, label: 'LOW STOCK' },
          { size: 'US 11.0', stock: 0, label: 'DEPLETED' },
          { size: 'US 12.0', stock: 3, label: 'LOW STOCK' },
        ],
      },
    ],
  },
  {
    id: 'vnt-m04-derby',
    name: 'M-04 MONOLITHIC COMBAT DERBY',
    sku: 'VNT-M04-DER-01',
    category: 'FOOTWEAR',
    basePrice: 58000,
    totalStock: 32,
    variantsText: '1 Clr / 8 SKUs',
    status: 'ACTIVE',
    lastSynchronized: '1 HR AGO',
    image: '/src/assets/images/void_shadow_low_1788838363234.jpg',
    colorways: [
      {
        name: 'COLORWAY: PITCH OBSIDIAN',
        code: '#0F0E0D',
        skuSuffix: '-PO',
        totalAvailable: 32,
        sizes: [
          { size: 'US 6.0', stock: 2, label: 'LOW STOCK' },
          { size: 'US 7.0', stock: 6, label: 'IN STOCK' },
          { size: 'US 8.0', stock: 8, label: 'IN STOCK' },
          { size: 'US 9.0', stock: 8, label: 'OPTIMAL' },
          { size: 'US 10.0', stock: 5, label: 'IN STOCK' },
          { size: 'US 11.0', stock: 3, label: 'LOW STOCK' },
        ],
      },
    ],
  },
  {
    id: 'vnt-a09-trainer',
    name: 'A-09 KINETIC VELOCITY TRAINER',
    sku: 'VNT-A09-TRN-99',
    category: 'RUNNING',
    basePrice: 36000,
    totalStock: 6,
    variantsText: '3 Clrs / 24 SKUs',
    status: 'CRITICAL',
    lastSynchronized: '3 HRS AGO',
    image: '/src/assets/images/taupe_runner_pedestal_1788842355799.jpg',
    colorways: [
      {
        name: 'COLORWAY: RAW CLAY // DESERT',
        code: '#C29B7F',
        skuSuffix: '-RC',
        totalAvailable: 6,
        sizes: [
          { size: 'US 7.0', stock: 0, label: 'DEPLETED' },
          { size: 'US 8.0', stock: 1, label: 'CRITICAL' },
          { size: 'US 9.0', stock: 2, label: 'CRITICAL' },
          { size: 'US 10.0', stock: 3, label: 'LOW STOCK' },
          { size: 'US 11.0', stock: 0, label: 'DEPLETED' },
        ],
      },
    ],
  },
  {
    id: 'vnt-k02-coat',
    name: 'K-02 ARCHITECTURAL STORM COAT',
    sku: 'VNT-K02-COT-12',
    category: 'OUTERWEAR',
    basePrice: 86000,
    totalStock: 19,
    variantsText: '2 Clrs / 8 SKUs',
    status: 'ACTIVE',
    lastSynchronized: 'YESTERDAY',
    image: '/src/assets/images/modular_shell_jacket_1788838380925.jpg',
    colorways: [
      {
        name: 'COLORWAY: SANDSTONE MEMBRANE',
        code: '#D8CFC4',
        skuSuffix: '-SM',
        totalAvailable: 19,
        sizes: [
          { size: 'SIZE 1 (S)', stock: 4, label: 'IN STOCK' },
          { size: 'SIZE 2 (M)', stock: 8, label: 'OPTIMAL' },
          { size: 'SIZE 3 (L)', stock: 5, label: 'IN STOCK' },
          { size: 'SIZE 4 (XL)', stock: 2, label: 'CRITICAL' },
        ],
      },
    ],
  },
  {
    id: 'vnt-prt-mule',
    name: 'PROTOTYPE // 3D-LATTICE MULE',
    sku: 'VNT-PRT-LAT-00',
    category: 'FOOTWEAR',
    basePrice: 48000,
    totalStock: 0,
    variantsText: 'Pending CAD',
    status: 'DRAFT',
    lastSynchronized: '3 DAYS AGO',
<<<<<<< HEAD
    image: '/src/assets/images/kinesis_zero_shoe_1788838347108.jpg',
=======
    image: '/src/assets/images/kinesis_zero_shoe_17888347108.jpg',
>>>>>>> f06a4a73293268b8c14a582969c92981c4dabe61
    colorways: [],
  },
  {
    id: 'vnt-c01-chelsea',
    name: 'C-01 MINIMALIST CHELSEA BOOT',
    sku: 'VNT-C01-BLK-22',
    category: 'FOOTWEAR',
    basePrice: 52000,
    totalStock: 0,
    variantsText: 'Vaulted',
    status: 'ARCHIVED',
    lastSynchronized: '14 DAYS AGO',
    image: '/src/assets/images/core_silhouettes_shoe_1788838314612.jpg',
    colorways: [],
  },
];

interface AdminProductsViewProps {
  products: ShoeProduct[];
  onAddNewProduct: (product: ShoeProduct) => void;
  onUpdateProductStock: (productId: string, colorName: string, size: string, newStock: number) => void;
  onDeleteProduct?: (productId: string) => void;
  onUpdateProduct?: (product: ShoeProduct) => void;
  onShowToast: (msg: string) => void;
  activeSection?: string;
  onSelectSection?: (section: any) => void;
}

export const AdminProductsView: React.FC<AdminProductsViewProps> = ({
  products,
  onAddNewProduct,
  onUpdateProductStock,
  onDeleteProduct,
  onUpdateProduct,
  onShowToast,
  activeSection,
  onSelectSection,
}) => {
  // If user navigated to a catalog subview, render high-precision subview
  if (
    activeSection === 'CATEGORIES' ||
    activeSection === 'BRANDS' ||
    activeSection === 'COLLECTIONS' ||
    activeSection === 'SIZES_COLORS' ||
    activeSection === 'SKU_MATRIX'
  ) {
    return (
      <AdminCatalogSubviews
        section={activeSection}
        products={products}
        onUpdateProductStock={onUpdateProductStock}
        onShowToast={onShowToast}
        onBackToProducts={() => {
          if (onSelectSection) onSelectSection('PRODUCTS');
        }}
      />
    );
  }

  // Convert ShoeProduct[] into SpecimenRegistryItem[] seamlessly while preserving detailed colorways
  const buildInitialSpecimens = (): SpecimenRegistryItem[] => {
    const catalogSpecimens: SpecimenRegistryItem[] = products.map((prod) => {
      const colorways = prod.colors.map((c, idx) => {
        const sizesInStock = prod.sizeInventory[c.name] || [
          { size: 'US 7.0', stock: 4, sku: `${prod.sku}-${idx}-07` },
          { size: 'US 8.0', stock: 8, sku: `${prod.sku}-${idx}-08` },
          { size: 'US 9.0', stock: 12, sku: `${prod.sku}-${idx}-09` },
          { size: 'US 10.0', stock: 6, sku: `${prod.sku}-${idx}-10` },
          { size: 'US 11.0', stock: 2, sku: `${prod.sku}-${idx}-11` },
        ];
        const formattedSizes = sizesInStock.map((s) => {
          let label = 'IN STOCK';
          if (s.stock === 0) label = 'DEPLETED';
          else if (s.stock <= 2) label = 'CRITICAL';
          else if (s.stock <= 4) label = 'LOW STOCK';
          else if (s.stock >= 10) label = 'OPTIMAL';
          return {
            size: s.size.startsWith('US') ? s.size : `${prod.sizeSystem ?? 'US'} ${s.size}`,
            stock: s.stock,
            label,
          };
        });
        return {
          name: `COLORWAY: ${c.name.toUpperCase()}`,
          code: c.hex,
          skuSuffix: `-${c.name.substring(0, 2).toUpperCase()}`,
          totalAvailable: formattedSizes.reduce((sum, item) => sum + item.stock, 0),
          sizes: formattedSizes,
        };
      });

      const totalStock = colorways.reduce((sum, cw) => sum + cw.totalAvailable, 0);

      return {
        id: prod.id,
        name: prod.name,
        sku: prod.sku,
        category: prod.category.toUpperCase(),
        basePrice: prod.price,
        totalStock,
        variantsText: `${colorways.length} Clr${colorways.length > 1 ? 's' : ''} / ${colorways.reduce(
          (acc, cw) => acc + cw.sizes.length,
          0
        )} SKUs`,
        status: totalStock === 0 ? 'DRAFT' : totalStock <= 6 ? 'CRITICAL' : 'ACTIVE',
        lastSynchronized: 'SYNCED LIVE',
        image: prod.colors[0]?.images.front || '/src/assets/images/cream_runner_pedestal_1788842341279.jpg',
        colorways,
      };
    });

    // Merge with any unique INITIAL_SPECIMENS that aren't already in products
    const existingIds = new Set(catalogSpecimens.map((s) => s.id));
    const extraInitials = INITIAL_SPECIMENS.filter((s) => !existingIds.has(s.id));
    return [...catalogSpecimens, ...extraInitials];
  };

  const [specimens, setSpecimens] = useState<SpecimenRegistryItem[]>(buildInitialSpecimens);

  // Sync specimens when products prop updates
  useEffect(() => {
    setSpecimens(buildInitialSpecimens());
  }, [products]);

  const [focalSpecimenId, setFocalSpecimenId] = useState<string>(
    products[0]?.id || 'vnt-x01-core'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL SPECIMENS');
  const [selectedStockLevel, setSelectedStockLevel] = useState('ALL STOCK LEVELS');
  const [selectedAtelier, setSelectedAtelier] = useState('ALL ATELIERS');
  const [sortOrder, setSortOrder] = useState<'DATE' | 'STOCK_LOW' | 'PRICE_HIGH' | 'NAME'>('DATE');

  // New specimen modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newName, setNewName] = useState('');
  const [newSku, setNewSku] = useState('');
  const [newCategory, setNewCategory] = useState('SNEAKERS');
  const [newPrice, setNewPrice] = useState('44000');

  // Edit specimen modal
  const [editingSpecimen, setEditingSpecimen] = useState<SpecimenRegistryItem | null>(null);
  const [editName, setEditName] = useState('');
  const [editSku, setEditSku] = useState('');
  const [editCategory, setEditCategory] = useState('SNEAKERS');
  const [editPrice, setEditPrice] = useState('');
  const [editStatus, setEditStatus] = useState<'ACTIVE' | 'CRITICAL' | 'DRAFT' | 'ARCHIVED'>('ACTIVE');

  // Delete confirmation modal state
  const [deletingSpecimen, setDeletingSpecimen] = useState<SpecimenRegistryItem | null>(null);

  const handleConfirmDelete = () => {
    if (!deletingSpecimen) return;
    if (onDeleteProduct) {
      onDeleteProduct(deletingSpecimen.id);
    }
    setSpecimens((prev) => prev.filter((s) => s.id !== deletingSpecimen.id));
    if (focalSpecimenId === deletingSpecimen.id) {
      const remaining = specimens.filter((s) => s.id !== deletingSpecimen.id);
      if (remaining[0]) setFocalSpecimenId(remaining[0].id);
    }
    onShowToast(`SPECIMEN PERMANENTLY REMOVED: ${deletingSpecimen.name} [${deletingSpecimen.sku}]`);
    setDeletingSpecimen(null);
  };

  // Update focal specimen if not present
  const focalSpecimen =
    specimens.find((s) => s.id === focalSpecimenId) || specimens[0];

  const handleAdjustStock = (
    specimenId: string,
    colorIndex: number,
    sizeIndex: number,
    delta: number
  ) => {
    setSpecimens((prev) =>
      prev.map((specimen) => {
        if (specimen.id !== specimenId) return specimen;
        const updatedColorways = [...specimen.colorways];
        const targetColor = { ...updatedColorways[colorIndex] };
        const updatedSizes = [...targetColor.sizes];
        const targetSize = { ...updatedSizes[sizeIndex] };
        const newStock = Math.max(0, targetSize.stock + delta);
        targetSize.stock = newStock;
        if (newStock === 0) targetSize.label = 'DEPLETED';
        else if (newStock <= 2) targetSize.label = 'CRITICAL';
        else if (newStock <= 4) targetSize.label = 'LOW STOCK';
        else if (newStock >= 10) targetSize.label = 'OPTIMAL';
        else targetSize.label = 'IN STOCK';

        updatedSizes[sizeIndex] = targetSize;
        targetColor.sizes = updatedSizes;
        targetColor.totalAvailable = updatedSizes.reduce((a, b) => a + b.stock, 0);
        updatedColorways[colorIndex] = targetColor;

        const totalStock = updatedColorways.reduce((a, b) => a + b.totalAvailable, 0);

        // Notify parent to update the live ShoeProduct catalog
        const cleanSize = targetSize.size.replace('US ', '').trim();
        const rawColorName = targetColor.name.replace('COLORWAY: ', '').trim();
        onUpdateProductStock(specimen.id, rawColorName, cleanSize, newStock);

        onShowToast(
          `STOCK UPDATED: ${specimen.sku} [${targetSize.size}] -> ${newStock} UNITS`
        );

        return {
          ...specimen,
          totalStock,
          colorways: updatedColorways,
          status: totalStock === 0 ? 'DRAFT' : totalStock <= 10 ? 'CRITICAL' : 'ACTIVE',
        };
      })
    );
  };

  const handleAddSpecimenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName) return;
    const generatedSku = newSku.trim() || `VNT-${Math.random().toString(36).substring(2, 6).toUpperCase()}-01`;
    const priceNum = Number(newPrice) || 45000;
    const specimenId = `vnt-${Date.now().toString().slice(-6)}`;

    const newSpecimen: SpecimenRegistryItem = {
      id: specimenId,
      name: newName.toUpperCase(),
      sku: generatedSku,
      category: newCategory.toUpperCase(),
      basePrice: priceNum,
      totalStock: 32,
      variantsText: '1 Clr / 6 SKUs',
      status: 'ACTIVE',
      lastSynchronized: 'JUST NOW',
      image: '/src/assets/images/taupe_runner_pedestal_1788842355799.jpg',
      colorways: [
        {
          name: 'COLORWAY: ARCHIVAL RAW',
          code: '#E8E2D7',
          skuSuffix: '-AR',
          totalAvailable: 32,
          sizes: [
            { size: 'US 7.0', stock: 4, label: 'IN STOCK' },
            { size: 'US 8.0', stock: 6, label: 'IN STOCK' },
            { size: 'US 9.0', stock: 8, label: 'OPTIMAL' },
            { size: 'US 10.0', stock: 8, label: 'OPTIMAL' },
            { size: 'US 11.0', stock: 4, label: 'IN STOCK' },
            { size: 'US 12.0', stock: 2, label: 'CRITICAL' },
          ],
        },
      ],
    };

    // Propagate to parent ShoeProduct catalog
    const newShoe: ShoeProduct = {
      id: specimenId,
      sku: generatedSku,
      code: generatedSku,
      name: newName.toUpperCase(),
      brand: 'VANTA ATELIER',
      category: newCategory === 'OUTERWEAR' ? 'Boots' : (newCategory as any) || 'Sneakers',
      gender: 'Unisex',
      collections: ['New Drops', 'Archival Edition'],
      price: priceNum,
      mrp: Math.round(priceNum * 1.15),
      discountPercent: 0,
      rating: 5.0,
      reviewsCount: 1,
      colors: [
        {
          name: 'Archival Raw',
          hex: '#E8E2D7',
          images: {
            front: '/src/assets/images/taupe_runner_pedestal_1788842355799.jpg',
            side: '/src/assets/images/taupe_runner_pedestal_1788842355799.jpg',
            back: '/src/assets/images/taupe_runner_pedestal_1788842355799.jpg',
            top: '/src/assets/images/taupe_runner_pedestal_1788842355799.jpg',
            sole: '/src/assets/images/taupe_runner_pedestal_1788842355799.jpg',
          },
        },
      ],
      sizeInventory: {
        'Archival Raw': [
          { size: '7', stock: 4, sku: `${generatedSku}-07` },
          { size: '8', stock: 6, sku: `${generatedSku}-08` },
          { size: '9', stock: 8, sku: `${generatedSku}-09` },
          { size: '10', stock: 8, sku: `${generatedSku}-10` },
          { size: '11', stock: 4, sku: `${generatedSku}-11` },
          { size: '12', stock: 2, sku: `${generatedSku}-12` },
        ],
      },
      upper: 'Bio-Polymer 3D Mesh',
      sole: 'Carbon Composite Monolith',
      closure: 'Speedlace Cryptographic',
      fitType: 'Regular Fit',
      occasion: 'Archival Performance',
      use: 'All-Terrain',
      weight: '320g',
      waterResistance: 'Water Repellent',
      countryOfOrigin: 'Italy',
      warranty: 'Lifetime Atelier Guarantee',
      description: `Monolithic specimen ${newName.toUpperCase()} precision engineered in Milan Atelier.`,
      fitIndicator: 'True to Size',
      comfortScore: 4.9,
      width: 'Medium',
      recommended: '100% of atelier reviewers recommend',
      isNewArrival: true,
    };

    onAddNewProduct(newShoe);
    setSpecimens([newSpecimen, ...specimens]);
    setFocalSpecimenId(newSpecimen.id);
    setShowAddModal(false);
    setNewName('');
    setNewSku('');
    onShowToast(`SPECIMEN CATALOGED: ${newSpecimen.name} [${newSpecimen.sku}]`);
  };

  const handleOpenEditModal = (item: SpecimenRegistryItem) => {
    setEditingSpecimen(item);
    setEditName(item.name);
    setEditSku(item.sku);
    setEditCategory(item.category);
    setEditPrice(item.basePrice.toString());
    setEditStatus(item.status);
  };

  const handleSaveEditSpecimen = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSpecimen) return;
    const priceNum = Number(editPrice) || editingSpecimen.basePrice;

    if (onUpdateProduct) {
      const existingProduct = products.find((p) => p.id === editingSpecimen.id);
      if (existingProduct) {
        onUpdateProduct({
          ...existingProduct,
          name: editName.toUpperCase(),
          sku: editSku.toUpperCase(),
          category: editCategory as any,
          price: priceNum,
        });
      }
    }

    setSpecimens((prev) =>
      prev.map((s) => {
        if (s.id !== editingSpecimen.id) return s;
        return {
          ...s,
          name: editName.toUpperCase(),
          sku: editSku.toUpperCase(),
          category: editCategory.toUpperCase(),
          basePrice: priceNum,
          status: editStatus,
          lastSynchronized: 'JUST NOW',
        };
      })
    );

    onShowToast(`SPECIMEN UPDATED: ${editName.toUpperCase()} [${editSku.toUpperCase()}]`);
    setEditingSpecimen(null);
  };

  // CSV Export
  const handleExportCSV = () => {
    const headers = ['ID', 'SKU', 'Name', 'Category', 'BasePrice', 'TotalStock', 'Status', 'Variants'];
    const rows = specimens.map((s) => [
      s.id,
      s.sku,
      `"${s.name}"`,
      s.category,
      s.basePrice,
      s.totalStock,
      s.status,
      `"${s.variantsText}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `vanta_specimens_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onShowToast('CSV EXPORT COMPLETE // DOWNLOAD INITIATED');
  };

  const filteredSpecimens = specimens
    .filter((specimen) => {
      const matchesSearch =
        specimen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        specimen.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        specimen.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'ALL SPECIMENS' ||
        specimen.category.toUpperCase() === selectedCategory.toUpperCase();

      const matchesStock =
        selectedStockLevel === 'ALL STOCK LEVELS' ||
        (selectedStockLevel === 'ACTIVE' && specimen.status === 'ACTIVE') ||
        (selectedStockLevel === 'CRITICAL' && specimen.status === 'CRITICAL') ||
        (selectedStockLevel === 'DEPLETED' && specimen.totalStock === 0);

      return matchesSearch && matchesCategory && matchesStock;
    })
    .sort((a, b) => {
      if (sortOrder === 'STOCK_LOW') return a.totalStock - b.totalStock;
      if (sortOrder === 'PRICE_HIGH') return b.basePrice - a.basePrice;
      if (sortOrder === 'NAME') return a.name.localeCompare(b.name);
      return 0; // Default DATE
    });

  return (
    <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#faf7f2] min-h-full">
      {/* Top Header Section matching Image 2 */}
      <div>
        <div className="font-mono text-[10px] text-[#7b6e54] tracking-[0.2em] uppercase mb-1">
          ARCHIVE REFERENCE // SPECIMEN MANAGEMENT / SYS.VER.4.62
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#1a1816] tracking-tight">
              Product Inventory &amp; Specimen Dossiers
            </h1>
            <p className="font-sans text-[13px] text-[#59544c] mt-1 max-w-2xl">
              Catalog control across 48 master styles, multi-color palettes, and individual size SKU variants within the monolithic archive.
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] shrink-0">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2.5 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#e4ddcf] transition-colors flex items-center gap-2 uppercase tracking-wider font-bold cursor-pointer"
              title="Download Encrypted Specimen Catalog CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>BULK EXPORT CSV</span>
            </button>

            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] transition-colors flex items-center gap-2 uppercase tracking-wider font-bold cursor-pointer shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ ADD NEW SPECIMEN</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar matching Image 2 */}
      <div className="bg-[#ede7dd] border border-[#d5cdc0] p-2 sm:p-3 flex flex-wrap items-center gap-3 font-mono text-[11px]">
        {/* Search Input */}
        <div className="flex items-center gap-2 bg-[#faf7f2] border border-[#d5cdc0] px-3 py-1.5 flex-1 min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-[#7b6e54]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Lookup Specimen SKU or Code..."
            className="w-full bg-transparent border-none outline-none text-[#1a1816] text-[11px] font-mono placeholder:text-[#9c9384]"
          />
        </div>

        {/* Dropdown: Category */}
        <div className="flex items-center gap-1.5 bg-[#faf7f2] border border-[#d5cdc0] px-3 py-1.5 text-[#1a1816]">
          <span className="text-[#7b6e54]">CAT:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-transparent border-none outline-none font-bold uppercase cursor-pointer"
          >
            <option value="ALL SPECIMENS">ALL SPECIMENS</option>
            <option value="SNEAKERS">SNEAKERS</option>
            <option value="FOOTWEAR">FOOTWEAR</option>
            <option value="RUNNING">RUNNING</option>
            <option value="OUTERWEAR">OUTERWEAR</option>
          </select>
        </div>

        {/* Dropdown: Stock */}
        <div className="flex items-center gap-1.5 bg-[#faf7f2] border border-[#d5cdc0] px-3 py-1.5 text-[#1a1816]">
          <span className="text-[#7b6e54]">STOCK:</span>
          <select
            value={selectedStockLevel}
            onChange={(e) => setSelectedStockLevel(e.target.value)}
            className="bg-transparent border-none outline-none font-bold uppercase cursor-pointer"
          >
            <option value="ALL STOCK LEVELS">ALL STOCK LEVELS</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="CRITICAL">CRITICAL (&le;10)</option>
            <option value="DEPLETED">DEPLETED (0)</option>
          </select>
        </div>

        {/* Dropdown: Label / Atelier */}
        <div className="flex items-center gap-1.5 bg-[#faf7f2] border border-[#d5cdc0] px-3 py-1.5 text-[#1a1816]">
          <span className="text-[#7b6e54]">LABEL:</span>
          <select
            value={selectedAtelier}
            onChange={(e) => setSelectedAtelier(e.target.value)}
            className="bg-transparent border-none outline-none font-bold uppercase cursor-pointer"
          >
            <option value="ALL ATELIERS">ALL ATELIERS</option>
            <option value="MILAN VAULT">MILAN VAULT</option>
            <option value="PARIS ATELIER">PARIS ATELIER</option>
            <option value="TOKYO LAB">TOKYO LAB</option>
          </select>
        </div>
      </div>

      {/* FOCAL SPECIMEN DOSSIER (UPPER BOX) matching Image 2 */}
      {focalSpecimen && (
        <div className="relative border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-8 rounded-sm shadow-xs">
          {/* Focal Specimen Dossier Pill Badge */}
          <div className="absolute -top-3 right-6 bg-[#f5efe6] border border-[#d5cdc0] px-3 py-0.5 font-mono text-[9px] font-bold text-[#7b6e54] tracking-widest uppercase">
            FOCAL SPECIMEN DOSSIER
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Left Column: Specimen Identity & Metrics */}
            <div className="xl:col-span-4 flex flex-col justify-between">
              <div>
                {/* Product Photo with 360° Laser Scan Verified Overlay */}
                <div className="relative border border-[#d5cdc0] bg-[#e4ddcf] overflow-hidden rounded-xs">
                  <img
                    src={focalSpecimen.image}
                    alt={focalSpecimen.name}
                    className="w-full h-56 sm:h-64 object-cover object-center"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#141312]/90 text-[#f5efe6] font-mono text-[8px] tracking-widest px-2 py-0.5 uppercase font-bold backdrop-blur-2xs">
                    360° LASER SCAN VERIFIED
                  </div>
                </div>

                {/* Title and Price */}
                <div className="mt-4 flex items-baseline justify-between gap-2">
                  <h2 className="font-headline text-2xl sm:text-3xl text-[#1a1816] tracking-tight font-bold">
                    {focalSpecimen.name}
                  </h2>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-[#1a1816] shrink-0">
                    ₹{focalSpecimen.basePrice.toLocaleString()}
                  </span>
                </div>

                {/* Master SKU and Category */}
                <div className="mt-1 font-mono text-[10px] text-[#7b6e54] tracking-wider uppercase">
                  MASTER SKU: {focalSpecimen.sku} • CATEGORY: {focalSpecimen.category} // LAB
                </div>
              </div>

              {/* 3 Metrics Row */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-[#d5cdc0] font-mono">
                <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 text-center">
                  <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider">GROSS UNITS</div>
                  <div className="text-2xl font-bold text-[#1a1816] mt-0.5">{focalSpecimen.totalStock}</div>
                </div>
                <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 text-center">
                  <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider">COLORWAYS</div>
                  <div className="text-2xl font-bold text-[#1a1816] mt-0.5">
                    {focalSpecimen.colorways.length.toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="bg-[#faf7f2] border border-[#d5cdc0] p-3 text-center">
                  <div className="text-[9px] text-[#7b6e54] uppercase tracking-wider">SKU HEALTH</div>
                  <div className="text-2xl font-bold text-[#16a34a] mt-0.5">94%</div>
                </div>
              </div>
            </div>

            {/* Right Column: SKU Velocity & Dimensional Stock Grid */}
            <div className="xl:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
                  <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-[#1a1816] tracking-wider uppercase">
                    <Grid className="w-3.5 h-3.5 text-[#7b6e54]" />
                    <span>SKU VELOCITY &amp; DIMENSIONAL STOCK GRID</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#7b6e54] tracking-wider uppercase hidden sm:inline">
                    INDIVIDUAL SKU INVENTORY IS DECOUPLED FROM MODEL LEVEL
                  </span>
                </div>

                {/* Colorway Sections */}
                <div className="space-y-6 mt-6">
                  {focalSpecimen.colorways.map((cw, cIdx) => (
                    <div key={cw.skuSuffix} className="space-y-3">
                      <div className="flex items-center justify-between font-mono text-[10px] tracking-wider">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full border border-[#d5cdc0]"
                            style={{ backgroundColor: cw.code }}
                          ></span>
                          <span className="font-bold text-[#1a1816] uppercase">{cw.name}</span>
                          <span className="text-[#7b6e54]">CODE: {cw.code} // SKU SUFFIX: {cw.skuSuffix}</span>
                        </div>
                        <div className="font-bold text-[#1a1816] uppercase">
                          TOTAL AVAILABLE: {cw.totalAvailable} PRS
                        </div>
                      </div>

                      {/* Size Matrix Grid matching Image 2 */}
                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                        {cw.sizes.map((sz, sIdx) => {
                          const isDepleted = sz.stock === 0;
                          const isCritical = sz.stock > 0 && sz.stock <= 2;
                          const isLow = sz.stock > 2 && sz.stock <= 4;
                          const isOptimal = sz.stock >= 15;

                          return (
                            <div
                              key={sz.size}
                              className={`border p-2 sm:p-2.5 flex flex-col justify-between items-center text-center transition-all ${
                                isDepleted
                                  ? 'bg-[#fee2e2] border-[#f87171] text-[#991b1b]'
                                  : isCritical
                                  ? 'bg-[#fff1f2] border-[#fecdd3] text-[#be123c]'
                                  : isLow
                                  ? 'bg-[#fffbeb] border-[#fde68a] text-[#b45309]'
                                  : 'bg-[#faf7f2] border-[#d5cdc0] text-[#1a1816]'
                              }`}
                            >
                              <div className="font-mono text-[9px] text-[#7b6e54] uppercase tracking-wider">
                                {sz.size}
                              </div>
                              <div className="my-1.5 flex items-center justify-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => handleAdjustStock(focalSpecimen.id, cIdx, sIdx, -1)}
                                  className="w-4 h-4 bg-[#ede7dd] hover:bg-[#d5cdc0] text-[#1a1816] font-bold text-[9px] flex items-center justify-center cursor-pointer transition-colors"
                                  title="Decrease 1"
                                >
                                  -
                                </button>
                                <span className="font-mono text-lg sm:text-xl font-bold tracking-tight px-1">
                                  {sz.stock.toString().padStart(2, '0')}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleAdjustStock(focalSpecimen.id, cIdx, sIdx, 1)}
                                  className="w-4 h-4 bg-[#ede7dd] hover:bg-[#d5cdc0] text-[#1a1816] font-bold text-[9px] flex items-center justify-center cursor-pointer transition-colors"
                                  title="Increase 1"
                                >
                                  +
                                </button>
                              </div>
                              <div
                                className={`font-mono text-[8px] font-bold tracking-wider uppercase px-1 py-0.5 rounded-2xs ${
                                  isDepleted
                                    ? 'bg-[#ef4444] text-white'
                                    : isCritical
                                    ? 'text-[#be123c]'
                                    : isLow
                                    ? 'text-[#b45309]'
                                    : isOptimal
                                    ? 'text-[#15803d]'
                                    : 'text-[#59544c]'
                                }`}
                              >
                                {sz.label || 'IN STOCK'}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Advice */}
              <div className="mt-6 pt-3 border-t border-[#d5cdc0] flex items-center justify-between font-mono text-[10px] text-[#7b6e54]">
                <span>OPTICAL SCAN DATA SYNC: 100% NOMINAL</span>
                <span>CLICK +/- ON ANY SKU TO DEPLOY REAL-TIME INVENTORY REALLOCATION</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MASTER SPECIMEN REGISTRY (BOTTOM TABLE) matching Image 2 */}
      <div className="border border-[#d5cdc0] bg-[#ede7dd] p-5 sm:p-6 rounded-sm shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#d5cdc0]">
          <div className="flex items-center gap-3">
            <h3 className="font-headline text-2xl text-[#1a1816] tracking-tight font-bold">
              Master Specimen Registry
            </h3>
            <span className="bg-[#141312] text-[#f5efe6] font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 font-bold">
              CURRENT CATALOG
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-[#59544c]">
            <span>SORT BY:</span>
            <button
              onClick={() => {
                const nextSort =
                  sortOrder === 'DATE'
                    ? 'STOCK_LOW'
                    : sortOrder === 'STOCK_LOW'
                    ? 'PRICE_HIGH'
                    : sortOrder === 'PRICE_HIGH'
                    ? 'NAME'
                    : 'DATE';
                setSortOrder(nextSort);
                const labels = {
                  DATE: 'DATE ADDED (DEFAULT)',
                  STOCK_LOW: 'STOCK LEVEL (LOWEST FIRST)',
                  PRICE_HIGH: 'PRICE (HIGHEST FIRST)',
                  NAME: 'SPECIMEN NAME (A-Z)',
                };
                onShowToast(`SORT ORDER: ${labels[nextSort]}`);
              }}
              className="font-bold text-[#1a1816] uppercase hover:underline cursor-pointer flex items-center gap-1 bg-[#ede7dd] border border-[#d5cdc0] px-2 py-1"
            >
              <span>
                {sortOrder === 'DATE' && 'DATE ADDED'}
                {sortOrder === 'STOCK_LOW' && 'STOCK (LOWEST)'}
                {sortOrder === 'PRICE_HIGH' && 'PRICE (HIGH)'}
                {sortOrder === 'NAME' && 'NAME (A-Z)'}
              </span>
              <ArrowUpDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left font-mono text-[11px] border-collapse">
            <thead>
              <tr className="border-b border-[#d5cdc0] text-[10px] text-[#7b6e54] tracking-widest uppercase">
                <th className="py-2.5 px-3">SPECIMEN</th>
                <th className="py-2.5 px-3">TITLE &amp; REFERENCE SKU</th>
                <th className="py-2.5 px-3">CATEGORY</th>
                <th className="py-2.5 px-3">BASE PRICE</th>
                <th className="py-2.5 px-3">TOTAL STOCK</th>
                <th className="py-2.5 px-3">VARIANTS</th>
                <th className="py-2.5 px-3">STATUS</th>
                <th className="py-2.5 px-3">LAST SYNCHRONIZED</th>
                <th className="py-2.5 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d5cdc0]/70">
              {filteredSpecimens.map((item) => {
                const isSelected = focalSpecimenId === item.id;
                return (
                  <tr
                    key={item.id}
                    onClick={() => setFocalSpecimenId(item.id)}
                    className={`hover:bg-[#e4ddcf] transition-colors cursor-pointer ${
                      isSelected ? 'bg-[#e4ddcf] font-medium' : ''
                    }`}
                  >
                    {/* Thumbnail */}
                    <td className="py-3 px-3">
                      <div className="w-12 h-12 bg-[#faf7f2] border border-[#d5cdc0] overflow-hidden rounded-2xs">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </td>

                    {/* Title & SKU */}
                    <td className="py-3 px-3">
                      <div className="font-bold text-[#1a1816] uppercase text-[12px]">{item.name}</div>
                      <div className="text-[#7b6e54] text-[10px] tracking-wider">SKU: {item.sku}</div>
                    </td>

                    {/* Category */}
                    <td className="py-3 px-3 text-[#59544c] uppercase">{item.category}</td>

                    {/* Price */}
                    <td className="py-3 px-3 font-bold text-[#1a1816]">
                      ₹{item.basePrice.toLocaleString()}
                    </td>

                    {/* Total Stock */}
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1.5 font-bold">
                        {item.status === 'CRITICAL' ? (
                          <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
                        ) : item.totalStock > 0 ? (
                          <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-[#7b6e54]"></span>
                        )}
                        <span
                          className={
                            item.status === 'CRITICAL'
                              ? 'text-[#ef4444]'
                              : item.totalStock === 0
                              ? 'text-[#7b6e54]'
                              : 'text-[#1a1816]'
                          }
                        >
                          {item.totalStock.toString().padStart(2, '0')} Units
                        </span>
                      </div>
                    </td>

                    {/* Variants */}
                    <td className="py-3 px-3 text-[#59544c]">{item.variantsText}</td>

                    {/* Status Badge */}
                    <td className="py-3 px-3">
                      <span
                        className={`px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded-2xs ${
                          item.status === 'ACTIVE'
                            ? 'bg-[#ded6c9] text-[#1a1816]'
                            : item.status === 'CRITICAL'
                            ? 'bg-[#fee2e2] text-[#991b1b]'
                            : item.status === 'DRAFT'
                            ? 'bg-[#fef3c7] text-[#92400e]'
                            : 'bg-[#d5cdc0] text-[#59544c]'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* Last Synchronized */}
                    <td className="py-3 px-3 text-[#7b6e54] uppercase text-[10px]">
                      {item.lastSynchronized}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-3 text-right">
                      <div className="flex items-center justify-end gap-1 sm:gap-2" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => {
                            setFocalSpecimenId(item.id);
                            onShowToast(`OPENED SKU MATRIX FOR ${item.sku}`);
                          }}
                          className="p-1.5 text-[#59544c] hover:text-[#1a1816] hover:bg-[#ded6c9] transition-colors rounded-2xs cursor-pointer"
                          title="Inspect Matrix"
                        >
                          <Grid className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleOpenEditModal(item)}
                          className="p-1.5 text-[#59544c] hover:text-[#1a1816] hover:bg-[#ded6c9] transition-colors rounded-2xs cursor-pointer"
                          title="Edit Specimen Dossier"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setDeletingSpecimen(item)}
                          className="p-1.5 text-[#991b1b] hover:bg-[#fee2e2] transition-colors rounded-2xs cursor-pointer"
                          title="Delete Specimen"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table Footer with Pagination matching Image 2 */}
        <div className="mt-4 pt-4 border-t border-[#d5cdc0] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-[#7b6e54]">
          <div>SHOWING 01 – 06 OF 48 MASTER SPECIMENS • PAGE 01 / 08</div>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 bg-[#ede7dd] border border-[#d5cdc0] hover:bg-[#e4ddcf] cursor-pointer text-[#1a1816] font-bold uppercase">
              PREV
            </button>
            <button className="px-2.5 py-1 bg-[#141312] text-[#f5efe6] font-bold">1</button>
            <button className="px-2.5 py-1 bg-[#ede7dd] border border-[#d5cdc0] hover:bg-[#e4ddcf] cursor-pointer text-[#1a1816] font-bold">
              2
            </button>
            <button className="px-2.5 py-1 bg-[#ede7dd] border border-[#d5cdc0] hover:bg-[#e4ddcf] cursor-pointer text-[#1a1816] font-bold">
              3
            </button>
            <button className="px-2.5 py-1 bg-[#ede7dd] border border-[#d5cdc0] hover:bg-[#e4ddcf] cursor-pointer text-[#1a1816] font-bold uppercase">
              NEXT
            </button>
          </div>
        </div>
      </div>

      {/* Add New Specimen Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#faf7f2] border border-[#d5cdc0] max-w-lg w-full p-6 sm:p-8 font-mono text-xs shadow-2xl">
            <h3 className="font-headline text-2xl font-bold text-[#1a1816] tracking-tight mb-2">
              Add New Archival Specimen
            </h3>
            <p className="text-[#59544c] mb-6">
              Create a new master style and register its dimensional matrix into the monolithic archive.
            </p>

            <form onSubmit={handleAddSpecimenSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-[#1a1816] uppercase tracking-wider mb-1.5">
                  SPECIMEN TITLE *
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. S-02 SCULPTED DERBY"
                  className="w-full bg-white border border-[#d5cdc0] px-3.5 py-2.5 text-[#1a1816] text-[12px] font-mono outline-none focus:border-[#1a1816]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-[#1a1816] uppercase tracking-wider mb-1.5">
                    MASTER SKU (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={newSku}
                    onChange={(e) => setNewSku(e.target.value)}
                    placeholder="VNT-S02-DRB-01"
                    className="w-full bg-white border border-[#d5cdc0] px-3 py-2 text-[#1a1816] text-[11px] font-mono outline-none focus:border-[#1a1816]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#1a1816] uppercase tracking-wider mb-1.5">
                    CATEGORY
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-white border border-[#d5cdc0] px-3 py-2 text-[#1a1816] text-[11px] font-mono outline-none focus:border-[#1a1816]"
                  >
                    <option value="SNEAKERS">SNEAKERS</option>
                    <option value="FOOTWEAR">FOOTWEAR</option>
                    <option value="RUNNING">RUNNING</option>
                    <option value="OUTERWEAR">OUTERWEAR</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#1a1816] uppercase tracking-wider mb-1.5">
                  BASE RETAIL VALUATION (₹) *
                </label>
                <input
                  type="number"
                  required
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  placeholder="42500"
                  className="w-full bg-white border border-[#d5cdc0] px-3.5 py-2 text-[#1a1816] text-[12px] font-mono outline-none focus:border-[#1a1816]"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#d5cdc0]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-[#59544c] hover:text-[#1a1816] uppercase font-bold text-[10px] cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px] tracking-widest hover:bg-[#35322e] transition-colors cursor-pointer"
                >
                  CATALOG SPECIMEN
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Specimen Modal */}
      {editingSpecimen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[#ede7dd] border border-[#d5cdc0] max-w-lg w-full p-6 shadow-2xl space-y-4 font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
              <div className="text-[10px] text-[#7b6e54] font-bold uppercase tracking-wider">
                ARCHIVE EDITOR // {editingSpecimen.sku}
              </div>
              <button
                onClick={() => setEditingSpecimen(null)}
                className="text-[#59544c] hover:text-[#1a1816] cursor-pointer text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveEditSpecimen} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-[#1a1816] uppercase tracking-wider mb-1.5">
                  SPECIMEN TITLE
                </label>
                <input
                  type="text"
                  required
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-white border border-[#d5cdc0] px-3.5 py-2 text-[#1a1816] text-[12px] font-mono outline-none focus:border-[#1a1816]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#1a1816] uppercase tracking-wider mb-1.5">
                    SKU REFERENCE
                  </label>
                  <input
                    type="text"
                    required
                    value={editSku}
                    onChange={(e) => setEditSku(e.target.value)}
                    className="w-full bg-white border border-[#d5cdc0] px-3 py-2 text-[#1a1816] text-[11px] font-mono outline-none focus:border-[#1a1816]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#1a1816] uppercase tracking-wider mb-1.5">
                    CATEGORY
                  </label>
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                    className="w-full bg-white border border-[#d5cdc0] px-3 py-2 text-[#1a1816] text-[11px] font-mono outline-none focus:border-[#1a1816]"
                  >
                    <option value="SNEAKERS">SNEAKERS</option>
                    <option value="RUNNING">RUNNING</option>
                    <option value="BASKETBALL">BASKETBALL</option>
                    <option value="WALKING">WALKING</option>
                    <option value="TRAINING">TRAINING</option>
                    <option value="BOOTS">BOOTS</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-[#1a1816] uppercase tracking-wider mb-1.5">
                    BASE PRICE (₹)
                  </label>
                  <input
                    type="number"
                    required
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    className="w-full bg-white border border-[#d5cdc0] px-3 py-2 text-[#1a1816] text-[11px] font-mono outline-none focus:border-[#1a1816]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-[#1a1816] uppercase tracking-wider mb-1.5">
                    CATALOG STATUS
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as any)}
                    className="w-full bg-white border border-[#d5cdc0] px-3 py-2 text-[#1a1816] text-[11px] font-mono outline-none focus:border-[#1a1816]"
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="CRITICAL">CRITICAL</option>
                    <option value="DRAFT">DRAFT</option>
                    <option value="ARCHIVED">ARCHIVED</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#d5cdc0]">
                <button
                  type="button"
                  onClick={() => setEditingSpecimen(null)}
                  className="px-4 py-2 text-[#59544c] hover:text-[#1a1816] uppercase font-bold text-[10px] cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#141312] text-[#f5efe6] uppercase font-bold text-[10px] tracking-widest hover:bg-[#35322e] transition-colors cursor-pointer"
                >
                  SAVE SPECIMEN CHANGES
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingSpecimen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[#ede7dd] border border-[#d5cdc0] max-w-md w-full p-6 shadow-2xl space-y-4 font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-[#d5cdc0]">
              <div className="text-[10px] text-[#991b1b] font-bold uppercase tracking-wider">
                CONFIRM SPECIMEN DELETION
              </div>
              <button
                onClick={() => setDeletingSpecimen(null)}
                className="text-[#59544c] hover:text-[#1a1816] cursor-pointer text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="text-[11px] text-[#1a1816] space-y-2">
              <p className="font-bold">
                Are you sure you want to delete this product?
              </p>
              <div className="p-3 bg-[#faf7f2] border border-[#d5cdc0] text-[10px]">
                <div><span className="text-[#7b6e54]">SPECIMEN:</span> <span className="font-bold">{deletingSpecimen.name}</span></div>
                <div><span className="text-[#7b6e54]">SKU:</span> <span className="font-bold">{deletingSpecimen.sku}</span></div>
                <div><span className="text-[#7b6e54]">TOTAL STOCK:</span> {deletingSpecimen.totalStock} Units</div>
              </div>
              <p className="text-[#7b6e54] text-[9px]">
                This will delete the specimen and unbind its dimensional size matrix from the live archive.
              </p>
            </div>

            <div className="pt-3 border-t border-[#d5cdc0] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeletingSpecimen(null)}
                className="px-4 py-2 text-[#59544c] hover:text-[#1a1816] uppercase font-bold text-[10px] cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-5 py-2.5 bg-[#991b1b] text-white uppercase font-bold text-[10px] tracking-widest hover:bg-[#7f1d1d] transition-colors cursor-pointer"
              >
                DELETE PRODUCT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
