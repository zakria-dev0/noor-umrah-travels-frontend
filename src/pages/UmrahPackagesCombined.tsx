// // UmrahPackagesCombined.tsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ArrowRightIcon } from '../components/icons/Icons';

// // Import images for Kaaba View
// import makkah1 from '../assets/images/packages/5-3_files/imp-4.webp';
// import kaabaClose from '../assets/images/packages/5-3_files/imp-5.webp';
// import madinah1 from '../assets/images/packages/5-3_files/imp-6.webp';

// // Import images for Haram View
// import haramImg1 from '../assets/images/packages/5-3_files/im-1.webp';
// import haramImg2 from '../assets/images/packages/5-3_files/imp-3.webp';
// import haramImg3 from '../assets/images/packages/5-3_files/imp-2.webp';

// // ==================== PACKAGE DATA ====================
// interface PackageItem {
//   title: string;
//   nights: number;
//   price: number;
//   image: string;
//   features: string[];
//   type: 'kaaba' | 'haram';
// }

// interface PackageCategory {
//   name: string;
//   subtitle: string;
//   packages: PackageItem[];
// }

// const getKaabaPackageImages = () => ({
//   img1: makkah1,
//   img2: kaabaClose,
//   img3: madinah1,
// });

// const getHaramPackageImages = () => ({
//   img1: haramImg1,
//   img2: haramImg2,
//   img3: haramImg3,
// });

// // Kaaba View packages data
// const kaabaViewData: PackageCategory = {
//   name: '5 Star Kaaba View Umrah Packages',
//   subtitle: 'Haram Umrah Travels',
//   packages: [
//     {
//       title: '5 Star Kaaba View Package',
//       nights: 5,
//       price: 990,
//       image: 'img1',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       type: 'kaaba',
//     },
//     {
//       title: '5 Star Kaaba View Package',
//       nights: 7,
//       price: 1190,
//       image: 'img2',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       type: 'kaaba',
//     },
//     {
//       title: '5 Star Kaaba View Package',
//       nights: 10,
//       price: 1390,
//       image: 'img3',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       type: 'kaaba',
//     },
//   ],
// };

// // Haram View packages data
// const haramViewData: PackageCategory = {
//   name: '5 Star Haram View Umrah Packages',
//   subtitle: 'Haram Umrah Travels',
//   packages: [
//     {
//       title: '5 Star Haram View Package',
//       nights: 5,
//       price: 890,
//       image: 'img1',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       type: 'haram',
//     },
//     {
//       title: '5 Star Haram View Package',
//       nights: 7,
//       price: 990,
//       image: 'img2',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       type: 'haram',
//     },
//     {
//       title: '5 Star Haram View Package',
//       nights: 10,
//       price: 1190,
//       image: 'img3',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       type: 'haram',
//     },
//   ],
// };

// // ==================== FEATURE ICONS ====================
// const FeatureIcon = ({ type }: { type: string }) => {
//   const lower = type.toLowerCase();
//   if (lower.includes('visa')) {
//     return (
//       <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
//       </svg>
//     );
//   }
//   if (lower.includes('flight')) {
//     return (
//       <svg className="w-4 h-4 text-noor-gold" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
//       </svg>
//     );
//   }
//   if (lower.includes('transportation')) {
//     return (
//       <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-4-10l-4 4m0 0l4 4m-4-4h12" />
//       </svg>
//     );
//   }
//   if (lower.includes('hotel')) {
//     return (
//       <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//       </svg>
//     );
//   }
//   return (
//     <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//     </svg>
//   );
// };

// // ==================== HERO BANNER ====================
// const PackagesHero = () => (
//   <section className="relative py-20 overflow-hidden">
//     <div className="absolute inset-0 bg-noor-green">
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
//           backgroundSize: '20px 20px',
//         }}
//       />
//     </div>
//     <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
//       <p className="text-noor-gold font-display text-2xl italic mb-2">Haram Umrah Travels</p>
//       <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">5 Star Umrah Packages</h1>
//       <p className="text-white/80 mt-4 text-lg">Kaaba View & Haram View Packages</p>
//     </div>

