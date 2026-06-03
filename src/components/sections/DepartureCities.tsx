// components/sections/DepartureCities.tsx
import React, { useState } from 'react';
import { PhoneIcon } from '../icons/Icons';
import { useNavigate } from 'react-router-dom';

const DepartureCities: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cities = [
    {
      name: 'Miami',
      subtitle: 'Direct flights from Miami International Airport',
      popular: true,
      image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=600&q=80',
    },
    {
      name: 'New York',
      subtitle: 'JFK & Newark departures available',
      popular: false,
      image: 'https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=600&q=80',
    },
    {
      name: 'Chicago',
      subtitle: "Midwest's premier gateway",
      popular: false,
      image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80',
    },
    {
      name: 'Los Angeles',
      subtitle: 'West Coast departure point',
      popular: false,
      image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&q=80',
    },
    {
      name: 'Dallas',
      subtitle: 'South Central connections',
      popular: false,
      image: 'https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=600&q=80',
    },
    {
      name: 'Washington DC',
      subtitle: 'East Coast departure options',
      popular: false,
      image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=600&q=80',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Premium Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-noor-gold"></span>
            <span className="text-noor-gold text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase">
              {/* US Departure Cities */}
              Cheap Umrah Package from USA Cities
            </span>
            <span className="w-6 h-px bg-noor-gold"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-[1.15] tracking-tight mb-4">
            <span className="text-noor-green">
              {/* Umrah Packages */}
              Perfect Balance of Comfort,
              </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-gray-900">
              {/* from Major US Cities */}
              Quality, and Value for Pilgrims
              </span>
          </h2>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-noor-green/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-noor-gold"></div>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-noor-green/40"></div>
          </div>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed text-xs sm:text-sm max-w-xl mx-auto mb-6">
            {/* Start your sacred journey from your nearest US airport with comprehensive packages including flights, visa, hotels, and dedicated support. */}
            Haram Umrah Travels makes it easy to plan your <b>Umrah package from USA</b>. Our services are reliable, cheap, and comfortable travel solutions for every pilgrim. Our expert team makes sure you have a smooth journey from your nearest US airport, so that you can concentrate on your spiritual experience with complete peace of mind and convenience from start to finish. 
          </p>
          <ul className="text-gray-500 text-left inline-block mb-6">
            <li>• Flights from major US cities</li>
            <li>• Fast and reliable visa processing</li>
            <li>• Hotels close to Haram</li>
            <li>• Comfortable transport arrangements</li>
            <li>• Flexible travel dates</li>
            <li>• Expert customer support</li>
          </ul>
          <br/>

          {/* Contact CTA */}
          <button
            onClick={() => navigate('/contact')}
            className="group inline-flex items-center gap-2.5 bg-noor-green/[0.06] hover:bg-noor-green/[0.1] border border-noor-green/10 hover:border-noor-green/20 text-gray-700 px-4 py-2 rounded-full transition-all duration-300"
          >
            <span className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow group-hover:border-noor-gold/30 transition-all">
              <PhoneIcon className="w-3.5 h-3.5 text-noor-gold" />
            </span>
            <span className="flex flex-col items-start text-left">
              <span className="text-[9px] sm:text-[10px] text-gray-400 leading-tight">Can't find your city?</span>
              <span className="text-[11px] sm:text-xs font-semibold text-noor-green leading-tight">Call Now!</span>
            </span>
            <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-noor-green group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
          {/* Featured Card - Miami */}
          <div
            className="lg:col-span-7 lg:row-span-2 relative group cursor-pointer"
            onClick={() => navigate('/packages')}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative h-64 sm:h-72 lg:h-full lg:min-h-[460px] rounded-2xl overflow-hidden">
              <img
                src={cities[0].image}
                alt={cities[0].name}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Popular Badge */}
              <div className="absolute top-4 sm:top-5 left-4 sm:left-5 flex items-center gap-3">
                <span className="bg-noor-gold text-white text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full tracking-wider flex items-center gap-1 shadow-lg">
                  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  MOST POPULAR
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-1.5 text-white/60 text-[10px] sm:text-xs mb-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {cities[0].subtitle}
                </div>

                <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl font-display mb-3 sm:mb-4">
                  Umrah from {cities[0].name}
                </h3>

                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5 bg-white text-gray-900 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full group-hover:bg-noor-gold group-hover:text-white transition-all duration-300">
                    View Packages
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side cards */}
          {cities.slice(1, 3).map((city, idx) => (
            <div
              key={idx + 1}
              className="lg:col-span-5 relative group cursor-pointer"
              onClick={() => navigate('/packages')}
              onMouseEnter={() => setHoveredIndex(idx + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 sm:h-52 lg:h-[222px] rounded-2xl overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    hoveredIndex === idx + 1 ? 'scale-110' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <p className="text-white/50 text-[10px] sm:text-xs mb-0.5">{city.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-base sm:text-lg font-display">
                      Umrah from {city.name}
                    </h3>
                    <div className={`w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === idx + 1 ? 'bg-noor-gold scale-110' : ''
                    }`}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom row - 3 cards */}
          {cities.slice(3).map((city, idx) => (
            <div
              key={idx + 3}
              className="lg:col-span-4 relative group cursor-pointer"
              onClick={() => navigate('/packages')}
              onMouseEnter={() => setHoveredIndex(idx + 3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-44 sm:h-48 lg:h-[190px] rounded-2xl overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                    hoveredIndex === idx + 3 ? 'scale-110' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                  hoveredIndex === idx + 3 ? 'border-noor-gold/50' : 'border-transparent'
                }`} />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4">
                  <p className="text-white/50 text-[9px] sm:text-[10px] mb-0.5">{city.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-sm sm:text-base font-display">
                      Umrah from {city.name}
                    </h3>
                    <div className={`w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === idx + 3 ? 'bg-noor-gold scale-110' : ''
                    }`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden text-center mt-8 sm:mt-10">
          <button
            onClick={() => navigate('/packages')}
            className="inline-flex items-center gap-1.5 bg-noor-green text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full hover:bg-noor-green/90 transition-all shadow-lg shadow-noor-green/20"
          >
            View All Packages
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DepartureCities;