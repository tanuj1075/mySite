import React, { useState } from 'react';
import {
  Star,
  CheckCircle2,
  AlertCircle,
  Pin,
  Eye,
  EyeOff,
  Filter,
  Search,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import { ShoeProduct } from '../../types';

export interface AdminReviewItem {
  id: string;
  reviewerName: string;
  membershipTier: string;
  specimenId: string;
  specimenName: string;
  shade: string;
  size: string;
  rating: number; // 1 to 5
  date: string;
  fitAssessment: 'TRUE TO SIZE' | 'SLIGHTLY NARROW' | 'SLIGHTLY ROOMY';
  headline: string;
  content: string;
  status: 'PUBLISHED' | 'PENDING' | 'PINNED' | 'HIDDEN';
  verifiedPurchase: boolean;
  upvotes: number;
}

interface AdminReviewsViewProps {
  products?: ShoeProduct[];
  onShowToast: (msg: string) => void;
  onSelectSection?: (section: any) => void;
}

export const AdminReviewsView: React.FC<AdminReviewsViewProps> = ({
  products = [],
  onShowToast,
  onSelectSection,
}) => {
  const [reviews, setReviews] = useState<AdminReviewItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [ratingFilter, setRatingFilter] = useState<number | 'ALL'>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'PINNED' | 'PUBLISHED' | 'PENDING' | 'HIDDEN'>('ALL');

  // Compute metrics
  const totalReviews = reviews.length;
  const avgRating = totalReviews
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(2)
    : '—';
  const fiveStarsCount = reviews.filter((r) => r.rating === 5).length;
  const fiveStarsPct = totalReviews ? Math.round((fiveStarsCount / totalReviews) * 100) : 0;
  const pendingCount = reviews.filter((r) => r.status === 'PENDING').length;
  const pinnedCount = reviews.filter((r) => r.status === 'PINNED').length;

  const handleTogglePin = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id !== reviewId) return r;
        const newStatus = r.status === 'PINNED' ? 'PUBLISHED' : 'PINNED';
        return { ...r, status: newStatus };
      })
    );
    const rev = reviews.find((r) => r.id === reviewId);
    onShowToast(`REVIEW ${rev?.id} ${rev?.status === 'PINNED' ? 'UNPINNED' : 'PINNED TO STOREFRONT SPOTLIGHT'}`);
  };

  const handleTogglePublish = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id !== reviewId) return r;
        const newStatus = r.status === 'HIDDEN' ? 'PUBLISHED' : 'HIDDEN';
        return { ...r, status: newStatus };
      })
    );
    const rev = reviews.find((r) => r.id === reviewId);
    onShowToast(`REVIEW ${rev?.id} ${rev?.status === 'HIDDEN' ? 'RESTORED TO STOREFRONT' : 'HIDDEN FROM PUBLIC VIEW'}`);
  };

  const handleApprovePending = (reviewId: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, status: 'PUBLISHED' } : r))
    );
    onShowToast(`REVIEW ${reviewId} QC APPROVED & PUBLISHED TO STOREFRONT`);
  };

  const filteredReviews = reviews.filter((r) => {
    const matchesSearch =
      !searchQuery ||
      r.reviewerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.specimenName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRating = ratingFilter === 'ALL' || r.rating === ratingFilter;
    const matchesStatus = statusFilter === 'ALL' || r.status === statusFilter;

    return matchesSearch && matchesRating && matchesStatus;
  });

  return (
    <div className="p-4 sm:p-8 font-sans space-y-8 bg-[#09090b] min-h-full">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between font-mono text-[10px] text-[#c9a96e] tracking-[0.2em] uppercase mb-1">
          <span>CUSTOMER EXPERIENCE // CLIENT APPRAISAL TELEMETRY</span>
          {onSelectSection && (
            <button
              onClick={() => onSelectSection('OVERVIEW')}
              className="text-[#f4f4f6] font-bold hover:underline cursor-pointer"
            >
              ← BACK TO OVERVIEW
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-headline text-3xl sm:text-4xl text-[#f4f4f6] tracking-tight">
              Verified Client Appraisals &amp; Reviews
            </h1>
            <p className="font-sans text-[13px] text-[#8e8e98] mt-1 max-w-2xl">
              Inspect genuine patron feedback, ergonomic fit calibration assessments, and moderate public archive testimonials.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            <button
              onClick={() => {
                setReviews((prev) => prev.map((r) => (r.status === 'PENDING' ? { ...r, status: 'PUBLISHED' } : r)));
                onShowToast('ALL PENDING CLIENT REVIEWS BATCH-APPROVED');
              }}
              className="px-4 py-2.5 bg-[#141312] text-[#18181c] font-bold uppercase tracking-wider hover:bg-[#35322e] flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a]" />
              <span>APPROVE ALL PENDING ({pendingCount})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top Telemetry Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
        <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            CLIENT SATISFACTION INDEX
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1 flex items-center gap-2">
            <span>{avgRating}</span>
            <span className="text-xs text-[#c9a96e] font-normal">/ 5.0</span>
            <div className="flex text-[#141312] ml-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
          </div>
          <div className="text-[9px] text-[#16a34a] font-bold mt-0.5">
            {fiveStarsPct}% 5-Star Archival Appraisals
          </div>
        </div>

        <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            TOTAL VERIFIED APPRAISALS
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1">
            {totalReviews} Dossiers
          </div>
          <div className="text-[9px] text-[#8e8e98] mt-0.5">
            Order linkage is not measured.
          </div>
        </div>

        <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            FEATURED STOREFRONT PINNED
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1 flex items-center gap-2">
            <span>{pinnedCount}</span>
            <Pin className="w-4 h-4 text-[#c9a96e]" />
          </div>
          <div className="text-[9px] text-[#c9a96e] mt-0.5">
            Hero &amp; Specimen Detail Showcase
          </div>
        </div>

        <div className="bg-[#121215] border border-[#242429] p-4 shadow-2xs">
          <div className="text-[9px] text-[#c9a96e] uppercase tracking-wider font-bold">
            PENDING MODERATION QC
          </div>
          <div className="text-2xl font-bold text-[#f4f4f6] mt-1">
            <span className={pendingCount > 0 ? 'text-[#92400e]' : 'text-[#16a34a]'}>
              {pendingCount} Pending
            </span>
          </div>
          <div className="text-[9px] text-[#c9a96e] mt-0.5">
            Moderation service is not connected.
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="border border-[#242429] bg-[#121215] p-4 rounded-xs shadow-xs font-mono text-[11px] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-[#c9a96e]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="FILTER BY CLIENT, SPECIMEN, OR KEYWORD..."
            className="w-full bg-[#09090b] border border-[#242429] px-3 py-1.5 outline-none text-[#f4f4f6] uppercase text-[10px]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status filter */}
          <div className="flex items-center gap-1 bg-[#09090b] border border-[#242429] p-0.5">
            {(['ALL', 'PINNED', 'PUBLISHED', 'PENDING', 'HIDDEN'] as const).map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-2.5 py-1 text-[9px] font-bold uppercase transition-colors cursor-pointer ${
                  statusFilter === st
                    ? 'bg-[#141312] text-[#18181c]'
                    : 'text-[#8e8e98] hover:bg-[#242429]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          {/* Rating filter */}
          <div className="flex items-center gap-1 bg-[#09090b] border border-[#242429] p-0.5">
            {(['ALL', 5, 4, 3] as const).map((r) => (
              <button
                key={String(r)}
                onClick={() => setRatingFilter(r)}
                className={`px-2 py-1 text-[9px] font-bold uppercase transition-colors cursor-pointer ${
                  ratingFilter === r
                    ? 'bg-[#141312] text-[#18181c]'
                    : 'text-[#8e8e98] hover:bg-[#242429]'
                }`}
              >
                {r === 'ALL' ? 'ALL ★' : `${r} ★`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="space-y-4 font-mono">
        {filteredReviews.length === 0 ? (
          <div className="p-12 text-center border border-[#242429] bg-[#121215] text-[#c9a96e] space-y-2">
            <MessageSquare className="w-8 h-8 mx-auto opacity-50" />
            <div className="text-sm font-bold text-[#f4f4f6]">NO APPRAISALS FOUND</div>
            <div className="text-xs">Adjust search parameters or active filters.</div>
          </div>
        ) : (
          filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className={`border p-5 transition-all shadow-xs space-y-3.5 ${
                rev.status === 'PINNED'
                  ? 'bg-[#09090b] border-[#141312] ring-1 ring-[#141312]/30'
                  : rev.status === 'HIDDEN'
                  ? 'bg-[#121215]/50 border-[#242429] opacity-60'
                  : rev.status === 'PENDING'
                  ? 'bg-[#fffbeb] border-[#fde68a]'
                  : 'bg-[#121215] border-[#242429]'
              }`}
            >
              {/* Header row */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#242429]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-bold text-[#f4f4f6] text-[12px]">{rev.reviewerName}</span>
                  <span className="px-2 py-0.5 bg-[#09090b] border border-[#242429] text-[9px] text-[#c9a96e] uppercase font-bold">
                    {rev.membershipTier}
                  </span>
                  {rev.verifiedPurchase && (
                    <span className="px-2 py-0.5 bg-[#dcfce7] text-[#166534] text-[9px] font-bold uppercase flex items-center gap-1">
                      <ShieldCheck className="w-2.5 h-2.5" />
                      VERIFIED ORDER
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex text-[#141312]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < rev.rating ? 'fill-current' : 'opacity-30'}`}
                      />
                    ))}
                  </div>

                  <span
                    className={`px-2 py-0.5 text-[9px] font-bold uppercase rounded-2xs ${
                      rev.status === 'PINNED'
                        ? 'bg-[#141312] text-[#18181c]'
                        : rev.status === 'PUBLISHED'
                        ? 'bg-[#dcfce7] text-[#166534]'
                        : rev.status === 'PENDING'
                        ? 'bg-[#fef3c7] text-[#92400e]'
                        : 'bg-[#fee2e2] text-[#991b1b]'
                    }`}
                  >
                    {rev.status}
                  </span>
                </div>
              </div>

              {/* Specimen and Fit Specs */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#8e8e98]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-[#f4f4f6] uppercase">{rev.specimenName}</span>
                  <span>•</span>
                  <span>{rev.shade}</span>
                  <span>•</span>
                  <span>Size {rev.size}</span>
                </div>

                <div className="flex items-center gap-2 text-[9px] text-[#c9a96e]">
                  <span>FIT CALIBRATION:</span>
                  <span className="font-bold text-[#f4f4f6] px-1.5 py-0.5 bg-[#09090b] border border-[#242429]">
                    {rev.fitAssessment}
                  </span>
                  <span>•</span>
                  <span>{rev.date}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h4 className="font-bold text-[#f4f4f6] text-[13px] mb-1">{rev.headline}</h4>
                <p className="font-sans text-[12px] text-[#423e38] leading-relaxed">
                  "{rev.content}"
                </p>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#242429] text-[10px]">
                <div className="text-[#c9a96e] text-[9px]">
                  <span>ARCHIVAL UPVOTES: </span>
                  <span className="font-bold text-[#f4f4f6]">{rev.upvotes} PATRONS FOUND HELPFUL</span>
                </div>

                <div className="flex items-center gap-2">
                  {rev.status === 'PENDING' && (
                    <button
                      onClick={() => handleApprovePending(rev.id)}
                      className="px-2.5 py-1 bg-[#166534] text-white hover:bg-[#14532d] font-bold uppercase text-[9px] cursor-pointer flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      APPROVE QC
                    </button>
                  )}

                  <button
                    onClick={() => handleTogglePin(rev.id)}
                    className={`px-2.5 py-1 border font-bold uppercase text-[9px] cursor-pointer flex items-center gap-1 transition-colors ${
                      rev.status === 'PINNED'
                        ? 'bg-[#141312] text-[#18181c] border-[#141312]'
                        : 'bg-[#09090b] border-[#242429] text-[#f4f4f6] hover:bg-[#242429]'
                    }`}
                  >
                    <Pin className="w-2.5 h-2.5" />
                    <span>{rev.status === 'PINNED' ? 'PINNED' : 'PIN TO TOP'}</span>
                  </button>

                  <button
                    onClick={() => handleTogglePublish(rev.id)}
                    className="px-2.5 py-1 bg-[#09090b] border border-[#242429] text-[#f4f4f6] hover:bg-[#242429] font-bold uppercase text-[9px] cursor-pointer flex items-center gap-1"
                  >
                    {rev.status === 'HIDDEN' ? (
                      <>
                        <Eye className="w-2.5 h-2.5" />
                        <span>UNHIDE</span>
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-2.5 h-2.5" />
                        <span>HIDE</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
