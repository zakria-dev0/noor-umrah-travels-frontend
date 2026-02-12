// AirLinePartners.tsx
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';

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

const ITEMS_PER_PAGE = 5;

const AirlinePartners: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, allAirlines.length - ITEMS_PER_PAGE);
  const totalDots = maxIndex + 1;

  const visibleAirlines = allAirlines.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="hidden md:block py-16 bg-noor-light">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-noor-green mb-3 font-display">
          Our Airline Partners
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-12">
          We work with trusted airline partners to offer convenient departures, reliable connections, and flexible options for us pilgrims.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10 disabled:opacity-30"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>

          {/* Logos */}
          <div className="flex items-center justify-center gap-12 px-16">
            {visibleAirlines.map((airline, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-36 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-3">
                  <img
                    src={airline.logo}
                    alt={airline.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-sm text-gray-500 font-medium">{airline.name}</span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-10 disabled:opacity-30"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? 'bg-noor-green' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirlinePartners;