// // BlogSection.tsx
// import React from 'react';
// import { ArrowRightIcon } from '../icons/Icons';
// import Carousel from '../ui/Carousel';

// const BlogSection: React.FC = () => {
//   const posts = [
//     { title: 'Umrah Packages from the us: A Complete Guide', excerpt: "If you're searching for Umrah packages from the us, you're probably trying to balance three things: a fair price, hotels you can actually ...", image: 'photo-1529390079861-591de354faf5' },
//     { title: 'How Can You Get a Saudi eVisa from the us? Complete Application Guide', excerpt: "You're sitting at home in Manchester (or maybe London, Birmingham, or Glasgow), planning your Saudi trip with a dozen browser tabs open...", image: 'photo-1600880292203-757bb62b4baf' },
//     { title: 'Umrah Packing List from the us | Complete Checklist', excerpt: "A week or two before Umrah is usually when it hits you: the suitcase is open, you've got a few things laid out... and suddenly you're...", image: 'photo-1564769625905-50e93615e769' },
//     { title: 'Best Hotels Near Masjid al-Haram for us Pilgrims', excerpt: "Choosing the right hotel can make or break your Umrah experience. We break down the best options within walking distance of the Haram...", image: 'photo-1591604129939-f1efa4d9f7fa' },
//     { title: 'Travelling with Children for Umrah: Essential Tips', excerpt: "Planning Umrah with young children requires extra preparation. From flight tips to keeping kids comfortable during Tawaf...", image: 'photo-1537031935093-de2e3648a008' },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-start justify-between mb-10">
//           <div>
//             <h2 className="text-3xl font-bold text-noor-green font-display">Latest from Our Blog</h2>
//             <p className="text-gray-500 mt-2 max-w-md">Guides, tips, and planning advice to help you prepare for Umrah—from packing and hotel choices to common travel questions.</p>
//           </div>
//           <a href="#" className="text-noor-green font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm whitespace-nowrap">
//             View All Posts <ArrowRightIcon className="w-4 h-4" />
//           </a>
//         </div>
//         <Carousel itemsToShow={3}>
//           {posts.map((post, index) => (
//             <div key={index} className="bg-noor-light rounded-2xl overflow-hidden group cursor-pointer h-full">
//               <div className="h-52 overflow-hidden">
//                 <img src={`https://images.unsplash.com/${post.image}?w=400&q=80`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <div className="p-6">
//                 <h3 className="font-bold text-noor-green mb-2 line-clamp-2">{post.title}</h3>
//                 <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
//                 <a href="#" className="text-noor-green font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm">
//                   Read More <ArrowRightIcon className="w-3 h-3" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default BlogSection; 

// BlogSection.tsx
import React from 'react';
import { ArrowRightIcon } from '../icons/Icons';
import Carousel from '../ui/Carousel';

// Import images from assets folder
import blogImage1 from '../../assets/images/packages/5-3_files/b-1.jpg'; // Replace with actual path
import blogImage2 from '../../assets/images/packages/5-3_files/b-2.jpg';
import blogImage3 from '../../assets/images/packages/5-3_files/b-3.jpg'; // Replace with actual path
import blogImage4 from '../../assets/images/packages/5-3_files/b-4.jpg'; // Replace with actual path
import blogImage5 from '../../assets/images/packages/5-3_files/m-5.webp'; // Replace with actual path

const BlogSection: React.FC = () => {
  const posts = [
    { 
      title: 'Umrah Packages from the us: A Complete Guide', 
      excerpt: "If you're searching for Umrah packages from the us, you're probably trying to balance three things: a fair price, hotels you can actually ...", 
      image: blogImage1 
    },
    { 
      title: 'How Can You Get a Saudi eVisa from the us? Complete Application Guide', 
      excerpt: "You're sitting at home in Manchester (or maybe London, Birmingham, or Glasgow), planning your Saudi trip with a dozen browser tabs open...", 
      image: blogImage2 
    },
    { 
      title: 'Umrah Packing List from the us | Complete Checklist', 
      excerpt: "A week or two before Umrah is usually when it hits you: the suitcase is open, you've got a few things laid out... and suddenly you're...", 
      image: blogImage3 
    },
    { 
      title: 'Best Hotels Near Masjid al-Haram for us Pilgrims', 
      excerpt: "Choosing the right hotel can make or break your Umrah experience. We break down the best options within walking distance of the Haram...", 
      image: blogImage4 
    },
    { 
      title: 'Travelling with Children for Umrah: Essential Tips', 
      excerpt: "Planning Umrah with young children requires extra preparation. From flight tips to keeping kids comfortable during Tawaf...", 
      image: blogImage5 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-noor-green font-display">Latest from Our Blog</h2>
            <p className="text-gray-500 mt-2 max-w-md">Guides, tips, and planning advice to help you prepare for Umrah—from packing and hotel choices to common travel questions.</p>
          </div>
          <a href="#" className="text-noor-green font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm whitespace-nowrap">
            View All Posts <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
        <Carousel itemsToShow={3}>
          {posts.map((post, index) => (
            <div key={index} className="bg-noor-light rounded-2xl overflow-hidden group cursor-pointer h-full">
              <div className="h-52 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-noor-green mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <a href="#" className="text-noor-green font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm">
                  Read More <ArrowRightIcon className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default BlogSection;