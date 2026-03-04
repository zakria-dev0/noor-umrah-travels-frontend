 // components/sections/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from '../icons/Icons';

const heroImages = [
  'https://images.unsplash.com/photo-1617182195886-21a605900f11?q=80&w=1920',
  'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1920',
  'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=1920',
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[550px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Slides with Ken Burns effect */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: currentSlide === index ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url('${img}')`,
              animation: currentSlide === index ? 'kenBurns 6s ease-in-out forwards' : 'none',
            }}
          />
        </div>
      ))}

      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-noor-gold via-noor-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-24 w-full">
        <div className="max-w-2xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] text-white text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-noor-gold opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-noor-gold" />
            </span>
            Trusted US-Based Umrah Specialists
          </div>

          {/* Headline */}
          <h1 className="text-[32px] sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.08] mb-5 sm:mb-6 font-display">
            Your Sacred
            <span className="block text-noor-gold mt-1 sm:mt-2">Umrah Journey</span>
            <span className="block mt-1 sm:mt-2">Starts Here</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/60 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed max-w-lg">
            Premium Umrah packages from major US cities. Luxury hotels steps from the Haram, seamless visa processing, and dedicated guidance every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/packages"
              className="group bg-noor-gold text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-[#b89a3e] transition-all text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-lg shadow-noor-gold/20 hover:shadow-xl hover:shadow-noor-gold/30 hover:-translate-y-0.5"
            >
              Explore Packages
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <a
              href="tel:+1 786 9104615"
              className="bg-white/[0.08] backdrop-blur-md border border-white/[0.15] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold hover:bg-white/15 transition-all text-sm sm:text-base inline-flex items-center justify-center gap-2.5"
            >
              <PhoneIcon className="w-4 h-4 text-noor-gold" />
              +1 786 9104615
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              currentSlide === index
                ? 'w-8 h-1.5 bg-noor-gold'
                : 'w-4 h-1.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Stats - Desktop Only */}
      <div className="hidden lg:block absolute bottom-10 right-8 xl:right-16 z-10">
        <div className="bg-white/[0.07] backdrop-blur-xl border border-white/[0.1] rounded-2xl p-5 text-white min-w-[320px]">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { value: '10K+', label: 'Happy Pilgrims' },
              { value: '15+', label: 'Years Experience' },
              { value: '4.9', label: 'Star Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <p className="text-xl font-bold text-noor-gold font-display">{stat.value}</p>
                <p className="text-[10px] text-white/50 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;