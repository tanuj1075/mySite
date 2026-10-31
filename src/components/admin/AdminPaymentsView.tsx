import React, { useEffect, useState } from 'react';
import {
  Search,
  Filter,
  RefreshCw,
  Download,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Clock,
  CheckCircle,
  XCircle,
  Copy,
  ChevronRight,
  Eye,
  Edit3,
  Lock,
  ArrowUpRight,
  X,
} from 'lucide-react';
import { adminApi } from '../../lib/api';
import { formatCurrency } from '../../lib/currency';

interface AdminPaymentsViewProps {
  onShowToast: (msg: string) => void;
}

interface PaymentRecord {
  id: string;
  orderId: string;
  attemptNumber: number;
  provider: string;
  providerOrderId?: string;
  providerPaymentId?: string;
  upiId?: string;
  upiUtr?: string;
  paymentMethod: string;
  amount: number;
  amountReceived?: number;
  currency: string;
  status: 'PENDING' | 'VERIFYING' | 'SUCCESS' | 'FAILED' | 'EXPIRED' | 'CANCELLED' | 'REVERSED';
  verificationSource?: string;
  failureReason?: string;
  reconcileAttempts: number;
  lastReconciledAt?: string;
  createdAt: string;
  verifiedAt?: string;
  order?: {
    id: string;
    displayId: string;
    total: number;
    paymentCurrency: string;
    orderStatus: string;
    user?: {
      email: string;
      name: string;
    };
  };
  auditLogs?: Array<{
    id: string;
    fromStatus?: string;
    toStatus: string;
    action: string;
    actorType: string;
    actorId?: string;
    reason?: string;
    createdAt: string;
  }>;
}

