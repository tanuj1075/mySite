import React from 'react';
import { X, Terminal, Activity, Database, KeyRound, Cpu } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResetBag: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  onResetBag,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-2xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#7b6e54]" />
            <div>
              <span className="text-[12px] font-bold text-[#1a1816] uppercase tracking-wider block">
                VANTA ARCHIVE // PORTAL_ADM CONSOLE
              </span>
              <span className="text-[9px] text-[#59544c]">
                ADMINISTRATION CONSOLE
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

        {/* Telemetry Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px]">
          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#59544c]">
              <Activity className="w-3.5 h-3.5 text-[#7b6e54]" />
              <span>SYS_STATUS</span>
            </div>
            <span className="text-[#1a1816] font-bold text-[11px]">STATUS NOT CONNECTED</span>
          </div>

          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#59544c]">
              <Cpu className="w-3.5 h-3.5 text-[#7b6e54]" />
              <span>TRANSIT QUEUE</span>
            </div>
            <span className="text-[#1a1816] font-bold text-[11px]">NOT TRACKED</span>
          </div>

          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#59544c]">
              <KeyRound className="w-3.5 h-3.5 text-[#7b6e54]" />
              <span>CIPHER</span>
            </div>
            <span className="text-[#1a1816] font-bold text-[11px]">NOT REPORTED</span>
          </div>

          <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#59544c]">
              <Database className="w-3.5 h-3.5 text-[#7b6e54]" />
              <span>LEDGER LATENCY</span>
            </div>
            <span className="text-[#1a1816] font-bold text-[11px]">NOT MEASURED</span>
          </div>
        </div>

        {/* Live Allocation Logs */}
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-2">
          <span className="text-[10px] text-[#7b6e54] uppercase tracking-wider font-bold">
            LIVE OPERATIONAL FEED:
          </span>
          <p className="text-[10px] text-[#59544c]">No live warehouse, carrier, encryption, or database telemetry is connected to this console.</p>
        </div>

        {/* Administrative Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#d5cdc0]">
          <button
            onClick={onResetBag}
            className="px-4 py-2.5 bg-[#ede7dd] border border-[#d5cdc0] hover:bg-[#ded6c9] text-[#1a1816] text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            RESET SHOPPING BAG
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#141312] text-[#f5efe6] hover:bg-[#35322e] text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            CLOSE CONSOLE
          </button>
        </div>
      </div>
    </div>
  );
};
