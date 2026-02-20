// Navigation.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CalendarIcon } from '../icons/Icons';
import logo from '../../assets/images/logo-new.png';

type StarType = '5star' | '4star' | '3star';
type FiveStarView = 'haram' | 'kaaba';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [selectedStar, setSelectedStar] = useState<StarType | null>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const mobilePackagesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close panel on route change
  useEffect(() => {
    setPackagesOpen(false);
    setSelectedStar(null);
    setMobileMenuOpen(false);
  }, [location]);

  // Close panel on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const isInsideDesktop = packagesRef.current?.contains(target);
      const isInsideMobile = mobilePackagesRef.current?.contains(target);
      if (!isInsideDesktop && !isInsideMobile) {
        setPackagesOpen(false);
        setSelectedStar(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavigate = (star: StarType, view?: FiveStarView) => {
    let path = '/packages';
    if (star === '5star') {
      path = `/packages?tier=5star&view=${view || 'haram'}`;
    } else if (star === '4star') {
      path = '/packages?tier=4star';
    } else {
      path = '/packages?tier=3star';
    }
    navigate(path);
    setPackagesOpen(false);
    setSelectedStar(null);
    setMobileMenuOpen(false);
  };

  const starOptions: {
    key: StarType;
    label: string;
    stars: number;
    tagline: string;
    price: string;
    hasSub: boolean;
  }[] = [
    { key: '5star', label: '5 Star', stars: 5, tagline: 'Ultimate Luxury', price: '$890', hasSub: true },
    { key: '4star', label: '4 Star', stars: 4, tagline: 'Premium Comfort', price: '$1,319', hasSub: false },
    { key: '3star', label: '3 Star', stars: 3, tagline: 'Great Value', price: '$1,270', hasSub: false },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Haram Umrah Travels" className="h-14 md:h-16 lg:h-20" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-noor-green font-medium text-sm transition-colors"
            >
              Home
            </Link>

            {/* Umrah Packages Trigger */}
            <div ref={packagesRef} className="relative">
              <button
                onClick={() => {
                  setPackagesOpen(!packagesOpen);
                  setSelectedStar(null);
                }}
                className={`flex items-center gap-1.5 font-medium text-sm transition-colors ${
                  packagesOpen ? 'text-noor-green' : 'text-gray-700 hover:text-noor-green'
                }`}
              >
                Umrah Packages
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    packagesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* ===== DESKTOP MEGA PANEL ===== */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-300 ease-out ${
                  packagesOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {/* Arrow */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100 z-10" />

                <div className="relative bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden min-w-[480px]">
                  {/* Header */}
                  <div className="bg-noor-green px-6 py-4">
                    <p className="text-noor-gold font-display text-sm italic">Haram Umrah Travels</p>
                    <h3 className="text-white font-bold text-lg">
                      {selectedStar === '5star' ? 'Select Your View' : 'Choose Your Package Tier'}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Back button when in 5-star sub-view */}
                    {selectedStar === '5star' && (
                      <button
                        onClick={() => setSelectedStar(null)}
                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-noor-green mb-3 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to all tiers
                      </button>
                    )}

                    {/* ---- TIER SELECTION ---- */}
                    {!selectedStar && (
                      <div className="space-y-2">
                        {starOptions.map((opt) => (
                          <button
                            key={opt.key}
                            onClick={() => {
                              if (opt.hasSub) {
                                setSelectedStar(opt.key);
                              } else {
                                handleNavigate(opt.key);
                              }
                            }}
                            className="group w-full flex items-center gap-4 p-4 rounded-xl hover:bg-noor-green/[0.03] border border-transparent hover:border-noor-green/10 transition-all duration-200"
                          >
                            {/* Star icon cluster */}
                            <div className="w-12 h-12 rounded-xl bg-noor-green/5 flex items-center justify-center flex-shrink-0 group-hover:bg-noor-green/10 transition-colors">
                              <div className="flex flex-wrap justify-center gap-px">
                                {Array.from({ length: opt.stars }).map((_, i) => (
                                  <svg
                                    key={i}
                                    className="w-3 h-3 text-noor-gold fill-current"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>

                            {/* Info */}
                            <div className="flex-1 text-left">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-noor-green text-base">
                                  {opt.label}
                                </span>
                                <span className="text-[10px] font-semibold text-noor-gold bg-noor-gold/10 px-2 py-0.5 rounded-full">
                                  from {opt.price}
                                </span>
                              </div>
                              <p className="text-sm text-gray-400 mt-0.5">{opt.tagline}</p>
                            </div>

                            {/* Arrow */}
                            <svg
                              className="w-4 h-4 text-gray-300 group-hover:text-noor-green group-hover:translate-x-0.5 transition-all"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    )}

                    {/* ---- 5-STAR SUB OPTIONS ---- */}
                    {selectedStar === '5star' && (
                      <div className="grid grid-cols-2 gap-3">
                        {/* Haram View */}
                        <button
                          onClick={() => handleNavigate('5star', 'haram')}
                          className="group relative p-5 rounded-xl border-2 border-gray-100 hover:border-noor-green/30 hover:shadow-lg transition-all duration-300 text-left overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-20 h-20 bg-noor-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                          <div className="relative z-10">
                            <div className="w-10 h-10 rounded-lg bg-noor-green/10 flex items-center justify-center mb-3 group-hover:bg-noor-green/15 transition-colors">
                              <svg className="w-5 h-5 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <h4 className="font-bold text-noor-green text-base mb-1">Haram View</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              Stunning views of the Holy Haram from premium rooms
                            </p>
                            <div className="mt-3 flex items-baseline gap-1">
                              <span className="text-lg font-bold text-noor-green">$890</span>
                              <span className="text-[10px] text-gray-400">/pp</span>
                            </div>
                          </div>
                        </button>

                        {/* Kaaba View */}
                        <button
                          onClick={() => handleNavigate('5star', 'kaaba')}
                          className="group relative p-5 rounded-xl border-2 border-gray-100 hover:border-noor-gold/30 hover:shadow-lg transition-all duration-300 text-left overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 w-20 h-20 bg-noor-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                          <div className="relative z-10">
                            <div className="w-10 h-10 rounded-lg bg-noor-gold/10 flex items-center justify-center mb-3 group-hover:bg-noor-gold/15 transition-colors">
                              <svg className="w-5 h-5 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </div>
                            <h4 className="font-bold text-noor-green text-base mb-1">Kaaba View</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                              Direct views of the Holy Kaaba from your room
                            </p>
                            <div className="mt-3 flex items-baseline gap-1">
                              <span className="text-lg font-bold text-noor-green">$990</span>
                              <span className="text-[10px] text-gray-400">/pp</span>
                            </div>
                          </div>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-3 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400">All packages include visa & flights</span>
                    <Link
                      to="/contact"
                      className="text-[11px] font-semibold text-noor-green hover:underline"
                      onClick={() => {
                        setPackagesOpen(false);
                        setSelectedStar(null);
                      }}
                    >
                      Custom Package?
                    </Link>
                  </div>
                </div>
              </div>
            </div>

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
            <span className={`w-6 h-0.5 bg-noor-green transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-noor-green ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-noor-green transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Book Now Desktop */}
          <Link
            to="/contact"
            className="hidden md:flex bg-noor-green text-white px-6 py-2.5 rounded-full items-center gap-2 text-sm font-semibold hover:bg-[#2a5c3a] transition-colors"
          >
            <CalendarIcon className="w-4 h-4" />
            Book Now
          </Link>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] sm:w-[340px] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="text-sm font-bold text-noor-green tracking-wide uppercase">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-5 space-y-1 overflow-y-auto h-[calc(100%-160px)]" ref={mobilePackagesRef}>
          <Link
            to="/"
            className="flex items-center px-4 py-3.5 rounded-xl text-sm font-medium text-gray-600 hover:text-noor-green hover:bg-gray-50 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Packages Accordion */}
          <div>
            <button
              onClick={() => setPackagesOpen(!packagesOpen)}
              className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-medium text-gray-600 hover:text-noor-green hover:bg-gray-50 transition-all"
            >
              Umrah Packages
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${packagesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                packagesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-4 pr-2 py-2 space-y-1">
                {/* Mobile: Back if in 5-star sub */}
                {selectedStar === '5star' && (
                  <button
                    onClick={() => setSelectedStar(null)}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-noor-green px-3 py-2 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                  </button>
                )}

                {/* Mobile: Tier buttons */}
                {!selectedStar &&
                  starOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        if (opt.hasSub) {
                          setSelectedStar(opt.key);
                        } else {
                          handleNavigate(opt.key);
                        }
                      }}
                      className="flex items-center justify-between w-full px-3 py-3 rounded-lg hover:bg-noor-green/[0.04] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex gap-px">
                          {Array.from({ length: opt.stars }).map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-noor-gold fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-noor-green">{opt.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400">from {opt.price}</span>
                        <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  ))}

                {/* Mobile: 5-star sub-options */}
                {selectedStar === '5star' && (
                  <div className="space-y-1">
                    <button
                      onClick={() => handleNavigate('5star', 'haram')}
                      className="flex items-center gap-3 w-full px-3 py-3 rounded-lg hover:bg-noor-green/[0.04] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-noor-green/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <span className="text-sm font-semibold text-noor-green">Haram View</span>
                        <p className="text-[10px] text-gray-400">from $890/pp</p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavigate('5star', 'kaaba')}
                      className="flex items-center gap-3 w-full px-3 py-3 rounded-lg hover:bg-noor-green/[0.04] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-noor-gold/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <span className="text-sm font-semibold text-noor-green">Kaaba View</span>
                        <p className="text-[10px] text-gray-400">from $990/pp</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="flex items-center px-4 py-3.5 rounded-xl text-sm font-medium text-gray-600 hover:text-noor-green hover:bg-gray-50 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="flex items-center px-4 py-3.5 rounded-xl text-sm font-medium text-gray-600 hover:text-noor-green hover:bg-gray-50 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Mobile CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-100 bg-gray-50/50">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 w-full bg-noor-green text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#234d33] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <CalendarIcon className="w-4 h-4" />
            Book Now
          </Link>
          <a
            href="tel:+13057768923"
            className="flex items-center justify-center gap-2 w-full text-noor-green py-3 mt-2 text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +1 (305) 776-8923
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;