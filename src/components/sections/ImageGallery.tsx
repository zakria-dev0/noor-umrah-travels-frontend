import React, { useState } from 'react';

import haramG1 from '../../assets/images/gallery/haram-view/haram-1.jpeg';
import haramG2 from '../../assets/images/gallery/haram-view/haram-2.jpeg';
import haramG3 from '../../assets/images/gallery/haram-view/haram-3.jpeg';
import haramG4 from '../../assets/images/gallery/haram-view/haram-4.jpeg';
import haramG5 from '../../assets/images/gallery/haram-view/haram-5.jpeg';
import haramG6 from '../../assets/images/gallery/haram-view/haram-6.jpeg';
import haramG7 from '../../assets/images/gallery/haram-view/haram-7.jpeg';
import haramG8 from '../../assets/images/gallery/haram-view/haram-8.jpeg';
import haramG9 from '../../assets/images/gallery/haram-view/haram-9.jpeg';
import haramG10 from '../../assets/images/gallery/haram-view/haram-10.jpeg';
import haramG11 from '../../assets/images/gallery/haram-view/haram-11.jpeg';
import haramG12 from '../../assets/images/gallery/haram-view/haram-12.jpeg';
import haramG13 from '../../assets/images/gallery/haram-view/haram-13.jpeg';
import haramG14 from '../../assets/images/gallery/haram-view/haram-14.jpeg';
import haramG15 from '../../assets/images/gallery/haram-view/haram-15.jpeg';
import haramG16 from '../../assets/images/gallery/haram-view/haram-16.jpeg';
import haramG17 from '../../assets/images/gallery/haram-view/haram-17.jpeg';
import haramG18 from '../../assets/images/gallery/haram-view/haram-18.jpeg';
import haramG19 from '../../assets/images/gallery/haram-view/haram-19.jpeg';
import haramG20 from '../../assets/images/gallery/haram-view/haram-20.jpeg';


// Ziyarat
import ziyarat1 from '../../assets/images/gallery/ziyarat/ziyarat-1.jpeg';
import ziyarat2 from '../../assets/images/gallery/ziyarat/ziyarat-2.jpeg';


// Makkah
import makkah1 from '../../assets/images/gallery/makkah/makkah-1.jpeg';
import makkah2 from '../../assets/images/gallery/makkah/makkah-2.jpeg';
import makkah3 from '../../assets/images/gallery/makkah/makkah-3.jpeg';
import makkah4 from '../../assets/images/gallery/makkah/makkah-4.jpeg';
import makkah5 from '../../assets/images/gallery/makkah/makkah-5.jpeg';
import makkah6 from '../../assets/images/gallery/makkah/makkah-6.jpeg';
import makkah7 from '../../assets/images/gallery/makkah/makkah-7.jpeg';
import makkah8 from '../../assets/images/gallery/makkah/makkah-8.jpeg';
import makkah9 from '../../assets/images/gallery/makkah/makkah-9.jpeg';
import makkah10 from '../../assets/images/gallery/makkah/makkah-10.jpeg';
import makkah11 from '../../assets/images/gallery/makkah/makkah-11.jpeg';
import makkah12 from '../../assets/images/gallery/makkah/makkah-12.jpeg';
import makkah13 from '../../assets/images/gallery/makkah/makkah-13.jpeg';
import makkah14 from '../../assets/images/gallery/makkah/makkah-14.jpeg';
import makkah15 from '../../assets/images/gallery/makkah/makkah-15.jpeg';
import makkah16 from '../../assets/images/gallery/makkah/makkah-16.jpeg';
import makkah17 from '../../assets/images/gallery/makkah/makkah-17.jpeg';
import makkah18 from '../../assets/images/gallery/makkah/makkah-18.jpeg';
import makkah19 from '../../assets/images/gallery/makkah/makkah-19.jpeg';
import makkah20 from '../../assets/images/gallery/makkah/makkah-20.jpeg';
import makkah21 from '../../assets/images/gallery/makkah/makkah-21.jpeg';
import makkah22 from '../../assets/images/gallery/makkah/makkah-22.jpeg';
import makkah23 from '../../assets/images/gallery/makkah/makkah-23.jpeg';
import makkah24 from '../../assets/images/gallery/makkah/makkah-24.jpeg';
import makkah25 from '../../assets/images/gallery/makkah/makkah-25.jpeg';

type GalleryCategory = 'All' | 'Haram View' | 'Ziyarat' | 'Makkah';

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'All'>;
}

