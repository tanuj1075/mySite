import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';
import { Address } from '../types';

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
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('United States');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!line1 || !city) return;

    const newAddr: Address = {
      id: `addr-${Date.now()}`,
      name: name.trim() ? name.toUpperCase() : 'RESIDENTIAL SUITE',
      line1: line1.trim(),
      line2: line2.trim() || undefined,
      city: city.trim(),
      postalCode: postalCode.trim() || '10001',
      country: country.trim(),
      phone: phone.trim() || undefined,
    };

    onAddAddress(newAddr);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1816]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-md w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#d5cdc0] pb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#7b6e54]" />
            <span className="font-mono text-[11px] font-bold text-[#1a1816] uppercase tracking-wider">
              ENTER NEW DISPATCH DESTINATION
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#59544c] hover:text-[#1a1816] p-1 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-[11px]">
          <div>
            <label className="text-[#59544c] uppercase block mb-1 font-bold">
              DESTINATION ALIAS / VAULT NAME
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. TOKYO ARCHIVE SUITE"
              className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2.5 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
            />
          </div>

          <div>
            <label className="text-[#59544c] uppercase block mb-1 font-bold">
              STREET ADDRESS *
            </label>
            <input
              type="text"
              required
              value={line1}
              onChange={(e) => setLine1(e.target.value)}
              placeholder="e.g. 5-7-2 Minami-Aoyama"
              className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2.5 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
            />
          </div>

          <div>
            <label className="text-[#59544c] uppercase block mb-1 font-bold">
              SUITE / FLOOR / VAULT LEVEL
            </label>
            <input
              type="text"
              value={line2}
              onChange={(e) => setLine2(e.target.value)}
              placeholder="e.g. Suite 402, Building B"
              className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2.5 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[#59544c] uppercase block mb-1 font-bold">CITY *</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Tokyo"
                className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2.5 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
              />
            </div>
            <div>
              <label className="text-[#59544c] uppercase block mb-1 font-bold">POSTAL CODE</label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="107-0062"
                className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2.5 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[#59544c] uppercase block mb-1 font-bold">COUNTRY</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Japan"
                className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2.5 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
              />
            </div>
            <div>
              <label className="text-[#59544c] uppercase block mb-1 font-bold">PHONE NUMBER</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+81 3-5412-8900"
                className="w-full bg-[#ede7dd] border border-[#d5cdc0] px-3 py-2.5 text-[#1a1816] focus:outline-none focus:border-[#1a1816]"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-[#d5cdc0] mt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-3 border border-[#d5cdc0] text-[#59544c] hover:text-[#1a1816] hover:bg-[#ede7dd] uppercase tracking-wider cursor-pointer transition-colors"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 bg-[#141312] text-[#f5efe6] font-bold uppercase tracking-wider hover:bg-[#35322e] transition-colors cursor-pointer"
            >
              CONFIRM DESTINATION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
