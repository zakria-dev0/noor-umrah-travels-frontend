// RefundPolicy.tsx
import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-noor-green">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">Refund Policy</h1>
          <p className="text-white/80 mt-4 text-lg">Haram Umrah Travels LLC</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              All Umrah packages involve third-party suppliers (airlines, hotels, visa authorities). Therefore, the following refund policies apply:
            </p>

            {/* Non-Refundable Items */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Non-Refundable Items</h2>
              <p className="text-gray-600 mb-4">The following are generally non-refundable:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Visa processing fees</li>
                <li>Airline tickets (unless refundable fare purchased)</li>
                <li>Hotel deposits</li>
                <li>Service fees</li>
                <li>Processing fees</li>
              </ul>
            </div>

            {/* Refund Processing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Refund Processing</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Refunds are only issued after funds are received back from suppliers.</li>
                <li>Refund timelines may take 4-8 weeks depending on the airline or hotel.</li>
                <li>Administrative fees may apply.</li>
              </ul>
            </div>

            {/* Cancellation Timeline */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Cancellation Timeline</h2>
              <div className="bg-noor-green/5 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-700 font-medium">More than 30 days before departure</span>
                    <span className="text-noor-green font-semibold">Deposit forfeited</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-700 font-medium">15-30 days before departure</span>
                    <span className="text-noor-green font-semibold">50% of total cost</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-700 font-medium">7-14 days before departure</span>
                    <span className="text-noor-green font-semibold">75% of total cost</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Less than 7 days before departure</span>
                    <span className="text-noor-green font-semibold">100% of total cost</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                * Actual refund amounts may vary based on airline and hotel policies.
              </p>
            </div>

            {/* Chargeback Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Chargeback Policy</h2>
              <p className="text-gray-600 mb-4">By making payment, you agree:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Not to initiate a chargeback without first contacting us.</li>
                <li>To allow reasonable time for dispute resolution.</li>
                <li>Fraudulent chargebacks will be formally disputed and may result in legal action under Florida law.</li>
              </ul>
            </div>

            {/* How to Request a Refund */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">How to Request a Refund</h2>
              <p className="text-gray-600 mb-4">To request a refund, please:</p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>Contact our customer service team via phone or email.</li>
                <li>Provide your booking reference number.</li>
                <li>State the reason for your cancellation request.</li>
                <li>Allow up to 5 business days for initial response.</li>
              </ol>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Contact Us</h2>
              <div className="bg-noor-green/5 p-6 rounded-xl">
                <p className="text-gray-700 font-semibold">Haram Umrah Travels LLC</p>
                <p className="text-gray-600">1395 Brickell Ave Suite 800</p>
                <p className="text-gray-600">Miami, FL 33131</p>
                <p className="text-gray-600 mt-2">Email: info@haramumrahtravels.com</p>
                <p className="text-gray-600">Phone: +1 305 7768923</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
