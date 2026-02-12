// UmrahPackagesPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons/Icons';

import makkah1 from '../assets/images/packages/5-3_files/im-1.webp';
import kaabaClose from '../assets/images/packages/5-3_files/when-is-hajj-2026-697f82d559322.jpg';
import madinah1 from '../assets/images/packages/5-3_files/im-1.webp';

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

const allPackageData: Record<string, PackageCategory[]> = {
  'all-luxury': [
    {
      name: 'Shuttle Premium Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Shuttle Premium Package', nights: 5, price: 390, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Shuttle Premium Package', nights: 7, price: 490, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Shuttle Premium Package', nights: 10, price: 590, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
      ],
    },
    {
      name: 'Standard Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Standard Umrah Package', nights: 5, price: 690, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Standard Umrah Package', nights: 7, price: 790, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Standard Umrah Package', nights: 10, price: 990, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
      ],
    },
    {
      name: 'Haram View Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Haram View Package', nights: 5, price: 890, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Haram View Package', nights: 7, price: 990, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Haram View Package', nights: 10, price: 1190, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
      ],
    },
    {
      name: 'Kaaba View Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Kaaba View Package', nights: 5, price: 990, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Kaaba View Package', nights: 7, price: 1190, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Kaaba View Package', nights: 10, price: 1390, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
      ],
    },
    {
      name: 'Special Promotions',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: 'Affordable Ramadan 1st Ashra Umrah Program', nights: 10, price: 1890, image: 'img1', features: ['Visa Included', 'Flight Included', 'Transportation Included', '5 Star Hotels Included', 'Departure on February 17th 2026', 'Return on February 28th 2026'] },
        { title: 'Affordable Ramadan 2nd Ashra Umrah Program', nights: 10, price: 1890, image: 'img2', features: ['Visa Included', 'Flight Included', 'Transportation Included', '5 Star Hotels Included', 'Departure on February 27th 2026', 'Return on March 10th 2026'] },
      ],
    },
  ],
  'group': [
    {
      name: 'Group Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Group Package', nights: 7, price: 450, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included', 'Group Discount Applied'] },
        { title: '5 Star Group Package', nights: 10, price: 550, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included', 'Group Discount Applied'] },
        { title: '5 Star Group Package', nights: 14, price: 750, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included', 'Group Discount Applied'] },
      ],
    },
  ],
  'kaaba-view': [
    {
      name: 'Kaaba View Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Kaaba View Package', nights: 5, price: 990, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Kaaba View Package', nights: 7, price: 1190, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Kaaba View Package', nights: 10, price: 1390, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
      ],
    },
  ],
  'haram-view': [
    {
      name: 'Haram View Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Haram View Package', nights: 5, price: 890, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Haram View Package', nights: 7, price: 990, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Haram View Package', nights: 10, price: 1190, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
      ],
    },
  ],
  'shuttle-premium': [
    {
      name: 'Shuttle Premium Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Shuttle Premium Package', nights: 5, price: 390, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Shuttle Premium Package', nights: 7, price: 490, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Shuttle Premium Package', nights: 10, price: 590, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
      ],
    },
  ],
  'land': [
    {
      name: 'Land Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Land Package', nights: 5, price: 350, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Land Package', nights: 7, price: 450, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Land Package', nights: 10, price: 550, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
      ],
    },
  ],
  'affordable': [
    {
      name: 'Affordable Umrah Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: '5 Star Affordable Package', nights: 5, price: 290, image: 'img1', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Affordable Package', nights: 7, price: 390, image: 'img2', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
        { title: '5 Star Affordable Package', nights: 10, price: 490, image: 'img3', features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'] },
      ],
    },
  ],
  'travel': [
    {
      name: 'Umrah Travel Packages',
      subtitle: 'Noor Umrah Travels',
      packages: [
        { title: 'Umrah Travel Package', nights: 7, price: 595, image: 'img1', features: ['Visa Included', 'Transportation Included', '4 Star Hotels Included'] },
        { title: 'Umrah Travel Package', nights: 10, price: 795, image: 'img2', features: ['Visa Included', 'Transportation Included', '4 Star Hotels Included'] },
        { title: 'Umrah Travel Package', nights: 14, price: 995, image: 'img3', features: ['Visa Included', 'Transportation Included', '4 Star Hotels Included'] },
      ],
    },
  ],
};

