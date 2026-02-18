// components/sections/AboutSection.tsx
import React from 'react';
import { StarIconSolid, HeadsetIcon, CompassIcon, MailIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <StarIconSolid className="w-5 h-5 text-white" />,
      title: 'Luxury Hotels Near the Haram',
      description: 'Carefully selected 4-star and 5-star hotels within walking distance of Masjid al-Haram and Masjid an-Nabawi.',
      accent: 'bg-noor-gold',
      accentLight: 'bg-noor-gold/10',
    },
    {
      icon: <HeadsetIcon className="w-5 h-5 text-white" />,
      title: '24/7 Dedicated Pilgrim Support',
      description: 'Our experienced support team is available around the clock before, during, and after your Umrah journey.',
      accent: 'bg-noor-green',
      accentLight: 'bg-noor-green/10',
    },
    {
      icon: <CompassIcon className="w-5 h-5 text-white" />,
      title: 'Expert Umrah Guidance',
      description: 'Trusted spiritual and logistical guidance to help you perform your Umrah with confidence and clarity.',
      accent: 'bg-noor-gold',
      accentLight: 'bg-noor-gold/10',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:hidden">
          <span className="inline-flex items-center text-noor-gold text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase bg-noor-gold/[0.06] px-4 py-2 rounded-full border border-noor-gold/10">
            About Us
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="hidden lg:inline-flex items-center text-noor-gold text-xs font-bold tracking-[0.2em] uppercase bg-noor-gold/[0.06] px-4 py-2 rounded-full border border-noor-gold/10 mb-6">
              About Us
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[46px] font-bold text-noor-green mt-4 sm:mt-5 lg:mt-6 mb-5 sm:mb-6 leading-[1.12] font-display tracking-tight">
              Your Trusted US Umrah Travel Partner
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="h-[3px] w-10 rounded-full bg-noor-gold" />
              <div className="h-[3px] w-3 rounded-full bg-noor-gold/40" />
            </div>

            <p className="text-gray-500 leading-relaxed mb-10 sm:mb-12 text-sm sm:text-[15px] lg:text-base">
              We blend spiritual insight with professional travel expertise to deliver a smooth and memorable Umrah journey from the US, focused on comfort and care.
            </p>

            {/* Feature Cards */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border border-transparent hover:border-gray-100 hover:bg-gradient-to-r hover:from-gray-50/80 hover:to-transparent transition-all duration-300 cursor-default"
                >
                  {/* Icon container with layered effect */}
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 ${feature.accentLight} rounded-xl blur-sm scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`relative w-12 h-12 rounded-xl ${feature.accent} flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="pt-0.5">
                    <h3 className="font-bold text-noor-green text-sm sm:text-[15px] mb-1.5 group-hover:tracking-wide transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 sm:mt-12">
              <Link
                to="/contact"
                className="group/btn relative bg-noor-green text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-full inline-flex items-center gap-2.5 text-sm font-semibold hover:bg-[#234d33] transition-all duration-300 hover:shadow-xl hover:shadow-noor-green/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MailIcon className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                Contact Us for Free Quote
                <svg className="w-4 h-4 opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:pl-4">
            {/* Main image container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-noor-green/10">
              <img
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80"
                alt="Pilgrim at mosque"
                className="w-full h-[300px] sm:h-[400px] lg:h-[540px] object-cover"
              />
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-noor-green/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-noor-gold/5 to-transparent" />

              {/* Subtle inner border for depth */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>

            {/* Floating decorative accents */}
            <div className="hidden lg:block absolute -bottom-5 -left-5 w-28 h-28 bg-noor-gold/[0.08] rounded-3xl -z-10" />
            <div className="hidden lg:block absolute -top-5 -right-5 w-24 h-24 bg-noor-green/[0.08] rounded-3xl -z-10" />

            {/* Extra floating dot accents for premium feel */}
            <div className="hidden lg:block absolute -bottom-2 left-16 w-3 h-3 bg-noor-gold/20 rounded-full -z-10" />
            <div className="hidden lg:block absolute top-8 -right-2 w-2 h-2 bg-noor-green/25 rounded-full -z-10" />

            {/* Trust badge overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-lg border border-white/50 inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-noor-gold/10 flex items-center justify-center flex-shrink-0">
                  <StarIconSolid className="w-5 h-5 text-noor-gold" />
                </div>
                <div>
                  <p className="text-noor-green font-bold text-sm leading-tight">Trusted by Pilgrims</p>
                  <p className="text-gray-400 text-xs">Premium Umrah Packages from the US</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;