// Navigation.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from '../icons/Icons';
import logo from '../../assets/images/logo.png';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Haram Umrah Travels" className="h-14 md:h-20" />
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-noor-green font-medium text-sm transition-colors">
            Home
          </Link>

          <Link to="/packages" className="text-gray-700 hover:text-noor-green font-medium text-sm transition-colors">
            Umrah Packages
          </Link>

          <Link to="/about" className="text-gray-700 hover:text-noor-green font-medium text-sm transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-noor-green font-medium text-sm transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-noor-green transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-noor-green ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-noor-green transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Book Now - Links to Contact page */}
        <Link to="/contact" className="hidden md:flex bg-noor-green text-white px-6 py-2.5 rounded-full items-center gap-2 text-sm font-semibold hover:bg-[#2a5c3a] transition-colors">
          <CalendarIcon className="w-4 h-4" />
          Book Now
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-20">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-noor-green font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/packages" className="block text-gray-700 hover:text-noor-green font-medium" onClick={() => setMobileMenuOpen(false)}>
              Umrah Packages
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-noor-green font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-noor-green font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            {/* Mobile Book Now Button */}
            <Link
              to="/contact"
              className="block w-full text-center bg-noor-green text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2a5c3a] transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;