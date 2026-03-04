 // components/ui/PackageCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaneIcon, DocumentIcon, WhatsAppIcon, ArrowRightIcon, StarIconSolid } from '../icons/Icons';

// 5-Star images
import star5img1 from '../../assets/images/packages/5-1.jpg';
import star5img2 from '../../assets/images/packages/5-2.jpg';
import star5img3 from '../../assets/images/packages/5-5.jpg';

// 4-Star images
import star4img1 from '../../assets/images/packages/5-3_files/4-star-1.webp';
import star4img2 from '../../assets/images/packages/5-3_files/4star-2.webp';
import star4img3 from '../../assets/images/packages/5-3_files/4star-3.webp';

// 3-Star images
import star3img1 from '../../assets/images/packages/5-3_files/3-star1.webp';
import star3img2 from '../../assets/images/packages/5-3_files/3-star2.webp';
import star3img3 from '../../assets/images/packages/5-3_files/3star-3.webp';

const imageMap: Record<string, string> = {
  '5-7': star5img1,
  '5-10': star5img2,
  '5-14': star5img3,
  '4-7': star4img1,
  '4-10': star4img2,
  '4-14': star4img3,
  '3-7': star3img1,
  '3-10': star3img2,
  '3-14': star3img3,
};

const fallbackMap: Record<number, string> = {
  5: star5img1,
  4: star4img1,
  3: star3img1,
};

// Feature descriptions per package duration
const getFeatures = (days: number, stars: number) => [
  {
    icon: <PlaneIcon className="w-4 h-4 text-noor-green" />,
    text: 'Return flights from US included',
  },
  {
    icon: <DocumentIcon className="w-4 h-4 text-noor-green" />,
    text: days === 7
      ? 'Umrah visa & Ziyarat tours'
      : days === 10
        ? 'Visa, Ziyarat & personal guide'
        : 'Complete package with dedicated guide',
  },
  {
    icon: <StarIconSolid className="w-4 h-4 text-noor-gold" />,
    text: `${stars} Star hotel near the Haram`,
  },
];

interface PackageCardProps {
  days: number;
  stars: number;
  price: number;
  starLabel: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ days, stars, price, starLabel }) => {
  const navigate = useNavigate();
  const imageKey = `${stars}-${days}`;
  const imageSrc = imageMap[imageKey] || fallbackMap[stars] || star5img1;
  const features = getFeatures(days, stars);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-noor-green/15 hover:shadow-xl hover:shadow-noor-green/[0.06] transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={imageSrc}
          alt={`${days} Days ${starLabel} Umrah Package`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Top left — star badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: Math.min(stars, 5) }).map((_, i) => (
              <StarIconSolid key={i} className="w-2.5 h-2.5 text-noor-gold" />
            ))}
          </div>
          <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wide">{starLabel}</span>
        </div>

        {/* Bottom left — days badge */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-noor-green/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-bold">{days} Days</span>
          </div>
        </div>

        {/* Bottom right — price */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
            <div className="flex items-baseline gap-0.5">
              <span className="text-[10px] text-noor-gold font-semibold">From</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-xs text-gray-400">$</span>
              <span className="text-xl font-bold text-noor-green leading-none">{price.toLocaleString()}</span>
              <span className="text-[10px] text-gray-400 ml-1">/pp</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5">
        {/* Title */}
        <h3 className="font-bold text-noor-green text-base sm:text-lg mb-4 leading-snug group-hover:text-noor-gold transition-colors duration-300">
          {days} Day {starLabel.charAt(0).toUpperCase() + starLabel.slice(1)} Umrah Package
        </h3>

        {/* Features */}
        <div className="space-y-2.5 mb-5">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-7 h-7 bg-noor-green/[0.05] rounded-lg flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>
              <span className="text-gray-500 text-xs sm:text-sm leading-snug">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2.5 pt-4 border-t border-gray-100">
          <button
            onClick={() => navigate('/packages')}
            className="flex-1 bg-noor-green text-white py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-[#234d33] transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-noor-green/15"
          >
            View Details
            <ArrowRightIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
          
          <a
            href="https://wa.me/+17869104615"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-11 sm:h-11 bg-green-500 text-white rounded-xl flex items-center justify-center hover:bg-green-600 transition-all hover:shadow-md flex-shrink-0"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;