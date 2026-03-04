 // KaabaViewDetail.tsx
import React, { useState } from 'react';

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

// ── Hotel Data ────────────────────────────────────────────────
const makkahHotels: Hotel[] = [
  {
    name: 'Zamzam Pullman Makkah',
    location: 'Makkah',
    tag: 'Abraj Al-Bait Complex',
    distance: '50m from Masjid al-Haram',
    image: pullmanMakkahImg,
    description:
      'Part of the iconic Abraj Al-Bait Towers, the Zamzam Pullman Makkah stands just 50 metres from Masjid al-Haram. With 1,595 elegantly furnished rooms and suites offering sweeping Kaaba views, guests enjoy world-class dining, a full-service spa, fitness centre, and 24-hour concierge — all steps from the Grand Mosque.',
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
      'Towering 76 storeys above Makkah inside the world-famous Clock Tower, the Fairmont is only 100 metres from Masjid al-Haram. Its 858 rooms and suites — many with direct Kaaba or Holy Mosque views — offer a rooftop pool, award-winning restaurants, a dedicated Zamzam lounge, and round-the-clock guest services.',
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
      'Occupying the upper floors of the Clock Tower, the Raffles Makkah Palace represents the pinnacle of luxury in the holy city. Its 213 palatial suites — each with a private butler — offer unobstructed Kaaba views and interiors inspired by traditional Islamic design, alongside a 2,000 m² spa and a private majlis lounge.',
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

// ── Main Component ────────────────────────────────────────────
const KaabaViewDetail: React.FC = () => {
  const [selectedMakkah, setSelectedMakkah]   = useState(0);
  const [selectedMadinah, setSelectedMadinah] = useState(0);

  return (
    <div className="bg-white">

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
        <div className="border-t border-dashed border-gray-200" />

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