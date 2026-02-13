import React from 'react';
import { MailIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => (
  <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617182195886-21a605900f11?q=80&w=1170')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 w-full">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 font-display">
          Begin Your Sacred Umrah Journey with Haram Umrah Travels
        </h1>
        <p className="text-white/80 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-2xl">
          Premium Umrah packages from the US, offering luxury hotels near the Haram, seamless visa processing, and expert guidance from an experienced, trusted Umrah travel team.
        </p>
        <Link to="/contact" className="bg-noor-gold text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full flex items-center gap-2 font-semibold hover:bg-[#b89a3e] transition-colors text-base md:text-lg">
          <MailIcon className="w-5 h-5" />
          Contact Us
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;