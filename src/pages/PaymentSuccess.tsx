import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PaymentMeta = () => (
  <Helmet>
    <title>Payment Status | Haram Umrah Travels</title>
    <meta name="robots" content="noindex, follow" />
  </Helmet>
);

type Status = "loading" | "success" | "error";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("paymentId");
  const checkoutToken = searchParams.get("checkout_token");

  const [status, setStatus] = useState<Status>("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const calledRef = useRef(false);
  
  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    if (!paymentId || !checkoutToken) {
      setStatus("error");
      setErrorMsg("Missing payment information in URL.");
      return;
    }

    const authorize = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/api/payment/affirm/authorize`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ paymentId, checkoutToken }),
          }
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Authorization failed");
        setStatus("success");
      } catch (err: any) {
        setStatus("error");
        setErrorMsg(err.message || "Something went wrong.");
      }
    };

    authorize();
  }, [paymentId, checkoutToken]);

  if (status === "loading") {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center">
        <PaymentMeta />
        <div className="border rounded-lg shadow bg-white p-8">
          <p className="text-gray-600 text-lg">Confirming your payment, please wait...</p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="max-w-4xl mx-auto p-10 text-center">
        <PaymentMeta />
        <div className="border rounded-lg shadow bg-white p-8">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Error</h1>
          <p className="text-gray-700">{errorMsg}</p>
          <p className="mt-2 text-sm text-gray-500">Please contact support with your Payment ID: <code>{paymentId}</code></p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-10 text-center">
      <PaymentMeta />
      <div className="border rounded-lg shadow bg-white p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Payment Successful</h1>
        <p>Your payment has been authorised.</p>
        {paymentId && <p className="mt-2">Payment ID: <code>{paymentId}</code></p>}
        <p className="mt-2">We will contact you shortly to confirm your booking.</p>
      </div>
    </div>
  );
}
