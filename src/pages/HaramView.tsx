// HaramView.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRightIcon } from '../components/icons/Icons';

import makkah1 from '../assets/images/packages/5-3_files/im-1.webp';
import kaabaClose from '../assets/images/packages/5-3_files/imp-3.webp';
import madinah1 from '../assets/images/packages/5-3_files/imp-2.webp';

// ==================== PACKAGE DATA ====================
interface PackageItem {
  title: string;
  nights: number;
  price: number;
  image: string;
  features: string[];
}

interface PackageCategory {
  name: string;
  subtitle: string;
  packages: PackageItem[];
}

const getPackageImages = () => ({
  img1: makkah1,
  img2: kaabaClose,
  img3: madinah1,
});

const haramViewData: PackageCategory[] = [
  {
    name: 'Exclusive 5 Star Haram View Umrah Packages',
    subtitle: 'Haram Umrah Travels',
    packages: [
      {
        title: '5 Star Haram View Package',
        nights: 5,
        price: 890,
        image: 'img1',
        features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      },
      {
        title: '5 Star Haram View Package',
        nights: 7,
        price: 990,
        image: 'img2',
        features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      },
      {
        title: '5 Star Haram View Package',
        nights: 10,
        price: 1190,
        image: 'img3',
        features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      },
    ],
  },
];

// ==================== FEATURE ICONS ====================
const FeatureIcon = ({ type }: { type: string }) => {
  const lower = type.toLowerCase();
  if (lower.includes('visa')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
      </svg>
    );
  }
  if (lower.includes('flight')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    );
  }
  if (lower.includes('transportation')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-4-10l-4 4m0 0l4 4m-4-4h12" />
      </svg>
    );
  }
  if (lower.includes('hotel')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
};

// ==================== HERO BANNER ====================
const PackagesHero = () => (
  <section className="relative py-20 overflow-hidden">
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
      <p className="text-noor-gold font-display text-2xl italic mb-2">Haram Umrah Travels</p>
      <h1 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4">
        Luxury 5 Star Haram View Packages
      </h1>
      <p className="text-noor-gold text-lg font-semibold mb-3">
        Pray Closer, Stay Luxuriously, Experience Umrah Beautifully
      </p>
      <p className="text-white/80 text-base max-w-2xl mx-auto">
        Combine spiritual fulfillment and world-class luxury while staying near the Holy Haram for an unforgettable Umrah journey.
      </p>
    </div>

    {/* Inquiry Form */}
    <div className="relative z-20 max-w-4xl mx-auto px-4 mt-12">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-center font-bold text-noor-green text-lg mb-4">
          Let's Plan your Umrah Together
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
          />
          <input
            type="tel"
            placeholder="Phone No"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
          />
          <input
            type="text"
            placeholder="Your Enquiry"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
          />
        </div>
        <button className="w-full mt-4 bg-noor-gold text-white py-3 rounded-lg font-semibold hover:bg-[#b89a3e] transition-colors">
          Get Best Prices
        </button>
      </div>
    </div>
  </section>
);

