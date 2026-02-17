// // components/sections/InquiryForm.tsx
// import React, { useState } from 'react';
// import { ArrowRightIcon } from '../icons/Icons';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

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

//   const inputClasses = "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-noor-green/20 focus:border-noor-green outline-none transition-all bg-gray-50/50 hover:bg-white hover:border-gray-300";
//   const labelClasses = "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5";

//   return (
//     <section className="relative z-20 -mt-14 sm:-mt-16 mb-12 sm:mb-16">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/[0.08] overflow-hidden border border-gray-100/50">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-noor-green to-[#1e4a32] px-6 sm:px-8 py-5 sm:py-6 text-center relative overflow-hidden">
//             {/* Subtle pattern */}
//             <div className="absolute inset-0 opacity-[0.04]" style={{
//               backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
//               backgroundSize: '16px 16px',
//             }} />
//             <div className="relative">
//               <p className="text-noor-gold text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-1.5">Personalised Quote</p>
//               <h2 className="text-white text-xl sm:text-2xl font-bold font-display">Package Inquiry Form</h2>
//               <p className="text-white/50 text-xs sm:text-sm mt-1">Get a custom quote tailored to your pilgrimage needs</p>
//             </div>
//           </div>

//           {/* Form Body */}
//           <div className="p-5 sm:p-8">
//             {status && (
//               <div className={`mb-5 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2 ${
//                 status.type === 'success'
//                   ? 'bg-green-50 text-green-700 border border-green-100'
//                   : 'bg-red-50 text-red-700 border border-red-100'
//               }`}>
//                 <span>{status.type === 'success' ? '✓' : '✕'}</span>
//                 {status.message}
//               </div>
//             )}

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
//               <div>
//                 <label className={labelClasses}>Package Type</label>
//                 <select name="packageType" value={formData.packageType} onChange={handleChange} className={inputClasses}>
//                   <option>Umrah</option>
//                 </select>
//               </div>
//               <div>
//                 <label className={labelClasses}>Full Name</label>
//                 <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" className={inputClasses} />
//               </div>
//               <div>
//                 <label className={labelClasses}>Email Address</label>
//                 <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputClasses} />
//               </div>
//               <div>
//                 <label className={labelClasses}>Phone Number</label>
//                 <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 XXXX XXX XXX" className={inputClasses} />
//               </div>
//               <div>
//                 <label className={labelClasses}>Adults</label>
//                 <input type="number" name="adults" value={formData.adults} onChange={handleChange} className={inputClasses} />
//               </div>
//               <div>
//                 <label className={labelClasses}>Children</label>
//                 <input type="number" name="children" value={formData.children} onChange={handleChange} className={inputClasses} />
//               </div>
//               <div>
//                 <label className={labelClasses}>Duration (Days)</label>
//                 <input type="number" name="duration" value={formData.duration} onChange={handleChange} className={inputClasses} />
//               </div>
//               <div>
//                 <label className={labelClasses}>Hotel Type</label>
//                 <select name="hotelType" value={formData.hotelType} onChange={handleChange} className={inputClasses}>
//                   <option>3 Star</option>
//                   <option>4 Star</option>
//                   <option>5 Star</option>
//                 </select>
//               </div>
//             </div>

//             {/* Travelers Summary */}
//             <div className="mt-4 sm:mt-5 bg-noor-green/[0.03] border border-noor-green/10 rounded-xl px-4 py-3 flex items-center justify-between">
//               <span className="text-xs text-gray-500 font-medium">Total Travelers</span>
//               <span className="text-sm font-bold text-noor-green">
//                 {totalTravelers > 0 ? `${totalTravelers} Traveler${totalTravelers > 1 ? 's' : ''}` : 'Auto-calculated'}
//               </span>
//             </div>

//             {/* Footer */}
//             <div className="flex flex-col sm:flex-row items-center justify-between mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 gap-4">
//               <p className="text-noor-green/70 text-xs sm:text-sm order-2 sm:order-1 text-center sm:text-left">
//                 We reply within the hour during US business times.
//               </p>
//               <button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className="w-full sm:w-auto order-1 sm:order-2 bg-noor-green text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 font-semibold text-sm hover:bg-[#234d33] transition-all hover:shadow-lg hover:shadow-noor-green/15 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {loading ? (
//                   <>
//                     <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
//                     </svg>
//                     Submitting...
//                   </>
//                 ) : (
//                   <>
//                     Submit Inquiry
//                     <ArrowRightIcon className="w-4 h-4" />
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InquiryForm;  


