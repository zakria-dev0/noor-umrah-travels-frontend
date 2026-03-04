// promopopup
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PromoPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('promo-popup-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      sessionStorage.setItem('promo-popup-dismissed', 'true');
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-4 transition-all duration-300 ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup Card - Reduced size */}
      <div
        className={`relative w-full max-w-[320px] overflow-hidden transition-all duration-300 ease-out ${
          isClosing
            ? 'scale-95 opacity-0 translate-y-2'
            : 'scale-100 opacity-100 translate-y-0'
        }`}
      >
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Close Button - Floating */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 flex items-center justify-center transition-all duration-200 group"
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Hero Section with Image */}
          <div className="relative h-32 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=2070&auto=format&fit=crop"
              alt="Kaaba"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noor-green via-noor-green/60 to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
              <span className="text-noor-gold text-xl font-bold">5%</span>
              <div className="text-left">
                <p className="text-[9px] text-gray-500 uppercase tracking-wide font-semibold">Exclusive</p>
                <p className="text-[10px] text-noor-green font-bold -mt-0.5">Discount</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 pt-4 pb-4">
            {/* Title */}
            <div className="text-center mb-3">
              <div className="inline-flex items-center gap-1 bg-noor-gold/10 text-noor-gold text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full mb-1.5">
                <span className="w-1 h-1 bg-noor-gold rounded-full animate-pulse" />
                Limited Time Offer
              </div>
              <h2 className="text-lg font-bold text-noor-green font-display">
                Save on Your Sacred Journey
              </h2>
              <p className="text-gray-500 text-[11px] mt-1 leading-relaxed">
                Book during our exclusive offer period and enjoy savings across all Umrah packages
              </p>
            </div>

            {/* Features - Compact Grid */}
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {[
                { icon: '✈️', label: 'Return Flights' },
                { icon: '🏨', label: 'Haram Hotels' },
                { icon: '📋', label: 'Umrah Visa' },
                { icon: '🚐', label: 'Transfers' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2 py-1.5"
                >
                  <span className="text-sm">{item.icon}</span>
                  <span className="text-[10px] font-medium text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Validity Period */}
            <div className="flex items-center justify-center gap-1.5 bg-noor-green/5 border border-noor-green/10 rounded-lg px-2 py-1.5 mb-3">
              <svg className="w-3.5 h-3.5 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[10px] font-semibold text-noor-green">
                Valid: Mar 18, 2026 – Feb 18, 2026
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-1.5">
              <Link
                to="/packages"
                onClick={handleClose}
                className="group relative flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-noor-green to-[#2a5c3a] text-white py-2.5 rounded-lg font-semibold text-xs hover:shadow-lg hover:shadow-noor-green/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Claim Your Discount</span>
                <svg
                  className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>

              {/* WhatsApp Link - Fixed anchor tag */}
              <a
                href="https://wa.me/+17869104615?text=Hi%2C%20I%27m%20interested%20in%20the%205%25%20Umrah%20discount%20offer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full bg-[#25D366]/10 text-[#25D366] py-2 rounded-lg font-semibold text-xs hover:bg-[#25D366]/20 transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Dismiss Link */}
            <button
              onClick={handleClose}
              className="w-full text-center text-[10px] text-gray-400 hover:text-gray-500 mt-2 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-noor-gold/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-noor-green/20 rounded-full blur-3xl pointer-events-none" />
      </div>
    </div>
  );
};

export default PromoPopup;