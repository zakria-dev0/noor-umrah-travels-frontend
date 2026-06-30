import { Outlet } from "react-router-dom";

import TopBar from "./TopBar";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navigation />

      <Outlet />

      <Footer />
    </div>
  );
};

export default PublicLayout;