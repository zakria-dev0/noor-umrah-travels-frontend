import React from 'react';
import { StarIconSolid, VerifiedIcon } from '../icons/Icons';
import Carousel from '../ui/Carousel';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Ayesha K.', location: 'London, us', date: 'Jan 2026', title: 'Excellent service and clear communication', text: 'Everything was well organised from the start. Hotel details and transfers were explained clearly, and the team stayed responsive throughout.' },
    { name: 'Imran S.', location: 'Manchester, us', date: 'Dec 2025', title: 'Smooth travel and great support', text: 'We travelled as a family and felt supported at every step. The package matched what was promised and the hotel location was very convenient.' },
    { name: 'Fatima Z.', location: 'Birmingham, us', date: 'Nov 2025', title: 'Luxury option was worth it', text: 'The 5-star package was excellent. Comfort, timings, and overall coordination made the journey much easier for us.' },
    { name: 'Ahmed R.', location: 'Leeds, us', date: 'Oct 2025', title: 'Great value for money', text: 'The 3-star package exceeded our expectations. Clean hotel, good location, and the visa process was completely hassle-free.' },
    { name: 'Sara M.', location: 'Glasgow, us', date: 'Sep 2025', title: 'Highly recommend for families', text: 'Travelling with kids can be stressful but the team made it so easy. Everything was arranged perfectly from flights to transfers.' },
  ];

  return (
    <section className="py-20 bg-noor-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-noor-green font-display">What Our Pilgrims Say</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">Real experiences from travellers who booked Umrah packages with us—focused on service, clarity, and peace of mind.</p>
        </div>
        <Carousel itemsToShow={3}>
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-noor-green/10 rounded-full flex items-center justify-center">
                    <span className="text-noor-green font-bold text-lg">{review.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-noor-green">{review.name}</h4>
                    <p className="text-gray-400 text-sm">{review.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIconSolid key={i} className="w-4 h-4 text-noor-gold" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs mt-1">{review.date}</p>
                </div>
              </div>
              <h4 className="font-bold text-noor-green mb-2">{review.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-noor-green">
                  <VerifiedIcon className="w-4 h-4" />
                  <span className="text-xs font-semibold">Verified review</span>
                </div>
                <span className="text-gray-400 text-xs">Umrah booking</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;