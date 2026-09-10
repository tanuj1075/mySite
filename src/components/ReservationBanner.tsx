import React, { useState, useEffect } from 'react';
import { Timer, RefreshCw } from 'lucide-react';

interface ReservationBannerProps {
  initialMinutes?: number;
  initialSeconds?: number;
}

export const ReservationBanner: React.FC<ReservationBannerProps> = ({
  initialMinutes = 14,
  initialSeconds = 27,
}) => {
  const [secondsRemaining, setSecondsRemaining] = useState(
    initialMinutes * 60 + initialSeconds
  );

  useEffect(() => {
    if (secondsRemaining <= 0) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [secondsRemaining]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;

  const extendHold = () => {
    setSecondsRemaining(15 * 60);
  };

  return (
    <div
      id="reservation-status-banner"
      className="w-full bg-[#e4ddcf] border-b border-[#d5cdc0] px-5 md:px-16 py-3"
    >
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Urgent Allocation Status with Pulsing Indicator */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-[#1a1816] opacity-75"></span>
            <span className="relative inline-flex rounded-none h-2 w-2 bg-[#1a1816]"></span>
          </span>
          <span className="font-mono text-[10px] text-[#1a1816] uppercase tracking-[0.18em] font-bold">
            HIGH DEMAND ALLOCATION ACTIVE // ARCHIVE ITEMS RESERVED
          </span>
        </div>

        {/* Live Reservation Timer */}
        <div className="flex items-center gap-2 bg-[#ede7dd] px-3 py-1 border border-[#d5cdc0]">
          <Timer className="w-3.5 h-3.5 text-[#7b6e54]" />
          <span className="font-mono text-[10px] text-[#59544c] uppercase tracking-wider">
            HOLD TIME REMAINING:
          </span>
          <span
            id="reservation-timer"
            className="font-mono text-[10px] text-[#1a1816] font-bold tracking-widest min-w-[36px]"
          >
            {formattedTime}
          </span>
          <button
            id="extend-hold-btn"
            onClick={extendHold}
            className="ml-2 text-[#59544c] hover:text-[#1a1816] transition-colors p-0.5 cursor-pointer"
            title="Extend Allocation Lock +15:00"
            aria-label="Extend Allocation Lock"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
