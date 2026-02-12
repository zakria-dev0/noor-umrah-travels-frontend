//  // DepartureCities.tsx
// import React from 'react';
// import { PhoneIcon } from '../icons/Icons';

// // Import images using the same path structure as PackageCard
// import londonImg from '../../assets/images/packages/5-3_files/london-umrah-packages-69728887aa630.jpg';
// import manchesterImg from '../../assets/images/packages/5-3_files/manchester-umrah-packages-69728887c15df.jpg';
// import birminghamImg from '../../assets/images/packages/5-3_files/birmingham-umrah-packages-697285a15af47.jpg';
// import edinburghImg from '../../assets/images/packages/5-3_files/edinburg-umrah-packages-6972888796914.jpg';
// import glasgowImg from '../../assets/images/packages/5-3_files/glassgow-umrah-packages-69728887a29a2.jpg';
// import bradfordImg from '../../assets/images/packages/5-3_files/bradford-umrah-packages-69728887a55cf.jpg';

// const DepartureCities: React.FC = () => {
//   const cities = [
//     { 
//       name: 'London', 
//       subtitle: 'Direct flights from Heathrow & Gatwick', 
//       popular: true, 
//       image: londonImg 
//     },
//     { 
//       name: 'Manchester', 
//       subtitle: 'Convenient North West departures', 
//       popular: false, 
//       image: manchesterImg 
//     },
//     { 
//       name: 'Birmingham', 
//       subtitle: 'Heart of England gateway', 
//       popular: false, 
//       image: birminghamImg 
//     },
//     { 
//       name: 'Edinburgh', 
//       subtitle: "Scotland's capital departure point", 
//       popular: false, 
//       image: edinburghImg 
//     },
//     { 
//       name: 'Glasgow', 
//       subtitle: 'West Scotland connections', 
//       popular: false, 
//       image: glasgowImg 
//     },
//     { 
//       name: 'Bradford', 
//       subtitle: 'Yorkshire departure options', 
//       popular: false, 
//       image: bradfordImg 
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <span className="inline-flex items-center gap-2 text-noor-green text-xs font-bold tracking-[0.15em] uppercase border border-gray-200 px-4 py-2 rounded-full mb-4">
//             ✈ us DEPARTURE CITIES
//           </span>
//           <h2 className="text-4xl font-bold mb-4 font-display">
//             <span className="text-noor-green">Umrah Packages from </span>
//             <span className="text-noor-gold">Major us Cities</span>
//           </h2>
//           <p className="text-gray-500 leading-relaxed">
//             Start your sacred journey from your nearest us airport. We offer comprehensive Umrah packages with flights from London, Manchester, Birmingham, and other major cities — complete with visa processing, premium hotels near Haram, and dedicated support throughout your pilgrimage.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {cities.map((city, index) => (
//             <div key={index} className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
//               <img 
//                 src={city.image} 
//                 alt={city.name} 
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
//               <div className="absolute top-4 left-4">
//                 <span className="bg-noor-green/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
//                   FROM {city.name.toUpperCase()}
//                 </span>
//               </div>
              
//               {city.popular && (
//                 <div className="absolute top-4 right-4">
//                   <span className="bg-noor-gold text-white text-xs font-bold px-3 py-1 rounded-full">
//                     MOST POPULAR
//                   </span>
//                 </div>
//               )}
              
//               <div className="absolute bottom-4 left-4 right-4">
//                 <h3 className="text-white font-bold text-lg">Umrah Packages from {city.name}</h3>
//                 <p className="text-white/70 text-sm">{city.subtitle}</p>
//                 <button className="mt-3 bg-white text-noor-green px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
//                   View Packages <span className="bg-noor-green text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">→</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="text-center mt-10">
//           <p className="text-gray-500 mb-3">Can't find your city? We can arrange departures from any us airport.</p>
//           <button className="text-noor-gold font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
//             <PhoneIcon className="w-4 h-4" />
//             Contact Us for Custom Departures
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DepartureCities; 
// DepartureCities.tsx
import React from 'react';
import { PhoneIcon } from '../icons/Icons';
import { useNavigate } from 'react-router-dom';

const DepartureCities: React.FC = () => {
    const navigate = useNavigate();

  const cities = [
    { 
      name: 'Miami', 
      subtitle: 'Direct flights from JFK & Newark', 
      popular: true, 
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80'
    },
    { 
      name: 'New York', 
      subtitle: 'Convenient Texas departures', 
      popular: false, 
      image: 'https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=600&q=80'
    },
    { 
      name: 'Chicago', 
      subtitle: "Midwest's premier gateway", 
      popular: false, 
      image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=600&q=80'
    },
    { 
      name: 'Los Angeles', 
      subtitle: 'West Coast departure point', 
      popular: false, 
      image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&q=80'
    },
    { 
      name: 'Dallas', 
      subtitle: 'South Central connections', 
      popular: false, 
      image: 'https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=600&q=80'
    },
    { 
      name: 'Washington DC', 
      subtitle: 'East Coast departure options', 
      popular: false, 
      image: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=600&q=80'
    },
  ];
const scrollToPackages = () => {
  const packagesSection = document.getElementById('packages-section');
  if (packagesSection) {
    packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-noor-green text-xs font-bold tracking-[0.15em] uppercase border border-gray-200 px-4 py-2 rounded-full mb-4">
            ✈ US DEPARTURE CITIES
          </span>
          <h2 className="text-4xl font-bold mb-4 font-display">
            <span className="text-noor-green">Umrah Packages from </span>
            <span className="text-noor-gold">Major US Cities</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Start your sacred journey from your nearest US airport. We offer comprehensive Umrah packages with flights from New York, Houston, Chicago, and other major cities — complete with visa processing, premium hotels near Haram, and dedicated support throughout your pilgrimage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cities.map((city, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-noor-green/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  FROM {city.name.toUpperCase()}
                </span>
              </div>
              
              {city.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-noor-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg">Umrah Packages from {city.name}</h3>
                <p className="text-white/70 text-sm">{city.subtitle}</p>
               <button 
  onClick={scrollToPackages}
  className="mt-3 bg-white text-noor-green px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
>
  View Packages <span className="bg-noor-green text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">→</span>
</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-3">Can't find your city? We can arrange departures from any US airport.</p>
          <button onClick={() => navigate("/contact")}
          className="text-noor-gold font-semibold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
            <PhoneIcon className="w-4 h-4" />
            Contact Us for Custom Departures
          </button>
        </div>
      </div>
    </section>
  );
};

export default DepartureCities;