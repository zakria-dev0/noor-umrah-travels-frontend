// about page
import React from 'react';
import { CheckShieldIcon, StarIconSolid, PlaneIcon, ArrowRightIcon, MailIcon } from '../components/icons/Icons';

import madinahMosque from '../assets/images/about/5-2.jpg';
import quranBook from '../assets/images/packages/5-3_files/imp-5.webp';
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


// // AboutPage.tsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import aboutImage1 from '../assets/images/packages/5-3_files/imp-2.webp';
// import aboutImage2 from '../assets/images/packages/5-3_files/5-star-6955351e629b5.jpg';

// // Working Kaaba/Haram Image URLs
// const KAABA_IMAGE_1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Kaaba_at_night.jpg/1280px-Kaaba_at_night.jpg";
// const KAABA_IMAGE_2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Masjid_al-Haram%2C_Mecca%2C_Saudi_Arabia.jpg/1280px-Masjid_al-Haram%2C_Mecca%2C_Saudi_Arabia.jpg";
// const KAABA_IMAGE_3 = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Kaaba_Mirror_like_effect.jpg/1280px-Kaaba_Mirror_like_effect.jpg";

// // ==================== HERO SECTION ====================
// const AboutHero: React.FC = () => (
//   <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 items-start">
        
//         {/* Left Column - Content */}
//         <div className="lg:col-span-4 order-1">
//           <span className="text-noor-gold font-semibold text-xs sm:text-sm tracking-wide uppercase">About Us</span>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-bold text-gray-900 font-display leading-[1.15] mt-3 sm:mt-4 mb-6 sm:mb-8">
//             Why Choose Us
//             <span className="text-noor-green block mt-1">for Your Sacred</span>
//             <span className="text-noor-green">Journey?</span>
//           </h1>

//           {/* Features List */}
//           <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
//             {[
//               { icon: '🕐', text: '15+ Years of Experience' },
//               { icon: '✓', text: 'Officially Licensed & Trusted' },
//               { icon: '👤', text: 'Expert Mutawwif & Guides' },
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-3 sm:gap-4">
//                 <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-noor-green/10 flex items-center justify-center flex-shrink-0">
//                   <span className="text-noor-green text-xs sm:text-sm">{item.icon}</span>
//                 </div>
//                 <span className="text-gray-700 font-medium text-sm sm:text-base">{item.text}</span>
//               </div>
//             ))}
//           </div>

//           {/* CTA Card */}
//           <div className="bg-noor-green rounded-2xl p-5 sm:p-6 relative overflow-hidden">
//             <div className="absolute inset-0 opacity-10">
//               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                 <path d="M0 100 Q 50 0 100 100" fill="none" stroke="white" strokeWidth="0.5"/>
//                 <path d="M0 80 Q 50 20 100 80" fill="none" stroke="white" strokeWidth="0.5"/>
//               </svg>
//             </div>
//             <div className="relative z-10">
//               <h3 className="text-white text-lg sm:text-xl font-bold mb-2">Ready to explore the world</h3>
//               <Link 
//                 to="/packages" 
//                 className="inline-flex items-center gap-3 text-white font-semibold mt-2 group"
//               >
//                 <span className="text-sm sm:text-base">Read More</span>
//                 <div className="w-9 h-9 sm:w-10 sm:h-10 bg-noor-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
//                   <svg className="w-4 h-4 sm:w-5 sm:h-5 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Middle Column - Main Image */}
//         <div className="lg:col-span-4 order-2">
//           <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-[280px] sm:h-[350px] md:h-[420px] lg:h-[520px] shadow-xl bg-noor-green/10">
//             <img 
//               src={KAABA_IMAGE_1}
//               alt="Kaaba Makkah" 
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 const target = e.target as HTMLImageElement;
//                 target.src = aboutImage1;
//               }}
//             />
//           </div>
//         </div>