// components/sections/InquiryForm.tsx
import React, { useState } from 'react';
import { ArrowRightIcon, ChevronDownIcon } from '../icons/Icons';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// ==================== CONSTANTS ====================
const DEPARTURE_CITIES = [
  'New York (JFK)',
  'Los Angeles (LAX)',
  'Chicago (ORD)',
  'Houston (IAH)',
  'Dallas (DFW)',
  'Miami (MIA)',
  'Washington DC (IAD)',
  'Atlanta (ATL)',
  'San Francisco (SFO)',
  'Detroit (DTW)',
];

const TRAVEL_MONTHS = [
  'January 2026',
  'February 2026',
  'March 2026',
  'April 2026',
  'May 2026',
  'June 2026',
  'July 2026',
  'August 2026',
  'September 2026',
  'October 2026',
  'November 2026',
  'December 2026',
];

const STEPS = [
  { id: 1, title: 'Personal', icon: '👤' },
  { id: 2, title: 'Travel', icon: '✈️' },
  { id: 3, title: 'Package', icon: '🏨' },
  { id: 4, title: 'Extras', icon: '✨' },
];

// ==================== TYPES ====================
interface FormData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  sameAsPhone: boolean;
  // Step 2
  departureCity: string;
  travelMonth: string;
  departureDate: string;
  // Step 3
  packageTier: string;
  roomType: string;
  adults: number;
  children: number;
  infants: number;
  hasElderly: boolean;
  specialAssistance: string;
  // Step 4
  ziyarat: string;
  visaAssistance: string;
  travelInsurance: string;
  preferredContact: string;
  specialRequests: string;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  whatsapp: '',
  sameAsPhone: true,
  departureCity: '',
  travelMonth: '',
  departureDate: '',
  packageTier: '',
  roomType: '',
  adults: 1,
  children: 0,
  infants: 0,
  hasElderly: false,
  specialAssistance: '',
  ziyarat: '',
  visaAssistance: '',
  travelInsurance: '',
  preferredContact: 'whatsapp',
  specialRequests: '',
};

// ==================== ICONS ====================
const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