export const AdminPaymentsView: React.FC<AdminPaymentsViewProps> = ({ onShowToast }) => {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isReconciling, setIsReconciling] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // Detail Modal / Inspection
  const [selectedPayment, setSelectedPayment] = useState<PaymentRecord | null>(null);
  const [isDetailLoading, setIsDetailLoading] = useState<boolean>(false);
  const [paymentDetailData, setPaymentDetailData] = useState<any | null>(null);

  // Manual Adjustment Modal
  const [isAdjustModalOpen, setIsAdjustModalOpen] = useState<boolean>(false);
  const [adjustTargetPayment, setAdjustTargetPayment] = useState<PaymentRecord | null>(null);
  const [adjustStatus, setAdjustStatus] = useState<string>('SUCCESS');
  const [adjustReason, setAdjustReason] = useState<string>('');
  const [isAdjustSubmitting, setIsAdjustSubmitting] = useState<boolean>(false);

  const fetchPayments = async () => {
    setIsLoading(true);
    try {
      const res = await adminApi.payments({
        q: searchQuery,
        status: selectedStatus,
        page: currentPage,
        limit: 15,
      });
      setPayments(res.payments as unknown as PaymentRecord[]);
      setTotalCount(res.total);
      setTotalPages(res.totalPages || 1);
    } catch (err) {
      onShowToast(err instanceof Error ? err.message : 'Could not fetch payments');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, [searchQuery, selectedStatus, currentPage]);

  const handleRunReconciliation = async () => {
    setIsReconciling(true);
    try {
      const res = await adminApi.reconcileAllPayments();
      onShowToast(
        `RECONCILIATION COMPLETE // Checked: ${res.checkedCount}, Confirmed: ${res.confirmedCount}, Expired: ${res.expiredCount}`
      );
      fetchPayments();
    } catch (err) {
      onShowToast(err instanceof Error ? err.message : 'Reconciliation worker pass failed');
    } finally {
      setIsReconciling(false);
    }
  };

  const handleOpenDetail = async (p: PaymentRecord) => {
    setSelectedPayment(p);
    setIsDetailLoading(true);
    try {
      const detail = await adminApi.paymentDetail(p.id);
      setPaymentDetailData(detail);
    } catch (err) {
      onShowToast(err instanceof Error ? err.message : 'Could not load payment audit trail');
    } finally {
      setIsDetailLoading(false);
    }
  };

  const handleReconcileSingle = async (paymentId: string) => {
    try {
      const res = await adminApi.reconcilePayment(paymentId);
      onShowToast(`STATUS VERIFICATION: ${res.message}`);
      fetchPayments();
      if (selectedPayment && selectedPayment.id === paymentId) {
        handleOpenDetail(selectedPayment);
      }
    } catch (err) {
      onShowToast(err instanceof Error ? err.message : 'Single payment status query failed');
    }
  };

  const handleAdjustSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adjustTargetPayment || !adjustReason.trim()) return;

    setIsAdjustSubmitting(true);
    try {
      await adminApi.adjustPayment(adjustTargetPayment.id, adjustStatus, adjustReason.trim());
      onShowToast(`PAYMENT #${adjustTargetPayment.id} MANUALLY ADJUSTED TO ${adjustStatus}`);
      setIsAdjustModalOpen(false);
      setAdjustReason('');
      fetchPayments();
      if (selectedPayment && selectedPayment.id === adjustTargetPayment.id) {
        handleOpenDetail(selectedPayment);
      }
    } catch (err) {
      onShowToast(err instanceof Error ? err.message : 'Manual adjustment rejected');
    } finally {
      setIsAdjustSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`COPIED ${label}: ${text}`);
  };

  // Status Badge Helper
  const renderStatusBadge = (status: PaymentRecord['status']) => {
    switch (status) {
      case 'SUCCESS':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#16a34a]/15 text-[#16a34a] border border-[#16a34a]/30 font-mono text-[10px] font-bold">
            <CheckCircle className="w-3 h-3" />
            VERIFIED
          </span>
        );
      case 'PENDING':
      case 'VERIFYING':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#ca8a04]/15 text-[#ca8a04] border border-[#ca8a04]/30 font-mono text-[10px] font-bold">
            <Clock className="w-3 h-3 animate-spin" />
            {status}
          </span>
        );
      case 'EXPIRED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#78716c]/15 text-[#78716c] border border-[#78716c]/30 font-mono text-[10px] font-bold">
            <Clock className="w-3 h-3" />
            EXPIRED
          </span>
        );
      case 'FAILED':
      case 'CANCELLED':
      case 'REVERSED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-100 text-red-700 border border-red-300 font-mono text-[10px] font-bold">
            <XCircle className="w-3 h-3" />
            {status}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-0.5 bg-[#e4ddcf] text-[#1a1816] font-mono text-[10px]">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="p-6 md:p-8 flex flex-col gap-6 max-w-7xl mx-auto font-mono">
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d5cdc0] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#1a1816]"></span>
            <span className="font-mono text-[10px] font-bold text-[#7b6e54] uppercase tracking-widest">
              FINANCIAL AUDIT ENGINE // COMMERCE ENCLAVE
            </span>
          </div>
          <h1 className="font-headline text-2xl md:text-3xl font-bold text-[#1a1816] tracking-tight mt-1">
            UPI PAYMENT GATEWAY &amp; AUDIT TRAIL
          </h1>
          <p className="text-xs text-[#59544c] mt-1">
            Permanent transaction ledger, cryptographic provider webhook verification, and automated background reconciliation.
          </p>
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleRunReconciliation}
            disabled={isReconciling}
            className="py-2.5 px-4 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] transition-colors text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isReconciling ? 'animate-spin' : ''}`} />
            <span>{isReconciling ? 'RECONCILING...' : 'RUN WORKER PASS'}</span>
          </button>

          <a
            href={adminApi.getPaymentsCsvExportUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 bg-[#1a1816] text-[#ede7dd] hover:bg-[#35322e] transition-colors text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>EXPORT CSV</span>
          </a>
        </div>
      </div>

      {/* KPI Overview Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-1">
          <span className="text-[10px] font-bold text-[#7b6e54] uppercase tracking-wider">
            TOTAL SETTLEMENTS
          </span>
          <span className="font-headline text-2xl font-bold text-[#1a1816]">
            {totalCount}
          </span>
          <span className="text-[9px] text-[#59544c]">LIFETIME ATTEMPTS</span>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-1">
          <span className="text-[10px] font-bold text-[#7b6e54] uppercase tracking-wider">
            VERIFIED VOLUME
          </span>
          <span className="font-headline text-2xl font-bold text-[#16a34a]">
            {formatCurrency(
              payments
                .filter((p) => p.status === 'SUCCESS')
                .reduce((acc, p) => acc + Number(p.amountReceived || p.amount), 0),
              'INR'
            )}
          </span>
          <span className="text-[9px] text-[#59544c]">PAGE SETTLED VALUE</span>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-1">
          <span className="text-[10px] font-bold text-[#7b6e54] uppercase tracking-wider">
            GATEWAY PROTOCOL
          </span>
          <span className="font-headline text-xl font-bold text-[#1a1816]">
            CASHFREE UPI
          </span>
          <span className="text-[9px] text-[#59544c]">NPCI 0% MDR // DYNAMIC QR</span>
        </div>

        <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-1">
          <span className="text-[10px] font-bold text-[#7b6e54] uppercase tracking-wider">
            SIGNATURE METHOD
          </span>
          <span className="font-headline text-lg font-bold text-[#1a1816]">
            HMAC-SHA256
          </span>
          <span className="text-[9px] text-[#59544c]">TIMESTAMP REPLAY SHIELD</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-between bg-[#ede7dd] border border-[#d5cdc0] p-3">
        <div className="flex items-center gap-2 bg-[#f5efe6] border border-[#d5cdc0] px-3 py-2 flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#7b6e54]" />
          <input
            type="text"
            placeholder="Search order ID, payment ID, UTR, customer..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent text-xs text-[#1a1816] placeholder-[#8e8474] focus:outline-none"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-[#7b6e54] hover:text-[#1a1816]">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          {['ALL', 'SUCCESS', 'PENDING', 'EXPIRED', 'FAILED'].map((st) => (
            <button
              key={st}
              onClick={() => {
                setSelectedStatus(st);
                setCurrentPage(1);
              }}
              className={`px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer ${
                selectedStatus === st
                  ? 'bg-[#1a1816] text-[#ede7dd]'
                  : 'bg-[#f5efe6] border border-[#d5cdc0] text-[#59544c] hover:text-[#1a1816]'
              }`}
            >
              {st === 'SUCCESS' ? 'VERIFIED' : st}
            </button>
          ))}
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-[#ede7dd] border border-[#d5cdc0] overflow-x-auto shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#d5cdc0] bg-[#e4ddcf] text-[10px] text-[#7b6e54] uppercase tracking-wider">
              <th className="py-3 px-4 font-bold">STATUS</th>
              <th className="py-3 px-4 font-bold">ORDER REF</th>
              <th className="py-3 px-4 font-bold">CUSTOMER</th>
              <th className="py-3 px-4 font-bold">AMOUNT</th>
              <th className="py-3 px-4 font-bold">METHOD</th>
              <th className="py-3 px-4 font-bold">BANK UTR / RRN</th>
              <th className="py-3 px-4 font-bold">VERIFICATION</th>
              <th className="py-3 px-4 font-bold">DATE</th>
              <th className="py-3 px-4 font-bold text-right">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-xs divide-y divide-[#d5cdc0]">
            {isLoading ? (
              <tr>
                <td colSpan={9} className="py-12 text-center text-[#59544c]">
                  <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-[#7b6e54]" />
                  <span>READING PERMANENT POSTGRESQL TRANSACTION HISTORY...</span>
                </td>
              </tr>
            ) : payments.length === 0 ? (
              <tr>
                <td colSpan={9} className="py-12 text-center text-[#59544c]">
                  <ShieldCheck className="w-8 h-8 mx-auto mb-2 opacity-40 text-[#7b6e54]" />
                  <span className="block font-bold">NO MATCHING TRANSACTIONS FOUND</span>
                  <span className="text-[11px] text-[#8e8474]">Try adjusting the query filters or order reference.</span>
                </td>
              </tr>
            ) : (
              payments.map((p) => (
                <tr key={p.id} className="hover:bg-[#f5efe6]/70 transition-colors">
                  <td className="py-3.5 px-4">{renderStatusBadge(p.status)}</td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-[#1a1816] block">{p.order?.displayId || p.orderId}</span>
                    <span className="text-[10px] text-[#7b6e54]">#{p.id.slice(-8)}</span>
                  </td>
                  <td className="py-3.5 px-4 text-[#59544c]">
                    <span className="block text-[#1a1816] font-medium">{p.order?.user?.name || 'Customer'}</span>
                    <span className="text-[10px] text-[#7b6e54]">{p.order?.user?.email || 'N/A'}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-[#1a1816]">
                      {formatCurrency(Number(p.amount), p.currency)}
                    </span>
                    {p.amountReceived && Number(p.amountReceived) !== Number(p.amount) && (
                      <span className="text-[9px] text-red-700 block">
                        Rcve: {formatCurrency(Number(p.amountReceived), p.currency)}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] bg-[#ded6c9] px-2 py-0.5 text-[#1a1816] font-bold tracking-wide">
                      {p.provider} // {p.paymentMethod}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-[11px]">
                    {p.upiUtr ? (
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#1a1816]">{p.upiUtr}</span>
                        <button
                          onClick={() => copyToClipboard(p.upiUtr!, 'UTR')}
                          className="text-[#7b6e54] hover:text-[#1a1816]"
                          title="Copy UTR"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-[#8e8474]">Pending</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="text-[10px] text-[#59544c]">
                      {p.verificationSource || (p.status === 'SUCCESS' ? 'AUTOMATIC' : 'Awaiting')}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-[10px] text-[#59544c]">
                    {new Date(p.createdAt).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                    <br />
                    {new Date(p.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleOpenDetail(p)}
                        className="py-1 px-2.5 bg-[#f5efe6] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] text-[10px] font-bold uppercase transition-colors cursor-pointer"
                        title="Inspect full audit trail"
                      >
                        INSPECT
                      </button>

                      {p.status === 'PENDING' && (
                        <button
                          onClick={() => handleReconcileSingle(p.id)}
                          className="py-1 px-2.5 bg-[#1a1816] text-[#ede7dd] hover:bg-[#35322e] text-[10px] font-bold uppercase transition-colors cursor-pointer"
                          title="Query status from provider API"
                        >
                          RECONCILE
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setAdjustTargetPayment(p);
                          setAdjustStatus(p.status === 'SUCCESS' ? 'FAILED' : 'SUCCESS');
                          setAdjustReason('');
                          setIsAdjustModalOpen(true);
                        }}
                        className="py-1 px-2 bg-[#e4ddcf] text-[#59544c] hover:text-[#1a1816] text-[10px] transition-colors cursor-pointer"
                        title="Exceptional manual admin adjustment"
                      >
                        <Edit3 className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between p-3 border-t border-[#d5cdc0] bg-[#e4ddcf] text-xs">
            <span className="text-[#59544c]">
              Page {currentPage} of {totalPages} ({totalCount} total records)
            </span>
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="py-1 px-3 bg-[#ede7dd] border border-[#d5cdc0] disabled:opacity-40 cursor-pointer"
              >
                PREVIOUS
              </button>
              <button
                disabled={currentPage >= totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="py-1 px-3 bg-[#ede7dd] border border-[#d5cdc0] disabled:opacity-40 cursor-pointer"
              >
                NEXT
              </button>
            </div>
          </div>
        )}
      </div>

      {/* DETAIL AUDIT TRAIL MODAL */}
      {selectedPayment && (
        <div
          className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-2xl w-full p-6 sm:p-8 flex flex-col gap-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-[#d5cdc0] pb-4">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#7b6e54] uppercase tracking-widest block">
                  IMMUTABLE AUDIT TRAIL // TRANSACTION ENCLAVE
                </span>
                <h3 className="font-headline text-xl font-bold text-[#1a1816]">
                  PAYMENT #{selectedPayment.id}
                </h3>
                <span className="text-xs text-[#59544c]">
                  Order: {selectedPayment.order?.displayId || selectedPayment.orderId}
                </span>
              </div>
              <button
                onClick={() => {
                  setSelectedPayment(null);
                  setPaymentDetailData(null);
                }}
                className="p-1.5 hover:bg-[#ede7dd] text-[#59544c] hover:text-[#1a1816]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isDetailLoading ? (
              <div className="py-12 text-center text-[#59544c]">
                <RefreshCw className="w-5 h-5 animate-spin mx-auto mb-2 text-[#7b6e54]" />
                <span>QUERYING AUDIT TRAIL &amp; EVENT LOGS...</span>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {/* Status and Verification Badge */}
                <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-[#7b6e54] block">STATUS</span>
                    {renderStatusBadge(selectedPayment.status)}
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7b6e54] block">EXPECTED AMOUNT</span>
                    <span className="font-bold text-[#1a1816]">
                      {formatCurrency(Number(selectedPayment.amount), selectedPayment.currency)}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7b6e54] block">VERIFIED RECEIVED</span>
                    <span className="font-bold text-[#1a1816]">
                      {selectedPayment.amountReceived
                        ? formatCurrency(Number(selectedPayment.amountReceived), selectedPayment.currency)
                        : '--'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7b6e54] block">VERIFICATION SOURCE</span>
                    <span className="font-bold text-[#1a1816]">
                      {selectedPayment.verificationSource || 'None'}
                    </span>
                  </div>
                </div>

                {/* Identifiers Grid */}
                <div className="bg-[#ede7dd] border border-[#d5cdc0] p-4 flex flex-col gap-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-[#d5cdc0]">
                    <span className="text-[#59544c]">Bank UTR / Transaction Reference:</span>
                    <span className="font-bold text-[#1a1816]">{selectedPayment.upiUtr || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#d5cdc0]">
                    <span className="text-[#59544c]">Provider Internal ID:</span>
                    <span className="font-bold text-[#1a1816]">{selectedPayment.providerPaymentId || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#d5cdc0]">
                    <span className="text-[#59544c]">Provider Order ID:</span>
                    <span className="font-bold text-[#1a1816]">{selectedPayment.providerOrderId || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#59544c]">Reconciliation Attempts:</span>
                    <span className="font-bold text-[#1a1816]">{selectedPayment.reconcileAttempts}</span>
                  </div>
                </div>

                {/* Audit History Timeline */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-[11px] font-bold text-[#7b6e54] uppercase tracking-wider">
                    IMMUTABLE AUDIT STATE TRANSITIONS
                  </h4>
                  <div className="flex flex-col gap-2 border border-[#d5cdc0] bg-[#ede7dd] p-3 max-h-48 overflow-y-auto">
                    {paymentDetailData?.auditLogs?.length ? (
                      paymentDetailData.auditLogs.map((log: any) => (
                        <div
                          key={log.id}
                          className="flex flex-col gap-1 p-2 bg-[#f5efe6] border border-[#d5cdc0] text-xs"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#1a1816]">
                              {log.action} ({log.fromStatus || 'START'} → {log.toStatus})
                            </span>
                            <span className="text-[10px] text-[#7b6e54]">
                              {new Date(log.createdAt).toLocaleString('en-GB')}
                            </span>
                          </div>
                          <span className="text-[10px] text-[#59544c]">
                            Actor: <strong className="text-[#1a1816]">{log.actorType}</strong> ({log.actorId || 'system'})
                          </span>
                          {log.reason && <p className="text-[11px] text-[#1a1816] mt-0.5">{log.reason}</p>}
                        </div>
                      ))
                    ) : (
                      <span className="text-xs text-[#59544c] py-2 text-center">No audit transitions recorded.</span>
                    )}
                  </div>
                </div>

                {/* Associated Webhook Events */}
                {paymentDetailData?.webhookEvents?.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <h4 className="text-[11px] font-bold text-[#7b6e54] uppercase tracking-wider">
                      SIGNED WEBHOOK EVENTS PROCESSED ({paymentDetailData.webhookEvents.length})
                    </h4>
                    <div className="flex flex-col gap-2 border border-[#d5cdc0] bg-[#ede7dd] p-3 max-h-48 overflow-y-auto">
                      {paymentDetailData.webhookEvents.map((evt: any) => (
                        <div
                          key={evt.id}
                          className="p-2 bg-[#f5efe6] border border-[#d5cdc0] text-xs flex flex-col gap-1"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-[#1a1816]">{evt.eventType}</span>
                            <span className="text-[10px] text-[#7b6e54]">
                              {new Date(evt.createdAt).toLocaleString('en-GB')}
                            </span>
                          </div>
                          <div className="text-[10px] text-[#59544c]">
                            Event ID: {evt.eventId} // Status: <strong>{evt.status}</strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* EXCEPTIONAL MANUAL ADJUSTMENT MODAL */}
      {isAdjustModalOpen && adjustTargetPayment && (
        <div
          className="fixed inset-0 z-50 bg-[#1a1816]/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#f5efe6] border border-[#d5cdc0] max-w-md w-full p-6 sm:p-8 flex flex-col gap-5 shadow-2xl">
            <div className="flex items-start justify-between border-b border-[#d5cdc0] pb-3">
              <div>
                <span className="font-mono text-[10px] font-bold text-red-800 uppercase tracking-widest block">
                  SECURITY OVERRIDE PROTOCOL
                </span>
                <h3 className="font-headline text-lg font-bold text-[#1a1816]">
                  EXCEPTIONAL MANUAL ADJUSTMENT
                </h3>
              </div>
              <button
                onClick={() => setIsAdjustModalOpen(false)}
                className="p-1 hover:bg-[#ede7dd] text-[#59544c]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#ede7dd] border border-[#d5cdc0] p-3 text-xs flex flex-col gap-1">
              <div>Payment ID: <strong className="text-[#1a1816]">#{adjustTargetPayment.id}</strong></div>
              <div>Current Status: <strong className="text-[#1a1816]">{adjustTargetPayment.status}</strong></div>
              <div>Order: <strong className="text-[#1a1816]">{adjustTargetPayment.order?.displayId}</strong></div>
              <div>Amount: <strong className="text-[#1a1816]">₹{Number(adjustTargetPayment.amount)}</strong></div>
            </div>

            <form onSubmit={handleAdjustSubmit} className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#1a1816] uppercase text-[10px]">
                  NEW ADJUSTED STATUS
                </label>
                <select
                  value={adjustStatus}
                  onChange={(e) => setAdjustStatus(e.target.value)}
                  className="bg-[#ede7dd] border border-[#d5cdc0] p-2 text-[#1a1816] font-mono text-xs focus:outline-none"
                >
                  <option value="SUCCESS">SUCCESS (Mark Order Paid &amp; Confirmed)</option>
                  <option value="FAILED">FAILED (Mark Payment Failed)</option>
                  <option value="CANCELLED">CANCELLED</option>
                  <option value="EXPIRED">EXPIRED</option>
                  <option value="REVERSED">REVERSED</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-[#1a1816] uppercase text-[10px]">
                  MANDATORY AUDIT REASON / EXPLANATION *
                </label>
                <textarea
                  required
                  rows={3}
                  value={adjustReason}
                  onChange={(e) => setAdjustReason(e.target.value)}
                  placeholder="State the administrative justification, bank ticket number, or manual proof..."
                  className="bg-[#ede7dd] border border-[#d5cdc0] p-2.5 text-[#1a1816] font-mono text-xs focus:outline-none"
                />
              </div>

              <div className="p-3 bg-red-50 border border-red-200 text-red-900 text-[10px] leading-relaxed">
                ⚠ Any manual adjustment is permanently attributed to your administrator account ID and logged in the immutable PostgreSQL audit trail. Distinguishable from provider-verified transactions.
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAdjustModalOpen(false)}
                  className="py-2 px-4 bg-[#ede7dd] border border-[#d5cdc0] text-[#1a1816] hover:bg-[#ded6c9] font-bold uppercase text-[10px]"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  disabled={isAdjustSubmitting || !adjustReason.trim()}
                  className="py-2 px-5 bg-[#1a1816] text-[#ede7dd] hover:bg-[#35322e] font-bold uppercase text-[10px] disabled:opacity-50 cursor-pointer"
                >
                  {isAdjustSubmitting ? 'SIGNING OVERRIDE...' : 'COMMIT AUDITED OVERRIDE'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
