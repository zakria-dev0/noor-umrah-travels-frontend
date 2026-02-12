// PackageCard.tsx
import React from 'react';
import { PlaneIcon, DocumentIcon, WhatsAppIcon, ArrowRightIcon, StarIconSolid } from '../icons/Icons';

import star5img1 from '../../assets/images/packages/5-1.jpg';
import star5img2 from '../../assets/images/packages/5-2.jpg';
import star5img3 from '../../assets/images/packages/5-5.jpg';

const imageMap: Record<string, string> = {
  '5-7': star5img1,
  '5-10': star5img2,
  '5-14': star5img3,
};

interface PackageCardProps {
  days: number;
  stars: number;
  price: number;
  starLabel: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ days, stars, price, starLabel }) => {
  const imageKey = `${stars}-${days}`;
  const imageSrc = imageMap[imageKey] || star5img1;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative h-52 overflow-hidden">
        <img
          src={imageSrc}
          alt={`${days} Days ${starLabel} Umrah Package`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <StarIconSolid className="w-3 h-3 text-noor-gold" />
          {starLabel}
        </div>
        <div className="absolute top-4 right-4 bg-noor-green text-white px-4 py-1.5 rounded-full font-bold text-lg">
          £{price.toLocaleString()}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-noor-green text-lg mb-4">
          {days} Days {starLabel} Umrah Package
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <div className="w-8 h-8 bg-noor-green/5 rounded-lg flex items-center justify-center">
              <PlaneIcon className="w-4 h-4 text-noor-green" />
            </div>
            Return flights
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <div className="w-8 h-8 bg-noor-green/5 rounded-lg flex items-center justify-center">
              <DocumentIcon className="w-4 h-4 text-noor-green" />
            </div>
            {days === 7 ? 'Umrah visa processing' : 'Visa processing'}
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <button className="bg-noor-green text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-[#2a5c3a] transition-colors">
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </button>
          <button className="border-2 border-noor-green text-noor-green px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold hover:bg-noor-green hover:text-white transition-colors">
            View Details
            <ArrowRightIcon className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;