//     {/* Inquiry Form */}
//     <div className="relative z-20 max-w-4xl mx-auto px-4 mt-12">
//       <div className="bg-white rounded-2xl shadow-xl p-6">
//         <h3 className="text-center font-bold text-noor-green text-lg mb-4">
//           Let's Plan your Umrah Together
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
//           />
//           <input
//             type="tel"
//             placeholder="Phone No"
//             className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
//           />
//           <input
//             type="text"
//             placeholder="Your Enquiry"
//             className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
//           />
//         </div>
//         <button className="w-full mt-4 bg-noor-gold text-white py-3 rounded-lg font-semibold hover:bg-[#b89a3e] transition-colors">
//           Get Best Prices
//         </button>
//       </div>
//     </div>
//   </section>
// );

// // ==================== PACKAGE CARD ====================
// const UmrahPackageCard = ({ pkg }: { pkg: PackageItem }) => {
//   const kaabaImages = getKaabaPackageImages();
//   const haramImages = getHaramPackageImages();
//   const images = pkg.type === 'kaaba' ? kaabaImages : haramImages;
//   const imgSrc = images[pkg.image as keyof typeof images] || images.img1;
//   const navigate = useNavigate();

//   const handleMoreDetails = () => {
//     const viewType = pkg.type === 'kaaba' ? 'kaaba-view' : 'haram-view';
//     navigate(`/packages/${viewType}/${pkg.nights}`);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
//       {/* Image with nights badge */}
//       <div className="relative">
//         <img
//           src={imgSrc}
//           alt={pkg.title}
//           className="w-full h-56 object-cover"
//         />
//         <div className="absolute bottom-4 left-4">
//           <div className="bg-noor-gold text-white px-3 py-1 rounded-t-lg text-xs font-bold tracking-wider">
//             NIGHTS
//           </div>
//           <div className="bg-noor-gold/90 text-white px-3 py-2 rounded-b-lg rounded-tr-lg text-3xl font-bold">
//             {String(pkg.nights).padStart(2, '0')}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-5">
//         <h3 className="font-bold text-noor-green text-lg mb-3 leading-tight">{pkg.title}</h3>

//         {/* Price */}
//         <div className="mb-4">
//           <span className="text-noor-gold text-xs align-top">$</span>
//           <span className="text-4xl font-bold text-noor-green">{pkg.price}</span>
//           <span className="text-gray-400 text-sm ml-1">/ Per Person</span>
//         </div>

//         {/* Features */}
//         <div className="space-y-2.5 mb-5">
//           {pkg.features.map((feature, i) => (
//             <div key={i} className="flex items-center gap-2.5">
//               <FeatureIcon type={feature} />
//               <span className="text-gray-600 text-sm">{feature}</span>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <button
//           onClick={handleMoreDetails}
//           className="bg-noor-green text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#2a5c3a] transition-colors flex items-center gap-2 w-full justify-center"
//         >
//           More Details
//           <ArrowRightIcon className="w-3 h-3" />
//         </button>
//       </div>
//     </div>
//   );
// };

// // ==================== PACKAGE CATEGORY SECTION ====================
// const PackageCategorySection = ({ category }: { category: PackageCategory }) => (
//   <section className="py-16">
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="text-center mb-10">
//         <p className="text-noor-gold font-display text-xl italic mb-1">{category.subtitle}</p>
//         <h2 className="text-3xl font-bold text-noor-green font-display">{category.name}</h2>
//         <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {category.packages.map((pkg, index) => (
//           <UmrahPackageCard key={index} pkg={pkg} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // ==================== MAIN PAGE COMPONENT ====================
// const UmrahPackagesCombined: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Banner */}
//       <PackagesHero />

//       {/* Kaaba View Packages Section */}
//       <PackageCategorySection category={kaabaViewData} />

//       {/* Haram View Packages Section */}
//       <PackageCategorySection category={haramViewData} />
//     </div>
//   );
// };

// export default UmrahPackagesCombined;



// UmrahPackagesCombined.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons/Icons';

// Import images for 5-Star Kaaba View
import makkah1 from '../assets/images/packages/5-3_files/imp-4.webp';
import kaabaClose from '../assets/images/packages/5-3_files/imp-5.webp';
import madinah1 from '../assets/images/packages/5-3_files/imp-6.webp';

