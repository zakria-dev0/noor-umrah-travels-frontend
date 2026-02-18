// components/sections/WhatsIncluded.tsx
import React from 'react';
import { HotelIcon, CarIcon, VisaIcon, SupportIcon } from '../icons/Icons';

const items = [
  {
    icon: <HotelIcon className="w-6 h-6 sm:w-7 sm:h-7 text-noor-green" />,
    title: 'Hotel Accommodation',
    desc: 'Quality hotels in Makkah & Madinah with breakfast included',
    number: '01',
  },
  {
    icon: <CarIcon className="w-6 h-6 sm:w-7 sm:h-7 text-noor-green" />,
    title: 'Airport Transfers',
    desc: 'Private transfers from Jeddah to Makkah and between cities',
    number: '02',
  },
  {
    icon: <VisaIcon className="w-6 h-6 sm:w-7 sm:h-7 text-noor-green" />,
    title: 'Visa Assistance',
    desc: 'Complete Umrah visa processing and documentation support',
    number: '03',
  },
  {
    icon: <SupportIcon className="w-6 h-6 sm:w-7 sm:h-7 text-noor-green" />,
    title: '24/7 Support',
    desc: 'Dedicated support team available before and during your trip',
    number: '04',
  },
];

const WhatsIncluded: React.FC = () => (
  <section className="py-16 sm:py-20 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-2 text-noor-green text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase bg-noor-green/[0.05] border border-noor-green/10 px-4 py-2 rounded-full mb-4">
          <svg className="w-3.5 h-3.5 text-noor-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          All-Inclusive Packages
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-3">
          <span className="text-noor-green">What's Included in </span>
          <span className="text-noor-gold">Your Package</span>
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
          Everything you need for a peaceful, spiritually-focused journey
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 hover:border-noor-green/20 hover:shadow-xl hover:shadow-noor-green/[0.04] transition-all duration-300 overflow-hidden"
          >
            {/* Number watermark */}
            <span className="absolute -top-4 -right-3 text-[80px] font-bold text-gray-100/80 font-display leading-none select-none pointer-events-none group-hover:text-noor-green/[0.06] transition-colors duration-500">
              {item.number}
            </span>

            {/* Gold top accent bar — appears on hover */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-noor-green via-noor-gold to-noor-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="relative">
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-noor-green/[0.06] flex items-center justify-center mb-5 group-hover:bg-noor-green/[0.1] group-hover:scale-105 transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-noor-green font-bold text-sm sm:text-base mb-2 group-hover:text-noor-gold transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>

            {/* Bottom corner accent */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-noor-gold/[0.03] rounded-tl-[40px] group-hover:bg-noor-gold/[0.06] transition-colors duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatsIncluded;