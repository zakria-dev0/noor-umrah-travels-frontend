// // ContactPage.tsx orginal file 
// import React, { useState } from 'react';
// import { PhoneIcon, MailIcon, WhatsAppIcon, LocationIcon, ArrowRightIcon, ChevronDownIcon } from '../components/icons/Icons';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// // ==================== HERO BANNER ====================
// const ContactHero: React.FC = () => (
//   <section className="relative py-20 overflow-hidden">
//     <div className="absolute inset-0 bg-noor-green">
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
//           backgroundSize: '20px 20px',
//         }}
//       />
//     </div>
//     <div className="relative z-10 max-w-7xl mx-auto px-4">
//       <div className="text-white/60 text-sm mb-6">
//         <a href="/" className="hover:text-white transition-colors">Home</a>
//         <span className="mx-2">›</span>
//         <span className="text-white">Contact</span>
//       </div>
//       <span className="bg-noor-gold text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
//         GET IN TOUCH
//       </span>
//       <h1 className="text-4xl lg:text-5xl font-bold text-white font-display leading-tight max-w-2xl">
//         We're Here to Help You Plan Your Journey
//       </h1>
//       <p className="text-white/70 mt-4 max-w-2xl text-lg leading-relaxed">
//         Have questions? Our experienced team is ready to assist you with your Umrah or Hajj planning. Reach out today and let's make your pilgrimage unforgettable.
//       </p>
//     </div>
//   </section>
// );

// // ==================== CONTACT INFO + FORM ====================
// const ContactSection: React.FC = () => {
//   const [formData, setFormData] = useState({
//     packageType: 'Umrah',
//     fullName: '',
//     email: '',
//     phone: '',
//     adults: 0,
//     children: 0,
//     duration: 10,
//     hotelType: '3 Star',
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async () => {
//     setLoading(true);
//     setStatus(null);
//     try {
//       const res = await fetch(`${API_URL}/api/inquiry`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setStatus({ type: 'success', message: data.message });
//         setFormData({ packageType: 'Umrah', fullName: '', email: '', phone: '', adults: 0, children: 0, duration: 10, hotelType: '3 Star' });
//       } else {
//         setStatus({ type: 'error', message: data.error });
//       }
//     } catch {
//       setStatus({ type: 'error', message: 'Network error. Please try again.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const totalTravelers = Number(formData.adults) + Number(formData.children);

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Left - Contact Information */}
//           <div>
//             <h2 className="text-3xl font-bold text-noor-green mb-4 font-display">
//               Contact Information
//             </h2>
//             <p className="text-gray-500 leading-relaxed mb-8">
//               We're available to answer your questions and provide expert guidance for your pilgrimage.
//             </p>

//             {/* Contact Items */}
//             <div className="space-y-6 mb-10">
//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-noor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
//                   <LocationIcon className="w-5 h-5 text-noor-green" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-noor-green">Visit Us</h4>
//                   <p className="text-gray-500 text-sm">1395 Brickell Ave Suite 800 Miami FL 33131</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-noor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
//                   <PhoneIcon className="w-5 h-5 text-noor-green" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-noor-green">Call Us</h4>
//                   <p className="text-gray-500 text-sm">+1 305 7768923</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-noor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
//                   <MailIcon className="w-5 h-5 text-noor-green" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-noor-green">Email Us</h4>
//                   <p className="text-gray-500 text-sm">info@haramumrahtravels.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-10 h-10 bg-noor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
//                   <WhatsAppIcon className="w-5 h-5 text-noor-green" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-noor-green">WhatsApp</h4>
//                   <p className="text-gray-500 text-sm">Chat with us instantly</p>
//                 </div>
//               </div>
//             </div>

