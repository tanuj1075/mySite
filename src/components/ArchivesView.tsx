import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye, ArrowRight } from 'lucide-react';
import { ARCHIVE_SPECIMENS, MATERIAL_DOSSIER_ITEMS } from '../data/archiveData';
import { ArchiveSpecimen } from '../types';

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
    <div className="w-full bg-[#09090b] text-[#f4f4f6] font-mono pb-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pt-8">
        {/* Top Status Line */}
        <div className="flex items-center gap-2 text-[10px] text-[#c9a96e] uppercase tracking-[0.2em] mb-4 font-bold">
          <span className="w-1.5 h-1.5 bg-[#c9a96e] inline-block"></span>
          <span>
            ARCHIVE REPOSITORY // LAT: 59°19'N LON: 18°04'E // STASIS_BUILD: 004.2
          </span>
        </div>

        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#242429] pb-8 mb-8">
          <div>
            <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-[#f4f4f6] leading-none mb-4">
              THE PERMANENT ARCHIVE
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[#8e8e98] max-w-2xl leading-relaxed">
              Historical releases, vaulted prototypes, and decommissioned iterations preserved in digital stasis.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-1">
            <span className="border border-[#3a3a42] bg-[#121215] px-3 py-1 text-[10px] font-bold text-[#c9a96e] uppercase tracking-wider">
              CURATED ACCESS ONLY
            </span>
            <span className="text-[10px] text-[#8e8e98] tracking-wider mt-1 font-bold">
              SPEC_TIER: 01-ALPHA &nbsp; INDEX: 8 MILESTONES
            </span>
          </div>
        </div>

        {/* Era Index Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-4 border-b border-[#242429] text-[10px]">
          <span className="text-[#c9a96e] mr-2 uppercase tracking-wider font-bold">ERA_INDEX:</span>
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
                    ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6] font-bold'
                    : 'bg-[#121215] text-[#8e8e98] border-[#242429] hover:border-[#8e8e98] hover:text-[#f4f4f6]'
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
              <span className="text-xs text-[#c9a96e] uppercase tracking-widest font-bold">
                MUSEUM SPEC RAIL
              </span>
              <span className="font-headline text-lg font-bold text-[#f4f4f6]">
                {String(safeIndex + 1).padStart(2, '0')} / {String(totalSpecimens).padStart(2, '0')}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevRail}
                disabled={safeIndex === 0}
                className="w-8 h-8 bg-[#121215] border border-[#242429] flex items-center justify-center text-[#8e8e98] hover:text-[#f4f4f6] hover:border-[#3a3a42] disabled:opacity-30 disabled:hover:border-[#242429] disabled:hover:text-[#8e8e98] cursor-pointer transition-colors"
                aria-label="Previous rail item"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextRail}
                disabled={safeIndex >= totalSpecimens - 2}
                className="w-8 h-8 bg-[#121215] border border-[#242429] flex items-center justify-center text-[#8e8e98] hover:text-[#f4f4f6] hover:border-[#3a3a42] disabled:opacity-30 disabled:hover:border-[#242429] disabled:hover:text-[#8e8e98] cursor-pointer transition-colors"
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
                className="border border-[#242429] bg-[#121215] p-6 flex flex-col justify-between group hover:border-[#3a3a42] transition-colors"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between mb-4 text-[10px]">
                    <span className="text-[#8e8e98] tracking-widest font-bold">{specimen.code}</span>
                    <span
                      className={`px-2 py-0.5 font-bold uppercase tracking-wider text-[9px] ${
                        specimen.badge === 'VAULTED'
                          ? 'bg-[#b83b3b]/20 text-[#ef4444] border border-[#b83b3b]/40'
                          : specimen.badge === 'PROTOTYPE'
                          ? 'bg-[#c9a96e]/20 text-[#c9a96e] border border-[#c9a96e]/40'
                          : 'bg-[#18181c] text-[#f4f4f6] border border-[#242429]'
                      }`}
                    >
                      {specimen.badge}
                    </span>
                  </div>

                  {/* Specimen Photo */}
                  <div className="relative aspect-[4/3] bg-[#18181c] border border-[#242429] overflow-hidden mb-6">
                    <img
                      src={specimen.image}
                      alt={specimen.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                  {/* Title & Metadata */}
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-headline text-2xl font-bold uppercase text-[#f4f4f6] tracking-tight">
                      {specimen.name}
                    </h3>
                    <span className="text-[10px] text-[#8e8e98] shrink-0 font-bold">
                      YEAR // {specimen.year}
                    </span>
                  </div>

                  <p className="text-xs text-[#8e8e98] leading-relaxed mb-6 font-mono">
                    {specimen.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-[#242429] pt-4 mb-6 text-[10px]">
                    <div>
                      <span className="text-[#52525b] block mb-1">COMPOSITION:</span>
                      <span className="text-[#f4f4f6] font-bold">{specimen.composition}</span>
                    </div>
                    <div>
                      <span className="text-[#52525b] block mb-1">
                        {specimen.outsoleOrChassis.includes('EVA') ||
                        specimen.outsoleOrChassis.includes('LUG') ||
                        specimen.outsoleOrChassis.includes('VIBRAM')
                          ? 'OUTSOLE CORE:'
                          : 'CHASSIS:'}
                      </span>
                      <span className="text-[#f4f4f6] font-bold">
                        {specimen.outsoleOrChassis}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onInspectSpecimen(specimen)}
                    className="btn-tactile py-3 bg-[#18181c] hover:bg-[#242429] text-[#f4f4f6] border border-[#242429] hover:border-[#3a3a42] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>INSPECT SPEC</span>
                  </button>

                  <button
                    onClick={() => onRequestAccess(specimen)}
                    className="btn-tactile py-3 bg-[#f4f4f6] hover:bg-[#c9a96e] text-[#09090b] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer group"
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
        <div className="border border-[#242429] bg-[#121215] grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
          {/* Left: Interactive Blueprint Schematic (7 Columns) */}
          <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#242429] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] text-[#8e8e98] mb-4 pb-2 border-b border-[#242429] tracking-widest font-bold">
                <span>SCHEMATIC // EXPOSURE 06 MONOLITH DECONSTRUCTION</span>
                <span className="text-[#c9a96e]">SCALE 1:1 CALIBRATED</span>
              </div>

              {/* Exploded SVG Blueprint Diagram */}
              <div className="relative aspect-[16/10] bg-[#18181c] border border-[#242429] p-4 flex items-center justify-center overflow-hidden mb-6 select-none">
                {/* Subtle Grid Background */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #3a3a42 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                ></div>

                {/* SVG Exploded Sole Layers */}
                <svg
                  viewBox="0 0 500 300"
                  className="w-full h-full text-[#f4f4f6] font-mono text-[9px]"
                  fill="none"
                  stroke="currentColor"
                >
                  {/* Layer 1: DYNEEMA COLLAR */}
                  <g
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedLayerId === '03' ? 'stroke-[#c9a96e] stroke-2' : 'stroke-[#52525b] stroke-1'
                    }`}
                    onClick={() => setSelectedLayerId('03')}
                  >
                    <path
                      d="M 120 70 C 180 50, 320 50, 400 70 L 390 90 C 320 75, 180 75, 130 90 Z"
                      fill={selectedLayerId === '03' ? '#242429' : '#18181c'}
                    />
                    <line x1="395" y1="80" x2="450" y2="80" stroke="#c9a96e" strokeDasharray="3 3" />
                    <text x="410" y="74" fill="#f4f4f6" stroke="none" fontWeight="bold">
                      [01] DYNEEMA COLLAR
                    </text>
                  </g>

                  {/* Layer 2: FULL GRAIN HIDE HOUSING */}
                  <g
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedLayerId === '04' ? 'stroke-[#c9a96e] stroke-2' : 'stroke-[#52525b] stroke-1'
                    }`}
                    onClick={() => setSelectedLayerId('04')}
                  >
                    <path
                      d="M 90 115 C 160 95, 330 95, 430 115 L 420 140 C 330 120, 160 120, 100 140 Z"
                      fill={selectedLayerId === '04' ? '#242429' : '#18181c'}
                    />
                    <line x1="95" y1="128" x2="40" y2="128" stroke="#c9a96e" strokeDasharray="3 3" />
                    <text x="15" y="124" fill="#f4f4f6" stroke="none" fontWeight="bold">
                      [02] FULL GRAIN HIDE HOUSING
                    </text>
                  </g>

                  {/* Layer 3: 3K TORSIONAL CARBON PLATE */}
                  <g
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedLayerId === '01'
                        ? 'stroke-[#c9a96e] stroke-[2.5]'
                        : 'stroke-[#52525b] stroke-1'
                    }`}
                    onClick={() => setSelectedLayerId('01')}
                  >
                    <path
                      d="M 110 160 C 170 150, 310 150, 410 160 L 405 175 C 310 165, 170 165, 115 175 Z"
                      fill={selectedLayerId === '01' ? '#3a3a42' : '#242429'}
                    />
                    <line x1="407" y1="168" x2="460" y2="168" stroke="#f4f4f6" strokeDasharray="3 3" />
                    <text x="370" y="160" fill="#c9a96e" stroke="none" fontWeight="bold">
                      [03] 3K TORSIONAL CARBON
                    </text>
                  </g>

                  {/* Layer 4: LOW-DAMPENING EVA CORE */}
                  <g
                    className="cursor-pointer transition-all duration-300 stroke-[#52525b] stroke-1"
                    onClick={() => setSelectedLayerId('02')}
                  >
                    <path
                      d="M 70 195 C 150 180, 330 180, 440 195 L 430 225 C 330 210, 150 210, 80 225 Z"
                      fill="#1e1e24"
                    />
                    <line x1="75" y1="210" x2="25" y2="210" stroke="#8e8e98" strokeDasharray="3 3" />
                    <text x="10" y="205" fill="#8e8e98" stroke="none">
                      [04] LOW-DAMPENING EVA CORE
                    </text>
                  </g>

                  {/* Layer 5: COMPOUND LUG PATTERN // WEAR RESISTANT */}
                  <g
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedLayerId === '02' ? 'stroke-[#c9a96e] stroke-2' : 'stroke-[#52525b] stroke-1'
                    }`}
                    onClick={() => setSelectedLayerId('02')}
                  >
                    <path
                      d="M 60 245 C 140 235, 330 235, 450 245 L 440 265 L 410 260 L 380 265 L 350 260 L 320 265 L 290 260 L 260 265 L 230 260 L 200 265 L 170 260 L 140 265 L 110 260 L 70 265 Z"
                      fill={selectedLayerId === '02' ? '#3a3a42' : '#242429'}
                    />
                    <line x1="435" y1="255" x2="475" y2="255" stroke="#8e8e98" strokeDasharray="3 3" />
                    <text x="330" y="278" fill="#8e8e98" stroke="none">
                      [05] COMPOUND LUG PATTERN // WEAR RESISTANT
                    </text>
                  </g>

                  {/* Anatomic Spec tag */}
                  <text x="320" y="294" fill="#c9a96e" stroke="none" fontSize="8">
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
                        ? 'bg-[#f4f4f6] text-[#09090b] border-[#f4f4f6] font-bold'
                        : 'bg-[#18181c] text-[#8e8e98] border-[#242429] hover:text-[#f4f4f6] hover:border-[#3a3a42]'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: MATERIAL DOSSIER Panel (5 Columns) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#18181c] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] text-[#8e8e98] mb-6 pb-3 border-b border-[#242429] tracking-widest font-bold">
                <span>MATERIAL DOSSIER</span>
                <span className="text-[#c9a96e] font-bold">CODE: {selectedDossier.code}</span>
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-[#f4f4f6] tracking-tight mb-4">
                {selectedDossier.title}
              </h3>

              <p className="text-xs text-[#8e8e98] leading-relaxed mb-8 font-mono">
                {selectedDossier.description}
              </p>

              {/* Technical Metric Bars */}
              <div className="flex flex-col gap-4 mb-8">
                {/* Metric 1 */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1.5 font-mono">
                    <span className="text-[#8e8e98]">TENSILE STRENGTH</span>
                    <span className="text-[#f4f4f6] font-bold">{selectedDossier.tensileStrength}</span>
                  </div>
                  <div className="w-full h-1 bg-[#242429] overflow-hidden">
                    <div
                      className="h-full bg-[#c9a96e] transition-all duration-500"
                      style={{ width: `${selectedDossier.tensileVal}%` }}
                    ></div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1.5 font-mono">
                    <span className="text-[#8e8e98]">ELASTIC MODULUS</span>
                    <span className="text-[#f4f4f6] font-bold">{selectedDossier.elasticModulus}</span>
                  </div>
                  <div className="w-full h-1 bg-[#242429] overflow-hidden">
                    <div
                      className="h-full bg-[#f4f4f6] transition-all duration-500"
                      style={{ width: `${selectedDossier.elasticVal}%` }}
                    ></div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div className="flex justify-between text-[10px] mb-1.5 font-mono">
                    <span className="text-[#8e8e98]">THERMAL EXPANSION</span>
                    <span className="text-[#f4f4f6] font-bold">{selectedDossier.thermalExpansion}</span>
                  </div>
                  <div className="w-full h-1 bg-[#242429] overflow-hidden">
                    <div className="h-full bg-[#c9a96e] w-1/3"></div>
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
                className="w-full py-3 bg-[#121215] hover:bg-[#242429] text-[#f4f4f6] border border-[#242429] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>VIEW ARCHIVAL SERIES INDEX</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  onNavigate('SHOP');
                  onShowToast('LOADING CURRENT GENERATION ALLOCATIONS');
                }}
                className="w-full py-3 bg-[#f4f4f6] hover:bg-[#c9a96e] text-[#09090b] text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
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