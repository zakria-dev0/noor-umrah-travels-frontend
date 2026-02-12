// // AboutPage.tsx
// import React from 'react';
// import { CheckShieldIcon, StarIconSolid, PlaneIcon, ArrowRightIcon, MailIcon } from '../components/icons/Icons';

// import madinahMosque from '../assets/images/about/5-2.jpg';
// import quranBook from '../assets/images/about/4-2.jpg';
// import cityAerial from '../assets/images/about/5-2.jpg';

// // ==================== HERO BANNER ====================
// const AboutHero: React.FC = () => (
//   <section className="relative py-20 overflow-hidden">
//     {/* Dark green background with dot pattern */}
//     <div className="absolute inset-0 bg-noor-green">
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
//           backgroundSize: '20px 20px',
//         }}
//       />
//     </div>
//     <div className="relative z-10 max-w-7xl mx-auto px-4">
//       <div className="text-white/60 text-sm mb-6">
//         <a href="/" className="hover:text-white transition-colors">Home</a>
//         <span className="mx-2">›</span>
//         <span className="text-white">About US</span>
//       </div>
//       <span className="bg-noor-gold text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
//         ABOUT US
//       </span>
//       <h1 className="text-4xl lg:text-5xl font-bold text-white font-display leading-tight max-w-2xl">
//         Noor Umrah Travels US
//       </h1>
//       <p className="text-white/70 mt-4 max-w-2xl text-lg leading-relaxed">
//         A trUSted and reliable Umrah travel agency in the US dedicated to providing seamless, affordable, and spiritually enriching journeys to Makkah and Madinah.
//       </p>
//     </div>
//   </section>
// );

// // ==================== YOUR SPIRITUAL JOURNEY ====================
// const SpiritualJourney: React.FC = () => (
//   <section className="py-20 bg-white">
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* Image */}
//         <div className="relative">
//           <img
//             src={madinahMosque}
//             alt="Madinah Mosque"
//             className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
//           />
//           <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
//             <span className="text-noor-green font-bold text-sm">US Based</span>
//           </div>
//         </div>

//         {/* Content */}
//         <div>
//           <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">WELCOME</span>
//           <h2 className="text-4xl font-bold text-noor-green mt-3 mb-6 leading-tight font-display">
//             Your Spiritual Journey Starts Here
//           </h2>
//           <p className="text-gray-500 leading-relaxed mb-4">
//             At Noor Umrah Travels, we understand that Umrah is not jUSt a trip — it is a deeply personal and sacred journey. Our goal is to remove all travel worries so you can focUS entirely on your worship, prayers, and spiritual connection.
//           </p>
//           <p className="text-gray-500 leading-relaxed mb-8">
//             We proudly serve MUSlims across the United Kingdom, offering carefully designed Umrah packages from the US that suit individuals, families, and groups, with complete transparency and professional support at every stage.
//           </p>

//           {/* Stats */}
//           <div className="grid grid-cols-3 gap-6">
//             <div>
//               <div className="text-3xl font-bold text-noor-green font-display flex items-center">
//                 3-5<StarIconSolid className="w-5 h-5 text-noor-gold ml-1" />
//               </div>
//               <p className="text-gray-400 text-sm mt-1">Hotel Options</p>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-noor-green font-display">7-28</div>
//               <p className="text-gray-400 text-sm mt-1">Day Packages</p>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-noor-green font-display">100%</div>
//               <p className="text-gray-400 text-sm mt-1">Dedicated Support</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // ==================== US-BASED UMRAH SPECIALISTS ====================
// const UmrahSpecialists: React.FC = () => (
//   <section className="py-20 bg-white">
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* Content */}
//         <div>
//           <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">WHO WE ARE</span>
//           <h2 className="text-4xl font-bold text-noor-green mt-3 mb-6 leading-tight font-display">
//             US-Based Umrah Specialists
//           </h2>
//           <p className="text-gray-500 leading-relaxed mb-4">
//             Noor Umrah Travels is a US-based Umrah specialist committed to delivering high-quality pilgrimage services with honesty, care, and attention to detail.
//           </p>
//           <p className="text-gray-500 leading-relaxed mb-6">
//             With in-depth knowledge of Saudi travel regulations, Umrah visa requirements, and accommodation standards, we ensure every pilgrim enjoys a smooth and well-organised experience. From economy Umrah packages to luxury 5-star options, we provide solutions for every budget without compromising on comfort or service quality.
//           </p>

