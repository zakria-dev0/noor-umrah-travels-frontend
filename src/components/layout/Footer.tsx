// // Footer.tsx
// import React from 'react';
// import { PhoneIcon, MailIcon, LocationIcon, CheckShieldIcon, FacebookIcon, InstagramIcon, XIcon, WhatsAppIcon } from '../icons/Icons';

// const Footer: React.FC = () => (
//   <footer className="bg-noor-green-dark text-white">
//     <div className="border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
//               <PhoneIcon className="w-5 h-5 text-noor-gold" />
//             </div>
//             <div>
//               <p className="text-white/50 text-xs">Call Us</p>
//               <p className="font-bold">3057768923</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
//               <MailIcon className="w-5 h-5 text-noor-gold" />
//             </div>
//             <div>
//               <p className="text-white/50 text-xs">Email Us</p>
//               <p className="font-bold">info@haramumrah</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
//               <LocationIcon className="w-5 h-5 text-noor-gold" />
//             </div>
//             <div>
//               <p className="text-white/50 text-xs">Visit Us</p>
//               <p className="font-bold">55 Hooper Street, Birmingham, United Kingdom, B18 7AR</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//         <div>
//           <h3 className="font-bold text-lg mb-4">About Us</h3>
//           <p className="text-white/50 text-sm leading-relaxed mb-6">
//             Your trusted partner for blessed journeys to the Holy Land. We provide premium Umrah and Hajj packages with exceptional service and care.
//           </p>
//           <div className="flex flex-col gap-3">
//             <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm w-fit">
//               <CheckShieldIcon className="w-4 h-4 text-noor-gold" />
//               ATOL Protected
//             </span>
//             <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm w-fit">
//               <span className="text-noor-gold">◇</span>
//               ABTA Member
//             </span>
//           </div>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//           <ul className="space-y-3 text-white/50 text-sm">
//             {['Home', 'Packages', 'About Us', 'Blog', 'Contact'].map((link) => (
//               <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-4">Our Services</h3>
//           <ul className="space-y-3 text-white/50 text-sm">
//             {['Umrah Packages', 'Hajj Packages', 'Visa Assistance', 'Hotel Booking', 'Group Tours'].map((service) => (
//               <li key={service}><a href="#" className="hover:text-white transition-colors">{service}</a></li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
//           <div className="space-y-3 text-sm">
//             <div className="flex justify-between text-white/50">
//               <span>Monday – Friday</span>
//               <span className="text-white font-semibold">9:00 - 18:00</span>
//             </div>
//             <div className="flex justify-between text-white/50">
//               <span>Saturday</span>
//               <span className="text-white font-semibold">10:00 - 16:00</span>
//             </div>
//             <div className="flex justify-between text-white/50">
//               <span>Sunday</span>
//               <span className="text-white font-semibold">Closed</span>
//             </div>
//           </div>
//           <div className="mt-6">
//             <p className="text-white/50 text-sm mb-3">Follow Us</p>
//             <div className="flex gap-3">
//               {[FacebookIcon, InstagramIcon, XIcon, WhatsAppIcon].map((Icon, i) => (
//                 <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-noor-gold transition-colors">
//                   <Icon className="w-4 h-4 text-white" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="border-t border-white/10">
//       <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
//         <p className="text-white/40 text-sm">© 2026 Noor Umrah Travels. All rights reserved.</p>
//         <div className="flex gap-6 text-white/40 text-sm">
//           {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Refund Policy'].map((policy) => (
//             <a key={policy} href="#" className="hover:text-white transition-colors">{policy}</a>
//           ))}
//         </div>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer; 

// Footer.tsx
import React from 'react';
import { PhoneIcon, MailIcon, LocationIcon, FacebookIcon, InstagramIcon, XIcon, WhatsAppIcon } from '../icons/Icons';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => (
  <footer className="bg-noor-green-dark text-white">
    <div className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/contact" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <PhoneIcon className="w-5 h-5 text-noor-gold" />
            </div>
            <div>
              <p className="text-white/50 text-xs">Call Us</p>
              <p className="font-bold">3057768923</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <MailIcon className="w-5 h-5 text-noor-gold" />
            </div>
            <div>
              <p className="text-white/50 text-xs">Email Us</p>
              <p className="font-bold">info@haramumrah</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <LocationIcon className="w-5 h-5 text-noor-gold" />
            </div>
            <div>
              <p className="text-white/50 text-xs">Visit Us</p>
              <p className="font-bold">Miami, Florida, United States</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
            <li><Link to="/umrah-packages" className="hover:text-white transition-colors">Umrah Packages</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
  </footer>
);

export default Footer;