//         {/* Right Column - Image + Stats */}
//         <div className="lg:col-span-4 space-y-4 sm:space-y-6 order-3">
//           {/* Second Image */}
//           <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[180px] sm:h-[200px] md:h-[220px] group bg-noor-green/10">
//             <img 
//               src={KAABA_IMAGE_2}
//               alt="Pilgrims at Kaaba"
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               onError={(e) => {
//                 const target = e.target as HTMLImageElement;
//                 target.src = aboutImage2;
//               }}
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
//               <span className="text-noor-green text-xs font-semibold">🕋 Masjid al-Haram</span>
//             </div>
//           </div>

//           {/* Stats Card */}
//           <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm">
//             <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-display mb-5 sm:mb-6">
//               Gateway to a Blessed Journey
//             </h3>
            
//             <div className="space-y-4 sm:space-y-5">
//               <div>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-gray-600 font-medium text-sm sm:text-base">Customer Satisfaction</span>
//                   <span className="bg-noor-gold text-white text-xs font-bold px-2 sm:px-2.5 py-1 rounded-full">95%</span>
//                 </div>
//                 <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                   <div className="h-full bg-noor-gold rounded-full" style={{ width: '95%' }} />
//                 </div>
//               </div>
              
//               <div>
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-gray-600 font-medium text-sm sm:text-base">Successful Pilgrimages</span>
//                   <span className="bg-noor-green text-white text-xs font-bold px-2 sm:px-2.5 py-1 rounded-full">98%</span>
//                 </div>
//                 <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
//                   <div className="h-full bg-noor-green rounded-full" style={{ width: '98%' }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   </section>
// );

// // ==================== TABBED WHY CHOOSE US ====================
// const WhyChooseSection: React.FC = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     {
//       label: 'Trusted Guidance',
//       title: 'Our Promise to Pilgrims',
//       image: aboutImage1,
//       points: [
//         'Personalized service tailored to your needs',
//         'Comfortable and reliable accommodations',
//         'Step-by-step assistance throughout',
//         'A journey centered on your spiritual growth',
//       ],
//     },
//     {
//       label: 'Seamless Planning',
//       title: 'Our Commitment to Planning',
//       image: aboutImage2,
//       points: [
//         'Clear and well-structured itinerary',
//         'Stress-free travel arrangements',
//         'Flexible scheduling options',
//         'Smooth coordination throughout',
//       ],
//     },
//     {
//       label: 'Dedicated Support',
//       title: 'Our Promise of Support',
//       image: aboutImage1,
//       points: [
//         'Assistance at every stage',
//         'Quick and reliable communication',
//         'Guidance with visa and documents',
//         'Always here when you need us',
//       ],
//     },
//   ];

//   return (
//     <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#fafafa]">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          
//           {/* Left Content */}
//           <div className="order-2 lg:order-1">
//             <span className="text-noor-gold font-semibold text-xs sm:text-sm tracking-wide uppercase">About Us</span>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-gray-900 font-display leading-[1.15] mt-3 sm:mt-4 mb-6 sm:mb-8">
//               Why Choose Us
//               <span className="text-noor-green block mt-1">for Your Sacred Journey?</span>
//             </h2>

//             {/* Tabs */}
//             <div className="flex gap-2 sm:gap-3 mb-5 sm:mb-6 overflow-x-auto pb-2 scrollbar-hide">
//               {tabs.map((tab, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveTab(i)}
//                   className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
//                     activeTab === i
//                       ? 'bg-noor-gold text-white shadow-lg shadow-noor-gold/25'
//                       : 'bg-white text-gray-700 border border-gray-200 hover:border-noor-gold/50'
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>

//             <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
//               Experienced mentors to guide you through every step of your pilgrimage.
//             </p>

//             {/* Tab Content */}
//             <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100">
//               <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
//                 {tabs[activeTab].title}
//               </h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-4">
//                 <div className="rounded-xl sm:rounded-2xl overflow-hidden h-[140px] sm:h-[160px] md:h-[180px] bg-noor-green/10">
//                   <img 
//                     src={tabs[activeTab].image} 
//                     alt={tabs[activeTab].title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <div className="space-y-2 sm:space-y-3">
//                   {tabs[activeTab].points.map((point, i) => (
//                     <div key={i} className="flex items-start gap-2 sm:gap-3">
//                       <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-noor-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <span className="text-gray-600 text-xs sm:text-sm">{point}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="relative order-1 lg:order-2">
//             <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] bg-noor-green/10">
//               <img 
//                 src={KAABA_IMAGE_3}
//                 alt="Kaaba"
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   const target = e.target as HTMLImageElement;
//                   target.src = aboutImage1;
//                 }}
//               />
//             </div>
//             <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full border-2 border-noor-gold/30 rounded-3xl -z-10" />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== TESTIMONIALS SECTION ====================
// const TestimonialsSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const testimonials = [
//     {
//       name: 'Ahmed Al-Rashid',
//       role: 'Umrah Pilgrim',
//       avatar: 'AR',
//       text: 'Haram Umrah Travels made our family\'s first Umrah unforgettable. Every detail was perfectly arranged, from flights to hotels near the Haram. Their 24/7 support gave us complete peace of mind.',
//       rating: 5,
//     },
//     {
//       name: 'Fatima Hassan',
//       role: 'Umrah Pilgrim',
//       avatar: 'FH',
//       text: 'I was nervous about traveling alone for Umrah, but the team at Haram Umrah Travels took care of everything. The hotel was walking distance from Masjid al-Haram. Highly recommend!',
//       rating: 5,
//     },
//     {
//       name: 'Omar Siddiqui',
//       role: 'Umrah Pilgrim',
//       avatar: 'OS',
//       text: 'Third time booking with them and they never disappoint. Professional service, great prices, and they truly understand the spiritual importance of this journey.',
//       rating: 5,
//     },
//   ];

//   return (
//     <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
//       {/* Background - Using local image as fallback */}
//       <div className="absolute inset-0 bg-noor-green">
//         <img 
//           src={KAABA_IMAGE_1}
//           alt="Background"
//           className="w-full h-full object-cover opacity-30"
//           onError={(e) => {
//             const target = e.target as HTMLImageElement;
//             target.style.display = 'none';
//           }}
//         />
//         <div className="absolute inset-0 bg-noor-green/80" />
//       </div>

//       {/* Decorative Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div 
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0L35 10L30 20L25 10L30 0ZM15 15L20 25L15 35L10 25L15 15ZM45 15L50 25L45 35L40 25L45 15ZM30 30L35 40L30 50L25 40L30 30Z'/%3E%3C/g%3E%3C/svg%3E")`,
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4">
        
//         {/* Section Header */}
//         <div className="text-center mb-8 sm:mb-12 md:mb-16">
//           <span className="text-noor-gold font-semibold text-xs sm:text-sm tracking-wide uppercase">Testimonials</span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white font-display leading-[1.1] mt-3 sm:mt-4">
//             Voices of Our Pilgrims
//           </h2>
//           <p className="text-white/70 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
//             Discover the experiences of pilgrims who have entrusted us with their sacred journey.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          
//           {/* Left Content - Testimonial Card */}
//           <div>
//             <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-2xl relative">
//               {/* Quote Icon */}
//               <div className="absolute -top-3 sm:-top-4 right-6 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 bg-noor-gold/10 rounded-full flex items-center justify-center">
//                 <svg className="w-6 h-6 sm:w-8 sm:h-8 text-noor-gold" fill="currentColor" viewBox="0 0 24 24">
//                   <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
//                 </svg>
//               </div>

//               {/* Rating */}
//               <div className="flex gap-1 mb-3 sm:mb-4">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-noor-gold fill-current" viewBox="0 0 20 20">
//                     <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
//                   </svg>
//                 ))}
//               </div>

//               {/* Author */}
//               <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-noor-green rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
//                   {testimonials[activeIndex].avatar}
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonials[activeIndex].name}</p>
//                   <p className="text-gray-500 text-xs sm:text-sm">{testimonials[activeIndex].role}</p>
//                 </div>
//               </div>

//               {/* Text */}
//               <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                 {testimonials[activeIndex].text}
//               </p>

//               {/* Dots */}
//               <div className="flex gap-2 mt-5 sm:mt-6">
//                 {testimonials.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setActiveIndex(i)}
//                     className={`h-2.5 sm:h-3 rounded-full transition-all ${
//                       activeIndex === i ? 'bg-noor-gold w-6 sm:w-8' : 'bg-gray-200 hover:bg-gray-300 w-2.5 sm:w-3'
//                     }`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Stats & Images */}
//           <div className="text-center lg:text-right">
//             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mb-6 sm:mb-8">
//               Over <span className="text-noor-gold">10,000+</span> Happy Customers
//             </h3>

//             {/* Image Grid - Using local images */}
//             <div className="flex flex-row lg:flex-col gap-3 sm:gap-4 justify-center lg:items-end">
//               <div className="rounded-xl sm:rounded-2xl overflow-hidden w-[140px] sm:w-[200px] lg:w-[280px] h-28 sm:h-36 lg:h-44 shadow-xl bg-white/10">
//                 <img 
//                   src={aboutImage1}
//                   alt="Kaaba"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="rounded-xl sm:rounded-2xl overflow-hidden w-[120px] sm:w-[160px] lg:w-[220px] h-24 sm:h-28 lg:h-36 shadow-xl bg-white/10">
//                 <img 
//                   src={aboutImage2}
//                   alt="Mecca"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== CITIES SECTION ====================
// const CitiesSection: React.FC = () => {
//   const cities = [
//     { name: 'New York', code: 'JFK' },
//     { name: 'Los Angeles', code: 'LAX' },
//     { name: 'Chicago', code: 'ORD' },
//     { name: 'Houston', code: 'IAH' },
//     { name: 'Miami', code: 'MIA' },
//     { name: 'Dallas', code: 'DFW' },
//     { name: 'Washington', code: 'IAD' },
//     { name: 'Atlanta', code: 'ATL' },
//   ];

//   return (
//     <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-8 sm:mb-10 md:mb-12">
//           <span className="text-noor-gold font-semibold text-xs sm:text-sm tracking-wide uppercase">Departures</span>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-display mt-3 mb-3 sm:mb-4">
//             Fly From <span className="text-noor-green">Any US City</span>
//           </h2>
//           <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
//             We serve pilgrims departing from all major US airports with convenient flight options.
//           </p>
//         </div>

//         {/* Cities Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
//           {cities.map((city, i) => (
//             <div
//               key={i}
//               className="group bg-[#fafafa] hover:bg-noor-green border border-gray-100 hover:border-noor-green rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center transition-all duration-300 cursor-default shadow-sm hover:shadow-xl"
//             >
//               <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 bg-noor-green/10 group-hover:bg-white/20 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors">
//                 <svg className="w-5 h-5 sm:w-6 sm:h-6 text-noor-green group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//                 </svg>
//               </div>
//               <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors text-sm sm:text-base">{city.name}</h4>
//               <p className="text-xs text-gray-400 group-hover:text-white/60 mt-0.5 sm:mt-1 transition-colors">{city.code}</p>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">Don't see your city? We can arrange departures from any US airport.</p>
//           <Link
//             to="/contact"
//             className="inline-flex items-center gap-2 bg-noor-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-noor-green/90 transition-colors shadow-lg shadow-noor-green/25"
//           >
//             Contact Us
//             <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== MAIN ABOUT PAGE ====================
// const AboutPage: React.FC = () => {
//   return (
//     <>
//       <AboutHero />
//       <WhyChooseSection />
//       <TestimonialsSection />
//       <CitiesSection />
//     </>
//   );
// };

// export default AboutPage;