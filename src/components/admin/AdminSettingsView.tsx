import React, { useState } from 'react';
import { Save, Check, Globe, Shield, RefreshCw } from 'lucide-react';

interface AdminSettingsViewProps {
  onShowToast: (msg: string) => void;
}

export const AdminSettingsView: React.FC<AdminSettingsViewProps> = ({ onShowToast }) => {
  const [storeName, setStoreName] = useState('VANTA ARCHIVE');
  const [storeDescription, setStoreDescription] = useState('Style. Comfort. Performance.');
  const [currency, setCurrency] = useState('INR (₹)');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      onShowToast('STORE SETTINGS PERSISTED SUCCESSFULLY');
    }, 400);
  };

  return (
    <div className="p-6 sm:p-10 font-sans space-y-8 bg-[#16161B] min-h-full text-white">
      {/* Title (Exact Match to Reference Panel 12) */}
      <div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Settings
        </h1>
        <p className="text-xs text-[#8e8e98] mt-1">
          Manage brand identities, global currency routing, and store preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Store Settings Form (Panel 12 Left) */}
        <div className="lg:col-span-7 bg-[#1E1E24] border border-[#2A2A32] rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="border-b border-[#2A2A32] pb-4">
            <h2 className="text-lg font-bold text-white">Store Settings</h2>
            <p className="text-xs text-[#8e8e98] mt-0.5">Primary store profile details</p>
          </div>

          <form onSubmit={handleSave} className="space-y-5 text-xs">
            <div>
              <label className="block text-[#8e8e98] font-semibold mb-1.5 uppercase text-[11px] tracking-wider">
                Store Name
              </label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full bg-[#16161B] border border-[#2A2A32] focus:border-[#B4532A] rounded-xl px-4 py-3 text-white font-medium outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#8e8e98] font-semibold mb-1.5 uppercase text-[11px] tracking-wider">
                Store Description
              </label>
              <input
                type="text"
                value={storeDescription}
                onChange={(e) => setStoreDescription(e.target.value)}
                className="w-full bg-[#16161B] border border-[#2A2A32] focus:border-[#B4532A] rounded-xl px-4 py-3 text-white font-medium outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#8e8e98] font-semibold mb-1.5 uppercase text-[11px] tracking-wider">
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-[#16161B] border border-[#2A2A32] focus:border-[#B4532A] rounded-xl px-4 py-3 text-white font-medium outline-none transition-colors cursor-pointer"
              >
                <option value="INR (₹)">INR (₹) - Indian Rupee</option>
                <option value="USD ($)">USD ($) - US Dollar</option>
                <option value="EUR (€)">EUR (€) - Euro</option>
                <option value="GBP (£)">GBP (£) - British Pound</option>
                <option value="AED (د.إ)">AED (د.إ) - UAE Dirham</option>
              </select>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSaving}
                className="px-8 py-3.5 bg-[#B4532A] hover:bg-[#9C431F] text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Saving Changes...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right: High-Res Logo Preview Card (Panel 12 Right) */}
        <div className="lg:col-span-5 bg-white text-[#242321] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 shadow-lg min-h-[380px]">
          <div className="w-24 h-24 bg-[#B4532A]/10 rounded-2xl flex items-center justify-center text-[#B4532A] font-black text-5xl">
            V
          </div>
          <div>
            <h3 className="text-2xl font-black tracking-tight text-[#242321]">
              VANTA
            </h3>
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#77716B] block">
              ARCHIVE
            </span>
          </div>
          <p className="text-xs text-[#77716B] max-w-xs font-medium">
            {storeDescription}
          </p>
          <div className="pt-2">
            <span className="inline-block px-3 py-1 bg-[#F7F2EC] border border-[#E9D9CA] rounded-full text-[10px] font-bold text-[#B4532A]">
              PRIMARY BRAND EMBLEM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
