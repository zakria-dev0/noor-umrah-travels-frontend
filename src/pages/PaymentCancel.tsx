import { Link } from "react-router-dom";

export default function PaymentCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full text-center">
        <div className="text-6xl mb-6">❌</div>

        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Checkout Cancelled
        </h1>

        <p className="text-gray-600 mb-8">
          Your checkout was cancelled before completing payment.
        </p>

        <p className="text-gray-600 mb-8">
          No payment has been processed.
          <br />
          You can return to your quote and try again whenever you're ready.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}