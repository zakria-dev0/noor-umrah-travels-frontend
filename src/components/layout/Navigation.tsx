// // Navigation.tsx
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { CalendarIcon, ChevronDownIcon } from '../icons/Icons';
// import logo from '../../assets/images/packages/5-3_files/logo_1767256429.png';

// // Define the route mapping for each dropdown item
// const umrahPackageRoutes: Record<string, string> = {
//   '5 Star Kaaba View Umrah Packages': '/packages/kaaba-view',
//   '5 Star Haram View Umrah Packages': '/packages/haram-view',
// };

// const umrahDropdownItems = [
//   '5 Star Kaaba View Umrah Packages',
//   '5 Star Haram View Umrah Packages',
// ];

// const Navigation: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [umrahDropdownOpen, setUmrahDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const umrahRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (umrahRef.current && !umrahRef.current.contains(event.target as Node)) {
//         setUmrahDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Noor Umrah Travels" className="h-10 md:h-14 w-auto object-contain" />
//         </Link>

//         {/* Nav Links */}
//         <div className="hidden lg:flex items-center gap-8">
//           <Link to="/" className="text-gray-700 hover:text-noor-green font-medium text-sm transition-colors">
//             Home
//           </Link>

//           {/* Umrah Packages Dropdown */}
//           <div ref={umrahRef} className="relative">
//             <button
//               onClick={() => setUmrahDropdownOpen(!umrahDropdownOpen)}
//               className="text-gray-700 hover:text-noor-green font-medium text-sm flex items-center gap-1 transition-colors"
//             >
//               Umrah Packages
//               <ChevronDownIcon className={`w-3 h-3 transition-transform ${umrahDropdownOpen ? 'rotate-180' : ''}`} />
//             </button>

//             {umrahDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
//                 {umrahDropdownItems.map((item, index) => {
//                   const route = umrahPackageRoutes[item] || '#';
//                   return (
//                     <Link
//                       key={index}
//                       to={route}
//                       className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-noor-green/5 hover:text-noor-green transition-colors border-b border-gray-50 last:border-b-0"
//                       onClick={() => setUmrahDropdownOpen(false)}
//                     >
//                       {item}
//                     </Link>
//                   );
//                 })}
//               </div>
//             )}
//           </div>

//           <Link to="/about" className="text-gray-700 hover:text-noor-green font-medium text-sm transition-colors">
//             About
//           </Link>
//           <Link to="/contact" className="text-gray-700 hover:text-noor-green font-medium text-sm transition-colors">
//             Contact
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button 
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="lg:hidden flex flex-col gap-1.5"
//         >
//           <span className={`w-6 h-0.5 bg-noor-green transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//           <span className={`w-6 h-0.5 bg-noor-green ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
//           <span className={`w-6 h-0.5 bg-noor-green transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//         </button>

//         {/* Book Now */}
//         <button className="hidden md:flex bg-noor-green text-white px-6 py-2.5 rounded-full items-center gap-2 text-sm font-semibold hover:bg-[#2a5c3a] transition-colors">
//           <CalendarIcon className="w-4 h-4" />
//           Book Now
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden fixed inset-0 z-40 bg-white pt-20">
//           <div className="px-4 py-6 space-y-4">
//             <Link to="/" className="block text-gray-700 hover:text-noor-green font-medium" onClick={() => setMobileMenuOpen(false)}>
//               Home
//             </Link>
//             {/* Umrah Packages Accordion */}
//             <div>
//               <button
//                 onClick={() => setUmrahDropdownOpen(!umrahDropdownOpen)}
//                 className="w-full flex items-center justify-between text-gray-700 hover:text-noor-green font-medium"
//               >
//                 Umrah Packages
//                 <ChevronDownIcon className={`w-4 h-4 transition-transform ${umrahDropdownOpen ? 'rotate-180' : ''}`} />
//               </button>
//               {umrahDropdownOpen && (
//                 <div className="ml-4 mt-2 space-y-2">
//                   {umrahDropdownItems.map((item, index) => (
//                     <Link
//                       key={index}
//                       to={umrahPackageRoutes[item] || '#'}
//                       className="block text-sm text-gray-600 hover:text-noor-green py-2"
//                       onClick={() => {
//                         setMobileMenuOpen(false);
//                         setUmrahDropdownOpen(false);
//                       }}
//                     >
//                       {item}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <Link to="/about" className="block text-gray-700 hover:text-noor-green font-medium" onClick={() => setMobileMenuOpen(false)}>
//               About
//             </Link>
//             <Link to="/contact" className="block text-gray-700 hover:text-noor-green font-medium" onClick={() => setMobileMenuOpen(false)}>
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation; 

// Navigation.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, ChevronDownIcon } from '../icons/Icons';
import logo from '../../assets/images/logo.png';


// Define the route mapping for each dropdown item
const umrahPackageRoutes: Record<string, string> = {
  '5 Star Kaaba View Umrah Packages': '/packages/kaaba-view',
  '5 Star Haram View Umrah Packages': '/packages/haram-view',
};

const umrahDropdownItems = [
  '5 Star Kaaba View Umrah Packages',
  '5 Star Haram View Umrah Packages',
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [umrahDropdownOpen, setUmrahDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const umrahRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (umrahRef.current && !umrahRef.current.contains(event.target as Node)) {
        setUmrahDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Name */}
        {/* <Link to="/" className="flex items-center">
          <span className="text-noor-green font-bold text-base md:text-xl uppercase tracking-wider font-display">Haram Umrah</span>
          <span className="text-noor-gold font-semibold text-base md:text-xl uppercase tracking-wider font-display ml-1.5">Travels</span>
        </Link> */}
        <Link to="/" className="flex items-center">
  <img src={logo} alt="Haram Umrah Travels" className="h-26 md:h-16" />
</Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-noor-green font-medium text-sm transition-colors">
            Home
          </Link>

          {/* Umrah Packages Dropdown */}
          <div ref={umrahRef} className="relative">
            <button
              onClick={() => setUmrahDropdownOpen(!umrahDropdownOpen)}
              className="text-gray-700 hover:text-noor-green font-medium text-sm flex items-center gap-1 transition-colors"
            >
              Umrah Packages
              <ChevronDownIcon className={`w-3 h-3 transition-transform ${umrahDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {umrahDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                {umrahDropdownItems.map((item, index) => {
                  const route = umrahPackageRoutes[item] || '#';
                  return (
                    <Link
                      key={index}
                      to={route}
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-noor-green/5 hover:text-noor-green transition-colors border-b border-gray-50 last:border-b-0"
                      onClick={() => setUmrahDropdownOpen(false)}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            )}
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
            {/* Umrah Packages Accordion */}
            <div>
              <button
                onClick={() => setUmrahDropdownOpen(!umrahDropdownOpen)}
                className="w-full flex items-center justify-between text-gray-700 hover:text-noor-green font-medium"
              >
                Umrah Packages
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${umrahDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {umrahDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {umrahDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={umrahPackageRoutes[item] || '#'}
                      className="block text-sm text-gray-600 hover:text-noor-green py-2"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setUmrahDropdownOpen(false);
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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