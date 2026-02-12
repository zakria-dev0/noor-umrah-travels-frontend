// // KaabaViewDetail.tsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Footer from '../components/layout/Footer';

// // images
// import heroBg from '../assets/images/packages/5-3_files/3-star-6955351e8eb2a.jpg';
// import fairmontImg from '../assets/images/packages/5-3_files/imp-7.webp';
// import movenpickImg from '../assets/images/packages/5-3_files/m2.webp';
// import transportImg from '../assets/images/packages/5-3_files/t-1.webp';
// import visaImg from '../assets/images/packages/5-3_files/s-1.webp';

// // Related package images
// import p1 from '../assets/images/packages/5-3_files/p-1.webp';
// import p2 from '../assets/images/packages/5-3_files/p-2.webp';
// import p3 from '../assets/images/packages/5-3_files/p-3.webp';

// const KaabaViewDetail: React.FC = () => {
//   const { nights } = useParams();

//   return (
//     <div className="bg-white">

//       {/* ================= HERO ================= */}
//       <section
//         className="relative bg-cover bg-center text-white"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       >
//         <div className="absolute inset-0 bg-black/70" />
//         <div className="relative max-w-6xl mx-auto px-4 py-28 text-center">
//           <p className="text-noor-gold uppercase tracking-widest mb-4">
//             Welcome To Hajar Travels
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             5 Star Kaaba View Package (5 Nights)
//           </h1>
//           <p className="text-noor-gold text-lg">
//             $990 - Based on Quad | $1190 - Based on Triple | $1290 - Based on Double
//           </p>
//         </div>
//       </section>

//       {/* ================= CONTENT ================= */}
//       <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

//         {/* ===== LEFT FORM ===== */}
//         <div className="bg-[#1f1f1f] text-white p-8">
//           <h2 className="text-2xl font-bold mb-4">Book Your Tour</h2>
//           <p className="text-sm text-gray-300 mb-6">
//             Fill Out The Form Below To Book Your Unforgettable Umrah Experience.
//           </p>

//           <form className="space-y-4">
//             <input className="w-full bg-transparent border-b border-gray-500 py-2" placeholder="Full Name" />
//             <input className="w-full bg-transparent border-b border-gray-500 py-2" placeholder="Phone Number" />
//             <input className="w-full bg-transparent border-b border-gray-500 py-2" placeholder="Email Address" />
//             <textarea className="w-full bg-transparent border-b border-gray-500 py-2" placeholder="Your Enquiry" />
//             <button className="bg-noor-gold text-black w-full py-3 mt-4">
//               Send A Message
//             </button>
//           </form>
//         </div>

//         {/* ===== RIGHT DETAILS ===== */}
//         <div className="lg:col-span-2 space-y-8">
//           <div>
//             <h3 className="text-noor-gold font-semibold mb-3">OTHER BENEFITS INCLUDED:</h3>

//             <h4 className="font-bold mb-2">PACKAGE DETAILS:</h4>
//             <ul className="list-disc ml-5 text-gray-700 space-y-2">
//               <li>$990 Quad | $1190 Triple | $1290 Double</li>
//               <li>Mecca: 5 Star Fairmont Makkah Clock Tower (Kaaba View)</li>
//               <li>Medina: Anwar Al Medina Movenpick (Haram View)</li>
//               <li>Transportation: Jeddah – Mecca – Medina – Jeddah</li>
//               <li>Sightseeing in Mecca & Medina</li>
//               <li>Electronic Visa Processing</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold mb-2">PACKAGE FEATURES:</h4>
//             <ul className="list-disc ml-5 text-gray-700 space-y-2">
//               <li>Meet & Greet Service</li>
//               <li>24 Hours Support</li>
//               <li>Complimentary Umrah Material</li>
//               <li>Online Umrah Preparation Session</li>
//             </ul>
//           </div>

//           <div className="grid grid-cols-2 gap-6 pt-6">
//             <img src={fairmontImg} alt="Fairmont" className="w-full h-64 object-cover" />
//             <img src={movenpickImg} alt="Movenpick" className="w-full h-64 object-cover" />
//           </div>
//         </div>
//       </section>

//       {/* ================= SERVICES DETAILS (UPDATED CONTENT) ================= */}
//       <section className="bg-[#2b2b2b] py-20">
//         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

//           <ServiceCard
//             img={transportImg}
//             title="Transportation On Ground"
//             subtitle="Transportation On Ground"
//             desc="Quality service is our ambition. Enjoy complete ground service from Jeddah to Makkah, Makkah to Madinah and Madinah back to airport with our experienced staff."
//           />

