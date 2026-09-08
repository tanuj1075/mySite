import React, { useState } from 'react';
import { X, Ruler, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { SIZE_CHART } from '../data/footwearCatalog';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSize?: (size: string) => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  onSelectSize,
}) => {
  const [footLengthCm, setFootLengthCm] = useState<string>('26.0');
  const [activeTab, setActiveTab] = useState<'CHART' | 'MEASURE'>('CHART');

  if (!isOpen) return null;

  // Calculate recommended size from cm
  const lengthNum = parseFloat(footLengthCm) || 26;
  const recommendedRow =
    SIZE_CHART.find((row) => parseFloat(row.cm) >= lengthNum) || SIZE_CHART[SIZE_CHART.length - 1];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-2xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#141312] text-[#f5efe6] flex items-center justify-center">
              <Ruler className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[12px] font-bold text-[#1a1816] uppercase tracking-wider block">
                FOOTWEAR METRIC SPECIFICATION GUIDE
              </span>
              <span className="text-[10px] text-[#7b6e54]">
                ARCHITECTURAL LAST SIZING & ANATOMICAL FIT PROTOCOL
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#59544c] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#d5cdc0] text-[11px]">
          <button
            onClick={() => setActiveTab('CHART')}
            className={`pb-2.5 px-4 font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
              activeTab === 'CHART'
                ? 'border-[#1a1816] text-[#1a1816]'
                : 'border-transparent text-[#59544c] hover:text-[#1a1816]'
            }`}
          >
            SIZE CONVERSION TABLE
          </button>
          <button
            onClick={() => setActiveTab('MEASURE')}
            className={`pb-2.5 px-4 font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
              activeTab === 'MEASURE'
                ? 'border-[#1a1816] text-[#1a1816]'
                : 'border-transparent text-[#59544c] hover:text-[#1a1816]'
            }`}
          >
            MEASURE YOUR FOOT (CALCULATOR)
          </button>
        </div>

        {/* Tab 1: Conversion Table */}
        {activeTab === 'CHART' && (
          <div className="space-y-4">
            <p className="text-xs text-[#59544c] leading-relaxed">
              VANTA footwear is engineered to universal ISO shoe metrics. If you fall between sizes,
              order the nearest larger size for dynamic stride expansion.
            </p>

            <div className="overflow-x-auto border border-[#d5cdc0] bg-[#ede7dd]">
              <table className="w-full text-[11px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#d5cdc0] bg-[#e4ddcf] text-[#1a1816] font-bold">
                    <th className="py-2.5 px-3">US SIZE</th>
                    <th className="py-2.5 px-3">UK SIZE</th>
                    <th className="py-2.5 px-3">EU SIZE</th>
                    <th className="py-2.5 px-3">FOOT LENGTH (CM)</th>
                    <th className="py-2.5 px-3">INCHES</th>
                    <th className="py-2.5 px-3 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#d5cdc0]">
                  {SIZE_CHART.map((row) => (
                    <tr key={row.us} className="hover:bg-[#f5efe6] transition-colors">
                      <td className="py-2 px-3 font-bold text-[#1a1816]">{row.us}</td>
                      <td className="py-2 px-3 text-[#59544c]">{row.uk}</td>
                      <td className="py-2 px-3 text-[#59544c]">{row.eu}</td>
                      <td className="py-2 px-3 text-[#1a1816] font-semibold">{row.cm} cm</td>
                      <td className="py-2 px-3 text-[#59544c]">{row.in}"</td>
                      <td className="py-2 px-3 text-right">
                        {onSelectSize && (
                          <button
                            onClick={() => {
                              onSelectSize(row.us);
                              onClose();
                            }}
                            className="bg-[#141312] text-[#f5efe6] px-2.5 py-1 text-[9px] font-bold hover:bg-[#35322e] transition-colors uppercase cursor-pointer"
                          >
                            SELECT US {row.us}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Measure Your Foot Step-by-Step */}
        {activeTab === 'MEASURE' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px]">
              <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 space-y-2">
                <span className="text-[10px] text-[#7b6e54] font-bold block uppercase">
                  STEP 1 → PAPER & WALL
                </span>
                <p className="text-[#59544c] leading-relaxed">
                  Place a blank sheet of paper flat on a hard floor with one edge firmly against a
                  vertical wall.
                </p>
              </div>

              <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 space-y-2">
                <span className="text-[10px] text-[#7b6e54] font-bold block uppercase">
                  STEP 2 → POSITION & MARK
                </span>
                <p className="text-[#59544c] leading-relaxed">
                  Stand upright on the paper with your heel lightly pressing against the wall. Mark
                  the longest point of your toe with a pencil.
                </p>
              </div>

              <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 space-y-2">
                <span className="text-[10px] text-[#7b6e54] font-bold block uppercase">
                  STEP 3 → MEASURE LENGTH
                </span>
                <p className="text-[#59544c] leading-relaxed">
                  Measure the exact distance from the paper edge to your pencil mark in centimeters.
                </p>
              </div>

              <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 space-y-2">
                <span className="text-[10px] text-[#7b6e54] font-bold block uppercase">
                  STEP 4 → SIZE RECOMMENDATION
                </span>
                <p className="text-[#59544c] leading-relaxed">
                  Enter your measurement below to pinpoint your exact precision architectural size.
                </p>
              </div>
            </div>

            {/* Interactive Calculator */}
            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-5 space-y-4">
              <label className="text-[11px] font-bold text-[#1a1816] uppercase block">
                ENTER YOUR MEASURED FOOT LENGTH (CM):
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  step="0.1"
                  min="22"
                  max="32"
                  value={footLengthCm}
                  onChange={(e) => setFootLengthCm(e.target.value)}
                  className="bg-[#f5efe6] border border-[#d5cdc0] px-4 py-2.5 text-[#1a1816] font-bold text-sm w-36 focus:outline-none focus:border-[#1a1816]"
                />
                <span className="text-xs text-[#59544c] font-bold">CENTIMETERS</span>
              </div>

              {recommendedRow && (
                <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-[#7b6e54] font-bold uppercase tracking-wider">
                      RECOMMENDED SPECIFICATION ALLOCATION:
                    </div>
                    <div className="text-xl font-bold text-[#1a1816] mt-0.5">
                      US {recommendedRow.us} // UK {recommendedRow.uk} // EU {recommendedRow.eu}
                    </div>
                    <div className="text-[10px] text-[#59544c] mt-0.5">
                      Fits foot length up to {recommendedRow.cm} cm ({recommendedRow.in}")
                    </div>
                  </div>

                  {onSelectSize && (
                    <button
                      onClick={() => {
                        onSelectSize(recommendedRow.us);
                        onClose();
                      }}
                      className="bg-[#141312] text-[#f5efe6] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <span>CONFIRM SIZE {recommendedRow.us}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="flex items-center justify-between pt-4 border-t border-[#d5cdc0] text-[10px] text-[#59544c]">
          <span>COMPLIMENTARY SIZE EXCHANGE AVAILABLE ON ALL ORDERS</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] font-bold uppercase hover:bg-[#ded6c9] transition-colors cursor-pointer"
          >
            CLOSE GUIDE
          </button>
        </div>
      </div>
    </div>
  );
};
