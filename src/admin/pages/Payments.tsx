import { useEffect, useState, useMemo } from "react";
import { getPayments } from "../services/paymentService";

const STATUS_COLORS: Record<string, string> = {
  approved: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  pending:  "bg-amber-50 text-amber-700 border border-amber-200",
  failed:   "bg-red-50 text-red-700 border border-red-200",
  refunded: "bg-slate-100 text-slate-600 border border-slate-200",
};

const STATUSES = ["all", "pending", "approved", "failed", "refunded"];

function formatDate(dateStr: string) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "2-digit",
  });
}

function formatAmount(amount: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

export default function Payments() {
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const load = () => {
    setLoading(true);
    getPayments()
      .then((res) => setPayments(res.data || []))
      .finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return payments.filter((p) => {
      const matchesStatus = statusFilter === "all" || p.status === statusFilter;
      const customer = p.quote?.customer;
      const name = `${customer?.firstName ?? ""} ${customer?.lastName ?? ""}`.toLowerCase();
      const quoteNum = (p.quote?.quoteNumber ?? "").toLowerCase();
      const matchesSearch = !q || name.includes(q) || quoteNum.includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [payments, search, statusFilter]);

  const totals = useMemo(() => ({
    approved: payments.filter((p) => p.status === "approved").length,
    pending:  payments.filter((p) => p.status === "pending").length,
    failed:   payments.filter((p) => p.status === "failed").length,
  }), [payments]);

  const totalRevenue = useMemo(
    () => payments
      .filter((p) => p.status === "approved")
      .reduce((sum, p) => sum + (p.amount || 0), 0),
    [payments]
  );

  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
          <p className="text-sm text-gray-400 mt-0.5">{payments.length} total transactions</p>
        </div>
        <button
          onClick={load}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-3">
        <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 shadow-sm">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Total Revenue</p>
          <p className="text-xl font-bold text-gray-900 mt-1">{formatAmount(totalRevenue)}</p>
          <p className="text-xs text-gray-400 mt-0.5">approved payments</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 shadow-sm">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Approved</p>
          <p className="text-xl font-bold text-gray-900 mt-1">{totals.approved}</p>
          <p className="text-xs text-gray-400 mt-0.5">successfully authorized</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 shadow-sm">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Pending</p>
          <p className="text-xl font-bold text-gray-900 mt-1">{totals.pending}</p>
          <p className="text-xs text-gray-400 mt-0.5">not yet authorized</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 px-4 py-3 shadow-sm">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Failed</p>
          <p className="text-xl font-bold text-gray-900 mt-1">{totals.failed}</p>
          <p className="text-xs text-gray-400 mt-0.5">unsuccessful attempts</p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            placeholder="Search by customer name or quote number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-all whitespace-nowrap ${
                statusFilter === s ? "bg-gray-900 text-white shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center py-20 text-gray-400">
            <svg className="w-5 h-5 animate-spin mr-2 text-gray-900" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            <span className="text-sm">Loading payments...</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <svg className="w-10 h-10 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <p className="text-sm font-medium text-gray-600">No payments found</p>
            <p className="text-xs mt-1">Try adjusting your search or filter</p>
          </div>
        ) : (
          <table className="w-full min-w-[860px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Customer</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide whitespace-nowrap">Quote #</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Package</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide whitespace-nowrap">Amount</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Provider</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide whitespace-nowrap">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((payment) => {
                const customer = payment.quote?.customer;
                const fullName = customer ? `${customer.firstName} ${customer.lastName}` : "—";
                return (
                  <tr key={payment._id} className="hover:bg-gray-50 transition-colors">

                    {/* Customer */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                          {customer ? customer.firstName?.[0]?.toUpperCase() : "?"}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{fullName}</p>
                          <p className="text-xs text-gray-500">{customer?.email ?? "—"}</p>
                        </div>
                      </div>
                    </td>

                    {/* Quote # */}
                    <td className="px-4 py-3">
                      <span
                        title={payment.quote?.quoteNumber}
                        className="font-mono text-xs font-bold text-gray-900 bg-gray-100 border border-gray-300 px-2 py-1 rounded block max-w-[130px] truncate"
                      >
                        {payment.quote?.quoteNumber ?? "—"}
                      </span>
                    </td>

                    {/* Package */}
                    <td className="px-4 py-3" style={{ maxWidth: 120 }}>
                      <span className="block truncate font-medium text-gray-900 text-sm">{payment.quote?.packageName ?? "—"}</span>
                    </td>

                    {/* Amount */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="font-bold text-gray-900">{formatAmount(payment.amount)}</span>
                    </td>

                    {/* Provider */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className="capitalize text-xs font-bold text-gray-900 bg-gray-200 border border-gray-300 px-2 py-1 rounded-full">
                        {payment.provider}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold capitalize ${STATUS_COLORS[payment.status] ?? "bg-gray-100 text-gray-900"}`}>
                        {payment.status}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {formatDate(payment.approvedAt || payment.createdAt)}
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        </div>{/* end overflow-x-auto */}

        {!loading && filtered.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
            <span className="text-xs text-gray-400">
              Showing <span className="font-semibold text-gray-700">{filtered.length}</span> of <span className="font-semibold text-gray-700">{payments.length}</span> payments
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
