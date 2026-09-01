// GuidePage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const GuidePage: React.FC = () => (
  <div className="min-h-screen bg-white flex items-center justify-center py-24 px-4">
    <Helmet>
      <title>Umrah Guide | Haram Umrah Travels</title>
      <meta name="description" content="A step-by-step guide to performing Umrah — coming soon from Haram Umrah Travels." />
      <meta name="robots" content="noindex, follow" />
      <link rel="canonical" href="https://haramumrahtravels.com/guide" />
    </Helmet>
    <div className="text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-noor-green mb-3">Umrah Guide</h1>
      <p className="text-gray-500">Our step-by-step Umrah guide is coming soon.</p>
    </div>
  </div>
);

export default GuidePage;
