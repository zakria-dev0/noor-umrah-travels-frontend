// whyChooseUs.tsx
import React from 'react';
import { CheckShieldIcon, SupportIcon, PlaneIcon, ArrowRightIcon } from '../icons/Icons';
import familyImage from '../../assets/images/packages/1.jpg';

const WhyChooseUs: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src={familyImage}
            alt="Family at airport"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />
        </div>
        <div>
          <span className="inline-flex items-center gap-2 text-noor-green text-xs font-bold tracking-[0.15em] uppercase border border-gray-200 px-4 py-2 rounded-full mb-6">
            ☪ Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-noor-green mb-6 leading-tight font-display">
            Umrah Packages from the us for Every Type of Pilgrim
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Our Umrah packages from the us are designed to meet the real needs of us pilgrims, focusing on reliable flight departures, comfortable hotels near the Haram, clear package inclusions, and professional Umrah support. Whether you are travelling as a couple, with family, or in a group, we help you choose the right flights, accommodation, and ground services for a smooth, well-organised, and spiritually focused Umrah journey.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              {
                icon: <CheckShieldIcon className="w-7 h-7 text-noor-green" />,
                title: 'ATOL Protected Umrah Packages',
                desc: 'Your payments are fully protected.',
              },
              {
                icon: <SupportIcon className="w-7 h-7 text-noor-green" />,
                title: '24/7 Umrah Support',
                desc: 'Dedicated assistance before, during, and after your pilgrimage.',
              },
              {
                icon: <PlaneIcon className="w-7 h-7 text-noor-green" />,
                title: 'Direct Flights from the us',
                desc: 'Faster, more convenient travel to Saudi Arabia with fewer layovers.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-4 border border-gray-100 rounded-xl">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h4 className="font-bold text-noor-green text-sm mb-1">{item.title}</h4>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <button className="bg-noor-green text-white px-8 py-3.5 rounded-full flex items-center gap-2 font-semibold hover:bg-[#2a5c3a] transition-colors">
            Book Now <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;