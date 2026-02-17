// // HomePage.tsx
// import React from 'react';
// import HeroSection from '../components/sections/HeroSection';
// // import TrustBanner from '../components/sections/TrustBanner';
// import InquiryForm from '../components/sections/InquiryForm';
// import AboutSection from '../components/sections/AboutSection';
// import PackagesSection from '../components/sections/PackagesSection';
// // import StatsCounter from '../components/sections/StatsCounter';
// import DepartureCities from '../components/sections/DepartureCities';
// import AirlinePartners from '../components/sections/AirlinePartners';
// import HotelsSection from '../components/sections/HotelsSection';
// import WhatsIncluded from '../components/sections/WhatsIncluded';
// import Testimonials from '../components/sections/Testimonials';
// import ExpertGuidance from '../components/sections/ExpertGuidance';
// import CTABanner from '../components/sections/CTABanner';

// const HomePage: React.FC = () => {
//   return (
//     <>
//       <HeroSection />
//       {/* <TrustBanner /> */}
//       <InquiryForm />
//       <AboutSection />

//       {/* 5 Star Packages */}
//       <PackagesSection
//         stars={5}
//         title="5 Star Luxury Packages"
//         subtitle="Ultimate luxury with Haram views & VIP services"
//         packages={[
//           { days: 7, price: 790 },
//           { days: 10, price: 990 },
//           { days: 14, price: 1190 },
//         ]}
//       />

//       {/* 4 Star Packages */}
//       <PackagesSection
//         stars={4}
//         title="4 Star Umrah Packages"
//         subtitle="Premium comfort with superior amenities"
//         packages={[
//           { days: 7, price: 590 },
//           { days: 10, price: 790 },
//           { days: 14, price: 990 },
//         ]}
//       />

//       {/* 3 Star Packages */}
//       <PackagesSection
//         stars={3}
//         title="3 Star Umrah Packages"
//         subtitle="Comfortable accommodations with excellent value"
//         packages={[
//           { days: 7, price: 390 },
//           { days: 10, price: 590 },
//           { days: 14, price: 790 },
//         ]}
//       />

//       <DepartureCities />
//       <AirlinePartners />
//       <HotelsSection />
//       <WhatsIncluded />
//       <Testimonials />
//       <ExpertGuidance />
//       <CTABanner />
//     </>
//   );
// };

// export default HomePage; 

// HomePage.tsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import InquiryForm from '../components/sections/InquiryForm';
import AboutSection from '../components/sections/AboutSection';
import PackagesSection from '../components/sections/PackagesSection';
import DepartureCities from '../components/sections/DepartureCities';
import AirlinePartners from '../components/sections/AirlinePartners';
import WhatsIncluded from '../components/sections/WhatsIncluded';

const SectionDivider = () => (
  <div className="section-divider">
    <div className="section-divider__line" />
    <div className="section-divider__ornament">✦</div>
    <div className="section-divider__line" />
  </div>
);

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <InquiryForm />

      <SectionDivider />
      <AboutSection />

      <SectionDivider />
      <PackagesSection
        stars={5}
        title="5 Star Luxury Packages"
        subtitle="Ultimate luxury with Haram views & VIP services"
        packages={[
          { days: 7, price: 790 },
          { days: 10, price: 990 },
          { days: 14, price: 1190 },
        ]}
      />

      <SectionDivider />
      <PackagesSection
        stars={4}
        title="4 Star Umrah Packages"
        subtitle="Premium comfort with superior amenities"
        packages={[
          { days: 7, price: 590 },
          { days: 10, price: 790 },
          { days: 14, price: 990 },
        ]}
      />

      <SectionDivider />
      <PackagesSection
        stars={3}
        title="3 Star Umrah Packages"
        subtitle="Comfortable accommodations with excellent value"
        packages={[
          { days: 7, price: 390 },
          { days: 10, price: 590 },
          { days: 14, price: 790 },
        ]}
      />

      <SectionDivider />
      <DepartureCities />

      <SectionDivider />
      <AirlinePartners />

      <SectionDivider />
      <WhatsIncluded />
    </>
  );
};

export default HomePage;