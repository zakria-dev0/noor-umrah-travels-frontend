//   // UmrahPackagesCombined.tsx
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { ArrowRightIcon } from '../components/icons/Icons';

// // Import images for 5-Star Kaaba View
// import makkah1 from '../assets/images/packages/5-3_files/imp-4.webp';
// import kaabaClose from '../assets/images/packages/5-3_files/imp-5.webp';
// import madinah1 from '../assets/images/packages/5-3_files/imp-6.webp';

// // Import images for 5-Star Haram View
// import haramImg1 from '../assets/images/packages/5-3_files/im-1.webp';
// import haramImg2 from '../assets/images/packages/5-3_files/imp-3.webp';
// import haramImg3 from '../assets/images/packages/5-3_files/imp-2.webp';

// // ==================== TYPES ====================
// interface PackageItem {
//   title: string;
//   nights: number;
//   price: number;
//   image: string;
//   features: string[];
//   description: string;
//   type: 'kaaba' | 'haram';
// }

// interface PackageCategory {
//   name: string;
//   subtitle: string;
//   packages: PackageItem[];
// }

// interface HotelInfo {
//   name: string;
//   stars: number;
//   description: string;
//   image: string;
// }

// interface DetailedPackageItem {
//   title: string;
//   nights: number;
//   price: number;
//   images: string[];
//   includes: string[];
//   makkahNights: number;
//   madinahNights: number;
//   makkahStarRating: number;
//   madinahStarRating: number;
//   hotels: HotelInfo[];
// }

// type StarType = '5star' | '4star' | '3star';
// type FiveStarView = 'haram' | 'kaaba';

// // ==================== 5-STAR IMAGE HELPERS ====================
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

// // ==================== 5-STAR PACKAGE DATA ====================
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
//       description:
//         'Experience the breathtaking view of the Holy Kaaba from your luxury 5-star hotel room. This exclusive package includes premium accommodations steps away from Haram, round-trip flights, private transfers, and full Umrah visa processing. Ideal for pilgrims seeking a short yet spiritually enriching journey.',
//       type: 'kaaba',
//     },
//     {
//       title: '5 Star Kaaba View Package',
//       nights: 7,
//       price: 1190,
//       image: 'img2',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       description:
//         'Our most popular Kaaba View package offers 7 nights of unparalleled luxury with direct views of the Holy Kaaba. Enjoy spacious 5-star rooms in Makkah and Haram, guided Ziyarat tours, 24/7 concierge assistance, and seamless ground transportation between the two Holy Cities.',
//       type: 'kaaba',
//     },
//     {
//       title: '5 Star Kaaba View Package',
//       nights: 10,
//       price: 1390,
//       image: 'img3',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       description:
//         'The ultimate Kaaba View experience with 10 nights of 5-star luxury. This comprehensive package allows ample time for worship, reflection, and exploration. Includes premium Haram-facing rooms, VIP airport reception, private transfers, daily breakfast, and dedicated Umrah guide throughout your blessed journey.',
//       type: 'kaaba',
//     },
//   ],
// };

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
//       description:
//         'Enjoy stunning Haram views from your 5-star hotel in this carefully curated 5-night Umrah package. Walk to the Holy Mosque in minutes, perform your Umrah rituals with ease, and return to world-class comfort. Includes Umrah visa, return flights, and private ground transfers.',
//       type: 'haram',
//     },
//     {
//       title: '5 Star Haram View Package',
//       nights: 7,
//       price: 990,
//       image: 'img2',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       description:
//         'Our 7-night Haram View package provides the perfect balance of worship and comfort. Stay in premium hotels overlooking the Haram in both Makkah and the Holy City. Benefit from guided Ziyarat visits, complimentary breakfast, 24-hour room service, and hassle-free transportation throughout your stay.',
//       type: 'haram',
//     },
//     {
//       title: '5 Star Haram View Package',
//       nights: 10,
//       price: 1190,
//       image: 'img3',
//       features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
//       description:
//         'Immerse yourself in 10 nights of spiritual devotion with panoramic Haram views. This all-inclusive luxury package features the finest 5-star hotels near both Holy Mosques, VIP check-in service, daily buffet meals, guided Umrah support, and comfortable private transfers between the sacred cities.',
//       type: 'haram',
//     },
//   ],
// };

// // ==================== 4-STAR PACKAGE DATA ====================
// const fourStarPackages: DetailedPackageItem[] = [
//   {
//     title: '5 Nights 4 Star Umrah Package from US',
//     nights: 5,
//     price: 1319,
//     images: [
//       'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80',
//       'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
//       'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
//       'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
//       'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&q=80',
//       'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80',
//       'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=80',
//     ],
//     includes: [
//       'Umrah Visa',
//       'All Packages Are Based On Quad Sharing',
//       'Return Flights',
//       'Ground Transfers Can Be Included On Extra Cost',
//       '3 Nights in Makkah 4 Star Hotel',
//       'Direct Flights Can Be Arranged On Special Request',
//       '2 Nights in Haram 4 Star Hotel',
//     ],
//     makkahNights: 3,
//     madinahNights: 2,
//     makkahStarRating: 4,
//     madinahStarRating: 4,
//     hotels: [
//       {
//         name: 'Dar Al Eiman Grand',
//         stars: 4,
//         description:
//           'Located in the Al Mesfalah district of Makkah, the Eiman Grand Hotel offers premium amenities including currency exchange, an elevator, and an on-site restaurant with attentive staff. The hotel features 618 air-conditioned rooms equipped with work desks and electric kettles. Guests can enjoy a continental breakfast, and the Holy Haram is just a 15-minute walk away.',
//         image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80',
//       },
//       {
//         name: 'Dar Al Eiman Al Manar',
//         stars: 4,
//         description:
//           'Dar Al Eiman Al Manar Hotel, a 4-star property located about a 10-minute drive from Quba Mosque, offers complimentary Wi-Fi in public areas and convenient parking. Situated in a prime business area near Al Aswaf Garden, the hotel features 252 elegantly appointed rooms with flat-screen TVs and mini-fridges, providing beautiful city views.',
//         image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
//       },
//     ],
//   },
//   {
//     title: '7 Nights 4 Star Umrah Package from US',
//     nights: 7,
//     price: 1360,
//     images: [
//       'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
//       'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=500&q=80',
//       'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=80',
//       'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80',
//       'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80',
//       'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&q=80',
//       'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500&q=80',
//     ],
//     includes: [
//       'Umrah Visa',
//       'All Packages Are Based On Quad Sharing',
//       'Return Flights',
//       'Ground Transfers Can Be Included On Extra Cost',
//       '4 Nights in Makkah 4 Star Hotel',
//       'Direct Flights Can Be Arranged On Special Request',
//       '3 Nights in Haram 4 Star Hotel',
//     ],
//     makkahNights: 4,
//     madinahNights: 3,
//     makkahStarRating: 4,
//     madinahStarRating: 4,
//     hotels: [
//       {
//         name: 'Elaf Bakkah Hotel',
//         stars: 4,
//         description:
//           'Being close to the Holy Mosque is a key consideration for pilgrims seeking easy access to sacred sites. Elaf Bakkah stands out as a prime option, boasting an outstanding location in Al-Aziziyah, Mahbas Al-Jin, with stunning views of the vibrant city of Makkah. The hotel features 810 guest rooms and suites, including 390 interconnecting rooms ideal for families.',
//         image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
//       },
//       {
//         name: 'Jewar Al Saqefah Hotel',
//         stars: 4,
//         description:
//           'Jewar Al Saqefah Hotel is ideally situated in the vibrant Central Area near the Holy Haram. This premium property boasts an array of amenities to ensure a delightful stay. Guests can enjoy 24-hour room service, complimentary Wi-Fi throughout the hotel, daily housekeeping, round-the-clock security, and wheelchair accessibility.',
//         image: 'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=600&q=80',
//       },
//     ],
//   },
//   {
//     title: '10 Nights 4 Star Umrah Package from US',
//     nights: 10,
//     price: 1430,
//     images: [
//       'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
//       'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&q=80',
//       'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
//       'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
//       'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
//       'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80',
//       'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=500&q=80',
//     ],
//     includes: [
//       'Umrah Visa',
//       'All Packages Are Based On Quad Sharing',
//       'Return Flights',
//       'Ground Transfers Can Be Included On Extra Cost',
//       '5 Nights in Makkah 4 Star Hotel',
//       'Direct Flights Can Be Arranged On Special Request',
//       '5 Nights in Haram 4 Star Hotel',
//     ],
//     makkahNights: 5,
//     madinahNights: 5,
//     makkahStarRating: 4,
//     madinahStarRating: 4,
//     hotels: [
//       {
//         name: 'Voco Makkah An IHG Hotel',
//         stars: 4,
//         description:
//           'Situated in Makkah, just 1.3 km from Masjid Al-Haram, Voco Makkah, an IHG Hotel, offers premium accommodations that include a restaurant, complimentary private parking, and a shared lounge. Guests can enjoy a 24-hour front desk, free shuttle service to the Haram, room service, and free WiFi throughout the hotel.',
//         image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80',
//       },
//       {
//         name: 'Al Rawda Al Aqeeq Hotel',
//         stars: 4,
//         description:
//           "Al Rawda Al Aqeeq Hotel provides premium accommodations near the Holy Haram, complete with an on-site restaurant for guests to enjoy. Each room at the hotel is air-conditioned and equipped with a flat-screen TV, along with a kettle. The Prophet's Mosque is located just 300 meters from the hotel.",
//         image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
//       },
//     ],
//   },
// ];

// // ==================== 3-STAR PACKAGE DATA ====================
// const threeStarPackages: DetailedPackageItem[] = [
//   {
//     title: '5 Nights 3 Star Umrah Packages from US',
//     nights: 5,
//     price: 1270,
//     images: [
//       'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80',
//       'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
//       'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
//       'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80',
//       'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80',
//       'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&q=80',
//       'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=500&q=80',
//     ],
//     includes: [
//       'Umrah Visa',
//       'All Packages Are Based On Quad Sharing',
//       'Return Flights',
//       'Ground Transfers Can Be Included On Extra Cost',
//       '3 Nights in Makkah 3 Star Hotel',
//       'Direct Flights Can Be Arranged On Special Request',
//       '2 Nights in Haram 3 Star Hotel',
//     ],
//     makkahNights: 3,
//     madinahNights: 2,
//     makkahStarRating: 3,
//     madinahStarRating: 3,
//     hotels: [
//       {
//         name: 'Dar Al Eiman Al Sud Hotel',
//         stars: 3,
//         description:
//           'Dar Al Eiman Al Sud Hotel in Makkah offers complimentary Wi-Fi in public areas and is located 2.5 km from Masjid Al-Haram. This well-maintained 3-star hotel features 365 rooms with city views and is a short drive from the Holy Kaaba. Guests can enjoy a variety of cuisines at the on-site Paradise Restaurant in the Ajyad district.',
//         image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
//       },
//       {
//         name: 'Dar Al Eiman Al Nour',
//         stars: 3,
//         description:
//           'Situated in the Central Haram district, the 3-star Dar Al Eiman Al Nour Hotel is just 1.2 km from cultural attractions like As-Salaam Museum. Guests can take advantage of convenient on-site parking. Each of the 140 well-furnished rooms features a flat-screen TV with satellite channels and a mini-fridge.',
//         image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=80',
//       },
//     ],
//   },
//   {
//     title: '7 Nights 3 Star Umrah Package from US',
//     nights: 7,
//     price: 1300,
//     images: [
//       'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
//       'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80',
//       'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&q=80',
//       'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&q=80',
//       'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&q=80',
//       'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80',
//       'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80',
//     ],
//     includes: [
//       'Umrah Visa',
//       'All Packages Are Based On Quad Sharing',
//       'Return Flights',
//       'Ground Transfers Can Be Included On Extra Cost',
//       '4 Nights in Makkah 3 Star Hotel',
//       'Direct Flights Can Be Arranged On Special Request',
//       '3 Nights in Haram 3 Star Hotel',
//     ],
//     makkahNights: 4,
//     madinahNights: 3,
//     makkahStarRating: 3,
//     madinahStarRating: 3,
//     hotels: [
//       {
//         name: 'Al Kiswah Towers',
//         stars: 3,
//         description:
//           'The Al Kiswah Towers Hotel in Makkah is located just 900 meters from Masjid Al Haram and 1 km from Abraj Al Bait. It offers complimentary WiFi throughout the property. Conveniently close to Hira Cave and Um AlQura University, the hotel features well-appointed guest rooms with flat-screen TVs and modern amenities.',
//         image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
//       },
//       {
//         name: 'Nada Al Salam',
//         stars: 3,
//         description:
//           "Nada Al Salam Hotel is conveniently located in the central Haram district, just 2 km from the Prophet's Mosque, 2.8 km from the Old Bazaar, and 3.3 km from Mazaya Mall. The hotel offers a 24-hour front desk, room service, and spacious family rooms for guests.",
//         image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&q=80',
//       },
//     ],
//   },
//   {
//     title: '10 Nights 3 Star Umrah Package from US',
//     nights: 10,
//     price: 1350,
//     images: [
//       'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80',
//       'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&q=80',
//       'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=500&q=80',
//       'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=500&q=80',
//       'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&q=80',
//       'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&q=80',
//       'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80',
//     ],
//     includes: [
//       'Umrah Visa',
//       'All Packages Are Based On Quad Sharing',
//       'Return Flights',
//       'Ground Transfers Can Be Included On Extra Cost',
//       '5 Nights in Makkah 3 Star Hotel',
//       'Direct Flights Can Be Arranged On Special Request',
//       '5 Nights in Haram 3 Star Hotel',
//     ],
//     makkahNights: 5,
//     madinahNights: 5,
//     makkahStarRating: 3,
//     madinahStarRating: 3,
//     hotels: [
//       {
//         name: 'Durrat Dar Al Eiman',
//         stars: 3,
//         description:
//           "Just 150 meters from the Prophet's Mosque near the Holy Haram, Al Eiman offers comfortable air-conditioned rooms with free Wi-Fi, an elevator, and a 24-hour front desk. Free parking is available (subject to availability). Each room features a TV, minibar, bright decor, wooden furniture, and carpeted floors.",
//         image: 'https://images.unsplash.com/photo-1590490360182-c33d7d0e1eb0?w=600&q=80',
//       },
//       {
//         name: 'Al Alya Hotel',
//         stars: 3,
//         description:
//           'Located within walking distance from Al Masjid An Nabawi near the Holy Haram, the 3-star Al Alya Hotel offers 120 well-maintained rooms with convenient on-site parking. Each room includes an electric kettle, high-speed internet, and a flat screen TV with satellite channels.',
//         image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=600&q=80',
//       },
//     ],
//   },
// ];

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
//   if (lower.includes('transportation') || lower.includes('transfer')) {
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

// // ==================== STAR RATING COMPONENT ====================
// const StarRating = ({ count }: { count: number }) => (
//   <div className="flex gap-0.5">
//     {Array.from({ length: count }).map((_, i) => (
//       <svg key={i} className="w-4 h-4 text-noor-gold fill-current" viewBox="0 0 20 20">
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       </svg>
//     ))}
//   </div>
// );

// // ==================== 5-STAR PACKAGE CARD ====================
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
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
//       <div className="flex flex-col md:flex-row">
//         <div className="relative md:w-72 lg:w-80 flex-shrink-0">
//           <img
//             src={imgSrc}
//             alt={pkg.title}
//             className="w-full h-56 md:h-full object-cover cursor-pointer"
//             onClick={handleMoreDetails}
//           />
//           <div className="absolute top-3 left-3 bg-noor-gold/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow">
//             {pkg.nights} Nights
//           </div>
//         </div>

//         <div className="flex-1 p-5 sm:p-6 flex flex-col">
//           <h3 className="text-lg sm:text-xl font-bold text-noor-green leading-tight mb-3">
//             {pkg.title}
//           </h3>

//           <div className="flex flex-wrap gap-2 mb-4">
//             {pkg.features.map((feature, i) => (
//               <span
//                 key={i}
//                 className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-noor-gold/10 text-noor-gold border border-noor-gold/15"
//               >
//                 <FeatureIcon type={feature} />
//                 {feature}
//               </span>
//             ))}
//           </div>

//           {pkg.description && (
//             <p className="text-gray-500 text-sm leading-relaxed mb-4">
//               {pkg.description}
//             </p>
//           )}

//           <div className="mt-auto flex items-end justify-between pt-3 border-t border-gray-100">
//             <div>
//               <span className="text-xs text-gray-400 uppercase tracking-wide">From</span>
//               <div className="flex items-baseline gap-0.5">
//                 <span className="text-noor-gold text-xs align-top">$</span>
//                 <span className="text-2xl sm:text-3xl font-bold text-noor-green">{pkg.price}</span>
//                 <span className="text-gray-400 text-sm">/pp</span>
//               </div>
//             </div>
//             <button
//               onClick={handleMoreDetails}
//               className="text-noor-green text-sm font-semibold hover:text-[#234d33] transition-colors flex items-center gap-1 group"
//             >
//               More Details
//               <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== 5-STAR CATEGORY SECTION ====================
// const PackageCategorySection = ({ category }: { category: PackageCategory }) => (
//   <section className="py-10">
//     <div className="max-w-4xl mx-auto px-4">
//       <div className="text-center mb-10">
//         <p className="text-noor-gold font-display text-xl italic mb-1">{category.subtitle}</p>
//         <h2 className="text-3xl font-bold text-noor-green font-display">{category.name}</h2>
//         <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
//       </div>
//       <div className="space-y-5">
//         {category.packages.map((pkg, index) => (
//           <UmrahPackageCard key={index} pkg={pkg} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // ==================== DETAILED PACKAGE CARD (4-Star & 3-Star) ====================
// const DetailedPackageCard = ({ pkg }: { pkg: DetailedPackageItem }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev === pkg.images.length - 1 ? 0 : prev + 1));
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [pkg.images.length]);

//   return (
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6 hover:shadow-md transition-shadow duration-300">
//       <div className="flex flex-col md:flex-row">
//         <div className="relative md:w-72 lg:w-80 flex-shrink-0 overflow-hidden">
//           <div
//             className="flex transition-transform duration-700 ease-in-out h-56 md:h-full"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {pkg.images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`${pkg.title} ${i + 1}`}
//                 className="w-full h-56 md:h-full object-cover flex-shrink-0"
//                 style={{ minWidth: '100%' }}
//                 onError={(e) => {
//                   (e.target as HTMLImageElement).src =
//                     'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&q=80';
//                 }}
//               />
//             ))}
//           </div>
//           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
//             {pkg.images.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentIndex(i)}
//                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                   i === currentIndex ? 'bg-white w-4' : 'bg-white/50'
//                 }`}
//               />
//             ))}
//           </div>
//           <div className="absolute top-3 left-3 bg-noor-green/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow">
//             {pkg.nights} Nights
//           </div>
//         </div>

//         <div className="flex-1 p-5 sm:p-6 flex flex-col">
//           <h3 className="text-lg sm:text-xl font-bold text-noor-green leading-tight mb-3">
//             {pkg.title}
//           </h3>

//           <div className="flex flex-wrap gap-2 mb-4">
//             {pkg.includes
//               .filter(
//                 (item) =>
//                   item.toLowerCase().includes('visa') ||
//                   item.toLowerCase().includes('flight') ||
//                   item.toLowerCase().includes('transfer')
//               )
//               .map((tag, i) => (
//                 <span
//                   key={i}
//                   className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-noor-gold/10 text-noor-gold border border-noor-gold/15"
//                 >
//                   <FeatureIcon type={tag} />
//                   {tag}
//                 </span>
//               ))}
//           </div>

//           <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
//             <div className="flex items-center gap-1.5">
//               <svg className="w-4 h-4 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//               </svg>
//               Makkah <strong className="text-noor-green ml-1">{pkg.makkahNights}N</strong>
//             </div>
//           </div>

//           <div className="space-y-2.5 mb-5">
//             {pkg.hotels.map((hotel, i) => (
//               <div key={i} className="flex items-center gap-2.5">
//                 <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                 </svg>
//                 <span className="text-sm font-semibold text-gray-700">{hotel.stars}</span>
//                 <StarRating count={hotel.stars} />
//                 <span className="text-sm text-gray-600 font-medium">{hotel.name}</span>
//               </div>
//             ))}
//           </div>

//           <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
//             <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-4-10l-4 4m0 0l4 4m-4-4h12" />
//             </svg>
//             Transfer included
//           </div>

//           <div className="mt-auto flex items-end justify-between pt-3 border-t border-gray-100">
//             <div>
//               <span className="text-xs text-gray-400 uppercase tracking-wide">From</span>
//               <div className="flex items-baseline gap-0.5">
//                 <span className="text-2xl sm:text-3xl font-bold text-noor-green">${pkg.price}</span>
//                 <span className="text-gray-400 text-sm">/pp</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== 4-STAR & 3-STAR SECTIONS ====================
// const DetailedPackagesSection = ({
//   packages,
//   starLevel,
// }: {
//   packages: DetailedPackageItem[];
//   starLevel: number;
// }) => (
//   <section className="py-10">
//     <div className="max-w-4xl mx-auto px-4">
//       <div className="text-center mb-10">
//         <p className="text-noor-gold font-display text-xl italic mb-1">Haram Umrah Travels</p>
//         <h2 className="text-3xl font-bold text-noor-green font-display">
//           {starLevel} Star Umrah Packages from US
//         </h2>
//         <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
//       </div>
//       <div className="space-y-5">
//         {packages.map((pkg, index) => (
//           <DetailedPackageCard key={index} pkg={pkg} />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// // ==================== MAIN PAGE COMPONENT ====================
// const UmrahPackagesCombined: React.FC = () => {
//   const [searchParams] = useSearchParams();
//   const tier = (searchParams.get('tier') as StarType) || '5star';
//   const view = (searchParams.get('view') as FiveStarView) || 'haram';

//   // Breadcrumb label
//   const currentLabel =
//     tier === '5star'
//       ? `5 Star ${view === 'haram' ? 'Haram View' : 'Kaaba View'} Packages`
//       : tier === '4star'
//       ? '4 Star Packages'
//       : '3 Star Packages';

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Compact page header */}
//       <div className="bg-noor-green py-10">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <p className="text-noor-gold font-display text-lg italic mb-1">Haram Umrah Travels</p>
//           <h1 className="text-3xl lg:text-4xl font-bold text-white font-display">{currentLabel}</h1>
//           <div className="w-16 h-0.5 bg-noor-gold/40 mx-auto mt-4" />
//         </div>
//       </div>

//       {/* Package content */}
//       <div className="transition-all duration-500 ease-out">
//         {tier === '5star' && view === 'kaaba' && (
//           <PackageCategorySection category={kaabaViewData} />
//         )}

//         {tier === '5star' && view === 'haram' && (
//           <PackageCategorySection category={haramViewData} />
//         )}

//         {tier === '4star' && (
//           <DetailedPackagesSection packages={fourStarPackages} starLevel={4} />
//         )}

//         {tier === '3star' && (
//           <DetailedPackagesSection packages={threeStarPackages} starLevel={3} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default UmrahPackagesCombined; 




// UmrahPackagesCombined.tsx
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons/Icons';

// ── 5-Star images ─────────────────────────────────────────────
import makkah1    from '../assets/images/packages/5-3_files/imp-4.webp';
import kaabaClose from '../assets/images/packages/5-3_files/imp-5.webp';
import madinah1   from '../assets/images/packages/5-3_files/imp-6.webp';
import haramImg1  from '../assets/images/packages/5-3_files/im-1.webp';
import haramImg2  from '../assets/images/packages/5-3_files/imp-3.webp';
import haramImg3  from '../assets/images/packages/5-3_files/imp-2.webp';

// ── 4-Star Makkah hotel images ────────────────────────────────
// Place your hotel images in: src/assets/images/packages/hotels/4-star/
// and rename to match, OR update paths below to match your filenames
import vocoImg       from '../assets/images/packages/4-vocoMakkahanIHGHotel.jpg';
import mercureImg    from '../assets/images/packages/4-MercureMakkahAziziah.jpg';
import courtyardImg  from '../assets/images/packages/4-CourtyardbyMarriottMakkah.jpg';
import emaarGrandImg from '../assets/images/packages/4-EmaarGrandHotel-makkah.jpg';
import novotelImg    from '../assets/images/packages/4-NovotelMakkahThakherCity.jpg';
import parkInnImg    from '../assets/images/packages/4-ParkInnbyRadissonMakkahAlNaseem.jpg';

// ── 4-Star Madinah hotel images ───────────────────────────────
import doubletreeMadinahImg  from '../assets/images/packages/4-DoublTreebyHiltonMadinahGate.jpg';
import alRitzImg             from '../assets/images/packages/4-AlRitzAlMadinah.jpg';
import durratEimanImg        from '../assets/images/packages/4-starDurratAlEimanHotel.jpg';
import jaydenImg             from '../assets/images/packages/3-jayden.webp';
import marriottExecImg       from '../assets/images/packages/4-MarriottExecutiveApartmentsMadinah.jpg';

// ── 4-Star Makkah additional image ────────────────────────────
import doubletreeMakkahImg   from '../assets/images/packages/4-DoublTreebyHiltonMadinahGate.jpg';

// ── 3-Star Makkah hotel images ────────────────────────────────
import emaarLegendImg  from '../assets/images/packages/3-Emaar Legend-makkah.jpg';
import alWaleedImg     from '../assets/images/packages/3-Al Waleed Tower Hotel.jpg';
import afraImg         from '../assets/images/packages/3-afrahotel-makkah.jpg';
import alRayyanImg     from '../assets/images/packages/3-starAlRayyanMakiyaTowersHotel.webp';
import leMeridianImg   from '../assets/images/packages/3-LeMeridienTowersMakkah.jpg';

