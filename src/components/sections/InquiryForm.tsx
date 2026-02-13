// // InquiryForm.tsx
// import React, { useState } from 'react';
// import { ArrowRightIcon } from '../icons/Icons';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// const InquiryForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     packageType: 'Umrah',
//     fullName: '',
//     email: '',
//     phone: '',
//     adults: 0,
//     children: 0,
//     duration: 10,
//     hotelType: '4 Star',
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
//         setFormData({ packageType: 'Umrah', fullName: '', email: '', phone: '', adults: 0, children: 0, duration: 10, hotelType: '4 Star' });
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
//     <section className="relative z-20 -mt-16 mb-16">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           <div className="bg-noor-green px-8 py-6 text-center">
//             <p className="text-noor-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">Personalised Quote</p>
//             <h2 className="text-white text-2xl font-bold font-display">Package Inquiry Form</h2>
//             <p className="text-white/60 text-sm mt-1">Select a package type to see the relevant details.</p>
//           </div>
//           <div className="p-8">
//             {status && (
//               <div className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
//                 {status.message}
//               </div>
//             )}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Package Type</label>
//                 <select name="packageType" value={formData.packageType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none">
//                   <option>Umrah</option>
//                   <option>Hajj</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
//                 <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
//                 <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 7XXX XXX XXX" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Adults</label>
//                 <input type="number" name="adults" value={formData.adults} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Children</label>
//                 <input type="number" name="children" value={formData.children} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Duration (Days)</label>
//                 <input type="number" name="duration" value={formData.duration} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Hotel Type</label>
//                 <select name="hotelType" value={formData.hotelType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none">
//                   <option>3 Star</option>
//                   <option>4 Star</option>
//                   <option>5 Star</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Travelers</label>
//                 <input type="text" value={totalTravelers > 0 ? totalTravelers : 'Auto (Adults + Children)'} readOnly className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 bg-gray-50" />
//               </div>
//             </div>
//             <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
//               <p className="text-noor-green text-sm">We reply within the hour during US business times.</p>
//               <button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className="bg-noor-green text-white px-8 py-3 rounded-full flex items-center gap-2 font-semibold hover:bg-[#2a5c3a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? 'Submitting...' : 'Submit Inquiry'}
//                 {!loading && <ArrowRightIcon className="w-4 h-4" />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InquiryForm; 

// InquiryForm.tsx
import React, { useState } from 'react';
import { ArrowRightIcon } from '../icons/Icons';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    packageType: 'Umrah',
    fullName: '',
    email: '',
    phone: '',
    adults: 0,
    children: 0,
    duration: 10,
    hotelType: '4 Star',
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
        setFormData({ packageType: 'Umrah', fullName: '', email: '', phone: '', adults: 0, children: 0, duration: 10, hotelType: '4 Star' });
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
    <section className="relative z-20 -mt-16 mb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-noor-green px-8 py-6 text-center">
            <p className="text-noor-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">Personalised Quote</p>
            <h2 className="text-white text-2xl font-bold font-display">Package Inquiry Form</h2>
            <p className="text-white/60 text-sm mt-1">Select a package type to see the relevant details.</p>
          </div>
          <div className="p-8">
            {status && (
              <div className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {status.message}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Package Type</label>
                <select name="packageType" value={formData.packageType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none">
                  <option>Umrah</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 7XXX XXX XXX" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Adults</label>
                <input type="number" name="adults" value={formData.adults} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Children</label>
                <input type="number" name="children" value={formData.children} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Duration (Days)</label>
                <input type="number" name="duration" value={formData.duration} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Hotel Type</label>
                <select name="hotelType" value={formData.hotelType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-noor-green focus:border-noor-green outline-none">
                  <option>3 Star</option>
                  <option>4 Star</option>
                  <option>5 Star</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Travelers</label>
                <input type="text" value={totalTravelers > 0 ? totalTravelers : 'Auto (Adults + Children)'} readOnly className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-500 bg-gray-50" />
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
    </section>
  );
};

export default InquiryForm;