// Import images for 5-Star Haram View
import haramImg1 from '../assets/images/packages/5-3_files/im-1.webp';
import haramImg2 from '../assets/images/packages/5-3_files/imp-3.webp';
import haramImg3 from '../assets/images/packages/5-3_files/imp-2.webp';

// ==================== TYPES ====================
interface PackageItem {
  title: string;
  nights: number;
  price: number;
  image: string;
  features: string[];
  type: 'kaaba' | 'haram';
}

interface PackageCategory {
  name: string;
  subtitle: string;
  packages: PackageItem[];
}

interface HotelInfo {
  name: string;
  stars: number;
  description: string;
  image: string;
}

interface DetailedPackageItem {
  title: string;
  nights: number;
  price: number;
  images: string[];
  includes: string[];
  makkahNights: number;
  madinahNights: number;
  makkahStarRating: number;
  madinahStarRating: number;
  hotels: HotelInfo[];
}

type TabType = '5star' | '4star' | '3star';

// ==================== 5-STAR IMAGE HELPERS ====================
const getKaabaPackageImages = () => ({
  img1: makkah1,
  img2: kaabaClose,
  img3: madinah1,
});

const getHaramPackageImages = () => ({
  img1: haramImg1,
  img2: haramImg2,
  img3: haramImg3,
});

// ==================== 5-STAR PACKAGE DATA ====================
const kaabaViewData: PackageCategory = {
  name: '5 Star Kaaba View Umrah Packages',
  subtitle: 'Haram Umrah Travels',
  packages: [
    {
      title: '5 Star Kaaba View Package',
      nights: 5,
      price: 990,
      image: 'img1',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'kaaba',
    },
    {
      title: '5 Star Kaaba View Package',
      nights: 7,
      price: 1190,
      image: 'img2',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'kaaba',
    },
    {
      title: '5 Star Kaaba View Package',
      nights: 10,
      price: 1390,
      image: 'img3',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'kaaba',
    },
  ],
};

const haramViewData: PackageCategory = {
  name: '5 Star Haram View Umrah Packages',
  subtitle: 'Haram Umrah Travels',
  packages: [
    {
      title: '5 Star Haram View Package',
      nights: 5,
      price: 890,
      image: 'img1',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'haram',
    },
    {
      title: '5 Star Haram View Package',
      nights: 7,
      price: 990,
      image: 'img2',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'haram',
    },
    {
      title: '5 Star Haram View Package',
      nights: 10,
      price: 1190,
      image: 'img3',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      type: 'haram',
    },
  ],
};