// ── 3-Star Madinah hotel images ───────────────────────────────
import farajMadinahImg   from '../assets/images/packages/3-FarajAlmadinaHotel.jpg';
import newMadinahImg     from '../assets/images/packages/3-newmidnahhotel.jpg';
import zahaImg           from '../assets/images/packages/3-zahaalmunawwarah-midnah.webp';
import grandPlazaImg     from '../assets/images/packages/3-GrandPlazaAlMadina.jpg';

// ══════════════════════════════════════════════════════════════
// TYPES
// ══════════════════════════════════════════════════════════════
interface PackageItem {
  title: string;
  nights: number;
  price: number;
  image: string;
  features: string[];
  description: string;
  type: 'kaaba' | 'haram';
}

interface PackageCategory {
  name: string;
  subtitle: string;
  packages: PackageItem[];
}

interface HotelInfo {
  name: string;
  city: 'Makkah' | 'Madinah';
  stars: number;
  distance: string;
  image: string;
  description: string;
  highlights: string[];
}

interface DetailedPackageItem {
  title: string;
  nights: number;
  price: number;
  makkahNights: number;
  madinahNights: number;
  includes: string[];
  makkahHotels: HotelInfo[];
  madinahHotels: HotelInfo[];
}

type StarType = '5star' | '4star' | '3star';
type FiveStarView = 'haram' | 'kaaba';

// ══════════════════════════════════════════════════════════════
// 5-STAR DATA
// ══════════════════════════════════════════════════════════════
const getKaabaImages = () => ({ img1: makkah1, img2: kaabaClose, img3: madinah1 });
const getHaramImages = () => ({ img1: haramImg1, img2: haramImg2, img3: haramImg3 });

const kaabaViewData: PackageCategory = {
  name: '5 Star Kaaba View Umrah Packages',
  subtitle: 'Haram Umrah Travels',
  packages: [
    {
      title: '5 Star Kaaba View Package', nights: 5, price: 990, image: 'img1', type: 'kaaba',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      description: 'Experience the breathtaking view of the Holy Kaaba from your luxury 5-star hotel room. This exclusive package includes premium accommodations steps away from the Haram, private transfers, and full Umrah visa processing — ideal for pilgrims seeking a short yet spiritually enriching journey.',
    },
    {
      title: '5 Star Kaaba View Package', nights: 7, price: 1190, image: 'img2', type: 'kaaba',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      description: 'Our most popular Kaaba View package offers 7 nights of unparalleled luxury with direct views of the Holy Kaaba. Enjoy spacious 5-star rooms, guided Ziyarat tours, 24/7 concierge assistance, and seamless ground transportation between the two Holy Cities.',
    },
    {
      title: '5 Star Kaaba View Package', nights: 10, price: 1390, image: 'img3', type: 'kaaba',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      description: 'The ultimate Kaaba View experience with 10 nights of 5-star luxury, allowing ample time for worship and reflection. Includes premium Haram-facing rooms, VIP airport reception, private transfers, and a dedicated Umrah guide throughout your blessed journey.',
    },
  ],
};

const haramViewData: PackageCategory = {
  name: '5 Star Haram View Umrah Packages',
  subtitle: 'Haram Umrah Travels',
  packages: [
    {
      title: '5 Star Haram View Package', nights: 5, price: 890, image: 'img1', type: 'haram',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      description: 'Enjoy stunning Haram views from your 5-star hotel in this carefully curated 5-night Umrah package. Walk to the Holy Mosque in minutes, perform your rituals with ease, and return to world-class comfort. Includes Umrah visa, return flights, and private ground transfers.',
    },
    {
      title: '5 Star Haram View Package', nights: 7, price: 990, image: 'img2', type: 'haram',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      description: 'Our 7-night Haram View package provides the perfect balance of worship and comfort. Stay in premium hotels overlooking the Haram. Benefit from guided Ziyarat visits, complimentary breakfast, 24-hour room service, and hassle-free transportation throughout your stay.',
    },
    {
      title: '5 Star Haram View Package', nights: 10, price: 1190, image: 'img3', type: 'haram',
      features: ['Visa Included', 'Transportation Included', '5 Star Hotels Included'],
      description: 'Immerse yourself in 10 nights of spiritual devotion with panoramic Haram views. This luxury package features the finest 5-star hotels near both Holy Mosques, VIP check-in service, daily buffet meals, guided Umrah support, and comfortable private transfers between sacred cities.',
    },
  ],
};

// ══════════════════════════════════════════════════════════════
// 4-STAR PACKAGE DATA
// ══════════════════════════════════════════════════════════════
const fourStarPackages: DetailedPackageItem[] = [
  {
    title: '5 Nights 4 Star Umrah Package from US',
    nights: 5, price: 1319, makkahNights: 3, madinahNights: 2,
    includes: ['Umrah Visa', 'Quad Sharing Basis', 'Return Flights', 'Ground Transfers on Extra Cost', 'Direct Flights on Request'],
    makkahHotels: [
      {
        name: 'Voco Makkah – An IHG Hotel',
        city: 'Makkah', stars: 4,
        distance: '1.3 km from Masjid Al-Haram',
        image: vocoImg,
        description: 'Voco Makkah, an IHG Hotel, is ideally located 1.3 km from Masjid Al-Haram, offering contemporary rooms with stunning city and Haram views. The hotel features a restaurant, complimentary private parking, shared lounge, 24-hour front desk, free Haram shuttle service, and complimentary Wi-Fi throughout the property.',
        highlights: ['1.3 km from Masjid Al-Haram', 'Free Haram shuttle service', 'Restaurant & shared lounge', '24-hour front desk', 'Complimentary Wi-Fi'],
      },
      {
        name: 'Mercure Makkah Az Zahra',
        city: 'Makkah', stars: 4,
        distance: '2 km from Masjid Al-Haram',
        image: mercureImg,
        description: 'The Mercure Makkah Az Zahra is a contemporary 4-star hotel situated approximately 2 km from Masjid Al-Haram. It offers well-appointed modern rooms, an international restaurant, a fully equipped fitness centre, complimentary Wi-Fi, and a shuttle service to the Grand Mosque — making it an excellent choice for Umrah pilgrims seeking comfort and convenience.',
        highlights: ['2 km from Masjid Al-Haram', 'Shuttle to Grand Mosque', 'International restaurant', 'Fitness centre', 'Modern air-conditioned rooms'],
      },
      {
        name: 'Courtyard by Marriott Makkah',
        city: 'Makkah', stars: 4,
        distance: '1.5 km from Masjid Al-Haram',
        image: courtyardImg,
        description: "The Courtyard by Marriott Makkah Al Zahra is a well-regarded 4-star hotel approximately 1.5 km from Masjid Al-Haram. The property features Marriott's signature comfortable rooms, an on-site restaurant, a fitness centre, business facilities, and complimentary Wi-Fi. A free shuttle service to and from the Holy Mosque ensures pilgrims can focus entirely on their spiritual journey.",
        highlights: ['1.5 km from Masjid Al-Haram', "Marriott's signature comfort", 'Free Haram shuttle', 'On-site restaurant & fitness centre', 'Business facilities'],
      },
      {
        name: 'Emaar Grand Hotel Makkah',
        city: 'Makkah', stars: 4,
        distance: 'Adjacent to Abraj Al-Bait',
        image: emaarGrandImg,
        description: "The Emaar Grand Hotel Makkah is a premium 4-star property in the heart of Makkah's central area, adjacent to the Abraj Al-Bait development. Its spacious, elegantly furnished rooms offer sweeping views of the city and the Haram. Guests benefit from multiple dining options, a health club, business centre, and a dedicated Umrah assistance team throughout their stay.",
        highlights: ['Adjacent to Abraj Al-Bait', 'City & Haram views', 'Multiple dining options', 'Health club & business centre', 'Dedicated Umrah assistance'],
      },
      {
        name: 'Novotel Makkah Al Nawwareyah',
        city: 'Makkah', stars: 4,
        distance: '3 km from Masjid Al-Haram',
        image: novotelImg,
        description: 'The Novotel Makkah Al Nawwareyah is a reliable and well-maintained 4-star hotel approximately 3 km from Masjid Al-Haram. The hotel offers spacious modern rooms, an international buffet restaurant, an outdoor pool, fitness centre, and free Wi-Fi. A regular shuttle service is available to the Holy Mosque, making it a practical choice for US pilgrims.',
        highlights: ['3 km from Masjid Al-Haram', 'Regular Haram shuttle', 'International buffet restaurant', 'Outdoor pool & fitness centre', 'Family-friendly rooms'],
      },
      {
        name: 'Park Inn by Radisson Makkah',
        city: 'Makkah', stars: 4,
        distance: '2.5 km from Masjid Al-Haram',
        image: parkInnImg,
        description: "Park Inn by Radisson Makkah offers modern, vibrant accommodation 2.5 km from Masjid Al-Haram. Designed with the needs of pilgrims in mind, the hotel features bright, well-equipped rooms, an on-site restaurant, complimentary Wi-Fi, fitness facilities, and Radisson's signature friendly service. A Haram shuttle is available for guests throughout the day.",
        highlights: ['2.5 km from Masjid Al-Haram', 'Haram shuttle available', 'Bright modern rooms', 'On-site restaurant', 'Complimentary Wi-Fi'],
      },
      {
        name: 'DoubleTree by Hilton Makkah – Jabal Omar',
        city: 'Makkah', stars: 4,
        distance: '600 m from Masjid Al-Haram',
        image: doubletreeMakkahImg,
        description: 'The DoubleTree by Hilton Makkah – Jabal Omar is a premium 4-star hotel located within the prestigious Jabal Omar development, approximately 600 metres from Masjid Al-Haram. The hotel offers spacious rooms with Haram views, multiple restaurants, a business centre, fitness facilities, and Hilton\'s trademark warm hospitality for a comfortable pilgrimage experience.',
        highlights: ['600 m from Masjid Al-Haram', 'Haram-view rooms available', 'Jabal Omar development', 'Multiple restaurants', 'Fitness centre & business facilities'],
      },
    ],
    madinahHotels: [
      {
        name: 'DoubleTree by Hilton Madinah',
        city: 'Madinah', stars: 4,
        distance: "5 min walk from Prophet's Mosque",
        image: doubletreeMadinahImg,
        description: "The DoubleTree by Hilton Madinah offers warm, welcoming hospitality just 5 minutes' walk from Al-Masjid an-Nabawi. Guests are greeted with Hilton's signature warm chocolate chip cookie on arrival. The hotel features spacious rooms with mosque views, an international restaurant, a fitness centre, complimentary Wi-Fi, and a 24-hour business centre.",
        highlights: ["5 min walk to Prophet's Mosque", "Hilton's signature warm welcome", 'Mosque-view rooms available', 'International restaurant', '24-hour business centre'],
      },
      {
        name: 'Al Ritz Al Madinah Hotel',
        city: 'Madinah', stars: 4,
        distance: "Near Prophet's Mosque",
        image: alRitzImg,
        description: "Al Ritz Al Madinah is a well-appointed 4-star hotel positioned close to Al-Masjid an-Nabawi. The property offers comfortable, elegantly furnished rooms with warm Arabian décor, multiple dining venues serving Arabic and international cuisine, complimentary Wi-Fi, and attentive 24-hour service — ideal for pilgrims who appreciate quality accommodation near the holy precinct.",
        highlights: ["Close to Prophet's Mosque", 'Arabian & international dining', 'Elegantly furnished rooms', '24-hour room service', 'Complimentary Wi-Fi'],
      },
      {
        name: 'Durrat Al Eiman',
        city: 'Madinah', stars: 4,
        distance: "150 m from Prophet's Mosque",
        image: durratEimanImg,
        description: "Durrat Al Eiman Madinah is an excellent 4-star property located just 150 metres from Al-Masjid an-Nabawi, offering pilgrims near-unrivalled access to the mosque. Rooms are clean, comfortable, and well-equipped with prayer mats, Qibla indicators, and satellite TV. The hotel features a restaurant, free Wi-Fi, an elevator, and a 24-hour front desk.",
        highlights: ["150 m from Prophet's Mosque", 'Prayer mats & Qibla in every room', 'On-site restaurant', 'Elevator & 24-hour front desk', 'Complimentary Wi-Fi'],
      },
      {
        name: 'Jayden Hotel Madinah',
        city: 'Madinah', stars: 4,
        distance: "Short walk from Prophet's Mosque",
        image: jaydenImg,
        description: "The Jayden Hotel Madinah is a modern 4-star property offering comfortable, well-furnished rooms within a short walk of Al-Masjid an-Nabawi. The hotel prides itself on clean, spacious accommodation suited to pilgrims' needs, with an on-site restaurant, complimentary Wi-Fi, air-conditioned rooms, and a friendly multilingual team ready to assist throughout your stay.",
        highlights: ["Short walk to Prophet's Mosque", 'Modern comfortable rooms', 'On-site restaurant', 'Multilingual staff', 'Complimentary Wi-Fi'],
      },
      {
        name: 'Marriott Executive Apartments Madinah',
        city: 'Madinah', stars: 4,
        distance: "Near Prophet's Mosque",
        image: marriottExecImg,
        description: "The Marriott Executive Apartments Madinah provides spacious apartment-style accommodation ideal for families and extended-stay pilgrims near Al-Masjid an-Nabawi. Each suite features a fully equipped kitchenette, separate living area, flat-screen TV, and premium bedding. Guests enjoy access to an on-site restaurant, fitness centre, complimentary Wi-Fi, and Marriott's renowned service standards.",
        highlights: ["Near Prophet's Mosque", 'Apartment-style with kitchenette', 'Ideal for families & groups', 'Fitness centre', "Marriott's renowned service"],
      },
    ],
  },
  {
    title: '7 Nights 4 Star Umrah Package from US',
    nights: 7, price: 1360, makkahNights: 4, madinahNights: 3,
    includes: ['Umrah Visa', 'Quad Sharing Basis', 'Return Flights', 'Ground Transfers on Extra Cost', 'Direct Flights on Request'],
    makkahHotels: [
      {
        name: 'Voco Makkah – An IHG Hotel', city: 'Makkah', stars: 4,
        distance: '1.3 km from Masjid Al-Haram', image: vocoImg,
        description: 'Voco Makkah offers contemporary 4-star comfort 1.3 km from Masjid Al-Haram with a free Haram shuttle, restaurant, and modern amenities including complimentary Wi-Fi and 24-hour front desk service.',
        highlights: ['1.3 km from Masjid Al-Haram', 'Free Haram shuttle', 'Restaurant & lounge', 'Complimentary Wi-Fi', '24-hour front desk'],
      },
      {
        name: 'Courtyard by Marriott Makkah', city: 'Makkah', stars: 4,
        distance: '1.5 km from Masjid Al-Haram', image: courtyardImg,
        description: "Courtyard by Marriott Makkah Al Zahra is 1.5 km from the Haram, offering Marriott's reliable comfort, a free shuttle to the mosque, on-site dining, and fitness facilities.",
        highlights: ['1.5 km from Masjid Al-Haram', 'Free Haram shuttle', "Marriott's signature comfort", 'On-site restaurant', 'Fitness centre'],
      },
      {
        name: 'Novotel Makkah Al Nawwareyah', city: 'Makkah', stars: 4,
        distance: '3 km from Masjid Al-Haram', image: novotelImg,
        description: 'Novotel Makkah Al Nawwareyah is 3 km from the Haram, offering modern rooms, a shuttle service, international buffet restaurant, and outdoor pool.',
        highlights: ['3 km from Masjid Al-Haram', 'Regular shuttle service', 'International buffet', 'Outdoor pool', 'Free Wi-Fi'],
      },
    ],
    madinahHotels: [
      {
        name: 'DoubleTree by Hilton Madinah', city: 'Madinah', stars: 4,
        distance: "5 min walk from Prophet's Mosque", image: doubletreeMadinahImg,
        description: "DoubleTree by Hilton Madinah is 5 minutes' walk from Al-Masjid an-Nabawi, offering warm Hilton hospitality, mosque-view rooms, restaurant, and fitness centre.",
        highlights: ["5 min walk to Prophet's Mosque", 'Mosque-view rooms', 'International restaurant', 'Fitness centre', 'Free Wi-Fi'],
      },
      {
        name: 'Durrat Al Eiman', city: 'Madinah', stars: 4,
        distance: "150 m from Prophet's Mosque", image: durratEimanImg,
        description: "Durrat Al Eiman Madinah sits 150 metres from Al-Masjid an-Nabawi, offering prayer mats, Qibla direction, on-site restaurant, and 24-hour front desk service.",
        highlights: ["150 m from Prophet's Mosque", 'Prayer mats & Qibla in rooms', 'Restaurant', '24-hour front desk', 'Free Wi-Fi'],
      },
      {
        name: 'Marriott Executive Apartments Madinah', city: 'Madinah', stars: 4,
        distance: "Near Prophet's Mosque", image: marriottExecImg,
        description: "Marriott Executive Apartments Madinah offers spacious apartment-style suites near Al-Masjid an-Nabawi, ideal for families with kitchenettes, living areas, and Marriott's service standards.",
        highlights: ["Near Prophet's Mosque", 'Apartment-style rooms', 'Kitchenette in each suite', 'Fitness centre', "Marriott's service standards"],
      },
    ],
  },
  {
    title: '10 Nights 4 Star Umrah Package from US',
    nights: 10, price: 1430, makkahNights: 5, madinahNights: 5,
    includes: ['Umrah Visa', 'Quad Sharing Basis', 'Return Flights', 'Ground Transfers on Extra Cost', 'Direct Flights on Request'],
    makkahHotels: [
      {
        name: 'Emaar Grand Hotel Makkah', city: 'Makkah', stars: 4,
        distance: 'Adjacent to Abraj Al-Bait', image: emaarGrandImg,
        description: 'Emaar Grand Hotel is adjacent to Abraj Al-Bait, offering sweeping Haram views, multiple dining options, and a dedicated Umrah assistance team.',
        highlights: ['Adjacent to Abraj Al-Bait', 'Haram & city views', 'Multiple dining options', 'Health club', 'Umrah assistance team'],
      },
      {
        name: 'Park Inn by Radisson Makkah', city: 'Makkah', stars: 4,
        distance: '2.5 km from Masjid Al-Haram', image: parkInnImg,
        description: 'Park Inn by Radisson Makkah is 2.5 km from the Haram, with vibrant modern rooms, Haram shuttle, restaurant, and Radisson signature service.',
        highlights: ['2.5 km from Masjid Al-Haram', 'Haram shuttle', 'Modern rooms', 'On-site restaurant', 'Free Wi-Fi'],
      },
      {
        name: 'Mercure Makkah Az Zahra', city: 'Makkah', stars: 4,
        distance: '2 km from Masjid Al-Haram', image: mercureImg,
        description: 'Mercure Makkah Az Zahra is 2 km from the Haram, offering contemporary rooms, shuttle service, buffet restaurant, and a fitness centre.',
        highlights: ['2 km from Masjid Al-Haram', 'Shuttle to Haram', 'Buffet restaurant', 'Fitness centre', 'Free Wi-Fi'],
      },
    ],
    madinahHotels: [
      {
        name: 'Al Ritz Al Madinah Hotel', city: 'Madinah', stars: 4,
        distance: "Near Prophet's Mosque", image: alRitzImg,
        description: 'Al Ritz Al Madinah is close to the Prophet\'s Mosque, offering elegant rooms with Arabian décor, international dining, and 24-hour room service.',
        highlights: ["Near Prophet's Mosque", 'Elegant Arabian décor', 'International dining', '24-hour room service', 'Free Wi-Fi'],
      },
      {
        name: 'Jayden Hotel Madinah', city: 'Madinah', stars: 4,
        distance: "Short walk from Prophet's Mosque", image: jaydenImg,
        description: "Jayden Hotel Madinah is a short walk from Al-Masjid an-Nabawi with modern rooms, an on-site restaurant, and multilingual staff.",
        highlights: ["Short walk to Prophet's Mosque", 'Modern comfortable rooms', 'On-site restaurant', 'Multilingual staff', 'Free Wi-Fi'],
      },
      {
        name: 'DoubleTree by Hilton Madinah', city: 'Madinah', stars: 4,
        distance: "5 min walk from Prophet's Mosque", image: doubletreeMadinahImg,
        description: "DoubleTree by Hilton Madinah is 5 minutes from the mosque, with Hilton's warm hospitality, mosque views, and full dining and fitness facilities.",
        highlights: ["5 min walk to Prophet's Mosque", 'Mosque-view rooms', 'International restaurant', 'Fitness centre', 'Free Wi-Fi'],
      },
    ],
  },
];

