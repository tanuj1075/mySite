import React, { useState } from 'react';
import { X, Ruler, ArrowRight } from 'lucide-react';
import { SIZE_CHART } from '../data/footwearCatalog';
import { SizeStock } from '../types';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSize?: (size: string) => void;
  sizeSystem?: string;
  sizes?: SizeStock[];
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  onSelectSize,
  sizeSystem = 'US',
  sizes = [],
}) => {
  const [footLengthCm, setFootLengthCm] = useState<string>('26.0');
  const [activeTab, setActiveTab] = useState<'CHART' | 'MEASURE'>('CHART');

  if (!isOpen) return null;

  // Calculate recommended size from cm
  const lengthNum = parseFloat(footLengthCm) || 26;
  const recommendedRow =
    SIZE_CHART.find((row) => parseFloat(row.cm) >= lengthNum) || SIZE_CHART[SIZE_CHART.length - 1];
  const hasSourceSizes = sizeSystem !== 'US';

  return (
    <div
      className="fixed inset-0 z-50 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#121215] border border-[#242429] max-w-2xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#242429] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#18181c] border border-[#242429] text-[#c9a96e] flex items-center justify-center">
              <Ruler className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[12px] font-bold text-[#f4f4f6] uppercase tracking-wider block">
                FOOTWEAR METRIC SPECIFICATION GUIDE
              </span>
              <span className="text-[10px] text-[#c9a96e]">
                ARCHITECTURAL LAST SIZING & ANATOMICAL FIT PROTOCOL
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#8e8e98] hover:text-[#f4f4f6] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        {!hasSourceSizes && (
          <div className="flex border-b border-[#242429] text-[11px]">
            <button
              onClick={() => setActiveTab('CHART')}
              className={`pb-2.5 px-4 font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
                activeTab === 'CHART'
                  ? 'border-[#f4f4f6] text-[#f4f4f6]'
                  : 'border-transparent text-[#8e8e98] hover:text-[#f4f4f6]'
              }`}
            >
              SIZE CONVERSION TABLE
            </button>
            <button
              onClick={() => setActiveTab('MEASURE')}
              className={`pb-2.5 px-4 font-bold uppercase tracking-wider cursor-pointer border-b-2 transition-colors ${
                activeTab === 'MEASURE'
                  ? 'border-[#f4f4f6] text-[#f4f4f6]'
                  : 'border-transparent text-[#8e8e98] hover:text-[#f4f4f6]'
              }`}
            >
              MEASURE YOUR FOOT (CALCULATOR)
            </button>
          </div>
        )}

        {/* Tab 1: Conversion Table */}
        {(hasSourceSizes || activeTab === 'CHART') && (
          <div className="space-y-4">
            <p className="text-xs text-[#8e8e98] leading-relaxed">
              {hasSourceSizes
                ? `Sizes and availability shown below use the ${sizeSystem} labels provided by the product source.`
                : 'VANTA footwear is engineered to universal ISO shoe metrics. If you fall between sizes, order the nearest larger size for dynamic stride expansion.'}
            </p>

            <div className="overflow-x-auto border border-[#242429] bg-[#18181c]">
              {hasSourceSizes ? (
                <table className="w-full text-[11px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#242429] bg-[#121215] text-[#c9a96e] font-bold">
                      <th className="py-2.5 px-3">{sizeSystem === 'Size' ? 'LISTED SIZE' : `${sizeSystem.toUpperCase()} SIZE`}</th>
                      <th className="py-2.5 px-3">AVAILABILITY</th>
                      <th className="py-2.5 px-3 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#242429]">
                    {sizes.map((row) => (
                      <tr key={row.size} className="hover:bg-[#1e1e24] transition-colors">
                        <td className="py-2 px-3 font-bold text-[#f4f4f6]">{row.size}</td>
                        <td className="py-2 px-3 text-[#8e8e98]">{row.stock > 0 ? 'Available' : 'Out of stock'}</td>
                        <td className="py-2 px-3 text-right">
                          {onSelectSize && row.stock > 0 && (
                            <button
                              onClick={() => {
                                onSelectSize(row.size);
                                onClose();
                              }}
                              className="bg-[#f4f4f6] text-[#09090b] px-2.5 py-1 text-[9px] font-bold hover:bg-[#c9a96e] transition-colors uppercase cursor-pointer"
                            >
                              SELECT {row.size}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full text-[11px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#242429] bg-[#121215] text-[#c9a96e] font-bold">
                      <th className="py-2.5 px-3">US SIZE</th>
                      <th className="py-2.5 px-3">UK SIZE</th>
                      <th className="py-2.5 px-3">EU SIZE</th>
                      <th className="py-2.5 px-3">FOOT LENGTH (CM)</th>
                      <th className="py-2.5 px-3">INCHES</th>
                      <th className="py-2.5 px-3 text-right">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#242429]">
                    {SIZE_CHART.map((row) => (
                      <tr key={row.us} className="hover:bg-[#1e1e24] transition-colors">
                        <td className="py-2 px-3 font-bold text-[#f4f4f6]">{row.us}</td>
                        <td className="py-2 px-3 text-[#8e8e98]">{row.uk}</td>
                        <td className="py-2 px-3 text-[#8e8e98]">{row.eu}</td>
                        <td className="py-2 px-3 text-[#f4f4f6] font-semibold">{row.cm} cm</td>
                        <td className="py-2 px-3 text-[#8e8e98]">{row.in}"</td>
                        <td className="py-2 px-3 text-right">
                          {onSelectSize && (
                            <button
                              onClick={() => {
                                onSelectSize(row.us);
                                onClose();
                              }}
                              className="bg-[#f4f4f6] text-[#09090b] px-2.5 py-1 text-[9px] font-bold hover:bg-[#c9a96e] transition-colors uppercase cursor-pointer"
                            >
                              SELECT US {row.us}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Measure Your Foot Step-by-Step */}
        {!hasSourceSizes && activeTab === 'MEASURE' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px]">
              <div className="bg-[#18181c] border border-[#242429] p-4 space-y-2">
                <span className="text-[10px] text-[#c9a96e] font-bold block uppercase">
                  STEP 1 → PAPER & WALL
                </span>
                <p className="text-[#8e8e98] leading-relaxed">
                  Place a blank sheet of paper flat on a hard floor with one edge firmly against a
                  vertical wall.
                </p>
              </div>

              <div className="bg-[#18181c] border border-[#242429] p-4 space-y-2">
                <span className="text-[10px] text-[#c9a96e] font-bold block uppercase">
                  STEP 2 → POSITION & MARK
                </span>
                <p className="text-[#8e8e98] leading-relaxed">
                  Stand upright on the paper with your heel lightly pressing against the wall. Mark
                  the longest point of your toe with a pencil.
                </p>
              </div>

              <div className="bg-[#18181c] border border-[#242429] p-4 space-y-2">
                <span className="text-[10px] text-[#c9a96e] font-bold block uppercase">
                  STEP 3 → MEASURE LENGTH
                </span>
                <p className="text-[#8e8e98] leading-relaxed">
                  Measure the exact distance from the paper edge to your pencil mark in centimeters.
                </p>
              </div>

              <div className="bg-[#18181c] border border-[#242429] p-4 space-y-2">
                <span className="text-[10px] text-[#c9a96e] font-bold block uppercase">
                  STEP 4 → SIZE RECOMMENDATION
                </span>
                <p className="text-[#8e8e98] leading-relaxed">
                  Enter your measurement below to pinpoint your exact precision architectural size.
                </p>
              </div>
            </div>

            {/* Interactive Calculator */}
            <div className="bg-[#18181c] border border-[#242429] p-5 space-y-4">
              <label className="text-[11px] font-bold text-[#f4f4f6] uppercase block">
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
                  className="bg-[#121215] border border-[#242429] px-4 py-2.5 text-[#f4f4f6] font-bold text-sm w-36 focus:outline-none focus:border-[#c9a96e]"
                />
                <span className="text-xs text-[#8e8e98] font-bold">CENTIMETERS</span>
              </div>

              {recommendedRow && (
                <div className="bg-[#121215] border border-[#242429] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] text-[#c9a96e] font-bold uppercase tracking-wider">
                      RECOMMENDED SPECIFICATION ALLOCATION:
                    </div>
                    <div className="text-xl font-bold text-[#f4f4f6] mt-0.5">
                      US {recommendedRow.us} // UK {recommendedRow.uk} // EU {recommendedRow.eu}
                    </div>
                    <div className="text-[10px] text-[#8e8e98] mt-0.5">
                      Fits foot length up to {recommendedRow.cm} cm ({recommendedRow.in}")
                    </div>
                  </div>

                  {onSelectSize && (
                    <button
                      onClick={() => {
                        onSelectSize(recommendedRow.us);
                        onClose();
                      }}
                      className="bg-[#f4f4f6] text-[#09090b] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#c9a96e] transition-colors cursor-pointer flex items-center gap-2"
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
        <div className="flex items-center justify-between pt-4 border-t border-[#242429] text-[10px] text-[#8e8e98]">
          <span>COMPLIMENTARY SIZE EXCHANGE AVAILABLE ON ALL ORDERS</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#18181c] border border-[#242429] text-[#f4f4f6] font-bold uppercase hover:border-[#3a3a42] transition-colors cursor-pointer"
          >
            CLOSE GUIDE
          </button>
        </div>
      </div>
    </div>
  );
};