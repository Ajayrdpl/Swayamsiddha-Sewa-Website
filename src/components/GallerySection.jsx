// // import React from "react";
// // import { motion } from "framer-motion";
// // import { ArrowUpRight, Images } from "lucide-react";

// // const galleryImages = [
// //   {
// //     image:
// //       "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=90",
// //     title: "Literary Events",
// //     size: "large",
// //   },
// //   {
// //     image:
// //       "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=90",
// //     title: "Meaningful Conversations",
// //     size: "small",
// //   },
// //   {
// //     image:
// //       "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=90",
// //     title: "Cultural Gatherings",
// //     size: "small",
// //   },
// //   {
// //     image:
// //       "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=90",
// //     title: "Knowledge & Learning",
// //     size: "small",
// //   },
// //   {
// //     image:
// //       "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1000&q=90",
// //     title: "Authors & Speakers",
// //     size: "small",
// //   },
// // ];

// // const fadeUp = {
// //   hidden: {
// //     opacity: 0,
// //     y: 40,
// //   },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       duration: 0.7,
// //       ease: "easeOut",
// //     },
// //   },
// // };

// // const GallerySection = () => {
// //   return (
// //     <section
// //       id="gallery"
// //       className="relative overflow-hidden bg-[#071E3D] py-24"
// //     >
// //       {/* Background decoration */}
// //       <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#123E73] opacity-40 blur-3xl" />

// //       <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4A72C] opacity-10 blur-3xl" />

// //       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

// //         {/* Heading */}
// //         <motion.div
// //           variants={fadeUp}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.2 }}
// //           className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
// //         >
// //           <div className="max-w-3xl">
// //             <div className="mb-5 flex items-center gap-3">
// //               <span className="h-px w-10 bg-[#D4A72C]" />

// //               <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A72C]">
// //                 Moments & Memories
// //               </span>
// //             </div>

// //             <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
// //               A Glimpse Into
// //               <span className="block text-[#D4A72C]">
// //                 Our Literary World.
// //               </span>
// //             </h2>

// //             <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
// //               Explore moments from our literary gatherings, conversations,
// //               cultural programs and inspiring events.
// //             </p>
// //           </div>

// //           <button className="group flex w-fit items-center gap-3 rounded-full border border-[#D4A72C]/60 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#D4A72C] hover:text-[#071E3D]">
// //             View Full Gallery

// //             <ArrowUpRight
// //               size={18}
// //               className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
// //             />
// //           </button>
// //         </motion.div>

// //         {/* Gallery */}
// //         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

// //           {/* Large Image */}
// //           <motion.div
// //             variants={fadeUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="group relative overflow-hidden rounded-[2rem] md:col-span-2 md:row-span-2"
// //           >
// //             <img
// //               src={galleryImages[0].image}
// //               alt={galleryImages[0].title}
// //               className="h-full min-h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
// //             />

// //             <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D] via-transparent to-transparent opacity-90" />

// //             <div className="absolute bottom-7 left-7">
// //               <span className="mb-3 inline-block rounded-full bg-[#D4A72C] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#071E3D]">
// //                 Featured
// //               </span>

// //               <h3 className="text-2xl font-bold text-white">
// //                 Literary Events
// //               </h3>
// //             </div>

// //             <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#123E73] transition duration-300 group-hover:scale-110">
// //               <ArrowUpRight size={20} />
// //             </div>
// //           </motion.div>

// //           {/* Small Images */}
// //           {galleryImages.slice(1).map((item, index) => (
// //             <motion.div
// //               key={item.title}
// //               variants={fadeUp}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               transition={{
// //                 delay: index * 0.1,
// //               }}
// //               className="group relative min-h-[240px] overflow-hidden rounded-[1.5rem]"
// //             >
// //               <img
// //                 src={item.image}
// //                 alt={item.title}
// //                 className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
// //               />

// //               <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D] via-black/10 to-transparent" />

// //               <div className="absolute bottom-5 left-5 right-5">
// //                 <h3 className="text-lg font-bold text-white">
// //                   {item.title}
// //                 </h3>
// //               </div>

