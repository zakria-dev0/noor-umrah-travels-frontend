import React from 'react';
import { MailIcon, PhoneIcon } from '../icons/Icons';

const CTASection: React.FC = () => (
  <section className="py-20 bg-noor-green">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold text-white mb-4 font-display">Ready to Begin Your Blessed Journey?</h2>
      <p className="text-white/60 mb-8 text-lg">Contact us today to plan your perfect Umrah or Hajj experience. Our team is ready to assist you every step of the way.</p>
      <div className="flex items-center justify-center gap-4">
        <button className="bg-noor-gold text-white px-8 py-3.5 rounded-full flex items-center gap-2 font-semibold hover:bg-[#b89a3e] transition-colors">
          <MailIcon className="w-5 h-5" />
          Get a Free Quote
        </button>
        <button className="border-2 border-white text-white px-8 py-3.5 rounded-full flex items-center gap-2 font-semibold hover:bg-white hover:text-noor-green transition-colors">
          <PhoneIcon className="w-5 h-5" />
          Call Us Now
        </button>
      </div>
    </div>
  </section>
);

export default CTASection;