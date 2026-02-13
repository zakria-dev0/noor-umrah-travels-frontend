// LegalCompliance.tsx
import React from 'react';

const LegalCompliance: React.FC = () => {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">Seller of Travel & Legal Compliance</h1>
          <p className="text-white/80 mt-4 text-lg">Haram Umrah Travels LLC</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {/* Notice */}
            <div className="bg-noor-gold/10 border-l-4 border-noor-gold p-6 rounded-r-xl mb-10">
              <h2 className="text-xl font-bold text-noor-green mb-2 font-display">Important Notice</h2>
              <p className="text-gray-700">
                Haram Umrah Travels LLC operates as a travel agency in the State of Florida. We act solely as an independent intermediary between customers and third-party travel suppliers.
              </p>
            </div>

            {/* Our Role */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Our Role</h2>
              <p className="text-gray-600 mb-4">
                We do not own, operate, or control:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Airlines</li>
                <li>Hotels</li>
                <li>Transportation companies</li>
                <li>The Saudi Ministry of Hajj & Umrah</li>
              </ul>
              <p className="text-gray-600 mt-4">
                All services are subject to availability and supplier terms.
              </p>
            </div>

            {/* Florida Seller of Travel */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Florida Seller of Travel</h2>
              <p className="text-gray-600 mb-4">
                As a Florida-based travel agency, we comply with all applicable Florida Seller of Travel regulations. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Registration with the Florida Department of Agriculture and Consumer Services</li>
                <li>Compliance with all disclosure requirements</li>
                <li>Adherence to consumer protection standards</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Governing Law</h2>
              <div className="bg-noor-green/5 p-6 rounded-xl">
                <p className="text-gray-700">
                  These agreements are governed by the laws of the <strong>State of Florida</strong>. Any disputes shall be resolved exclusively in <strong>Miami-Dade County, Florida</strong>.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Haram Umrah Travels LLC shall not be held liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Acts or omissions of third-party suppliers</li>
                <li>Delays, cancellations, or schedule changes by airlines</li>
                <li>Changes in visa or entry requirements by Saudi authorities</li>
                <li>Force majeure events including natural disasters, pandemics, or political unrest</li>
                <li>Personal injury, property damage, or loss during travel</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Indemnification</h2>
              <p className="text-gray-600">
                By using our services, you agree to indemnify and hold harmless Haram Umrah Travels LLC, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                In the event of a dispute:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>Contact our customer service team to attempt informal resolution.</li>
                <li>If unresolved, disputes may be submitted to mediation.</li>
                <li>Any legal action must be filed in Miami-Dade County, Florida.</li>
                <li>Claims must be brought within one (1) year of the incident.</li>
              </ol>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Contact Information</h2>
              <div className="bg-noor-green/5 p-6 rounded-xl">
                <p className="text-gray-700 font-semibold">Haram Umrah Travels LLC</p>
                <p className="text-gray-600">1395 Brickell Ave Suite 800</p>
                <p className="text-gray-600">Miami, FL 33131</p>
                <p className="text-gray-600 mt-2">Email: info@haramumrahtravels.com</p>
                <p className="text-gray-600">Phone: +1 305 7768923</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center text-gray-500 text-sm mt-10">
              <p>Last Updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalCompliance;