const galleryImages: GalleryImage[] = [
  { src: haramG1,   alt: 'Haram View 1',  category: 'Haram View' },
  { src: haramG2,   alt: 'Haram View 2',  category: 'Haram View' },
  { src: haramG3,   alt: 'Haram View 3',  category: 'Haram View' },
  { src: haramG4,   alt: 'Haram View 4',  category: 'Haram View' },
  { src: haramG5,   alt: 'Haram View 5',  category: 'Haram View' },
  { src: haramG6,   alt: 'Haram View 6',  category: 'Haram View' },
  { src: haramG7,   alt: 'Haram View 7',  category: 'Haram View' },
  { src: haramG8,   alt: 'Haram View 8',  category: 'Haram View' },
  { src: haramG9,   alt: 'Haram View 9',  category: 'Haram View' },
  { src: haramG10,  alt: 'Haram View 10', category: 'Haram View' },
  { src: haramG11,  alt: 'Haram View 11', category: 'Haram View' },
  { src: haramG12,  alt: 'Haram View 12', category: 'Haram View' },
  { src: haramG13,  alt: 'Haram View 13', category: 'Haram View' },
  { src: haramG14,  alt: 'Haram View 14', category: 'Haram View' },
  { src: haramG15,  alt: 'Haram View 15', category: 'Haram View' },
  { src: haramG16,  alt: 'Haram View 16', category: 'Haram View' },
  { src: haramG17,  alt: 'Haram View 17', category: 'Haram View' },
  { src: haramG18,  alt: 'Haram View 18', category: 'Haram View' },
  { src: haramG19,  alt: 'Haram View 19', category: 'Haram View' },
  { src: haramG20,  alt: 'Haram View 20', category: 'Haram View' },

  { src: ziyarat1,  alt: 'Ziyarat Tour 1', category: 'Ziyarat' },
  { src: ziyarat2,  alt: 'Ziyarat Tour 2', category: 'Ziyarat' },

  { src: makkah1,   alt: 'Makkah 1',  category: 'Makkah' },
  { src: makkah2,   alt: 'Makkah 2',  category: 'Makkah' },
  { src: makkah3,   alt: 'Makkah 3',  category: 'Makkah' },
  { src: makkah4,   alt: 'Makkah 4',  category: 'Makkah' },
  { src: makkah5,   alt: 'Makkah 5',  category: 'Makkah' },
  { src: makkah6,   alt: 'Makkah 6',  category: 'Makkah' },
  { src: makkah7,   alt: 'Makkah 7',  category: 'Makkah' },
  { src: makkah8,   alt: 'Makkah 8',  category: 'Makkah' },
  { src: makkah9,   alt: 'Makkah 9',  category: 'Makkah' },
  { src: makkah10,  alt: 'Makkah 10', category: 'Makkah' },
  { src: makkah11,  alt: 'Makkah 11', category: 'Makkah' },
  { src: makkah12,  alt: 'Makkah 12', category: 'Makkah' },
  { src: makkah13,  alt: 'Makkah 13', category: 'Makkah' },
  { src: makkah14,  alt: 'Makkah 14', category: 'Makkah' },
  { src: makkah15,  alt: 'Makkah 15', category: 'Makkah' },
  { src: makkah16,  alt: 'Makkah 16', category: 'Makkah' },
  { src: makkah17,  alt: 'Makkah 17', category: 'Makkah' },
  { src: makkah18,  alt: 'Makkah 18', category: 'Makkah' },
  { src: makkah19,  alt: 'Makkah 19', category: 'Makkah' },
  { src: makkah20,  alt: 'Makkah 20', category: 'Makkah' },
  { src: makkah21,  alt: 'Makkah 21', category: 'Makkah' },
  { src: makkah22,  alt: 'Makkah 22', category: 'Makkah' },
  { src: makkah23,  alt: 'Makkah 23', category: 'Makkah' },
  { src: makkah24,  alt: 'Makkah 24', category: 'Makkah' },
  { src: makkah25,  alt: 'Makkah 25', category: 'Makkah' },
];

const TABS: GalleryCategory[] = ['All', 'Haram View','Makkah', 'Ziyarat'];
const INITIAL_COUNT = 8;

const Lightbox = ({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) => (
  <div
    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={onClose}
        className="absolute -top-10 right-0 text-white text-sm font-semibold hover:text-noor-gold transition-colors"
      >
        ✕ Close
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
      />
      <p className="text-center text-white/70 text-sm mt-3">{image.alt}</p>
    </div>
  </div>
);

const ImageGallery: React.FC = () => {
 const [activeTab, setActiveTab] = useState<GalleryCategory>('All');
  const [showAll, setShowAll]     = useState(false);
  const [lightbox, setLightbox]   = useState<GalleryImage | null>(null);

  const filtered =
    activeTab === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab);

  const visible       = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore       = filtered.length > INITIAL_COUNT;
  const hiddenCount   = filtered.length - INITIAL_COUNT;

  const handleTabChange = (tab: GalleryCategory) => {
    setActiveTab(tab);
    setShowAll(false);
  };


  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-noor-gold text-xl italic mb-1">Haram Umrah Travels</p>
          <h2 className="text-3xl font-bold text-noor-green">Photo Gallery</h2>
          <div className="w-24 h-0.5 bg-noor-gold/30 mx-auto mt-4" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                activeTab === tab
                  ? 'bg-noor-green text-white border-noor-green'
                  : 'bg-white text-noor-green border-noor-green/30 hover:border-noor-green'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {visible.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl cursor-pointer group aspect-square"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-12">No images in this category yet.</p>
        )}

        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-noor-green text-noor-green text-sm font-semibold hover:bg-noor-green hover:text-white transition-all"
            >
              {showAll ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Show Less
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  Load All Images
                  <span className="bg-noor-gold/20 text-noor-gold text-xs font-bold px-2 py-0.5 rounded-full">
                    +{hiddenCount}
                  </span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
      {lightbox && <Lightbox image={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
};

export default ImageGallery;