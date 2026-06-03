import React, { useState } from 'react';
import { ChevronDownIcon } from '../icons/Icons';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Do Umrah travelers have any age limit?',
    answer:
      'Yes, people of all ages can perform Umrah. However, minors must be accompanied by a guardian, and elderly pilgrims should consult a doctor before traveling.',
  },
  {
    question: 'Do U.S. citizens need a visa for Hajj or Umrah?',
    answer:
      'Yes, U.S. citizens must obtain a valid Saudi visa (Umrah, Hajj, or tourist visa) to perform pilgrimage.',
  },
  {
    question: 'What are the required documents for the Umrah visa?',
    answer:
      'Required documents include: a passport with 6+ months validity, recent passport-size photos with white background, confirmed round-trip tickets, hotel booking proof, and vaccination certificates (meningitis, flu, COVID-19).',
  },
  {
    question: 'Can I customize my Umrah package?',
    answer:
      'Yes! You can customize your package with extra nights, private transportation, hotel upgrades, and other services based on your budget and preferences.',
  },
  {
    question: 'Do your packages include hotel stays in Makkah and Madinah?',
    answer:
      'Yes, all our Umrah packages include comfortable accommodations in top-rated hotels in both Makkah and Madinah.',
  },
  {
    question: 'When is the cheapest time to perform Umrah?',
    answer:
      'Cheapest Umrah packages are usually available during off-peak months like Muharram and Safar. Avoid Ramadan, Hajj season, and school holidays for lower prices.',
  },
  {
    question: 'What does your 5-star Umrah package include?',
    answer:
      'Our 5-star package includes luxury hotels near Haram, premium transport, guided tours, visa processing, and personalized pilgrim support.',
  },
  {
    question: 'How do I book an Umrah package with Haram Umrah Travels?',
    answer:
      'You can book by filling out our inquiry form, contacting us online, or calling our team. We provide a free quote and guide you through the booking process.',
  },
  {
    question: 'How early should I book my Hajj or Umrah package from USA?',
    answer:
      'It is recommended to book at least 2–3 months in advance to secure the best prices and availability.',
  },
  {
    question: 'What essentials should I bring for Umrah?',
    answer:
      'You should pack Ihram clothing, personal hygiene items, travel documents, a prayer mat, a small first-aid kit, and essential personal items.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="bg-noor-green/10 text-noor-green text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
            FAQ
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-noor-green font-display">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            What Our Pilgrims Say about Us — Capturing Moments, Happiness, and Togetherness
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'ring-2 ring-noor-green/20' : ''
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span
                  className={`font-semibold pr-4 ${
                    openIndex === index
                      ? 'text-noor-green'
                      : 'text-gray-700'
                  }`}
                >
                  {faq.question}
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-noor-green text-white rotate-180'
                      : 'bg-white text-gray-400'
                  }`}
                >
                  <ChevronDownIcon className="w-4 h-4" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;