// import React from 'react';
// import { StarIconSolid, VerifiedIcon } from '../icons/Icons';
// import Carousel from '../ui/Carousel';

// const Testimonials: React.FC = () => {
//   const reviews = [
//     { name: 'Ayesha K.', location: 'London, us', date: 'Jan 2026', title: 'Excellent service and clear communication', text: 'Everything was well organised from the start. Hotel details and transfers were explained clearly, and the team stayed responsive throughout.' },
//     { name: 'Imran S.', location: 'Manchester, us', date: 'Dec 2025', title: 'Smooth travel and great support', text: 'We travelled as a family and felt supported at every step. The package matched what was promised and the hotel location was very convenient.' },
//     { name: 'Fatima Z.', location: 'Birmingham, us', date: 'Nov 2025', title: 'Luxury option was worth it', text: 'The 5-star package was excellent. Comfort, timings, and overall coordination made the journey much easier for us.' },
//     { name: 'Ahmed R.', location: 'Leeds, us', date: 'Oct 2025', title: 'Great value for money', text: 'The 3-star package exceeded our expectations. Clean hotel, good location, and the visa process was completely hassle-free.' },
//     { name: 'Sara M.', location: 'Glasgow, us', date: 'Sep 2025', title: 'Highly recommend for families', text: 'Travelling with kids can be stressful but the team made it so easy. Everything was arranged perfectly from flights to transfers.' },
//   ];

//   return (
//     <section className="py-20 bg-noor-light">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-noor-green font-display">What Our Pilgrims Say</h2>
//           <p className="text-gray-500 mt-3 max-w-xl mx-auto">Real experiences from travellers who booked Umrah packages with us—focused on service, clarity, and peace of mind.</p>
//         </div>
//         <Carousel itemsToShow={3}>
//           {reviews.map((review, index) => (
//             <div key={index} className="bg-white p-8 rounded-2xl shadow-sm h-full">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-noor-green/10 rounded-full flex items-center justify-center">
//                     <span className="text-noor-green font-bold text-lg">{review.name[0]}</span>
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-noor-green">{review.name}</h4>
//                     <p className="text-gray-400 text-sm">{review.location}</p>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="flex gap-0.5">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                       <StarIconSolid key={i} className="w-4 h-4 text-noor-gold" />
//                     ))}
//                   </div>
//                   <p className="text-gray-400 text-xs mt-1">{review.date}</p>
//                 </div>
//               </div>
//               <h4 className="font-bold text-noor-green mb-2">{review.title}</h4>
//               <p className="text-gray-500 text-sm leading-relaxed mb-4">{review.text}</p>
//               <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                 <div className="flex items-center gap-1.5 text-noor-green">
//                   <VerifiedIcon className="w-4 h-4" />
//                   <span className="text-xs font-semibold">Verified review</span>
//                 </div>
//                 <span className="text-gray-400 text-xs">Umrah booking</span>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;  



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