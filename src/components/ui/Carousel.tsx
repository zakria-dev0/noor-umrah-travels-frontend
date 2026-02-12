//  Carousel.tsx 
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';

interface CarouselProps {
  children: React.ReactNode[];
  itemsToShow?: number;
  itemsToShowTablet?: number; 
  itemsToShowDesktop?: number; 
}

const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  itemsToShow = 1, 
  itemsToShowTablet = 2, 
  itemsToShowDesktop = 3 
}) => {  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine current items to show based on screen size
  const getCurrentItemsToShow = () => {
    if (windowWidth >= 1024) return itemsToShowDesktop; // lg breakpoint
    if (windowWidth >= 768) return itemsToShowTablet;   // md breakpoint
    return itemsToShow;                                  // mobile
  };

  const currentItemsToShow = getCurrentItemsToShow();
  const maxIndex = Math.max(0, children.length - currentItemsToShow);
  const totalDots = maxIndex + 1;

  // Reset index if it exceeds new maxIndex after resize
  React.useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
style={{ transform: `translateX(-${currentIndex * (100 / currentItemsToShow)}%)` }}
        >
          {React.Children.map(children, (child, index) => (
<div key={index} className="flex-shrink-0 px-2 sm:px-3" style={{ width: `${100 / currentItemsToShow}%` }}>
              {child}
            </div>
          ))}
        </div>
      </div>
      {maxIndex > 0 && (
        <>
        <button
  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 disabled:opacity-50"
  disabled={currentIndex === 0}
>
  <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
</button>
         <button
  onClick={() => setCurrentIndex(Math.min(maxIndex, currentIndex + 1))}
  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10 disabled:opacity-50"
  disabled={currentIndex === maxIndex}
>
  <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
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