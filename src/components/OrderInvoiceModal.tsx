import React, { useRef } from 'react';
import { Printer, Download, X, ShieldCheck, CheckCircle, FileText, QrCode, Sparkles, Building2 } from 'lucide-react';
import { Order } from '../types';
import { formatCurrency } from '../lib/currency';

interface OrderInvoiceModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
  patronName?: string;
  patronEmail?: string;
  patronId?: string;
}

export const OrderInvoiceModal: React.FC<OrderInvoiceModalProps> = ({
  order,
  isOpen,
  onClose,
  patronName,
  patronEmail,
  patronId,
}) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !order) return null;

  const invoiceNumber = `INV-VN-${order.id.replace(/[^a-zA-Z0-9]/g, '').slice(-8) || '20261101'}`;
  const issueDate = order.date ? new Date(order.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }) : new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const currency = order.currency ?? 'INR';
  const exchangeRate = order.exchangeRate ?? 1;
  const itemsSubtotal = order.items.reduce((sum, item) => sum + item.price * item.quantity, 0) * exchangeRate;
  const luxuryTaxRate = 0.18; // 18% Luxury GST/VAT (Included)
  const calculatedTax = itemsSubtotal * luxuryTaxRate / (1 + luxuryTaxRate);
  const netGoodsValue = itemsSubtotal - calculatedTax;
  const totalAmount = (order.paymentAmount ?? order.total) * (order.currency ? 1 : exchangeRate);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextDossier = () => {
    const lines = [
      '=================================================================',
      '       VANTA ARCHIVE // ATELIER ACQUISITION INVOICE & PROVENANCE',
      '=================================================================',
      `Invoice Ref:        ${invoiceNumber}`,
      `Order Display ID:   #${order.id}`,
      `Issue Timestamp:    ${issueDate}`,
      `Settlement Status:  SETTLED // ATELIER CONCIERGE PROTOCOL (VERIFIED)`,
      `Payment Method:     ${order.paymentMethod} (PRE-APPROVED ATELIER CLEARANCE)`,
      '-----------------------------------------------------------------',
      'PATRON & DISPATCH SPECIFICATIONS:',
      `Patron Name:        ${patronName || order.shippingAddress.name}`,
      `Patron Email:       ${patronEmail || 'archive.patron@vanta-atelier.internal'}`,
      `Patron Dossier ID:  ${patronId || 'VN-CLIENT-SPEC-01'}`,
      `Destination:        ${order.shippingAddress.line1}${order.shippingAddress.line2 ? `, ${order.shippingAddress.line2}` : ''}`,
      `                    ${order.shippingAddress.city}, ${order.shippingAddress.state || ''} ${order.shippingAddress.postalCode}`,
      `                    ${order.shippingAddress.country}`,
      `Courier Carrier:    ${order.carrier || 'VANTA ARMORED COURIER'}`,
      `Tracking Reference: ${order.trackingNumber || 'ARMORED-TRK-VERIFIED'}`,
      '-----------------------------------------------------------------',
      'ITEMIZED SPECIMEN ACQUISITION LEDGER:',
      ...order.items.map(
        (it, i) =>
          `[${i + 1}] ${it.name}\n    Brand: ${it.brand} | Color: ${it.color} | Size: ${it.sizeSystem ? `${it.sizeSystem} ` : 'US '}${it.size}\n    Qty: ${it.quantity} x ${formatCurrency(it.price * exchangeRate, currency)} = ${formatCurrency(it.price * it.quantity * exchangeRate, currency)}`
      ),
      '-----------------------------------------------------------------',
      'FINANCIAL BREAKDOWN:',
      `Goods Net Base:     ${formatCurrency(netGoodsValue, currency)}`,
      `Luxury Goods Tax:   ${formatCurrency(calculatedTax, currency)} (18% GST/VAT Included)`,
      `Armored Courier:    COMPLIMENTARY (₹0.00)`,
      `Atelier Insurance:  INCLUDED (100% TRANSIT GUARANTEE)`,
      `TOTAL SETTLEMENT:   ${formatCurrency(totalAmount, currency)}`,
      '=================================================================',
      'AUTHENTICITY CERTIFICATION:',
      'Verified by Vanta Archive Curator Atelier. Tamper-evident seal applied.',
      'Cryptographic Provenance Hash: SHA-256: 7f8a9e2d8c3b1a4e5f6081729304eab',
      'Official Atelier Clearance Signature: TANUJ // CHIEF ARCHIVIST',
      '=================================================================',
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${invoiceNumber}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static print:overflow-visible">
      <div
        ref={printRef}
        className="max-w-[880px] w-full bg-[#121215] border border-[#C9A96E]/40 text-[#F4F4F6] shadow-[0_0_60px_rgba(201,169,110,0.18)] rounded-none relative my-auto p-6 sm:p-10 font-mono print:bg-white print:text-black print:border-none print:shadow-none print:p-6 print:w-full print:max-w-none"
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between border-b border-[#242429] pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-bold">
              OFFICIAL ATELIER ACQUISITION BILL // CLIENT DOSSIER
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#1B1B20] hover:bg-[#C9A96E] hover:text-[#09090B] border border-[#C9A96E]/40 text-[11px] font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT BILL (PDF)</span>
            </button>
            <button
              onClick={handleDownloadTextDossier}
              className="px-3 py-1.5 bg-[#1B1B20] hover:bg-[#C9A96E] hover:text-[#09090B] border border-[#3A3A42] text-[11px] font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOSSIER (.TXT)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8E8E98] hover:text-[#F4F4F6] hover:bg-[#1B1B20] transition-colors cursor-pointer"
              title="Close Invoice"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* INVOICE CONTENT (Printable Area) */}
        <div className="space-y-6 print:space-y-4">
          
          {/* Header & Atelier Brand Crest */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-[#242429] print:border-black/30 pb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl sm:text-2xl font-serif tracking-[0.3em] font-light text-[#F4F4F6] print:text-black">
                  VANTA ARCHIVE
                </span>
                <span className="px-1.5 py-0.5 text-[9px] bg-[#C9A96E]/20 text-[#C9A96E] border border-[#C9A96E]/40 tracking-widest font-mono font-bold print:border-black print:text-black">
                  ATELIER
                </span>
              </div>
              <p className="text-[10px] text-[#8E8E98] print:text-gray-600 tracking-wider uppercase">
                ACQUISITION INVOICE & CRYPTOGRAPHIC PROVENANCE CERTIFICATE
              </p>
              <p className="text-[10px] text-[#8E8E98] print:text-gray-600 font-sans mt-0.5">
                Archival Haute Sneaker Laboratory & Private Patron Vault • Milan • Tokyo • New Delhi
              </p>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <div className="inline-block bg-[#16161B] border border-[#C9A96E]/40 px-3 py-1 text-xs font-bold text-[#C9A96E] tracking-widest print:border-black print:text-black print:bg-gray-100">
                {invoiceNumber}
              </div>
              <div className="text-[10px] text-[#8E8E98] print:text-gray-600">
                DATE: <span className="text-[#F4F4F6] print:text-black font-bold">{issueDate}</span>
              </div>
              <div className="text-[10px] text-[#8E8E98] print:text-gray-600">
                ORDER ID: <span className="text-[#F4F4F6] print:text-black font-bold">#{order.id}</span>
              </div>
              <div className="inline-flex items-center gap-1 text-[9px] text-[#4ADE80] print:text-black font-bold tracking-widest uppercase bg-[#4ADE80]/10 px-2 py-0.5 border border-[#4ADE80]/30 print:border-black mt-1">
                <CheckCircle className="w-2.5 h-2.5" />
                <span>SETTLED // ATELIER CONCIERGE PROTOCOL</span>
              </div>
            </div>
          </div>

          {/* Patron Dossier & Shipping Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#17171C] border border-[#242429] p-4 sm:p-5 print:bg-gray-50 print:border-black/30">
            <div className="space-y-1">
              <span className="text-[10px] text-[#C9A96E] print:text-black uppercase font-bold tracking-wider block">
                ISSUED TO (PATRON):
              </span>
              <div className="font-bold text-[#F4F4F6] print:text-black text-sm">
                {patronName || order.shippingAddress.name}
              </div>
              {patronEmail && (
                <div className="text-[11px] text-[#8E8E98] print:text-gray-600">{patronEmail}</div>
              )}
              {patronId && (
                <div className="text-[10px] text-[#C9A96E] print:text-gray-600 tracking-wider">
                  MEMBER ID: <span className="font-mono font-bold text-[#F4F4F6] print:text-black">{patronId}</span>
                </div>
              )}
              <div className="text-[10px] text-[#8E8E98] print:text-gray-600 pt-1">
                PATRON STATUS: <span className="text-[#F4F4F6] print:text-black font-bold">AUTHENTICATED ATELIER CLIENT</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] text-[#C9A96E] print:text-black uppercase font-bold tracking-wider block">
                DISPATCH DESTINATION & TRANSIT:
              </span>
              <div className="text-[#F4F4F6] print:text-black font-medium">{order.shippingAddress.line1}</div>
              {order.shippingAddress.line2 && (
                <div className="text-[#8E8E98] print:text-gray-600">{order.shippingAddress.line2}</div>
              )}
              <div className="text-[#8E8E98] print:text-gray-600">
                {order.shippingAddress.city}
                {order.shippingAddress.state ? `, ${order.shippingAddress.state}` : ''} {order.shippingAddress.postalCode}
              </div>
              <div className="text-[#8E8E98] print:text-gray-600">{order.shippingAddress.country}</div>
              {order.shippingAddress.phone && (
                <div className="text-[10px] text-[#C9A96E] print:text-gray-600">📞 {order.shippingAddress.phone}</div>
              )}
              <div className="text-[10px] text-[#8E8E98] print:text-gray-600 pt-1">
                CARRIER: <span className="font-bold text-[#F4F4F6] print:text-black">{order.carrier || 'ARMORED TRANSIT COURIER'}</span>
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="border border-[#242429] print:border-black/30 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#17171C] print:bg-gray-200 border-b border-[#242429] print:border-black/30 text-[10px] uppercase tracking-wider text-[#C9A96E] print:text-black font-bold">
                <tr>
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">SPECIMEN SPECIFICATION</th>
                  <th className="py-2.5 px-3">COLORWAY</th>
                  <th className="py-2.5 px-3">SIZE</th>
                  <th className="py-2.5 px-3 text-center">QTY</th>
                  <th className="py-2.5 px-3 text-right">UNIT PRICE</th>
                  <th className="py-2.5 px-3 text-right">TOTAL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#242429] print:divide-black/20">
                {order.items.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#16161B]/50 print:hover:bg-transparent">
                    <td className="py-3 px-3 text-[#8E8E98] print:text-gray-600 font-mono">{idx + 1}</td>
                    <td className="py-3 px-3">
                      <div className="font-bold text-[#F4F4F6] print:text-black uppercase">{item.name}</div>
                      <div className="text-[10px] text-[#8E8E98] print:text-gray-600">
                        {item.brand} • SKU: {item.sku || 'VN-SPEC-VAULT'}
                      </div>
                    </td>
                    <td className="py-3 px-3 text-[#F4F4F6] print:text-black font-medium">{item.color}</td>
                    <td className="py-3 px-3 font-bold text-[#C9A96E] print:text-black">
                      {item.sizeSystem && item.sizeSystem !== 'Size' ? `${item.sizeSystem} ` : item.sizeSystem ? '' : 'US '}
                      {item.size}
                    </td>
                    <td className="py-3 px-3 text-center font-bold text-[#F4F4F6] print:text-black">{item.quantity}</td>
                    <td className="py-3 px-3 text-right text-[#8E8E98] print:text-gray-700">
                      {formatCurrency(item.price * exchangeRate, currency)}
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-[#F4F4F6] print:text-black">
                      {formatCurrency(item.price * item.quantity * exchangeRate, currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Financial Breakdown & Provenance Seals */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-2 items-start">
            
            {/* Authenticity Certificate & Atelier Seal */}
            <div className="sm:col-span-7 bg-[#17171C] border border-[#242429] p-4 text-[10px] space-y-2 print:bg-gray-50 print:border-black/30">
              <div className="flex items-center gap-2 text-[#C9A96E] print:text-black font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>CERTIFIED GENUINE ARCHIVAL ACQUISITION</span>
              </div>
              <p className="text-[#8E8E98] print:text-gray-600 leading-relaxed">
                This document certifies that the listed specimens have undergone archival verification, material authentication, and cryptographic registration into the Vanta Archive Vault ledger.
              </p>
              <div className="pt-2 border-t border-[#242429] print:border-black/20 flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-[#8E8E98] print:text-gray-600 block">PROVENANCE SEAL</span>
                  <span className="font-mono text-[#C9A96E] print:text-black font-bold">SHA256: 7F8A9E2D8C...3D2C</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-[#8E8E98] print:text-gray-600 block">AUTHORIZATION SIGNATURE</span>
                  <span className="font-serif italic text-[#F4F4F6] print:text-black text-xs">Tanuj // Chief Archivist</span>
                </div>
              </div>
            </div>

            {/* Calculations & Settlement Total */}
            <div className="sm:col-span-5 bg-[#17171C] border border-[#242429] p-4 text-xs space-y-2 print:bg-gray-50 print:border-black/30">
              <div className="flex justify-between text-[#8E8E98] print:text-gray-600">
                <span>Subtotal (Net):</span>
                <span>{formatCurrency(netGoodsValue, currency)}</span>
              </div>
              <div className="flex justify-between text-[#8E8E98] print:text-gray-600">
                <span>Luxury Goods Tax (18% Incl.):</span>
                <span>{formatCurrency(calculatedTax, currency)}</span>
              </div>
              <div className="flex justify-between text-[#8E8E98] print:text-gray-600">
                <span>Armored Courier Transit:</span>
                <span className="text-[#4ADE80] print:text-black font-bold">COMPLIMENTARY</span>
              </div>
              <div className="flex justify-between text-[#8E8E98] print:text-gray-600">
                <span>Transit Insurance:</span>
                <span className="text-[#4ADE80] print:text-black font-bold">INCLUDED</span>
              </div>
              {order.discount && order.discount > 0 && (
                <div className="flex justify-between text-[#C9A96E] font-bold">
                  <span>Archival Privilege ({order.couponCode || 'CODE'}):</span>
                  <span>-{formatCurrency(order.discount * exchangeRate, currency)}</span>
                </div>
              )}
              <div className="pt-2 border-t border-[#242429] print:border-black/30 flex justify-between items-baseline font-bold text-base text-[#F4F4F6] print:text-black">
                <span className="text-xs uppercase tracking-wider text-[#C9A96E] print:text-black">TOTAL SETTLED:</span>
                <span className="text-[#C9A96E] print:text-black text-lg">
                  {formatCurrency(totalAmount, currency)}
                </span>
              </div>
              <div className="text-[9px] text-right text-[#8E8E98] print:text-gray-500 pt-0.5">
                SETTLEMENT METHOD: {order.paymentMethod} (PRE-APPROVED ATELIER CONCIERGE)
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center pt-4 border-t border-[#242429] print:border-black/30 text-[10px] text-[#8E8E98] print:text-gray-600">
            VANTA ARCHIVE ATELIER • ALL SPECIMENS BACKED BY LIFETIME CRAFTSMANSHIP GUARANTEE • QUESTIONS: CONCIERGE@VANTA-ARCHIVE.COM
          </div>
        </div>

        {/* Modal Bottom Actions (Hidden on print) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 mt-6 border-t border-[#242429] print:hidden">
          <span className="text-[10px] text-[#8E8E98]">
            Need a hardcopy for archival records? Click Print Bill to save as PDF or print.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-gradient-to-r from-[#C9A96E] via-[#EAE3D5] to-[#C9A96E] text-[#09090B] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(201,169,110,0.25)]"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT BILL (PDF)</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#1B1B20] border border-[#242429] hover:border-[#8E8E98] text-[#F4F4F6] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
