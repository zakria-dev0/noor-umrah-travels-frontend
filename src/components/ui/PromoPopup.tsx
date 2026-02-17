// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const PromoPopup: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   useEffect(() => {
//     const dismissed = sessionStorage.getItem('promo-popup-dismissed');
//     if (!dismissed) {
//       const timer = setTimeout(() => setIsVisible(true), 1500);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = isVisible ? 'hidden' : '';
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, [isVisible]);

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsVisible(false);
//       setIsClosing(false);
//       sessionStorage.setItem('promo-popup-dismissed', 'true');
//     }, 400);
//   };

//   if (!isVisible) return null;

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-all duration-400 ${
//         isClosing ? 'opacity-0' : 'opacity-100'
//       }`}
//     >
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/65 backdrop-blur-md"
//         onClick={handleClose}
//       />

//       {/* Popup Card */}
//       <div
//         className={`relative w-full max-w-[420px] bg-white rounded-[28px] shadow-2xl overflow-hidden transition-all duration-500 ease-out ${
//           isClosing
//             ? 'scale-90 opacity-0 translate-y-4'
//             : 'scale-100 opacity-100 translate-y-0'
//         }`}
//       >
//         {/* ===== TOP BANNER ===== */}
//         <div className="relative bg-noor-green px-6 pt-10 pb-14 text-center overflow-hidden">
//           {/* Geometric pattern overlay */}
//           <div
//             className="absolute inset-0 opacity-[0.04]"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             }}
//           />
//           {/* Radial glow */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl" />
//           {/* Decorative arcs */}
//           <div className="absolute -top-16 -right-16 w-56 h-56 border border-white/[0.07] rounded-full" />
//           <div className="absolute -top-24 -right-24 w-72 h-72 border border-white/[0.04] rounded-full" />
//           <div className="absolute -bottom-12 -left-12 w-44 h-44 border border-white/[0.06] rounded-full" />

//           {/* Close button */}
//           <button
//             onClick={handleClose}
//             className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all duration-200 group"
//           >
//             <svg
//               className="w-4 h-4 text-white/80 group-hover:text-white transition-colors"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2.5}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>

//           {/* Content */}
//           <div className="relative z-10">
//             {/* Crescent + star icon */}
//             <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-noor-gold/20 border border-noor-gold/30 mb-4">
//               <svg
//                 className="w-6 h-6 text-noor-gold"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM9.5 12a5 5 0 018.17-3.88A7.5 7.5 0 009.5 12zm0 0a5 5 0 008.17 3.88A7.5 7.5 0 019.5 12z" opacity="0" />
//                 <path d="M21.996 12.882c.022-.258.037-.518.037-.782 0-.264-.015-.524-.037-.782C21.27 5.932 16.8 2 12 2c-1.685 0-3.267.474-4.611 1.295a10.002 10.002 0 006.284 17.838c.244-.021.487-.05.727-.088a10.003 10.003 0 005.596-8.163zM13.5 7.5l.645 1.327 1.455.214-1.05 1.04.245 1.469L13.5 10.9l-1.295.65.245-1.469-1.05-1.04 1.455-.214L13.5 7.5z" />
//               </svg>
//             </div>

//             <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-noor-gold text-[9px] font-bold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full mb-4">
//               Blessed Journey Awaits
//             </div>

//             <h2 className="text-white font-display text-[26px] sm:text-3xl font-bold leading-[1.2] tracking-tight">
//               Your Umrah, Made
//               <br />
//               <span className="text-noor-gold">More Affordable</span>
//             </h2>
//           </div>
//         </div>

//         {/* ===== FLOATING DISCOUNT BADGE ===== */}
//         <div className="relative z-10 flex justify-center -mt-8">
//           <div className="relative bg-gradient-to-br from-noor-gold to-[#b8960e] text-white pl-5 pr-6 py-3.5 rounded-2xl shadow-xl shadow-noor-gold/25 flex items-center gap-4">
//             {/* Shimmer effect */}
//             <div className="absolute inset-0 rounded-2xl overflow-hidden">
//               <div
//                 className="absolute inset-0 opacity-20"
//                 style={{
//                   background:
//                     'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.4) 50%, transparent 55%)',
//                   backgroundSize: '200% 100%',
//                   animation: 'shimmer 3s ease-in-out infinite',
//                 }}
//               />
//             </div>
//             <div className="relative flex items-baseline gap-0.5">
//               <span className="text-[42px] font-bold leading-none tracking-tighter">5</span>
//               <span className="text-xl font-bold leading-none">%</span>
//             </div>
//             <div className="relative text-left leading-tight border-l border-white/25 pl-4">
//               <span className="text-[13px] font-bold uppercase tracking-wide block">
//                 Exclusive Discount
//               </span>
//               <span className="text-[11px] opacity-75 block mt-0.5">
//                 On Every Package
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* ===== BODY CONTENT ===== */}
//         <div className="px-6 pt-6 pb-7 text-center">
//           {/* Description */}
//           <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed mb-5 max-w-xs mx-auto">
//             Reserve your sacred Umrah pilgrimage during our exclusive offer period and
//             enjoy <span className="font-semibold text-noor-green">5% savings</span> across
//             all package tiers — from luxurious 5-star Haram-view suites to comfortable
//             3-star accommodations.
//           </p>

//           {/* Date banner */}
//           <div className="bg-noor-green/[0.04] border border-noor-green/10 rounded-2xl px-5 py-3.5 mb-5 inline-flex items-center gap-3">
//             <svg
//               className="w-5 h-5 text-noor-green flex-shrink-0"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//               />
//             </svg>
//             <div className="text-left">
//               <span className="text-[10px] font-bold text-noor-green/60 uppercase tracking-wider block">
//                 Valid Period
//               </span>
//               <span className="text-sm font-bold text-noor-green">
//                 March 18, 2025 &ndash; February 18, 2026
//               </span>
//             </div>
//           </div>

