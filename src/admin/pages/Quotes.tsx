import { useEffect, useState, useMemo } from "react";
import { getQuotes } from "../services/quoteService";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const STATUSES = ["all", "draft", "sent", "viewed", "checkout_started", "approved"];

const badgeColor = (status: string) => {
  switch (status) {
    case "paid":             return "bg-green-600";
    case "approved":         return "bg-blue-600";
    case "viewed":           return "bg-yellow-500";
    case "sent":             return "bg-indigo-600";
    case "checkout_started": return "bg-orange-500";
    default:                 return "bg-gray-500";
  }
};

function formatAmount(amount: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

function formatDate(dateStr: string) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "2-digit",
  });
}

export default function Quotes() {
  const navigate = useNavigate();

  const [quotes, setQuotes]             = useState<any[]>([]);
  const [loading, setLoading]           = useState(false);
  const [search, setSearch]             = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const loadQuotes = async () => {
    setLoading(true);
    try {
      const res = await getQuotes(1, search);
      setQuotes(res.data || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadQuotes(); }, [search]);

  const filtered = useMemo(() => {
    if (statusFilter === "all") return quotes;
    return quotes.filter((q) => q.status === statusFilter);
  }, [quotes, statusFilter]);

  const copyLink = (quote: any) => {
    navigator.clipboard.writeText(`${window.location.origin}/quote/${quote.quoteNumber}`);
    toast.success("Quote link copied to clipboard.");
  };

  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quote Management</h1>
          <p className="text-sm text-gray-400 mt-0.5">{quotes.length} total quotes</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={loadQuotes}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
          <Link
            to="/admin/quotes/create"
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            + Create Quote
          </Link>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="Search by quote number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Status filter — scrollable on mobile */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 overflow-x-auto">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-all whitespace-nowrap flex-shrink-0 ${
                statusFilter === s ? "bg-gray-900 text-white shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {s.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Table — horizontally scrollable on small screens */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20 text-gray-400">
              <svg className="w-5 h-5 animate-spin mr-2 text-gray-900" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span className="text-sm">Loading quotes...</span>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <svg className="w-10 h-10 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-sm font-medium text-gray-600">No quotes found</p>
              <p className="text-xs mt-1">Try adjusting your search or filter</p>
            </div>
          ) : (
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide whitespace-nowrap">Quote #</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Customer</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Package</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide whitespace-nowrap">Amount</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Status</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide whitespace-nowrap">Date</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide sticky right-0 bg-gray-50 shadow-[-8px_0_8px_-4px_rgba(0,0,0,0.06)]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((quote) => (
                  <tr key={quote._id} className="hover:bg-gray-50 transition-colors group">

                    {/* Quote # */}
                    <td className="px-4 py-3">
                      <span
                        title={quote.quoteNumber}
                        className="font-mono text-xs font-bold text-gray-900 bg-gray-100 border border-gray-300 px-2 py-1 rounded block max-w-[130px] truncate"
                      >
                        {quote.quoteNumber}
                      </span>
                    </td>

                    {/* Customer */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      {quote.customer ? (
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                            {quote.customer.firstName?.[0]?.toUpperCase() ?? "?"}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">
                              {quote.customer.firstName} {quote.customer.lastName}
                            </p>
                            <p className="text-xs text-gray-500">{quote.customer.email}</p>
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400 text-sm">—</span>
                      )}
                    </td>

                    {/* Package */}
                    <td className="px-4 py-3" style={{ maxWidth: 140 }}>
                      <span className="block truncate font-medium text-gray-900 text-sm">{quote.packageName}</span>
                    </td>

                    {/* Amount */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="font-bold text-gray-900 text-sm">{formatAmount(quote.amount)}</span>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`text-white text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor(quote.status)}`}>
                        {quote.status.replace("_", " ")}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="text-sm font-semibold text-gray-900">{formatDate(quote.createdAt)}</span>
                    </td>

                    {/* Actions */}
                    <td className="px-4 py-3 whitespace-nowrap sticky right-0 bg-white group-hover:bg-gray-50 shadow-[-8px_0_8px_-4px_rgba(0,0,0,0.06)] transition-colors">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => navigate(`/admin/quotes/${quote._id}`)}
                          className="bg-gray-700 text-white text-xs px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap"
                        >
                          Details
                        </button>
                        <button
                          onClick={() => copyLink(quote)}
                          title="Copy quote link"
                          className="bg-black text-white p-1.5 rounded-md hover:bg-gray-800 transition-colors flex-shrink-0"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {!loading && filtered.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
            <span className="text-xs text-gray-400">
              Showing <span className="font-semibold text-gray-700">{filtered.length}</span> of <span className="font-semibold text-gray-700">{quotes.length}</span> quotes
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
