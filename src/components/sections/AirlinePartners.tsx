// // AirLinePartners.tsx
// import React, { useState } from 'react';
// import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';

// import thaiAirAsiaX from '../../assets/images/packages/5-3_files/Thai-AirAsia-X-697291ba11983.svg';
// import omanAir from '../../assets/images/airlines/2.svg';
// import qantas from '../../assets/images/airlines/3.svg';
// import spicejet from '../../assets/images/airlines/4.svg';
// import etihad from '../../assets/images/airlines/5.svg';
// import saudia from '../../assets/images/airlines/6.svg';

// interface Airline {
//   name: string;
//   logo: string;
// }

// const allAirlines: Airline[] = [
//   { name: 'Thai AirAsia X', logo: thaiAirAsiaX },
//   { name: 'Oman Air', logo: omanAir },
//   { name: 'Qantas', logo: qantas },
//   { name: 'SpiceJet', logo: spicejet },
//   { name: 'Etihad Airways', logo: etihad },
//   { name: 'Saudi Arabian Airlines', logo: saudia },
// ];

// const ITEMS_PER_PAGE = 5;

// const AirlinePartners: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const maxIndex = Math.max(0, allAirlines.length - ITEMS_PER_PAGE);
//   const totalDots = maxIndex + 1;

//   const visibleAirlines = allAirlines.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

//   const handlePrev = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
//   };

//   return (
//     <section className="hidden md:block py-16 bg-noor-light">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-noor-green mb-3 font-display">
//           Our Airline Partners
//         </h2>
//         <p className="text-gray-500 max-w-lg mx-auto mb-12">
//           We work with trusted airline partners to offer convenient departures, reliable connections, and flexible options for us pilgrims.
//         </p>

//         <div className="relative flex items-center justify-center">
//           {/* Left Arrow */}
//           <button
//             onClick={handlePrev}
//             disabled={currentIndex === 0}
//             className="absolute left-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10 disabled:opacity-30"
//           >
//             <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
//           </button>

//           {/* Logos */}
//           <div className="flex items-center justify-center gap-12 px-16">
//             {visibleAirlines.map((airline, index) => (
//               <div key={index} className="flex flex-col items-center gap-3">
//                 <div className="w-36 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-3">
//                   <img
//                     src={airline.logo}
//                     alt={airline.name}
//                     className="max-w-full max-h-full object-contain"
//                   />
//                 </div>
//                 <span className="text-sm text-gray-500 font-medium">{airline.name}</span>
//               </div>
//             ))}
//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={handleNext}
//             disabled={currentIndex === maxIndex}
//             className="absolute right-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10 disabled:opacity-30"
//           >
//             <ChevronRightIcon className="w-5 h-5 text-gray-600" />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-10">
//           {Array.from({ length: totalDots }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrentIndex(i)}
//               className={`w-2.5 h-2.5 rounded-full transition-colors ${
//                 i === currentIndex ? 'bg-noor-green' : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AirlinePartners;  


// components/sections/AirlinePartners.tsx
import React from 'react';

import thaiAirAsiaX from '../../assets/images/packages/5-3_files/Thai-AirAsia-X-697291ba11983.svg';
import omanAir from '../../assets/images/airlines/2.svg';
import qantas from '../../assets/images/airlines/3.svg';
import spicejet from '../../assets/images/airlines/4.svg';
import etihad from '../../assets/images/airlines/5.svg';
import saudia from '../../assets/images/airlines/6.svg';

interface Airline {
  name: string;
  logo: string;
}

const allAirlines: Airline[] = [
  { name: 'Thai AirAsia X', logo: thaiAirAsiaX },
  { name: 'Oman Air', logo: omanAir },
  { name: 'Qantas', logo: qantas },
  { name: 'SpiceJet', logo: spicejet },
  { name: 'Etihad Airways', logo: etihad },
  { name: 'Saudi Arabian Airlines', logo: saudia },
];

const AirlinePartners: React.FC = () => {
  // Duplicate airlines for seamless infinite scroll
  const duplicatedAirlines = [...allAirlines, ...allAirlines];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-noor-light relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-noor-green/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-noor-green/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-noor-green/[0.03] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-noor-green/[0.02] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 text-noor-green text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-noor-green/[0.08] to-noor-green/[0.04] border border-noor-green/15 px-5 py-2.5 rounded-full mb-5 shadow-sm">
            <div className="relative">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              <div className="absolute inset-0 bg-noor-green/20 blur-md rounded-full" />
            </div>
            Partner Airlines
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-noor-green mb-4 font-display leading-tight">
            Our Airline Partners
          </h2>

          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-noor-green/30" />
            <div className="w-2 h-2 rounded-full bg-noor-green/40" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-noor-green/30" />
          </div>

          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We work with trusted airline partners to offer convenient departures,
            reliable connections, and flexible options for US pilgrims.
          </p>
        </div>

        {/* Desktop: Auto-scrolling marquee */}
        <div className="relative hidden md:block overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-noor-light to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {duplicatedAirlines.map((airline, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 flex-shrink-0 mx-6 group cursor-default"
              >
                <div className="relative w-48 h-24 bg-white rounded-2xl flex items-center justify-center p-5 shadow-lg shadow-gray-200/60 border border-gray-100/80 group-hover:shadow-xl group-hover:shadow-noor-green/10 group-hover:-translate-y-1 group-hover:border-noor-green/20 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-noor-green/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <img
                    src={airline.logo}
                    alt={airline.name}
                    className="max-w-full max-h-full object-contain opacity-100 transition-all duration-300 relative z-10"
                  />
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-noor-green transition-colors duration-300">
                    {airline.name}
                  </span>
                  <div className="h-0.5 w-0 group-hover:w-8 bg-noor-green rounded-full transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-noor-light to-transparent z-10 pointer-events-none" />
        </div>

        {/* Mobile: Enhanced Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 md:hidden">
          {allAirlines.map((airline, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="relative w-full aspect-[1.8/1] bg-white rounded-2xl border border-gray-100 flex items-center justify-center p-4 shadow-md shadow-gray-200/50 active:scale-95 transition-all duration-300 overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-noor-green/[0.02] to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300" />

                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-noor-green/20 to-transparent rounded-full" />

                <img
                  src={airline.logo}
                  alt={airline.name}
                  className="max-w-[85%] max-h-[85%] object-contain opacity-100 relative z-10"
                />
              </div>

              <div className="flex flex-col items-center gap-1">
                <span className="text-[11px] sm:text-xs text-gray-500 font-medium text-center leading-tight">
                  {airline.name}
                </span>
                <div className="w-4 h-0.5 bg-noor-green/30 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center mt-12 sm:mt-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-noor-green/20" />
            <svg
              className="w-5 h-5 text-noor-green/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-noor-green/20" />
          </div>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default AirlinePartners;