// //               <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#123E73] opacity-0 transition duration-300 group-hover:opacity-100">
// //                 <ArrowUpRight size={17} />
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Bottom CTA */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[1.5rem] border border-white/10 bg-[#123E73]/60 px-7 py-6 backdrop-blur-md md:flex-row"
// //         >
// //           <div className="flex items-center gap-4">
// //             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A72C]">
// //               <Images size={21} className="text-[#071E3D]" />
// //             </div>

// //             <div>
// //               <p className="font-semibold text-white">
// //                 More Moments. More Stories.
// //               </p>

// //               <p className="text-sm text-slate-400">
// //                 Discover the journey of SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN.
// //               </p>
// //             </div>
// //           </div>

// //           <a
// //             href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
// //             target="_blank"
// //             rel="noreferrer"
// //             className="rounded-full bg-[#D4A72C] px-6 py-3 text-sm font-bold text-[#071E3D] transition hover:scale-105"
// //           >
// //             Explore More
// //           </a>
// //         </motion.div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default GallerySection;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Images,
//   Play,
//   SquarePlay,
// } from "lucide-react";

// const shorts = [
//   {
//     image: "/shot-1.png",
//     title: "Literary & Cultural Moments",
//     date: "YouTube Shorts",
//   },
//   {
//     image: "/shot-2.png",
//     title: "Voices & Conversations",
//     date: "YouTube Shorts",
//   },
//   {
//     image: "/shot-3.png",
//     title: "Culture & Creativity",
//     date: "YouTube Shorts",
//   },
//   {
//     image: "/shot-4.png",
//     title: "Literary Expressions",
//     date: "YouTube Shorts",
//   },
//   {
//     image: "/shot-5.png",
//     title: "Sahityik Gathering",
//     date: "YouTube Shorts",
//   },
// ];

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//     },
//   },
// };

// const GallerySection = () => {
//   return (
//     <section
//       id="gallery"
//       className="relative overflow-hidden bg-[#071E3D] py-24"
//     >
//       {/* Background Glow */}
//       <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#123E73] opacity-40 blur-3xl" />

//       <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#D4A72C] opacity-10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

//         {/* ================= HEADER ================= */}

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mb-14"
//         >
//           <div className="mb-5 flex items-center gap-3">
//             <span className="h-px w-10 bg-[#D4A72C]" />

//             <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A72C]">
//               Moments & Memories
//             </span>
//           </div>

//           <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

//             <div>
//               <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
//                 A Glimpse Into
//                 <span className="block text-[#D4A72C]">
//                   Our Literary World.
//                 </span>
//               </h2>

//               <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
//                 Explore moments from our literary gatherings, cultural
//                 programs, conversations and creative expressions.
//               </p>
//             </div>

//             <a
//               href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
//               target="_blank"
//               rel="noreferrer"
//               className="group flex w-fit items-center gap-3 rounded-full border border-[#D4A72C]/60 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#D4A72C] hover:text-[#071E3D]"
//             >
//               <SquarePlay size={19} />

//               Visit YouTube

//               <ArrowUpRight
//                 size={18}
//                 className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </a>

//           </div>
//         </motion.div>


//         {/* ================= EVENT GALLERY ================= */}

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <div className="mb-7 flex items-center gap-4">
//             <Images className="text-[#D4A72C]" size={23} />

//             <h3 className="text-2xl font-bold text-white">
//               Event Moments
//             </h3>

//             <div className="h-px flex-1 bg-white/10" />
//           </div>


//           <div className="grid gap-5 md:grid-cols-2">

//             {/* Main Image */}
//             <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
//               <img
//                 src="/img3.png"
//                 alt="Literary event"
//                 className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D] via-transparent to-transparent" />

//               <div className="absolute bottom-7 left-7">
//                 <span className="rounded-full bg-[#D4A72C] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#071E3D]">
//                   Featured
//                 </span>

//                 <h3 className="mt-3 text-2xl font-bold text-white">
//                   Literary Events
//                 </h3>
//               </div>

//               <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#123E73] transition group-hover:scale-110">
//                 <ArrowUpRight size={20} />
//               </div>
//             </div>


//             {/* Second Image */}
//             <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
//               <img
//                 src="/img2.png"
//                 alt="Literary conversation"
//                 className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D] via-transparent to-transparent" />

//               <div className="absolute bottom-7 left-7">
//                 <span className="rounded-full bg-[#123E73] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
//                   Conversations
//                 </span>

//                 <h3 className="mt-3 text-2xl font-bold text-white">
//                   Meaningful Conversations
//                 </h3>
//               </div>

//               <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#123E73] transition group-hover:scale-110">
//                 <ArrowUpRight size={20} />
//               </div>
//             </div>

//           </div>
//         </motion.div>


//         {/* ================= YOUTUBE SHORTS ================= */}

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mt-20"
//         >

//           {/* Shorts Heading */}

//           <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

//             <div>
//               <div className="mb-3 flex items-center gap-3">
//                 <SquarePlay
//                   size={23}
//                   className="text-[#D4A72C]"
//                 />

//                 <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A72C]">
//                   YouTube Shorts
//                 </span>
//               </div>

//               <h3 className="text-3xl font-bold text-white md:text-4xl">
//                 Quick Stories.
//                 <span className="text-[#D4A72C]">
//                   {" "}Lasting Impressions.
//                 </span>
//               </h3>
//             </div>


//             <a
//               href="https://www.youtube.com/@swayamsiddhasahityiksansthan/shorts"
//               target="_blank"
//               rel="noreferrer"
//               className="group flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-[#D4A72C]"
//             >
//               View All Shorts

//               <ArrowUpRight
//                 size={17}
//                 className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </a>

//           </div>


//           {/* Shorts Cards */}

//           <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

//             {shorts.map((short, index) => (

//               <motion.a
//                 key={short.title}
//                 href="https://www.youtube.com/@swayamsiddhasahityiksansthan/shorts"
//                 target="_blank"
//                 rel="noreferrer"
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   delay: index * 0.1,
//                   duration: 0.5,
//                 }}
//                 whileHover={{
//                   y: -8,
//                 }}
//                 className="group relative overflow-hidden rounded-[1.3rem] bg-[#123E73]"
//               >

//                 {/* Vertical Image */}

//                 <div className="relative aspect-[9/16] overflow-hidden">

//                   <img
//                     src={short.image}
//                     alt={short.title}
//                     className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                   />

//                   {/* Overlay */}

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />


//                   {/* Shorts Badge */}

//                   <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
//                     <SquarePlay size={12} />
//                     Shorts
//                   </div>


//                   {/* Play */}

//                   <div className="absolute inset-0 flex items-center justify-center">

//                     <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#123E73] shadow-xl transition duration-300 group-hover:scale-110">
//                       <Play
//                         size={18}
//                         fill="currentColor"
//                         className="ml-0.5"
//                       />
//                     </div>

//                   </div>


//                   {/* Text */}

//                   <div className="absolute bottom-0 left-0 right-0 p-4">

//                     <p className="text-xs font-medium text-[#D4A72C]">
//                       {short.date}
//                     </p>

//                     <h4 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-white">
//                       {short.title}
//                     </h4>

//                   </div>

//                 </div>

//               </motion.a>

//             ))}

//           </div>

//         </motion.div>


//         {/* ================= BOTTOM CTA ================= */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-[#123E73]/60 px-7 py-6 backdrop-blur-md md:flex-row"
//         >

//           <div>
//             <p className="font-semibold text-white">
//               More stories. More voices. More literature.
//             </p>

//             <p className="mt-1 text-sm text-slate-400">
//               Follow SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN on YouTube.
//             </p>
//           </div>

//           <a
//             href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-full bg-[#D4A72C] px-6 py-3 text-sm font-bold text-[#071E3D] transition hover:scale-105"
//           >
//             Explore Channel
//           </a>

//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default GallerySection;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Images,
  Play,
  SquarePlay,
  X,
} from "lucide-react";

