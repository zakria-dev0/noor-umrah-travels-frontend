// // TopBar.tsx
// import React from 'react';
// import { PhoneIcon, MailIcon, CalendarIcon, CheckShieldIcon } from '../icons/Icons';

// const TopBar: React.FC = () => (
//   <div className="bg-noor-green text-white py-2.5 px-4">
//     <div className="max-w-7xl mx-auto flex items-center justify-between">
//       <div className="bg-noor-gold text-white text-xs sm:text-sm px-2 sm:px-4 py-1.5 rounded-full flex items-center gap-1 sm:gap-2 font-medium">
//         <CalendarIcon className="w-4 h-4 hidden sm:block" />
//         <span dir="rtl" className="whitespace-nowrap">٢١ شعبان، ١٤٤٧ هجری</span>
//       </div>
// <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
//        <a href="tel:+1 305 7768923" className="hidden md:flex items-center gap-2 text-sm hover:text-noor-gold transition-colors">
//   <PhoneIcon className="w-4 h-4 text-noor-gold" />
//   +1 305 7768923
// </a>
//      <a href="mailto:info@haramumrah" className="hidden lg:flex items-center gap-2 text-sm hover:text-noor-gold transition-colors">
//   <MailIcon className="w-4 h-4 text-noor-gold" />
//   info@haramumrahtravels.com
// </a>
//        <div className="flex items-center gap-2 bg-white/10 px-2 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm">
//   <span className="font-semibold">US BASED</span>
// </div>
//       </div>
//     </div>
//   </div>
// );

// export default TopBar; 


// TopBar.tsx
import React, { useState, useEffect } from 'react';
import { PhoneIcon, MailIcon, CalendarIcon, CheckShieldIcon } from '../icons/Icons';

// Helper function to convert to Arabic numerals
const toArabicNumerals = (num: number): string => {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.toString().split('').map(digit => arabicDigits[parseInt(digit)]).join('');
};

// Helper function to get Hijri date
const getHijriDate = (): string => {
  const today = new Date();
  
  const hijriMonths = [
    'محرم', 'صفر', 'ربیع الاول', 'ربیع الثانی',
    'جمادی الاول', 'جمادی الثانی', 'رجب', 'شعبان',
    'رمضان', 'شوال', 'ذوالقعدہ', 'ذوالحجہ'
  ];

  const formatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });

  const parts = formatter.formatToParts(today);
  const day = parseInt(parts.find(p => p.type === 'day')?.value || '1');
  const month = parseInt(parts.find(p => p.type === 'month')?.value || '1');
  const year = parseInt(parts.find(p => p.type === 'year')?.value || '1446');

  return `${toArabicNumerals(day)} ${hijriMonths[month - 1]}، ${toArabicNumerals(year)} هجری`;
};

const TopBar: React.FC = () => {
  const [hijriDate, setHijriDate] = useState<string>('');

  useEffect(() => {
    setHijriDate(getHijriDate());
  }, []);

  return (
    <div className="bg-noor-green text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="bg-noor-gold text-white text-xs sm:text-sm px-2 sm:px-4 py-1.5 rounded-full flex items-center gap-1 sm:gap-2 font-medium">
          <CalendarIcon className="w-4 h-4 hidden sm:block" />
          <span dir="rtl" className="whitespace-nowrap">{hijriDate}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
          <a href="tel:+1 305 7768923" className="hidden md:flex items-center gap-2 text-sm hover:text-noor-gold transition-colors">
            <PhoneIcon className="w-4 h-4 text-noor-gold" />
            +1 305 7768923
          </a>
          <a href="mailto:info@haramumrah" className="hidden lg:flex items-center gap-2 text-sm hover:text-noor-gold transition-colors">
            <MailIcon className="w-4 h-4 text-noor-gold" />
            info@haramumrahtravels.com
          </a>
          <div className="flex items-center gap-2 bg-white/10 px-2 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm">
            <span className="font-semibold">US BASED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;