//           {/* Checklist */}
//           <div className="space-y-4">
//             {[
//               'Expert knowledge of Saudi travel regulations',
//               'Umrah visa processing & documentation',
//               'Solutions for every budget',
//             ].map((item, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 <div className="w-6 h-6 rounded-full bg-noor-green/10 flex items-center jUStify-center flex-shrink-0">
//                   <CheckShieldIcon className="w-4 h-4 text-noor-green" />
//                 </div>
//                 <span className="text-gray-600 text-sm">{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Image with Quote */}
//         <div className="relative">
//           <div className="rounded-2xl overflow-hidden shadow-xl">
//             <img
//               src={quranBook}
//               alt="Holy Quran"
//               className="w-full h-[450px] object-cover"
//             />
//             {/* Quote overlay at bottom */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/80 to-transparent p-8 pt-16">
//               <p className="text-white font-bold text-lg leading-relaxed">
//                 "Indeed, the first HoUSe [of worship] established for mankind was that at Makkah"
//               </p>
//               <p className="text-white/60 text-sm mt-2">— Surah Ali 'Imran 3:96</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // ==================== OUR MISSION ====================
// const OurMission: React.FC = () => (
//   <section className="py-20 bg-white">
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* Image */}
//         <div>
//           <img
//             src={cityAerial}
//             alt="Aerial city view"
//             className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div>
//           <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">OUR PURPOSE</span>
//           <h2 className="text-4xl font-bold text-noor-green mt-3 mb-6 leading-tight font-display">
//             Our Mission
//           </h2>
//           <p className="text-gray-500 leading-relaxed mb-8">
//             Our mission is to make Umrah accessible, stress-free, and spiritually fulfilling for MUSlims across the US. We strive to offer:
//           </p>

//           {/* Feature Items */}
//           <div className="space-y-6">
//             {[
//               {
//                 icon: '💰',
//                 title: 'Competitive Pricing',
//                 desc: 'No hidden charges — transparent pricing always',
//                 color: 'bg-noor-gold/10',
//               },
//               {
//                 icon: '🏨',
//                 title: 'Comfortable Hotels',
//                 desc: 'Close proximity to Haram for your convenience',
//                 color: 'bg-noor-green/10',
//               },
//               {
//                 icon: '✈️',
//                 title: 'Reliable Travel',
//                 desc: 'Well-organised travel arrangements',
//                 color: 'bg-noor-gold/10',
//               },
//               {
//                 icon: '🤝',
//                 title: 'Friendly Support',
//                 desc: 'Knowledgeable cUStomer service team',
//                 color: 'bg-noor-green/10',
//               },
//             ].map((item, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center jUStify-center flex-shrink-0 text-lg`}>
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-noor-green">{item.title}</h4>
//                   <p className="text-gray-500 text-sm">{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Quote */}
//           <div className="mt-8 border-l-4 border-noor-gold pl-4">
//             <p className="text-gray-500 italic">
//               Every journey we organise is handled with sincerity, respect, and professionalism.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// // ==================== WHY CHOOSE NOOR UMRAH TRAVELS ====================
// const WhyChooseNoor: React.FC = () => (
//   <section className="py-20 relative overflow-hidden">
//     {/* Dark green background with dot pattern */}
//     <div className="absolute inset-0 bg-noor-green">
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
//           backgroundSize: '20px 20px',
//         }}
//       />
//     </div>

