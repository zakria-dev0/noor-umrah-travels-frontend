// // app.tsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TopBar from './components/layout/TopBar';
// import Navigation from './components/layout/Navigation';
// import Footer from './components/layout/Footer';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import UmrahPackagesPage from './pages/UmrahPackagesPage';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-white">
//         <TopBar />
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           {/* Umrah Package Routes */}
//           <Route path="/packages/all-luxury" element={<UmrahPackagesPage />} />
//           <Route path="/packages/group" element={<UmrahPackagesPage />} />
//           <Route path="/packages/kaaba-view" element={<UmrahPackagesPage />} />
//           <Route path="/packages/haram-view" element={<UmrahPackagesPage />} />
//           <Route path="/packages/shuttle-premium" element={<UmrahPackagesPage />} />
//           <Route path="/packages/land" element={<UmrahPackagesPage />} />
//           <Route path="/packages/affordable" element={<UmrahPackagesPage />} />
//           <Route path="/packages/travel" element={<UmrahPackagesPage />} />
//           {/* Guide Page Route */}
//           <Route path="/guide" element={<div>Guide Page - Coming Soon</div>} />
//           {/* Optional: Catch-all route for package types */}
//           <Route path="/packages/:packageType" element={<UmrahPackagesPage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UmrahPackagesPage from './pages/UmrahPackagesPage';
import GroupUmrah from './pages/GroupUmrah';
import FiveStar from './pages/FiveStar';
import HaramView from './pages/HaramView';
import KaabaViewDetail from './pages/KaabaViewDetail';
import HaramViewDetail from './pages/HaramViewDetail'; // ADD THIS IMPORT

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <TopBar />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Group Umrah specific route */}
          <Route path="/group-umrah" element={<GroupUmrah />} />
          
          {/* Kaaba View Routes */}
          <Route path="/packages/kaaba-view" element={<FiveStar />} />
          <Route path="/packages/kaaba-view/:nights" element={<KaabaViewDetail />} />
          
          {/* Haram View Routes - ADDED DETAIL ROUTE */}
          <Route path="/packages/haram-view" element={<HaramView />} />
          <Route path="/packages/haram-view/:nights" element={<HaramViewDetail />} /> {/* ADD THIS LINE */}
          
          {/* Umrah Package Routes */}
          <Route path="/packages/all-luxury" element={<UmrahPackagesPage />} />
          <Route path="/packages/shuttle-premium" element={<UmrahPackagesPage />} />
          <Route path="/packages/land" element={<UmrahPackagesPage />} />
          <Route path="/packages/affordable" element={<UmrahPackagesPage />} />
          <Route path="/packages/travel" element={<UmrahPackagesPage />} />
          
          {/* Guide Page Route */}
          <Route path="/guide" element={<div>Guide Page - Coming Soon</div>} />
          
          {/* Optional: Catch-all route for package types */}
          <Route path="/packages/:packageType" element={<UmrahPackagesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;