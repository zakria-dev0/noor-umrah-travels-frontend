// components/sections/Testimonials.tsx
import React, { useState } from 'react';
import { StarIconSolid } from '../icons/Icons';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  package: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Hassan',
    location: 'New York, NY',
    rating: 5,
    text: 'Alhamdulillah, Haram Umrah Travels made our family Umrah absolutely seamless. The hotel was steps away from the Haram, and the support team was always available. Truly a blessed experience.',
    package: '5 Star Kaaba View',
  },
  {
    name: 'Fatima Khan',
    location: 'Chicago, IL',
    rating: 5,
    text: 'From the moment we booked to our return home, everything was perfectly organized. The visa process was hassle-free, and the hotel quality exceeded our expectations. JazakAllah Khair!',
    package: '5 Star Haram View',
  },
  {
    name: 'Omar Siddiqui',
    location: 'Houston, TX',
    rating: 5,
    text: 'This was our third Umrah but first with Haram Umrah Travels. The level of care and attention to detail was unmatched. We felt supported every step of the way. Highly recommend!',
    package: '4 Star Package',
  },
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-noor-green text-xs font-bold tracking-[0.15em] uppercase bg-noor-green/5 px-4 py-2 rounded-full mb-4">
            ⭐ Pilgrim Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            <span className="text-noor-green">What Our </span>
            <span className="text-noor-gold">Pilgrims Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 md:p-8 border transition-all duration-300 ${
                active === index
                  ? 'border-noor-gold/30 shadow-lg shadow-noor-gold/5 scale-[1.02]'
                  : 'border-gray-100 shadow-sm hover:shadow-md'
              }`}
              onMouseEnter={() => setActive(index)}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIconSolid key={i} className="w-4 h-4 text-noor-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[100px]">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-noor-green/10 rounded-full flex items-center justify-center">
                  <span className="text-noor-green font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-noor-green text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location} · {t.package}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;