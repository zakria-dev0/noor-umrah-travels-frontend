// // TopBar.tsx
// import React, { useState, useEffect } from 'react';
// import { PhoneIcon, MailIcon, CalendarIcon, CheckShieldIcon } from '../icons/Icons';

// // Helper function to convert to Arabic numerals
// const toArabicNumerals = (num: number): string => {
//   const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
//   return num.toString().split('').map(digit => arabicDigits[parseInt(digit)]).join('');
// };

// // Helper function to get Hijri date
// const getHijriDate = (): string => {
//   const today = new Date();
  
//   const hijriMonths = [
//     'محرم', 'صفر', 'ربیع الاول', 'ربیع الثانی',
//     'جمادی الاول', 'جمادی الثانی', 'رجب', 'شعبان',
//     'رمضان', 'شوال', 'ذوالقعدہ', 'ذوالحجہ'
//   ];

//   const formatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
//     day: 'numeric',
//     month: 'numeric',
//     year: 'numeric',
//   });

//   const parts = formatter.formatToParts(today);
//   const day = parseInt(parts.find(p => p.type === 'day')?.value || '1');
//   const month = parseInt(parts.find(p => p.type === 'month')?.value || '1');
//   const year = parseInt(parts.find(p => p.type === 'year')?.value || '1446');

//   return `${toArabicNumerals(day)} ${hijriMonths[month - 1]}، ${toArabicNumerals(year)} هجری`;
// };

// const TopBar: React.FC = () => {
//   const [hijriDate, setHijriDate] = useState<string>('');

//   useEffect(() => {
//     setHijriDate(getHijriDate());
//   }, []);

//   return (
//     <div className="bg-noor-green text-white py-2.5 px-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div className="bg-noor-gold text-white text-xs sm:text-sm px-2 sm:px-4 py-1.5 rounded-full flex items-center gap-1 sm:gap-2 font-medium">
//           <CalendarIcon className="w-4 h-4 hidden sm:block" />
//           <span dir="rtl" className="whitespace-nowrap">{hijriDate}</span>
//         </div>
//         <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
//           <a href="tel:+1 305 7768923" className="hidden md:flex items-center gap-2 text-sm hover:text-noor-gold transition-colors">
//             <PhoneIcon className="w-4 h-4 text-noor-gold" />
//             +1 305 7768923
//           </a>
//           <a href="mailto:info@haramumrah" className="hidden lg:flex items-center gap-2 text-sm hover:text-noor-gold transition-colors">
//             <MailIcon className="w-4 h-4 text-noor-gold" />
//             info@haramumrahtravels.com
//           </a>
//           <div className="flex items-center gap-2 bg-white/10 px-2 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm">
//             <span className="font-semibold">US BASED</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar; 

// components/layout/TopBar.tsx
import React, { useState, useEffect } from 'react';
import { PhoneIcon, MailIcon, CalendarIcon } from '../icons/Icons';

const toArabicNumerals = (num: number): string => {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.toString().split('').map(digit => arabicDigits[parseInt(digit)]).join('');
};

const getHijriDate = (): string => {
  const today = new Date();
  const hijriMonths = [
    'محرم', 'صفر', 'ربیع الاول', 'ربیع الثانی',
    'جمادی الاول', 'جمادی الثانی', 'رجب', 'شعبان',
    'رمضان', 'شوال', 'ذوالقعدۃ', 'ذوالحجۃ'
  ];
  const formatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
    day: 'numeric', month: 'numeric', year: 'numeric',
  });
  const parts = formatter.formatToParts(today);
  const day = parseInt(parts.find(p => p.type === 'day')?.value || '1');
  const month = parseInt(parts.find(p => p.type === 'month')?.value || '1');
  const year = parseInt(parts.find(p => p.type === 'year')?.value || '1446');
  return `${toArabicNumerals(day)} ${hijriMonths[month - 1]}، ${toArabicNumerals(year)} ہجری`;
};

const TopBar: React.FC = () => {
  const [hijriDate, setHijriDate] = useState<string>('');

  useEffect(() => {
    setHijriDate(getHijriDate());
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('info@haramumrahtravels.com');
    const target = e.currentTarget as HTMLElement;
    const original = target.querySelector('.email-text') as HTMLElement;
    if (original) {
      const originalText = original.textContent;
      original.textContent = '';
      setTimeout(() => { original.textContent = originalText; }, 1500);
    }
  };

  return (
    <div className="bg-noor-green text-white">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Hijri Date */}
        <div className="bg-noor-gold/15 text-noor-gold text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 font-medium border border-noor-gold/10">
          <CalendarIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden sm:block" />
          <span dir="rtl" className="whitespace-nowrap">{hijriDate}</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Phone */}
          <a
            href="tel:+13057768923"
            className="hidden md:flex items-center gap-2 text-[11px] sm:text-xs text-white/80 hover:text-noor-gold transition-colors group"
          >
            <span className="w-6 h-6 rounded-full bg-noor-gold/10 flex items-center justify-center group-hover:bg-noor-gold/20 transition-colors">
              <PhoneIcon className="w-3 h-3 text-noor-gold" />
            </span>
            <span>+1 (305) 776-8923</span>
          </a>

          {/* Divider */}
          <div className="hidden lg:block w-px h-4 bg-white/10" />

          {/* Email — Clickable to Copy */}
          <button
            onClick={handleCopyEmail}
            className="hidden lg:flex items-center gap-2 text-[11px] sm:text-xs text-white/80 hover:text-noor-gold transition-colors group cursor-pointer"
            title="Click to copy email"
          >
            <span className="w-6 h-6 rounded-full bg-noor-gold/10 flex items-center justify-center group-hover:bg-noor-gold/20 transition-colors">
              <MailIcon className="w-3 h-3 text-noor-gold" />
            </span>
            <span className="email-text select-all">info@haramumrahtravels.com</span>
          </button>

          {/* Divider */}
          <div className="hidden md:block w-px h-4 bg-white/10" />

          {/* US Based Badge */}
          <div className="flex items-center gap-1.5 bg-noor-gold/10 border border-noor-gold/15 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="font-semibold text-noor-gold tracking-wide">US BASED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;