// ==================== 4-STAR PACKAGE DATA ====================
const fourStarPackages: DetailedPackageItem[] = [
  {
    title: '5 Nights 4 Star Umrah Packages from US',
    nights: 5,
    price: 1319,
    images: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=80',
    ],
    includes: [
      'Umrah Visa',
      'All Packages Are Based On Quad Sharing',
      'Return Flights',
      'Ground Transfers Can Be Included On Extra Cost',
      '3 Nights in Makkah 4 Star Hotel',
      'Direct Flights Can Be Arranged On Special Request',
      '2 Nights in Madinah 4 Star Hotel',
    ],
    makkahNights: 3,
    madinahNights: 2,
    makkahStarRating: 4,
    madinahStarRating: 4,
    hotels: [
      {
        name: 'Dar Al Eiman Grand',
        stars: 4,
        description:
          'Located in the Al Mesfalah district of Mecca, the Eiman Grand Hotel offers amenities like currency exchange, an elevator, and a restaurant, along with attentive staff. The hotel features 618 air-conditioned rooms equipped with work desks and electric kettles. Guests can enjoy a continental breakfast, and the center of Mecca is a 15-minute walk away.',
        image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80',
      },
      {
        name: 'Dar Al Eiman Al Manar',
        stars: 4,
        description:
          'Dar Al Eiman Al Manar Hotel Medina, a 4-star hotel located about a 10-minute drive from Quba Mosque, offers Wi-Fi in public areas and parking. Situated in a business area, it\'s also 10 minutes from natural attractions like Al Aswaf Garden. The hotel features 252 rooms with flat-screen TVs and mini-fridges, providing city views.',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
      },
    ],
  },
  {
    title: '7 Nights 4 Star Umrah Packages from US',
    nights: 7,
    price: 1360,
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=500&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&q=80',
    ],
    includes: [
      'Umrah Visa',
      'All Packages Are Based On Quad Sharing',
      'Return Flights',
      'Ground Transfers Can Be Included On Extra Cost',
      '4 Nights in Makkah 4 Star Hotel',
      'Direct Flights Can Be Arranged On Special Request',
      '3 Nights in Madinah 4 Star Hotel',
    ],
    makkahNights: 4,
    madinahNights: 3,
    makkahStarRating: 4,
    madinahStarRating: 4,
    hotels: [
      {
        name: 'Elaf Bakkah Hotel',
        stars: 4,
        description:
          'Being close to the Holy Mosque is a key consideration for pilgrims looking for accommodations that offer easy access to sacred sites. Elaf Bakkah stands out as a prime option, boasting an outstanding location in Al-Aziziyah, Mahbas Al-Jin, with stunning views of the vibrant city of Makkah. The hotel features 810 guest rooms and suites, including 390 interconnecting rooms.',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
      },
      {
        name: 'Jewar Al Saqefah Hotel',
        stars: 4,
        description:
          'Jewar Al Saqefah Hotel is ideally situated in the vibrant Central Area. This property boasts an array of amenities to ensure a delightful stay. Guests can enjoy 24-hour room service, complimentary Wi-Fi throughout the hotel, daily housekeeping, round-the-clock security, and wheelchair accessibility.',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=600&q=80',
      },
    ],
  },
  {
    title: '10 Nights 4 Star Umrah Packages from US',
    nights: 10,
    price: 1430,
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=500&q=80',
    ],
    includes: [
      'Umrah Visa',
      'All Packages Are Based On Quad Sharing',
      'Return Flights',
      'Ground Transfers Can Be Included On Extra Cost',
      '5 Nights in Makkah 4 Star Hotel',
      'Direct Flights Can Be Arranged On Special Request',
      '5 Nights in Madinah 4 Star Hotel',
    ],
    makkahNights: 5,
    madinahNights: 5,
    makkahStarRating: 4,
    madinahStarRating: 4,
    hotels: [
      {
        name: 'Voco Makkah An IHG Hotel',
        stars: 4,
        description:
          'Situated in Makkah, just 1.3 km from Masjid Al-Haram, Voco Makkah, an IHG Hotel, offers accommodations that include a restaurant, complimentary private parking, and a shared lounge. Guests can enjoy a 24-hour front desk, free shuttle service, room service, and free WiFi throughout the hotel.',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
      },
      {
        name: 'Al Rawda Al Aqeeq Hotel',
        stars: 4,
        description:
          "Al Rawda Al Aqeeq Hotel provides accommodations in Al Madinah, complete with an on-site restaurant for guests to enjoy. Each room at the hotel is air-conditioned and equipped with a flat-screen TV, along with a kettle. The Prophet's Mosque is located just 300 meters from the hotel.",
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
      },
    ],
  },
];

