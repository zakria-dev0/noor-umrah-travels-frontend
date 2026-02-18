// components/ui/Carousel.tsx
import React, { useState, useEffect, useCallback } from 'react';

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
  itemsToShowDesktop = 3,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCurrentItemsToShow = useCallback(() => {
    if (windowWidth >= 1024) return itemsToShowDesktop;
    if (windowWidth >= 768) return itemsToShowTablet;
    return itemsToShow;
  }, [windowWidth, itemsToShow, itemsToShowTablet, itemsToShowDesktop]);

  const currentItemsToShow = getCurrentItemsToShow();
  const maxIndex = Math.max(0, children.length - currentItemsToShow);
  const totalDots = maxIndex + 1;

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const goTo = (index: number) => setCurrentIndex(Math.max(0, Math.min(maxIndex, index)));

  return (
    <div className="relative group/carousel">
      {/* Track */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / currentItemsToShow)}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 sm:px-2.5"
              style={{ width: `${100 / currentItemsToShow}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {maxIndex > 0 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center transition-all duration-300 border border-gray-100 ${
              currentIndex === 0
                ? 'opacity-0 pointer-events-none'
                : 'shadow-lg hover:shadow-xl hover:bg-gray-50 hover:scale-105'
            }`}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-3 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center transition-all duration-300 border border-gray-100 ${
              currentIndex === maxIndex
                ? 'opacity-0 pointer-events-none'
                : 'shadow-lg hover:shadow-xl hover:bg-gray-50 hover:scale-105'
            }`}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {totalDots > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-8 sm:mt-10">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-7 h-2 bg-noor-green'
                  : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;