const PATRA_PARICHARCHA = "‘स्मृति में रचे-बसे अद्भुत पत्र’ एवं ‘चयनित पत्र पुष्प’ पर परिचर्चा";

const photos = [
  {
    image: "/gallery/shikshak-diwas-2026-01.jpeg",
    caption: "शिक्षक-दिवस समारोह 2026 — शिक्षक-गौरव-सम्मान",
  },
  { image: "/gallery/patra-paricharcha-01.jpeg", caption: PATRA_PARICHARCHA },
  { image: "/gallery/patra-paricharcha-02.jpeg", caption: PATRA_PARICHARCHA },
  { image: "/gallery/patra-paricharcha-03.jpeg", caption: PATRA_PARICHARCHA },
  { image: "/gallery/patra-paricharcha-04.jpeg", caption: PATRA_PARICHARCHA },
  { image: "/gallery/patra-paricharcha-05.jpeg", caption: PATRA_PARICHARCHA },
  { image: "/gallery/patra-paricharcha-06.jpeg", caption: PATRA_PARICHARCHA },
  { image: "/gallery/patra-paricharcha-07.jpeg", caption: PATRA_PARICHARCHA },
  { image: "/gallery/patra-paricharcha-08.jpeg", caption: PATRA_PARICHARCHA },
  { image: "/gallery/sansthan-01.jpeg", caption: "स्वयं सिद्धा साहित्यिक संस्थान" },
];

