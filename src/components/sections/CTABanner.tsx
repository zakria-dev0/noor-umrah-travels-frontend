// components/sections/CTABanner.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from '../icons/Icons';

const CTABanner: React.FC = () => (
  <section className="relative py-16 md:py-24 overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617182195886-21a605900f11?q=80&w=1920')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-noor-green/95 to-noor-green/80" />
    
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-4 leading-tight">
        Ready to Begin Your
        <span className="text-noor-gold block sm:inline"> Sacred Journey?</span>
      </h2>
      <p className="text-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto">
        Speak with our Umrah specialists today. We'll help you find the perfect package for your family, budget, and schedule.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/contact"
          className="bg-noor-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b89a3e] transition-all text-base inline-flex items-center justify-center gap-2 shadow-lg"
        >
          Get Your Free Quote
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        
        <a
          href="tel:+13057768923"
          className="bg-white/10 backdrop-blur-sm border border-white/25 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all text-base inline-flex items-center justify-center gap-2"
        >
          <PhoneIcon className="w-4 h-4 text-noor-gold" />
          Call Now: +1 (305) 776-8923
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;