//             {/* Office Hours */}
//             <div className="border-t border-gray-100 pt-8">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-8 h-8 bg-noor-green/10 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h4 className="font-bold text-noor-green">Office Hours</h4>
//               </div>
//               <div className="space-y-3 ml-11">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-500">Monday - Friday</span>
//                   <span className="font-bold text-noor-green">9:00 AM - 6:00 PM</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-500">Saturday</span>
//                   <span className="font-bold text-noor-green">10:00 AM - 4:00 PM</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-500">Sunday</span>
//                   <span className="font-bold text-gray-400">Closed</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right - Inquiry Form */}
//           <div>
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//               <div className="bg-noor-green px-8 py-6 text-center">
//                 <p className="text-noor-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">Personalised Quote</p>
//                 <h2 className="text-white text-2xl font-bold font-display">Package Inquiry Form</h2>
//                 <p className="text-white/60 text-sm mt-1">Select a package type to see the relevant details.</p>
//               </div>
//               <div className="p-8">
//                 {status && (
//                   <div className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
//                     {status.message}
//                   </div>
//                 )}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1.5">Package Type</label>
//                     <select name="packageType" value={formData.packageType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none">
//                       <option>Umrah</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
//                     <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
//                     <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7XXX XXX XXX" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Adults</label>
//                     <input type="number" name="adults" value={formData.adults} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Children</label>
//                     <input type="number" name="children" value={formData.children} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1.5">Duration (Days)</label>
//                     <input type="number" name="duration" value={formData.duration} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1.5">Hotel Type</label>
//                     <select name="hotelType" value={formData.hotelType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none">
//                       <option>3 Star</option>
//                       <option>4 Star</option>
//                       <option>5 Star</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Travelers</label>
//                     <input type="text" value={totalTravelers > 0 ? totalTravelers : 'Auto (Adults + Children)'} readOnly className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 bg-gray-50" />
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
//                   <p className="text-noor-green text-sm">We reply within the hour during UK business times.</p>
//                   <button
//                     onClick={handleSubmit}
//                     disabled={loading}
//                     className="bg-noor-green text-white px-8 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-[#2a5c3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {loading ? 'Submitting...' : 'Submit Inquiry'}
//                     {!loading && <ArrowRightIcon className="w-4 h-4" />}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== FAQ SECTION ====================
// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqData: FAQItem[] = [
//   {
//     question: 'How do I book an Umrah package?',
//     answer: 'You can book an Umrah package by filling out our inquiry form above, calling us directly at +1 305 7768923, or sending us a WhatsApp message. Our team will guide you through the entire booking process and help you choose the best package for your needs.',
//   },
//   {
//     question: 'Do you offer payment plans?',
//     answer: 'Yes, we offer flexible payment plans to make your Umrah journey more accessible. You can pay in instalments leading up to your departure date. Contact us for more details about our payment options.',
//   },
//   {
//     question: 'What documents do I need for Umrah?',
//     answer: "You'll need a valid passport (with at least 6 months validity remaining), passport-sized photographs, and vaccination certificates. We provide full support with the visa application process and will guide you through all documentation requirements.",
//   },
//   {
//     question: 'How close are your hotels to the Haram?',
//     answer: 'Our hotels are carefully selected based on their proximity to the Haram. Most of our 4-star and 5-star hotels are within walking distance, while our 3-star options are a short shuttle ride away. We always prioritise location and convenience for our pilgrims.',
//   },
//   {
//     question: "What's included in your packages?",
//     answer: 'Our packages typically include return flights, hotel accommodation in Makkah and Madinah, airport transfers, Umrah visa processing, and 24/7 support. Some packages also include ziyarat tours and additional services. Check individual package details for full inclusions.',
//   },
// ];

// const FAQSection: React.FC = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(2);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 bg-noor-light">
//       <div className="max-w-3xl mx-auto px-4">
//         <div className="text-center mb-12">
//           <span className="bg-noor-green/10 text-noor-green text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
//             FAQ
//           </span>
//           <h2 className="text-4xl font-bold text-noor-green font-display">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-gray-500 mt-3">
//             Quick answers to common questions about booking and planning your pilgrimage
//           </p>
//         </div>

