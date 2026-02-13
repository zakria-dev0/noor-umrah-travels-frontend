// TermsConditions.tsx
import React from 'react';

const TermsConditions: React.FC = () => {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">Terms & Conditions</h1>
          <p className="text-white/80 mt-4 text-lg">Haram Umrah Travels LLC</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Welcome to Haram Umrah Travels LLC ("Company," "we," "our," or "us"). By booking any Umrah package, airline ticket, hotel, visa service, or related travel service through our website or office, you agree to the following Terms & Conditions.
            </p>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">1. Our Role as Travel Agency</h2>
              <p className="text-gray-600 mb-4">
                Haram Umrah Travels LLC is a Florida-based travel agency located in Miami, USA. We act solely as an independent travel organizer and booking agent for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Airlines</li>
                <li>Hotels</li>
                <li>Ground transportation providers</li>
                <li>Visa processors</li>
                <li>Tour operators</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do not own or control these third-party providers. All services are subject to the terms and conditions of the respective service providers.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">2. Umrah Visa & Entry Requirements</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Umrah visa issuance is solely at the discretion of the Kingdom of Saudi Arabia.</li>
                <li>We do not guarantee visa approval.</li>
                <li>Customers are responsible for submitting accurate and complete documentation.</li>
                <li>Visa fees and processing charges are non-refundable once submitted.</li>
                <li>Changes in Saudi regulations, entry requirements, or travel restrictions are beyond our control.</li>
                <li>Failure to obtain a visa does not automatically entitle the traveler to a full refund.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">3. Pricing & Payments</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Prices are subject to availability and may change without notice until full payment is received.</li>
                <li>A non-refundable deposit is required to secure a booking.</li>
                <li>Full payment must be completed before ticket issuance and hotel confirmation.</li>
                <li>Credit/debit card payments may include processing fees.</li>
                <li>Returned checks or failed payments may result in cancellation.</li>
                <li>All payments are processed in U.S. Dollars (USD).</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">4. Cancellation & Refund Policy</h2>

              <h3 className="text-xl font-semibold text-noor-green mb-3">Cancellation by Customer</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Deposits are non-refundable.</li>
                <li>Airline tickets are subject to airline fare rules and are often non-refundable.</li>
                <li>Hotel bookings and ground services may carry penalties depending on supplier policies.</li>
                <li>Visa and processing fees are non-refundable once submitted.</li>
                <li>Refunds, if applicable, will only be issued after funds are received back from third-party suppliers.</li>
              </ul>

              <h3 className="text-xl font-semibold text-noor-green mb-3">Cancellation by Company</h3>
              <p className="text-gray-600 mb-2">We reserve the right to cancel or modify packages due to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Insufficient group size</li>
                <li>Government regulations</li>
                <li>Airline cancellations</li>
                <li>Force majeure events</li>
              </ul>
              <p className="text-gray-600 mt-4">In such cases, refunds will be limited to recoverable amounts from suppliers.</p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">5. Changes & Amendments</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name changes after ticket issuance may not be permitted.</li>
                <li>Date or itinerary changes are subject to availability and penalties.</li>
                <li>Administrative change fees may apply.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">6. Force Majeure</h2>
              <p className="text-gray-600 mb-4">
                Haram Umrah Travels LLC is not liable for events beyond our control, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Government travel restrictions</li>
                <li>Visa rule changes</li>
                <li>Airline schedule changes</li>
                <li>Natural disasters</li>
                <li>Pandemics or public health emergencies</li>
                <li>Political unrest</li>
                <li>Acts of God</li>
              </ul>
              <p className="text-gray-600 mt-4">No compensation shall be provided for circumstances beyond our control.</p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">7. Airline Responsibility</h2>
              <p className="text-gray-600 mb-4">
                Airlines operate under their own conditions of carriage. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Flight delays or cancellations</li>
                <li>Missed connections</li>
                <li>Schedule changes</li>
                <li>Baggage loss or damage</li>
              </ul>
              <p className="text-gray-600 mt-4">Baggage allowances and seating are governed by the airline.</p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">8. Hotel & Accommodation</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Hotel star ratings are based on local Saudi standards.</li>
                <li>Distance from Masjid al-Haram or Masjid an-Nabawi is approximate.</li>
                <li>Room assignments are handled by hotel management.</li>
                <li>Triple/quad rooms may include extra beds or rollaway beds.</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">9. Ground Transportation in Saudi Arabia</h2>
              <p className="text-gray-600 mb-4">Transportation schedules may be affected by:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Traffic congestion</li>
                <li>Road closures</li>
                <li>Government crowd control policies</li>
              </ul>
              <p className="text-gray-600 mt-4">We are not responsible for delays caused by such conditions.</p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">10. Health & Vaccination Requirements</h2>
              <p className="text-gray-600 mb-4">
                Travelers must comply with all Saudi health and vaccination requirements. We are not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Denial of boarding</li>
                <li>Denial of entry</li>
                <li>Medical emergencies</li>
              </ul>
              <p className="text-gray-600 mt-4 font-semibold">Travel insurance is strongly recommended.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