const pageTitles: Record<string, string> = {
  'all-luxury': 'All Umrah Packages',
  'group': '5 Star Group Umrah Packages',
  'kaaba-view': '5 Star Kaaba View Umrah Packages',
  'haram-view': '5 Star Haram View Umrah Packages',
  'shuttle-premium': '5 Star Shuttle Premium Umrah Packages',
  'land': '5 Star Land Umrah Packages',
  'affordable': '5 Star Affordable Umrah Packages',
  'travel': 'Umrah Travel Packages',
  'guide': 'Guide: How To Perform Umrah',
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
  if (lower.includes('departure') || lower.includes('return')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  if (lower.includes('group')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
const PackagesHero = ({ title }: { title: string }) => (
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
      <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">{title}</h1>
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
  const images = getPackageImages();
  const imgSrc = images[pkg.image as keyof typeof images] || images.img1;

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
        <button className="bg-noor-green text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#2a5c3a] transition-colors flex items-center gap-2">
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

      <div className={`grid gap-8 ${category.packages.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto' : 'grid-cols-1 md:grid-cols-3'}`}>
        {category.packages.map((pkg, index) => (
          <UmrahPackageCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  </section>
);

// ==================== CONTENT SECTION ====================
const ContentSection = () => (
  <section className="py-16 bg-noor-light">
    <div className="max-w-4xl mx-auto px-4">
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-noor-green font-display mb-6">
          Affordable Umrah Packages 2026 – A Spiritual Journey with Noor Umrah Travels
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Starting a spiritual journey is a profound experience. If you are looking for Affordable Umrah Packages, Noor Umrah Travels' carefully crafted Umrah packages are calling to you. As a reliable company that offers Affordable Umrah Packages 2026, Noor Umrah Travels combines professionalism and dedication to its best.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Getting on the spiritual path does not have to cost a lot of money. The affordable Umrah packages from Noor Umrah Travels for 2026 focus on giving people a spiritually enriching experience without sacrificing comfort. These packages are designed for modern pilgrims and capture the essence of Umrah while keeping costs low.
        </p>

        <h3 className="text-2xl font-bold text-noor-green font-display mt-8 mb-4">
          Affordable Umrah Packages Tailored for You
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          When looking at Umrah packages 2026, price is one of the most important things to think about. Noor Umrah Travels knows how important it is for everyone to be able to go on this spiritual journey. Our affordable Umrah packages 2026 are designed for pilgrims, guaranteeing a great, affordable experience.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          In 2026, Umrah calls pilgrims to a holy journey of devotion and self-discovery. Thanks to its many years of experience, Noor Umrah Travels makes sure that every part of your Umrah goes smoothly. Our Umrah Packages 2026 are made to make this spiritual journey a deep and uplifting one.
        </p>

        <h3 className="text-2xl font-bold text-noor-green font-display mt-8 mb-4">
          Crafting Your Umrah Journey with Affordable Umrah Packages 2026
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          When you choose an Umrah package, it is not just about where you want to go; it is also about the journey. Noor Umrah Travels is proud to offer Umrah packages 2026 that cover all the bases. Your trip is our top priority, from great accommodation to easy transportation. Noor Umrah Travels makes sure that all of the details of your trip are taken care of.
        </p>

        <h3 className="text-2xl font-bold text-noor-green font-display mt-8 mb-4">
          Embracing Affordable Umrah Packages 2026
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Noor Umrah Travels is offering affordable Umrah packages 2026 for people who want to be holy but do not want to spend a lot of money. Our commitment to make this sacred pilgrimage accessible and affordable ensures that every pilgrim may participate. Do not spend a lot of money to enjoy the richness of the Umrah experience.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Noor Umrah Travels has Affordable Umrah Packages 2026, which is important because spirituality and money often do not get along. Because we believe everyone should be able to make this sacred pilgrimage, our packages reflect this. With Noor Umrah Travels, you can find out how affordable Umrah is and how it can help you reach spiritual fulfilment.
        </p>

        <h3 className="text-2xl font-bold text-noor-green font-display mt-8 mb-4">
          Umrah 2026 Tailored Calmness – Personalized Umrah Packages
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Trust is built on being open and honest, especially when it comes to prices. Noor Umrah Travels is proud of its prices, which are easy to understand and do not include any extra fees. The Ministry of Hajj and Umrah in Saudi Arabia has approved and certified this business, which adds to its credibility. With Noor Umrah Travels, pilgrims can be sure that their trip will be safe and reliable to the highest standards.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Noor Umrah Travels is offering customized Umrah Packages 2026 because we know that each pilgrim is different and has different spiritual needs. Make your sacred journey fit your needs to make sure you have a deeply enlightening experience that fits with your spiritual path.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          We at Noor Umrah Travels know that spirituality is a journey that is unique to each person. Our customized affordable Umrah packages 2026 give pilgrims the freedom to make their Umrah 2026 exactly how they want it to be. Our packages are flexible enough to fit your needs, whether you want to be alone to think or with a group to have fun.
        </p>

        <h3 className="text-2xl font-bold text-noor-green font-display mt-8 mb-4">
          Beyond Packages – Noor Umrah Travels' Commitment to Excellence
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          In many ways, Umrah is more than just a pilgrimage. It is a dream that includes both spirituality and learning about other cultures. With our Umrah packages 2026, Noor Umrah Travels wants you to go beyond your wildest dreams.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Many people's dreams come true when they go to Umrah 2026, and Noor Umrah Travels makes this dream a real and enriching reality. Our Umrah Packages for 2026 include more than just the usual pilgrimage. Learn about the different cultures in Mecca and Madina and visit important historical sites to make your Umrah trip a real adventure.
        </p>

        <h3 className="text-2xl font-bold text-noor-green font-display mt-8 mb-4">
          Making the Right Choices – Contacting Noor Umrah Travels
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Help is needed to get through the complicated planning of Umrah 2026. Noor Umrah Travels makes this process easier by giving you a clear way to pick the right options. We are easy to contact; you can call us at +1 305 7768923 or email info@haramumrahtravels.com. Our experienced travel agents are ready to help, making the whole process smooth, from thinking about it to booking it.
        </p>

        <h3 className="text-2xl font-bold text-noor-green font-display mt-8 mb-4">
          Secure Your Journey – Book Your Umrah Packages Now
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          It is time to act now that the journey through the details of Umrah packages is over. Book your Umrah packages with Noor Umrah Travels right now to make sure your spiritual journey goes smoothly. As of 2026, Noor Umrah Travels is still a reliable guide for people going on the holy journey of Umrah.
        </p>

        <h3 className="text-2xl font-bold text-noor-green font-display mt-8 mb-4">
          A Spiritual Journey Awaits
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          With its Affordable Umrah Packages 2026, Noor Umrah Travels makes a Umrah 2026 easy. Each package opens the door to a deep and life-changing pilgrimage experience, from personalization to low prices. Noor Umrah Travels is the company to rely on for affordable holiness or spiritual journeys. Consider your Umrah 2026 and let Noor Umrah Travels bring you to spiritual fulfilment.
        </p>
      </div>
    </div>
  </section>
);

// ==================== MAIN PAGE COMPONENT ====================
const PackagesPage: React.FC = () => {
  const { packageType = 'all-luxury' } = useParams<{ packageType?: string }>();
  
  // Get data for current package type
  const packageData = allPackageData[packageType] || allPackageData['all-luxury'];
  const pageTitle = pageTitles[packageType] || 'Umrah Packages';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <PackagesHero title={pageTitle} />

      {/* Package Sections */}
      {packageData.map((category, index) => (
        <PackageCategorySection key={index} category={category} />
      ))}

      {/* Content Section */}
      <ContentSection />
    </div>
  );
};

export default PackagesPage;