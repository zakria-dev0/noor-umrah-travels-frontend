// ExpertGuidance.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, MailIcon, PhoneIcon, WhatsAppIcon } from '../icons/Icons';

// Import image from assets folder
import expertGuidanceImage from '../../assets/images/packages/5-3_files/3-star-6955351e8eb2a.jpg'; // Update this path based on your actual file location

const ExpertGuidance: React.FC = () => {
  const navigate = useNavigate();

  return (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div>
          <img
            src={expertGuidanceImage}
            alt="Team meeting"
            className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[350px] md:h-[450px] object-cover"
          />
        </div>
        <div>
          <span className="bg-noor-green/5 text-noor-green text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4 sm:mb-6">
            Expert Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-noor-green mb-4 sm:mb-6 leading-tight font-display">
            Trusted Packages for US Pilgrims
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-base">
            Planning your Umrah from the US has never been easier. Our experienced team helps you select the best Umrah package based on your departure city, travel dates, and hotel preferences. We provide clear details of each package, including hotels near Masjid al-Haram, flights, and ground services, so you can book your pilgrimage confidently.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            Whether traveling as a couple, family, or group, we ensure your Umrah journey is smooth, well-organized, and spiritually fulfilling. From recommending hotels close to the Haram to advising on flights and local transport, our team supports you at every step.
          </p>
          <h4 className="font-bold text-noor-green mb-3 sm:mb-4 text-sm sm:text-base">How We Can Assist You:</h4>
          <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-6">
            <button
              onClick={() => navigate('/packages')}
              className="bg-noor-green text-white px-5 sm:px-6 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-[#2a5c3a] transition-colors"
            >
              <SearchIcon className="w-4 h-4" />
              Browse Packages
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-noor-green text-noor-green px-5 sm:px-6 py-2.5 rounded-full flex items-center justify-center gap-2 text-sm font-semibold hover:bg-noor-green hover:text-white transition-colors"
            >
              <MailIcon className="w-4 h-4" />
              Get a Free Quote
            </button>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mb-1">
            <strong>Browse Packages:</strong> Explore a variety of US Umrah packages that suit your needs.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
            <strong>Get a Free Quote:</strong> Receive personalized recommendations based on your travel plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-noor-green" />
              <div>
                <p className="text-xs text-gray-400">Call Us</p>
                <p className="font-bold text-noor-green text-sm sm:text-base">+1 305 7768923</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <WhatsAppIcon className="w-5 h-5 text-noor-green" />
              <div>
                <p className="text-xs text-gray-400">WhatsApp</p>
                <p className="font-bold text-noor-green text-sm sm:text-base">+1 7866386022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default ExpertGuidance;