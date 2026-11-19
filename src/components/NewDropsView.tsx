import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { formatCurrency } from '../lib/currency';

interface NewDropsViewProps {
  onClaimDrop: (item: CartItem) => void;
  onShowToast: (msg: string) => void;
}

export const NewDropsView: React.FC<NewDropsViewProps> = ({
  onClaimDrop,
  onShowToast,
}) => {
  // Live Drop countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 42,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format2 = (n: number) => String(n).padStart(2, '0');

  const drops = [
    {
      id: 'drop-void-runner',
      code: 'SPEC_02_VR',
      title: 'VOID RUNNER // SMALL BATCH 02',
      edition: 'RUN SERIAL M001-M500',
      price: 590,
      image: '/assets/images/void_runner_heel_1788838329834.jpg',
      allocatedCount: 486,
      totalUnits: 500,
      status: 'CRITICAL ALLOCATION',
      description:
        'Carbon-composite internal dynamic plate encased in dense, sound-dampening expanded cellular rubber. Direct injection sole engineered for hostile surfaces.',
    },
    {
      id: 'drop-ss25-monolith',
      code: 'SS25_M01',
      title: 'SS25 MONOLITH OVERCOAT',
      edition: 'LIMITED REPO // 48 PIECES',
      price: 980,
      image: '/assets/images/ss25_monolith_model_1788838295128.jpg',
      allocatedCount: 42,
      totalUnits: 48,
      status: 'LAST 6 ALLOCATIONS',
      description:
        'Tailored architectural silhouette constructed with raw titanium hardware inserts and high-density basalt tech-membrane.',
    },
  ];

  return (
    <div className="w-full bg-[#09090b] text-[#f4f4f6] font-mono pb-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pt-8">
        {/* Header */}
        <div className="border-b border-[#242429] pb-8 mb-8">
          <div className="flex items-center gap-2 text-[10px] text-[#c9a96e] uppercase tracking-[0.2em] mb-4 font-bold">
            <span className="w-1.5 h-1.5 bg-[#c9a96e] inline-block"></span>
            <span>LIVE PRODUCTION RADAR // NEW DROPS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-[#f4f4f6] leading-none mb-4">
                NEW DROPS
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#8e8e98] max-w-2xl leading-relaxed">
                Live allocation window. All units are manufactured in numbered micro-batches. Once
                an epoch caps, production dies are destroyed.
              </p>
            </div>

            {/* Countdown Box */}
            <div className="bg-[#121215] border border-[#242429] p-4 flex flex-col items-start sm:items-end">
              <span className="text-[10px] text-[#8e8e98] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                <Clock className="w-3.5 h-3.5 text-[#c9a96e]" />
                <span>NEXT EPOCH CLOSES IN:</span>
              </span>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#c9a96e] tracking-widest">
                {format2(timeLeft.hours)}:{format2(timeLeft.minutes)}:{format2(timeLeft.seconds)}
              </div>
            </div>
          </div>
        </div>

        {/* Drops List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {drops.map((drop) => {
            const remaining = drop.totalUnits - drop.allocatedCount;
            return (
              <div
                key={drop.id}
                className="specimen-card museum-corners border border-[#242429] bg-[#121215] p-6 sm:p-8 flex flex-col justify-between group transition-all shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#242429] pb-4 mb-4 text-[10px]">
                    <span className="text-[#8e8e98] tracking-widest font-bold">{drop.code}</span>
                    <span className="bg-[#b83b3b]/20 text-[#ef4444] border border-[#b83b3b]/40 px-2 py-0.5 font-bold uppercase tracking-wider">
                      {drop.status}
                    </span>
                  </div>

                  <div className="relative aspect-[16/9] bg-[#18181c] border border-[#242429] overflow-hidden mb-6 pedestal-glow">
                    <img
                      src={drop.image}
                      alt={drop.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-headline text-2xl font-bold uppercase text-[#f4f4f6] tracking-tight group-hover:text-gold-gradient transition-colors">
                      {drop.title}
                    </h3>
                    <span className="text-sm font-bold text-gold-gradient">{formatCurrency(drop.price)}</span>
                  </div>

                  <p className="text-xs text-[#8e8e98] leading-relaxed mb-6 font-mono">
                    {drop.description}
                  </p>

                  {/* Allocation Status Bar */}
                  <div className="bg-[#18181c] border border-[#242429] p-4 mb-6">
                    <div className="flex justify-between text-[10px] mb-2 font-mono">
                      <span className="text-[#8e8e98]">REMAINING ALLOCATION</span>
                      <span className="text-[#c9a96e] font-bold">
                        {remaining} OF {drop.totalUnits} UNITS LEFT
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#242429] overflow-hidden">
                      <div
                        className="h-full bg-[#c9a96e]"
                        style={{
                          width: `${(drop.allocatedCount / drop.totalUnits) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const cartItem: CartItem = {
                      id: drop.id,
                      productId: drop.id,
                      code: drop.code,
                      name: drop.title,
                      edition: drop.edition,
                      price: drop.price,
                      image: drop.image,
                      colorway: 'Obsidian Drop Edition',
                      specification: 'US 10 / EU 44',
                      selectedColor: 'Obsidian Drop Edition',
                      selectedSize: 'US 10 / EU 44',
                      availableSizes: ['US 9 / EU 42.5', 'US 10 / EU 44', 'US 11 / EU 45'],
                      allocationStatus: `Allocation Reserved // ${remaining} Remaining`,
                      quantity: 1,
                    };
                    onClaimDrop(cartItem);
                    onShowToast(`CLAIMED DROP ALLOCATION: ${drop.title}`);
                  }}
                  className="w-full py-4 bg-gradient-to-r from-[#C9A96E] via-[#EAE3D5] to-[#C9A96E] text-[#09090B] hover:brightness-110 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all cursor-pointer group shadow-[0_0_20px_rgba(201,169,110,0.3)]"
                >
                  <span>CLAIM ALLOCATION FROM RUN</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};