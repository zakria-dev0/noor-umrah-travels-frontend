import React from 'react';
import { HotelIcon, CarIcon, VisaIcon, SupportIcon } from '../icons/Icons';

const WhatsIncluded: React.FC = () => (
  <section className="py-20 bg-noor-green">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <span className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-[0.15em] uppercase bg-white/10 px-4 py-2 rounded-full mb-4">✓ All-Inclusive Packages</span>
      <h2 className="text-4xl font-bold text-white mb-3 font-display">What's Included in Your Umrah Package</h2>
      <p className="text-white/60 mb-12">Everything you need for a peaceful, spiritually-focused journey</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: <HotelIcon className="w-8 h-8 text-white" />, title: 'Hotel Accommodation', desc: 'Quality hotels in Makkah & Madinah with breakfast included' },
          { icon: <CarIcon className="w-8 h-8 text-white" />, title: 'Airport Transfers', desc: 'Private transfers from Jeddah to Makkah and between cities' },
          { icon: <VisaIcon className="w-8 h-8 text-white" />, title: 'Visa Assistance', desc: 'Complete Umrah visa processing and documentation support' },
          { icon: <SupportIcon className="w-8 h-8 text-white" />, title: '24/7 Support', desc: 'Dedicated support team available before and during your trip' },
        ].map((item, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left hover:bg-white/15 transition-colors">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-white font-bold mb-2">{item.title}</h3>
            <p className="text-white/60 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatsIncluded;