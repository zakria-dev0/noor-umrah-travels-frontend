  //footer.tsx 
import React from 'react';
import { PhoneIcon, MailIcon, LocationIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('info@haramumrahtravels.com');
    const target = e.currentTarget.querySelector('.footer-email-text') as HTMLElement;
    if (target) {
      const original = target.textContent;
      target.textContent = '';
      setTimeout(() => { target.textContent = original; }, 1500);
    }
  };

  return (
    <footer className="bg-noor-green-dark text-white">
      {/* Top Contact Bar */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Phone */}
            <a href="tel:+13057768923" className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/[0.06] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-noor-gold" />
              </div>
              <div>
                <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-wider">Call Us</p>
                <p className="font-bold text-sm sm:text-base">+1 (305) 776-8923</p>
              </div>
            </a>

            {/* Email — Click to Copy */}
            <button onClick={handleCopyEmail} className="flex items-center gap-3 sm:gap-4 hover:opacity-80 transition-opacity group text-left cursor-pointer" title="Click to copy email">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/[0.06] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                <MailIcon className="w-4 h-4 sm:w-5 sm:h-5 text-noor-gold" />
              </div>
              <div>
                <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-wider">Email Us</p>
                <p className="footer-email-text font-bold text-sm sm:text-base select-all">info@haramumrahtravels.com</p>
              </div>
            </button>

            {/* Location */}
            <div className="flex items-center gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/[0.06] rounded-xl flex items-center justify-center flex-shrink-0">
                <LocationIcon className="w-4 h-4 sm:w-5 sm:h-5 text-noor-gold" />
              </div>
              <div>
                <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-wider">Visit Us</p>
                <p className="font-bold text-sm sm:text-base">1395 Brickell Ave Suite 800, Miami FL 33131</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-12 md:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* About */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">About Us</h3>
            <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-6">
              Your trusted US-based partner for blessed Umrah journeys to the Holy Land. We provide premium Umrah packages with exceptional service and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/packages', label: 'Umrah Packages' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/40 hover:text-noor-gold text-xs sm:text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/terms-conditions', label: 'Terms & Conditions' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/refund-policy', label: 'Refund Policy' },
                { to: '/legal-compliance', label: 'Legal Compliance' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/40 hover:text-noor-gold text-xs sm:text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Social */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Opening Hours</h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-white/40">Monday – Friday</span>
                <span className="text-white/80 font-medium">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Saturday</span>
                <span className="text-white/80 font-medium">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Sunday</span>
                <span className="text-white/80 font-medium">Closed</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-white/30 text-xs mb-3 uppercase tracking-wider">Follow Us</p>
              <div className="flex gap-2.5">
                <a
                  href="https://www.facebook.com/share/1AaocVf17e/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.06] rounded-lg flex items-center justify-center hover:bg-noor-gold/20 hover:border-noor-gold/20 border border-transparent transition-all"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-white/60" />
                </a>
                <a
                  href="https://www.instagram.com/haramumrah?igsh=ZjMwZmN1MGZ5YjU2&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.06] rounded-lg flex items-center justify-center hover:bg-noor-gold/20 hover:border-noor-gold/20 border border-transparent transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-white/60" />
                </a>
                <a
                  href="https://wa.me/17866386022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.06] rounded-lg flex items-center justify-center hover:bg-noor-gold/20 hover:border-noor-gold/20 border border-transparent transition-all"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white/60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-white/30">
            <p>&copy; {new Date().getFullYear()} Haram Umrah Travels. All rights reserved.</p>
            <p>Designed with care for the Muslim community</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;