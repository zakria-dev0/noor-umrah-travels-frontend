 // KaabaViewDetail.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
      'Part of the iconic Abraj Al-Bait Towers, the Zamzam Pullman Makkah stands just 50 metres from Masjid al-Haram. With 1,595 elegantly furnished rooms and suites offering sweeping Kaaba views, guests enjoy world-class dining, a full-service spa, fitness centre, and 24-hour concierge all steps from the Grand Mosque.',
    highlights: [
      '50 m from Masjid al-Haram',
      'Direct Kaaba view rooms available',
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
      'Towering 76 storeys above Makkah inside the world-famous Clock Tower, the Fairmont is only 100 metres from Masjid al-Haram. Its 858 rooms and suites, many with direct Kaaba or Holy Mosque views offer a rooftop pool, award-winning restaurants, a dedicated Zamzam lounge, and round-the-clock guest services.',
    highlights: [
      '100 m from Masjid al-Haram',
      'Kaaba & Haram view rooms',
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
      "Located in the prestigious Jabal Omar development, the Conrad Makkah offers sophisticated luxury with 1,447 spacious rooms featuring floor-to-ceiling Kaaba panoramas. Guests benefit from Conrad's signature personal concierge, multiple gourmet restaurants, a rooftop pool, fully equipped health club, and exclusive pilgrimage assistance services.",
    highlights: [
      '400 m from Masjid al-Haram',
      'Panoramic Kaaba-view rooms',
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
      'Occupying the upper floors of the Clock Tower, the Raffles Makkah Palace represents the pinnacle of luxury in the holy city. Its 213 palatial suites each with a private butler offer unobstructed Kaaba views and interiors inspired by traditional Islamic design, alongside a 2,000 m² spa and a private majlis lounge.',
    highlights: [
      'Steps from Masjid al-Haram',
      'All-suite hotel with private butlers',
      'Unobstructed Kaaba-view suites',
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



const kaabaViewContent = {
 "5": {
  introSection: {
    title: "5 Star Kaaba View Umrah Package 5 Nights for Just $990",

    intro:
      "Choose a Premium Short Umrah Package with Kaaba View for a Peaceful Pilgrimage. Enjoy the Affordable Kaaba View Umrah Package with top-tier accommodation, prime location near the Kaaba, and a deeply enriching spiritual experience.",

    benefitsTitle:
      "Short Umrah Package with Kaaba View for Peaceful 5-star Stay",

    benefitsDescription:
      "Experience a spiritually uplifting journey with our 5 Star Kaaba View Umrah Package 5 Nights, designed for pilgrims who seek comfort, convenience, and proximity to the Holy Kaaba. This exclusive 5 Night Umrah Package USA combines luxury accommodation, seamless travel arrangements, and essential services to ensure a peaceful and meaningful Umrah experience. It ensures that every moment of your pilgrimage remains focused on worship, ease, and spiritual connection.",

    highlights: [
      "5-night stay in a premium 5-star Kaaba-view hotel.",
      "Daily breakfast with high-quality dining options.",
      "Private airport pickup and drop-off service.",
      "Guided assistance for Umrah rituals and procedures.",
      "Walking distance access to Masjid al-Haram.",
      "24/7 customer support and on-ground assistance."
    ]
  },

  whyBookSection: {
    title:
      "5 Night Umrah Package USA for Peaceful Pilgrimage Experience",

    description:
      "Our short Umrah Package with Kaaba View is tailored for travelers seeking a short yet complete spiritual journey from the United States. It offers a perfect balance of affordability, comfort, and premium services, ensuring a smooth pilgrimage experience without stress. It is ideal for families, professionals, and first-time Umrah travelers. This 5 Star Kaaba View Umrah Package 5 Nights is designed to eliminate travel complications while maximizing your spiritual experience in Makkah with comfort and ease.",

    benefits: [
      "Direct support for pilgrims traveling from the USA.",
      "Short 5-night stay ideal for busy schedules.",
      "Luxury 5-star accommodation with Kaaba view.",
      "Hassle-free visa processing assistance included.",
      "Convenient flight coordination options available.",
      "Perfect for first-time and repeat Umrah travelers."
    ]
  },

  closingSection: {
    title:
      "Trusted Choice for Affordable Kaaba View Umrah Package Travel",

    description:
      "The 5 Night Umrah Package USA offers a rare opportunity to stay close to the Holy Kaaba without exceeding your budget. Designed for pilgrims who value both luxury and affordability, this Short Umrah Package with Kaaba View ensures premium services, spiritual comfort, and unforgettable views of Masjid al-Haram at an exceptional price of just $990. Choose us for a spiritually enriching Umrah experience that blends affordability, luxury, and devotion in the heart of Makkah.",

    buttonText: "Contact Us",

    benefits: [
      "Best price guarantee at only $990 for 5 nights.",
      "Premium 5-star Kaaba view hotel accommodation.",
      "Trusted and experienced Umrah service provider.",
      "Transparent pricing with no hidden charges.",
      "Personalized support throughout your journey.",
      "High-quality service focused on pilgrim satisfaction."
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

    bottomTitle: "Affordable Kaaba View Umrah Experience",

    bottomDescription:
      "Enjoy premium accommodation, spiritual comfort, and exceptional value with our 5 Night Umrah Package USA."
  }
},

  "7": {
  introSection: {
    title: "5 Star Kaaba View Umrah Package 7 Nights for Just $1190",

    intro:
      "Experience Spiritual Comfort with Our Luxury Umrah Package 7 Days USA. Stay steps away from the Holy Kaaba with our premium Haram Facing Hotel Umrah Package, combining luxury, convenience, and unforgettable devotion.",

    benefitsTitle:
      "7 Night Umrah Package with Kaaba View– Comfort Meets Spiritual Excellence",

    benefitsDescription:
      "Our 5 Star Kaaba View Umrah Package 7 Nights offers the perfect balance of comfort and devotion. Designed for pilgrims who want a peaceful and convenient stay, this package places you close to the Holy Kaaba while ensuring premium hospitality. Every detail is managed to help you focus on your worship without distractions.",

    highlights: [
      "7-night stay in a 5-star hotel overlooking the Kaaba.",
      "Daily breakfast and selected meals included.",
      "Round-trip airfare with reputable international airlines.",
      "Comfortable ground transport with air-conditioned vehicles.",
      "Professional guidance for Umrah rituals and ziyarat tours.",
      "24/7 customer support throughout your journey."
    ]
  },

  whyBookSection: {
    title:
      "Haram Facing Hotel Umrah Package– Stay Closest to the Holy Haram",

    description:
      "The 7 Night Umrah Package with Kaaba View is designed for those who want unmatched convenience and proximity. Staying just steps away from Masjid al-Haram allows you to attend prayers effortlessly and spend more time in worship. This luxury Umrah Package 7 Days USA is the perfect choice for families, elderly pilgrims, and anyone seeking ease during their journey.",

    benefits: [
      "Direct or partial Kaaba view rooms for a unique experience.",
      "Walking distance access to Masjid al-Haram entrances.",
      "Save time and energy with no long commutes.",
      "Access to premium hotel facilities and services.",
      "Safe, secure, and family-friendly accommodation.",
      "Perfect for maximizing time in prayers and Tawaf."
    ]
  },

  closingSection: {
    title:
      "Premium 5 Star Kaaba View Umrah Package– Exclusive Luxury Within Reach",

    description:
      "Our Haram Facing Hotel Umrah Package is tailored for travelers seeking a high-end experience at a reasonable price. Combining quality services with affordability, this 5 Star Kaaba View Umrah Package 7 Nights ensures a smooth and memorable journey. From travel arrangements to accommodation, everything is handled professionally for a stress-free Umrah experience.",

    buttonText: "Contact Us",

    benefits: [
      "Budget-friendly pricing with no hidden costs.",
      "Flexible travel options to suit your schedule.",
      "Visa processing assistance and documentation support.",
      "Well-planned itinerary for a smooth journey.",
      "Dedicated customer support before and during travel.",
      "Perfect mix of luxury, comfort, and convenience."
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

    bottomTitle: "Luxury Kaaba View Stay Near Haram",

    bottomDescription:
      "Enjoy premium hospitality, unmatched convenience, and breathtaking Kaaba views throughout your Umrah journey."
  }
},

  "10": {
  introSection: {
    title: "5 Star Kaaba View Umrah Package 10 Nights for Just $1390",

    intro:
      "Experience the Ultimate Comfort with Our VIP Kaaba View Umrah Package. Embark on a spiritual journey like no other with our 10 Night Luxury Umrah Package, offering premium accommodations and exclusive Kaaba views.",

    benefitsTitle:
      "VIP Kaaba View Umrah Package – Luxury and Comfort at Its Best",

    benefitsDescription:
      "Experience unmatched luxury with the 5 Star Kaaba View Umrah Package 10 Nights, designed for pilgrims seeking both spiritual fulfillment and premium comfort. Stay in top-tier 5-star hotels just steps from the Haram, enjoy exceptional amenities, and let our dedicated team manage every detail. Every aspect, from check-in to departure, is handled with care, allowing you to focus solely on your prayers and reflection. This 10 Night Luxury Umrah Package ensures a smooth, stress-free journey tailored for convenience, comfort, and an unforgettable Umrah experience.",

    highlights: [
      "5-star hotels with modern facilities and comfort.",
      "Exclusive Kaaba-view rooms for a serene experience.",
      "Close proximity to Masjid al-Haram & Masjid ul Nabwi for easy access.",
      "VIP services, including private transport and guided rituals.",
      "Gourmet halal dining with diverse options.",
      "24/7 concierge service for personalized assistance."
    ]
  },

  whyBookSection: {
    title:
      "10 Night Luxury Umrah Package – Spiritual Bliss and Convenience",

    description:
      "Our Extended Stay Umrah Package USA combines devotion with exceptional comfort. Enjoy well-planned itineraries, seamless travel arrangements, close proximity to Haram, and exclusive conveniences designed to maximize your spiritual experience. With our attentive staff and premium services, your pilgrimage becomes a memorable and spiritually fulfilling journey. This VIP Kaaba View Umrah Package caters to every need, making it perfect for families, solo travelers, or groups seeking a luxurious and spiritually rewarding pilgrimage.",

    benefits: [
      "Priority check-in and hotel services for a smooth accommodation.",
      "Exclusive VIP Kaaba view rooms for an unforgettable stay.",
      "Round-trip airport transfers and luxury transportation.",
      "Complimentary gifts and Umrah essentials for travelers.",
      "Hassle-free Umrah visa processing included.",
      "Guided excursions to historical Islamic sites."
    ]
  },

  closingSection: {
    title:
      "Extended Stay Umrah Package USA – Extra Comfort & Spiritual Flexibility",

    description:
      "Enhance your pilgrimage with our 5 Star Kaaba View Umrah Package 10 Nights, designed for travelers who wish to spend more time in the holy cities. This package allows for a longer, more relaxed journey, giving you extra time to perform Umrah rituals, explore historical Islamic sites, and enjoy the spiritual atmosphere at your own pace. With premium 5-star accommodations, private transfers, and personalized assistance, every aspect of your extended stay is handled with care. Ideal for families, seniors, or anyone seeking a deeper connection with their faith, this package ensures comfort, convenience, and spiritual enrichment throughout your journey.",

    buttonText: "Contact Us",

    benefits: [
      "Flexible stay options to extend your pilgrimage.",
      "Additional guided tours of Makkah and Madinah.",
      "Private prayer spaces in hotels for convenience.",
      "Extended hotel amenities, including spa and relaxation zones.",
      "Special family-friendly services and childcare support.",
      "Personalized itinerary planning for maximum spiritual benefit."
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
      "A luxurious extended Umrah journey combining premium accommodation, spiritual comfort, and unforgettable views of the Holy Kaaba."
  }
}
};

const kaabaViewFaq = {
  5: {
    title: "Frequently Asked Questions",
    subtitle:
      "Find answers about our 5 Star Kaaba View Umrah Package 5 Nights.",

    faqs: [
      {
        question:
          "What is included in the 5 Star Kaaba View Umrah Package 5 Nights?",
        answer:
          "This package includes 5 nights' stay in a 5-star hotel with Kaaba view, visa assistance, airport transfers, breakfast, and basic Umrah guidance. It is designed to provide comfort, convenience, and a spiritually fulfilling experience close to Masjid al-Haram."
      },
      {
        question:
          "Is this Short Umrah Package with Kaaba View suitable for families?",
        answer:
          "Yes, this Short Umrah Package with Kaaba View is ideal for families, couples, and individuals. The accommodation is comfortable, safe, and located near the Holy Kaaba, making it easy for all age groups to perform Umrah with ease."
      },
      {
        question: "Does the package include flights from the USA?",
        answer:
          "The 5 Night Umrah Package USA may or may not include flights depending on the selected option. We offer flexible packages where travelers can choose land-only or full packages including international flights from the USA."
      },
      {
        question: "How close is the hotel to the Kaaba?",
        answer:
          "The hotel included in this Affordable Kaaba View Umrah Package is located within walking distance of Masjid al-Haram, offering direct or partial views of the Kaaba, ensuring easy access for prayers and rituals."
      },
      {
        question: "Can I customize the Umrah package?",
        answer:
          "Yes, customization options are available. You can upgrade hotel category, extend your stay, or add extra services based on your preferences to make your Umrah journey more comfortable and personalized."
      },
      {
        question:
          "How can I book this Affordable Kaaba View Umrah Package?",
        answer:
          "You can easily book the package by contacting our travel consultants online or via phone. Our team will guide you through the booking process, visa requirements, and travel arrangements step by step."
      }
    ]
  },

  7: {
    title: "Frequently Asked Questions",
    subtitle:
      "Find answers about our 5 Star Kaaba View Umrah Package 7 Nights.",

    faqs: [
      {
        question:
          "What is included in the 5 Star Kaaba View Umrah Package 7 Nights?",
        answer:
          "This package typically includes 5-star accommodation with Kaaba view, 7-night stay, daily breakfast, visa assistance, ground transport, and basic Umrah guidance. Some packages may also include airfare, depending on availability."
      },
      {
        question:
          "Is this Luxury Umrah Package 7 Days USA suitable for families?",
        answer:
          "Yes, it is ideal for families, couples, and elderly pilgrims. The close proximity to Masjid al-Haram ensures easy access, reducing walking distance and making it comfortable for all age groups."
      },
      {
        question: "How close is the hotel to the Haram?",
        answer:
          "The hotel is located just steps away from Masjid al-Haram, offering direct or partial views of the Kaaba. This allows quick access to prayers and Tawaf without long commutes."
      },
      {
        question: "Are there any hidden charges in this package?",
        answer:
          "No, the 7 Night Umrah Package with Kaaba View is designed to be transparent and budget-friendly. All major services are included upfront, but optional add-ons like extra meals or upgrades may cost extra."
      },
      {
        question: "Do you provide visa processing assistance?",
        answer:
          "Yes, full support for Umrah visa processing and documentation is included to ensure a smooth and hassle-free travel experience."
      },
      {
        question:
          "How can I book this Haram Facing Hotel Umrah Package?",
        answer:
          "You can book by contacting our team directly, filling out the inquiry form, or requesting a callback. Early booking is recommended to secure the best rates and availability."
      }
    ]
  },

  10: {
    title: "Frequently Asked Questions",
    subtitle:
      "Find answers about our 5 Star Kaaba View Umrah Package 10 Nights.",

    faqs: [
      {
        question:
          "What does the 5 Star Kaaba View Umrah Package 10 Nights include?",
        answer:
          "This package includes premium 5-star Kaaba-view hotel accommodations, daily guided Umrah services, private transportation, halal meals, and 24/7 assistance to ensure a comfortable and spiritually fulfilling pilgrimage."
      },
      {
        question: "How close are the hotels to Masjid al-Haram?",
        answer:
          "Our carefully selected hotels are just steps away from Haram, allowing easy access for prayers and rituals without long commutes."
      },
      {
        question: "Is visa assistance provided?",
        answer:
          "Yes, hassle-free Umrah visa processing is included, making your journey smooth from start to finish."
      },
      {
        question:
          "Can families and seniors travel comfortably with this package?",
        answer:
          "Absolutely. The package caters to all travelers with family-friendly amenities, flexible schedules, and dedicated support for seniors or those needing extra assistance."
      },
      {
        question: "Are meals included in the package?",
        answer:
          "Yes, daily halal meals are provided, featuring diverse and nutritious options to keep you energized throughout your pilgrimage."
      },
      {
        question:
          "What makes this package different from standard Umrah packages?",
        answer:
          "With exclusive Kaaba views, 5-star luxury accommodations, and personalized services, this package combines devotion with comfort and convenience for a truly memorable experience."
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
const KaabaViewDetail: React.FC = () => {
  const [selectedMakkah, setSelectedMakkah]   = useState(0);
  const [selectedMadinah, setSelectedMadinah] = useState(0);

  
  const { nights } = useParams<{ nights: string }>();

  const packageNights = parseInt(nights || '', 10);
  
  const pageContent =
    kaabaViewContent[packageNights as 5 | 7 | 10] ||
    kaabaViewContent[5];
  
  console.log("nights", packageNights);
  console.log("pageContent", pageContent);
  
    const faqContent =  kaabaViewFaq[packageNights as 5 | 7 | 10] ||
    kaabaViewFaq[5];
  const kaabaMeta: Record<number, { title: string; description: string }> = {
    10: {
      title: '5 Star Kaaba View Umrah Package 10 Nights | VIP USA Offer',
      description: 'Book a 5 Star Kaaba View Umrah Package 10 Nights. Enjoy a 10 Night Luxury Umrah Package, VIP Kaaba View Umrah Package, and Extended Stay Umrah Package USA.',
    },
    7: {
      title: '5 Star Kaaba View Umrah Package 7 Nights | Luxury Deal USA',
      description: 'Book a 5 Star Kaaba View Umrah Package 7 Nights. Enjoy a 7 Night Umrah Package with Kaaba View, Luxury Umrah Package 7 Days USA, and Haram Facing Hotel Umrah Package.',
    },
    5: {
      title: '5 Star Kaaba View Umrah Package 5 Nights | Best Deal $990',
      description: 'Book a 5 Star Kaaba View Umrah Package 5 Nights from USA. Enjoy a Short Umrah Package with Kaaba View and an Affordable Kaaba View Umrah Package.',
    },
  };

  const meta = kaabaMeta[packageNights] || kaabaMeta[5];

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
          href="https://wa.me/+17869104615?text=Hi%2C%20I%27m%20interested%20in%20the%205-Star%20Kaaba%20View%20Package"
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

export default KaabaViewDetail;