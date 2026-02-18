// HotelsSection.tsx
import React from 'react';
import { StarIconSolid, ArrowRightIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

const HotelsSection: React.FC = () => (
  <section className="py-20 bg-noor-light">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="bg-noor-gold/10 text-noor-gold text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-flex items-center gap-2">🏨 Premium Accommodations</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-noor-green mt-6 mb-6 leading-tight font-display">Best Hotels Near the Haram in Makkah</h2>
          <p className="text-gray-500 leading-relaxed mb-4">Staying close to the Haram helps you make the most of your Umrah. We offer carefully selected 5-star hotels near Masjid al-Haram in Makkah.</p>
          <p className="text-gray-500 leading-relaxed mb-8">Our Umrah packages include hotels within walking distance or a short shuttle ride from the Haram, helping reduce travel time during busy prayer hours.</p>
          <div className="space-y-4 mb-8">
            {[
              { stars: 5, title: '5-Star Hotels Near the Haram', desc: 'Luxury hotels located very close to the Haram, offering premium facilities, high service standards, and maximum convenience.' },
            ].map((hotel, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-gray-100">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <StarIconSolid key={i} className="w-4 h-4 text-noor-gold" />
                  ))}
                </div>
                <h4 className="font-bold text-noor-green mb-1">{hotel.title}</h4>
                <p className="text-gray-500 text-sm">{hotel.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mb-6">Our Umrah packages include trusted 5-star hotels near the Haram designed to meet the needs of US pilgrims.</p>
            <Link to="/contact" className="bg-noor-green text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2 text-sm sm:text-base font-semibold hover:bg-[#2a5c3a] transition-colors">
            Book Now <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
        <div>
          {/* <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80" alt="Luxury hotel accommodation near Haram Makkah" className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover" /> */}
          <img src="https://images.unsplash.com/photo-1717138387299-baedc062fcea?q=80&w=764" alt="Luxury hotel accommodation near Haram Makkah" className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default HotelsSection;