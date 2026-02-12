// TopBar.tsx
import React from 'react';
import { PhoneIcon, MailIcon, CalendarIcon, CheckShieldIcon } from '../icons/Icons';

const TopBar: React.FC = () => (
  <div className="bg-noor-green text-white py-2.5 px-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="bg-noor-gold text-white text-xs sm:text-sm px-2 sm:px-4 py-1.5 rounded-full flex items-center gap-1 sm:gap-2 font-medium">
        <CalendarIcon className="w-4 h-4 hidden sm:block" />
        <span dir="rtl" className="whitespace-nowrap">٢١ شعبان، ١٤٤٧ هجری</span>
      </div>
<div className="flex items-center gap-2 sm:gap-4 lg:gap-8">
       <a href="tel:+1 305 7768923" className="hidden md:flex items-center gap-2 text-sm hover:text-noor-gold transition-colors">
  <PhoneIcon className="w-4 h-4 text-noor-gold" />
  +1 305 7768923
</a>
     <a href="mailto:info@haramumrah" className="hidden lg:flex items-center gap-2 text-sm hover:text-noor-gold transition-colors">
  <MailIcon className="w-4 h-4 text-noor-gold" />
  info@haramumrah
</a>
       <div className="flex items-center gap-2 bg-white/10 px-2 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm">
  <span className="font-semibold">US BASED</span>
</div>
      </div>
    </div>
  </div>
);

export default TopBar;