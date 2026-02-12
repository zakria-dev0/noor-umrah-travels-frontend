// // homePage.jsx
// import React from 'react';
// import HeroSection from '../components/sections/HeroSection';
// import InquiryForm from '../components/sections/InquiryForm';
// import AboutSection from '../components/sections/AboutSection';
// import PackagesSection from '../components/sections/PackagesSection';
// import DepartureCities from '../components/sections/DepartureCities';
// import AirlinePartners from '../components/sections/AirlinePartners';
// import WhyChooseUs from '../components/sections/WhyChooseUs';
// import HotelsSection from '../components/sections/HotelsSection';
// import WhatsIncluded from '../components/sections/WhatsIncluded';
// import ExpertGuidance from '../components/sections/ExpertGuidance';
// import Testimonials from '../components/sections/Testimonials';
// import BlogSection from '../components/sections/BlogSection';
// import CTASection from '../components/sections/CTASection';

// const HomePage: React.FC = () => {
//   return (
//     <>
//       <HeroSection />
//       <InquiryForm />
//       <AboutSection />

//       <PackagesSection
//         stars={3}
//         title="3 Star Umrah Packages"
//         subtitle="Comfortable accommodations with excellent value"
//         packages={[
//           { days: 7, price: 895 },
//           { days: 10, price: 1095 },
//           { days: 14, price: 1295 },
//           { days: 21, price: 1495 },
//           { days: 28, price: 1695 },
//         ]}
//       />
//       <PackagesSection
//         stars={4}
//         title="4 Star Umrah Packages"
//         subtitle="Premium comfort with superior amenities"
//         packages={[
//           { days: 7, price: 1195 },
//           { days: 10, price: 1395 },
//           { days: 14, price: 1695 },
//           { days: 21, price: 1995 },
//           { days: 28, price: 2295 },
//         ]}
//       />
//       <PackagesSection
//         stars={5}
//         title="5 Star Luxury Packages"
//         subtitle="Ultimate luxury with Haram views & VIP services"
//         packages={[
//           { days: 7, price: 1795 },
//           { days: 10, price: 2095 },
//           { days: 14, price: 2495 },
//           { days: 21, price: 2995 },
//           { days: 28, price: 3495 },
//         ]}
//       />

//       <DepartureCities />
//       <AirlinePartners />
//       <WhyChooseUs />
//       <HotelsSection />
//       <WhatsIncluded />
//       <ExpertGuidance />
//       <Testimonials />
//       <BlogSection />
//       <CTASection />
//     </>
//   );
// };

// export default HomePage; 


// homePage.jsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import InquiryForm from '../components/sections/InquiryForm';
import AboutSection from '../components/sections/AboutSection';
import PackagesSection from '../components/sections/PackagesSection';
import DepartureCities from '../components/sections/DepartureCities';
import AirlinePartners from '../components/sections/AirlinePartners';
import HotelsSection from '../components/sections/HotelsSection';
import WhatsIncluded from '../components/sections/WhatsIncluded';
import ExpertGuidance from '../components/sections/ExpertGuidance';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <InquiryForm />
      <AboutSection />

      <PackagesSection
        stars={5}
        title="5 Star Luxury Packages"
        subtitle="Ultimate luxury with Haram views & VIP services"
        packages={[
          { days: 7, price: 1795 },
          { days: 10, price: 2095 },
          { days: 14, price: 2495 },
          { days: 21, price: 2995 },
          { days: 28, price: 3495 },
        ]}
      />

      <DepartureCities />
      <AirlinePartners />
      <HotelsSection />
      <WhatsIncluded />
      <ExpertGuidance />
    </>
  );
};

export default HomePage;