import React from 'react';
import { CheckShieldIcon, StarIconSolid, PlaneIcon, ArrowRightIcon, MailIcon } from '../components/icons/Icons';

import madinahMosque from '../assets/images/about/5-2.jpg';
import quranBook from '../assets/images/about/4-2.jpg';
import cityAerial from '../assets/images/about/5-2.jpg';

// ==================== HERO BANNER ====================
const AboutHero: React.FC = () => (
  <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
    {/* Dark green background with dot pattern */}
    <div className="absolute inset-0 bg-noor-green">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4">
      <div className="text-white/60 text-sm mb-6">
        <a href="/" className="hover:text-white transition-colors">Home</a>
        <span className="mx-2">›</span>
        <span className="text-white">About Us</span>
      </div>
      <span className="bg-noor-gold text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
        ABOUT US
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display leading-tight max-w-2xl">
        Haram Umrah Travels
      </h1>
      <p className="text-white/70 mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
        A trusted and reliable Umrah travel agency in the US dedicated to providing seamless, affordable, and spiritually enriching journeys to Makkah.
      </p>
    </div>
  </section>
);

// ==================== YOUR SPIRITUAL JOURNEY ====================
const SpiritualJourney: React.FC = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src={madinahMosque}
            alt="Madinah Mosque"
            className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <span className="text-noor-green font-bold text-sm">US Based</span>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">WELCOME</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-noor-green mt-3 mb-4 sm:mb-6 leading-tight font-display">
            Your Spiritual Journey Starts Here
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-base">
            At Haram Umrah Travels, we understand that Umrah is not just a trip — it is a deeply personal and sacred journey. Our goal is to remove all travel worries so you can focus entirely on your worship, prayers, and spiritual connection.
          </p>
          <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            We proudly serve Muslims across the United States, offering carefully designed Umrah packages that suit individuals, families, and groups, with complete transparency and professional support at every stage.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-noor-green font-display flex items-center">
                3-5<StarIconSolid className="w-4 h-4 sm:w-5 sm:h-5 text-noor-gold ml-1" />
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Hotel Options</p>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-noor-green font-display">7-28</div>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Day Packages</p>
            </div>
            <div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-noor-green font-display">100%</div>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Dedicated Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ==================== US-BASED UMRAH SPECIALISTS ====================
const UmrahSpecialists: React.FC = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">WHO WE ARE</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-noor-green mt-3 mb-4 sm:mb-6 leading-tight font-display">
            US-Based Umrah Specialists
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-base">
            Haram Umrah Travels is a US-based Umrah specialist committed to delivering high-quality pilgrimage services with honesty, care, and attention to detail.
          </p>
          <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-base">
            With in-depth knowledge of Saudi travel regulations, Umrah visa requirements, and accommodation standards, we ensure every pilgrim enjoys a smooth and well-organized experience. From economy Umrah packages to luxury 5-star options, we provide solutions for every budget without compromising on comfort or service quality.
          </p>

          {/* Checklist */}
          <div className="space-y-4">
            {[
              'Expert knowledge of Saudi travel regulations',
              'Umrah visa processing & documentation',
              'Solutions for every budget',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-noor-green/10 flex items-center justify-center flex-shrink-0">
                  <CheckShieldIcon className="w-4 h-4 text-noor-green" />
                </div>
                <span className="text-gray-600 text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image with Quote */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={quranBook}
              alt="Holy Quran"
              className="w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover"
            />
            {/* Quote overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/80 to-transparent p-4 sm:p-6 md:p-8 pt-12 sm:pt-16">
              <p className="text-white font-bold text-sm sm:text-base md:text-lg leading-relaxed">
                "Indeed, the first House [of worship] established for mankind was that at Makkah"
              </p>
              <p className="text-white/60 text-xs sm:text-sm mt-2">— Surah Ali 'Imran 3:96</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ==================== OUR MISSION ====================
const OurMission: React.FC = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div>
          <img
            src={cityAerial}
            alt="Aerial city view"
            className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">OUR PURPOSE</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-noor-green mt-3 mb-4 sm:mb-6 leading-tight font-display">
            Our Mission
          </h2>
          <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            Our mission is to make Umrah accessible, stress-free, and spiritually fulfilling for Muslims across the US. We strive to offer:
          </p>

          {/* Feature Items - Updated to grid layout with responsive gaps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: '💰',
                title: 'Competitive Pricing',
                desc: 'No hidden charges — transparent pricing always',
                color: 'bg-noor-gold/10',
              },
              {
                icon: '🏨',
                title: 'Comfortable Hotels',
                desc: 'Close proximity to Haram for your convenience',
                color: 'bg-noor-green/10',
              },
              {
                icon: '✈️',
                title: 'Reliable Travel',
                desc: 'Well-organized travel arrangements',
                color: 'bg-noor-gold/10',
              },
              {
                icon: '🤝',
                title: 'Friendly Support',
                desc: 'Knowledgeable customer service team',
                color: 'bg-noor-green/10',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 text-lg`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-noor-green text-sm sm:text-base">{item.title}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-6 sm:mt-8 border-l-4 border-noor-gold pl-4">
            <p className="text-gray-500 italic text-sm sm:text-base">
              Every journey we organize is handled with sincerity, respect, and professionalism.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ==================== SERVING PILGRIMS ACROSS US ====================
const ServingPilgrims: React.FC = () => {
  const cities = [
    { name: 'Miami', color: 'text-noor-green' },
    { name: 'New York', color: 'text-noor-gold' },
    { name: 'Chicago', color: 'text-noor-green' },
    { name: 'Los Angeles', color: 'text-noor-gold' },
    { name: 'Dallas', color: 'text-noor-green' },
    { name: 'Washington DC', color: 'text-noor-gold' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div>
            <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">US-WIDE SERVICE</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-noor-green mt-3 mb-4 sm:mb-6 leading-tight font-display">
              Serving Pilgrims Across the US
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-base">
              Haram Umrah Travels proudly serves pilgrims from New York, Houston, Chicago, Los Angeles, Dallas, Washington DC, and other US cities.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              Whether you are traveling alone, with family, or as part of a group, we ensure your Umrah journey is safe, organized, and spiritually rewarding.
            </p>

            {/* Commitment Box */}
            <div className="bg-noor-gold/5 border border-noor-gold/20 rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-noor-gold/20 flex items-center justify-center">
                  <span className="text-noor-gold text-xs">◇</span>
                </div>
                <h4 className="font-bold text-noor-green text-sm sm:text-base">Our Commitment to Quality & Trust</h4>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                We operate with strong Islamic values of trust, honesty, and responsibility. Every package is designed to deliver peace of mind, allowing pilgrims to focus on ibadah while we handle all travel arrangements.
              </p>
            </div>
          </div>

          {/* Cities Grid - Updated with responsive grid and gap classes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {cities.map((city, index) => (
              <div key={index} className="bg-noor-light rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-noor-green/10 rounded-lg flex items-center justify-center">
                  <svg className={`w-5 h-5 sm:w-6 sm:h-6 ${city.color}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7 3.5v7.64l-7 3.5-7-3.5V7.68l7-3.5z" />
                    <path d="M7 9h2v6H7zm4-2h2v8h-2zm4 3h2v5h-2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-noor-green text-sm sm:text-base">
                  {city.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== MAIN ABOUT PAGE ====================
const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <SpiritualJourney />
      <UmrahSpecialists />
      <OurMission />
      <ServingPilgrims />
    </>
  );
};

export default AboutPage;