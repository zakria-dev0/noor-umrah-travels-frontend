import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getQuoteById, updateQuote, sendQuoteEmail, sendWhatsAppQuote } from "../services/quoteService";

const badgeColor = (status: string) => {
  switch (status) {
    case "approved":         return "bg-blue-100 text-blue-700";
    case "paid":             return "bg-green-100 text-green-700";
    case "viewed":           return "bg-yellow-100 text-yellow-700";
    case "sent":             return "bg-indigo-100 text-indigo-700";
    case "checkout_started": return "bg-orange-100 text-orange-700";
    default:                 return "bg-gray-100 text-gray-600";
  }
};

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500 flex-shrink-0 w-32">{label}</span>
      <span className="text-sm font-semibold text-gray-900 text-right">{value ?? "—"}</span>
    </div>
  );
}

export default function QuoteDetails() {
  const { id }   = useParams();
  const navigate = useNavigate();

  const [quote,   setQuote]   = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving,  setSaving]  = useState(false);
  const [editing, setEditing] = useState(false);
  const [form,    setForm]    = useState<any>({});

  useEffect(() => { loadQuote(); }, []);

  const loadQuote = async () => {
    const res = await getQuoteById(id!);
    if (res.success) {
      setQuote(res.data);
      initForm(res.data);
    }
    setLoading(false);
  };

  const initForm = (q: any) => {
    setForm({
      packageName: q.packageName ?? "",
      travelers:   q.travelers   ?? 1,
      amount:      q.amount      ?? "",
      currency:    q.currency    ?? "USD",
      expiresAt:   q.expiresAt   ? q.expiresAt.slice(0, 10) : "",
      notes:       q.notes       ?? "",
    });
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Number(form.amount) < 100) {
      toast.error("Amount must be at least 100 (Affirm rejects smaller payments)");
      return;
    }

    setSaving(true);
    try {
      const res = await updateQuote(id!, {
        ...form,
        travelers: Number(form.travelers),
        amount:    Number(form.amount),
      });
      if (res.success) {
        toast.success("Quote updated successfully.");
        setQuote(res.data);
        initForm(res.data);
        setEditing(false);
      } else {
        toast.error(res.message || "Failed to update quote.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };

  const handleEmail = () => {
    toast.promise(sendQuoteEmail(id!), {
      loading: "Sending email...",
      success: "Quote email sent successfully.",
      error:   "Failed to send email.",
    });
  };

  const handleWhatsApp = async () => {
    const res = await sendWhatsAppQuote(id!);
    if (res.whatsappUrl) window.open(res.whatsappUrl, "_blank");
  };

  const set = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f: any) => ({ ...f, [field]: e.target.value }));

  // ── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <svg className="w-5 h-5 animate-spin text-gray-900" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      </div>
    );
  }

  if (!quote) return <div className="p-8 text-gray-500">Quote not found.</div>;

  return (
    <div className="max-w-4xl space-y-4">

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quote Details</h1>
          <p className="text-sm text-gray-400 mt-0.5 font-mono">{quote.quoteNumber}</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleEmail}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </button>
          <button
            onClick={() => { setEditing((v) => !v); if (editing) initForm(quote); }}
            className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              editing
                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                : "bg-gray-900 text-white hover:bg-gray-700"
            }`}
          >
            {editing ? "Cancel" : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Quote
              </>
            )}
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-3 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Quote Info — view or edit */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900">Quote Information</h2>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${badgeColor(quote.status)}`}>
              {quote.status?.replace("_", " ")}
            </span>
          </div>

          {editing ? (
            <form id="quote-edit-form" onSubmit={handleSave} noValidate className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Package Name <span className="text-red-500">*</span></label>
                <input required value={form.packageName} onChange={set("packageName")}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Travelers</label>
                  <input type="number" min="1" required value={form.travelers} onChange={set("travelers")}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Amount</label>
                  <input type="number" min="100" required value={form.amount} onChange={set("amount")}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Currency</label>
                  <select value={form.currency} onChange={set("currency")}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900">
                    <option value="USD">USD</option>
                    <option value="SAR">SAR</option>
                    <option value="PKR">PKR</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Expires</label>
                  <input type="date" value={form.expiresAt} onChange={set("expiresAt")}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Notes</label>
                <textarea rows={3} value={form.notes} onChange={set("notes")}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none" />
              </div>
              <div className="flex justify-end gap-2 pt-1">
                <button type="button" onClick={() => { setEditing(false); initForm(quote); }}
                  className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={saving}
                  className="px-5 py-2 text-sm font-medium bg-gray-900 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors">
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          ) : (
            <div className="px-5 py-4">
              <Field label="Package"   value={quote.packageName} />
              <Field label="Travelers" value={`${quote.travelers} ${quote.travelers === 1 ? "person" : "people"}`} />
              <Field label="Amount"    value={`${quote.currency ?? "USD"} ${Number(quote.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}`} />
              <Field label="Expires"   value={quote.expiresAt ? new Date(quote.expiresAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "—"} />
              <Field label="Created"   value={new Date(quote.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} />
            </div>
          )}
        </div>

        {/* Customer Info */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-900">Customer</h2>
          </div>
          <div className="px-5 py-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                {quote.customer?.firstName?.[0]?.toUpperCase() ?? "?"}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{quote.customer?.firstName} {quote.customer?.lastName}</p>
                <p className="text-xs text-gray-400">Customer</p>
              </div>
            </div>
            <Field label="Email" value={quote.customer?.email} />
            <Field label="Phone" value={quote.customer?.phone} />
            <Field label="City"  value={[quote.customer?.city, quote.customer?.state, quote.customer?.country].filter(Boolean).join(", ") || "—"} />
          </div>
        </div>

      </div>

      {/* Notes (view mode only — editing shows it inline above) */}
      {!editing && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-900">Notes</h2>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm text-gray-700 whitespace-pre-wrap">{quote.notes || <span className="text-gray-400">No notes added.</span>}</p>
          </div>
        </div>
      )}

      {/* Timeline */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-900">Timeline</h2>
        </div>
        <div className="px-5 py-4 space-y-3">
          {[
            { label: "Created", date: quote.createdAt },
            { label: "Sent",    date: quote.sentAt },
            { label: "Viewed",  date: quote.viewedAt },
          ].filter(e => e.date).map(({ label, date }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-900 flex-shrink-0" />
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-semibold text-gray-900">{label}</span>
                <span className="text-xs text-gray-400">{new Date(date).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