//         <div className="space-y-4">
//           {faqData.map((faq, index) => (
//             <div
//               key={index}
//               className={`bg-white rounded-xl border transition-all ${
//                 openIndex === index ? 'border-noor-green/20 shadow-md' : 'border-gray-100'
//               }`}
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex items-center justify-between px-6 py-5 text-left"
//               >
//                 <span className={`font-semibold ${openIndex === index ? 'text-noor-green' : 'text-gray-700'}`}>
//                   {faq.question}
//                 </span>
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${
//                   openIndex === index ? 'bg-noor-green/10' : 'bg-gray-100'
//                 }`}>
//                   <ChevronDownIcon
//                     className={`w-4 h-4 transition-transform ${
//                       openIndex === index ? 'rotate-180 text-noor-green' : 'text-gray-400'
//                     }`}
//                   />
//                 </div>
//               </button>
//               {openIndex === index && (
//                 <div className="px-6 pb-5">
//                   <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // ==================== MAIN CONTACT PAGE ====================
// const ContactPage: React.FC = () => {
//   return (
//     <>
//       <ContactHero />
//       <ContactSection />
//       <FAQSection />
//     </>
//   );
// };

// export default ContactPage; 

import React, { useState } from 'react';
import { PhoneIcon, MailIcon, WhatsAppIcon, LocationIcon, ArrowRightIcon, ChevronDownIcon } from '../components/icons/Icons';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// ==================== HERO BANNER ====================
const ContactHero: React.FC = () => (
  <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
    <div className="absolute inset-0 bg-noor-green">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4">
      <div className="text-white/60 text-sm mb-4 sm:mb-6">
        <a href="/" className="hover:text-white transition-colors">Home</a>
        <span className="mx-2">›</span>
        <span className="text-white">Contact</span>
      </div>
      <span className="bg-noor-gold text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
        GET IN TOUCH
      </span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display leading-tight max-w-2xl">
        We're Here to Help You Plan Your Journey
      </h1>
      <p className="text-white/70 mt-4 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
        Have questions? Our experienced team is ready to assist you with your Umrah planning. Reach out today and let's make your pilgrimage unforgettable.
      </p>
    </div>
  </section>
);

// ==================== CONTACT INFO + FORM ====================
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    packageType: 'Umrah',
    fullName: '',
    email: '',
    phone: '',
    adults: 0,
    children: 0,
    duration: 10,
    hotelType: '3 Star',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`${API_URL}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ packageType: 'Umrah', fullName: '', email: '', phone: '', adults: 0, children: 0, duration: 10, hotelType: '3 Star' });
      } else {
        setStatus({ type: 'error', message: data.error });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const totalTravelers = Number(formData.adults) + Number(formData.children);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left - Contact Information */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-noor-green mb-4 font-display">
              Contact Information
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We're available to answer your questions and provide expert guidance for your pilgrimage.
            </p>

            {/* Contact Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-noor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <LocationIcon className="w-5 h-5 text-noor-green" />
                </div>
                <div>
                  <h4 className="font-bold text-noor-green">Visit Us</h4>
                  <p className="text-gray-500 text-sm">1395 Brickell Ave Suite 800 Miami FL 33131</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-noor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-5 h-5 text-noor-green" />
                </div>
                <div>
                  <h4 className="font-bold text-noor-green">Call Us</h4>
                  <p className="text-gray-500 text-sm">+1 305 7768923</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-noor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MailIcon className="w-5 h-5 text-noor-green" />
                </div>
                <div>
                  <h4 className="font-bold text-noor-green">Email Us</h4>
                  <p className="text-gray-500 text-sm">info@haramumrahtravels.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-noor-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-noor-green" />
                </div>
               <a
  href="https://wa.me/17866386022"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-3 hover:opacity-80 transition-opacity"
>
  <div>
    <h4 className="font-bold text-noor-green">WhatsApp</h4>
    <p className="text-gray-500 text-sm">Chat with us instantly</p>
  </div>
</a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="border-t border-gray-100 pt-8 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-noor-green/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-noor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-noor-green">Office Hours</h4>
              </div>
              <div className="space-y-3 ml-11">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Monday - Friday</span>
                  <span className="font-bold text-noor-green">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Saturday</span>
                  <span className="font-bold text-noor-green">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Sunday</span>
                  <span className="font-bold text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Inquiry Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-noor-green px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-center">
                <p className="text-noor-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">Personalized Quote</p>
                <h2 className="text-white text-xl sm:text-2xl font-bold font-display">Package Inquiry Form</h2>
                <p className="text-white/60 text-xs sm:text-sm mt-1">Select a package type to see the relevant details.</p>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                {status && (
                  <div className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {status.message}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Package Type</label>
                    <select name="packageType" value={formData.packageType} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 border border-gray-200 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-noor-green/20">
                      <option>Umrah</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-3 md:py-3.5 border border-gray-200 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-noor-green/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full px-4 py-3 md:py-3.5 border border-gray-200 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-noor-green/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+44 7XXX XXX XXX" className="w-full px-4 py-3 md:py-3.5 border border-gray-200 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-noor-green/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Adults</label>
                    <input type="number" name="adults" value={formData.adults} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 border border-gray-200 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-noor-green/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Children</label>
                    <input type="number" name="children" value={formData.children} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 border border-gray-200 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-noor-green/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Duration (Days)</label>
                    <input type="number" name="duration" value={formData.duration} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 border border-gray-200 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-noor-green/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Hotel Type</label>
                    <select name="hotelType" value={formData.hotelType} onChange={handleChange} className="w-full px-4 py-3 md:py-3.5 border border-gray-200 rounded-lg text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-noor-green/20">
                      <option>3 Star</option>
                      <option>4 Star</option>
                      <option>5 Star</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Travelers</label>
                    <input type="text" value={totalTravelers > 0 ? totalTravelers : 'Auto (Adults + Children)'} readOnly className="w-full px-4 py-3 md:py-3.5 border border-gray-200 rounded-lg text-sm md:text-base text-gray-500 bg-gray-50" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  <p className="text-noor-green text-sm">We reply within the hour during US business times.</p>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-noor-green text-white px-8 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-[#2a5c3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== FAQ SECTION ====================
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How do I book an Umrah package?',
    answer: 'You can book an Umrah package by filling out our inquiry form above, calling us directly at +1 305 7768923, or sending us a WhatsApp message. Our team will guide you through the entire booking process and help you choose the best package for your needs.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans to make your Umrah journey more accessible. You can pay in instalments leading up to your departure date. Contact us for more details about our payment options.',
  },
  {
    question: 'What documents do I need for Umrah?',
    answer: "You'll need a valid passport (with at least 6 months validity remaining), passport-sized photographs, and vaccination certificates. We provide full support with the visa application process and will guide you through all documentation requirements.",
  },
  {
    question: 'How close are your hotels to the Haram?',
    answer: 'Our hotels are carefully selected based on their proximity to the Haram. Most of our 4-star and 5-star hotels are within walking distance, while our 3-star options are a short shuttle ride away. We always prioritise location and convenience for our pilgrims.',
  },
  {
    question: "What's included in your packages?",
    answer: 'Our packages typically include return flights, hotel accommodation in Makkah, airport transfers, Umrah visa processing, and 24/7 support. Some packages also include ziyarat tours and additional services. Check individual package details for full inclusions.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-noor-light">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="bg-noor-green/10 text-noor-green text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-noor-green font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Quick answers to common questions about booking and planning your pilgrimage
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border transition-all ${
                openIndex === index ? 'border-noor-green/20 shadow-md' : 'border-gray-100'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-semibold ${openIndex === index ? 'text-noor-green' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${
                  openIndex === index ? 'bg-noor-green/10' : 'bg-gray-100'
                }`}>
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform ${
                      openIndex === index ? 'rotate-180 text-noor-green' : 'text-gray-400'
                    }`}
                  />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== MAIN CONTACT PAGE ====================
const ContactPage: React.FC = () => {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default ContactPage;