//           <ServiceCard
//             img={visaImg}
//             title="Saudi Tourist Visa"
//             subtitle="Saudi Visa"
//             desc="The E-Visa will be a one-year, multiple entry visa, allowing tourists to spend up to 90 days in the country. The tourist visa allows tourism activities, family visits, leisure and Umrah (excluding Hajj)."
//           />

//           <ServiceCard
//             img={fairmontImg}
//             title="Hotel In Makkah"
//             subtitle="Fairmont Makkah Clock Tower"
//             desc="Situated only 100 meters from Masjid al-Haram, this 76-storey luxury hotel offers Kaaba, Haram or Holy City views, fitness centre, spa facilities and 24-hour concierge service."
//           />

//           <ServiceCard
//             img={movenpickImg}
//             title="Hotel In Madina"
//             subtitle="Anwar Al Medina Movenpick"
//             desc="The 5-star Anwar Al Madinah Mövenpick offers elegant accommodation less than 5 minutes' walk from the Prophet's Mosque, with modern rooms and on-site restaurants."
//           />

//         </div>
//       </section>

//       {/* ================= RELATED PACKAGES (MISSING SECTION ADDED) ================= */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-6xl mx-auto text-center px-4">
//           <p className="text-noor-gold mb-2">Related Packages</p>
//           <h2 className="text-3xl font-bold mb-12">
//             Related packages, you might interest
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <RelatedCard nights="05" price="990" img={p1} />
//             <RelatedCard nights="07" price="1190" img={p2} />
//             <RelatedCard nights="10" price="1390" img={p3} />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// const ServiceCard = ({
//   img,
//   title,
//   subtitle,
//   desc,
// }: {
//   img: string;
//   title: string;
//   subtitle: string;
//   desc: string;
// }) => (
//   <div className="bg-white p-6">
//     <div className="w-full h-56 overflow-hidden mb-4">
//       <img src={img} alt={title} className="w-full h-full object-cover" />
//     </div>
//     <p className="text-noor-gold text-sm">{title}</p>
//     <h4 className="font-bold mb-2">{subtitle}</h4>
//     <p className="text-sm text-gray-600">{desc}</p>
//   </div>
// );

// const RelatedCard = ({ nights, price, img }: { nights: string; price: string; img: string }) => (
//   <div className="bg-white shadow p-5 text-left">
//     <div className="w-full h-52 overflow-hidden mb-4">
//       <img src={img} alt="Package" className="w-full h-full object-cover" />
//     </div>
//     <span className="inline-block bg-noor-gold text-white px-3 py-1 text-sm mb-3">
//       Nights {nights}
//     </span>
//     <h4 className="font-bold">5 Star Kaaba View Package</h4>
//     <p className="font-bold text-lg">${price} <span className="text-sm font-normal">/ Per Person</span></p>
//     <ul className="text-sm text-gray-600 mt-3 space-y-1">
//       <li>• Accommodations in Saudi Arabia</li>
//       <li>• Air Ticket not included</li>
//       <li>• Breakfast not included</li>
//     </ul>
//   </div>
// );

// export default KaabaViewDetail; 

import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/layout/Footer';

// images
import heroBg from '../assets/images/packages/5-3_files/3-star-6955351e8eb2a.jpg';
import fairmontImg from '../assets/images/packages/5-3_files/imp-7.webp';
import movenpickImg from '../assets/images/packages/5-3_files/m2.webp';
import transportImg from '../assets/images/packages/5-3_files/t-1.webp';
import visaImg from '../assets/images/packages/5-3_files/s-1.webp';

// Related package images
import p1 from '../assets/images/packages/5-3_files/p-1.webp';
import p2 from '../assets/images/packages/5-3_files/p-2.webp';
import p3 from '../assets/images/packages/5-3_files/p-3.webp';