// ==================== 3-STAR PACKAGE DATA ====================
const threeStarPackages: DetailedPackageItem[] = [
  {
    title: '5 Nights 3 Star Umrah Packages from US',
    nights: 5,
    price: 1270,
    images: [
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=500&q=80',
    ],
    includes: [
      'Umrah Visa',
      'All Packages Are Based On Quad Sharing',
      'Return Flights',
      'Ground Transfers Can Be Included On Extra Cost',
      '3 Nights in Makkah 3 Star Hotel',
      'Direct Flights Can Be Arranged On Special Request',
      '2 Nights in Madinah 3 Star Hotel',
    ],
    makkahNights: 3,
    madinahNights: 2,
    makkahStarRating: 3,
    madinahStarRating: 3,
    hotels: [
      {
        name: 'Dar Al Eiman Al Sud Hotel',
        stars: 3,
        description:
          'Dar Al Eiman Al Sud Hotel in Mecca offers Wi-Fi in public areas and is located 2.5 km from Masjid al-Haram. This 3-star hotel features 365 rooms with city views and is a 10-minute drive from the Kaaba. Guests can savor Indian cuisine at Paradise Restaurant, situated in the Ajyad district.',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
      },
      {
        name: 'Dar Al Eiman Al Nour',
        stars: 3,
        description:
          'Situated in the Central Madinah district of Medina, the 3-star Dar Al Eiman Al Nour Hotel is just 1.2 km from cultural attractions like As-Salaam Museum. Guests can take advantage of on-site parking. Each of the 140 rooms features a flat-screen TV with satellite channels and a mini-fridge.',
        image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=80',
      },
    ],
  },
  {
    title: '7 Nights 3 Star December Umrah Package',
    nights: 7,
    price: 1300,
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&q=80',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80',
    ],
    includes: [
      'Umrah Visa',
      'All Packages Are Based On Quad Sharing',
      'Return Flights',
      'Ground Transfers Can Be Included On Extra Cost',
      '4 Nights in Makkah 3 Star Hotel',
      'Direct Flights Can Be Arranged On Special Request',
      '3 Nights in Madinah 3 Star Hotel',
    ],
    makkahNights: 4,
    madinahNights: 3,
    makkahStarRating: 3,
    madinahStarRating: 3,
    hotels: [
      {
        name: 'Al Kiswah Towers',
        stars: 3,
        description:
          'The Al Kiswah Towers Hotel in Makkah is located 900 meters from Masjid Al Haram and 1 km from Abraj Al Bait. It offers free WiFi. The property is 9 miles from Hira Cave and 9 km from Um AlQura University. The hotel has flat-screen TVs in each of its guest rooms.',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
      },
      {
        name: 'Nada Al Salam',
        stars: 3,
        description:
          "Nada Al Salam Hotel is conveniently located in the central Al Madinah district, just 2 km from the Prophet's Mosque, 2.8 km from the Old Bazaar, and 3.3 km from Mazaya Mall. The hotel offers a 24-hour front desk, room service, and family rooms for guests.",
        image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80',
      },
    ],
  },
  {
    title: '10 Nights 3 Star Ramadan Umrah Package',
    nights: 10,
    price: 1350,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=500&q=80',
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=500&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80',
    ],
    includes: [
      'Umrah Visa',
      'All Packages Are Based On Quad Sharing',
      'Return Flights',
      'Ground Transfers Can Be Included On Extra Cost',
      '5 Nights in Makkah 3 Star Hotel',
      'Direct Flights Can Be Arranged On Special Request',
      '5 Nights in Madinah 3 Star Hotel',
    ],
    makkahNights: 5,
    madinahNights: 5,
    makkahStarRating: 3,
    madinahStarRating: 3,
    hotels: [
      {
        name: 'Durrat Dar Al Eiman',
        stars: 3,
        description:
          "Just 150 meters from the Prophet's Mosque, Al Eiman offers air-conditioned rooms with free Wi-Fi, an elevator, and a 24-hour front desk. Free parking is available (subject to availability). Each colorful room features a TV, minibar, bright decor, wooden furniture, and carpeted floors.",
        image: 'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=600&q=80',
      },
      {
        name: 'Al Alya Hotel',
        stars: 3,
        description:
          'Located a 25-minute walk from Al Masjid a Nabawi Mosque, the 3-star Fndk Alaliaa Medina hotel offers 120 rooms with convenient on-site parking. Each room includes an electric kettle, high-speed internet, and a flat screen TV with satellite channels.',
        image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=600&q=80',
      },
    ],
  },
];

