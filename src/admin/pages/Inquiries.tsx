import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { apiFetch } from "../services/api";
import InquiryModal from "../components/InquiryModal";

interface Inquiry {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  departureDate: string;
  packageTier: string;
  departureCity: string;
  travelMonth: string;
  roomType: string;
  status: string;
  createdAt: string;
}

const STATUSES = ["all", "new", "contacted", "quoted", "closed"];

const STATUS_COLORS: Record<string, string> = {
  new:       "bg-blue-50 text-blue-700 border border-blue-200",
  contacted: "bg-amber-50 text-amber-700 border border-amber-200",
  quoted:    "bg-purple-50 text-purple-700 border border-purple-200",
  closed:    "bg-green-50 text-green-700 border border-green-200",
};

function formatDate(dateStr: string) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "2-digit",
  });
}

const Inquiries = () => {
  const [inquiries, setInquiries]         = useState<Inquiry[]>([]);
  const [loading, setLoading]             = useState(true);
  const [page, setPage]                   = useState(1);
  const [pages, setPages]                 = useState(1);
  const [total, setTotal]                 = useState(0);
  const [search, setSearch]               = useState("");
  const [searchInput, setSearchInput]     = useState("");
  const [statusFilter, setStatusFilter]   = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  useEffect(() => { loadInquiries(); }, [page, search, statusFilter]);

  const loadInquiries = async () => {
    try {
      setLoading(true);
      const apiStatus = statusFilter === "all" ? "" : statusFilter;
      const response = await apiFetch(
        `/api/admin/inquiries?page=${page}&limit=10&search=${search}&status=${apiStatus}`
      );
      setInquiries(response.data);
      setPages(response.pages);
      setTotal(response.total ?? response.data.length);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await apiFetch(`/api/admin/inquiries/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });
      toast.success("Status updated.");
      loadInquiries();
    } catch {
      toast.error("Failed to update status.");
    }
  };

  const handleDelete = (inquiry: Inquiry) => {
    toast((t) => (
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium">Delete inquiry from <strong>{inquiry.fullName}</strong>?</p>
        <div className="flex gap-2">
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await apiFetch(`/api/admin/inquiries/${inquiry._id}`, { method: "DELETE" });
                toast.success("Inquiry deleted.");
                loadInquiries();
              } catch {
                toast.error("Failed to delete inquiry.");
              }
            }}
            className="bg-red-500 text-white text-xs px-3 py-1.5 rounded-md"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="bg-gray-200 text-gray-800 text-xs px-3 py-1.5 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    ), { duration: 8000 });
  };

  const handleSearch = () => {
    setPage(1);
    setSearch(searchInput);
  };

  return (
    <>
      <div className="space-y-4">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Inquiries</h1>
            <p className="text-sm text-gray-400 mt-0.5">{total} total inquiries</p>
          </div>
          <button
            onClick={loadInquiries}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex gap-2 flex-1">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                placeholder="Search by name, email or phone..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-4 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Search
            </button>
          </div>

          {/* Status filter tabs */}
          <div className="flex gap-1 bg-gray-100 rounded-lg p-1 overflow-x-auto">
            {STATUSES.map((s) => (
              <button
                key={s}
                onClick={() => { setStatusFilter(s); setPage(1); }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md capitalize transition-all whitespace-nowrap flex-shrink-0 ${
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
                <span className="text-sm">Loading inquiries...</span>
              </div>
            ) : inquiries.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                <svg className="w-10 h-10 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-medium text-gray-600">No inquiries found</p>
                <p className="text-xs mt-1">Try adjusting your search or filter</p>
              </div>
            ) : (
              <table className="w-full min-w-[780px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Customer</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Phone</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Package</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Status</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide whitespace-nowrap">Date</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-900 uppercase tracking-wide">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {inquiries.map((inquiry) => (
                    <tr key={inquiry._id} className="hover:bg-gray-50 transition-colors">

                      {/* Customer */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                            {inquiry.fullName?.[0]?.toUpperCase() ?? "?"}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{inquiry.fullName}</p>
                            <p className="text-xs text-gray-500">{inquiry.email}</p>
                          </div>
                        </div>
                      </td>

                      {/* Phone */}
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                        {inquiry.phone || "—"}
                      </td>

                      {/* Package */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className="text-sm text-gray-700 capitalize">{inquiry.packageTier || "—"}</span>
                      </td>

                      {/* Status badge */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${STATUS_COLORS[inquiry.status] ?? "bg-gray-100 text-gray-600 border border-gray-200"}`}>
                          {inquiry.status}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {formatDate(inquiry.createdAt)}
                      </td>

                      {/* Actions */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setSelectedInquiry(inquiry)}
                            className="text-xs font-semibold bg-gray-700 hover:bg-gray-800 text-white px-3 py-1.5 rounded-md transition-colors"
                          >
                            View
                          </button>
                          <select
                            value={inquiry.status}
                            onChange={(e) => updateStatus(inquiry._id, e.target.value)}
                            className="text-xs font-medium border border-gray-200 rounded-md px-2 py-1.5 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 cursor-pointer"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="quoted">Quoted</option>
                            <option value="closed">Closed</option>
                          </select>
                          <button
                            onClick={() => handleDelete(inquiry)}
                            className="text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-2.5 py-1.5 rounded-md transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {!loading && inquiries.length > 0 && (
            <div className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Page <span className="font-semibold text-gray-700">{page}</span> of <span className="font-semibold text-gray-700">{pages}</span>
              </span>
              <div className="flex gap-2">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-md bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous
                </button>
                <button
                  disabled={page === pages}
                  onClick={() => setPage(page + 1)}
                  className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-md bg-white hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

      <InquiryModal
        inquiry={selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
      />
    </>
  );
};

export default Inquiries;
