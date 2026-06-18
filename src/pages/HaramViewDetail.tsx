// HaramViewDetail.tsx
import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// ── Shared images ─────────────────────────────────────────────
import transportImg from '../assets/images/packages/5-3_files/t-1.webp';
import visaImg      from '../assets/images/packages/5-3_files/s-1.webp';

// ── 5-Star Makkah hotel images ────────────────────────────────
import pullmanMakkahImg from '../assets/images/packages/ZamzamPullmanMakkah.webp';
import fairmontImg      from '../assets/images/packages/MakkahClockRoyalTowerAFairmontmakkah.webp';
import swissotelImg     from '../assets/images/packages/SwissotelAlMaqamMakkah.jpg';
import conradImg        from '../assets/images/packages/ConradJabalOmarMakkah.webp';
import rafflesMakkahImg from '../assets/images/packages/RafflesMakkahPalace.jpg';

// ── 5-Star Madinah hotel images ───────────────────────────────
import pullmanMadinahImg from '../assets/images/packages/5-ZamzamPullmanMadina.jpg';
import hiltonMadinahImg  from '../assets/images/packages/5-MadinahHiltonHotel.jpg';
import intercontiImg     from '../assets/images/packages/5-InterContinentalDarAlImanMadinah.webp';
import movenpickImg      from '../assets/images/packages/5-AnwarAlMadinahMövenpick.jpg';
import sofitelImg        from '../assets/images/packages/5-SofitelShahdAlMadinah.jpg';
import { ArrowRightIcon } from '../components/icons/Icons';

// ── Types ─────────────────────────────────────────────────────
interface Hotel {
  name: string;
  location: 'Makkah' | 'Madinah';
  tag: string;
  distance: string;
  image: string;
  description: string;
  highlights: string[];
}



interface PackageIntroContent {
  title: string;
  intro: string;
  benefitsTitle: string;
  benefitsDescription: string;
  highlights: string[];
}

