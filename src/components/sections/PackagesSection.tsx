// // components/sections/PackagesSection.tsx
// import React from 'react';
// import { StarIconSolid, ArrowRightIcon } from '../icons/Icons';
// import Carousel from '../ui/Carousel';
// import PackageCard from '../ui/PackageCard';
// import { Link } from 'react-router-dom';

// interface PackagesSectionProps {
//   stars: number;
//   title: string;
//   subtitle: string;
//   packages: { days: number; price: number }[];
// }

// const PackagesSection: React.FC<PackagesSectionProps> = ({ stars, title, subtitle, packages }) => {
//   const starLabel = `${stars} star`;

//   const bgClass = stars === 4
//     ? 'bg-gradient-to-b from-gray-50 to-white'
//     : stars === 3
//       ? 'bg-gradient-to-b from-white to-gray-50'
//       : 'bg-white';

//   return (
//     <section id="packages-section" className={`py-12 sm:py-16 ${bgClass}`}>
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
//           <div>
//             <div className="flex items-center gap-1 mb-2">
//               {Array.from({ length: stars }).map((_, i) => (
//                 <StarIconSolid key={i} className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-noor-gold" />
//               ))}
//               <span className="ml-2 text-[10px] font-bold tracking-widest uppercase text-noor-gold/70 bg-noor-gold/[0.06] px-2 py-0.5 rounded">
//                 {stars} Star
//               </span>
//             </div>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-noor-green font-display">{title}</h2>
//             <p className="text-xs sm:text-sm text-gray-400 mt-1.5">{subtitle}</p>
//           </div>
//           <Link
//             to="/packages"
//             className="group flex items-center gap-1.5 text-noor-green font-semibold text-sm hover:gap-2.5 transition-all self-start sm:self-auto bg-noor-green/[0.04] px-4 py-2 rounded-full hover:bg-noor-green/[0.08]"
//           >
//             View All
//             <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
//           </Link>
//         </div>

//         <Carousel itemsToShow={1} itemsToShowTablet={2} itemsToShowDesktop={3}>
//           {packages.map((pkg, index) => (
//             <PackageCard key={index} days={pkg.days} stars={stars} price={pkg.price} starLabel={starLabel} />
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default PackagesSection; 

// components/sections/PackagesSection.tsx
import React from 'react';
import { StarIconSolid, ArrowRightIcon } from '../icons/Icons';
import Carousel from '../ui/Carousel';
import PackageCard from '../ui/PackageCard';
import { Link } from 'react-router-dom';

interface PackagesSectionProps {
  stars: number;
  title: string;
  subtitle: string;
  packages: { days: number; price: number }[];
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ stars, title, subtitle, packages }) => {
  const starLabel = `${stars} star`;

  const bgClass =
    stars === 4
      ? 'bg-gradient-to-b from-gray-50/80 to-white'
      : stars === 3
        ? 'bg-gradient-to-b from-white to-gray-50/60'
        : 'bg-white';

  return (
    <section id="packages-section" className={`py-14 sm:py-16 md:py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            {/* Star row + badge */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: stars }).map((_, i) => (
                  <StarIconSolid key={i} className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-noor-gold" />
                ))}
              </div>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-noor-gold bg-noor-gold/[0.07] border border-noor-gold/10 px-2.5 py-1 rounded-full">
                {stars} Star
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-noor-green font-display leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1.5 max-w-md">{subtitle}</p>
          </div>

          <Link
            to="/packages"
            className="group inline-flex items-center gap-2 text-noor-green font-semibold text-sm bg-noor-green/[0.04] hover:bg-noor-green/[0.08] border border-noor-green/10 px-5 py-2.5 rounded-full transition-all self-start sm:self-auto"
          >
            View All Packages
            <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Carousel */}
        <Carousel itemsToShow={1} itemsToShowTablet={2} itemsToShowDesktop={3}>
          {packages.map((pkg, index) => (
            <PackageCard key={index} days={pkg.days} stars={stars} price={pkg.price} starLabel={starLabel} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default PackagesSection;