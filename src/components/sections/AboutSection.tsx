// // sections/AboutSection.tsx
// import React from 'react';
// import { CheckShieldIcon, StarIconSolid, HeadsetIcon, CompassIcon, MailIcon } from '../icons/Icons';

// const AboutSection: React.FC = () => {
//   const features = [
//     { 
//       icon: <CheckShieldIcon className="w-6 h-6 text-noor-green" />, 
//       title: "ATOL-Protected Umrah Packages", 
//       description: "Book with complete confidence. All our Umrah packages are fully ATOL protected, ensuring your payments are financially secure and your travel is risk-free.", 
//       bgColor: "bg-noor-green/5" 
//     },
//     { 
//       icon: <StarIconSolid className="w-6 h-6 text-noor-gold" />, 
//       title: "Luxury Hotels Near the Haram", 
//       description: "Enjoy your stay in carefully selected 4-star and 5-star hotels located within walking distance of Masjid al-Haram and Masjid an-Nabawi, offering unmatched convenience and comfort.", 
//       bgColor: "bg-noor-gold/5" 
//     },
//     { 
//       icon: <HeadsetIcon className="w-6 h-6 text-noor-green" />, 
//       title: "24/7 Dedicated Pilgrim Support", 
//       description: "Our experienced support team is available 24/7 before, during, and after your Umrah journey, ensuring a stress-free and well-guided pilgrimage experience.", 
//       bgColor: "bg-noor-green/5" 
//     },
//     { 
//       icon: <CompassIcon className="w-6 h-6 text-noor-gold" />, 
//       title: "Expert Umrah Guidance", 
//       description: "Our knowledgeable team provides trusted spiritual and logistical guidance to help you perform your Umrah with confidence and clarity.", 
//       bgColor: "bg-noor-gold/5" 
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase bg-noor-gold/10 px-4 py-1.5 rounded-full">About Us</span>
//             <h2 className="text-4xl lg:text-5xl font-bold text-noor-green mt-6 mb-6 leading-tight font-display">Your Trusted US Umrah Travel Partner</h2>
//             <p className="text-gray-600 leading-relaxed mb-10">We blend spiritual insight with professional travel expertise to deliver a smooth, compliant, and memorable Umrah journey from the US, focused on comfort and care.</p>
//             <div className="space-y-6">
//               {features.map((feature, index) => (
//                 <div key={index} className="flex gap-4">
//                   <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>{feature.icon}</div>
//                   <div>
//                     <h3 className="font-bold text-noor-green mb-1">{feature.title}</h3>
//                     <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="mt-10 bg-noor-green text-white px-8 py-3.5 rounded-full flex items-center gap-2 font-semibold hover:bg-[#2a5c3a] transition-colors">
//               <MailIcon className="w-5 h-5" />
//               Contact Us for Free Quote
//             </button>
//           </div>
//           <div>
//             <img src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80" alt="Pilgrim at mosque" className="rounded-2xl shadow-xl w-full h-[550px] object-cover" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection; 

import React from 'react';
import { StarIconSolid, HeadsetIcon, CompassIcon, MailIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const features = [
    { 
      icon: <StarIconSolid className="w-6 h-6 text-white" />, 
      title: "Luxury Hotels Near the Haram", 
      description: "Enjoy your stay in carefully selected 4-star and 5-star hotels located within walking distance of Masjid al-Haram and Masjid an-Nabawi, offering unmatched convenience and comfort.", 
      bgColor: "bg-noor-green" 
    },
    { 
      icon: <HeadsetIcon className="w-6 h-6 text-white" />, 
      title: "24/7 Dedicated Pilgrim Support", 
      description: "Our experienced support team is available 24/7 before, during, and after your Umrah journey, ensuring a stress-free and well-guided pilgrimage experience.", 
      bgColor: "bg-noor-green" 
    },
    { 
      icon: <CompassIcon className="w-6 h-6 text-white" />, 
      title: "Expert Umrah Guidance", 
      description: "Our knowledgeable team provides trusted spiritual and logistical guidance to help you perform your Umrah with confidence and clarity.", 
      bgColor: "bg-noor-green" 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-noor-gold text-sm font-bold tracking-[0.15em] uppercase bg-noor-gold/10 px-4 py-1.5 rounded-full">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-noor-green mt-6 mb-6 leading-tight font-display">Your Trusted US Umrah Travel Partner</h2>
            <p className="text-gray-600 leading-relaxed mb-10">We blend spiritual insight with professional travel expertise to deliver a smooth and memorable Umrah journey from the US, focused on comfort and care.</p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-noor-green mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
              <Link to="/contact" className="mt-10 bg-noor-green text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2 text-sm sm:text-base font-semibold hover:bg-[#2a5c3a] transition-colors">
              <MailIcon className="w-5 h-5" />
              Contact Us for Free Quote
            </Link>
          </div>
          <div>
<img src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&q=80" alt="Pilgrim at mosque" className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;