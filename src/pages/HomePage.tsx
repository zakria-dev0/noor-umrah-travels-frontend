// HomePage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import InquiryForm from '../components/sections/InquiryForm';
import AboutSection from '../components/sections/AboutSection';
import PackagesSection from '../components/sections/PackagesSection';
import DepartureCities from '../components/sections/DepartureCities';
import AirlinePartners from '../components/sections/AirlinePartners';
import WhatsIncluded from '../components/sections/WhatsIncluded';
import FAQSection from '../components/sections/FAQSection';

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
      <Helmet>
        <title>Premium Umrah Packages from USA | Affordable & Trusted Travel Services</title>
        <meta name="description" content="Book reliable Hajj and Umrah packages from the USA with Haram Umrah Travels. Explore affordable and luxurious 5-star Umrah packages for a smooth spiritual journey." />
      </Helmet>
      <HeroSection />
      <InquiryForm />

      <SectionDivider />
      <AboutSection />

      <SectionDivider />
      <PackagesSection
        stars={5}
        // title="5 Star Luxury Packages"
        // subtitle="Ultimate luxury with Haram views & VIP services"
        title="Luxury 5 Star Umrah Packages"
        subtitle="Enjoy elite comfort with breathtaking Haram views and VIP services"
        packages={[
          { days: 7, price: 790 },
          { days: 10, price: 990 },
          { days: 14, price: 1190 },
        ]}
      />

      <SectionDivider />
      <PackagesSection
        stars={4}
        // title="4 Star Umrah Packages"
        // subtitle="Premium comfort with superior amenities"
        title="4 Star Umrah Packages"
        subtitle="Experience Affordable luxury and comfort on your sacred journey"
        packages={[
          { days: 7, price: 590 },
          { days: 10, price: 790 },
          { days: 14, price: 990 },
        ]}
      />

      <SectionDivider />
      <PackagesSection
        stars={3}
        // title="3 Star Umrah Packages"
        // subtitle="Comfortable accommodations with excellent value"
        title="3 Star Umrah Packages"
        subtitle="Comfortable stays designed for a smooth and budget-friendly pilgrimage"
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
      <FAQSection/>
    </>
  );
};

export default HomePage;