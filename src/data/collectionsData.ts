export interface CollectionChapter {
  id: string;
  chapterNumber: string;
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  seriesRef?: string;
  piecesCount?: string;
  composition?: string;
  allocation?: string;
  image: string;
  actionText: string;
}

export const MAIN_COLLECTION_HERO = {
  chapter: 'CHAPTER 01 // DEPLOYED',
  seriesRef: '2025.05.01',
  piecesCount: '48 PIECES',
  tag: 'MAIN DROP',
  title: 'SS25 MONOLITH',
  description:
    'Engineered with raw titanium hardware inserts, basalt carbon composites, and high-density woven tech-membrane. Built to withstand environmental attrition while maintaining stark brutalist silhouettes.',
  composition: 'TITANIUM / BASALT / DRY-SHELL',
  allocation: 'TIER-1 CLIENT PRIVILEGE',
  image: '/src/assets/images/ss25_monolith_model_1788838295128.jpg',
  actionLabel: 'EXPLORE COLLECTION',
};

export const CORE_SILHOUETTES_DATA = {
  chapter: 'CHAPTER 02',
  systemArchive: 'SYSTEM ARCHIVE',
  title: 'THE CORE SILHOUETTES',
  editionsCount: '14 EDITIONS',
  description:
    'Timeless architectural footwear and garments constructed for permanent wear. Continuous iterative refinement eliminates the non-essential down to structural line-work and tactile mass.',
  image: '/src/assets/images/core_silhouettes_shoe_1788838314612.jpg',
  status: 'PERMANENT ROTATION',
  actionLabel: 'VIEW SILHOUETTES',
};

export const VOID_RUNNER_DROP = {
  status: 'STATUS: ACTIVE DROP',
  spec: 'SPEC 02 // 500 UNITS',
  title: 'VOID RUNNER',
  description:
    'Exclusive small-batch production numbered 01 through 500. Carbon-composite plate dynamics encased in dense, sound-dampening expanded cellular rubber.',
  image: '/src/assets/images/void_runner_heel_1788838329834.jpg',
  serial: 'RUN SERIAL: M001-M500',
  authenticated: 'AUTHENTICATED',
  actionLabel: 'CLAIM FROM RUN',
  price: 590,
  code: 'VR_SPEC02',
  colorway: 'Matte Vanta Obsidian',
  specification: 'US 10 / EU 44',
};

export const TECHNICAL_STREETWEAR_DATA = {
  chapter: 'CHAPTER 04 // MODULAR WEAR',
  title: 'TECHNICAL STREETWEAR & HARDWARE',
  description:
    'Laser-sealed bonded hems, magnetic FIDLOCK harness anchors, and heavyweight 600GSM Japanese terry loop fleece.',
  items: [
    {
      id: 'modular-shell-01',
      title: 'VANTA MODULAR SHELL 01',
      spec: 'WATERPROOF MEMBRANE / 3L CORDURA',
      badge: 'WATERPROOF MEMBRANE // CORE SHELL',
      image: '/src/assets/images/modular_shell_jacket_1788838380925.jpg',
      price: 680,
      code: 'SHELL_01',
    },
    {
      id: 'archival-hoodie-01',
      title: 'BRUTALIST ARCHIVAL HOODIE',
      spec: '600GSM DENSE WEAVE / DOUBLE SEAMED',
      badge: 'HEAVY FLEECE // SYSTEM HOOD',
      image: '/src/assets/images/brutalist_hoodie_model_1788838400495.jpg',
      price: 340,
      code: 'HOODIE_01',
    },
  ],
};

export const BOTTOM_CHAPTERS_DATA = [
  {
    id: 'ch-05',
    chapter: 'CHAPTER 05',
    badge: 'ARCHIVAL RECORD',
    title: 'RETRO RUNNER & BASALT',
    description:
      'Vintage brutalist track and marathon shapes re-engineered for hostile urban conditions. Deconstructed toe profiles, exposed seam taping, and high-impact dampening.',
    image: '/src/assets/images/core_silhouettes_shoe_1788838314612.jpg',
    footerInfo: 'ARCHIVED EDITIONS: 11 PIECES',
    actionLabel: 'EXPLORE ARCHIVE',
  },
  {
    id: 'ch-03',
    chapter: 'CHAPTER 03',
    badge: 'TIER ZERO',
    title: 'BEST SELLERS // PERPETUAL',
    description:
      'The canonical pillars of the VANTA uniform. Selected pieces kept in strict controlled re-production due to structural demand and timeless utility.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ThghKA86_Q_fCtpbOYWUAXmvMm4Kf4vgJ-95R0P-GQ7-54iwFQ62OpUehTva7Lrre3Ck5BjdqT7PUtCCGH_Wwz9Qk1N3F51WG23E6k-tKfVRluMWnTRRYRy6YduVh0jcNpwIPzJKKLLQNu5rPsw0IaxUNhwzkbSAvw_vY21enZZWo4B3GBLdESGfe0zbL-6o1u1T3qeO9zjOjR-QtFgx4y4HeU92YYx41_HJVG_A7dJiUenDyx1z',
    footerInfo: 'ESSENTIAL INVENTORY: IN STOCK',
    actionLabel: 'BROWSE CANON',
  },
];

export const PRODUCTION_MANIFESTO_ITEMS = [
  {
    index: 'INDEX 01',
    title: 'COMPUTED GRAVITY',
    description:
      'Soles weighted to provide exact kinetic feedback and anatomical balance across rough terrain.',
  },
  {
    index: 'INDEX 02',
    title: 'LASER CONSTRUCT',
    description:
      'Every seam ultrasonic-bonded without redundant needle perforations for absolute weather sealing.',
  },
  {
    index: 'INDEX 03',
    title: 'TRACEABLE ALLOCATION',
    description:
      'Embedded cryptographically signed serial badges inside interior garment lining.',
  },
];