// ==================== COMFORT SECTION ====================
const ComfortSection = () => {
  const highlights = [
    '5-star accommodation with Haram views',
    'Comfortable and spacious rooms',
    'Easy access to Masjid al-Haram',
    'Professional travel assistance',
    'Affordable luxury for every pilgrim',
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-noor-green mb-4">
              Perform Umrah with Comfort and Peace
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our 5 Star Haram View Packages are designed for pilgrims who want both spiritual fulfillment and modern comfort. Staying in a Haram-view hotel allows you to enjoy easy access to prayers, reduced travel time, and breathtaking views of the sacred surroundings.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These packages are ideal for families, couples, and senior pilgrims seeking convenience throughout their Umrah journey.
            </p>
            <h3 className="text-noor-green font-bold text-lg mb-3">Package Highlights:</h3>
            <ul className="space-y-2.5 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-noor-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-noor-green text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#2a5c3a] transition-colors"
            >
              Get More Details!
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-noor-green/5 border border-noor-green/20 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-4">🕌</div>
            <p className="text-noor-green font-bold text-xl mb-2">5 Star Haram View</p>
            <p className="text-gray-500 text-sm">Premium accommodation steps from Masjid al-Haram</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== PACKAGE CARD ====================
const UmrahPackageCard = ({ pkg }: { pkg: PackageItem }) => {
  const images = getPackageImages();
  const imgSrc = images[pkg.image as keyof typeof images] || images.img1;
  const navigate = useNavigate();

  const descriptions: Record<number, string> = {
    890: 'Our most affordable Haram View option, designed for pilgrims who want quality accommodation and easy Haram access at a budget-friendly price.',
    990: 'A balanced package offering luxury accommodation, a convenient location, and great value for families and individuals.',
    1190: 'Ideal for pilgrims seeking superior comfort, excellent amenities, and exceptional Haram views with a premium travel experience.',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative">
        <img src={imgSrc} alt={pkg.title} className="w-full h-56 object-cover" />
        <div className="absolute bottom-4 left-4">
          <div className="bg-noor-gold text-white px-3 py-1 rounded-t-lg text-xs font-bold tracking-wider">
            NIGHTS
          </div>
          <div className="bg-noor-gold/90 text-white px-3 py-2 rounded-b-lg rounded-tr-lg text-3xl font-bold">
            {String(pkg.nights).padStart(2, '0')}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-noor-green text-lg mb-1 leading-tight">{pkg.title}</h3>
        <p className="text-gray-500 text-sm mb-3 leading-relaxed">
          {descriptions[pkg.price] || ''}
        </p>

        <div className="mb-4">
          <span className="text-noor-gold text-xs align-top">$</span>
          <span className="text-4xl font-bold text-noor-green">{pkg.price}</span>
          <span className="text-gray-400 text-sm ml-1">/ Per Person</span>
        </div>

        <div className="space-y-2.5 mb-5">
          {pkg.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <FeatureIcon type={feature} />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate(`/packages/haram-view/${pkg.nights}`)}
          className="bg-noor-green text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#2a5c3a] transition-colors flex items-center gap-2 w-full justify-center"
        >
          More Details
          <ArrowRightIcon className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

// ==================== PACKAGE CATEGORY SECTION ====================
const PackageCategorySection = ({ category }: { category: PackageCategory }) => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-4">
        <p className="text-noor-gold font-display text-xl italic mb-1">{category.subtitle}</p>
        <h2 className="text-3xl font-bold text-noor-green font-display">{category.name}</h2>
        <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
      </div>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">
        We offer a range of affordable luxury packages to suit different budgets while maintaining premium accommodation standards.
      </p>
      <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-10">
        All packages include carefully selected 5-star accommodations and outstanding customer support.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {category.packages.map((pkg, index) => (
          <UmrahPackageCard key={index} pkg={pkg} />
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-600 mb-4">
          Compare our packages and choose the perfect Haram View Umrah experience for your budget.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-noor-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b89a3e] transition-colors"
        >
          Book Now!
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
);

// ==================== LUXURY FEATURES SECTION ====================
const LuxuryFeaturesSection = () => {
  const features = [
    'Haram-view hotel stays',
    'Comfortable room options',
    'Assistance with Umrah arrangements',
    'Guidance for first-time pilgrims',
    'Competitive pricing',
  ];

  return (
    <section className="py-16 bg-noor-green text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Experience Luxury, Convenience, and Spiritual Connection
            </h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Performing Umrah becomes more meaningful when you can focus on worship instead of travel logistics. Our Haram View packages provide the ideal balance of comfort and devotion, allowing you to spend more time in prayer and reflection.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              Whether you are traveling during Ramadan or planning a regular Umrah trip, our packages offer exceptional value and convenience.
            </p>
            <p className="text-noor-gold font-semibold">
              Reserve your luxury Haram View package today and experience Umrah with comfort, ease, and spiritual tranquility.
            </p>
          </div>
          <div>
            <h3 className="text-noor-gold font-bold text-xl mb-5">Included Features:</h3>
            <ul className="space-y-3">
              {features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-noor-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== WHY CHOOSE SECTION ====================
const WhyChooseSection = () => {
  const benefits = [
    'Premium hotel options',
    'Convenient Haram access',
    'Comfortable transportation arrangements',
    'Family-friendly accommodations',
    'Reliable customer support',
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-noor-green mb-4">
            Why Choose Our 5 Star Haram View Packages?
          </h2>
          <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Haram Umrah Travels, we focus on creating a smooth and spiritually rewarding journey for pilgrims from the USA.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team carefully selects premium hotels that offer excellent service, cleanliness, and close proximity to the Haram. We also provide support throughout your trip to ensure a hassle-free experience from departure to return.
            </p>
          </div>
          <div>
            <h3 className="text-noor-green font-bold text-lg mb-4">Benefits Include:</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-noor-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-noor-green text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#2a5c3a] transition-colors"
            >
              Contact our Umrah specialists now!
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== FAQ SECTION ====================
const faqs = [
  {
    question: 'What is included in the 5 Star Haram View Package?',
    answer: 'The package includes 5-star accommodation with Haram views and essential Umrah travel arrangements.',
  },
  {
    question: 'Are these packages suitable for families?',
    answer: 'Yes, our packages are designed for families, couples, and individual pilgrims.',
  },
  {
    question: 'How close are the hotels to the Haram?',
    answer: 'The hotels are located within walking distance or very close to Masjid al-Haram.',
  },
  {
    question: 'Can I choose my travel dates?',
    answer: 'Yes, we offer flexible travel dates based on availability.',
  },
  {
    question: 'How do I book a package?',
    answer: 'Simply contact Haram Umrah Travels through our website or customer support team to reserve your package.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-noor-green mb-2">Frequently Asked Questions</h2>
          <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-noor-green pr-4">
                  {i + 1}. {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-noor-gold flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== MAIN PAGE COMPONENT ====================
const HaramView: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>5 Star Haram View Umrah Packages | Haram Umrah Travels</title>
        <meta
          name="description"
          content="Experience premium Umrah with 5-star Haram-view hotels, exceptional service, and affordable packages designed for pilgrims from the USA."
        />
      </Helmet>

      <PackagesHero />
      <ComfortSection />

      {haramViewData.map((category, index) => (
        <PackageCategorySection key={index} category={category} />
      ))}

      <LuxuryFeaturesSection />
      <WhyChooseSection />
      <FaqSection />
    </div>
  );
};

export default HaramView;