//     <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
//       <span className="bg-noor-gold/20 text-noor-gold text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
//         WHY CHOOSE US
//       </span>
//       <h2 className="text-4xl font-bold text-white mb-4 font-display">
//         Why Choose Noor Umrah Travels
//       </h2>
//       <p className="text-white/60 max-w-xl mx-auto mb-12">
//         We specialise exclUSively in Umrah travel, allowing US to deliver well-planned packages that meet the expectations of US pilgrims
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         {[
//           {
//             icon: <CheckShieldIcon className="w-6 h-6 text-noor-gold" />,
//             title: 'TrUSted Experts',
//             desc: 'We specialise exclUSively in Umrah travel with deep knowledge of Saudi regulations.',
//           },
//           {
//             icon: (
//               <svg className="w-6 h-6 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
//               </svg>
//             ),
//             title: 'Tailored Packages',
//             desc: '3-star, 4-star, and 5-star options with 7, 10, 14, 21, and 28 day durations.',
//           },
//           {
//             icon: (
//               <svg className="w-6 h-6 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
//               </svg>
//             ),
//             title: 'Complete Services',
//             desc: 'Flights, visa processing, hotels, transfers, and optional ziyarat tours included.',
//           },
//           {
//             icon: (
//               <svg className="w-6 h-6 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//               </svg>
//             ),
//             title: 'CUStomer-FocUSed',
//             desc: 'Clear guidance before departure and ongoing support throughout your journey.',
//           },
//         ].map((item, index) => (
//           <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left hover:bg-white/15 transition-colors">
//             <div className="w-10 h-10 bg-noor-gold/20 rounded-lg flex items-center jUStify-center mb-4">
//               {item.icon}
//             </div>
//             <h3 className="text-white font-bold mb-2">{item.title}</h3>
//             <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // ==================== SERVING PILGRIMS ACROSS US ====================
// const ServingPilgrims: React.FC = () => {
//   const cities = [
//     { name: 'London', color: 'text-noor-green' },
//     { name: 'Birmingham', color: 'text-noor-gold' },
//     { name: 'Manchester', color: 'text-noor-green' },
//     { name: 'Bradford', color: 'text-noor-gold' },
//     { name: 'Glasgow', color: 'text-noor-green' },
//     { name: '& More', color: 'text-noor-gold', isDots: true },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//           {/* Content */}
//           <div>
//             <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">US-WIDE SERVICE</span>
//             <h2 className="text-4xl font-bold text-noor-green mt-3 mb-6 leading-tight font-display">
//               Serving Pilgrims Across the US
//             </h2>
//             <p className="text-gray-500 leading-relaxed mb-4">
//               Noor Umrah Travels proudly serves pilgrims from London, Birmingham, Manchester, Bradford, Glasgow, and other US cities.
//             </p>
//             <p className="text-gray-500 leading-relaxed mb-8">
//               Whether you are travelling alone, with family, or as part of a group, we ensure your Umrah journey is safe, organised, and spiritually rewarding.
//             </p>

//             {/* Commitment Box */}
//             <div className="bg-noor-gold/5 border border-noor-gold/20 rounded-2xl p-6">
//               <div className="flex items-center gap-2 mb-3">
//                 <div className="w-6 h-6 rounded-full bg-noor-gold/20 flex items-center jUStify-center">
//                   <span className="text-noor-gold text-xs">◇</span>
//                 </div>
//                 <h4 className="font-bold text-noor-green">Our Commitment to Quality & TrUSt</h4>
//               </div>
//               <p className="text-gray-500 text-sm leading-relaxed">
//                 We operate with strong Islamic values of trUSt, honesty, and responsibility. Every package is designed to deliver peace of mind, allowing pilgrims to focUS on ibadah while we handle all travel arrangements.
//               </p>
//             </div>
//           </div>

//           {/* Cities Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             {cities.map((city, index) => (
//               <div key={index} className="bg-noor-light rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
//                 <div className={`w-12 h-12 mx-auto mb-3 ${city.isDots ? '' : 'bg-noor-green/10'} rounded-lg flex items-center jUStify-center`}>
//                   {city.isDots ? (
//                     <span className="text-noor-gold text-2xl font-bold">•••</span>
//                   ) : (
//                     <svg className={`w-6 h-6 ${city.color}`} fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7 3.5v7.64l-7 3.5-7-3.5V7.68l7-3.5z" />
//                       <path d="M7 9h2v6H7zm4-2h2v8h-2zm4 3h2v5h-2z" />
//                     </svg>
//                   )}
//                 </div>
//                 <h4 className={`font-bold ${city.isDots ? 'text-noor-gold' : 'text-noor-green'}`}>
//                   {city.name}
//                 </h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== BEGIN YOUR JOURNEY CTA ====================
// const BeginJourneyCTA: React.FC = () => (
//   <section className="py-20 bg-gradient-to-b from-noor-light to-white">
//     <div className="max-w-3xl mx-auto px-4 text-center">
//       <span className="bg-noor-gold/10 text-noor-gold text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
//         START YOUR JOURNEY
//       </span>
//       <h2 className="text-4xl font-bold text-noor-green mb-6 font-display leading-tight">
//         Begin Your Umrah Journey with Confidence
//       </h2>
//       <p className="text-gray-500 leading-relaxed mb-4">
//         Choosing Noor Umrah Travels means choosing a travel partner who genuinely cares about your spiritual journey. From the first enquiry to your return home, we are with you every step of the way.
//       </p>
//       <p className="text-noor-green italic mb-8 font-display text-lg">
//         Let US help you perform Umrah with ease, comfort, and peace of heart.
//       </p>

//       <div className="flex items-center jUStify-center gap-4">
//         <button className="bg-noor-green text-white px-8 py-3.5 rounded-full flex items-center gap-2 font-semibold hover:bg-[#2a5c3a] transition-colors shadow-lg">
//           <MailIcon className="w-5 h-5" />
//           Contact US Today
//         </button>
//         <button className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-full flex items-center gap-2 font-semibold hover:border-noor-green hover:text-noor-green transition-colors">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//           </svg>
//           View Packages
//         </button>
//       </div>
//     </div>
//   </section>
// );

// // ==================== MAIN ABOUT PAGE ====================
// const AboutPage: React.FC = () => {
//   return (
//     <>
//       <AboutHero />
//       <SpiritualJourney />
//       <UmrahSpecialists />
//       <OurMission />
//       <WhyChooseNoor />
//       <ServingPilgrims />
//       <BeginJourneyCTA />
//     </>
//   );
// };

// export default AboutPage; 

// AboutPage.tsx
import React from 'react';
import { CheckShieldIcon, StarIconSolid, PlaneIcon, ArrowRightIcon, MailIcon } from '../components/icons/Icons';

import madinahMosque from '../assets/images/about/5-2.jpg';
import quranBook from '../assets/images/about/4-2.jpg';
import cityAerial from '../assets/images/about/5-2.jpg';

// ==================== HERO BANNER ====================
const AboutHero: React.FC = () => (
  <section className="relative py-20 overflow-hidden">
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
        <span className="text-white">About US</span>
      </div>
      <span className="bg-noor-gold text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
        ABOUT US
      </span>
      <h1 className="text-4xl lg:text-5xl font-bold text-white font-display leading-tight max-w-2xl">
        Noor Umrah Travels US
      </h1>
      <p className="text-white/70 mt-4 max-w-2xl text-lg leading-relaxed">
        A trUSted and reliable Umrah travel agency in the US dedicated to providing seamless, affordable, and spiritually enriching journeys to Makkah.
      </p>
    </div>
  </section>
);

// ==================== YOUR SPIRITUAL JOURNEY ====================
const SpiritualJourney: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <img
            src={madinahMosque}
            alt="Madinah Mosque"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
            <span className="text-noor-green font-bold text-sm">US Based</span>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">WELCOME</span>
          <h2 className="text-4xl font-bold text-noor-green mt-3 mb-6 leading-tight font-display">
            Your Spiritual Journey Starts Here
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            At Noor Umrah Travels, we understand that Umrah is not jUSt a trip — it is a deeply personal and sacred journey. Our goal is to remove all travel worries so you can focUS entirely on your worship, prayers, and spiritual connection.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We proudly serve MUSlims across the United Kingdom, offering carefully designed Umrah packages from the US that suit individuals, families, and groups, with complete transparency and professional support at every stage.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-noor-green font-display flex items-center">
                3-5<StarIconSolid className="w-5 h-5 text-noor-gold ml-1" />
              </div>
              <p className="text-gray-400 text-sm mt-1">Hotel Options</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-noor-green font-display">7-28</div>
              <p className="text-gray-400 text-sm mt-1">Day Packages</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-noor-green font-display">100%</div>
              <p className="text-gray-400 text-sm mt-1">Dedicated Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ==================== US-BASED UMRAH SPECIALISTS ====================
const UmrahSpecialists: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div>
          <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">WHO WE ARE</span>
          <h2 className="text-4xl font-bold text-noor-green mt-3 mb-6 leading-tight font-display">
            US-Based Umrah Specialists
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            Noor Umrah Travels is a US-based Umrah specialist committed to delivering high-quality pilgrimage services with honesty, care, and attention to detail.
          </p>
          <p className="text-gray-500 leading-relaxed mb-6">
            With in-depth knowledge of Saudi travel regulations, Umrah visa requirements, and accommodation standards, we ensure every pilgrim enjoys a smooth and well-organised experience. From economy Umrah packages to luxury 5-star options, we provide solutions for every budget without compromising on comfort or service quality.
          </p>

          {/* Checklist */}
          <div className="space-y-4">
            {[
              'Expert knowledge of Saudi travel regulations',
              'Umrah visa processing & documentation',
              'Solutions for every budget',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-noor-green/10 flex items-center jUStify-center flex-shrink-0">
                  <CheckShieldIcon className="w-4 h-4 text-noor-green" />
                </div>
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image with Quote */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={quranBook}
              alt="Holy Quran"
              className="w-full h-[450px] object-cover"
            />
            {/* Quote overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/80 to-transparent p-8 pt-16">
              <p className="text-white font-bold text-lg leading-relaxed">
                "Indeed, the first HoUSe [of worship] established for mankind was that at Makkah"
              </p>
              <p className="text-white/60 text-sm mt-2">— Surah Ali 'Imran 3:96</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ==================== OUR MISSION ====================
const OurMission: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div>
          <img
            src={cityAerial}
            alt="Aerial city view"
            className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">OUR PURPOSE</span>
          <h2 className="text-4xl font-bold text-noor-green mt-3 mb-6 leading-tight font-display">
            Our Mission
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our mission is to make Umrah accessible, stress-free, and spiritually fulfilling for MUSlims across the US. We strive to offer:
          </p>

          {/* Feature Items - Updated to grid layout with responsive gaps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                desc: 'Well-organised travel arrangements',
                color: 'bg-noor-gold/10',
              },
              {
                icon: '🤝',
                title: 'Friendly Support',
                desc: 'Knowledgeable cUStomer service team',
                color: 'bg-noor-green/10',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center jUStify-center flex-shrink-0 text-lg`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-noor-green">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-8 border-l-4 border-noor-gold pl-4">
            <p className="text-gray-500 italic">
              Every journey we organise is handled with sincerity, respect, and professionalism.
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
    { name: 'New York', color: 'text-noor-green' },
    { name: 'HoUSton', color: 'text-noor-gold' },
    { name: 'Chicago', color: 'text-noor-green' },
    { name: 'Los Angeles', color: 'text-noor-gold' },
    { name: 'Dallas', color: 'text-noor-green' },
    { name: 'Washington DC', color: 'text-noor-gold' },
    { name: '& More', color: 'text-noor-gold', isDots: true },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div>
            <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase">US-WIDE SERVICE</span>
            <h2 className="text-4xl font-bold text-noor-green mt-3 mb-6 leading-tight font-display">
              Serving Pilgrims Across the US
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Noor Umrah Travels proudly serves pilgrims from New York, HoUSton, Chicago, Los Angeles, Dallas, Washington DC, and other US cities.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you are travelling alone, with family, or as part of a group, we ensure your Umrah journey is safe, organised, and spiritually rewarding.
            </p>

            {/* Commitment Box */}
            <div className="bg-noor-gold/5 border border-noor-gold/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-noor-gold/20 flex items-center jUStify-center">
                  <span className="text-noor-gold text-xs">◇</span>
                </div>
                <h4 className="font-bold text-noor-green">Our Commitment to Quality & TrUSt</h4>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                We operate with strong Islamic values of trUSt, honesty, and responsibility. Every package is designed to deliver peace of mind, allowing pilgrims to focUS on ibadah while we handle all travel arrangements.
              </p>
            </div>
          </div>

          {/* Cities Grid - Updated with responsive grid and gap classes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {cities.map((city, index) => (
              <div key={index} className="bg-noor-light rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 mx-auto mb-3 ${city.isDots ? '' : 'bg-noor-green/10'} rounded-lg flex items-center jUStify-center`}>
                  {city.isDots ? (
                    <span className="text-noor-gold text-2xl font-bold">•••</span>
                  ) : (
                    <svg className={`w-6 h-6 ${city.color}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7 3.5v7.64l-7 3.5-7-3.5V7.68l7-3.5z" />
                      <path d="M7 9h2v6H7zm4-2h2v8h-2zm4 3h2v5h-2z" />
                    </svg>
                  )}
                </div>
                <h4 className={`font-bold ${city.isDots ? 'text-noor-gold' : 'text-noor-green'}`}>
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