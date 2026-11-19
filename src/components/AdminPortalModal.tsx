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
      className="fixed inset-0 z-50 bg-[#09090b]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto font-mono"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#121215] border border-[#242429] max-w-2xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl animate-fade-in">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-[#242429] pb-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#c9a96e]" />
            <div>
              <span className="text-[12px] font-bold text-[#f4f4f6] uppercase tracking-wider block">
                VANTA ARCHIVE // PORTAL_ADM CONSOLE
              </span>
              <span className="text-[9px] text-[#c9a96e]">
                ADMINISTRATION ENCLAVE CONSOLE
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

        {/* Telemetry Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[10px]">
          <div className="bg-[#18181c] border border-[#242429] p-3 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#8e8e98]">
              <Activity className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>SYS_STATUS</span>
            </div>
            <span className="text-[#f4f4f6] font-bold text-[11px]">ACTIVE ENCLAVE</span>
          </div>

          <div className="bg-[#18181c] border border-[#242429] p-3 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#8e8e98]">
              <Cpu className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>TRANSIT QUEUE</span>
            </div>
            <span className="text-[#f4f4f6] font-bold text-[11px]">ENCRYPTED</span>
          </div>

          <div className="bg-[#18181c] border border-[#242429] p-3 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#8e8e98]">
              <KeyRound className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>CIPHER</span>
            </div>
            <span className="text-[#f4f4f6] font-bold text-[11px]">ARGON2ID</span>
          </div>

          <div className="bg-[#18181c] border border-[#242429] p-3 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#8e8e98]">
              <Database className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>LEDGER SYNC</span>
            </div>
            <span className="text-[#f4f4f6] font-bold text-[11px]">POSTGRES DB</span>
          </div>
        </div>

        {/* Live Allocation Logs */}
        <div className="bg-[#18181c] border border-[#242429] p-4 flex flex-col gap-2">
          <span className="text-[10px] text-[#c9a96e] uppercase tracking-wider font-bold">
            OPERATIONAL PROTOCOL STATUS:
          </span>
          <p className="text-[10px] text-[#8e8e98]">
            Authenticated administrative sessions monitor live product inventory, customer allocations, and fulfillment records in the Atelier Dashboard.
          </p>
        </div>

        {/* Administrative Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#242429]">
          <button
            onClick={onResetBag}
            className="px-4 py-2.5 bg-[#18181c] border border-[#242429] hover:border-[#3a3a42] text-[#8e8e98] hover:text-[#f4f4f6] text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            RESET SHOPPING BAG
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#f4f4f6] text-[#09090b] hover:bg-[#c9a96e] text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            CLOSE CONSOLE
          </button>
        </div>
      </div>
    </div>
  );
};