//           {/* Feature pills */}
//           <div className="flex flex-wrap justify-center gap-2 mb-6">
//             {[
//               { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Umrah Visa' },
//               { icon: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z', label: 'Return Flights' },
//               { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: 'Haram Hotels' },
//               { icon: 'M8 7h8m-8 5h8m-4-10l-4 4m0 0l4 4m-4-4h12', label: 'Private Transfers' },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-1.5 bg-white border border-gray-100 shadow-sm rounded-full px-3 py-1.5"
//               >
//                 <svg
//                   className="w-3.5 h-3.5 text-noor-gold"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d={item.icon}
//                   />
//                 </svg>
//                 <span className="text-[11px] font-semibold text-gray-600">
//                   {item.label}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <Link
//             to="/packages"
//             onClick={handleClose}
//             className="group relative block w-full bg-noor-green text-white py-4 rounded-2xl font-semibold text-sm hover:bg-[#234d33] transition-all duration-300 hover:shadow-xl hover:shadow-noor-green/20 overflow-hidden"
//           >
//             <span className="relative z-10 flex items-center justify-center gap-2">
//               Claim Your 5% Discount
//               <svg
//                 className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2.5}
//                   d="M13 7l5 5m0 0l-5 5m5-5H6"
//                 />
//               </svg>
//             </span>
//           </Link>

//           {/* WhatsApp + dismiss */}
//           <div className="flex items-center justify-center gap-4 mt-4">
//             <a
//               href="https://wa.me/19174007462?text=Hi%2C%20I%27m%20interested%20in%20the%205%25%20Umrah%20discount%20offer"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1.5 text-xs font-medium text-green-600 hover:text-green-700 transition-colors"
//             >
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//               </svg>
//               Ask on WhatsApp
//             </a>
//             <span className="w-px h-3 bg-gray-200" />
//             <button
//               onClick={handleClose}
//               className="text-xs text-gray-400 hover:text-gray-500 transition-colors"
//             >
//               Not now
//             </button>
//           </div>
//         </div>

//         {/* Shimmer keyframes */}
//         <style>{`
//           @keyframes shimmer {
//             0% { background-position: 200% 0; }
//             100% { background-position: -200% 0; }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default PromoPopup;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PromoPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('promo-popup-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      sessionStorage.setItem('promo-popup-dismissed', 'true');
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-all duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup Card - Reduced size */}
      <div
        className={`relative w-full max-w-[320px] overflow-hidden transition-all duration-300 ease-out ${
          isClosing
            ? 'scale-95 opacity-0 translate-y-2'
            : 'scale-100 opacity-100 translate-y-0'
        }`}
      >
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Close Button - Floating */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 flex items-center justify-center transition-all duration-200 group"
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Hero Section with Image */}
          <div className="relative h-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=2070&auto=format&fit=crop"
              alt="Kaaba"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noor-green via-noor-green/60 to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-noor-gold text-xl font-bold">5%</span>
              <div className="text-left">
                <p className="text-[9px] text-gray-500 uppercase tracking-wide font-semibold">Exclusive</p>
                <p className="text-[10px] text-noor-green font-bold -mt-0.5">Discount</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pt-4 pb-4">
            {/* Title */}
            <div className="text-center mb-3">
              <div className="inline-flex items-center gap-1 bg-noor-gold/10 text-noor-gold text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-1.5">
                <span className="w-1 h-1 bg-noor-gold rounded-full animate-pulse" />
                Limited Time Offer
              </div>
              <h2 className="text-lg font-bold text-noor-green font-display">
                Save on Your Sacred Journey
              </h2>
              <p className="text-gray-500 text-[11px] mt-1 leading-relaxed">
                Book during our exclusive offer period and enjoy savings across all Umrah packages
              </p>
            </div>

            {/* Features - Compact Grid */}
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {[
                { icon: '✈️', label: 'Return Flights' },
                { icon: '🏨', label: 'Haram Hotels' },
                { icon: '📋', label: 'Umrah Visa' },
                { icon: '🚐', label: 'Transfers' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1.5"
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-[10px] font-medium text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Validity Period */}
            <div className="flex items-center justify-center gap-1.5 bg-noor-green/5 border border-noor-green/10 rounded-lg px-2 py-1.5 mb-3">
              <svg className="w-3.5 h-3.5 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[10px] font-semibold text-noor-green">
                Valid: Mar 18, 2026 – Feb 18, 2026
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-1.5">
              <Link
                to="/packages"
                onClick={handleClose}
                className="group relative flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-noor-green to-[#2a5c3a] text-white py-2.5 rounded-lg font-semibold text-xs hover:shadow-lg hover:shadow-noor-green/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Claim Your Discount</span>
                <svg
                  className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>

              {/* WhatsApp Link - Fixed anchor tag */}
              <a
                href="https://wa.me/17866386022?text=Hi%2C%20I%27m%20interested%20in%20the%205%25%20Umrah%20discount%20offer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full bg-[#25D366]/10 text-[#25D366] py-2 rounded-lg font-semibold text-xs hover:bg-[#25D366]/20 transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Dismiss Link */}
            <button
              onClick={handleClose}
              className="w-full text-center text-[10px] text-gray-400 hover:text-gray-500 mt-2 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-noor-gold/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-noor-green/20 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
};

export default PromoPopup;