//  Carousel.tsx 
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';

interface CarouselProps {
  children: React.ReactNode[];
  itemsToShow?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, itemsToShow = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, children.length - itemsToShow);
  const totalDots = maxIndex + 1;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsToShow}%` }}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {maxIndex > 0 && (
        <>
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            disabled={currentIndex === maxIndex}
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </>
      )}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-noor-green' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;