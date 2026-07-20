 // contactPage.tsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  PhoneIcon, 
  MailIcon, 
  WhatsAppIcon, 
  LocationIcon, 
  ChevronDownIcon 
} from '../components/icons/Icons';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// ==================== ICONS ====================
const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const PlaneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CalendarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const GiftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 7h-1.209A4.92 4.92 0 0019 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 15.5 7 15.5 7h-2c.705-1.783 1.46-3 2-3zM7 5.5C7 4.673 7.673 4 8.5 4c.54 0 1.295 1.217 2 3h-2S7 7 7 5.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9h7l.001 2H13z"/>
  </svg>
);

// ==================== TYPES ====================
interface FormData {
  // Step 1: Personal
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  sameAsPhone: boolean;
  // Step 2: Travel
  departureCity: string;
  travelMonth: string;
  departureDate: string;
  // Step 3: Package & Group
  packageTier: string;
  roomType: string;
  adults: number;
  children: number;
  infants: number;
  hasElderly: boolean;
  specialAssistance: string;
  // Step 4: Services
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

const STEPS = [
  { id: 1, title: 'Personal Details', icon: UserIcon },
  { id: 2, title: 'Travel Info', icon: PlaneIcon },
  { id: 3, title: 'Package & Group', icon: UsersIcon },
  { id: 4, title: 'Services', icon: SparklesIcon },
];

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

// ==================== PREMIUM HERO BANNER ====================
const ContactHero: React.FC = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[550px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=2070&auto=format&fit=crop"
          alt="Kaaba"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-noor-green/95 via-noor-green/85 to-noor-green/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-noor-green/90 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-noor-gold/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-noor-gold/15 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Islamic Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 0L50 10L40 20L30 10L40 0ZM20 20L30 30L20 40L10 30L20 20ZM60 20L70 30L60 40L50 30L60 20ZM40 40L50 50L40 60L30 50L40 40ZM0 40L10 50L0 60L-10 50L0 40ZM80 40L90 50L80 60L70 50L80 40ZM20 60L30 70L20 80L10 70L20 60ZM60 60L70 70L60 80L50 70L60 60Z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating Stars */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-noor-gold rounded-full animate-ping" />
        <div className="absolute top-48 right-1/3 w-1.5 h-1.5 bg-noor-gold/80 rounded-full animate-ping delay-500" />
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-ping delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <a href="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </a>
          <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-noor-gold font-medium">Book Your Journey</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-noor-gold rounded-full animate-pulse" />
              <span className="text-noor-gold text-xs font-bold tracking-[0.2em] uppercase">
                Trusted by 10,000+ Pilgrims
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display leading-[1.1] mb-6">
              Begin Your
              <span className="block text-noor-gold mt-2">Sacred Journey</span>
            </h1>

            {/* Description */}
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Let us guide you on a life-changing pilgrimage. Our expert team crafts 
              personalized Umrah experiences with premium accommodations steps from the Haram.
            </p>

            {/* Trust Indicators - Removed protected icon and adjusted spacing */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">24/7 Support</p>
                  <p className="text-white/50 text-xs">Always Here for You</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Prime Locations</p>
                  <p className="text-white/50 text-xs">Walking Distance to Haram</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#inquiry-form"
                className="group inline-flex items-center gap-2 bg-noor-gold text-noor-green px-6 py-3.5 rounded-full font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-noor-gold/25"
              >
                Start Your Booking
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="https://wa.me/+17869104615"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Side - Stats Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Stats Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-noor-gold/20 rounded-2xl mb-4">
                    <svg className="w-8 h-8 text-noor-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold font-display">Why Choose Us?</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <p className="text-3xl font-bold text-noor-gold mb-1">10K+</p>
                    <p className="text-white/60 text-sm">Happy Pilgrims</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <p className="text-3xl font-bold text-noor-gold mb-1">15+</p>
                    <p className="text-white/60 text-sm">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <p className="text-3xl font-bold text-noor-gold mb-1">4.9</p>
                    <p className="text-white/60 text-sm">Star Rating</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <p className="text-3xl font-bold text-noor-gold mb-1">100%</p>
                    <p className="text-white/60 text-sm">Visa Success</p>
                  </div>
                </div>

                {/* Review Preview */}
                <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-noor-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-noor-gold font-bold text-sm">AS</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-white font-semibold text-sm">Ahmed S.</p>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-noor-gold fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-white/60 text-xs leading-relaxed">
                        "Best Umrah experience! Hotels were exactly as promised, steps from Haram."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              {/* <div className="absolute -top-4 -right-4 bg-noor-gold text-noor-green px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                🌙 Ramadan 2026 Open!
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50L48 45.8C96 41.7 192 33.3 288 35.2C384 37 480 49 576 54.2C672 59.3 768 57.7 864 52.5C960 47.3 1056 38.7 1152 38.3C1248 38 1344 46 1392 50L1440 54V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  );
};

// ==================== STEP INDICATOR ====================
interface StepIndicatorProps {
  currentStep: number;
  completedSteps: number[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, completedSteps }) => (
  <div className="flex items-center justify-between mb-6 md:mb-12 px-1">
    {STEPS.map((step, index) => {
      const isCompleted = completedSteps.includes(step.id);
      const isCurrent = currentStep === step.id;
      const Icon = step.icon;
      
      return (
        <React.Fragment key={step.id}>
          <div className="flex flex-col items-center relative">
            {/* Step Icon - Optimized for mobile */}
            <div
              className={`
                w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center
                transition-all duration-300 relative
                ${isCompleted 
                  ? 'bg-noor-green text-white shadow-lg shadow-noor-green/30' 
                  : isCurrent 
                    ? 'bg-noor-gold text-white shadow-lg shadow-noor-gold/30 ring-2 sm:ring-4 ring-noor-gold/20' 
                    : 'bg-gray-100 text-gray-400'
                }
              `}
            >
              {isCompleted ? (
                <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              ) : (
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              )}
              
              {/* Active step indicator dot */}
              {isCurrent && (
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-noor-green rounded-full border-2 border-white" />
              )}
            </div>

            {/* Step Title - Mobile version always visible but text size adjusted */}
            <span 
              className={`
                mt-1.5 sm:mt-2 text-[10px] xs:text-xs sm:text-sm font-medium text-center
                ${isCurrent ? 'text-noor-green font-semibold' : isCompleted ? 'text-noor-green/70' : 'text-gray-400'}
                truncate max-w-[60px] xs:max-w-[70px] sm:max-w-none
              `}
            >
              {step.title.split(' ')[0]} {/* Shows only first word on smallest screens */}
              <span className="hidden xs:inline"> {/* Shows full title on xs screens and up */}
                {step.title.includes(' ') && step.title.substring(step.title.indexOf(' '))}
              </span>
            </span>

            {/* Step number for accessibility */}
            <span className="sr-only">Step {step.id}: {step.title}</span>
          </div>

          {/* Connector Line - Optimized for mobile */}
          {index < STEPS.length - 1 && (
            <div className="flex-1 mx-1 xs:mx-2 md:mx-4">
              <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    completedSteps.includes(step.id) ? 'bg-noor-green w-full' : 'bg-gray-200 w-0'
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

// ==================== RAMADAN DISCOUNT BANNER ====================
interface DiscountBannerProps {
  show: boolean;
}

const RamadanDiscountBanner: React.FC<DiscountBannerProps> = ({ show }) => {
  if (!show) return null;
  
  return (
    <div className="mt-4 p-4 bg-gradient-to-r from-noor-gold/10 via-noor-gold/20 to-noor-gold/10 border border-noor-gold/30 rounded-xl animate-pulse">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-noor-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
          <GiftIcon className="w-5 h-5 text-noor-gold" />
        </div>
        <div>
          <p className="font-bold text-noor-green text-sm md:text-base">
            🌙 Ramadan Special — 5% Discount Applied!
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            You've selected travel during the blessed month. Your discount will be reflected in your quote.
          </p>
        </div>
      </div>
    </div>
  );
};

// ==================== FORM STEPS ====================
interface StepProps {
  formData: FormData;
  updateField: (field: keyof FormData, value: any) => void;
  errors: Partial<Record<keyof FormData, string>>;
}

// Step 1: Personal Details
const Step1Personal: React.FC<StepProps> = ({ formData, updateField, errors }) => (
  <div className="space-y-6">
    <div className="text-center mb-8">
      <h3 className="text-xl md:text-2xl font-bold text-noor-green font-display">Personal Information</h3>
      <p className="text-gray-500 text-sm mt-1">Tell us about yourself so we can personalize your journey</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Full Name */}
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
          <span className="font-normal text-gray-400 ml-1">(as on passport)</span>
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
          placeholder="Enter your full name"
          className={`w-full px-4 py-3.5 border-2 rounded-xl text-base transition-all duration-200
            focus:outline-none focus:border-noor-green focus:ring-4 focus:ring-noor-green/10
            ${errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}
          `}
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="you@example.com"
          className={`w-full px-4 py-3.5 border-2 rounded-xl text-base transition-all duration-200
            focus:outline-none focus:border-noor-green focus:ring-4 focus:ring-noor-green/10
            ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}
          `}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          placeholder="+1 (555) 000-0000"
          className={`w-full px-4 py-3.5 border-2 rounded-xl text-base transition-all duration-200
            focus:outline-none focus:border-noor-green focus:ring-4 focus:ring-noor-green/10
            ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}
          `}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* WhatsApp */}
      <div className="md:col-span-2">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-semibold text-gray-700">
            WhatsApp Number
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.sameAsPhone}
              onChange={(e) => {
                updateField('sameAsPhone', e.target.checked);
                if (e.target.checked) updateField('whatsapp', formData.phone);
              }}
              className="w-4 h-4 text-noor-green border-gray-300 rounded focus:ring-noor-green"
            />
            <span className="text-sm text-gray-500">Same as phone</span>
          </label>
        </div>
        <input
          type="tel"
          value={formData.sameAsPhone ? formData.phone : formData.whatsapp}
          onChange={(e) => updateField('whatsapp', e.target.value)}
          disabled={formData.sameAsPhone}
          placeholder="+1 (555) 000-0000"
          className={`w-full px-4 py-3.5 border-2 rounded-xl text-base transition-all duration-200
            focus:outline-none focus:border-noor-green focus:ring-4 focus:ring-noor-green/10
            ${formData.sameAsPhone ? 'bg-gray-50 text-gray-400' : 'border-gray-200 hover:border-gray-300'}
          `}
        />
      </div>
    </div>
  </div>
);

// Step 2: Travel Information
const Step2Travel: React.FC<StepProps> = ({ formData, updateField, errors }) => {
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    if (formData.departureDate) {
      const date = new Date(formData.departureDate);
      const ramadanStart = new Date('2026-02-18');
      const ramadanEnd = new Date('2026-03-18');
      setShowDiscount(date >= ramadanStart && date <= ramadanEnd);
    } else {
      setShowDiscount(false);
    }
  }, [formData.departureDate]);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-noor-green font-display">Travel Information</h3>
        <p className="text-gray-500 text-sm mt-1">When and where would you like to begin your journey?</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Departure City */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Departure City <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.departureCity}
              onChange={(e) => updateField('departureCity', e.target.value)}
              className={`w-full px-4 py-3.5 border-2 rounded-xl text-base appearance-none transition-all duration-200
                focus:outline-none focus:border-noor-green focus:ring-4 focus:ring-noor-green/10
                ${errors.departureCity ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}
                ${!formData.departureCity && 'text-gray-400'}
              `}
            >
              <option value="">Select departure city</option>
              {DEPARTURE_CITIES.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          {errors.departureCity && <p className="text-red-500 text-xs mt-1">{errors.departureCity}</p>}
        </div>

        {/* Travel Month */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Travel Month <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={formData.travelMonth}
              onChange={(e) => updateField('travelMonth', e.target.value)}
              className={`w-full px-4 py-3.5 border-2 rounded-xl text-base appearance-none transition-all duration-200
                focus:outline-none focus:border-noor-green focus:ring-4 focus:ring-noor-green/10
                ${errors.travelMonth ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}
                ${!formData.travelMonth && 'text-gray-400'}
              `}
            >
              <option value="">Select month</option>
              {TRAVEL_MONTHS.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          {errors.travelMonth && <p className="text-red-500 text-xs mt-1">{errors.travelMonth}</p>}
        </div>

        {/* Departure Date */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Preferred Departure Date <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              value={formData.departureDate}
              onChange={(e) => updateField('departureDate', e.target.value)}
              min="2026-01-01"
              max="2026-12-31"
              className={`w-full px-4 py-3.5 border-2 rounded-xl text-base transition-all duration-200
                focus:outline-none focus:border-noor-green focus:ring-4 focus:ring-noor-green/10
                ${errors.departureDate ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-gray-300'}
              `}
            />
            <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
          {errors.departureDate && <p className="text-red-500 text-xs mt-1">{errors.departureDate}</p>}
          
          <RamadanDiscountBanner show={showDiscount} />
        </div>
      </div>
    </div>
  );
};

// Step 3: Package & Group
const Step3Package: React.FC<StepProps> = ({ formData, updateField, errors }) => {
  const packages = [
    { value: '5-star', label: '5 Star Premium', desc: 'Luxury hotels, closest to Haram', color: 'from-amber-500 to-yellow-400' },
    { value: '4-star', label: '4 Star Comfort', desc: 'Quality hotels, walking distance', color: 'from-noor-green to-emerald-500' },
    { value: '3-star', label: '3 Star Economy', desc: 'Clean & comfortable, shuttle service', color: 'from-blue-500 to-cyan-400' },
  ];

  const rooms = [
    { value: 'single', label: 'Single', desc: 'Private room' },
    { value: 'double', label: 'Double', desc: '2 sharing' },
    { value: 'triple', label: 'Triple', desc: '3 sharing' },
    { value: 'quad', label: 'Quad', desc: '4 sharing' },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-noor-green font-display">Package & Group Details</h3>
        <p className="text-gray-500 text-sm mt-1">Choose your package and tell us about your travel group</p>
      </div>

      {/* Package Tier Selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Select Package Tier <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {packages.map(pkg => (
            <button
              key={pkg.value}
              type="button"
              onClick={() => updateField('packageTier', pkg.value)}
              className={`relative p-4 rounded-xl border-2 text-left transition-all duration-200
                ${formData.packageTier === pkg.value 
                  ? 'border-noor-green bg-noor-green/5 ring-4 ring-noor-green/10' 
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${pkg.color} mb-2`} />
              <p className="font-bold text-gray-800">{pkg.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{pkg.desc}</p>
              {formData.packageTier === pkg.value && (
                <div className="absolute top-3 right-3 w-5 h-5 bg-noor-green rounded-full flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
        {errors.packageTier && <p className="text-red-500 text-xs mt-1">{errors.packageTier}</p>}
      </div>

      {/* Room Type */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Room Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {rooms.map(room => (
            <button
              key={room.value}
              type="button"
              onClick={() => updateField('roomType', room.value)}
              className={`p-3 rounded-xl border-2 text-center transition-all duration-200
                ${formData.roomType === room.value 
                  ? 'border-noor-green bg-noor-green/5' 
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              <p className="font-bold text-gray-800 text-sm">{room.label}</p>
              <p className="text-xs text-gray-400">{room.desc}</p>
            </button>
          ))}
        </div>
        {errors.roomType && <p className="text-red-500 text-xs mt-1">{errors.roomType}</p>}
      </div>

      {/* Travelers Count */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Adults <span className="text-red-500">*</span></label>
          <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => updateField('adults', Math.max(1, formData.adults - 1))}
              className="px-3 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg font-bold text-gray-600">−</span>
            </button>
            <span className="flex-1 text-center font-bold text-gray-800">{formData.adults}</span>
            <button
              type="button"
              onClick={() => updateField('adults', formData.adults + 1)}
              className="px-3 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg font-bold text-gray-600">+</span>
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Children <span className="text-gray-400 text-xs">(2-12)</span></label>
          <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => updateField('children', Math.max(0, formData.children - 1))}
              className="px-3 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg font-bold text-gray-600">−</span>
            </button>
            <span className="flex-1 text-center font-bold text-gray-800">{formData.children}</span>
            <button
              type="button"
              onClick={() => updateField('children', formData.children + 1)}
              className="px-3 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg font-bold text-gray-600">+</span>
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Infants <span className="text-gray-400 text-xs">(&lt;2)</span></label>
          <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => updateField('infants', Math.max(0, formData.infants - 1))}
              className="px-3 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg font-bold text-gray-600">−</span>
            </button>
            <span className="flex-1 text-center font-bold text-gray-800">{formData.infants}</span>
            <button
              type="button"
              onClick={() => updateField('infants', formData.infants + 1)}
              className="px-3 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-lg font-bold text-gray-600">+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Elderly & Special Assistance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
            <input
              type="checkbox"
              checked={formData.hasElderly}
              onChange={(e) => updateField('hasElderly', e.target.checked)}
              className="w-5 h-5 text-noor-green border-gray-300 rounded focus:ring-noor-green"
            />
            <div>
              <p className="font-semibold text-gray-800">Traveling with elderly (65+)?</p>
              <p className="text-xs text-gray-500">We'll prioritize closer hotels</p>
            </div>
          </label>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Special Assistance</label>
          <input
            type="text"
            value={formData.specialAssistance}
            onChange={(e) => updateField('specialAssistance', e.target.value)}
            placeholder="Wheelchair, medical needs, etc."
            className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base transition-all duration-200
              focus:outline-none focus:border-noor-green focus:ring-4 focus:ring-noor-green/10 hover:border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

// Step 4: Additional Services
const Step4Services: React.FC<StepProps> = ({ formData, updateField, errors }) => {
  const serviceOptions = [
    { field: 'ziyarat' as keyof FormData, label: 'Ziyarat Tours', desc: 'Visit historical Islamic sites in Makkah & Madinah', options: ['Yes, include Ziyarat', 'No, skip Ziyarat', 'Undecided'] },
    { field: 'visaAssistance' as keyof FormData, label: 'Visa Assistance', desc: 'Help with Umrah visa processing', options: ['Yes, I need visa help', 'No, I have valid visa', 'Undecided'] },
    { field: 'travelInsurance' as keyof FormData, label: 'Travel Insurance', desc: 'Comprehensive coverage for your journey', options: ['Yes, add insurance', 'No, I have coverage', 'Undecided'] },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-noor-green font-display">Additional Services</h3>
        <p className="text-gray-500 text-sm mt-1">Customize your pilgrimage with these optional add-ons</p>
      </div>

      {/* Service Cards */}
      <div className="space-y-4">
        {serviceOptions.map(service => (
          <div key={service.field} className="p-5 border-2 border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="font-bold text-gray-800">{service.label}</p>
                <p className="text-xs text-gray-500">{service.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {service.options.map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField(service.field, option)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                      ${formData[service.field] === option 
                        ? 'bg-noor-green text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Preferred Contact Method <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {['WhatsApp', 'Phone Call', 'Email'].map(method => (
            <button
              key={method}
              type="button"
              onClick={() => updateField('preferredContact', method.toLowerCase().replace(' ', '_'))}
              className={`px-4 py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-200
                ${formData.preferredContact === method.toLowerCase().replace(' ', '_') 
                  ? 'border-noor-green bg-noor-green/5 text-noor-green' 
                  : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }
              `}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Special Requests or Questions
        </label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => updateField('specialRequests', e.target.value)}
          placeholder="Any dietary requirements, specific hotel preferences, questions about the package..."
          rows={4}
          className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-base transition-all duration-200
            focus:outline-none focus:border-noor-green focus:ring-4 focus:ring-noor-green/10 hover:border-gray-300 resize-none"
        />
      </div>
    </div>
  );
};

// ==================== CONTACT INFO SIDEBAR ====================
const ContactInfoSidebar: React.FC = () => (
  <div className="bg-gradient-to-br from-noor-green to-[#0f2318] rounded-2xl p-6 md:p-8 text-white h-fit sticky top-8">
    <h3 className="text-xl font-bold font-display mb-6">Need Help?</h3>
    
    <div className="space-y-5">
      <a href="tel: +1 786 9104615" className="flex items-start gap-4 group">
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
          <PhoneIcon className="w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold">Call Us</p>
          <p className="text-white/60 text-sm">++1 786 9104615</p>
        </div>
      </a>

      <a href="https://wa.me/17869104615" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
          <WhatsAppIcon className="w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold">WhatsApp</p>
          <p className="text-white/60 text-sm">Chat instantly</p>
        </div>
      </a>

      <a href="mailto:info@haramumrahtravels.com" className="flex items-start gap-4 group">
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
          <MailIcon className="w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold">Email</p>
          <p className="text-white/60 text-sm break-all">info@haramumrahtravels.com</p>
        </div>
      </a>

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
          <LocationIcon className="w-5 h-5" />
        </div>
        <div>
          <p className="font-semibold">Office</p>
          <p className="text-white/60 text-sm">1395 Brickell Ave Suite 800<br />Miami FL 33131</p>
        </div>
      </div>
    </div>

    <div className="mt-8 pt-6 border-t border-white/10">
      <p className="text-noor-gold text-xs font-semibold tracking-wider uppercase mb-2">Office Hours</p>
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-white/60">Mon - Fri</span>
          <span>9 AM - 6 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Saturday</span>
          <span>10 AM - 4 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Sunday</span>
          <span className="text-white/40">Closed</span>
        </div>
      </div>
    </div>
  </div>
);

// ==================== MULTI-STEP FORM ====================
const MultiStepForm: React.FC = () => {
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
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    }

    if (step === 2) {
      if (!formData.departureCity) newErrors.departureCity = 'Please select a departure city';
      if (!formData.travelMonth) newErrors.travelMonth = 'Please select a travel month';
      if (!formData.departureDate) newErrors.departureDate = 'Please select a departure date';
    }

    if (step === 3) {
      if (!formData.packageTier) newErrors.packageTier = 'Please select a package tier';
      if (!formData.roomType) newErrors.roomType = 'Please select a room type';
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

  if (submitted) {
    return (
      <div className="text-center py-12 md:py-16">
        <div className="w-20 h-20 bg-noor-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckIcon className="w-10 h-10 text-noor-green" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-noor-green font-display mb-3">
          Inquiry Submitted Successfully!
        </h3>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Thank you for your interest in Haram Umrah Travels. Our team will contact you 
          within 24 hours with a personalized quote.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setCurrentStep(1);
            setCompletedSteps([]);
            setFormData(initialFormData);
          }}
          className="px-6 py-3 bg-noor-green text-white rounded-full font-semibold hover:bg-[#2a5c3a] transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-noor-green to-[#2a5c3a] px-6 py-8 md:px-10 md:py-10">
        <p className="text-noor-gold text-xs font-bold tracking-[0.2em] uppercase mb-1">Personalized Quote</p>
        <h2 className="text-white text-2xl md:text-3xl font-bold font-display">Umrah Package Inquiry</h2>
        <p className="text-white/60 text-sm mt-2">Complete all steps to receive your custom quote</p>
      </div>
      
      <div className="p-6 md:p-10">
        <StepIndicator currentStep={currentStep} completedSteps={completedSteps} />
        
        <div className="min-h-[400px]">
          {currentStep === 1 && <Step1Personal formData={formData} updateField={updateField} errors={errors} />}
          {currentStep === 2 && <Step2Travel formData={formData} updateField={updateField} errors={errors} />}
          {currentStep === 3 && <Step3Package formData={formData} updateField={updateField} errors={errors} />}
          {currentStep === 4 && <Step4Services formData={formData} updateField={updateField} errors={errors} />}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
          {currentStep > 1 ? (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 px-5 py-3 text-gray-600 font-semibold hover:text-noor-green transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}
          
          {currentStep < 4 ? (
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-8 py-3.5 bg-noor-green text-white rounded-full font-semibold hover:bg-[#2a5c3a] transition-colors shadow-lg shadow-noor-green/20"
            >
              Continue
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex items-center gap-2 px-8 py-3.5 bg-noor-gold text-white rounded-full font-semibold hover:bg-[#b8983e] transition-colors shadow-lg shadow-noor-gold/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Inquiry'}
              {!loading && <CheckIcon className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== CONTACT SECTION ====================
const ContactSection: React.FC = () => (
  <section id="inquiry-form" className="py-12 sm:py-16 md:py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2">
          <MultiStepForm />
        </div>
        <div className="lg:col-span-1">
          <ContactInfoSidebar />
        </div>
      </div>
    </div>
  </section>
);

// ==================== FAQ SECTION ====================
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How do I book an Umrah package?',
    answer: 'You can book an Umrah package by filling out our inquiry form above, calling us directly at +1 786 9104615, or sending us a WhatsApp message. Our team will guide you through the entire booking process and help you choose the best package for your needs.',
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
    answer: 'Our packages typically include return flights, hotel accommodation in Makkah & Madinah, airport transfers, Umrah visa processing, and 24/7 support. Some packages also include ziyarat tours and additional services. Check individual package details for full inclusions.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="bg-noor-green/10 text-noor-green text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-noor-green font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Quick answers to common questions about booking your pilgrimage
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'ring-2 ring-noor-green/20' : ''
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className={`font-semibold pr-4 ${openIndex === index ? 'text-noor-green' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'bg-noor-green text-white rotate-180' : 'bg-white text-gray-400'
                }`}>
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== MAIN CONTACT PAGE ====================
const ContactPage: React.FC = () => (
  <>
    <Helmet>
      <title>Contact Us | Haram Umrah Travels</title>
      <meta name="description" content="Get in touch with Haram Umrah Travels to book your Umrah package, request a custom quote, or ask questions — call, WhatsApp, or send us an inquiry today." />
    </Helmet>
    <ContactHero />
    <ContactSection />
    <FAQSection />
  </>
);

export default ContactPage;