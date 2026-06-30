// app.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import HaramViewDetail from './pages/HaramViewDetail';
import UmrahPackagesCombined from './pages/UmrahPackagesCombined';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import LegalCompliance from './pages/LegalCompliance';
import PublicQuote from './pages/PublicQuote';
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";

import ScrollToTop from './components/utils/ScrollToTop';
// import PromoPopup from './components/ui/PromoPopup';

import PublicLayout from "./components/layout/PublicLayout";

import ProtectedRoute from "./admin/components/ProtectedRoute";
import AdminLayout from "./admin/layouts/AdminLayout";

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/Dashboard";
import Contacts from "./admin/pages/Contacts";
import Inquiries from "./admin/pages/Inquiries";
import ChangePassword from "./admin/pages/ChangePassword";
import Profile from "./admin/pages/Profile";
import Customers from "./admin/pages/Customers";
import Quotes from "./admin/pages/Quotes";
import Payments from "./admin/pages/Payments";
import CreateQuote from "./admin/pages/CreateQuote";
import QuoteDetails from "./admin/pages/QuoteDetails";
import CustomerDetails from "./admin/pages/CustomerDetails";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* <PromoPopup /> */}
      <div className="min-h-screen bg-white">
        {/* <TopBar />
        <Navigation /> */}
        <Routes>
           <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Group Umrah specific route */}
          <Route path="/group-umrah" element={<GroupUmrah />} />

          {/* Combined Umrah Packages Route */}
          <Route path="/packages" element={<UmrahPackagesCombined />} />

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
          
          {/* Legal Pages */}
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/legal-compliance" element={<LegalCompliance />} />

          {/* Guide Page Route */}
          <Route path="/guide" element={<div>Guide Page - Coming Soon</div>} />
          
          {/* Optional: Catch-all route for package types */}
          <Route path="/packages/:packageType" element={<UmrahPackagesPage />} />
          </Route>

          <Route
            path="/quote/:quoteNumber"
            element={<PublicQuote />}
          />
          <Route
            path="/payment/success"
            element={<PaymentSuccess />}
          />

          <Route
            path="/payment/cancel"
            element={<PaymentCancel />}
          />


           {/* ========================= */}
        {/* ADMIN LOGIN */}
        {/* ========================= */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        {/* ========================= */}
        {/* ADMIN PROTECTED ROUTES */}
        {/* ========================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="dashboard"
            element={<Dashboard />}
          />

          <Route
            path="contacts"
            element={<Contacts />}
          />

          <Route
            path="inquiries"
            element={<Inquiries />}
          />

          <Route
            path="change-password"
            element={<ChangePassword />}
          />
          <Route
          path="profile"
          element={<Profile />}
        />
        <Route
          path="/admin/customers"
          element={<Customers />}
        />
        <Route
          path="/admin/customers/:id"
          element={<CustomerDetails />}
        />
        <Route
            path="/admin/quotes"
            element={<Quotes />}
          />

          <Route
            path="/admin/quotes/create"
            element={<CreateQuote />}
          />

          <Route
              path="/admin/quotes/:id"
              element={<QuoteDetails />}
          />

          <Route
            path="/admin/payments"
            element={<Payments />}
          />
        </Route>
        

        {/* ========================= */}
        {/* FALLBACK */}
        {/* ========================= */}

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;