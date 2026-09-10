import React from 'react';
import { Compass, ShieldCheck, MapPin, Radio, Clock } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (nav: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const ateliers = [
    {
      city: 'BERLIN',
      country: 'GERMANY',
      district: 'MITTE // BRUNNENSTRASSE 45',
      coordinates: '52.5350° N, 13.3980° E',
      status: 'ACTIVE WORKSHOP & ACOUSTIC LAB',
      timezone: 'UTC+1',
    },
    {
      city: 'NEW YORK',
      country: 'UNITED STATES',
      district: 'MEATPACKING // 450 W 14TH ST',
      coordinates: '40.7410° N, 74.0076° W',
      status: 'PRIVATE CLIENT VAULT',
      timezone: 'UTC-5',
    },
    {
      city: 'TOKYO',
      country: 'JAPAN',
      district: 'AOYAMA // MINATO-KU 5-7-22',
      coordinates: '35.6628° N, 139.7135° E',
      status: 'COMPOSITE WEAVING ATELIER',
      timezone: 'UTC+9',
    },
  ];

  return (
    <div className="w-full bg-[#ede7dd] text-[#1a1816] font-mono pb-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pt-8">
        {/* Header */}
        <div className="border-b border-[#d5cdc0] pb-8 mb-8">
          <div className="flex items-center gap-2 text-[10px] text-[#7b6e54] uppercase tracking-[0.2em] mb-4 font-bold">
            <span className="w-1.5 h-1.5 bg-[#1a1816] inline-block"></span>
            <span>DOCTRINE // ARCHITECTURAL MANIFESTO</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-[#1a1816] leading-none mb-4">
            VANTA MANIFESTO
          </h1>
          <p className="font-mono text-xs sm:text-sm text-[#59544c] max-w-2xl leading-relaxed">
            VANTA was established to dismantle conventional fashion obsolescence. We operate at the
            nexus of brutalist architecture, aerospace materials, and uncompromising human ergonomics.
          </p>
        </div>

        {/* Core Tenets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="border border-[#d5cdc0] bg-[#f5efe6] p-6 sm:p-8">
            <span className="text-[10px] text-[#7b6e54] font-bold tracking-widest block mb-3">
              01 // MONOLITHIC INTEGRITY
            </span>
            <h3 className="font-headline text-xl font-bold uppercase text-[#1a1816] mb-3">
              ZERO SUPERFLUOUS ORNAMENT
            </h3>
            <p className="text-xs text-[#59544c] leading-relaxed">
              Every seam, bevel, and hardware anchor exists purely to resolve physical forces. We do
              not design decorations; we engineer load-bearing artifacts for hostile metropolitan
              conditions.
            </p>
          </div>

          <div className="border border-[#d5cdc0] bg-[#f5efe6] p-6 sm:p-8">
            <span className="text-[10px] text-[#7b6e54] font-bold tracking-widest block mb-3">
              02 // MATERIAL SUPREMACY
            </span>
            <h3 className="font-headline text-xl font-bold uppercase text-[#1a1816] mb-3">
              PRE-PREG CARBON &amp; TITANIUM
            </h3>
            <p className="text-xs text-[#59544c] leading-relaxed">
              We source raw composite fabrics autoclaved at industrial pressures. Dyneema tensile
              fibers, basalt compounds, and vulcanized vibram lugs ensure permanent structural
              immutability.
            </p>
          </div>

          <div className="border border-[#d5cdc0] bg-[#f5efe6] p-6 sm:p-8">
            <span className="text-[10px] text-[#7b6e54] font-bold tracking-widest block mb-3">
              03 // CONTROLLED EXCLUSIVITY
            </span>
            <h3 className="font-headline text-xl font-bold uppercase text-[#1a1816] mb-3">
              NUMBERED ARCHIVAL STASIS
            </h3>
            <p className="text-xs text-[#59544c] leading-relaxed">
              Once a limited allocation cycle concludes, manufacturing molds are sealed in physical
              crypts. No mass re-runs. Every client piece carries immutable serialized pedigree.
            </p>
          </div>
        </div>

        {/* Global Ateliers Section */}
        <div className="border border-[#d5cdc0] bg-[#f5efe6] p-8 sm:p-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d5cdc0] pb-6 mb-8">
            <div>
              <span className="text-[10px] text-[#7b6e54] tracking-widest block mb-1 font-bold">
                TERRITORIAL PRESENCE
              </span>
              <h2 className="font-headline text-3xl font-bold uppercase text-[#1a1816]">
                GLOBAL ATELIERS &amp; LABS
              </h2>
            </div>
            <span className="text-[10px] text-[#1a1816] font-bold">
              VISITS STRICTLY BY PRIVATE CLIENT APPOINTMENT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ateliers.map((atelier) => (
              <div
                key={atelier.city}
                className="bg-[#ede7dd] border border-[#d5cdc0] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-[#59544c] mb-3">
                    <span className="text-[#1a1816] font-bold">{atelier.country}</span>
                    <span>{atelier.timezone}</span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold uppercase text-[#1a1816] mb-2">
                    {atelier.city}
                  </h3>
                  <div className="text-[11px] text-[#59544c] font-bold mb-1">
                    {atelier.district}
                  </div>
                  <div className="text-[10px] text-[#7b6e54] font-mono mb-4">
                    {atelier.coordinates}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#d5cdc0] text-[9px] text-[#59544c] flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-[#7b6e54]" />
                  <span>{atelier.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