// ==================== STEP INDICATOR ====================
interface StepIndicatorProps {
  currentStep: number;
  completedSteps: number[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, completedSteps }) => (
  <div className="flex items-center justify-between mb-6 sm:mb-8">
    {STEPS.map((step, index) => {
      const isCompleted = completedSteps.includes(step.id);
      const isCurrent = currentStep === step.id;

      return (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center group">
            <div
              className={`
                w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-base
                transition-all duration-500 ease-out relative font-semibold
                transform group-hover:scale-105
                ${isCompleted
                  ? 'bg-noor-green text-white shadow-lg shadow-noor-green/30'
                  : isCurrent
                    ? 'bg-noor-gold text-white ring-4 ring-noor-gold/20 shadow-lg shadow-noor-gold/30'
                    : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:shadow-md'
                }
              `}
            >
              {isCompleted ? (
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 animate-[scaleIn_0.3s_ease-out]" />
              ) : (
                <span className="transition-transform duration-300 group-hover:scale-110">{step.icon}</span>
              )}
            </div>
            <span
              className={`
                mt-1.5 text-[10px] sm:text-xs font-medium text-center transition-all duration-300
                ${isCurrent ? 'text-noor-green' : isCompleted ? 'text-noor-green/70' : 'text-gray-400 group-hover:text-gray-600'}
              `}
            >
              {step.title}
            </span>
          </div>
          {index < STEPS.length - 1 && (
            <div className="flex-1 mx-1 sm:mx-2 mb-5">
              <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${
                    isCompleted ? 'bg-noor-green w-full' : 'bg-gray-100 w-0'
                  }`}
                />
              </div>
            </div>
          )}
        </React.Fragment>
      );
    })}
  </div>
);

// ==================== FORM COMPONENTS ====================
interface StepProps {
  formData: FormData;
  updateField: (field: keyof FormData, value: any) => void;
  errors: Partial<Record<keyof FormData, string>>;
}

// Shared styles - Enhanced with smooth transitions
const inputClasses = `
  w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm 
  outline-none transition-all duration-300 ease-out
  hover:border-gray-300 hover:shadow-sm
  focus:border-noor-green focus:ring-4 focus:ring-noor-green/10 focus:shadow-md focus:shadow-noor-green/5
  placeholder:text-gray-400 placeholder:transition-opacity placeholder:duration-300
  focus:placeholder:opacity-50
`;

const selectClasses = `
  w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm 
  outline-none transition-all duration-300 ease-out appearance-none cursor-pointer
  hover:border-gray-300 hover:shadow-sm
  focus:border-noor-green focus:ring-4 focus:ring-noor-green/10 focus:shadow-md focus:shadow-noor-green/5
`;

const labelClasses = "block text-xs font-semibold text-gray-600 mb-1.5 transition-colors duration-200";

// Step 1: Personal Details
const Step1Personal: React.FC<StepProps> = ({ formData, updateField, errors }) => (
  <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
    <div className="text-center mb-6">
      <h3 className="text-lg sm:text-xl font-bold text-noor-green">Personal Information</h3>
      <p className="text-gray-400 text-xs mt-1">Tell us about yourself</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="sm:col-span-2 group">
        <label className={`${labelClasses} group-focus-within:text-noor-green`}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
          placeholder="As shown on passport"
          className={`${inputClasses} ${errors.fullName ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100' : ''}`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1 animate-[shake_0.3s_ease-out]">{errors.fullName}</p>
        )}
      </div>

      <div className="group">
        <label className={`${labelClasses} group-focus-within:text-noor-green`}>
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="you@example.com"
          className={`${inputClasses} ${errors.email ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100' : ''}`}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 animate-[shake_0.3s_ease-out]">{errors.email}</p>
        )}
      </div>

      <div className="group">
        <label className={`${labelClasses} group-focus-within:text-noor-green`}>
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          placeholder="+1 (555) 000-0000"
          className={`${inputClasses} ${errors.phone ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100' : ''}`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1 animate-[shake_0.3s_ease-out]">{errors.phone}</p>
        )}
      </div>

      <div className="sm:col-span-2 group">
        <div className="flex items-center justify-between mb-1.5">
          <label className={`${labelClasses.replace('mb-1.5', '')} group-focus-within:text-noor-green`}>WhatsApp</label>
          <label className="flex items-center gap-2 cursor-pointer group/check">
            <input
              type="checkbox"
              checked={formData.sameAsPhone}
              onChange={(e) => {
                updateField('sameAsPhone', e.target.checked);
                if (e.target.checked) updateField('whatsapp', formData.phone);
              }}
              className="w-4 h-4 text-noor-green rounded border-gray-300 focus:ring-noor-green transition-all duration-200 cursor-pointer"
            />
            <span className="text-xs text-gray-500 group-hover/check:text-gray-700 transition-colors duration-200">Same as phone</span>
          </label>
        </div>
        <input
          type="tel"
          value={formData.sameAsPhone ? formData.phone : formData.whatsapp}
          onChange={(e) => updateField('whatsapp', e.target.value)}
          disabled={formData.sameAsPhone}
          placeholder="+1 (555) 000-0000"
          className={`${inputClasses} ${formData.sameAsPhone ? 'bg-gray-50 text-gray-400 cursor-not-allowed opacity-60' : ''}`}
        />
      </div>
    </div>
  </div>
);

// Step 2: Travel Info
const Step2Travel: React.FC<StepProps> = ({ formData, updateField, errors }) => {
  const isRamadan = formData.departureDate && (() => {
    const date = new Date(formData.departureDate);
    const start = new Date('2026-02-18');
    const end = new Date('2026-03-18');
    return date >= start && date <= end;
  })();

  return (
    <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
      <div className="text-center mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-noor-green">Travel Information</h3>
        <p className="text-gray-400 text-xs mt-1">When and where are you departing?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="group">
          <label className={`${labelClasses} group-focus-within:text-noor-green`}>
            Departure City <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.departureCity}
              onChange={(e) => updateField('departureCity', e.target.value)}
              className={`${selectClasses} ${errors.departureCity ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100' : ''}`}
            >
              <option value="">Select city</option>
              {DEPARTURE_CITIES.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none transition-transform duration-200 group-focus-within:rotate-180" />
          </div>
          {errors.departureCity && (
            <p className="text-red-500 text-xs mt-1 animate-[shake_0.3s_ease-out]">{errors.departureCity}</p>
          )}
        </div>

        <div className="group">
          <label className={`${labelClasses} group-focus-within:text-noor-green`}>
            Travel Month <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.travelMonth}
              onChange={(e) => updateField('travelMonth', e.target.value)}
              className={`${selectClasses} ${errors.travelMonth ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100' : ''}`}
            >
              <option value="">Select month</option>
              {TRAVEL_MONTHS.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none transition-transform duration-200 group-focus-within:rotate-180" />
          </div>
          {errors.travelMonth && (
            <p className="text-red-500 text-xs mt-1 animate-[shake_0.3s_ease-out]">{errors.travelMonth}</p>
          )}
        </div>

        <div className="sm:col-span-2 group">
          <label className={`${labelClasses} group-focus-within:text-noor-green`}>
            Departure Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.departureDate}
            onChange={(e) => updateField('departureDate', e.target.value)}
            min="2026-01-01"
            max="2026-12-31"
            className={`${inputClasses} ${errors.departureDate ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100' : ''}`}
          />
          {errors.departureDate && (
            <p className="text-red-500 text-xs mt-1 animate-[shake_0.3s_ease-out]">{errors.departureDate}</p>
          )}
        </div>
      </div>

      {isRamadan && (
        <div className="mt-4 p-3 bg-gradient-to-r from-noor-gold/10 to-noor-gold/5 border-2 border-noor-gold/30 rounded-xl animate-[slideDown_0.4s_ease-out] hover:shadow-md hover:shadow-noor-gold/10 transition-all duration-300">
          <div className="flex items-center gap-2">
            <span className="text-lg animate-pulse">🌙</span>
            <div>
              <p className="font-bold text-noor-green text-sm">Ramadan Special — 5% Discount!</p>
              <p className="text-xs text-gray-500">Applied automatically to your quote</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Step 3: Package & Group
const Step3Package: React.FC<StepProps> = ({ formData, updateField, errors }) => {
  const packages = [
    { value: '5-star', label: '5★ Premium', color: 'bg-amber-500' },
    { value: '4-star', label: '4★ Comfort', color: 'bg-noor-green' },
    { value: '3-star', label: '3★ Economy', color: 'bg-blue-500' },
  ];

  const rooms = [
    { value: 'single', label: 'Single' },
    { value: 'double', label: 'Double' },
    { value: 'triple', label: 'Triple' },
    { value: 'quad', label: 'Quad' },
  ];

  return (
    <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
      <div className="text-center mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-noor-green">Package & Group</h3>
        <p className="text-gray-400 text-xs mt-1">Select your preferences</p>
      </div>

      {/* Package Tier */}
      <div>
        <label className={labelClasses}>Package Tier <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-3 gap-2">
          {packages.map(pkg => (
            <button
              key={pkg.value}
              type="button"
              onClick={() => updateField('packageTier', pkg.value)}
              className={`
                relative p-3 rounded-xl border-2 text-center 
                transition-all duration-300 ease-out
                transform hover:scale-[1.02] hover:-translate-y-0.5
                ${formData.packageTier === pkg.value
                  ? 'border-noor-green bg-noor-green/5 shadow-md shadow-noor-green/20'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:bg-gray-50/50'
                }
              `}
            >
              <div className={`w-3 h-3 rounded-full ${pkg.color} mx-auto mb-1 transition-transform duration-300 ${formData.packageTier === pkg.value ? 'scale-125' : ''}`} />
              <p className="font-bold text-gray-800 text-xs sm:text-sm">{pkg.label}</p>
              {formData.packageTier === pkg.value && (
                <div className="absolute top-1 right-1 w-4 h-4 bg-noor-green rounded-full flex items-center justify-center animate-[scaleIn_0.2s_ease-out]">
                  <CheckIcon className="w-2.5 h-2.5 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
        {errors.packageTier && (
          <p className="text-red-500 text-xs mt-1 animate-[shake_0.3s_ease-out]">{errors.packageTier}</p>
        )}
      </div>

      {/* Room Type */}
      <div>
        <label className={labelClasses}>Room Type <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-4 gap-2">
          {rooms.map(room => (
            <button
              key={room.value}
              type="button"
              onClick={() => updateField('roomType', room.value)}
              className={`
                p-2.5 rounded-xl border-2 text-center text-xs sm:text-sm
                transition-all duration-300 ease-out
                transform hover:scale-[1.03] hover:-translate-y-0.5
                ${formData.roomType === room.value
                  ? 'border-noor-green bg-noor-green/5 font-bold shadow-md shadow-noor-green/20'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md hover:bg-gray-50/50'
                }
              `}
            >
              {room.label}
            </button>
          ))}
        </div>
        {errors.roomType && (
          <p className="text-red-500 text-xs mt-1 animate-[shake_0.3s_ease-out]">{errors.roomType}</p>
        )}
      </div>

      {/* Travelers */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { key: 'adults', label: 'Adults', min: 1 },
          { key: 'children', label: 'Children', sub: '2-12', min: 0 },
          { key: 'infants', label: 'Infants', sub: '<2', min: 0 },
        ].map(({ key, label, sub, min }) => (
          <div key={key}>
            <label className={labelClasses}>
              {label} {sub && <span className="text-gray-400 font-normal">({sub})</span>}
            </label>
            <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-sm focus-within:border-noor-green focus-within:ring-2 focus-within:ring-noor-green/10">
              <button
                type="button"
                onClick={() => updateField(key as keyof FormData, Math.max(min, (formData[key as keyof FormData] as number) - 1))}
                className="px-2.5 py-2 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 text-gray-600 font-bold"
              >
                −
              </button>
              <span className="flex-1 text-center font-bold text-sm text-gray-800 transition-all duration-200">
                {formData[key as keyof FormData]}
              </span>
              <button
                type="button"
                onClick={() => updateField(key as keyof FormData, (formData[key as keyof FormData] as number) + 1)}
                className="px-2.5 py-2 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 text-gray-600 font-bold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Elderly & Assistance */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-xl cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-sm hover:bg-gray-50/50 group">
          <input
            type="checkbox"
            checked={formData.hasElderly}
            onChange={(e) => updateField('hasElderly', e.target.checked)}
            className="w-4 h-4 text-noor-green rounded border-gray-300 focus:ring-noor-green transition-all duration-200 cursor-pointer"
          />
          <div>
            <p className="font-semibold text-gray-800 text-sm group-hover:text-noor-green transition-colors duration-200">Elderly (65+)?</p>
            <p className="text-[10px] text-gray-400">Prioritize closer hotels</p>
          </div>
        </label>
        <div className="group">
          <input
            type="text"
            value={formData.specialAssistance}
            onChange={(e) => updateField('specialAssistance', e.target.value)}
            placeholder="Special assistance needs..."
            className={inputClasses}
          />
        </div>
      </div>
    </div>
  );
};

// Step 4: Additional Services
const Step4Services: React.FC<StepProps> = ({ formData, updateField }) => {
  const services = [
    { field: 'ziyarat' as keyof FormData, label: 'Ziyarat Tours', options: ['Yes', 'No', 'Undecided'] },
    { field: 'visaAssistance' as keyof FormData, label: 'Visa Assistance', options: ['Yes', 'No', 'Undecided'] },
    { field: 'travelInsurance' as keyof FormData, label: 'Travel Insurance', options: ['Yes', 'No', 'Undecided'] },
  ];

  return (
    <div className="space-y-4 animate-[fadeIn_0.4s_ease-out]">
      <div className="text-center mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-noor-green">Additional Services</h3>
        <p className="text-gray-400 text-xs mt-1">Optional add-ons for your journey</p>
      </div>

      {/* Services */}
      <div className="space-y-3">
        {services.map((service, index) => (
          <div 
            key={service.field} 
            className="p-3 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-sm hover:bg-gray-50/30"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <p className="font-semibold text-gray-800 text-sm">{service.label}</p>
              <div className="flex gap-1.5">
                {service.options.map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField(service.field, option)}
                    className={`
                      px-3 py-1.5 rounded-full text-xs font-medium 
                      transition-all duration-300 ease-out
                      transform hover:scale-105 active:scale-95
                      ${formData[service.field] === option
                        ? 'bg-noor-green text-white shadow-md shadow-noor-green/30'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-sm'
                      }
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Preference */}
      <div>
        <label className={labelClasses}>Preferred Contact <span className="text-red-500">*</span></label>
        <div className="flex gap-2">
          {['WhatsApp', 'Phone', 'Email'].map(method => (
            <button
              key={method}
              type="button"
              onClick={() => updateField('preferredContact', method.toLowerCase())}
              className={`
                flex-1 px-3 py-2.5 rounded-xl border-2 text-xs sm:text-sm font-medium 
                transition-all duration-300 ease-out
                transform hover:scale-[1.02] hover:-translate-y-0.5
                ${formData.preferredContact === method.toLowerCase()
                  ? 'border-noor-green bg-noor-green/5 text-noor-green shadow-md shadow-noor-green/20'
                  : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-md hover:bg-gray-50/50'
                }
              `}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Special Requests */}
      <div className="group">
        <label className={`${labelClasses} group-focus-within:text-noor-green`}>Special Requests</label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => updateField('specialRequests', e.target.value)}
          placeholder="Dietary requirements, questions, specific hotel preferences..."
          rows={3}
          className={`${inputClasses} resize-none`}
        />
      </div>
    </div>
  );
};

// ==================== MAIN FORM COMPONENT ====================
const InquiryForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Required';
      if (!formData.email.trim()) newErrors.email = 'Required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
      if (!formData.phone.trim()) newErrors.phone = 'Required';
    }

    if (step === 2) {
      if (!formData.departureCity) newErrors.departureCity = 'Required';
      if (!formData.travelMonth) newErrors.travelMonth = 'Required';
      if (!formData.departureDate) newErrors.departureDate = 'Required';
    }

    if (step === 3) {
      if (!formData.packageTier) newErrors.packageTier = 'Required';
      if (!formData.roomType) newErrors.roomType = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCompletedSteps(prev => [...prev.filter(s => s !== currentStep), currentStep]);
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setCompletedSteps([1, 2, 3, 4]);
      } else {
        setErrors({ fullName: data.error });
      }
    } catch {
      setErrors({ fullName: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  // Success State
  if (submitted) {
    return (
      <section className="relative z-20 -mt-14 sm:-mt-16 mb-12 sm:mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/[0.08] overflow-hidden border border-gray-100/50 transition-all duration-500 hover:shadow-3xl">
            <div className="p-8 sm:p-12 text-center animate-[fadeIn_0.5s_ease-out]">
              <div className="w-16 h-16 bg-noor-green/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-[scaleIn_0.4s_ease-out]">
                <CheckIcon className="w-8 h-8 text-noor-green" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-noor-green mb-2">Inquiry Submitted!</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                Thank you! Our team will contact you within 24 hours with a personalized quote.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                  setCompletedSteps([]);
                  setFormData(initialFormData);
                }}
                className="px-6 py-3 bg-noor-green text-white rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#234d33] hover:shadow-lg hover:shadow-noor-green/30 hover:scale-105 active:scale-95"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-20 -mt-14 sm:-mt-16 mb-12 sm:mb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/[0.08] overflow-hidden border border-gray-100/50 transition-all duration-500 hover:shadow-3xl hover:border-gray-200/80">
          {/* Header */}
          <div className="bg-gradient-to-r from-noor-green to-[#1e4a32] px-5 sm:px-8 py-4 sm:py-5 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }} />
            <div className="relative">
              <p className="text-noor-gold text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-1">Personalised Quote</p>
              <h2 className="text-white text-lg sm:text-xl font-bold font-display">Umrah Package Inquiry</h2>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-5 sm:p-8">
            <StepIndicator currentStep={currentStep} completedSteps={completedSteps} />

            <div className="min-h-[320px] sm:min-h-[350px]">
              {currentStep === 1 && <Step1Personal formData={formData} updateField={updateField} errors={errors} />}
              {currentStep === 2 && <Step2Travel formData={formData} updateField={updateField} errors={errors} />}
              {currentStep === 3 && <Step3Package formData={formData} updateField={updateField} errors={errors} />}
              {currentStep === 4 && <Step4Services formData={formData} updateField={updateField} errors={errors} />}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  onClick={prevStep}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-gray-500 font-medium text-sm transition-all duration-300 hover:text-noor-green hover:gap-2.5 group"
                >
                  <ArrowLeftIcon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center gap-1.5 px-6 py-3 bg-noor-green text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-noor-green/20 hover:bg-[#234d33] hover:shadow-xl hover:shadow-noor-green/30 hover:scale-105 hover:gap-2.5 active:scale-95 group"
                >
                  Continue
                  <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex items-center gap-1.5 px-6 py-3 bg-noor-gold text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-lg shadow-noor-gold/20 hover:bg-[#b8983e] hover:shadow-xl hover:shadow-noor-gold/30 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Get My Quote
                      <CheckIcon className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;