import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAffirmScript from "../hooks/useAffirmScript";

const QuoteMeta = () => (
  <Helmet>
    <title>Your Quote | Haram Umrah Travels</title>
    <meta name="robots" content="noindex, follow" />
  </Helmet>
);

const API = process.env.REACT_APP_API_URL;

declare global {
  interface Window { affirm: any; }
}

const PAID_STATUSES = ["paid", "approved"];

export default function PublicQuote() {
  const { quoteNumber } = useParams();
  const [quote, setQuote]           = useState<any>(null);
  const [loading, setLoading]       = useState(true);
  const [processing, setProcessing] = useState(false);

  const { loaded: affirmLoaded } = useAffirmScript("");

  useEffect(() => { loadQuote(); }, [quoteNumber]);

  const loadQuote = async () => {
    try {
      const res  = await fetch(`${API}/api/public/quotes/${quoteNumber}`);
      const data = await res.json();
      setQuote(data.data);
    } finally {
      setLoading(false);
    }
  };

  const startAffirmCheckout = async () => {
    if (!affirmLoaded || !window.affirm) {
      alert("Payment system is still loading. Please wait a moment and try again.");
      return;
    }

    try {
      setProcessing(true);

      const checkoutRes = await fetch(
        `${API}/api/payment/checkout/${quote.quoteNumber}`,
        { method: "POST" }
      );
      const checkout = await checkoutRes.json();

      if (!checkout.success) {
        alert(checkout.message);
        setProcessing(false);
        return;
      }

      const checkoutObject = {
        merchant: {
          public_api_key: process.env.REACT_APP_AFFIRM_PUBLIC_KEY,
          user_confirmation_url: `${window.location.origin}/payment/success?paymentId=${checkout.paymentId}`,
          user_cancel_url: `${window.location.origin}/payment/cancel`,
          user_confirmation_url_cancelled: `${window.location.origin}/payment/cancel`,
          user_confirmation_url_action: "GET",
          name: "Haram Umrah Travels",
        },
        order_id: quote.quoteNumber,
        currency: "USD",
        total: Math.round(Number(quote.amount) * 100),
        metadata: {
          platform_type: "Custom",
          platform_version: "1.0.0",
          platform_affirm: "NoorUmrah-1.0.0",
        },
        shipping: {
          name: { first: quote.customer.firstName, last: quote.customer.lastName },
          email: quote.customer.email,
          phone_number: quote.customer.phone,
          address: {
            line1: quote.customer.address1,
            line2: quote.customer.address2 || "",
            city: quote.customer.city,
            state: quote.customer.state,
            zipcode: quote.customer.zipCode,
            country: quote.customer.country,
          },
        },
        billing: {
          name: { first: quote.customer.firstName, last: quote.customer.lastName },
          email: quote.customer.email,
          phone_number: quote.customer.phone,
          address: {
            line1: quote.customer.address1,
            line2: quote.customer.address2 || "",
            city: quote.customer.city,
            state: quote.customer.state,
            zipcode: quote.customer.zipCode,
            country: quote.customer.country,
          },
        },
        items: [
          {
            display_name: quote.packageName,
            sku: quote.quoteNumber,
            unit_price: Math.round(Number(quote.amount) * 100),
            qty: 1,
            item_url: window.location.href,
          },
        ],
      };

      let timedOut = false;
      const timeoutId = setTimeout(() => {
        timedOut = true;
        setProcessing(false);
        alert("Payment modal failed to open. Please try again.");
      }, 8000);

      const clearTimer = () => { if (!timedOut) clearTimeout(timeoutId); };

      window.affirm.checkout.on("success", async (data: any) => {
        clearTimer();
        try {
          await fetch(`${API}/api/payment/affirm/authorize`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              paymentId: checkout.paymentId,
              checkoutToken: data.token,
            }),
          });
          window.location.href = `/payment/success?paymentId=${checkout.paymentId}`;
        } catch (err) {
          console.error("Authorization error:", err);
          alert("Unable to authorize payment.");
          setProcessing(false);
        }
      });

      window.affirm.checkout.on("close", () => {
        clearTimer();
        setProcessing(false);
      });

      window.affirm.checkout(checkoutObject);
      window.affirm.checkout.open();

    } catch (err) {
      console.error("Affirm checkout error:", err);
      setProcessing(false);
      alert("Unable to start checkout.");
    }
  };

  // ── Loading ──────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <QuoteMeta />
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-900 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-gray-500 text-sm">Loading your quote...</p>
        </div>
      </div>
    );
  }

  if (!quote) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <QuoteMeta />
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-800">Quote Not Found</p>
          <p className="text-gray-500 mt-2">This quote link is invalid or has expired.</p>
        </div>
      </div>
    );
  }

  // ── Already Paid ─────────────────────────────────────────────────────────
  if (PAID_STATUSES.includes(quote.status)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <QuoteMeta />
        <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Green banner */}
          <div className="bg-green-600 px-6 py-8 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-9 h-9 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">Payment Completed</h1>
            <p className="text-green-100 mt-1 text-sm">This invoice has already been paid</p>
          </div>

          {/* Details */}
          <div className="px-6 py-6 space-y-4">
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 space-y-3">
              <Row label="Quote Number" value={<span className="font-mono text-xs">{quote.quoteNumber}</span>} />
              <Row label="Package"      value={quote.packageName} />
              <Row label="Travelers"    value={`${quote.travelers} ${quote.travelers === 1 ? "person" : "people"}`} />
              <Row label="Amount"       value={
                <span className="text-green-700 font-bold text-base">
                  ${Number(quote.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
              } />
              <Row label="Status"       value={
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                  {quote.status}
                </span>
              } />
            </div>

            <div className="text-center pt-2">
              <p className="text-xs text-gray-400 leading-relaxed">
                If you have any questions about your booking, please contact us.<br />
                Thank you for choosing <span className="font-semibold text-gray-600">Haram Umrah Travels</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Payment Form ──────────────────────────────────────────────────────────
  const isButtonDisabled = processing || !affirmLoaded;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <QuoteMeta />
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">

          {/* Header */}
          <div className="bg-gray-900 px-6 py-6">
            <h1 className="text-xl font-bold text-white">Haram Umrah Travels</h1>
            <p className="text-gray-400 text-sm mt-0.5">Secure Payment Portal</p>
          </div>

          <div className="p-6 space-y-6">

            {/* Quote Details */}
            <div className="bg-gray-50 rounded-xl border border-gray-100 p-4 space-y-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Quote Summary</p>
              <Row label="Quote Number" value={<span className="font-mono text-xs">{quote.quoteNumber}</span>} />
              <Row label="Package"      value={quote.packageName} />
              <Row label="Travelers"    value={`${quote.travelers} ${quote.travelers === 1 ? "person" : "people"}`} />
              <Row label="Customer"     value={`${quote.customer.firstName} ${quote.customer.lastName}`} />
              <Row label="Email"        value={quote.customer.email} />
            </div>

            {/* Amount */}
            <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-between">
              <span className="text-gray-400 text-sm font-medium">Total Amount</span>
              <span className="text-white text-2xl font-bold">
                ${Number(quote.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </div>

            {/* Notes */}
            {quote.notes && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Notes</p>
                <p className="text-sm text-amber-800">{quote.notes}</p>
              </div>
            )}

            {/* Pay button */}
            <button
              disabled={isButtonDisabled}
              onClick={startAffirmCheckout}
              className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold text-base transition-colors"
            >
              {!affirmLoaded
                ? "Loading payment system..."
                : processing
                ? "Opening Checkout..."
                : "Pay with Affirm"}
            </button>

            <p className="text-center text-xs text-gray-400">
              Payments are processed securely via Affirm. You will not be charged until you complete checkout.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-gray-500 flex-shrink-0">{label}</span>
      <span className="text-sm font-semibold text-gray-900 text-right">{value}</span>
    </div>
  );
}
