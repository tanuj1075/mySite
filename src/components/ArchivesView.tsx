import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, ArrowRight, Layers, Sliders } from 'lucide-react';
import { ARCHIVE_SPECIMENS, MATERIAL_DOSSIER_ITEMS } from '../data/archiveData';
import { ArchiveSpecimen, MaterialDossierItem } from '../types';

interface ArchivesViewProps {
  onInspectSpecimen: (specimen: ArchiveSpecimen) => void;
  onRequestAccess: (specimen: ArchiveSpecimen) => void;
  onNavigate: (nav: string) => void;
  onShowToast: (msg: string) => void;
}

export const ArchivesView: React.FC<ArchivesViewProps> = ({
  onInspectSpecimen,
  onRequestAccess,
  onNavigate,
  onShowToast,
}) => {
  const [selectedEra, setSelectedEra] = useState<string>('ALL ERA [08]');
  const [currentRailIndex, setCurrentRailIndex] = useState<number>(0);
  const [selectedLayerId, setSelectedLayerId] = useState<string>('01');

  const eraFilters = [
    'ALL ERA [08]',
    '2021 - ORIGIN',
    '2022 - HYPER-DENSE',
    '2023 - MONOLITH',
    '2024 - VOID CORE',
    '2025 - PROTOTYPES',
  ];

  // Filter specimens based on selected era
  const filteredSpecimens = ARCHIVE_SPECIMENS.filter((item) => {
    if (selectedEra === 'ALL ERA [08]') return true;
    return item.era === selectedEra;
  });

  const totalSpecimens = filteredSpecimens.length;
  const safeIndex = Math.min(currentRailIndex, Math.max(0, totalSpecimens - 1));

  const visibleSpecimens = filteredSpecimens.slice(safeIndex, safeIndex + 2);
  if (visibleSpecimens.length < 2 && safeIndex > 0) {
    visibleSpecimens.unshift(filteredSpecimens[safeIndex - 1]);
  }

  const handlePrevRail = () => {
    setCurrentRailIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextRail = () => {
    setCurrentRailIndex((prev) => Math.min(totalSpecimens - 2, prev + 1));
  };

  const selectedDossier =
    MATERIAL_DOSSIER_ITEMS.find((m) => m.layerId === selectedLayerId) ||
    MATERIAL_DOSSIER_ITEMS[0];

  return (
    <div className="w-full bg-[#ede7dd] text-[#1a1816] font-mono pb-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pt-8">
        {/* Top Status Line */}
        <div className="flex items-center gap-2 text-[10px] text-[#7b6e54] uppercase tracking-[0.2em] mb-4 font-bold">
          <span className="w-1.5 h-1.5 bg-[#1a1816] inline-block"></span>
          <span>
            ARCHIVE REPOSITORY // LAT: 59°19'N LON: 18°04'E // STASIS_BUILD: 004.2
          </span>
        </div>

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#d5cdc0] pb-8 mb-8">
          <div>
            <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-[#1a1816] leading-none mb-4">
              THE PERMANENT ARCHIVE
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[#59544c] max-w-2xl leading-relaxed">
              Historical releases, vaulted prototypes, and decommissioned iterations preserved in digital stasis.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-1">
            <span className="border border-[#d5cdc0] bg-[#e4ddcf] px-3 py-1 text-[10px] font-bold text-[#1a1816] uppercase tracking-wider">
              CURATED ACCESS ONLY
            </span>
            <span className="text-[10px] text-[#7b6e54] tracking-wider mt-1 font-bold">
              SPEC_TIER: 01-ALPHA &nbsp; INDEX: 8 MILESTONES
            </span>
          </div>
        </div>

        {/* Era Index Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#d5cdc0] text-[10px]">
          <span className="text-[#7b6e54] mr-2 uppercase tracking-wider font-bold">ERA_INDEX:</span>
          {eraFilters.map((era) => {
            const isSelected = selectedEra === era;
            return (
              <button
                key={era}
                onClick={() => {
                  setSelectedEra(era);
                  setCurrentRailIndex(0);
                }}
                className={`px-3 py-1.5 font-mono uppercase tracking-wider transition-colors cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1a1816] text-[#ede7dd] border-[#1a1816] font-bold'
                    : 'bg-[#f5efe6] text-[#59544c] border-[#d5cdc0] hover:border-[#1a1816] hover:text-[#1a1816]'
                }`}
              >
                {era}
              </button>
            );
          })}
        </div>

        {/* MUSEUM SPEC RAIL CONTROLS & CARDS */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#7b6e54] uppercase tracking-widest font-bold">
                MUSEUM SPEC RAIL
              </span>
              <span className="font-headline text-lg font-bold text-[#1a1816]">
                {String(safeIndex + 1).padStart(2, '0')} / {String(totalSpecimens).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevRail}
                disabled={safeIndex === 0}
                className="w-8 h-8 bg-[#f5efe6] border border-[#d5cdc0] flex items-center justify-center text-[#59544c] hover:text-[#1a1816] hover:border-[#1a1816] disabled:opacity-30 disabled:hover:border-[#d5cdc0] disabled:hover:text-[#59544c] cursor-pointer transition-colors"
                aria-label="Previous rail item"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextRail}
                disabled={safeIndex >= totalSpecimens - 2}
                className="w-8 h-8 bg-[#f5efe6] border border-[#d5cdc0] flex items-center justify-center text-[#59544c] hover:text-[#1a1816] hover:border-[#1a1816] disabled:opacity-30 disabled:hover:border-[#d5cdc0] disabled:hover:text-[#59544c] cursor-pointer transition-colors"
                aria-label="Next rail item"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Rail Cards Grid (2 Column Desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {visibleSpecimens.map((specimen) => (
              <div
                key={specimen.id}
                className="border border-[#d5cdc0] bg-[#f5efe6] p-6 flex flex-col justify-between group hover:border-[#1a1816] transition-colors"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-4 text-[10px]">
                    <span className="text-[#59544c] tracking-widest font-bold">{specimen.code}</span>
                    <span
                      className={`px-2 py-0.5 font-bold uppercase tracking-wider text-[9px] ${
                        specimen.badge === 'VAULTED'
                          ? 'bg-[#b83b3b]/15 text-[#b83b3b] border border-[#b83b3b]/40'
                          : specimen.badge === 'PROTOTYPE'
                          ? 'bg-[#7b6e54]/20 text-[#7b6e54] border border-[#7b6e54]/40'
                          : 'bg-[#ede7dd] text-[#1a1816] border border-[#d5cdc0]'
                      }`}
                    >
                      {specimen.badge}
                    </span>
                  </div>

                  {/* Specimen Photo */}
                  <div className="relative aspect-[4/3] bg-[#ede7dd] border border-[#d5cdc0] overflow-hidden mb-6">
                    <img
                      src={specimen.image}
                      alt={specimen.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Title & Metadata */}
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-headline text-2xl font-bold uppercase text-[#1a1816] tracking-tight">
                      {specimen.name}
                    </h3>
                    <span className="text-[10px] text-[#59544c] shrink-0 font-bold">
                      YEAR // {specimen.year}
                    </span>
                  </div>

                  <p className="text-xs text-[#59544c] leading-relaxed mb-6 font-mono">
                    {specimen.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-[#d5cdc0] pt-4 mb-6 text-[10px]">
                    <div>
                      <span className="text-[#59544c] block mb-1">COMPOSITION:</span>
                      <span className="text-[#1a1816] font-bold">{specimen.composition}</span>
                    </div>
                    <div>
                      <span className="text-[#59544c] block mb-1">
                        {specimen.outsoleOrChassis.includes('EVA') ||
                        specimen.outsoleOrChassis.includes('LUG') ||
                        specimen.outsoleOrChassis.includes('VIBRAM')
                          ? 'OUTSOLE CORE:'
                          : 'CHASSIS:'}
                      </span>
                      <span className="text-[#1a1816] font-bold">
                        {specimen.outsoleOrChassis}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onInspectSpecimen(specimen)}
                    className="py-3 bg-[#ede7dd] hover:bg-[#e4ddcf] text-[#1a1816] border border-[#d5cdc0] hover:border-[#1a1816] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>INSPECT SPEC</span>
                  </button>

                  <button
                    onClick={() => onRequestAccess(specimen)}
                    className="py-3 bg-[#141312] hover:bg-[#35322e] text-[#f5efe6] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer group"
                  >
                    <span>REQUEST ACCESS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SCHEMATIC DECONSTRUCTION & MATERIAL DOSSIER */}
        <div className="border border-[#d5cdc0] bg-[#f5efe6] grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
          {/* Left: Interactive Blueprint Schematic (7 Columns) */}
          <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#d5cdc0] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] text-[#59544c] mb-4 pb-2 border-b border-[#d5cdc0] tracking-widest font-bold">
                <span>SCHEMATIC // EXPOSURE 06 MONOLITH DECONSTRUCTION</span>
                <span className="text-[#1a1816]">SCALE 1:1 CALIBRATED</span>
              </div>

              {/* Exploded SVG Blueprint Diagram */}
              <div className="relative aspect-[16/10] bg-[#ede7dd] border border-[#d5cdc0] p-4 flex items-center justify-center overflow-hidden mb-6 select-none">
                {/* Subtle Grid Background */}
                <div
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #7b6e54 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                ></div>

                {/* SVG Exploded Sole Layers */}
                <svg
                  viewBox="0 0 500 300"
                  className="w-full h-full text-[#1a1816] font-mono text-[9px]"
                  fill="none"
                  stroke="currentColor"
                >
                  {/* Layer 1: DYNEEMA COLLAR */}
                  <g
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedLayerId === '03' ? 'stroke-[#1a1816] stroke-2' : 'stroke-[#8e8474] stroke-1'
                    }`}
                    onClick={() => setSelectedLayerId('03')}
                  >
                    <path
                      d="M 120 70 C 180 50, 320 50, 400 70 L 390 90 C 320 75, 180 75, 130 90 Z"
                      fill={selectedLayerId === '03' ? '#e4ddcf' : '#f5efe6'}
                    />
                    <line x1="395" y1="80" x2="450" y2="80" stroke="#7b6e54" strokeDasharray="3 3" />
                    <text x="410" y="74" fill="#1a1816" stroke="none" fontWeight="bold">
                      [01] DYNEEMA COLLAR
                    </text>
                  </g>

                  {/* Layer 2: FULL GRAIN HIDE HOUSING */}
                  <g
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedLayerId === '04' ? 'stroke-[#1a1816] stroke-2' : 'stroke-[#8e8474] stroke-1'
                    }`}
                    onClick={() => setSelectedLayerId('04')}
                  >
                    <path
                      d="M 90 115 C 160 95, 330 95, 430 115 L 420 140 C 330 120, 160 120, 100 140 Z"
                      fill={selectedLayerId === '04' ? '#e4ddcf' : '#f5efe6'}
                    />
                    <line x1="95" y1="128" x2="40" y2="128" stroke="#7b6e54" strokeDasharray="3 3" />
                    <text x="15" y="124" fill="#1a1816" stroke="none" fontWeight="bold">
                      [02] FULL GRAIN HIDE HOUSING
                    </text>
                  </g>

                  {/* Layer 3: 3K TORSIONAL CARBON PLATE */}
                  <g
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedLayerId === '01'
                        ? 'stroke-[#1a1816] stroke-[2.5]'
                        : 'stroke-[#7b6e54] stroke-1'
                    }`}
                    onClick={() => setSelectedLayerId('01')}
                  >
                    <path
                      d="M 110 160 C 170 150, 310 150, 410 160 L 405 175 C 310 165, 170 165, 115 175 Z"
                      fill={selectedLayerId === '01' ? '#ded6c8' : '#ede7dd'}
                    />
                    <line x1="407" y1="168" x2="460" y2="168" stroke="#1a1816" strokeDasharray="3 3" />
                    <text x="370" y="160" fill="#1a1816" stroke="none" fontWeight="bold">
                      [03] 3K TORSIONAL CARBON
                    </text>
                  </g>

                  {/* Layer 4: LOW-DAMPENING EVA CORE */}
                  <g
                    className="cursor-pointer transition-all duration-300 stroke-[#8e8474] stroke-1"
                    onClick={() => setSelectedLayerId('02')}
                  >
                    <path
                      d="M 70 195 C 150 180, 330 180, 440 195 L 430 225 C 330 210, 150 210, 80 225 Z"
                      fill="#e4ddcf"
                    />
                    <line x1="75" y1="210" x2="25" y2="210" stroke="#7b6e54" strokeDasharray="3 3" />
                    <text x="10" y="205" fill="#59544c" stroke="none">
                      [04] LOW-DAMPENING EVA CORE
                    </text>
                  </g>

                  {/* Layer 5: COMPOUND LUG PATTERN // WEAR RESISTANT */}
                  <g
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedLayerId === '02' ? 'stroke-[#1a1816] stroke-2' : 'stroke-[#8e8474] stroke-1'
                    }`}
                    onClick={() => setSelectedLayerId('02')}
                  >
                    <path
                      d="M 60 245 C 140 235, 330 235, 450 245 L 440 265 L 410 260 L 380 265 L 350 260 L 320 265 L 290 260 L 260 265 L 230 260 L 200 265 L 170 260 L 140 265 L 110 260 L 70 265 Z"
                      fill={selectedLayerId === '02' ? '#ded6c8' : '#e4ddcf'}
                    />
                    <line x1="435" y1="255" x2="475" y2="255" stroke="#7b6e54" strokeDasharray="3 3" />
                    <text x="330" y="278" fill="#59544c" stroke="none">
                      [05] COMPOUND LUG PATTERN // WEAR RESISTANT
                    </text>
                  </g>

                  {/* Anatomic Spec tag */}
                  <text x="320" y="294" fill="#7b6e54" stroke="none" fontSize="8">
                    SYS_SPEC // ANATOMIC_EXPLODED_V4
                  </text>
                </svg>
              </div>
            </div>

            {/* Layer Selection Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {MATERIAL_DOSSIER_ITEMS.map((item) => {
                const isActive = item.layerId === selectedLayerId;
                return (
                  <button
                    key={item.layerId}
                    onClick={() => setSelectedLayerId(item.layerId)}
                    className={`py-2 px-2 text-[9px] font-mono tracking-wider text-center transition-colors cursor-pointer border ${
                      isActive
                        ? 'bg-[#1a1816] text-[#ede7dd] border-[#1a1816] font-bold'
                        : 'bg-[#ede7dd] text-[#59544c] border-[#d5cdc0] hover:text-[#1a1816] hover:border-[#1a1816]'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: MATERIAL DOSSIER Panel (5 Columns) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#ede7dd] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] text-[#59544c] mb-6 pb-3 border-b border-[#d5cdc0] tracking-widest font-bold">
                <span>MATERIAL DOSSIER</span>
                <span className="text-[#1a1816] font-bold">CODE: {selectedDossier.code}</span>
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-[#1a1816] tracking-tight mb-4">
                {selectedDossier.title}
              </h3>

              <p className="text-xs text-[#59544c] leading-relaxed mb-8 font-mono">
                {selectedDossier.description}
              </p>

              {/* Technical Metric Bars */}
              <div className="flex flex-col gap-4 mb-8">
                {/* Metric 1 */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1.5 font-mono">
                    <span className="text-[#59544c]">TENSILE STRENGTH</span>
                    <span className="text-[#1a1816] font-bold">{selectedDossier.tensileStrength}</span>
                  </div>
                  <div className="w-full h-1 bg-[#ded6c9] overflow-hidden">
                    <div
                      className="h-full bg-[#1a1816] transition-all duration-500"
                      style={{ width: `${selectedDossier.tensileVal}%` }}
                    ></div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1.5 font-mono">
                    <span className="text-[#59544c]">ELASTIC MODULUS</span>
                    <span className="text-[#1a1816] font-bold">{selectedDossier.elasticModulus}</span>
                  </div>
                  <div className="w-full h-1 bg-[#ded6c9] overflow-hidden">
                    <div
                      className="h-full bg-[#1a1816] transition-all duration-500"
                      style={{ width: `${selectedDossier.elasticVal}%` }}
                    ></div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1.5 font-mono">
                    <span className="text-[#59544c]">THERMAL EXPANSION</span>
                    <span className="text-[#1a1816] font-bold">{selectedDossier.thermalExpansion}</span>
                  </div>
                  <div className="w-full h-1 bg-[#ded6c9] overflow-hidden">
                    <div className="h-full bg-[#7b6e54] w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dossier Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onNavigate('COLLECTIONS');
                  onShowToast('RETURNING TO CANONICAL COLLECTIONS INDEX');
                }}
                className="w-full py-3 bg-[#e4ddcf] hover:bg-[#ded6c9] text-[#1a1816] border border-[#d5cdc0] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>VIEW ARCHIVAL SERIES INDEX</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  onNavigate('SHOP');
                  onShowToast('LOADING CURRENT GENERATION ALLOCATIONS');
                }}
                className="w-full py-3 bg-[#141312] hover:bg-[#35322e] text-[#f5efe6] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>ACQUIRE CURRENT GENERATION DROPS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
