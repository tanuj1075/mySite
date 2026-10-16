import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Lock, Check, Shield, Layers, Compass, Sparkles } from 'lucide-react';
import { CartItem } from '../types';
import { formatCurrency } from '../lib/currency';

interface CollectionsViewProps {
  onClaimVoidRunner: () => void;
  onQuickAddProduct: (item: CartItem) => void;
  onNavigate: (nav: string) => void;
  onShowToast: (msg: string) => void;
  onInspectSpecimen?: (specimen: any) => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  onClaimVoidRunner,
  onQuickAddProduct,
  onNavigate,
  onShowToast,
  onInspectSpecimen,
}) => {
  // Hero slide index
  const [heroSlide, setHeroSlide] = useState(0);

  // Active category in Curated Editions
  const [curatedCategory, setCuratedCategory] = useState<'ALL' | 'FOOTWEAR' | 'OUTERWEAR' | 'COMPOSITES'>('ALL');

  // Deconstruct active layer
  const [activeLayer, setActiveLayer] = useState<number>(0);

  // Email input state
  const [dispatchEmail, setDispatchEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Live countdown timer for Travertine Monolith
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 34,
    seconds: 54,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dispatchEmail.includes('@')) {
      onShowToast('PLEASE ENTER A VALID EMAIL PROTOCOL');
      return;
    }
    setIsSubscribed(true);
    onShowToast(`AUTHORIZED: ${dispatchEmail.toUpperCase()} ADDED TO PRIVATE DISPATCH`);
  };

  const handleAcquireRunner = () => {
    const runnerItem: CartItem = {
      id: 'vn-runner-x01',
      code: 'RUNNER_X01',
      name: 'X-01 ARCHITECTURAL RUNNER',
      edition: 'EDITION 01 // CREAM LEATHER & TRAVERTINE',
      price: 480,
      image: '/src/assets/images/cream_runner_pedestal_1788842341279.jpg',
      colorway: 'Travertine Cream & Natural Crepe',
      specification: 'Size EU 42 / US 9',
      availableSizes: ['EU 39', 'EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46'],
      allocationStatus: 'Allocation Secured // 4 Units Left',
      quantity: 1,
    };
    onQuickAddProduct(runnerItem);
  };

  const handleAcquireTaupe = () => {
    const taupeItem: CartItem = {
      id: 'vn-runner-taupe-02',
      code: 'RUNNER_TAUPE_02',
      name: 'ARCHIVAL LOW RUNNER',
      edition: 'SERIES 02 // TAUPE SUEDE CHASSIS',
      price: 520,
      image: '/src/assets/images/taupe_runner_pedestal_1788842355799.jpg',
      colorway: 'Mineral Taupe & Raw Limestone',
      specification: 'Size EU 43 / US 10',
      availableSizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
      allocationStatus: 'Allocation Secured // Limited Allotment',
      quantity: 1,
    };
    onQuickAddProduct(taupeItem);
  };

  const handleAcquireOvercoat = () => {
    const overcoatItem: CartItem = {
      id: 'vn-overcoat-01',
      code: 'COAT_01',
      name: 'OVERSIZED TAILORED OVERCOAT',
      edition: 'CHAPTER 01 // HEAVY WOOL & STONE WEAVE',
      price: 890,
      image: '/src/assets/images/overcoat_model_1788842290581.jpg',
      colorway: 'Raw Travertine & Heavy Wool',
      specification: 'Size Large / 50',
      availableSizes: ['Size 46', 'Size 48', 'Size 50', 'Size 52'],
      allocationStatus: 'Allocation Secured // In Stock',
      quantity: 1,
    };
    onQuickAddProduct(overcoatItem);
  };

  const blueprintLayers = [
    {
      id: '01',
      title: 'CARBON FIBER INTEGRATED MIDSOLE PLATE',
      tag: 'AEROSPACE GRADE 3K WEAVE',
      detail: 'Precision-milled aerospace composite embedded between split dual-density foam wedges. Transmits linear torsional stability during dynamic strides while eliminating weight.',
      specs: '1.2mm Thickness // 98g Total Shank // Deflection: 4.2mm under 900N',
    },
    {
      id: '02',
      title: 'VEGETABLE-TANNED FOOTBED & CORK FILL',
      tag: 'TUSCAN ARTISANAL TANNING',
      detail: 'Hand-layered organic cork core conforms dynamically to the unique foot topography within 40 hours of wear. Zero synthetic footbeds; purely organic breathability.',
      specs: '3.5mm Tuscan Veg-Tan Leather // Granulated Portuguese Cork Core // Anti-microbial',
    },
    {
      id: '03',
      title: 'FULL-GRAIN ITALIAN CALFSKIN & LATEX CUSHION',
      tag: 'UNLINED ARCHITECTURAL FORM',
      detail: 'Supple 1.8mm unlined full-grain calfskin paired with raw natural Hevea tree latex cushioning at high-impact heel strikes. Hand-stitched with bonded nylon thread.',
      specs: '1.8mm Full-Grain // Dual Saddle Stitch // 100% Biodegradable Latex Infill',
    },
  ];

  const featuredBrandCards = [
    {
      name: 'NIKE',
      tag: 'High-performance running',
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b3f51b7-1d7d-4718-a5bc-7ec8d3dc9869/air-force-1-07-mens-shoes-DZejrQoC.png',
      accent: '#d8c8af',
    },
    {
      name: 'ADIDAS',
      tag: 'Streetwear essentials',
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1d9a02f0be704fafbe3d6b8158afb9f6_9366/Samba_OG_Shoes_White_B75806_HM52.jpg',
      accent: '#bfb7a8',
    },
    {
      name: 'SKECHERS',
      tag: 'Comfort-first movement',
      image:
        'https://images.skechers.com/images/400/118885_MBLK_01.jpg',
      accent: '#d0c0a4',
    },
    {
      name: 'ASICS',
      tag: 'Cushioned everyday speed',
      image:
        'https://www.asics.com/dw/image/v2/BBTN_PRD/on/demandware.static/-/Sites-ASICS-US-Library/default/dw9fb2d5a7/2024/ASICS-Running/JPL/Express/ASICS_Gel-Kayano_30_Storm_White_Silver.jpg?sw=600&sh=600',
      accent: '#c7c5be',
    },
  ];

  return (
    <div id="front-page-root" className="bg-[#ede7dd] text-[#1a1816] min-h-screen">
      {/* 1. TOP SPECIFICATION CLASSIFICATION TICKER */}
      <div
        id="top-status-bar"
        className="w-full bg-[#e4ddcf] border-b border-[#d5cdc0] px-4 sm:px-8 py-2 text-[10px] font-mono tracking-wider text-[#59544c] flex flex-wrap justify-between items-center gap-2"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[#1a1816]"></span>
          <span>SPECIFICATION: TRAVERTINE // PROTOTYPE EDITION // STASIS_BUILD: V4.2</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span>LAT: 52.5200° N</span>
          <span>|</span>
          <span>LONG: 13.4050° E</span>
          <span>|</span>
          <span className="text-[#1a1816] font-bold">CALIBRATION: ACTIVE / 100% PRESERVATION</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-20 space-y-20 lg:space-y-28">
        
        {/* 2. HERO SECTION */}
        <section id="hero-specimen" className="pt-2">
          {/* Header row: title and technical metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-8 border-b border-[#d5cdc0]">
            <div className="lg:col-span-8 space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#7b6e54] font-bold flex items-center gap-2">
                <span>[ SPECIMEN CLASSIFICATION // ATELIER CRAFTSMANSHIP ]</span>
              </div>
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#1a1816] leading-[0.95]">
                BUILT TO <span className="italic font-normal">MOVE</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#59544c] max-w-xl leading-relaxed pt-2">
                Performance refined through simplicity. Artisanal saddle stitching on vegetable-tanned cream calfskin and natural crepe.
              </p>
            </div>

            {/* Right metadata box & CTA buttons */}
            <div className="lg:col-span-4 space-y-4 lg:text-right">
              <div className="font-mono text-[11px] text-[#59544c] space-y-1">
                <div>SYSTEM PROTOCOL: 8-TIER FABRICATION</div>
                <div>BASE MATRIX: NATURAL TANNED LEATHER</div>
                <div>PROVENANCE: MONTEBELLUNA, ITALY</div>
              </div>
              <div className="flex items-center lg:justify-end gap-3 pt-2">
                <button
                  id="hero-view-catalog-btn"
                  onClick={() => onNavigate('SHOP')}
                  className="bg-[#141312] text-[#f5efe6] px-5 py-2.5 font-mono text-xs font-bold tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
                >
                  VIEW CATALOG →
                </button>
                <button
                  id="hero-specs-btn"
                  onClick={() => {
                    const el = document.getElementById('blueprint-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border border-[#141312] bg-transparent text-[#141312] px-4 py-2.5 font-mono text-xs font-bold tracking-wider hover:bg-[#ded6c9] transition-colors cursor-pointer"
                >
                  SPECIFICATIONS
                </button>
              </div>
            </div>
          </div>

          {/* Hero Main Macro Image Display */}
          <div className="mt-8 relative border border-[#d5cdc0] bg-[#e4ddcf] overflow-hidden group">
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full max-h-[640px] overflow-hidden">
              <img
                src="/src/assets/images/hero_welt_macro_1788842274475.jpg"
                alt="Macro detail of artisan saddle stitching and welt on cream leather runner"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816]/30 via-transparent to-transparent pointer-events-none"></div>

              {/* Callout Badge 1: Top Left */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#ede7dd]/90 backdrop-blur-sm border border-[#d5cdc0] px-3 py-1.5 font-mono text-[10px] sm:text-xs text-[#1a1816] tracking-wider">
                [ MACRO ATELIER // REINFORCED SADDLE STITCH ]
              </div>

              {/* Callout Badge 2: Top Right */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#ede7dd]/90 backdrop-blur-sm border border-[#d5cdc0] px-3 py-1.5 font-mono text-[10px] sm:text-xs text-[#1a1816] tracking-wider">
                [ TEXTURE: VEG-TANNED GRAIN ]
              </div>

              {/* Callout Badge 3: Bottom Left */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#ede7dd]/90 backdrop-blur-sm border border-[#d5cdc0] px-3 py-1.5 font-mono text-[10px] sm:text-xs text-[#1a1816] tracking-wider">
                [ POINT A: HAND-WELTED NATURAL CREPE ]
              </div>

              {/* Callout Badge 4: Bottom Right */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#ede7dd]/90 backdrop-blur-sm border border-[#d5cdc0] px-3 py-1.5 font-mono text-[10px] sm:text-xs text-[#1a1816] tracking-wider">
                [ POINT B: 360° TEXTURED SUEDE RIM ]
              </div>
            </div>

            {/* Sub-hero pagination bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-t border-[#d5cdc0] bg-[#ede7dd] font-mono text-xs">
              <div className="flex items-center gap-3 text-[#59544c]">
                <span className="font-bold text-[#1a1816]">01</span>
                <span>/</span>
                <span>04</span>
                <span className="hidden sm:inline-block pl-2 border-l border-[#d5cdc0] text-[10px]">
                  CHOPPED CORK WEDGE // NATURAL CALF REINFORCEMENT
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setHeroSlide(0)}
                  className={`w-7 h-7 text-xs flex items-center justify-center font-bold border transition-colors cursor-pointer ${
                    heroSlide === 0 ? 'bg-[#1a1816] text-[#ede7dd] border-[#1a1816]' : 'border-[#d5cdc0] text-[#59544c] hover:bg-[#ded6c9]'
                  }`}
                >
                  01
                </button>
                <button
                  onClick={() => setHeroSlide(1)}
                  className={`w-7 h-7 text-xs flex items-center justify-center font-bold border transition-colors cursor-pointer ${
                    heroSlide === 1 ? 'bg-[#1a1816] text-[#ede7dd] border-[#1a1816]' : 'border-[#d5cdc0] text-[#59544c] hover:bg-[#ded6c9]'
                  }`}
                >
                  02
                </button>
                <button
                  onClick={() => setHeroSlide(2)}
                  className={`w-7 h-7 text-xs flex items-center justify-center font-bold border transition-colors cursor-pointer ${
                    heroSlide === 2 ? 'bg-[#1a1816] text-[#ede7dd] border-[#1a1816]' : 'border-[#d5cdc0] text-[#59544c] hover:bg-[#ded6c9]'
                  }`}
                >
                  03
                </button>
                <div className="w-[1px] h-4 bg-[#d5cdc0] mx-1"></div>
                <button
                  onClick={() => setHeroSlide((s) => (s > 0 ? s - 1 : 2))}
                  className="w-7 h-7 text-xs flex items-center justify-center border border-[#d5cdc0] text-[#59544c] hover:bg-[#ded6c9] transition-colors cursor-pointer"
                  title="Previous"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setHeroSlide((s) => (s < 2 ? s + 1 : 0))}
                  className="w-7 h-7 text-xs flex items-center justify-center border border-[#d5cdc0] text-[#59544c] hover:bg-[#ded6c9] transition-colors cursor-pointer"
                  title="Next"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Featured Collection Banner */}
        <section id="featured-collection-section" className="border border-[#d5cdc0] bg-[#f5efe6] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d5cdc0] pb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7b6e54] font-bold block mb-2">
                [ FEATURED COLLECTION ]
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#1a1816] font-bold">
                PREMIUM BRAND EDITIONS
              </h2>
            </div>
            <button
              onClick={() => onNavigate('SHOP')}
              className="font-mono text-[10px] font-bold text-[#1a1816] hover:opacity-75 flex items-center gap-2 cursor-pointer"
            >
              <span>[ VIEW ALL BRAND SPECIMENS → ]</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {featuredBrandCards.map((brand) => (
              <div
                key={brand.name}
                className="group border border-[#d5cdc0] bg-[#f5efe6] hover:border-[#1a1816] transition-colors"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#e4ddcf]">
                  <img
                    src={brand.image}
                    alt={`${brand.name} sneaker product detail`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7b6e54]">
                      {brand.name}
                    </span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.accent }}></span>
                  </div>
                  <p className="font-mono text-[11px] text-[#59544c] leading-relaxed">{brand.tag}</p>
                  <button
                    onClick={() => onNavigate('SHOP')}
                    className="font-mono text-[10px] font-bold text-[#1a1816] hover:underline cursor-pointer"
                  >
                    VIEW COLLECTION →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. MANIFESTO & PHILOSOPHY SECTION */}
        <section id="manifesto-section" className="border-t border-[#d5cdc0] pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left column */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#7b6e54] font-bold">
                [ MANIFESTO // 001 ]
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl text-[#1a1816] font-bold leading-tight">
                ZERO PLANNED OBSOLESCENCE. ZERO DECORATION.
              </h3>
              <div className="w-16 h-[2px] bg-[#1a1816]"></div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#1a1816] leading-tight">
                WE REJECT FAST FASHION AS MORAL COLLAPSE.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs sm:text-sm text-[#59544c] leading-relaxed">
                <p>
                  VANTA specimens are conceived at the intersection of monolithic brutalist architecture and technical performance leather craft. Each artifact is produced in limited allocations inside our Civitanova Marche workshop using cold-cure hand vulcanization.
                </p>
                <p>
                  We design not for seasonal trend cycles, but for geological permanence. When the exterior structure encounters abrasion, the materials beneath reveal deeper textures rather than failure. Wear is an archival record.
                </p>
              </div>

              {/* 4 Technical Metric Columns */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#d5cdc0]">
                <div className="border-l-2 border-[#1a1816] pl-3 py-1">
                  <div className="font-mono text-[10px] text-[#59544c] uppercase">TENSILE MATRIX</div>
                  <div className="font-mono text-base font-bold text-[#1a1816]">16,200 N/m²</div>
                </div>
                <div className="border-l-2 border-[#1a1816] pl-3 py-1">
                  <div className="font-mono text-[10px] text-[#59544c] uppercase">WORKSHOP CYCLE</div>
                  <div className="font-mono text-base font-bold text-[#1a1816]">72 HRS / PAIR</div>
                </div>
                <div className="border-l-2 border-[#1a1816] pl-3 py-1">
                  <div className="font-mono text-[10px] text-[#59544c] uppercase">REPLACEMENT PARTS</div>
                  <div className="font-mono text-base font-bold text-[#1a1816]">PERPETUAL</div>
                </div>
                <div className="border-l-2 border-[#1a1816] pl-3 py-1">
                  <div className="font-mono text-[10px] text-[#59544c] uppercase">CARBON IMPACT</div>
                  <div className="font-mono text-base font-bold text-[#1a1816]">100% BALANCED</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PERMANENT ARCHIVE SHOWCASE SECTION */}
        <section id="permanent-archive-section" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#d5cdc0] pb-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#7b6e54] font-bold block mb-1">
                [ EXPOSURE // ARCHIVAL SPEC 01-04 ]
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#1a1816] font-bold">
                PERMANENT ARCHIVE
              </h2>
            </div>
            <button
              onClick={() => onNavigate('ARCHIVES')}
              className="font-mono text-xs font-bold text-[#1a1816] hover:opacity-75 flex items-center gap-2 self-start sm:self-auto cursor-pointer"
            >
              <span>[ OPEN COMPLETE VAULT (84 PIECES) → ]</span>
            </button>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Outerwear */}
            <div className="border border-[#d5cdc0] bg-[#f5efe6] flex flex-col group hover:border-[#1a1816] transition-colors">
              <div className="p-3 border-b border-[#d5cdc0] flex justify-between items-center font-mono text-[10px] text-[#59544c]">
                <span>[ CHAPTER // 01 DROP ]</span>
                <span className="text-[#1a1816] font-bold">[ IN STOCK ]</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden relative bg-[#e4ddcf]">
                <img
                  src="/src/assets/images/overcoat_model_1788842290581.jpg"
                  alt="Oversized tailored overcoat model in brutalist limestone setting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-headline text-lg text-[#1a1816] font-bold">OUTERWEAR REIMAGINED</h3>
                  <p className="font-mono text-[11px] text-[#59544c] mt-1 leading-relaxed">
                    Oversized tailored technical overcoat paired with relaxed stone trousers and neutral footwear.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#d5cdc0] flex justify-between items-center font-mono text-[11px]">
                  <span className="text-[#7b6e54]">VIEWING COLLECTION</span>
                  <button
                    onClick={handleAcquireOvercoat}
                    className="font-bold text-[#1a1816] hover:underline cursor-pointer"
                  >
                    VIEW LOOK →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Craft Specification */}
            <div className="border border-[#d5cdc0] bg-[#f5efe6] flex flex-col group hover:border-[#1a1816] transition-colors">
              <div className="p-3 border-b border-[#d5cdc0] flex justify-between items-center font-mono text-[10px] text-[#59544c]">
                <span>[ ATELIER // DETAIL ]</span>
                <span className="text-[#1a1816] font-bold">[ HAND-STITCHED ]</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden relative bg-[#e4ddcf]">
                <img
                  src="/src/assets/images/craft_heel_detail_1788842306184.jpg"
                  alt="Macro detail of shoe heel and welt stitching"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-headline text-lg text-[#1a1816] font-bold">CRAFT SPECIFICATION</h3>
                  <p className="font-mono text-[11px] text-[#59544c] mt-1 leading-relaxed">
                    Artisanal saddle stitching on vegetable-tanned cream calfskin and natural crepe rubber foundation.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#d5cdc0] flex justify-between items-center font-mono text-[11px]">
                  <span className="text-[#7b6e54]">STITCH SPEC</span>
                  <button
                    onClick={() => {
                      const el = document.getElementById('blueprint-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-bold text-[#1a1816] hover:underline cursor-pointer"
                  >
                    INSPECT CRAFT →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Travertine Leisure */}
            <div className="border border-[#d5cdc0] bg-[#f5efe6] flex flex-col group hover:border-[#1a1816] transition-colors">
              <div className="p-3 border-b border-[#d5cdc0] flex justify-between items-center font-mono text-[10px] text-[#59544c]">
                <span>[ CHAPTER // ARCHITECTURE ]</span>
                <span className="text-[#1a1816] font-bold">[ EDITION 03 ]</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden relative bg-[#e4ddcf]">
                <img
                  src="/src/assets/images/travertine_model_1788842319956.jpg"
                  alt="Model wearing neutral cream suiting and court runner in sunlit stone courtyard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-headline text-lg text-[#1a1816] font-bold">TRAVERTINE LEISURE</h3>
                  <p className="font-mono text-[11px] text-[#59544c] mt-1 leading-relaxed">
                    Ivory calfskin court runner paired with relaxed neutral suiting. Warm architectural presence.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#d5cdc0] flex justify-between items-center font-mono text-[11px]">
                  <span className="text-[#7b6e54]">IN REVIEW</span>
                  <button
                    onClick={() => onNavigate('SHOP')}
                    className="font-bold text-[#1a1816] hover:underline cursor-pointer"
                  >
                    VIEW RUNNER →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Archival Runner */}
            <div className="border border-[#d5cdc0] bg-[#f5efe6] flex flex-col group hover:border-[#1a1816] transition-colors">
              <div className="p-3 border-b border-[#d5cdc0] flex justify-between items-center font-mono text-[10px] text-[#59544c]">
                <span>[ FOOTWEAR // 12 RESTOCK ]</span>
                <span className="text-[#1a1816] font-bold">[ {formatCurrency(480)} ]</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden relative bg-[#e4ddcf]">
                <img
                  src="/src/assets/images/cream_runner_pedestal_1788842341279.jpg"
                  alt="Handmade luxury cream sneaker resting on rough travertine block"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-headline text-lg text-[#1a1816] font-bold">ARCHIVAL RUNNER</h3>
                  <p className="font-mono text-[11px] text-[#59544c] mt-1 leading-relaxed">
                    Sand beige and tactile taupe suede chassis with dual-density foam wedge on curved travertino.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#d5cdc0] flex justify-between items-center font-mono text-[11px]">
                  <span className="text-[#7b6e54]">STATUS: ALLOCATED</span>
                  <button
                    onClick={handleAcquireRunner}
                    className="font-bold text-[#1a1816] hover:underline cursor-pointer"
                  >
                    ACQUIRE →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. TRAVERTINE MONOLITH (LIMITED 300 UNITS) COUNTDOWN SECTION */}
        <section id="travertine-monolith-section" className="border border-[#d5cdc0] bg-[#f5efe6] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#7b6e54] font-bold">
                [ UPCOMING BESPOKE ALLOCATION ]
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#1a1816] font-bold leading-[1.05]">
                TRAVERTINE MONOLITH
                <br />
                <span className="italic font-normal text-3xl sm:text-4xl text-[#59544c]">*LIMITED 300 UNITS*</span>
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#59544c] leading-relaxed max-w-xl">
                Encapsulated cold-cure resin architecture and soft cream leather. Cryptographically signed authentication chip embedded in the lateral heel counter. Priority queue open for archive members.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="reserve-priority-queue-btn"
                  onClick={onClaimVoidRunner}
                  className="bg-[#141312] text-[#f5efe6] px-6 py-3 font-mono text-xs font-bold tracking-wider hover:bg-[#35322e] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  RESERVE PRIORITY QUEUE
                </button>
                <button
                  id="safety-protocol-btn"
                  onClick={() => onShowToast('SAFETY PROTOCOL: V4.2 CRYPTO-HASH VERIFICATION EMBEDDED')}
                  className="border border-[#b8ad9c] bg-[#ded6c9] text-[#1a1816] px-5 py-3 font-mono text-xs font-bold tracking-wider hover:bg-[#d0c5b3] transition-colors cursor-pointer"
                >
                  SAFETY PROTOCOL
                </button>
              </div>
            </div>

            {/* Right Countdown Panel */}
            <div className="lg:col-span-5 bg-[#ede7dd] border border-[#d5cdc0] p-6 space-y-5">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#59544c] border-b border-[#d5cdc0] pb-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#1a1816] animate-pulse"></span>
                  PRE-ALLOCATION // SYNCHRONIZING UTC
                </span>
                <span className="font-bold text-[#1a1816]">ATELIER MADE-TO-ORDER: 7 WEEKS</span>
              </div>

              {/* 4 Metric Boxes */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="border border-[#d5cdc0] bg-[#f5efe6] p-2.5">
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-[#1a1816]">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[9px] text-[#59544c] uppercase mt-1">DAYS</div>
                </div>
                <div className="border border-[#d5cdc0] bg-[#f5efe6] p-2.5">
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-[#1a1816]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[9px] text-[#59544c] uppercase mt-1">HOURS</div>
                </div>
                <div className="border border-[#d5cdc0] bg-[#f5efe6] p-2.5">
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-[#1a1816]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[9px] text-[#59544c] uppercase mt-1">MINS</div>
                </div>
                <div className="border border-[#d5cdc0] bg-[#f5efe6] p-2.5">
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-[#1a1816]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[9px] text-[#59544c] uppercase mt-1">SECS</div>
                </div>
              </div>

              {/* Progress Meter */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between font-mono text-[10px] text-[#59544c]">
                  <span>PRE-ALLOCATION ALLOTMENT</span>
                  <span className="font-bold text-[#1a1816]">87.2% COMMITTED</span>
                </div>
                <div className="w-full h-2 bg-[#ded6c9] overflow-hidden">
                  <div className="w-[87.2%] h-full bg-[#1a1816]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CURATED EDITIONS SECTION */}
        <section id="curated-editions-section" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d5cdc0] pb-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#7b6e54] font-bold block mb-1">
                [ CLASSIFIED CATALOG ]
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#1a1816] font-bold">
                CURATED EDITIONS
              </h2>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
              {(['ALL', 'FOOTWEAR', 'OUTERWEAR', 'COMPOSITES'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCuratedCategory(cat)}
                  className={`px-3 py-1.5 border transition-all cursor-pointer ${
                    curatedCategory === cat
                      ? 'bg-[#1a1816] text-[#f5efe6] border-[#1a1816] font-bold'
                      : 'bg-[#f5efe6] text-[#59544c] border-[#d5cdc0] hover:text-[#1a1816] hover:border-[#1a1816]'
                  }`}
                >
                  {cat === 'ALL' ? 'ALL EDITIONS' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-[11px] text-[#59544c]">
            <span>SWIPE TO EXPLORE SPECIMENS</span>
            <div className="flex items-center gap-1">
              <button
                className="w-7 h-7 border border-[#d5cdc0] flex items-center justify-center hover:bg-[#ded6c9] cursor-pointer"
                title="Previous item"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                className="w-7 h-7 border border-[#d5cdc0] flex items-center justify-center hover:bg-[#ded6c9] cursor-pointer"
                title="Next item"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Product Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product 1: Cream Runner on Travertine */}
            <div className="border border-[#d5cdc0] bg-[#f5efe6] p-6 space-y-4 group hover:border-[#1a1816] transition-colors">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#59544c] border-b border-[#d5cdc0] pb-2">
                <span>SPECIMEN SPECIFICATION // 01 TRAVERTINE CREAM</span>
                <span className="font-bold text-[#1a1816] text-xs">{formatCurrency(480)}</span>
              </div>
              <div className="aspect-[4/3] bg-[#ede7dd] border border-[#d5cdc0] overflow-hidden relative">
                <img
                  src="/src/assets/images/cream_runner_pedestal_1788842341279.jpg"
                  alt="Cream runner on travertine stone pedestal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 right-3 bg-[#ede7dd]/90 font-mono text-[10px] px-2 py-0.5 border border-[#d5cdc0]">
                  4/50 UNITS
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-2xl font-bold text-[#1a1816]">
                  X-01 ARCHITECTURAL RUNNER
                </h3>
                <div className="font-mono text-xs text-[#59544c]">
                  EDITION: 01 // CREAM LEATHER & TRAVERTINE
                </div>
                <div className="font-mono text-[10px] text-[#7b6e54]">
                  AVAIL: 39 - 46 (EU) | INCLUDES ARCHIVE BOX
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleAcquireRunner}
                  className="w-full bg-[#141312] text-[#f5efe6] py-3 font-mono text-xs font-bold tracking-wider hover:bg-[#35322e] transition-colors flex justify-center items-center gap-2 cursor-pointer"
                >
                  ACQUIRE SPECIMEN +
                </button>
              </div>
            </div>

            {/* Product 2: Taupe Runner on Limestone */}
            <div className="border border-[#d5cdc0] bg-[#f5efe6] p-6 space-y-4 group hover:border-[#1a1816] transition-colors">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#59544c] border-b border-[#d5cdc0] pb-2">
                <span>SPECIMEN // 02 MINERAL TAUPE</span>
                <span className="font-bold text-[#1a1816] text-xs">{formatCurrency(520)}</span>
              </div>
              <div className="aspect-[4/3] bg-[#ede7dd] border border-[#d5cdc0] overflow-hidden relative">
                <img
                  src="/src/assets/images/taupe_runner_pedestal_1788842355799.jpg"
                  alt="Archival low runner in mineral taupe suede on limestone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 right-3 bg-[#ede7dd]/90 font-mono text-[10px] px-2 py-0.5 border border-[#d5cdc0]">
                  LIMITED ALLOTMENT
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="font-headline text-2xl font-bold text-[#1a1816]">
                  ARCHIVAL LOW RUNNER
                </h3>
                <div className="font-mono text-xs text-[#59544c]">
                  SERIES 02 // TAUPE SUEDE CHASSIS
                </div>
                <div className="font-mono text-[10px] text-[#7b6e54]">
                  AVAIL: 40 - 45 (EU) | ITALIAN TUSCAN SUEDE
                </div>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleAcquireTaupe}
                  className="w-full bg-[#141312] text-[#f5efe6] py-3 font-mono text-xs font-bold tracking-wider hover:bg-[#35322e] transition-colors flex justify-center items-center gap-2 cursor-pointer"
                >
                  ACQUIRE SPECIMEN +
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. DECONSTRUCT BLUEPRINT SECTION */}
        <section id="blueprint-section" className="border-t border-[#d5cdc0] pt-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Blueprint Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#7b6e54] font-bold block mb-1">
                  [ ANATOMY & WATERPROOF // SECTION 2-D ]
                </span>
                <h2 className="font-headline text-4xl sm:text-5xl text-[#1a1816] font-bold">
                  DECONSTRUCT
                  <br />
                  <span className="italic font-normal text-3xl sm:text-4xl text-[#59544c]">*BLUEPRINT*</span>
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#59544c] leading-relaxed">
                Every layer serves a structural mandate. We discard synthetic foams that crumble over time, replacing them with hand-milled cork beds, vulcanized rubber compounds, natural latex cushioning, and carbon aerospace plates.
              </p>

              {/* Interactive Layer List */}
              <div className="space-y-3">
                {blueprintLayers.map((layer, index) => {
                  const isSelected = activeLayer === index;
                  return (
                    <div
                      key={layer.id}
                      onClick={() => setActiveLayer(index)}
                      className={`border p-4 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#1a1816] bg-[#ede7dd]'
                          : 'border-[#d5cdc0] bg-[#f5efe6] hover:border-[#8e8474]'
                      }`}
                    >
                      <div className="flex justify-between items-center font-mono text-xs">
                        <span className="font-bold text-[#1a1816]">
                          [{layer.id}] {layer.title}
                        </span>
                        <span className="text-[10px] text-[#7b6e54]">{layer.tag}</span>
                      </div>
                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-[#d5cdc0] font-mono text-xs text-[#59544c] space-y-2">
                          <p>{layer.detail}</p>
                          <div className="text-[10px] text-[#1a1816] font-bold">
                            SPECS: {layer.specs}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Blueprint Architectural Image */}
            <div className="lg:col-span-6 border border-[#d5cdc0] bg-[#f6f1e8] p-4 sm:p-6 space-y-4">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#59544c] border-b border-[#d5cdc0] pb-2">
                <span>SCHEMATIC: EXPLODED VIEW // ELEVATION 90°</span>
                <span>FIG 4.2B</span>
              </div>
              <div className="aspect-[16/10] bg-[#ede7dd] border border-[#d5cdc0] overflow-hidden relative flex items-center justify-center">
                <img
                  src="/src/assets/images/blueprint_deconstruct_1788842375340.jpg"
                  alt="Vintage architectural exploded blueprint schematic of shoe construction on cream parchment paper"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-center border-t border-[#d5cdc0] pt-3">
                <div className="border border-[#d5cdc0] bg-[#ede7dd] p-2">
                  <div className="font-bold text-[#1a1816]">2800 TITANIUM SHANK</div>
                  <div className="text-[#59544c]">FORCE-RESISTANT</div>
                </div>
                <div className="border border-[#d5cdc0] bg-[#ede7dd] p-2">
                  <div className="font-bold text-[#1a1816]">180 HR</div>
                  <div className="text-[#59544c]">PRESSURE TESTED</div>
                </div>
                <div className="border border-[#d5cdc0] bg-[#ede7dd] p-2">
                  <div className="font-bold text-[#1a1816]">ZERO PETROL</div>
                  <div className="text-[#59544c]">ALL-NAT FORMULA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PRIVATE CLIENT ACCESS / DISPATCH CALLOUT */}
        <section id="dispatch-access-section" className="border border-[#d5cdc0] bg-[#e4ddcf] p-8 sm:p-12 lg:p-16 text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7b6e54] font-bold">
            [ PRIVATE CLIENT ACCESS // SYSTEM PROTOCOL ]
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#1a1816] font-bold leading-tight">
            FIND YOUR SIGNATURE.
            <br />
            <span className="italic font-normal text-2xl sm:text-4xl text-[#59544c]">
              *TACTILE BRUTALISM. ZERO COMPROMISE.*
            </span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#59544c] max-w-xl mx-auto leading-relaxed">
            Subscribe to the Vanta Dispatch to receive allocation tokens, private vault openings, and exclusive laboratory prototype records before public disclosure.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
            <input
              type="email"
              placeholder="ENTER SECURE EMAIL ADDRESS"
              value={dispatchEmail}
              onChange={(e) => setDispatchEmail(e.target.value)}
              className="flex-1 bg-[#ede7dd] border border-[#b8ad9c] px-4 py-3 font-mono text-xs text-[#1a1816] placeholder-[#8e8474] focus:outline-none focus:border-[#1a1816]"
            />
            <button
              type="submit"
              className="bg-[#7b6e54] hover:bg-[#685c44] text-white px-6 py-3 font-mono text-xs font-bold tracking-wider transition-colors cursor-pointer"
            >
              {isSubscribed ? 'AUTHORIZED ✓' : 'AUTHORIZE'}
            </button>
          </form>

          <div className="pt-4 flex justify-center gap-6 font-mono text-[10px] text-[#59544c]">
            <button onClick={() => onNavigate('SHOP')} className="hover:text-[#1a1816] underline cursor-pointer">
              DIRECT CATALOG
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('ARCHIVES')} className="hover:text-[#1a1816] underline cursor-pointer">
              ARCHIVE VAULT
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('ABOUT')} className="hover:text-[#1a1816] underline cursor-pointer">
              LEGAL PROVENANCE
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