// ══════════════════════════════════════════════════════════════
// 3-STAR PACKAGE DATA
// ══════════════════════════════════════════════════════════════
const threeStarPackages: DetailedPackageItem[] = [
  {
    title: '5 Nights 3 Star Umrah Package from US',
    nights: 5, price: 1270, makkahNights: 3, madinahNights: 2,
    includes: ['Umrah Visa', 'Quad Sharing Basis', 'Return Flights', 'Ground Transfers on Extra Cost', 'Direct Flights on Request'],
    makkahHotels: [
      {
        name: 'Emaar Legend Hotel Makkah', city: 'Makkah', stars: 3,
        distance: '1.5 km from Masjid Al-Haram', image: emaarLegendImg,
        description: 'Emaar Legend Hotel Makkah is a reliable 3-star property approximately 1.5 km from Masjid Al-Haram, offering clean and well-maintained rooms with satellite TV, complimentary Wi-Fi, 24-hour front desk service, and a convenient in-house restaurant serving Arabic and international dishes. A practical and comfortable choice for budget-conscious pilgrims.',
        highlights: ['1.5 km from Masjid Al-Haram', 'In-house restaurant', 'Satellite TV in all rooms', '24-hour front desk', 'Complimentary Wi-Fi'],
      },
      {
        name: 'Al Waleed Hotel Makkah', city: 'Makkah', stars: 3,
        distance: '2 km from Masjid Al-Haram', image: alWaleedImg,
        description: 'Al Waleed Hotel Makkah is a comfortable 3-star property situated 2 km from Masjid Al-Haram in the Ajyad district. The hotel offers air-conditioned rooms with flat-screen TVs, an on-site restaurant, complimentary Wi-Fi, prayer mats and Qibla direction in every room, and efficient 24-hour front desk service for a convenient pilgrimage stay.',
        highlights: ['2 km from Masjid Al-Haram', 'Prayer mats & Qibla in rooms', 'Air-conditioned rooms', 'On-site restaurant', 'Complimentary Wi-Fi'],
      },
      {
        name: 'Afra Hotel Makkah', city: 'Makkah', stars: 3,
        distance: '2.5 km from Masjid Al-Haram', image: afraImg,
        description: 'Afra Hotel Makkah is a functional and clean 3-star hotel approximately 2.5 km from Masjid Al-Haram. It provides comfortable air-conditioned rooms with modern amenities, an in-house dining option, complimentary Wi-Fi, and friendly on-site staff who assist pilgrims throughout their Umrah journey.',
        highlights: ['2.5 km from Masjid Al-Haram', 'Air-conditioned rooms', 'In-house dining', 'Friendly Umrah assistance', 'Complimentary Wi-Fi'],
      },
      {
        name: 'Al Rayyan Hotel Makkah', city: 'Makkah', stars: 3,
        distance: 'Near Masjid Al-Haram', image: alRayyanImg,
        description: 'Al Rayyan Hotel Makkah is a well-positioned 3-star property in central Makkah, close to Masjid Al-Haram. The hotel offers comfortable rooms, an on-site restaurant, complimentary Wi-Fi, and essential pilgrimage amenities including prayer mats, Qibla indicators, and dedicated front desk assistance around the clock.',
        highlights: ['Central Makkah location', 'Close to Masjid Al-Haram', 'On-site restaurant', 'Prayer mats & Qibla indicators', '24-hour front desk'],
      },
      {
        name: 'Le Meridian Towers Makkah', city: 'Makkah', stars: 3,
        distance: '1 km from Masjid Al-Haram', image: leMeridianImg,
        description: 'Le Meridian Towers Makkah offers solid 3-star accommodation 1 km from Masjid Al-Haram. The hotel features well-appointed rooms with satellite TV, complimentary Wi-Fi, an in-house restaurant, and a 24-hour front desk. Its central location and competitive pricing make it a popular choice among US pilgrims seeking a balance of proximity and affordability.',
        highlights: ['1 km from Masjid Al-Haram', 'Satellite TV in all rooms', 'In-house restaurant', '24-hour front desk', 'Competitive pricing'],
      },
    ],
    madinahHotels: [
      {
        name: 'Faraj Al Madinah Hotel', city: 'Madinah', stars: 3,
        distance: "Near Prophet's Mosque", image: farajMadinahImg,
        description: "Faraj Al Madinah Hotel is a comfortable 3-star property located near Al-Masjid an-Nabawi. It offers well-maintained rooms with air conditioning, satellite TV, prayer mats, and Qibla indicators. The hotel provides complimentary Wi-Fi, an in-house restaurant serving local and Arabic food, and a welcoming front desk team available around the clock.",
        highlights: ["Near Prophet's Mosque", 'Prayer mats & Qibla in rooms', 'In-house restaurant', 'Air-conditioned rooms', 'Complimentary Wi-Fi'],
      },
      {
        name: 'New Madinah Hotel', city: 'Madinah', stars: 3,
        distance: "Walking distance to Prophet's Mosque", image: newMadinahImg,
        description: "New Madinah Hotel is a practical 3-star accommodation within walking distance of Al-Masjid an-Nabawi. The hotel offers clean, comfortable rooms with satellite TV, complimentary Wi-Fi, an on-site restaurant, and dedicated reception staff who provide helpful guidance on Ziyarat visits and pilgrimage services in the holy city.",
        highlights: ["Walking distance to Prophet's Mosque", 'Clean comfortable rooms', 'On-site restaurant', 'Ziyarat guidance available', 'Complimentary Wi-Fi'],
      },
      {
        name: 'Zaha Al Munawwarah Hotel', city: 'Madinah', stars: 3,
        distance: "Close to Prophet's Mosque", image: zahaImg,
        description: "Zaha Al Munawwarah Hotel is a well-regarded 3-star property in the Al Munawwarah district of Madinah, situated close to Al-Masjid an-Nabawi. The hotel provides spacious rooms with modern furnishings, prayer facilities, complimentary Wi-Fi, an in-house restaurant, and a convenient 24-hour front desk team — offering excellent value in a prime pilgrimage location.",
        highlights: ["Close to Prophet's Mosque", 'Spacious rooms', 'Prayer facilities in rooms', 'In-house restaurant', '24-hour front desk'],
      },
      {
        name: 'Grand Plaza Al Madinah', city: 'Madinah', stars: 3,
        distance: "Near Prophet's Mosque", image: grandPlazaImg,
        description: "Grand Plaza Al Madinah is a 3-star hotel offering comfortable and value-oriented accommodation near Al-Masjid an-Nabawi. The property features well-furnished air-conditioned rooms, an on-site restaurant, complimentary Wi-Fi, prayer mats, Qibla direction, and a professional front desk team providing 24-hour assistance to ensure a seamless and spiritually fulfilling Umrah stay.",
        highlights: ["Near Prophet's Mosque", 'Air-conditioned rooms', 'On-site restaurant', 'Prayer mats & Qibla in rooms', '24-hour assistance'],
      },
    ],
  },
  {
    title: '7 Nights 3 Star Umrah Package from US',
    nights: 7, price: 1300, makkahNights: 4, madinahNights: 3,
    includes: ['Umrah Visa', 'Quad Sharing Basis', 'Return Flights', 'Ground Transfers on Extra Cost', 'Direct Flights on Request'],
    makkahHotels: [
      {
        name: 'Al Rayyan Hotel Makkah', city: 'Makkah', stars: 3,
        distance: 'Near Masjid Al-Haram', image: alRayyanImg,
        description: 'Al Rayyan Hotel Makkah is centrally located near the Haram, offering comfortable rooms, restaurant, prayer amenities, and 24-hour assistance for pilgrims.',
        highlights: ['Near Masjid Al-Haram', 'On-site restaurant', 'Prayer mats & Qibla', '24-hour front desk', 'Free Wi-Fi'],
      },
      {
        name: 'Al Waleed Hotel Makkah', city: 'Makkah', stars: 3,
        distance: '2 km from Masjid Al-Haram', image: alWaleedImg,
        description: 'Al Waleed Hotel is in the Ajyad district, 2 km from the Haram, offering air-conditioned rooms, restaurant, and prayer amenities.',
        highlights: ['2 km from Masjid Al-Haram', 'Ajyad district', 'On-site restaurant', 'Prayer mats & Qibla', 'Free Wi-Fi'],
      },
      {
        name: 'Le Meridian Towers Makkah', city: 'Makkah', stars: 3,
        distance: '1 km from Masjid Al-Haram', image: leMeridianImg,
        description: 'Le Meridian Towers is 1 km from the Haram, offering well-appointed rooms, restaurant, satellite TV, and competitive pricing for budget pilgrims.',
        highlights: ['1 km from Masjid Al-Haram', 'Competitive pricing', 'In-house restaurant', 'Satellite TV', 'Free Wi-Fi'],
      },
    ],
    madinahHotels: [
      {
        name: 'Faraj Al Madinah Hotel', city: 'Madinah', stars: 3,
        distance: "Near Prophet's Mosque", image: farajMadinahImg,
        description: "Faraj Al Madinah is near the Prophet's Mosque with comfortable rooms, prayer amenities, restaurant, and 24-hour front desk.",
        highlights: ["Near Prophet's Mosque", 'Prayer mats & Qibla', 'In-house restaurant', 'Air-conditioned rooms', 'Free Wi-Fi'],
      },
      {
        name: 'Zaha Al Munawwarah Hotel', city: 'Madinah', stars: 3,
        distance: "Close to Prophet's Mosque", image: zahaImg,
        description: "Zaha Al Munawwarah is in the Al Munawwarah district near the mosque, offering spacious rooms, prayer facilities, and restaurant.",
        highlights: ["Close to Prophet's Mosque", 'Spacious rooms', 'Prayer facilities', 'In-house restaurant', 'Free Wi-Fi'],
      },
      {
        name: 'New Madinah Hotel', city: 'Madinah', stars: 3,
        distance: "Walking distance to Prophet's Mosque", image: newMadinahImg,
        description: "New Madinah Hotel is within walking distance of the mosque, offering clean rooms, Ziyarat guidance, and 24-hour reception.",
        highlights: ["Walking distance to mosque", 'Clean comfortable rooms', 'Ziyarat guidance', 'On-site restaurant', 'Free Wi-Fi'],
      },
    ],
  },
  {
    title: '10 Nights 3 Star Umrah Package from US',
    nights: 10, price: 1350, makkahNights: 5, madinahNights: 5,
    includes: ['Umrah Visa', 'Quad Sharing Basis', 'Return Flights', 'Ground Transfers on Extra Cost', 'Direct Flights on Request'],
    makkahHotels: [
      {
        name: 'Emaar Legend Hotel Makkah', city: 'Makkah', stars: 3,
        distance: '1.5 km from Masjid Al-Haram', image: emaarLegendImg,
        description: 'Emaar Legend is 1.5 km from the Haram with restaurant, satellite TV, free Wi-Fi, and 24-hour front desk for pilgrims.',
        highlights: ['1.5 km from Masjid Al-Haram', 'Restaurant', 'Satellite TV', '24-hour front desk', 'Free Wi-Fi'],
      },
      {
        name: 'Afra Hotel Makkah', city: 'Makkah', stars: 3,
        distance: '2.5 km from Masjid Al-Haram', image: afraImg,
        description: 'Afra Hotel is 2.5 km from the Haram, clean and comfortable with dining, free Wi-Fi, and pilgrim assistance.',
        highlights: ['2.5 km from Masjid Al-Haram', 'In-house dining', 'Umrah assistance', 'Air-conditioned rooms', 'Free Wi-Fi'],
      },
      {
        name: 'Le Meridian Towers Makkah', city: 'Makkah', stars: 3,
        distance: '1 km from Masjid Al-Haram', image: leMeridianImg,
        description: 'Le Meridian Towers is 1 km from the Haram, popular among US pilgrims for its central location and competitive pricing.',
        highlights: ['1 km from Masjid Al-Haram', 'Central location', 'In-house restaurant', 'Satellite TV', 'Free Wi-Fi'],
      },
    ],
    madinahHotels: [
      {
        name: 'Grand Plaza Al Madinah', city: 'Madinah', stars: 3,
        distance: "Near Prophet's Mosque", image: grandPlazaImg,
        description: "Grand Plaza Al Madinah is near the mosque, offering air-conditioned rooms, restaurant, prayer amenities, and 24-hour assistance.",
        highlights: ["Near Prophet's Mosque", 'Air-conditioned rooms', 'On-site restaurant', 'Prayer mats & Qibla', '24-hour assistance'],
      },
      {
        name: 'Faraj Al Madinah Hotel', city: 'Madinah', stars: 3,
        distance: "Near Prophet's Mosque", image: farajMadinahImg,
        description: "Faraj Al Madinah offers comfortable rooms near the mosque with Arabic restaurant, prayer amenities, and helpful front desk staff.",
        highlights: ["Near Prophet's Mosque", 'Arabic restaurant', 'Prayer mats & Qibla', 'Air-conditioned rooms', 'Free Wi-Fi'],
      },
      {
        name: 'Zaha Al Munawwarah Hotel', city: 'Madinah', stars: 3,
        distance: "Close to Prophet's Mosque", image: zahaImg,
        description: "Zaha Al Munawwarah in the Al Munawwarah district offers spacious rooms, prayer facilities, and dining near the mosque.",
        highlights: ["Close to Prophet's Mosque", 'Spacious rooms', 'Prayer facilities', 'In-house restaurant', 'Free Wi-Fi'],
      },
    ],
  },
];