const shorts = [
  {
    image: "/shot-1.png",
    title: "साहित्यिक एवं सांस्कृतिक झलकियाँ",
    date: "यूट्यूब शॉर्ट्स",
  },
  {
    image: "/shot-2.png",
    title: "आवाज़ें एवं संवाद",
    date: "यूट्यूब शॉर्ट्स",
  },
  {
    image: "/shot-3.png",
    title: "संस्कृति एवं रचनात्मकता",
    date: "यूट्यूब शॉर्ट्स",
  },
  {
    image: "/shot-4.png",
    title: "साहित्यिक अभिव्यक्तियाँ",
    date: "यूट्यूब शॉर्ट्स",
  },
  {
    image: "/shot-5.png",
    title: "साहित्यिक समागम",
    date: "यूट्यूब शॉर्ट्स",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const GallerySection = ({ showPhotos = false }) => {
  const [activePhoto, setActivePhoto] = useState(null);

  const showPhoto = (step) =>
    setActivePhoto((current) => (current + step + photos.length) % photos.length);

  useEffect(() => {
    if (activePhoto === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActivePhoto(null);
      if (e.key === "ArrowRight") showPhoto(1);
      if (e.key === "ArrowLeft") showPhoto(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activePhoto]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#071E3D] py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#123E73] opacity-40 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#D4A72C] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4A72C]" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A72C]">
              Memories & Glimpses
            </span>
          </div>

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>
              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                हमारी साहित्यिक दुनिया की
                <span className="block text-[#D4A72C]">
                  एक झलक।
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                हमारे साहित्यिक समागमों, सांस्कृतिक कार्यक्रमों, संवादों और
                रचनात्मक अभिव्यक्तियों की यादगार झलकियाँ देखें।
              </p>
            </div>

            <a
              href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-3 rounded-full border border-[#D4A72C]/60 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#D4A72C] hover:text-[#071E3D]"
            >
              <SquarePlay size={19} />

              यूट्यूब पर जाएँ

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </motion.div>


        {/* ================= EVENT GALLERY ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-7 flex items-center gap-4">
            <Images className="text-[#D4A72C]" size={23} />

            <h3 className="text-2xl font-bold text-white">
              कार्यक्रम की झलकियाँ
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>


          <div className="grid gap-5 md:grid-cols-2">

            {/* Main Image */}
            <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
              <img
                src="/img3.png"
                alt="साहित्यिक कार्यक्रम"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D] via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">
                <span className="rounded-full bg-[#D4A72C] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#071E3D]">
                  विशेष
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  साहित्यिक कार्यक्रम
                </h3>
              </div>

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#123E73] transition group-hover:scale-110">
                <ArrowUpRight size={20} />
              </div>
            </div>


            {/* Second Image */}
            <div className="group relative h-[420px] overflow-hidden rounded-[2rem]">
              <img
                src="/img2.png"
                alt="साहित्यिक संवाद"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D] via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">
                <span className="rounded-full bg-[#123E73] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  संवाद
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  सार्थक संवाद
                </h3>
              </div>

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#123E73] transition group-hover:scale-110">
                <ArrowUpRight size={20} />
              </div>
            </div>

          </div>
        </motion.div>


        {/* ================= PHOTO GALLERY ================= */}

        {showPhotos && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="mb-7 flex items-center gap-4">
            <Camera className="text-[#D4A72C]" size={23} />

            <h3 className="text-2xl font-bold text-white">
              कार्यक्रमों के चित्र
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {photos.map((photo, index) => (
              <button
                key={photo.image}
                type="button"
                onClick={() => setActivePhoto(index)}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] bg-[#123E73] text-left"
              >
                <img
                  src={photo.image}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D]/90 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100">
                  {photo.caption}
                </p>
              </button>
            ))}
          </div>
        </motion.div>
        )}


        {/* ================= YOUTUBE SHORTS ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >

          {/* Shorts Heading */}

          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <div className="mb-3 flex items-center gap-3">
                <SquarePlay
                  size={23}
                  className="text-[#D4A72C]"
                />

                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A72C]">
                  YouTube Shorts
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                छोटी कहानियाँ।
                <span className="text-[#D4A72C]">
                  {" "}यादगार प्रभाव।
                </span>
              </h3>
            </div>


            <a
              href="https://www.youtube.com/@swayamsiddhasahityiksansthan/shorts"
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:text-[#D4A72C]"
            >
              सभी शॉर्ट्स देखें

              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>


          {/* Shorts Cards */}

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

            {shorts.map((short, index) => (

              <motion.a
                key={short.title}
                href="https://www.youtube.com/@swayamsiddhasahityiksansthan/shorts"
                target="_blank"
                rel="noreferrer"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[1.3rem] bg-[#123E73]"
              >

                {/* Vertical Image */}

                <div className="relative aspect-[9/16] overflow-hidden">

                  <img
                    src={short.image}
                    alt={short.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />


                  {/* Shorts Badge */}

                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    <SquarePlay size={12} />
                    शॉर्ट्स
                  </div>


                  {/* Play */}

                  <div className="absolute inset-0 flex items-center justify-center">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#123E73] shadow-xl transition duration-300 group-hover:scale-110">
                      <Play
                        size={18}
                        fill="currentColor"
                        className="ml-0.5"
                      />
                    </div>

                  </div>


                  {/* Text */}

                  <div className="absolute bottom-0 left-0 right-0 p-4">

                    <p className="text-xs font-medium text-[#D4A72C]">
                      {short.date}
                    </p>

                    <h4 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-white">
                      {short.title}
                    </h4>

                  </div>

                </div>

              </motion.a>

            ))}

          </div>

        </motion.div>


        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-[#123E73]/60 px-7 py-6 backdrop-blur-md md:flex-row"
        >

          <div>
            <p className="font-semibold text-white">
              और कहानियाँ। और आवाज़ें। और साहित्य।
            </p>

            <p className="mt-1 text-sm text-slate-400">
              स्वयं सिद्ध साहित्यिक संस्थान जयपुर राजस्थान से यूट्यूब पर जुड़ें।
            </p>
          </div>

          <a
            href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#D4A72C] px-6 py-3 text-sm font-bold text-[#071E3D] transition hover:scale-105"
          >
            चैनल देखें
          </a>

        </motion.div>

      </div>


      {/* ================= LIGHTBOX ================= */}

      {activePhoto !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photos[activePhoto].caption}
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="बंद करें"
            onClick={() => setActivePhoto(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            aria-label="पिछला चित्र"
            onClick={(e) => {
              e.stopPropagation();
              showPhoto(-1);
            }}
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={photos[activePhoto].image}
            alt={photos[activePhoto].caption}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-full rounded-2xl object-contain"
          />

          <p className="mt-4 max-w-3xl text-center text-sm text-white/80 sm:text-base">
            {photos[activePhoto].caption}
            <span className="ml-3 text-white/50">
              {activePhoto + 1} / {photos.length}
            </span>
          </p>

          <button
            type="button"
            aria-label="अगला चित्र"
            onClick={(e) => {
              e.stopPropagation();
              showPhoto(1);
            }}
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;