interface PackageIntroSectionProps {
  content: PackageIntroContent;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQContent {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

interface WhyBookSectionProps {
  content: {
    title: string;
    description: string;
    benefits: string[];
  };
}

interface PackageClosingSectionProps {
  content: {
    title: string;
    description: string;
    buttonText: string;
    benefits: string[];
    bottomTitle: string;
    bottomDescription: string;
    includes?: {
      title: string;
      value: string;
    }[];
  };
}

type FiveStarView = 'haram' | 'kaaba';
type StarType = '5star' | '4star' | '3star';

// ── Hotel Data ────────────────────────────────────────────────
const makkahHotels: Hotel[] = [
  {
    name: 'Zamzam Pullman Makkah',
    location: 'Makkah',
    tag: 'Abraj Al-Bait Complex',
    distance: '50m from Masjid al-Haram',
    image: pullmanMakkahImg,
    description:
      'Part of the iconic Abraj Al-Bait Towers, the Zamzam Pullman Makkah stands just 50 metres from Masjid al-Haram. With 1,595 elegantly furnished rooms and suites offering sweeping Haram views, guests enjoy world-class dining, a full-service spa, fitness centre, and 24-hour concierge — all steps from the Grand Mosque.',
    highlights: [
      '50 m from Masjid al-Haram',
      'Direct Haram view rooms available',
      'Multiple signature restaurants',
      'Full spa & wellness centre',
      '24-hour concierge & butler service',
    ],
  },
  {
    name: 'Fairmont Makkah',
    location: 'Makkah',
    tag: 'Clock Tower – Abraj Al-Bait',
    distance: '100m from Masjid al-Haram',
    image: fairmontImg,
    description:
      'Towering 76 storeys above Makkah inside the world-famous Clock Tower, the Fairmont is only 100 metres from Masjid al-Haram. Its 858 rooms and suites — many with direct Haram or Holy Mosque views — offer a rooftop pool, award-winning restaurants, a dedicated Zamzam lounge, and round-the-clock guest services.',
    highlights: [
      '100 m from Masjid al-Haram',
      'Haram view rooms',
      'Rooftop infinity pool',
      'Award-winning dining venues',
      'Dedicated Zamzam lounge',
    ],
  },
  {
    name: 'Swissotel Al Maqam',
    location: 'Makkah',
    tag: 'Abraj Al-Bait Complex',
    distance: '~100m from Masjid al-Haram',
    image: swissotelImg,
    description:
      'The Swissotel Al Maqam Makkah blends Swiss precision with Islamic hospitality inside the Abraj Al-Bait complex, just 100 metres from Masjid al-Haram. Its 1,486 contemporary rooms feature prayer mats and Qibla direction indicators, complemented by speciality restaurants, a business centre, and complimentary Haram shuttle service.',
    highlights: [
      '~100 m from Masjid al-Haram',
      'Islamic-themed room amenities',
      'Complimentary Haram shuttle',
      'Business centre & meeting rooms',
      'International & Arabic dining',
    ],
  },
  {
    name: 'Conrad Jabal Omar',
    location: 'Makkah',
    tag: 'Jabal Omar District',
    distance: '400m from Masjid al-Haram',
    image: conradImg,
    description:
      "Located in the prestigious Jabal Omar development, the Conrad Makkah offers sophisticated luxury with 1,447 spacious rooms featuring floor-to-ceiling Haram panoramas. Guests benefit from Conrad's signature personal concierge, multiple gourmet restaurants, a rooftop pool, fully equipped health club, and exclusive pilgrimage assistance services.",
    highlights: [
      '400 m from Masjid al-Haram',
      'Panoramic Haram-view rooms',
      'Rooftop pool & health club',
      "Conrad's personal concierge",
      'Dedicated Umrah assistance team',
    ],
  },
  {
    name: 'Raffles Makkah Palace',
    location: 'Makkah',
    tag: 'Clock Tower – Abraj Al-Bait',
    distance: 'Steps from Masjid al-Haram',
    image: rafflesMakkahImg,
    description:
      'Occupying the upper floors of the Clock Tower, the Raffles Makkah Palace represents the pinnacle of luxury in the holy city. Its 213 palatial suites — each with a private butler — offer unobstructed Haram views and interiors inspired by traditional Islamic design, alongside a 2,000 m² spa and a private majlis lounge.',
    highlights: [
      'Steps from Masjid al-Haram',
      'All-suite hotel with private butlers',
      'Unobstructed Haram-view suites',
      '2,000 m² luxury spa',
      'Private majlis lounge',
    ],
  },
];

const madinahHotels: Hotel[] = [
  {
    name: "Pullman Zamzam Madinah",
    location: 'Madinah',
    tag: "Prophet's Mosque District",
    distance: "Opposite Prophet's Mosque",
    image: pullmanMadinahImg,
    description:
      "Positioned directly opposite the Prophet's Mosque gate, the Pullman Zamzam Madinah offers privileged access to Al-Masjid an-Nabawi. Its 689 premium rooms and suites feature floor-to-ceiling windows framing the mosque's green dome, alongside rooftop dining, a fitness centre, and warm personalised service.",
    highlights: [
      "Directly opposite Prophet's Mosque",
      "Green dome view rooms",
      'Rooftop dining & café',
      'Fitness centre & wellness facilities',
      '24-hour room service',
    ],
  },
  {
    name: 'Madinah Hilton',
    location: 'Madinah',
    tag: 'Al-Haram District',
    distance: "Short walk from Prophet's Mosque",
    image: hiltonMadinahImg,
    description:
      "One of Madinah's most distinguished addresses, the Hilton is a short walk from Al-Masjid an-Nabawi. Its 696 well-appointed rooms blend modern comforts with warm Arabian hospitality, featuring multiple international restaurants, a rooftop terrace overlooking the holy precinct, health club, and a dedicated Umrah services desk.",
    highlights: [
      "Short walk from Prophet's Mosque",
      'Multiple international restaurants',
      'Rooftop terrace with mosque views',
      'Executive lounge access',
      'Dedicated Umrah services desk',
    ],
  },
  {
    name: 'InterContinental Dar Al Iman',
    location: 'Madinah',
    tag: 'Al-Haram District',
    distance: "Minutes from Prophet's Mosque",
    image: intercontiImg,
    description:
      "The InterContinental Dar Al Iman Madinah enjoys a prime setting just minutes from the Prophet's Mosque. This elegant 5-star property features 614 spacious rooms, many overlooking the mosque's minarets, along with authentic Saudi and international cuisine, a rooftop pool, luxury spa, and a dedicated pilgrimage concierge.",
    highlights: [
      "Minutes from Prophet's Mosque",
      'Minaret & mosque-view rooms',
      'Rooftop pool & luxury spa',
      'Saudi & international cuisine',
      'Pilgrimage concierge service',
    ],
  },
  {
    name: 'Mövenpick Madinah',
    location: 'Madinah',
    tag: "Prophet's Mosque District",
    distance: "5 min walk to Prophet's Mosque",
    image: movenpickImg,
    description:
      "The Mövenpick Hotel Madinah sits less than 5 minutes' walk from Al-Masjid an-Nabawi. Its 481 modern rooms offer clean, elegant interiors with prayer facilities, award-winning on-site restaurants, a rooftop terrace, and the warm Swiss-Mediterranean service the Mövenpick brand is celebrated for.",
    highlights: [
      "Under 5 min walk to Prophet's Mosque",
      'Prayer mats & Qibla direction in rooms',
      'Award-winning on-site restaurants',
      'Rooftop terrace',
      'Complimentary Wi-Fi throughout',
    ],
  },
  {
    name: 'Sofitel Madinah',
    location: 'Madinah',
    tag: 'Al-Haram District',
    distance: "Metres from Prophet's Mosque",
    image: sofitelImg,
    description:
      "The Sofitel Madinah blends French elegance with authentic Arabian hospitality, situated mere metres from Al-Masjid an-Nabawi. Its 441 luxurious rooms are appointed with Sofitel's signature Mybed® sleep system, panoramic mosque views, French-inspired & Arabic dining, and a fully equipped spa with bespoke concierge services.",
    highlights: [
      "Metres from Prophet's Mosque",
      'Sofitel Mybed® in every room',
      'French-inspired & Arabic dining',
      'Full spa & wellness centre',
      'Bespoke concierge services',
    ],
  },
];



const haramViewContent = {
  "5": {
    introSection: {
      title: "Affordable 5 Star Umrah Package USA for Just $890",

      intro:
        "Your Dream Cheap 5 Star Umrah Package Awaits. Experience the perfect blend of comfort and affordability with our Budget Luxury Umrah Package. Enjoy 5-star hotels, Haram views, and seamless services without breaking the bank.",

      benefitsTitle:
        "5 Star Umrah Package Under $1000 – Luxury Within Your Budget",

      benefitsDescription:
        "Experience a spiritual journey without compromise on comfort with our Affordable 5 Star Umrah Package USA. Designed for travelers seeking a perfect balance of luxury and value, this Budget Luxury Umrah Package offers premium accommodations, convenient Haram access, and personalized services. Make your pilgrimage memorable, peaceful, and affordable with our expertly curated package.",

      highlights: [
        "Stay in 5-star hotels near the Haram with breathtaking views.",
        "Enjoy premium facilities and opulent comforts throughout your stay.",
        "Hassle-free visa processing with all documentation.",
        "Delicious meals included for a comfortable stay.",
        "Convenient transport and airport transfers.",
        "Guided spiritual tours and expert assistance."
      ]
    },

    whyBookSection: {
      title:
        "Budget Luxury Umrah Package – Comfort and Convenience Combined",

      description:
        "Our 5 Star Umrah Package Under $1000 is designed to make your pilgrimage smooth, enjoyable, and spiritually rewarding. Combining modern comforts with affordability, this package ensures you can focus entirely on your prayers while we handle every detail—from hotel bookings to transportation—so your journey remains peaceful, organized, and memorable.",

      benefits: [
        "Premium hotel stays with elegant rooms and modern facilities.",
        "Reliable transportation between Makkah, Madinah, and key holy sites.",
        "Complimentary Umrah essentials for a hassle-free experience.",
        "Flexible itinerary to match your personal schedule.",
        "Opportunities for guided historical and religious tours."
      ]
    },

    closingSection: {
      title:
        "Cheap 5 Star Umrah Package – Your Dream Pilgrimage Made Easy",

      description:
        "Our 5 Star Umrah Package Under $1000 makes premium pilgrimage experiences accessible for all. Whether it’s your first Umrah or a repeated spiritual journey, this Cheap 5 Star Umrah Package ensures comfort, convenience, and a stress-free experience.",

      buttonText: "Book Now",

      benefits: [
        "Affordable 5-star accommodations for ultimate comfort.",
        "Steps away from Masjid al-Haram & Masjid ul Nabwi for easy access.",
        "Round-trip flights from major US cities included.",
        "Expert guides for religious and cultural insights.",
        "Dedicated support throughout your pilgrimage.",
        "Flexible schedules to match your preferences."
      ],

      includes: [
        {
          title: "Ground Transportation",
          value: "Jeddah ↔ Makkah ↔ Madinah"
        },
        {
          title: "Saudi Umrah e-Visa",
          value: "Online visa processing"
        },
        {
          title: "Meet & Greet Service",
          value: "Airport & hotel assistance"
        },
        {
          title: "24-Hour Support",
          value: "Always available for you"
        }
      ],

      bottomTitle: "Luxury, Comfort & Spiritual Peace",

      bottomDescription:
        "Everything needed for a seamless premium Umrah experience is already included."
    }
  },

  "7": {
    introSection: {
      title: "5 Star Umrah Package with Haram View for Just $990",

      intro:
        "Experience True Comfort with Premium Luxury Umrah Package USA. Stay in premium 5 Star Umrah Hotels Makkah while enjoying our Haram View Umrah Package—where convenience, luxury, and spirituality meet perfectly.",

      benefitsTitle:
        "Experience Unmatched Comfort and Spirituality with Our Haram View Umrah Package",

      benefitsDescription:
        "Embark on a spiritually enriching journey with our 5 Star Umrah Package with Haram View. Tailored for pilgrims from the USA, this Luxury Umrah Package USA combines world-class accommodation, seamless travel arrangements, and a close, unobstructed view of the Holy Kaaba.",

      highlights: [
        "Stay in 5 Star Umrah Hotels Makkah & Madinah.",
        "Enjoy an exclusive Haram View for spiritual closeness.",
        "Hassle-free transportation between Makkah and Madinah.",
        "Guided support from experienced travel coordinators.",
        "Access to premium dining and leisure facilities.",
        "Tailored itinerary ensuring a smooth pilgrimage."
      ]
    },

    whyBookSection: {
      title:
        "Luxury Umrah Package USA: Your Gateway to a Blessed Journey",

      description:
        "Our Haram View Umrah Package is designed to provide unmatched comfort while keeping your spiritual journey central. With meticulous attention to detail, every aspect—from hotel selection to religious guidance—is crafted to ensure peace of mind.",

      benefits: [
        "Prime Haram View rooms just steps from the Kaaba.",
        "Premium amenities in 5 Star Umrah Hotels Makkah & Madinah.",
        "Guided tours of Makkah and Madinah landmarks.",
        "Round-the-clock concierge and assistance.",
        "Comfortable transport for all rituals and excursions.",
        "Flexible scheduling to suit individual and group needs."
      ]
    },

    closingSection: {
      title:
        "Luxury Stay at 5 Star Umrah Hotels Makkah & Madinah",

      description:
        "Enhance your pilgrimage with a stay in premium accommodations that combine comfort, convenience, and spiritual proximity. Our carefully selected hotels in both holy cities ensure you remain close to the sacred sites while enjoying modern luxury.",

      buttonText: "Explore 5 Star Hotels",

      benefits: [
        "Elegant rooms with modern design and a relaxing atmosphere.",
        "Close proximity to Haram and Masjid an-Nabawi.",
        "Daily housekeeping and high-quality room service.",
        "On-site dining options with international and local cuisine.",
        "Peaceful environment designed for rest and worship.",
        "Dedicated staff providing personalized support."
      ],

      includes: [
        {
          title: "Ground Transportation",
          value: "Jeddah ↔ Makkah ↔ Madinah"
        },
        {
          title: "Saudi Umrah e-Visa",
          value: "Online visa processing"
        },
        {
          title: "Meet & Greet Service",
          value: "Airport & hotel assistance"
        },
        {
          title: "24-Hour Support",
          value: "Always available for you"
        }
      ],

      bottomTitle: "Premium Haram View Experience",

      bottomDescription:
        "Enjoy comfort, convenience, and exceptional hospitality throughout your Umrah journey."
    }
  },

  "10": {
    introSection: {
      title:
        "Luxury 5 Star Umrah Package with Kaaba View for Just $1190",

      intro:
        "Experience A Premium Spiritual Journey with Our Exclusive VIP Umrah Package USA. Book your dream Kaaba View Umrah Package today and enjoy luxury accommodation, seamless travel, guided services, and unforgettable views of the Holy Kaaba.",

      benefitsTitle:
        "VIP Umrah Package USA for a Comfortable Spiritual Journey",

      benefitsDescription:
        "Perform your Umrah with complete peace of mind while enjoying unmatched comfort and convenience. This premium Umrah Package USA is designed to enhance your spiritual focus by minimizing travel stress and maximizing ease throughout your stay.",

      highlights: [
        "5-star Hotels located just steps away from Masjid al-Haram.",
        "Easy access to prayer areas for all daily prayers.",
        "Smooth check-in and check-out experience at hotels.",
        "Group coordination for a well-organized pilgrimage.",
        "Assistance for elderly travelers and families.",
        "Peaceful environment ideal for prayers and reflection."
      ]
    },

    whyBookSection: {
      title:
        "Everything You Get with Our All-Inclusive Premium Umrah Package USA",

      description:
        "Our VIP Umrah Package USA is thoughtfully designed for US citizens to provide a seamless and spiritually fulfilling journey. From premium accommodations with stunning Kaaba views to complete travel arrangements, every detail is managed with care.",

      benefits: [
        "5-star luxury hotels a short walk from Masjid al-Haram.",
        "Direct Kaaba view rooms available.",
        "Premium hotel stay near Masjid ul Nabwi in Madinah.",
        "Round-trip flights from major USA cities included.",
        "Daily breakfast and selected meal options.",
        "Personalized concierge and dedicated butler service."
      ]
    },

    closingSection: {
      title:
        "Secure & Hassle-Free Booking for Your Kaaba View Umrah Package",

      description:
        "Our luxury 5 Star Umrah Package with Kaaba View combines affordability with luxury. We make booking your Umrah journey simple, transparent, and secure.",

      buttonText: "Book Now",

      benefits: [
        "Clear pricing with no hidden fees or extra charges.",
        "Easy online booking process with quick confirmation.",
        "Trusted by hundreds of satisfied Umrah travelers.",
        "Flexible payment options for your convenience.",
        "Dedicated customer support before and during travel.",
        "Limited-time offer—lock your package at $1190 today."
      ],

      includes: [
        {
          title: "Ground Transportation",
          value: "Jeddah ↔ Makkah ↔ Madinah"
        },
        {
          title: "Saudi Umrah e-Visa",
          value: "Online visa processing"
        },
        {
          title: "Meet & Greet Service",
          value: "Airport & hotel assistance"
        },
        {
          title: "24-Hour Support",
          value: "Always available for you"
        }
      ],

      bottomTitle: "Exclusive VIP Kaaba View Experience",

      bottomDescription:
        "A premium Umrah journey combining luxury, convenience, and spiritual fulfillment."
    }
  }
};


export const haramViewFaqData = {
  5: {
    title: "Frequently Asked Questions",
    subtitle:
      "Find answers about our Affordable 5 Star Umrah Package USA.",

    faqs: [
      {
        question: "What is included in the Budget Luxury Umrah Package?",
        answer:
          "Our package includes 5-star hotel accommodations, guided tours, airport transfers, transportation between Makkah and Madinah, meals, visa assistance, and personalized support throughout your pilgrimage."
      },
      {
        question: "How close are the hotels to the Haram in this package?",
        answer:
          "The hotels are located just steps away from Masjid al-Haram, allowing easy access for prayers and spiritual activities without long walks."
      },
      {
        question: "Can families and elderly travelers join this package?",
        answer:
          "Yes, our Budget Luxury Umrah Package is designed for all travelers, including families and seniors, with comfortable accommodations, easy access to holy sites, and personalized support for a safe and convenient journey."
      },
      {
        question: "Can I customize my itinerary?",
        answer:
          "Yes! Our Budget Luxury Umrah Package offers flexibility to adjust schedules for prayers, sightseeing, and personal spiritual activities."
      },
      {
        question: "Is visa assistance provided?",
        answer:
          "Absolutely. We handle all visa requirements and documentation to ensure a smooth and hassle-free travel experience."
      },
      {
        question: "Are meals included in this package?",
        answer:
          "Yes, you will enjoy a variety of delicious meals during your stay, designed for comfort and convenience."
      },
      {
        question: "What kind of support is available during the pilgrimage?",
        answer:
          "Our dedicated team provides 24/7 assistance for transportation, hotel services, guidance, and any emergencies, ensuring a stress-free spiritual journey."
      }
    ]
  },

  7: {
    title: "Frequently Asked Questions",
    subtitle:
      "Learn more about our 5 Star Umrah Package with Haram View.",

    faqs: [
      {
        question: "What is included in the 5 Star Umrah Package with Haram View $990?",
        answer:
          "This package includes accommodation in 5-star hotels with Haram view, airport transfers, intercity transport, and complete travel assistance for a smooth Umrah journey."
      },
      {
        question: "Are flights included in this Luxury Umrah Package USA?",
        answer:
          "Flights may or may not be included depending on the deal. It's best to confirm with the travel provider for exact inclusions and pricing details."
      },
      {
        question: "What is the distance between the hotels and the Haram?",
        answer:
          "The hotels are ideally located just steps away or within a short walking distance, offering easy access and direct Haram views for added convenience."
      },
      {
        question: "Is this package suitable for families and elderly pilgrims?",
        answer:
          "Yes, this package is designed for comfort and ease, making it ideal for families, seniors, and first-time travelers seeking a hassle-free experience."
      },
      {
        question: "Do you provide visa assistance with this Umrah package?",
        answer:
          "Yes, visa processing assistance is typically included to ensure a smooth and stress-free travel preparation process."
      },
      {
        question: "Can I customize my Umrah package?",
        answer:
          "Yes, we allow customization based on your travel dates, duration, and accommodation preferences to better suit your needs."
      },
      {
        question: "What kind of support is available during the trip?",
        answer:
          "You will receive 24/7 on-ground support, guidance for rituals, and assistance throughout your stay to ensure a comfortable and worry-free pilgrimage."
      }
    ]
  },

  10: {
    title: "Frequently Asked Questions",
    subtitle:
      "Everything you need to know about our Luxury 5 Star Kaaba View Umrah Package.",

    faqs: [
      {
        question: "What is included in the Luxury 5 Star Umrah Package?",
        answer:
          "This package includes 5-star hotel accommodation with a Kaaba view, round-trip flights, visa processing, airport transfers, and full on-ground support."
      },
      {
        question: "How close are the hotels to Masjid al-Haram?",
        answer:
          "The hotels are located just a short walking distance away, providing easy access to the Haram for daily prayers and Umrah rituals."
      },
      {
        question: "Is this package suitable for families and elderly travelers?",
        answer:
          "Yes, the package is designed for comfort and convenience, making it ideal for families and elderly pilgrims."
      },
      {
        question: "How can I book this Umrah package?",
        answer:
          "You can easily book online or contact our support team for quick and secure booking assistance."
      },
      {
        question: "Are there any hidden charges in the $1190 package?",
        answer:
          "No, the package offers transparent pricing with no hidden fees or unexpected costs."
      },
      {
        question: "Will I receive support during the journey?",
        answer:
          "Yes, 24/7 customer support is available to assist you throughout your entire Umrah trip."
      },
      {
        question: "Why should I choose this Umrah package?",
        answer:
          "It offers a perfect balance of affordability, luxury, and convenience, ensuring a comfortable and spiritually fulfilling journey."
      }
    ]
  }
};

const PackageIntroSection = ({ content }: PackageIntroSectionProps) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <section className="relative py-16 bg-gradient-to-b from-noor-light to-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-3 text-sm font-semibold text-noor-gold tracking-wide uppercase">
              Overview
            </span>

            <h2 className="text-4xl font-extrabold text-noor-green leading-tight mb-5">
              {content.title}
            </h2>

            <p className="text-gray-600 leading-8 text-lg">
              {content.intro}
            </p>

            {/* subtle decorative line */}
            <div className="mt-6 w-24 h-1 bg-noor-gold rounded-full opacity-70" />
          </div>

          {/* RIGHT CARD */}
          <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">

            {/* soft glow accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-noor-gold/10 rounded-full blur-2xl" />

            <h3 className="text-2xl font-bold text-noor-green mb-3">
              {content.benefitsTitle}
            </h3>

            <p className="text-gray-600 mb-6 leading-7">
              {content.benefitsDescription}
            </p>
            {/* Show More Button */}
            <div className="mt-6">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm font-semibold text-noor-green hover:text-noor-gold transition"
              >
                {showDetails ? "Hide Details" : "Show More Details"}
              </button>
            </div>
            {/* highlights as better chips */}
            {showDetails && (
            <div className="space-y-3">
              {content.highlights.map((item: any) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-3 rounded-xl bg-noor-light/50 hover:bg-noor-light transition"
                >
                  <span className="text-noor-gold font-bold mt-0.5">✓</span>
                  <span className="text-sm text-gray-700 leading-6">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

const WhyBookSection = ({ content }: WhyBookSectionProps) => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-noor-light to-white">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* LEFT - STORY / VALUE */}
          <div className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition">

            {/* subtle accent */}
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-noor-green/5 rounded-full blur-2xl" />

            <span className="inline-block text-xs font-semibold text-noor-gold uppercase tracking-widest mb-3">
              Smart Choice
            </span>

            <h2 className="text-3xl font-extrabold text-noor-green leading-snug mb-5">
              {/* Best Budget Umrah Package from USA for Smart Travelers */}
              {content.title}
            </h2>

            <p className="text-gray-600 leading-8 text-[15.5px]">
              {/* Choosing a budget-friendly Umrah package allows pilgrims to focus
              on their spiritual journey without financial stress. Our packages
              combine affordability, comfort, and convenience — ensuring peace
              of mind from departure to return. */}
                {content.description}

            </p>

            {/* mini highlight */}
            {/* <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-noor-gold rounded-full"></span>
              Trusted by thousands of pilgrims worldwide
            </div> */}
          </div>

          {/* RIGHT - BENEFITS */}
          <div className="relative bg-noor-green text-white rounded-3xl p-10 shadow-sm overflow-hidden">

            {/* decorative glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-noor-gold/20 rounded-full blur-3xl" />

            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-noor-gold mb-3">
              Why Choose Us
            </span>

            <h3 className="text-2xl font-bold mb-6">
              Why Book These Packages?
            </h3>

            <ul className="space-y-4">
              {content.benefits.map((item) => (
  <li
    key={item}
    className="flex items-start gap-3 text-sm leading-6"
  >
    <span className="text-noor-gold font-bold mt-0.5">✓</span>
    <span className="text-white/90">{item}</span>
  </li>
))}
            </ul>

            {/* CTA hint */}
            <div className="mt-8 pt-5 semi-bold border-t border-white/10 text-lg text-white">
              Book Now!
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


const PackageClosingSection = ({
  content,
}: PackageClosingSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-noor-light">
      <div className="max-w-6xl mx-auto px-4">

        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}
            <div className="bg-white p-8 lg:p-10">

              <span className="inline-block mb-3 text-noor-gold font-semibold uppercase tracking-widest text-xs">
                Why Choose Us
              </span>

              <h2 className="text-3xl font-bold text-noor-green mb-5">
                {content.title}
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                {content.description}
              </p>

              <div className="space-y-3">
                {content.benefits.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 items-start"
                  >
                    <span className="text-noor-gold font-bold">
                      ✓
                    </span>

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/+17869104615"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-noor-green text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90"
              >
                {content.buttonText}
                <ArrowRightIcon className="w-4 h-4" />
              </a>

            </div>

            {/* RIGHT */}
            <div className="bg-noor-green text-white p-8 lg:p-10">

              <h3 className="text-2xl font-bold mb-6">
                {content.bottomTitle}
              </h3>

              <p className="text-white/80 mb-8 leading-7">
                {content.bottomDescription}
              </p>

              {content.includes && (
                <div className="grid gap-4">
                  {content.includes.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white/10 rounded-xl p-4"
                    >
                      <h4 className="font-semibold text-noor-gold">
                        {item.title}
                      </h4>

                      <p className="text-sm text-white/90 mt-1">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};



const FAQSection = ({ content }: { content: FAQContent }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="bg-noor-green/10 text-noor-green text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full inline-block mb-4">
            FAQ
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-noor-green font-display">
            {content.title}
          </h2>

          {content.subtitle && (
            <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
              {content.subtitle}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {content.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen
                    ? 'border-noor-green/20 bg-white shadow-md'
                    : 'border-gray-100 bg-gray-50 hover:border-noor-green/10'
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left"
                >
                  <h3
                    className={`font-semibold text-sm sm:text-base pr-4 transition-colors ${
                      isOpen
                        ? 'text-noor-green'
                        : 'text-gray-800'
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-noor-green text-white rotate-180'
                        : 'bg-white border border-gray-200 text-gray-400'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-5">
                    <div className="h-px bg-gray-100 mb-4" />

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ── Main Component ────────────────────────────────────────────
const HaramViewDetail: React.FC = () => {
  const [selectedMakkah, setSelectedMakkah]   = useState(0);
  const [selectedMadinah, setSelectedMadinah] = useState(0);

    const [searchParams] = useSearchParams();

const { nights } = useParams<{ nights: string }>();

const packageNights = Number(nights);

const pageContent =
  haramViewContent[packageNights as 5 | 7 | 10] ||
  haramViewContent[5];

console.log("nights", packageNights);
console.log("pageContent", pageContent);

  const faqContent =  haramViewFaqData[packageNights as 5 | 7 | 10] ||
  haramViewFaqData[5];


  const haramMeta: Record<number, { title: string; description: string }> = {
    10: {
      title: 'Luxury 5 Star Umrah Package with Kaaba View | VIP Deal USA',
      description: 'Book a Luxury 5 Star Umrah Package with Kaaba View. Enjoy a VIP Umrah Package USA, Kaaba View Umrah Package, and Premium Umrah Package USA.',
    },
    7: {
      title: '5 Star Umrah Package with Haram View | Luxury USA Deal',
      description: 'Book a 5 Star Umrah Package with Haram View. Enjoy a Haram View Umrah Package with 5 Star Umrah Hotels Makkah and a Luxury Umrah Package USA.',
    },
    5: {
      title: 'Affordable 5 Star Umrah Package USA Under $1000 | Budget Deal',
      description: 'Book an Affordable 5 Star Umrah Package USA. Enjoy a Cheap 5 Star Umrah Package, Budget Luxury Umrah Package, and 5 Star Umrah Package Under $1000.',
    },
  };

  const meta = haramMeta[packageNights] || haramMeta[5];

  return (
    <div className="bg-white">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* ══════════════ PAGE HEADER ══════════════ */}
      <div className="bg-[#1a3c2a] py-12 md:py-16 text-center px-4">
        <p className="text-noor-gold uppercase tracking-widest text-xs md:text-sm mb-3">
          Haram Umrah Travels – 5 Star Package
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Our 5-Star Hotels in Makkah & Madinah
        </h1>
        <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto">
          Select your preferred luxury hotel for each city. All properties are situated within walking distance or a short drive from the Holy Mosques.
        </p>
      </div>
        <PackageIntroSection content={pageContent.introSection} />

      {/* ══════════════ HOTEL SECTIONS ══════════════ */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">

        {/* ── Makkah ── */}
        <div>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex items-center gap-2 bg-[#1a3c2a] text-white px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
              <svg className="w-4 h-4 text-noor-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              5-Star Hotels in Makkah
            </div>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Hotel cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            {makkahHotels.map((h, i) => (
              <HotelThumb
                key={h.name}
                hotel={h}
                isSelected={selectedMakkah === i}
                onClick={() => setSelectedMakkah(i)}
              />
            ))}
          </div>

          {/* Selected hotel detail */}
          <HotelDetailCard hotel={makkahHotels[selectedMakkah]} />
        </div>

        {/* Divider */}
        {/* <div className="border-t border-dashed border-gray-200" /> */}

      <WhyBookSection content={pageContent.whyBookSection}/>

        {/* ── Madinah ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex items-center gap-2 bg-[#1a3c2a] text-white px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
              <svg className="w-4 h-4 text-noor-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              5-Star Hotels in Madinah
            </div>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            {madinahHotels.map((h, i) => (
              <HotelThumb
                key={h.name}
                hotel={h}
                isSelected={selectedMadinah === i}
                onClick={() => setSelectedMadinah(i)}
              />
            ))}
          </div>

          <HotelDetailCard hotel={madinahHotels[selectedMadinah]} />
        </div>

      </div>

      <PackageClosingSection
  content={pageContent.closingSection}
/>

      <FAQSection content={faqContent} />


      {/* ══════════════ INCLUDED SERVICES STRIP ══════════════ */}
      <section className="bg-[#1a3c2a] py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-noor-gold uppercase tracking-widest text-xs mb-5 md:mb-6">
            Also Included In Your Package
          </p>
          
          {/* Mobile optimized grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { img: transportImg, label: 'Ground Transportation', sub: 'Jeddah ↔ Makkah ↔ Madinah' },
              { img: visaImg,      label: 'Saudi Umrah e-Visa',    sub: 'Electronic processing' },
              { img: transportImg, label: 'Meet & Greet Service',  sub: 'Airport & hotel assistance' },
              { img: visaImg,      label: '24-Hour Support',       sub: 'Always available for you' },
            ].map((s) => (
              <div 
                key={s.label} 
                className="flex items-center gap-2 sm:gap-3 bg-white/5 rounded-lg p-3 sm:p-4 hover:bg-white/10 transition-colors duration-200"
              >
                {/* Image container - responsive sizing */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={s.img} 
                    alt={s.label} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xs sm:text-sm font-semibold leading-tight truncate">
                    {s.label}
                  </p>
                  <p className="text-white/50 text-xs mt-0.5 truncate">
                    {s.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

// ── Hotel Thumbnail Card ──────────────────────────────────────
const HotelThumb = ({
  hotel,
  isSelected,
  onClick,
}: {
  hotel: Hotel;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`relative group text-left rounded-xl overflow-hidden border-2 transition-all duration-200 w-full ${
      isSelected
        ? 'border-noor-gold shadow-lg shadow-noor-gold/20'
        : 'border-transparent hover:border-noor-gold/40'
    }`}
  >
    {/* Image */}
    <div className="h-32 sm:h-36 overflow-hidden">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    {/* Overlay on selected */}
    {isSelected && (
      <div className="absolute top-2 right-2 bg-noor-gold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    )}
    {/* Text */}
    <div className={`p-2 sm:p-3 transition-colors ${isSelected ? 'bg-[#1a3c2a]' : 'bg-gray-50'}`}>
      <p className={`text-xs font-bold leading-tight ${isSelected ? 'text-white' : 'text-gray-800'}`}>
        {hotel.name}
      </p>
      <p className={`text-xs mt-0.5 ${isSelected ? 'text-noor-gold' : 'text-gray-500'}`}>
        {hotel.distance}
      </p>
    </div>
  </button>
);

// ── Hotel Detail Card ─────────────────────────────────────────
const HotelDetailCard = ({ hotel }: { hotel: Hotel }) => (
  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-5">
    {/* Image — 2/5 width on desktop */}
    <div className="md:col-span-2 h-56 sm:h-64 md:h-auto overflow-hidden">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content — 3/5 width on desktop */}
    <div className="md:col-span-3 p-5 sm:p-6 md:p-8 flex flex-col justify-between">
      <div>
        {/* Tag + stars */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-noor-gold/10 text-noor-gold text-xs font-semibold uppercase tracking-wider px-2 sm:px-3 py-1 rounded-full">
            {hotel.tag}
          </span>
          <span className="bg-gray-100 text-gray-500 text-xs px-2 sm:px-3 py-1 rounded-full">
            {hotel.distance}
          </span>
        </div>

        {/* Hotel name */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a3c2a] mb-3">
          {hotel.name}
        </h3>

        {/* 5 gold stars */}
        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-noor-gold fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
          {hotel.description}
        </p>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {hotel.highlights.map((hl) => (
            <div key={hl} className="flex items-start gap-2">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-noor-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm text-gray-700">{hl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-100">
        <a
          href="https://wa.me/+17869104615?text=Hi%2C%20I%27m%20interested%20in%20the%205-Star%20Haram%20View%20Package"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1a3c2a] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#2a5c3a] transition-colors w-full sm:w-auto justify-center"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Enquire About This Hotel
        </a>
      </div>
    </div>
  </div>
);

export default HaramViewDetail;