import React, { useState, useEffect } from 'react';
import { Flame, Clock, Shield, ArrowRight, Check } from 'lucide-react';
import { CartItem } from '../types';

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
      image: '/src/assets/images/void_runner_heel_1788838329834.jpg',
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
      image: '/src/assets/images/ss25_monolith_model_1788838295128.jpg',
      allocatedCount: 42,
      totalUnits: 48,
      status: 'LAST 6 ALLOCATIONS',
      description:
        'Tailored architectural silhouette constructed with raw titanium hardware inserts and high-density basalt tech-membrane.',
    },
  ];

  return (
    <div className="w-full bg-[#ede7dd] text-[#1a1816] font-mono pb-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 pt-8">
        {/* Header */}
        <div className="border-b border-[#d5cdc0] pb-8 mb-8">
          <div className="flex items-center gap-2 text-[10px] text-[#7b6e54] uppercase tracking-[0.2em] mb-4 font-bold">
            <span className="w-1.5 h-1.5 bg-[#1a1816] inline-block"></span>
            <span>LIVE PRODUCTION RADAR // NEW DROPS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-[#1a1816] leading-none mb-4">
                NEW DROPS
              </h1>
              <p className="font-mono text-xs sm:text-sm text-[#59544c] max-w-2xl leading-relaxed">
                Live allocation window. All units are manufactured in numbered micro-batches. Once
                an epoch caps, production dies are destroyed.
              </p>
            </div>

            {/* Countdown Box */}
            <div className="bg-[#f5efe6] border border-[#d5cdc0] p-4 flex flex-col items-start sm:items-end">
              <span className="text-[10px] text-[#59544c] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-bold">
                <Clock className="w-3.5 h-3.5 text-[#7b6e54]" />
                <span>NEXT EPOCH CLOSES IN:</span>
              </span>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[#1a1816] tracking-widest">
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
                className="border border-[#d5cdc0] bg-[#f5efe6] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4 mb-4 text-[10px]">
                    <span className="text-[#59544c] tracking-widest font-bold">{drop.code}</span>
                    <span className="bg-[#b83b3b]/15 text-[#b83b3b] border border-[#b83b3b]/40 px-2 py-0.5 font-bold uppercase tracking-wider">
                      {drop.status}
                    </span>
                  </div>

                  <div className="relative aspect-[16/9] bg-[#ede7dd] border border-[#d5cdc0] overflow-hidden mb-6">
                    <img
                      src={drop.image}
                      alt={drop.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-headline text-2xl font-bold uppercase text-[#1a1816] tracking-tight">
                      {drop.title}
                    </h3>
                    <span className="text-sm font-bold text-[#1a1816]">${drop.price}</span>
                  </div>

                  <p className="text-xs text-[#59544c] leading-relaxed mb-6 font-mono">
                    {drop.description}
                  </p>

                  {/* Allocation Status Bar */}
                  <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 mb-6">
                    <div className="flex justify-between text-[10px] mb-2 font-mono">
                      <span className="text-[#59544c]">REMAINING ALLOCATION</span>
                      <span className="text-[#1a1816] font-bold">
                        {remaining} OF {drop.totalUnits} UNITS LEFT
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#ded6c9] overflow-hidden">
                      <div
                        className="h-full bg-[#1a1816]"
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
                      code: drop.code,
                      name: drop.title,
                      edition: drop.edition,
                      price: drop.price,
                      image: drop.image,
                      colorway: 'Obsidian Drop Edition',
                      specification: 'US 10 / EU 44',
                      availableSizes: ['US 9 / EU 42.5', 'US 10 / EU 44', 'US 11 / EU 45'],
                      allocationStatus: `Allocation Reserved // ${remaining} Remaining`,
                      quantity: 1,
                    };
                    onClaimDrop(cartItem);
                    onShowToast(`CLAIMED DROP ALLOCATION: ${drop.title}`);
                  }}
                  className="w-full py-4 bg-[#141312] hover:bg-[#35322e] text-[#f5efe6] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all cursor-pointer"
                >
                  <span>CLAIM ALLOCATION FROM RUN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
