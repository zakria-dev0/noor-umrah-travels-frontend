// Footer.tsx
import React from 'react';
import { PhoneIcon, MailIcon, LocationIcon, FacebookIcon, InstagramIcon, XIcon, WhatsAppIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-noor-green-dark text-white">
    <div className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <Link to="/contact" className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-noor-gold" />
            </div>
            <div>
              <p className="text-white/50 text-xs">Call Us</p>
              <p className="font-bold text-sm sm:text-base">+1 305 7768923</p>
            </div>
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <MailIcon className="w-4 h-4 sm:w-5 sm:h-5 text-noor-gold" />
            </div>
            <div>
              <p className="text-white/50 text-xs">Email Us</p>
              <p className="font-bold text-sm sm:text-base break-all">info@haramumrahtravels.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <LocationIcon className="w-4 h-4 sm:w-5 sm:h-5 text-noor-gold" />
            </div>
            <div>
              <p className="text-white/50 text-xs">Visit Us</p>
              <p className="font-bold text-sm sm:text-base">1395 Brickell Ave Suite 800 Miami FL 33131</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 md:py-12">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-white text-sm leading-relaxed mb-6">
            Your trusted US-based partner for blessed Umrah journeys to the Holy Land. We provide premium Umrah packages with exceptional service and care.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/packages" className="hover:text-white transition-colors">Umrah Packages</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            <li><Link to="/legal-compliance" className="hover:text-white transition-colors">Legal Compliance</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-white">
              <span>Monday – Friday</span>
              <span className="text-white font-semibold">9:00 - 18:00</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Saturday</span>
              <span className="text-white font-semibold">10:00 - 16:00</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Sunday</span>
              <span className="text-white font-semibold">Closed</span>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-white text-sm mb-3">Follow Us</p>
            <div className="flex gap-3">
              {[FacebookIcon, InstagramIcon, XIcon, WhatsAppIcon].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-noor-gold transition-colors">
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-noor-gold" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="text-white/70 text-xs sm:text-sm">
            Certified Seller of Travel Packages in Florida
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;