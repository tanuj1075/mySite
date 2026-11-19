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

  const heroSlides = [
    {
      id: '01',
      title: 'BUILT TO',
      highlight: 'MOVE',
      tag: '[ SPECIMEN CLASSIFICATION // ATELIER CRAFTSMANSHIP ]',
      description: 'Performance refined through simplicity. Artisanal saddle stitching on vegetable-tanned cream calfskin and natural crepe.',
      protocol: 'SYSTEM PROTOCOL: 8-TIER FABRICATION',
      matrix: 'BASE MATRIX: NATURAL TANNED LEATHER',
      provenance: 'PROVENANCE: MONTEBELLUNA, ITALY',
      image: '/assets/images/hero_welt_macro_1788842274475.jpg',
      alt: 'Macro detail of artisan saddle stitching and welt on cream leather runner',
      caption: 'CHOPPED CORK WEDGE // NATURAL CALF REINFORCEMENT',
      calloutTopLeft: '[ MACRO ATELIER // REINFORCED SADDLE STITCH ]',
      calloutTopRight: '[ TEXTURE: VEG-TANNED GRAIN ]',
      calloutBottomLeft: '[ POINT A: HAND-WELTED NATURAL CREPE ]',
      calloutBottomRight: '[ POINT B: 360° TEXTURED SUEDE RIM ]',
    },
    {
      id: '02',
      title: 'TRAVERTINE',
      highlight: 'PEDESTAL',
      tag: '[ ARCHITECTURAL ARCHIVE // EDITION 01 ]',
      description: 'X-01 Architectural Runner staged on untreated Roman travertine limestone. Dual-density foam core engineered for timeless ergonomics.',
      protocol: 'DENSITY WEDGE: 52 SHORE C',
      matrix: 'BASE MATRIX: FULL GRAIN CALFSKIN',
      provenance: 'PROVENANCE: CIVITANOVA MARCHE, ITALY',
      image: '/assets/images/cream_runner_pedestal_1788842341279.jpg',
      alt: 'Cream runner on travertine stone pedestal',
      caption: 'TRAVERTINE CREAM // RUNNER SPECIMEN X-01',
      calloutTopLeft: '[ SCULPTURAL PEDESTAL // ROMAN TRAVERTINE ]',
      calloutTopRight: '[ CHASSIS: 1.8MM CALFSKIN ]',
      calloutBottomLeft: '[ DUAL FOAM CUSHION MATRIX ]',
      calloutBottomRight: '[ UNIT WEIGHT: 395G PER HALF-PAIR ]',
    },
    {
      id: '03',
      title: 'MINERAL',
      highlight: 'TAUPE',
      tag: '[ RAW LIMESTONE // SERIES 02 ]',
      description: 'Tactile suede chassis resting on calcified mineral stone. Low-profile silhouette inspired by brutalist facades and mid-century speed.',
      protocol: 'SUEDE: TUSCAN ARTISANAL TANNING',
      matrix: 'BASE MATRIX: UNLINED ORGANIC SUEDE',
      provenance: 'PROVENANCE: TUSCANY, ITALY',
      image: '/assets/images/taupe_runner_pedestal_1788842355799.jpg',
      alt: 'Archival low runner in mineral taupe suede on limestone',
      caption: 'SERIES 02 // MINERAL TAUPE SUEDE CHASSIS',
      calloutTopLeft: '[ TACTILE TUSCAN SUEDE CHASSIS ]',
      calloutTopRight: '[ LIMESTONE MONOLITH REST ]',
      calloutBottomLeft: '[ CONTOURED HEEL COUNTER ]',
      calloutBottomRight: '[ TRACTION: GEOMETRIC SIPING ]',
    },
    {
      id: '04',
      title: 'BLUEPRINT',
      highlight: 'ANATOMY',
      tag: '[ SCHEMATIC DECONSTRUCT // FIG 4.2B ]',
      description: 'Exploded engineering blueprint schematic. Discarding petrochemical plastics for organic cork beds, 3K carbon plates, and biodegradable Hevea latex.',
      protocol: 'SHANK: 2800 TITANIUM REINFORCED',
      matrix: 'BASE MATRIX: 1.2MM 3K CARBON WEAVE',
      provenance: 'PROVENANCE: RESEARCH LAB 01',
      image: '/assets/images/blueprint_deconstruct_1788842375340.jpg',
      alt: 'Vintage architectural exploded blueprint schematic of shoe construction',
      caption: 'ANATOMY & WATERPROOF // EXPLODED ELEVATION',
      calloutTopLeft: '[ COMPONENT 01 // 3K CARBON WEAVE ]',
      calloutTopRight: '[ COMPONENT 02 // GRANULATED CORK CORE ]',
      calloutBottomLeft: '[ COMPONENT 03 // VEG-TANNED FOOTBED ]',
      calloutBottomRight: '[ COMPONENT 04 // VULCANIZED OUTSOLE ]',
    },
  ];

  const currentHero = heroSlides[heroSlide] || heroSlides[0];

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
      productId: 'vn-runner-x01',
      code: 'RUNNER_X01',
      name: 'X-01 ARCHITECTURAL RUNNER',
      edition: 'EDITION 01 // CREAM LEATHER & TRAVERTINE',
      price: 48000,
      image: '/assets/images/cream_runner_pedestal_1788842341279.jpg',
      colorway: 'Travertine Cream & Natural Crepe',
      specification: 'Size EU 42',
      availableSizes: ['EU 39', 'EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
      allocationStatus: 'Allocation Secured // 4 Units Left',
      quantity: 1,
      selectedColor: 'Travertine Cream & Natural Crepe',
      selectedSize: 'EU 42',
    };
    onQuickAddProduct(runnerItem);
  };

  const handleAcquireTaupe = () => {
    const taupeItem: CartItem = {
      id: 'vn-runner-taupe-02',
      productId: 'vn-runner-taupe-02',
      code: 'RUNNER_TAUPE_02',
      name: 'ARCHIVAL LOW RUNNER',
      edition: 'SERIES 02 // TAUPE SUEDE CHASSIS',
      price: 52000,
      image: '/assets/images/taupe_runner_pedestal_1788842355799.jpg',
      colorway: 'Mineral Taupe & Raw Limestone',
      specification: 'Size EU 43',
      availableSizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44'],
      allocationStatus: 'Allocation Secured // Limited Allotment',
      quantity: 1,
      selectedColor: 'Mineral Taupe & Raw Limestone',
      selectedSize: 'EU 43',
    };
    onQuickAddProduct(taupeItem);
  };

  const handleAcquireOvercoat = () => {
    const overcoatItem: CartItem = {
      id: 'vn-overcoat-01',
      productId: 'vn-overcoat-01',
      code: 'COAT_01',
      name: 'OVERSIZED TAILORED OVERCOAT',
      edition: 'CHAPTER 01 // HEAVY WOOL & STONE WEAVE',
      price: 89000,
      image: '/assets/images/overcoat_model_1788842290581.jpg',
      colorway: 'Raw Travertine & Heavy Wool',
      specification: 'Size 50',
      availableSizes: ['Size 46', 'Size 48', 'Size 50', 'Size 52'],
      allocationStatus: 'Allocation Secured // In Stock',
      quantity: 1,
      selectedColor: 'Raw Travertine & Heavy Wool',
      selectedSize: 'Size 50',
    };
    onQuickAddProduct(overcoatItem);
  };

  const curatedSpecimens = [
    {
      id: 'vn-runner-x01',
      category: 'FOOTWEAR',
      code: 'SPEC_01',
      specCode: 'RUNNER_X01',
      name: 'X-01 ARCHITECTURAL RUNNER',
      edition: 'EDITION 01 // CREAM LEATHER & TRAVERTINE',
      badge: 'VAULTED',
      era: '2023 - MONOLITH',
      year: '2023',
      price: 48000,
      image: '/assets/images/cream_runner_pedestal_1788842341279.jpg',
      composition: 'Tuscan Veg-Tanned Calfskin, Natural Crepe Rubber',
      outsoleOrChassis: 'Dual-Density Cold Cure Foam',
      description: 'Artisanal saddle stitching on vegetable-tanned cream calfskin and natural crepe. Precision-sculpted wedge on curved travertine.',
      dimensions: '310 × 115 × 128 mm',
      weight: '395g per half-pair',
      tensileStrength: '16,200 N/m²',
      avail: 'EU 39 - 45 | INCLUDES ARCHIVE BOX',
      allotment: '4/50 UNITS',
    },
    {
      id: 'vn-runner-taupe-02',
      category: 'FOOTWEAR',
      code: 'SPEC_02',
      specCode: 'RUNNER_TAUPE_02',
      name: 'ARCHIVAL LOW RUNNER',
      edition: 'SERIES 02 // TAUPE SUEDE CHASSIS',
      badge: 'PROTOTYPE',
      era: '2024 - VOID CORE',
      year: '2024',
      price: 52000,
      image: '/assets/images/taupe_runner_pedestal_1788842355799.jpg',
      composition: 'Italian Tuscan Suede, Raw Limestone Finish',
      outsoleOrChassis: 'Vibram Morflex Compound',
      description: 'Sand beige and tactile taupe suede chassis with dual-density foam wedge on curved travertino. Siped flex grooves for natural articulation.',
      dimensions: '305 × 112 × 124 mm',
      weight: '380g per half-pair',
      tensileStrength: '15,800 N/m²',
      avail: 'EU 40 - 44 | ITALIAN TUSCAN SUEDE',
      allotment: 'LIMITED ALLOTMENT',
    },
    {
      id: 'vn-overcoat-01',
      category: 'OUTERWEAR',
      code: 'SPEC_03',
      specCode: 'COAT_01',
      name: 'OVERSIZED TAILORED OVERCOAT',
      edition: 'CHAPTER 01 // HEAVY WOOL & STONE WEAVE',
      badge: 'LIMITED',
      era: '2024 - VOID CORE',
      year: '2024',
      price: 89000,
      image: '/assets/images/overcoat_model_1788842290581.jpg',
      composition: '100% Heavy Virgin Wool & Stone Fiber Weave',
      outsoleOrChassis: 'Structural Double-Faced Architecture',
      description: 'Oversized tailored technical overcoat paired with relaxed stone trousers. Horn buttons and unlined brutalist drape.',
      dimensions: 'Length 118cm / Drop 8',
      weight: '1420g total garment',
      tensileStrength: '22,000 N/m²',
      avail: 'Size 46 - 52 | Virgin Wool',
      allotment: 'IN STOCK // 12 UNITS',
    },
    {
      id: 'vn-composite-01',
      category: 'COMPOSITES',
      code: 'SPEC_04',
      specCode: 'COMP_01',
      name: '3K CARBON MIDSOLE INTEGRITY SHANK',
      edition: 'LAB SPEC 04 // 3K AEROSPACE COMPOSITE',
      badge: 'PROTOTYPE',
      era: '2025 - PROTOTYPES',
      year: '2025',
      price: 31000,
      image: '/assets/images/blueprint_deconstruct_1788842375340.jpg',
      composition: 'High-Modulus Carbon Fiber Prepreg, Titanium Hardware',
      outsoleOrChassis: 'Torsional Carbon Bridge',
      description: 'Precision-milled aerospace composite embedded between split dual-density foam wedges. 98g total shank transmitting dynamic stride stability.',
      dimensions: '220 × 65 × 1.2 mm',
      weight: '98g per plate',
      tensileStrength: '34,000 N/m²',
      avail: 'Universal Atelier Shank Specification',
      allotment: 'LAB RESERVATION ONLY',
    },
  ];

  const filteredCuratedSpecimens = curatedSpecimens.filter((spec) => {
    if (curatedCategory === 'ALL') return true;
    return spec.category === curatedCategory;
  });

  const handleAcquireSpecimenItem = (spec: typeof curatedSpecimens[0]) => {
    const cartItem: CartItem = {
      id: spec.id,
      productId: spec.id,
      code: spec.specCode,
      name: spec.name,
      edition: spec.edition,
      price: spec.price,
      image: spec.image,
      colorway: spec.category === 'FOOTWEAR' ? 'Travertine Cream & Natural Crepe' : 'Atelier Natural',
      specification: spec.avail,
      availableSizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44'],
      allocationStatus: `Allocated // ${spec.allotment}`,
      quantity: 1,
      selectedColor: spec.category === 'FOOTWEAR' ? 'Travertine Cream & Natural Crepe' : 'Atelier Natural',
      selectedSize: 'EU 42',
    };
    onQuickAddProduct(cartItem);
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
        'https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_f738959c-aee1-4f94-8196-4e8f5851b0f1.jpg?v=1786627248',
      accent: '#c9a96e',
    },
    {
      name: 'ADIDAS',
      tag: 'Streetwear essentials',
      image:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1d9a02f0be704fafbe3d6b8158afb9f6_9366/Samba_OG_Shoes_White_B75806_HM52.jpg',
      accent: '#8e8e98',
    },
    {
      name: 'NEW BALANCE',
      tag: 'Archival precision craft',
      image:
        'https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_a5825699-1271-458f-bc53-256835127394.jpg?v=1787745826',
      accent: '#c9a96e',
    },
    {
      name: 'ASICS',
      tag: 'Cushioned everyday speed',
      image:
        'https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_6aafbf14-2e6c-4363-96d4-024f073a6482.jpg?v=1790772488',
      accent: '#52525b',
    },
  ];

  return (
    <div id="front-page-root" className="bg-[#09090b] text-[#f4f4f6] min-h-screen">
      {/* 1. TOP SPECIFICATION CLASSIFICATION TICKER */}
      <div
        id="top-status-bar"
        className="w-full bg-[#09090b] border-b border-[#242429] px-4 sm:px-8 py-2 text-[10px] font-mono tracking-wider text-[#8e8e98] flex flex-wrap justify-between items-center gap-2"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse"></span>
          <span className="font-bold text-[#f4f4f6]">ATELIER STASIS: ACTIVE</span>
          <span className="text-[#3a3a42]">//</span>
          <span>MONTEBELLUNA & CIVITANOVA MARCHE, ITALY</span>
          <span className="text-[#3a3a42] hidden sm:inline">//</span>
          <span className="hidden sm:inline">SPEC_TIER: ARCHIVAL V4.2</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[10px]">
          <span>LAT: 45.7760° N</span>
          <span>|</span>
          <span>LON: 12.0460° E</span>
          <span>|</span>
          <span className="text-[#c9a96e] font-bold">CRYPTOGRAPHIC PROVENANCE: 100% VERIFIED</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-20 space-y-20 lg:space-y-28">
        
        {/* 2. HERO SECTION */}
        <section id="hero-specimen" className="pt-2">
          {/* Header row: title and technical metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-8 border-b border-[#242429]">
            <div className="lg:col-span-8 space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold flex items-center gap-2">
                <span>{currentHero.tag}</span>
              </div>
              <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#f4f4f6] leading-[0.95]">
                {currentHero.title} <span className="italic font-normal text-gold-gradient drop-shadow-[0_0_20px_rgba(201,169,110,0.3)]">{currentHero.highlight}</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#8e8e98] max-w-xl leading-relaxed pt-2">
                {currentHero.description}
              </p>
            </div>

            {/* Right metadata box & CTA buttons */}
            <div className="lg:col-span-4 space-y-4 lg:text-right">
              <div className="font-mono text-[11px] text-[#8e8e98] space-y-1">
                <div>{currentHero.protocol}</div>
                <div>{currentHero.matrix}</div>
                <div>{currentHero.provenance}</div>
              </div>
              <div className="flex items-center lg:justify-end gap-3 pt-2">
                <button
                  id="hero-view-catalog-btn"
                  onClick={() => onNavigate('SHOP')}
                  className="btn-tactile bg-[#f4f4f6] text-[#09090b] px-5 py-2.5 font-mono text-xs font-bold tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer shadow-lg"
                >
                  VIEW CATALOG →
                </button>
                <button
                  id="hero-specs-btn"
                  onClick={() => {
                    const el = document.getElementById('blueprint-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-tactile border border-[#242429] bg-[#121215] text-[#f4f4f6] px-4 py-2.5 font-mono text-xs font-bold tracking-wider hover:border-[#8e8e98] transition-colors cursor-pointer"
                >
                  SPECIFICATIONS
                </button>
              </div>
            </div>
          </div>

          {/* Hero Main Macro Image Display */}
          <div className="mt-8 relative border border-[#C9A96E]/30 bg-[#121215] overflow-hidden group shadow-[0_0_50px_rgba(201,169,110,0.1)] museum-corners">
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full max-h-[640px] overflow-hidden">
              <img
                key={currentHero.image}
                src={currentHero.image}
                alt={currentHero.alt}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/85 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40"></div>

              {/* Callout Badge 1: Top Left */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-[#18181c]/90 backdrop-blur-sm border border-[#242429] px-3 py-1.5 font-mono text-[10px] sm:text-xs text-[#f4f4f6] tracking-wider shadow-md">
                {currentHero.calloutTopLeft}
              </div>

              {/* Callout Badge 2: Top Right */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#18181c]/90 backdrop-blur-sm border border-[#242429] px-3 py-1.5 font-mono text-[10px] sm:text-xs text-[#f4f4f6] tracking-wider shadow-md">
                {currentHero.calloutTopRight}
              </div>

              {/* Callout Badge 3: Bottom Left */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#18181c]/90 backdrop-blur-sm border border-[#242429] px-3 py-1.5 font-mono text-[10px] sm:text-xs text-[#f4f4f6] tracking-wider shadow-md">
                {currentHero.calloutBottomLeft}
              </div>

              {/* Callout Badge 4: Bottom Right */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#18181c]/90 backdrop-blur-sm border border-[#242429] px-3 py-1.5 font-mono text-[10px] sm:text-xs text-[#f4f4f6] tracking-wider shadow-md">
                {currentHero.calloutBottomRight}
              </div>
            </div>

            {/* Sub-hero pagination bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-t border-[#242429] bg-[#121215] font-mono text-xs">
              <div className="flex items-center gap-3 text-[#8e8e98]">
                <span className="font-bold text-[#f4f4f6]">{currentHero.id}</span>
                <span>/</span>
                <span>04</span>
                <span className="hidden sm:inline-block pl-2 border-l border-[#242429] text-[10px]">
                  {currentHero.caption}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setHeroSlide(idx)}
                    className={`w-7 h-7 text-xs flex items-center justify-center font-bold border transition-colors cursor-pointer ${
                      heroSlide === idx
                        ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6]'
                        : 'border-[#242429] bg-[#18181c] text-[#8e8e98] hover:text-[#f4f4f6] hover:border-[#3a3a42]'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
                <div className="w-[1px] h-4 bg-[#242429] mx-1"></div>
                <button
                  onClick={() => setHeroSlide((s) => (s > 0 ? s - 1 : 3))}
                  className="w-7 h-7 text-xs flex items-center justify-center border border-[#242429] bg-[#18181c] text-[#8e8e98] hover:text-[#f4f4f6] hover:border-[#3a3a42] transition-colors cursor-pointer"
                  title="Previous Slide"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setHeroSlide((s) => (s < 3 ? s + 1 : 0))}
                  className="w-7 h-7 text-xs flex items-center justify-center border border-[#242429] bg-[#18181c] text-[#8e8e98] hover:text-[#f4f4f6] hover:border-[#3a3a42] transition-colors cursor-pointer"
                  title="Next Slide"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Featured Collection Banner */}
        <section id="featured-collection-section" className="border border-[#242429] bg-[#121215] p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#242429] pb-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#c9a96e] font-bold block mb-2">
                [ FEATURED COLLECTION ]
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#f4f4f6] font-bold">
                PREMIUM BRAND EDITIONS
              </h2>
            </div>
            <button
              onClick={() => onNavigate('SHOP')}
              className="font-mono text-[10px] font-bold text-[#c9a96e] hover:text-[#f4f4f6] flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>[ VIEW ALL BRAND SPECIMENS → ]</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {featuredBrandCards.map((brand) => (
              <div
                key={brand.name}
                className="specimen-card museum-corners group border border-[#242429] bg-[#121215] transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#09090b] pedestal-glow">
                  <img
                    src={brand.image}
                    alt={`${brand.name} sneaker product detail`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/cream_runner_pedestal_1788842341279.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#c9a96e]">
                      {brand.name}
                    </span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: brand.accent }}></span>
                  </div>
                  <p className="font-mono text-[11px] text-[#8e8e98] leading-relaxed">{brand.tag}</p>
                  <button
                    onClick={() => onNavigate('SHOP')}
                    className="font-mono text-[10px] font-bold text-[#f4f4f6] hover:text-[#c9a96e] cursor-pointer transition-colors"
                  >
                    VIEW COLLECTION →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. MANIFESTO & PHILOSOPHY SECTION */}
        <section id="manifesto-section" className="border-t border-[#242429] pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left column */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#c9a96e] font-bold">
                [ MANIFESTO // 001 ]
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl text-[#f4f4f6] font-bold leading-tight">
                ZERO PLANNED OBSOLESCENCE. ZERO DECORATION.
              </h3>
              <div className="w-16 h-[2px] bg-[#c9a96e]"></div>
            </div>

            {/* Right column */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#f4f4f6] leading-tight">
                WE REJECT FAST FASHION AS MORAL COLLAPSE.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs sm:text-sm text-[#8e8e98] leading-relaxed">
                <p>
                  VANTA specimens are conceived at the intersection of monolithic brutalist architecture and technical performance leather craft. Each artifact is produced in limited allocations inside our Civitanova Marche workshop using cold-cure hand vulcanization.
                </p>
                <p>
                  We design not for seasonal trend cycles, but for geological permanence. When the exterior structure encounters abrasion, the materials beneath reveal deeper textures rather than failure. Wear is an archival record.
                </p>
              </div>

              {/* 4 Technical Metric Columns */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#242429]">
                <div className="border-l-2 border-[#c9a96e] pl-3 py-1">
                  <div className="font-mono text-[10px] text-[#8e8e98] uppercase">TENSILE MATRIX</div>
                  <div className="font-mono text-base font-bold text-[#f4f4f6]">16,200 N/m²</div>
                </div>
                <div className="border-l-2 border-[#c9a96e] pl-3 py-1">
                  <div className="font-mono text-[10px] text-[#8e8e98] uppercase">WORKSHOP CYCLE</div>
                  <div className="font-mono text-base font-bold text-[#f4f4f6]">72 HRS / PAIR</div>
                </div>
                <div className="border-l-2 border-[#c9a96e] pl-3 py-1">
                  <div className="font-mono text-[10px] text-[#8e8e98] uppercase">REPLACEMENT PARTS</div>
                  <div className="font-mono text-base font-bold text-[#f4f4f6]">PERPETUAL</div>
                </div>
                <div className="border-l-2 border-[#c9a96e] pl-3 py-1">
                  <div className="font-mono text-[10px] text-[#8e8e98] uppercase">CARBON IMPACT</div>
                  <div className="font-mono text-base font-bold text-[#f4f4f6]">100% BALANCED</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PERMANENT ARCHIVE SHOWCASE SECTION */}
        <section id="permanent-archive-section" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#242429] pb-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#c9a96e] font-bold block mb-1">
                [ EXPOSURE // ARCHIVAL SPEC 01-04 ]
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#f4f4f6] font-bold">
                PERMANENT ARCHIVE
              </h2>
            </div>
            <button
              onClick={() => onNavigate('ARCHIVES')}
              className="font-mono text-xs font-bold text-[#c9a96e] hover:text-[#f4f4f6] flex items-center gap-2 self-start sm:self-auto cursor-pointer transition-colors"
            >
              <span>[ OPEN COMPLETE VAULT (84 PIECES) → ]</span>
            </button>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Outerwear */}
            <div className="border border-[#242429] bg-[#121215] flex flex-col group hover:border-[#3a3a42] transition-colors shadow-lg">
              <div className="p-3 border-b border-[#242429] flex justify-between items-center font-mono text-[10px] text-[#8e8e98]">
                <span>[ CHAPTER // 01 DROP ]</span>
                <span className="text-[#c9a96e] font-bold">[ IN STOCK ]</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden relative bg-[#09090b]">
                <img
                  src="/assets/images/overcoat_model_1788842290581.jpg"
                  alt="Oversized tailored overcoat model in brutalist limestone setting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-headline text-lg text-[#f4f4f6] font-bold">OUTERWEAR REIMAGINED</h3>
                  <p className="font-mono text-[11px] text-[#8e8e98] mt-1 leading-relaxed">
                    Oversized tailored technical overcoat paired with relaxed stone trousers and neutral footwear.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#242429] flex justify-between items-center font-mono text-[11px]">
                  <span className="text-[#c9a96e]">VIEWING COLLECTION</span>
                  <button
                    onClick={handleAcquireOvercoat}
                    className="font-bold text-[#f4f4f6] hover:text-[#c9a96e] cursor-pointer transition-colors"
                  >
                    VIEW LOOK →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Craft Specification */}
            <div className="border border-[#242429] bg-[#121215] flex flex-col group hover:border-[#3a3a42] transition-colors shadow-lg">
              <div className="p-3 border-b border-[#242429] flex justify-between items-center font-mono text-[10px] text-[#8e8e98]">
                <span>[ ATELIER // DETAIL ]</span>
                <span className="text-[#c9a96e] font-bold">[ HAND-STITCHED ]</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden relative bg-[#09090b]">
                <img
                  src="/assets/images/craft_heel_detail_1788842306184.jpg"
                  alt="Macro detail of shoe heel and welt stitching"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-headline text-lg text-[#f4f4f6] font-bold">CRAFT SPECIFICATION</h3>
                  <p className="font-mono text-[11px] text-[#8e8e98] mt-1 leading-relaxed">
                    Artisanal saddle stitching on vegetable-tanned cream calfskin and natural crepe rubber foundation.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#242429] flex justify-between items-center font-mono text-[11px]">
                  <span className="text-[#c9a96e]">STITCH SPEC</span>
                  <button
                    onClick={() => {
                      const el = document.getElementById('blueprint-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-bold text-[#f4f4f6] hover:text-[#c9a96e] cursor-pointer transition-colors"
                  >
                    INSPECT CRAFT →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Travertine Leisure */}
            <div className="border border-[#242429] bg-[#121215] flex flex-col group hover:border-[#3a3a42] transition-colors shadow-lg">
              <div className="p-3 border-b border-[#242429] flex justify-between items-center font-mono text-[10px] text-[#8e8e98]">
                <span>[ CHAPTER // ARCHITECTURE ]</span>
                <span className="text-[#c9a96e] font-bold">[ EDITION 03 ]</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden relative bg-[#09090b]">
                <img
                  src="/assets/images/travertine_model_1788842319956.jpg"
                  alt="Model wearing neutral cream suiting and court runner in sunlit stone courtyard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-headline text-lg text-[#f4f4f6] font-bold">TRAVERTINE LEISURE</h3>
                  <p className="font-mono text-[11px] text-[#8e8e98] mt-1 leading-relaxed">
                    Ivory calfskin court runner paired with relaxed neutral suiting. Warm architectural presence.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#242429] flex justify-between items-center font-mono text-[11px]">
                  <span className="text-[#c9a96e]">IN REVIEW</span>
                  <button
                    onClick={() => onNavigate('SHOP')}
                    className="font-bold text-[#f4f4f6] hover:text-[#c9a96e] cursor-pointer transition-colors"
                  >
                    VIEW RUNNER →
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4: Archival Runner */}
            <div className="border border-[#242429] bg-[#121215] flex flex-col group hover:border-[#3a3a42] transition-colors shadow-lg">
              <div className="p-3 border-b border-[#242429] flex justify-between items-center font-mono text-[10px] text-[#8e8e98]">
                <span>[ FOOTWEAR // ALLOCATED ]</span>
                <span className="text-[#c9a96e] font-bold">[ {formatCurrency(48000)} ]</span>
              </div>
              <div className="aspect-[3/4] overflow-hidden relative bg-[#09090b]">
                <img
                  src="/assets/images/cream_runner_pedestal_1788842341279.jpg"
                  alt="Handmade luxury cream sneaker resting on rough travertine block"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-headline text-lg text-[#f4f4f6] font-bold">ARCHIVAL RUNNER</h3>
                  <p className="font-mono text-[11px] text-[#8e8e98] mt-1 leading-relaxed">
                    Sand beige and tactile taupe suede chassis with dual-density foam wedge on curved travertino.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#242429] flex justify-between items-center font-mono text-[11px]">
                  <span className="text-[#c9a96e]">STATUS: ALLOCATED</span>
                  <button
                    onClick={handleAcquireRunner}
                    className="font-bold text-[#f4f4f6] hover:text-[#c9a96e] cursor-pointer transition-colors"
                  >
                    ACQUIRE →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. TRAVERTINE MONOLITH (LIMITED 300 UNITS) COUNTDOWN SECTION */}
        <section id="travertine-monolith-section" className="border border-[#242429] bg-[#121215] p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#c9a96e] font-bold">
                [ UPCOMING BESPOKE ALLOCATION ]
              </div>
              <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#f4f4f6] font-bold leading-[1.05]">
                TRAVERTINE MONOLITH
                <br />
                <span className="italic font-normal text-3xl sm:text-4xl text-[#8e8e98]">*LIMITED 300 UNITS*</span>
              </h2>
              <p className="font-mono text-xs sm:text-sm text-[#8e8e98] leading-relaxed max-w-xl">
                Encapsulated cold-cure resin architecture and soft cream leather. Cryptographically signed authentication chip embedded in the lateral heel counter. Priority queue open for archive members.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="reserve-priority-queue-btn"
                  onClick={onClaimVoidRunner}
                  className="bg-[#f4f4f6] text-[#09090b] px-6 py-3 font-mono text-xs font-bold tracking-wider hover:bg-[#c9a96e] transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Lock className="w-3.5 h-3.5" />
                  RESERVE PRIORITY QUEUE
                </button>
                <button
                  id="safety-protocol-btn"
                  onClick={() => onShowToast('SAFETY PROTOCOL: V4.2 CRYPTO-HASH VERIFICATION EMBEDDED')}
                  className="border border-[#242429] bg-[#18181c] text-[#f4f4f6] px-5 py-3 font-mono text-xs font-bold tracking-wider hover:border-[#8e8e98] transition-colors cursor-pointer"
                >
                  SAFETY PROTOCOL
                </button>
              </div>
            </div>

            {/* Right Countdown Panel */}
            <div className="lg:col-span-5 bg-[#18181c] border border-[#242429] p-6 space-y-5">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#8e8e98] border-b border-[#242429] pb-3">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse"></span>
                  PRE-ALLOCATION // SYNCHRONIZING UTC
                </span>
                <span className="font-bold text-[#f4f4f6]">ATELIER MADE-TO-ORDER: 7 WEEKS</span>
              </div>

              {/* 4 Metric Boxes */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="border border-[#242429] bg-[#121215] p-2.5">
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-[#f4f4f6]">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[9px] text-[#8e8e98] uppercase mt-1">DAYS</div>
                </div>
                <div className="border border-[#242429] bg-[#121215] p-2.5">
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-[#f4f4f6]">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[9px] text-[#8e8e98] uppercase mt-1">HOURS</div>
                </div>
                <div className="border border-[#242429] bg-[#121215] p-2.5">
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-[#f4f4f6]">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[9px] text-[#8e8e98] uppercase mt-1">MINS</div>
                </div>
                <div className="border border-[#242429] bg-[#121215] p-2.5">
                  <div className="font-headline text-2xl sm:text-3xl font-bold text-[#f4f4f6]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="font-mono text-[9px] text-[#8e8e98] uppercase mt-1">SECS</div>
                </div>
              </div>

              {/* Progress Meter */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between font-mono text-[10px] text-[#8e8e98]">
                  <span>PRE-ALLOCATION ALLOTMENT</span>
                  <span className="font-bold text-[#c9a96e]">87.2% COMMITTED</span>
                </div>
                <div className="w-full h-2 bg-[#242429] overflow-hidden">
                  <div className="w-[87.2%] h-full bg-[#c9a96e]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CURATED EDITIONS SECTION */}
        <section id="curated-editions-section" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#242429] pb-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#c9a96e] font-bold block mb-1">
                [ CLASSIFIED CATALOG ]
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#f4f4f6] font-bold">
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
                      ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6] font-bold'
                      : 'bg-[#18181c] text-[#8e8e98] border-[#242429] hover:text-[#f4f4f6] hover:border-[#3a3a42]'
                  }`}
                >
                  {cat === 'ALL' ? 'ALL EDITIONS' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center font-mono text-[11px] text-[#8e8e98]">
            <span>SWIPE TO EXPLORE SPECIMENS</span>
            <div className="flex items-center gap-1">
              <button
                className="w-7 h-7 border border-[#242429] bg-[#18181c] text-[#8e8e98] flex items-center justify-center hover:text-[#f4f4f6] hover:border-[#3a3a42] cursor-pointer"
                title="Previous item"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                className="w-7 h-7 border border-[#242429] bg-[#18181c] text-[#8e8e98] flex items-center justify-center hover:text-[#f4f4f6] hover:border-[#3a3a42] cursor-pointer"
                title="Next item"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Product Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCuratedSpecimens.map((spec) => (
              <div
                key={spec.id}
                className="specimen-card museum-corners border border-[#242429] bg-[#121215] p-6 space-y-4 group flex flex-col justify-between shadow-2xl transition-all"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center font-mono text-[10px] text-[#8e8e98] border-b border-[#242429] pb-2">
                    <span className="font-bold text-[#c9a96e]">
                      {spec.code} // {spec.category}
                    </span>
                    <span className="font-bold text-gold-gradient text-xs">
                      {formatCurrency(spec.price)}
                    </span>
                  </div>

                  <div className="aspect-[4/3] bg-[#09090b] border border-[#242429] overflow-hidden relative pedestal-glow">
                    <img
                      src={spec.image}
                      alt={spec.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 bg-[#f4f4f6] text-[#09090b] font-mono text-[9px] px-2 py-0.5 tracking-wider uppercase font-bold">
                      {spec.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-[#121215]/90 border border-[#c9a96e]/40 font-mono text-[10px] text-[#c9a96e] px-2 py-0.5 shadow-md">
                      {spec.allotment}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-headline text-2xl font-bold text-[#f4f4f6] group-hover:text-gold-gradient transition-colors">
                      {spec.name}
                    </h3>
                    <div className="font-mono text-xs text-[#8e8e98]">
                      {spec.edition}
                    </div>
                    <p className="font-mono text-[11px] text-[#8e8e98] leading-relaxed line-clamp-2">
                      {spec.description}
                    </p>
                    <div className="font-mono text-[10px] text-[#c9a96e] pt-1">
                      {spec.avail}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#242429]">
                  <button
                    onClick={() => {
                      if (onInspectSpecimen) {
                        onInspectSpecimen(spec);
                      } else {
                        onNavigate('SHOP');
                      }
                    }}
                    className="btn-tactile py-2.5 px-2 bg-[#18181c] hover:bg-[#242429] text-[#f4f4f6] border border-[#242429] hover:border-[#8e8e98] text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <span>INSPECT SPEC</span>
                  </button>
                  <button
                    onClick={() => handleAcquireSpecimenItem(spec)}
                    className="btn-tactile py-2.5 px-2 bg-gradient-to-r from-[#C9A96E] via-[#EAE3D5] to-[#C9A96E] text-[#09090B] font-bold text-[10px] uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer hover:brightness-110 transition-all shadow-[0_0_15px_rgba(201,169,110,0.25)]"
                  >
                    <span>ACQUIRE +</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. DECONSTRUCT BLUEPRINT SECTION */}
        <section id="blueprint-section" className="border-t border-[#242429] pt-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Blueprint Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#c9a96e] font-bold block mb-1">
                  [ ANATOMY & WATERPROOF // SECTION 2-D ]
                </span>
                <h2 className="font-headline text-4xl sm:text-5xl text-[#f4f4f6] font-bold">
                  DECONSTRUCT
                  <br />
                  <span className="italic font-normal text-3xl sm:text-4xl text-[#8e8e98]">*BLUEPRINT*</span>
                </h2>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#8e8e98] leading-relaxed">
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
                          ? 'border-[#f4f4f6] bg-[#18181c]'
                          : 'border-[#242429] bg-[#121215] hover:border-[#3a3a42]'
                      }`}
                    >
                      <div className="flex justify-between items-center font-mono text-xs">
                        <span className="font-bold text-[#f4f4f6]">
                          [{layer.id}] {layer.title}
                        </span>
                        <span className="text-[10px] text-[#c9a96e]">{layer.tag}</span>
                      </div>
                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-[#242429] font-mono text-xs text-[#8e8e98] space-y-2">
                          <p>{layer.detail}</p>
                          <div className="text-[10px] text-[#c9a96e] font-bold">
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
            <div className="lg:col-span-6 border border-[#242429] bg-[#121215] p-4 sm:p-6 space-y-4 shadow-xl">
              <div className="flex justify-between items-center font-mono text-[10px] text-[#8e8e98] border-b border-[#242429] pb-2">
                <span>SCHEMATIC: EXPLODED VIEW // ELEVATION 90°</span>
                <span>FIG 4.2B</span>
              </div>
              <div className="aspect-[16/10] bg-[#09090b] border border-[#242429] overflow-hidden relative flex items-center justify-center">
                <img
                  src="/assets/images/blueprint_deconstruct_1788842375340.jpg"
                  alt="Vintage architectural exploded blueprint schematic of shoe construction on cream parchment paper"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-center border-t border-[#242429] pt-3">
                <div className="border border-[#242429] bg-[#18181c] p-2">
                  <div className="font-bold text-[#f4f4f6]">2800 TITANIUM SHANK</div>
                  <div className="text-[#8e8e98]">FORCE-RESISTANT</div>
                </div>
                <div className="border border-[#242429] bg-[#18181c] p-2">
                  <div className="font-bold text-[#f4f4f6]">180 HR</div>
                  <div className="text-[#8e8e98]">PRESSURE TESTED</div>
                </div>
                <div className="border border-[#242429] bg-[#18181c] p-2">
                  <div className="font-bold text-[#f4f4f6]">ZERO PETROL</div>
                  <div className="text-[#8e8e98]">ALL-NAT FORMULA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. PRIVATE CLIENT ACCESS / DISPATCH CALLOUT */}
        <section id="dispatch-access-section" className="border border-[#242429] bg-[#121215] p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#c9a96e] font-bold">
            [ PRIVATE CLIENT ACCESS // SYSTEM PROTOCOL ]
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#f4f4f6] font-bold leading-tight">
            FIND YOUR SIGNATURE.
            <br />
            <span className="italic font-normal text-2xl sm:text-4xl text-[#8e8e98]">
              *TACTILE BRUTALISM. ZERO COMPROMISE.*
            </span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#8e8e98] max-w-xl mx-auto leading-relaxed">
            Subscribe to the Vanta Dispatch to receive allocation tokens, private vault openings, and exclusive laboratory prototype records before public disclosure.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
            <input
              type="email"
              placeholder="ENTER SECURE EMAIL ADDRESS"
              value={dispatchEmail}
              onChange={(e) => setDispatchEmail(e.target.value)}
              className="flex-1 bg-[#18181c] border border-[#242429] px-4 py-3 font-mono text-xs text-[#f4f4f6] placeholder-[#52525b] focus:outline-none focus:border-[#8e8e98] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#f4f4f6] hover:bg-[#c9a96e] text-[#09090b] px-6 py-3 font-mono text-xs font-bold tracking-wider transition-colors cursor-pointer shadow-md"
            >
              {isSubscribed ? 'AUTHORIZED ✓' : 'AUTHORIZE'}
            </button>
          </form>

          <div className="pt-4 flex justify-center gap-6 font-mono text-[10px] text-[#8e8e98]">
            <button onClick={() => onNavigate('SHOP')} className="hover:text-[#f4f4f6] underline cursor-pointer transition-colors">
              DIRECT CATALOG
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('ARCHIVES')} className="hover:text-[#f4f4f6] underline cursor-pointer transition-colors">
              ARCHIVE VAULT
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('ABOUT')} className="hover:text-[#f4f4f6] underline cursor-pointer transition-colors">
              LEGAL PROVENANCE
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