const KaabaViewDetail: React.FC = () => {
  const { nights } = useParams();

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-6xl mx-auto px-4 py-28 text-center">
          <p className="text-noor-gold uppercase tracking-widest mb-4 text-base md:text-lg">
            Welcome To Hajar Travels
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            5 Star Kaaba View Package (5 Nights)
          </h1>
          <p className="text-noor-gold text-base md:text-lg">
            $990 - Based on Quad | $1190 - Based on Triple | $1290 - Based on Double
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">

        {/* ===== LEFT FORM ===== */}
        <div className="bg-[#1f1f1f] text-white p-6 md:p-8 lg:sticky lg:top-24 h-fit">
          <h2 className="text-2xl font-bold mb-4">Book Your Tour</h2>
          <p className="text-sm text-gray-300 mb-6">
            Fill Out The Form Below To Book Your Unforgettable Umrah Experience.
          </p>

          <form className="space-y-4">
            <input className="w-full bg-transparent border-b border-gray-500 py-2" placeholder="Full Name" />
            <input className="w-full bg-transparent border-b border-gray-500 py-2" placeholder="Phone Number" />
            <input className="w-full bg-transparent border-b border-gray-500 py-2" placeholder="Email Address" />
            <textarea className="w-full bg-transparent border-b border-gray-500 py-2" placeholder="Your Enquiry" />
            <button className="bg-noor-gold text-black w-full py-3 mt-4">
              Send A Message
            </button>
          </form>
        </div>

        {/* ===== RIGHT DETAILS ===== */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-noor-gold font-semibold mb-3">OTHER BENEFITS INCLUDED:</h3>

            <h4 className="font-bold mb-2">PACKAGE DETAILS:</h4>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>$990 Quad | $1190 Triple | $1290 Double</li>
              <li>Mecca: 5 Star Fairmont Makkah Clock Tower (Kaaba View)</li>
              <li>Medina: Anwar Al Medina Movenpick (Haram View)</li>
              <li>Transportation: Jeddah – Mecca – Medina – Jeddah</li>
              <li>Sightseeing in Mecca & Medina</li>
              <li>Electronic Visa Processing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">PACKAGE FEATURES:</h4>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li>Meet & Greet Service</li>
              <li>24 Hours Support</li>
              <li>Complimentary Umrah Material</li>
              <li>Online Umrah Preparation Session</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <img src={fairmontImg} alt="Fairmont" className="w-full h-64 object-cover" />
            <img src={movenpickImg} alt="Movenpick" className="w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* ================= SERVICES DETAILS (UPDATED CONTENT) ================= */}
      <section className="bg-[#2b2b2b] py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <ServiceCard
            img={transportImg}
            title="Transportation On Ground"
            subtitle="Transportation On Ground"
            desc="Quality service is our ambition. Enjoy complete ground service from Jeddah to Makkah, Makkah to airport with our experienced staff."
          />

          <ServiceCard
            img={visaImg}
            title="Saudi Tourist Visa"
            subtitle="Saudi Visa"
            desc="The E-Visa will be a one-year, multiple entry visa, allowing tourists to spend up to 90 days in the country. The tourist visa allows tourism activities, family visits, leisure and Umrah (excluding Hajj)."
          />

          <ServiceCard
            img={fairmontImg}
            title="Hotel In Makkah"
            subtitle="Fairmont Makkah Clock Tower"
            desc="Situated only 100 meters from Masjid al-Haram, this 76-storey luxury hotel offers Kaaba, Haram or Holy City views, fitness centre, spa facilities and 24-hour concierge service."
          />

          <ServiceCard
            img={movenpickImg}
            title="Hotel In Madina"
            subtitle="Anwar Al Medina Movenpick"
            desc="The 5-star offers elegant accommodation less than 5 minutes' walk from the Prophet's Mosque, with modern rooms and on-site restaurants."
          />

        </div>
      </section>

      {/* ================= RELATED PACKAGES (MISSING SECTION ADDED) ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className="text-noor-gold mb-2">Related Packages</p>
          <h2 className="text-3xl font-bold mb-12">
            Related packages, you might interest
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <RelatedCard nights="05" price="990" img={p1} />
            <RelatedCard nights="07" price="1190" img={p2} />
            <RelatedCard nights="10" price="1390" img={p3} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ServiceCard = ({
  img,
  title,
  subtitle,
  desc,
}: {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
}) => (
  <div className="bg-white p-6">
    <div className="w-full h-56 overflow-hidden mb-4">
      <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    <p className="text-noor-gold text-sm">{title}</p>
    <h4 className="font-bold mb-2">{subtitle}</h4>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const RelatedCard = ({ nights, price, img }: { nights: string; price: string; img: string }) => (
  <div className="bg-white shadow p-5 text-left">
    <div className="w-full h-52 overflow-hidden mb-4">
      <img src={img} alt="Package" className="w-full h-full object-cover" />
    </div>
    <span className="inline-block bg-noor-gold text-white px-3 py-1 text-sm mb-3">
      Nights {nights}
    </span>
    <h4 className="font-bold">5 Star Kaaba View Package</h4>
    <p className="font-bold text-lg">${price} <span className="text-sm font-normal">/ Per Person</span></p>
    <ul className="text-sm text-gray-600 mt-3 space-y-1">
      <li>• Accommodations in Saudi Arabia</li>
      <li>• Air Ticket not included</li>
      <li>• Breakfast not included</li>
    </ul>
  </div>
);

export default KaabaViewDetail;