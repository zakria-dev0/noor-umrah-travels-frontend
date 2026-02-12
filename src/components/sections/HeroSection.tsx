//  // herosection.tsx orginal file 
// import React from 'react';
// import { CheckShieldIcon, MailIcon } from '../icons/Icons';

// const HeroSection: React.FC = () => (
//   <section className="relative min-h-[600px] flex items-center overflow-hidden">
//     <div
//       className="absolute inset-0 bg-cover bg-center"
//       style={{ backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80')` }}
//     >
//       <div className="absolute inset-0 bg-black/50" />
//     </div>
//     <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
//       <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
//         <div className="inline-flex items-center gap-2 border border-gray-500 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//           <CheckShieldIcon className="w-4 h-4 text-noor-gold" />
//           <span className="text-white text-sm font-medium">ATOL PROTECTED • us BASED</span>
//         </div>
//         <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-display">
//           Begin Your Sacred Journey with Noor Umrah Travels
//         </h1>
//         <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-2xl">
//           Premium Umrah and Hajj packages from the us, offering luxury hotels near the Haram, seamless visa processing, and expert guidance from an experienced, trusted Umrah travel team.
//         </p>
//         <button className="bg-noor-gold text-noor-green px-8 py-3.5 rounded-full flex items-center gap-2 font-semibold hover:bg-[#b89a3e] transition-colors text-lg">
//           <MailIcon className="w-5 h-5" />
//           Contact Us
//         </button>
//       </div>
//     </div>
//   </section>
// );

// export default HeroSection; 
// contact us 
import React from 'react';
import { MailIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => (
  <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80')` }}
    >
      <div className="absolute inset-0 bg-black/50" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 w-full">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 font-display">
          Begin Your Sacred Umrah Journey with Noor Umrah Travels
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