// ══════════════════════════════════════════════════════════════
// SHARED COMPONENTS
// ══════════════════════════════════════════════════════════════
const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-noor-gold fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const FeatureTag = ({ text }: { text: string }) => {
  const lower = text.toLowerCase();
  let icon = (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
  if (lower.includes('visa')) icon = (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
    </svg>
  );
  if (lower.includes('flight')) icon = (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
  if (lower.includes('hotel')) icon = (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
  if (lower.includes('transport') || lower.includes('transfer')) icon = (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m0-1a2 2 0 104 0m6 0a2 2 0 104 0m1-9V7a1 1 0 00-1-1h-4" />
    </svg>
  );
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-noor-gold/10 text-noor-gold border border-noor-gold/20">
      {icon} {text}
    </span>
  );
};

// ══════════════════════════════════════════════════════════════
// 5-STAR CARD
// ══════════════════════════════════════════════════════════════
const UmrahPackageCard = ({ pkg }: { pkg: PackageItem }) => {
  const kaabaImages = getKaabaImages();
  const haramImages = getHaramImages();
  const images = pkg.type === 'kaaba' ? kaabaImages : haramImages;
  const imgSrc = images[pkg.image as keyof typeof images] || images.img1;
  const navigate = useNavigate();

  const handleMoreDetails = () => {
    navigate(`/packages/${pkg.type === 'kaaba' ? 'kaaba-view' : 'haram-view'}/${pkg.nights}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col md:flex-row">
        <div className="relative md:w-72 lg:w-80 flex-shrink-0 overflow-hidden">
          <img
            src={imgSrc}
            alt={pkg.title}
            className="w-full h-56 md:h-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
            onClick={handleMoreDetails}
          />
          <div className="absolute top-3 left-3 bg-noor-gold text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide shadow-lg">
            {pkg.nights} Nights
          </div>
        </div>
        <div className="flex-1 p-5 sm:p-6 flex flex-col">
          <h3 className="text-lg sm:text-xl font-bold text-noor-green leading-tight mb-3">{pkg.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {pkg.features.map((f, i) => <FeatureTag key={i} text={f} />)}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">{pkg.description}</p>
          <div className="mt-auto flex items-end justify-between pt-3 border-t border-gray-100">
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wide">From</span>
              <div className="flex items-baseline gap-0.5">
                <span className="text-noor-gold text-sm">$</span>
                <span className="text-2xl sm:text-3xl font-bold text-noor-green">{pkg.price}</span>
                <span className="text-gray-400 text-sm">/pp</span>
              </div>
            </div>
            <button onClick={handleMoreDetails} className="text-noor-green text-sm font-semibold hover:text-[#234d33] flex items-center gap-1 group/btn">
              More Details
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PackageCategorySection = ({ category }: { category: PackageCategory }) => (
  <section className="py-10">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-noor-gold text-xl italic mb-1">{category.subtitle}</p>
        <h2 className="text-3xl font-bold text-noor-green">{category.name}</h2>
        <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
      </div>
      <div className="space-y-5">
        {category.packages.map((pkg, i) => <UmrahPackageCard key={i} pkg={pkg} />)}
      </div>
    </div>
  </section>
);

// ══════════════════════════════════════════════════════════════
// 4-STAR & 3-STAR HOTEL SELECTOR CARD
// ══════════════════════════════════════════════════════════════
const HotelSelectorPanel = ({
  hotels,
  label,
}: {
  hotels: HotelInfo[];
  label: string;
}) => {
  const [selected, setSelected] = useState(0);
  const hotel = hotels[selected];

  return (
    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Header */}
      <div className="bg-[#1a3c2a] px-4 py-3 flex items-center gap-2">
        <svg className="w-4 h-4 text-noor-gold" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span className="text-white text-xs font-semibold uppercase tracking-widest">{label}</span>
      </div>

      {/* Thumb tabs — scrollable on mobile */}
      <div className="flex overflow-x-auto bg-gray-50 border-b border-gray-100 gap-0 scrollbar-hide">
        {hotels.map((h, i) => (
          <button
            key={h.name}
            onClick={() => setSelected(i)}
            className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2.5 border-b-2 text-center transition-all min-w-[90px] sm:min-w-0 ${
              selected === i
                ? 'border-noor-gold bg-white text-noor-gold'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <div className={`w-10 h-10 rounded-full overflow-hidden border-2 flex-shrink-0 ${selected === i ? 'border-noor-gold' : 'border-gray-200'}`}>
              <img src={h.image} alt={h.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] font-semibold leading-tight line-clamp-2 max-w-[80px] text-center">
              {h.name.split(' ').slice(0, 3).join(' ')}
            </span>
          </button>
        ))}
      </div>

      {/* Selected hotel detail */}
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="sm:col-span-2 h-52 sm:h-auto overflow-hidden">
          <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        </div>
        <div className="sm:col-span-3 p-5">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <StarRating count={hotel.stars} />
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{hotel.distance}</span>
          </div>
          <h4 className="text-base font-bold text-[#1a3c2a] mb-2">{hotel.name}</h4>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">{hotel.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {hotel.highlights.map((hl) => (
              <div key={hl} className="flex items-start gap-1.5">
                <svg className="w-3.5 h-3.5 text-noor-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-600">{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Detailed Package Card (4-star & 3-star) ───────────────────
const DetailedPackageCard = ({ pkg, starLevel }: { pkg: DetailedPackageItem; starLevel: number }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
    {/* Card header */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-gray-100">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="bg-noor-gold text-white text-xs font-bold px-3 py-1.5 rounded-lg">
          {pkg.nights} Nights
        </span>
        <h3 className="text-base sm:text-lg font-bold text-noor-green">{pkg.title}</h3>
      </div>
      <div className="flex items-baseline gap-1 flex-shrink-0">
        <span className="text-noor-gold text-sm">$</span>
        <span className="text-2xl font-bold text-noor-green">{pkg.price}</span>
        <span className="text-gray-400 text-sm">/pp</span>
      </div>
    </div>

    <div className="p-5 sm:p-6 space-y-6">
      {/* Inclusions */}
      <div>
        <p className="text-xs uppercase tracking-widest text-noor-gold font-semibold mb-3">Package Includes</p>
        <div className="flex flex-wrap gap-2">
          {pkg.includes.map((item, i) => <FeatureTag key={i} text={item} />)}
        </div>
      </div>

      {/* Night split */}
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-2 bg-[#1a3c2a]/5 px-3 py-2 rounded-lg">
          <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-600 font-medium">Makkah:</span>
          <span className="font-bold text-noor-green">{pkg.makkahNights} Nights</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1a3c2a]/5 px-3 py-2 rounded-lg">
          <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-gray-600 font-medium">Madinah:</span>
          <span className="font-bold text-noor-green">{pkg.madinahNights} Nights</span>
        </div>
      </div>

      {/* Makkah hotels selector */}
      <HotelSelectorPanel
        hotels={pkg.makkahHotels}
        label={`${starLevel}-Star Hotels in Makkah`}
      />

      {/* Madinah hotels selector */}
      <HotelSelectorPanel
        hotels={pkg.madinahHotels}
        label={`${starLevel}-Star Hotels in Madinah`}
      />

      {/* WhatsApp CTA */}
      <div className="pt-2">
        <a
          href={`https://wa.me/17866386022?text=Hi%2C%20I%27m%20interested%20in%20the%20${pkg.nights}-Night%20${starLevel}-Star%20Umrah%20Package`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1a3c2a] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#2a5c3a] transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  </div>
);

// ── Multi-package section ─────────────────────────────────────
const DetailedPackagesSection = ({ packages, starLevel }: { packages: DetailedPackageItem[]; starLevel: number }) => (
  <section className="py-10">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-noor-gold text-xl italic mb-1">Haram Umrah Travels</p>
        <h2 className="text-3xl font-bold text-noor-green">{starLevel} Star Umrah Packages from US</h2>
        <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
      </div>
      <div className="space-y-8">
        {packages.map((pkg, i) => (
          <DetailedPackageCard key={i} pkg={pkg} starLevel={starLevel} />
        ))}
      </div>
    </div>
  </section>
);

// ══════════════════════════════════════════════════════════════
// MAIN PAGE
// ══════════════════════════════════════════════════════════════
const UmrahPackagesCombined: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tier = (searchParams.get('tier') as StarType) || '5star';
  const view = (searchParams.get('view') as FiveStarView) || 'haram';

  const currentLabel =
    tier === '5star'
      ? `5 Star ${view === 'haram' ? 'Haram View' : 'Kaaba View'} Packages`
      : tier === '4star'
      ? '4 Star Packages'
      : '3 Star Packages';

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-noor-green py-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-noor-gold text-lg italic mb-1">Haram Umrah Travels</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-white">{currentLabel}</h1>
          <div className="w-16 h-0.5 bg-noor-gold/40 mx-auto mt-4" />
        </div>
      </div>

      <div>
        {tier === '5star' && view === 'kaaba' && <PackageCategorySection category={kaabaViewData} />}
        {tier === '5star' && view === 'haram'  && <PackageCategorySection category={haramViewData} />}
        {tier === '4star' && <DetailedPackagesSection packages={fourStarPackages} starLevel={4} />}
        {tier === '3star' && <DetailedPackagesSection packages={threeStarPackages} starLevel={3} />}
      </div>
    </div>
  );
};

export default UmrahPackagesCombined;