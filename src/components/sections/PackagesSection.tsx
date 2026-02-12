import React from 'react';
import { StarIconSolid, ArrowRightIcon } from '../icons/Icons';
import Carousel from '../ui/Carousel';
import PackageCard from '../ui/PackageCard';

interface PackagesSectionProps {
  stars: number;
  title: string;
  subtitle: string;
  packages: { days: number; price: number }[];
}

const PackagesSection: React.FC<PackagesSectionProps> = ({ stars, title, subtitle, packages }) => {
  const starLabel = `${stars} star`;

  return (
    <section className={`py-16 ${stars === 4 ? 'bg-noor-light' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4">
     <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
  <div>
    <div className="flex items-center gap-1 mb-2">
      {Array.from({ length: stars }).map((_, i) => (
        <StarIconSolid key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-noor-gold" />
      ))}
    </div>
    <h2 className="text-2xl sm:text-3xl font-bold text-noor-green font-display">{title}</h2>
    <p className="text-sm sm:text-base text-gray-500 mt-1">{subtitle}</p>
  </div>
  <a href="#" className="text-noor-green font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm self-start sm:self-auto">
    View All <ArrowRightIcon className="w-4 h-4" />
  </a>
</div>
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