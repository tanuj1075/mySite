import React, { useState, useEffect } from 'react';
import { X, MapPin, Navigation, Sparkles, Check, Globe } from 'lucide-react';
import { Address } from '../types';
import {
  GLOBAL_LOCATION_PRESETS,
  WORLDWIDE_COUNTRIES,
  detectUserLocation,
  getAddressSuggestions,
  GlobalLocationPreset,
} from '../lib/addressService';

interface NewAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAddress: (address: Address) => void;
}

export const NewAddressModal: React.FC<NewAddressModalProps> = ({
  isOpen,
  onClose,
  onAddAddress,
}) => {
  const [name, setName] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('United States');
  const [phone, setPhone] = useState('');
  const [suggestions, setSuggestions] = useState<GlobalLocationPreset[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [autoDetectNotice, setAutoDetectNotice] = useState<string | null>(null);

  // Auto-fill initial location recommendation on mount if blank
  useEffect(() => {
    if (isOpen && !line1) {
      const loc = detectUserLocation();
      setCountry(loc.country);
      setPhone(loc.phoneCode ? `${loc.phoneCode} ` : '');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleApplyPreset = (preset: GlobalLocationPreset) => {
    setName(preset.name);
    setLine1(preset.line1);
    setLine2(preset.line2 || '');
    setCity(preset.city);
    setState(preset.state || '');
    setPostalCode(preset.postalCode);
    setCountry(preset.country);
    setPhone(preset.phoneExample);
    setShowSuggestions(false);
    setAutoDetectNotice(`Applied ${preset.flag} ${preset.name}`);
    setTimeout(() => setAutoDetectNotice(null), 3000);
  };

  const handleAutoDetect = () => {
    const loc = detectUserLocation();
    setCountry(loc.country);
    setCity(loc.city);
    setPostalCode(loc.defaultPostal);
    setPhone(loc.phoneCode ? `${loc.phoneCode} ` : '');
    if (loc.presetMatch) {
      setName(loc.presetMatch.name);
      setLine1(loc.presetMatch.line1);
      setLine2(loc.presetMatch.line2 || '');
      setState(loc.presetMatch.state || '');
      setPhone(loc.presetMatch.phoneExample);
    }
    setAutoDetectNotice(`Auto-detected regional location: ${loc.city}, ${loc.country}`);
    setTimeout(() => setAutoDetectNotice(null), 3500);
  };

  const handleStreetChange = (val: string) => {
    setLine1(val);
    const matches = getAddressSuggestions(val, country);
    setSuggestions(matches);
    setShowSuggestions(matches.length > 0 && val.length > 1);
  };

  const handleCityChange = (val: string) => {
    setCity(val);
    const matches = getAddressSuggestions(val, country);
    setSuggestions(matches);
    setShowSuggestions(matches.length > 0);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    const cObj = WORLDWIDE_COUNTRIES.find((c) => c.name === selectedCountry);
    if (cObj) {
      setCity(cObj.defaultCity);
      setPostalCode(cObj.defaultPostal);
      setPhone(`${cObj.phoneCode} `);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!line1.trim() || !city.trim()) return;

    const newAddr: Address = {
      id: `addr-${Date.now()}`,
      name: name.trim() ? name.toUpperCase() : `${city.toUpperCase()} VAULT SUITE`,
      line1: line1.trim(),
      line2: line2.trim() || undefined,
      city: city.trim(),
      state: state.trim() || undefined,
      postalCode: postalCode.trim() || '10001',
      country: country.trim(),
      phone: phone.trim() || undefined,
    };

    onAddAddress(newAddr);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#121215] border border-[#242429] max-w-lg w-full p-5 sm:p-7 flex flex-col gap-5 shadow-2xl relative my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#242429] pb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C9A96E]" />
            <span className="font-mono text-[11px] font-bold text-[#F4F4F6] uppercase tracking-wider">
              ENTER DISPATCH DESTINATION (WORLDWIDE)
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#8E8E98] hover:text-[#F4F4F6] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auto-detect & Recommended Presets Bar */}
        <div className="space-y-2 bg-[#17171C] border border-[#242429] p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#C9A96E] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>RECOMMENDED ATELIER DESTINATIONS</span>
            </span>
            <button
              type="button"
              onClick={handleAutoDetect}
              className="text-[10px] text-[#F4F4F6] hover:text-[#C9A96E] font-mono font-bold flex items-center gap-1 cursor-pointer transition-colors"
              title="Auto-detect current location"
            >
              <Navigation className="w-3 h-3 text-[#C9A96E]" />
              <span>AUTO-DETECT</span>
            </button>
          </div>

          {/* Quick 1-Click Fill Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {GLOBAL_LOCATION_PRESETS.slice(0, 6).map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className="px-2 py-1 bg-[#121215] hover:bg-[#C9A96E] hover:text-[#09090B] border border-[#242429] hover:border-[#C9A96E] text-[10px] font-mono font-medium text-[#8E8E98] transition-all cursor-pointer flex items-center gap-1"
              >
                <span>{preset.flag}</span>
                <span>{preset.city}</span>
              </button>
            ))}
          </div>

          {autoDetectNotice && (
            <div className="text-[10px] text-[#4ADE80] font-mono flex items-center gap-1 pt-1 animate-fade-in">
              <Check className="w-3 h-3" />
              <span>{autoDetectNotice}</span>
            </div>
          )}
        </div>

        {/* Address Input Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 font-mono text-[11px]">
          
          {/* Destination Alias */}
          <div>
            <label className="text-[#8E8E98] uppercase block mb-1 font-bold">
              DESTINATION ALIAS / VAULT LABEL
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. TOKYO ARCHIVE RESIDENCE"
              className="w-full bg-[#18181C] border border-[#242429] px-3 py-2 text-[#F4F4F6] placeholder:text-[#52525B] focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
          </div>

          {/* Country Selector */}
          <div>
            <label className="text-[#8E8E98] uppercase block mb-1 font-bold flex items-center justify-between">
              <span>DESTINATION COUNTRY *</span>
              <span className="text-[9px] text-[#C9A96E]">WORLDWIDE TRANSIT ACTIVE</span>
            </label>
            <select
              value={country}
              onChange={handleCountryChange}
              className="w-full bg-[#18181C] border border-[#242429] px-3 py-2 text-[#F4F4F6] focus:outline-none focus:border-[#C9A96E] transition-colors cursor-pointer"
            >
              {WORLDWIDE_COUNTRIES.map((c) => (
                <option key={c.code} value={c.name} className="bg-[#121215] text-[#F4F4F6]">
                  {c.flag} {c.name} ({c.phoneCode})
                </option>
              ))}
            </select>
          </div>

          {/* Street Address with Live Autocomplete Suggestions */}
          <div className="relative">
            <label className="text-[#8E8E98] uppercase block mb-1 font-bold flex items-center justify-between">
              <span>STREET ADDRESS *</span>
              {line1 && <span className="text-[9px] text-[#C9A96E]">AUTOCOMPLETE ACTIVE</span>}
            </label>
            <input
              type="text"
              required
              value={line1}
              onChange={(e) => handleStreetChange(e.target.value)}
              placeholder="e.g. 742 Broadway or 5-7-2 Minami-Aoyama"
              className="w-full bg-[#18181C] border border-[#242429] px-3 py-2 text-[#F4F4F6] placeholder:text-[#52525B] focus:outline-none focus:border-[#C9A96E] transition-colors"
            />

            {/* Suggestions Overlay */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-[#17171C] border border-[#C9A96E]/50 shadow-2xl z-20 py-1 max-h-48 overflow-y-auto">
                <div className="px-2.5 py-1 text-[9px] text-[#C9A96E] uppercase tracking-wider font-bold border-b border-[#242429]">
                  MATCHING RECOMMENDED DESTINATIONS (CLICK TO FILL)
                </div>
                {suggestions.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => handleApplyPreset(s)}
                    className="w-full text-left px-3 py-2 hover:bg-[#202028] text-xs transition-colors flex items-center justify-between border-b border-[#242429]/50 last:border-none cursor-pointer"
                  >
                    <div>
                      <div className="font-bold text-[#F4F4F6] flex items-center gap-1.5">
                        <span>{s.flag}</span>
                        <span>{s.line1}</span>
                      </div>
                      <div className="text-[10px] text-[#8E8E98]">
                        {s.city}, {s.state ? `${s.state}, ` : ''}{s.country} ({s.postalCode})
                      </div>
                    </div>
                    <span className="text-[9px] text-[#C9A96E] font-bold">APPLY →</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Suite / Unit */}
          <div>
            <label className="text-[#8E8E98] uppercase block mb-1 font-bold">
              SUITE / APARTMENT / VAULT FLOOR
            </label>
            <input
              type="text"
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
              placeholder="e.g. Suite 402, Building B, Penthouse"
              className="w-full bg-[#18181C] border border-[#242429] px-3 py-2 text-[#F4F4F6] placeholder:text-[#52525B] focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
          </div>

          {/* City, State & Postal Grid */}
          <div className="grid grid-cols-3 gap-2.5">
            <div>
              <label className="text-[#8E8E98] uppercase block mb-1 font-bold">CITY *</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => handleCityChange(e.target.value)}
                placeholder="New York"
                className="w-full bg-[#18181C] border border-[#242429] px-3 py-2 text-[#F4F4F6] placeholder:text-[#52525B] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
            <div>
              <label className="text-[#8E8E98] uppercase block mb-1 font-bold">STATE / REGION</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="NY / Tokyo"
                className="w-full bg-[#18181C] border border-[#242429] px-3 py-2 text-[#F4F4F6] placeholder:text-[#52525B] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
            <div>
              <label className="text-[#8E8E98] uppercase block mb-1 font-bold">POSTAL CODE *</label>
              <input
                type="text"
                required
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="10003"
                className="w-full bg-[#18181C] border border-[#242429] px-3 py-2 text-[#F4F4F6] placeholder:text-[#52525B] focus:outline-none focus:border-[#C9A96E] transition-colors"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-[#8E8E98] uppercase block mb-1 font-bold">
              CONTACT PHONE NUMBER (ARMORED COURIER DISPATCH)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 212-555-0199"
              className="w-full bg-[#18181C] border border-[#242429] px-3 py-2 text-[#F4F4F6] placeholder:text-[#52525B] focus:outline-none focus:border-[#C9A96E] transition-colors"
            />
          </div>

          {/* Form Actions */}
          <div className="flex gap-3 pt-3 border-t border-[#242429] mt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-2.5 border border-[#242429] text-[#8E8E98] hover:text-[#F4F4F6] hover:border-[#8E8E98] uppercase tracking-wider cursor-pointer transition-colors"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="w-1/2 py-2.5 bg-gradient-to-r from-[#C9A96E] via-[#EAE3D5] to-[#C9A96E] text-[#09090B] font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-lg"
            >
              CONFIRM DESTINATION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
