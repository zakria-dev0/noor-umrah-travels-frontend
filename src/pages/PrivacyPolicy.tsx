// PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">Privacy Policy</h1>
          <p className="text-white/80 mt-4 text-lg">Haram Umrah Travels LLC</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Haram Umrah Travels LLC ("Company," "we," "our," or "us") respects your privacy and is committed to protecting your personal information.
            </p>

            {/* Information We Collect */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Information We Collect</h2>
              <p className="text-gray-600 mb-4">We may collect:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Full name</li>
                <li>Passport information</li>
                <li>Date of birth</li>
                <li>Address</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Payment information</li>
                <li>Travel preferences</li>
              </ul>
              <p className="text-gray-600 mt-4">
                This information is required for Umrah visa processing, airline booking, hotel reservations, and related travel services.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">Your information may be used to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Process Umrah visas</li>
                <li>Book flights and hotels</li>
                <li>Communicate travel updates</li>
                <li>Provide customer support</li>
                <li>Process payments</li>
              </ul>
              <p className="text-gray-600 mt-4 font-semibold">
                We do not sell your personal information.
              </p>
            </div>

            {/* Sharing of Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Sharing of Information</h2>
              <p className="text-gray-600 mb-4">We may share your data with:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Airlines</li>
                <li>Hotels</li>
                <li>Saudi visa authorities</li>
                <li>Ground transportation providers</li>
                <li>Payment processors</li>
              </ul>
              <p className="text-gray-600 mt-4">
                This sharing is necessary to fulfill your travel booking and provide the services you have requested.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-noor-green/5 p-6 rounded-xl">
                <p className="text-gray-700 font-semibold">Haram Umrah Travels LLC</p>
                <p className="text-gray-600">1395 Brickell Ave Suite 800</p>
                <p className="text-gray-600">Miami, FL 33131</p>
                <p className="text-gray-600 mt-2">Email: info@haramumrahtravels.com</p>
                <p className="text-gray-600">Phone: +1 305 7768923</p>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-noor-green mb-4 font-display">Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
