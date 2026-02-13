// UmrahPackagesCombined.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons/Icons';

// Import images for Kaaba View
import makkah1 from '../assets/images/packages/5-3_files/imp-4.webp';
import kaabaClose from '../assets/images/packages/5-3_files/imp-5.webp';
import madinah1 from '../assets/images/packages/5-3_files/imp-6.webp';

// Import images for Haram View
import haramImg1 from '../assets/images/packages/5-3_files/im-1.webp';
import haramImg2 from '../assets/images/packages/5-3_files/imp-3.webp';
import haramImg3 from '../assets/images/packages/5-3_files/imp-2.webp';

// ==================== PACKAGE DATA ====================
interface PackageItem {
  title: string;
  nights: number;
  price: number;
  image: string;
  features: string[];
  type: 'kaaba' | 'haram';
}

interface PackageCategory {
  name: string;
  subtitle: string;
  packages: PackageItem[];
}

const getKaabaPackageImages = () => ({
  img1: makkah1,
  img2: kaabaClose,
  img3: madinah1,
});

const getHaramPackageImages = () => ({
  img1: haramImg1,
  img2: haramImg2,
  img3: haramImg3,
});

// Kaaba View packages data
const kaabaViewData: PackageCategory = {
  name: '5 Star Kaaba View Umrah Packages',
  subtitle: 'Noor Umrah Travels',
  packages: [
    {
      title: '5 Star Kaaba View Package',
      nights: 5,
      price: 990,
      image: 'img1',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'kaaba',
    },
    {
      title: '5 Star Kaaba View Package',
      nights: 7,
      price: 1190,
      image: 'img2',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'kaaba',
    },
    {
      title: '5 Star Kaaba View Package',
      nights: 10,
      price: 1390,
      image: 'img3',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'kaaba',
    },
  ],
};

// Haram View packages data
const haramViewData: PackageCategory = {
  name: '5 Star Haram View Umrah Packages',
  subtitle: 'Noor Umrah Travels',
  packages: [
    {
      title: '5 Star Haram View Package',
      nights: 5,
      price: 890,
      image: 'img1',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'haram',
    },
    {
      title: '5 Star Haram View Package',
      nights: 7,
      price: 990,
      image: 'img2',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'haram',
    },
    {
      title: '5 Star Haram View Package',
      nights: 10,
      price: 1190,
      image: 'img3',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'haram',
    },
  ],
};

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
      <p className="text-noor-gold font-display text-2xl italic mb-2">Noor Umrah Travels</p>
      <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">5 Star Umrah Packages</h1>
      <p className="text-white/80 mt-4 text-lg">Kaaba View & Haram View Packages</p>
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

// ==================== PACKAGE CARD ====================
const UmrahPackageCard = ({ pkg }: { pkg: PackageItem }) => {
  const kaabaImages = getKaabaPackageImages();
  const haramImages = getHaramPackageImages();
  const images = pkg.type === 'kaaba' ? kaabaImages : haramImages;
  const imgSrc = images[pkg.image as keyof typeof images] || images.img1;
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    const viewType = pkg.type === 'kaaba' ? 'kaaba-view' : 'haram-view';
    navigate(`/packages/${viewType}/${pkg.nights}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      {/* Image with nights badge */}
      <div className="relative">
        <img
          src={imgSrc}
          alt={pkg.title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <div className="bg-noor-gold text-white px-3 py-1 rounded-t-lg text-xs font-bold tracking-wider">
            NIGHTS
          </div>
          <div className="bg-noor-gold/90 text-white px-3 py-2 rounded-b-lg rounded-tr-lg text-3xl font-bold">
            {String(pkg.nights).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-noor-green text-lg mb-3 leading-tight">{pkg.title}</h3>

        {/* Price */}
        <div className="mb-4">
          <span className="text-noor-gold text-xs align-top">$</span>
          <span className="text-4xl font-bold text-noor-green">{pkg.price}</span>
          <span className="text-gray-400 text-sm ml-1">/ Per Person</span>
        </div>

        {/* Features */}
        <div className="space-y-2.5 mb-5">
          {pkg.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <FeatureIcon type={feature} />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleMoreDetails}
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
      <div className="text-center mb-10">
        <p className="text-noor-gold font-display text-xl italic mb-1">{category.subtitle}</p>
        <h2 className="text-3xl font-bold text-noor-green font-display">{category.name}</h2>
        <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {category.packages.map((pkg, index) => (
          <UmrahPackageCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  </section>
);

// ==================== MAIN PAGE COMPONENT ====================
const UmrahPackagesCombined: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <PackagesHero />

      {/* Kaaba View Packages Section */}
      <PackageCategorySection category={kaabaViewData} />

      {/* Haram View Packages Section */}
      <PackageCategorySection category={haramViewData} />
    </div>
  );
};

export default UmrahPackagesCombined;