// ==================== FEATURE ICONS ====================
const FeatureIcon = ({ type }: { type: string }) => {
  const lower = type.toLowerCase();
  if (lower.includes('visa')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
      </svg>
    );
  }
  if (lower.includes('flight')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      </svg>
    );
  }
  if (lower.includes('transportation')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-4-10l-4 4m0 0l4 4m-4-4h12" />
      </svg>
    );
  }
  if (lower.includes('hotel')) {
    return (
      <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
};

// ==================== STAR RATING COMPONENT ====================
const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-noor-gold fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// ==================== IMAGE GALLERY COMPONENT (Grid Layout) ====================
const ImageGallery = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const sideImages = images.filter((_, i) => i !== currentIndex);

  return (
    <div className="relative">
      {/* Mobile: single image slider */}
      <div className="block md:hidden">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src={images[currentIndex]}
            alt="Package"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80';
            }}
          />
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow transition-colors z-10"
          >
            <svg className="w-4 h-4 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow transition-colors z-10"
          >
            <svg className="w-4 h-4 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {/* Mobile thumbnails row */}
        <div className="flex gap-1.5 mt-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`flex-shrink-0 w-14 h-14 rounded overflow-hidden border-2 transition-colors ${
                i === currentIndex ? 'border-noor-green' : 'border-transparent'
              }`}
            >
              <img
                src={img}
                alt={`Thumb ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=200&q=80';
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: grid layout */}
      <div className="hidden md:grid grid-cols-2 gap-2" style={{ height: '340px' }}>
        {/* Large Main Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={images[currentIndex]}
            alt="Package"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80';
            }}
          />
          <button
            onClick={goToPrev}
            className="absolute left-2 bottom-3 bg-white/90 hover:bg-white rounded p-1.5 shadow transition-colors z-10"
          >
            <svg className="w-4 h-4 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 bottom-3 bg-white/90 hover:bg-white rounded p-1.5 shadow transition-colors z-10"
          >
            <svg className="w-4 h-4 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right Side Grid */}
        <div className="grid grid-cols-2 grid-rows-3 gap-1.5">
          {sideImages.slice(0, 6).map((img, i) => (
            <button
              key={i}
              onClick={() => {
                const originalIndex = images.indexOf(img);
                setCurrentIndex(originalIndex);
              }}
              className="overflow-hidden rounded-md hover:opacity-90 transition-opacity"
            >
              <img
                src={img}
                alt={`View ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&q=80';
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === currentIndex ? 'bg-noor-green' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ==================== HERO BANNER ====================
const PackagesHero = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0 bg-noor-green">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
      <p className="text-noor-gold font-display text-2xl italic mb-2">Haram Umrah Travels</p>
      <h1 className="text-4xl lg:text-5xl font-bold text-white font-display">Umrah Packages</h1>
      <p className="text-white/80 mt-4 text-lg">5 Star, 4 Star & 3 Star Packages</p>
    </div>

    {/* Inquiry Form */}
    <div className="relative z-20 max-w-4xl mx-auto px-4 mt-12">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-center font-bold text-noor-green text-lg mb-4">
          Let's Plan your Umrah Together
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
          />
          <input
            type="tel"
            placeholder="Phone No"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
          />
          <input
            type="text"
            placeholder="Your Enquiry"
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none"
          />
        </div>
        <button className="w-full mt-4 bg-noor-gold text-white py-3 rounded-lg font-semibold hover:bg-[#b89a3e] transition-colors">
          Get Best Prices
        </button>
      </div>
    </div>
  </section>
);

// ==================== TAB SWITCHER ====================
const TabSwitcher = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}) => {
  const tabs: { key: TabType; label: string }[] = [
    { key: '5star', label: '5 Star' },
    { key: '4star', label: '4 Star' },
    { key: '3star', label: '3 Star' },
  ];

  return (
    <div className="flex justify-center py-8">
      <div className="bg-noor-green/10 rounded-full p-1.5 flex gap-1 border border-noor-green/20">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
              activeTab === tab.key
                ? 'bg-noor-green text-white shadow-md'
                : 'text-noor-green hover:bg-noor-green/10'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// ==================== 5-STAR PACKAGE CARD ====================
const UmrahPackageCard = ({ pkg }: { pkg: PackageItem }) => {
  const kaabaImages = getKaabaPackageImages();
  const haramImages = getHaramPackageImages();
  const images = pkg.type === 'kaaba' ? kaabaImages : haramImages;
  const imgSrc = images[pkg.image as keyof typeof images] || images.img1;
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    const viewType = pkg.type === 'kaaba' ? 'kaaba-view' : 'haram-view';
    navigate(`/packages/${viewType}/${pkg.nights}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative cursor-pointer" onClick={handleMoreDetails}>
        <img src={imgSrc} alt={pkg.title} className="w-full h-56 object-cover" />
        <div className="absolute bottom-4 left-4">
          <div className="bg-noor-gold text-white px-3 py-1 rounded-t-lg text-xs font-bold tracking-wider">
            NIGHTS
          </div>
          <div className="bg-noor-gold/90 text-white px-3 py-2 rounded-b-lg rounded-tr-lg text-3xl font-bold">
            {String(pkg.nights).padStart(2, '0')}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-noor-green text-lg mb-3 leading-tight">{pkg.title}</h3>
        <div className="mb-4">
          <span className="text-noor-gold text-xs align-top">$</span>
          <span className="text-4xl font-bold text-noor-green">{pkg.price}</span>
          <span className="text-gray-400 text-sm ml-1">/ Per Person</span>
        </div>
        <div className="space-y-2.5 mb-5">
          {pkg.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <FeatureIcon type={feature} />
              <span className="text-gray-600 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handleMoreDetails}
          className="bg-noor-green text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#2a5c3a] transition-colors flex items-center gap-2 w-full justify-center"
        >
          More Details
          <ArrowRightIcon className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

// ==================== 5-STAR CATEGORY SECTION ====================
const PackageCategorySection = ({ category }: { category: PackageCategory }) => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-noor-gold font-display text-xl italic mb-1">{category.subtitle}</p>
        <h2 className="text-3xl font-bold text-noor-green font-display">{category.name}</h2>
        <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {category.packages.map((pkg, index) => (
          <UmrahPackageCard key={index} pkg={pkg} />
        ))}
      </div>
    </div>
  </section>
);

// ==================== DETAILED PACKAGE CARD (4-Star & 3-Star) ====================
const DetailedPackageCard = ({ pkg }: { pkg: DetailedPackageItem }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 md:mb-12">
      {/* Header with Title & Price */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-100 gap-2">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-noor-green">{pkg.title}</h3>
        <div className="text-left sm:text-right flex-shrink-0">
          <span className="text-gray-400 text-xs">FR </span>
          <span className="text-2xl sm:text-3xl font-bold text-noor-green">${pkg.price}</span>
          <span className="text-gray-400 text-sm">pp</span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-4 sm:px-6 py-4">
        <ImageGallery images={pkg.images} />
      </div>

      {/* Package Includes */}
      <div className="px-4 sm:px-6 py-4 border-t border-gray-100">
        <h4 className="text-noor-green font-bold text-lg mb-3 underline">Package Includes</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {pkg.includes.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-noor-green flex-shrink-0" />
              <span className="text-gray-600 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mx-4 sm:mx-6" />

      {/* Hotels */}
      <div className="px-4 sm:px-6 py-6 space-y-8">
        {pkg.hotels.map((hotel, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } gap-4 md:gap-6 items-start`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h5 className="text-base sm:text-lg font-bold text-gray-900 uppercase tracking-wide">
                  {hotel.name}
                </h5>
                <StarRating count={hotel.stars} />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{hotel.description}</p>
            </div>
            <div className="w-full md:w-72 flex-shrink-0">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover rounded-lg shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80';
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== 4-STAR & 3-STAR SECTIONS ====================
const DetailedPackagesSection = ({
  packages,
  starLevel,
}: {
  packages: DetailedPackageItem[];
  starLevel: number;
}) => (
  <section className="py-12">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-noor-gold font-display text-xl italic mb-1">Haram Umrah Travels</p>
        <h2 className="text-3xl font-bold text-noor-green font-display">
          {starLevel} Star Umrah Packages from US
        </h2>
        <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
      </div>
      {packages.map((pkg, index) => (
        <DetailedPackageCard key={index} pkg={pkg} />
      ))}
    </div>
  </section>
);

// ==================== MAIN PAGE COMPONENT ====================
const UmrahPackagesCombined: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('5star');

  return (
    <div className="min-h-screen bg-white">
      <PackagesHero />
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === '5star' && (
        <>
          <PackageCategorySection category={kaabaViewData} />
          <PackageCategorySection category={haramViewData} />
        </>
      )}

      {activeTab === '4star' && (
        <DetailedPackagesSection packages={fourStarPackages} starLevel={4} />
      )}

      {activeTab === '3star' && (
        <DetailedPackagesSection packages={threeStarPackages} starLevel={3} />
      )}
    </div>
  );
};

export default UmrahPackagesCombined;