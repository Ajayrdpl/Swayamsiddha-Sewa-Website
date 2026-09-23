// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Play,
//   ArrowUpRight,
//   Mic2,
//   BookOpen,
// } from "lucide-react";

// const interviews = [
//   {
//     title: "Literary Journey of Prof. (Dr.) Ajit Kumar Jain",
//     category: "Author Conversation",
//     image: "/img1.png",
//     views: "191 views",
//     duration: "1:07:51",
//   },
//   {
//     title: "Faith, Offerings, Challenges & Solutions",
//     category: "Literary Talk",
//     image: "/img2.png",
//     views: "231 views",
//     duration: "1:01:46",
//   },
//   {
//     title: "What Is the Most Basic Problem for a Young Person?",
//     category: "Youth Conversation",
//     image: "/img3.png",
//     views: "164 views",
//     duration: "—",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7 },
//   },
// };

// const InterviewsSection = () => {
//   return (
//     <section
//       id="interviews"
//       className="relative overflow-hidden bg-[#FDFBF7] py-24"
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
//         >
//           <div>
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-10 bg-[#D4A72C]" />

//               <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C99722]">
//                 From Our YouTube Channel
//               </span>
//             </div>

//             <h2 className="text-4xl font-bold leading-tight text-[#071E3D] md:text-5xl">
//               Voices That
//               <span className="block text-[#C99722]">
//                 Inspire & Connect.
//               </span>
//             </h2>

//             <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
//               Watch meaningful conversations, literary discussions and
//               inspiring sessions featuring writers, poets, scholars and
//               distinguished personalities.
//             </p>
//           </div>

//           <a
//             href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
//             target="_blank"
//             rel="noreferrer"
//             className="group flex w-fit items-center gap-3 rounded-full bg-[#123E73] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0d315d]"
//           >
//             View YouTube Channel
//             <ArrowUpRight
//               size={18}
//               className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </a>
//         </motion.div>

//         {/* Videos */}
//         <div className="grid gap-7 md:grid-cols-3">
//           {interviews.map((item, index) => (
//             <motion.a
//               key={item.title}
//               href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
//               target="_blank"
//               rel="noreferrer"
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.12 }}
//               whileHover={{ y: -8 }}
//               className="group overflow-hidden rounded-[1.5rem] bg-[#123E73] shadow-xl shadow-[#071E3D]/10"
//             >
//               {/* Thumbnail */}
//               <div className="relative aspect-video overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                 />

//                 {/* Dark overlay */}
//                 <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

//                 {/* Play */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#123E73] shadow-2xl transition duration-300 group-hover:scale-110">
//                     <Play
//                       size={25}
//                       fill="currentColor"
//                       className="ml-1"
//                     />
//                   </div>
//                 </div>

//                 {/* Category */}
//                 <div className="absolute bottom-4 left-4">
//                   <span className="rounded-full bg-[#D4A72C] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#071E3D]">
//                     {item.category}
//                   </span>
//                 </div>

//                 {/* Duration */}
//                 <div className="absolute bottom-4 right-4 rounded bg-black/75 px-2 py-1 text-xs font-medium text-white">
//                   {item.duration}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold leading-snug text-white transition group-hover:text-[#D4A72C]">
//                   {item.title}
//                 </h3>

//                 <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
//                   <span className="flex items-center gap-2">
//                     <BookOpen size={16} className="text-[#D4A72C]" />
//                     SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN
//                   </span>

//                   <span>{item.views}</span>
//                 </div>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         {/* Bottom strip */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#071E3D] px-7 py-6 md:flex-row"
//         >
//           <div className="flex items-center gap-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A72C]">
//               <Mic2 size={21} className="text-[#071E3D]" />
//             </div>

//             <div>
//               <p className="font-semibold text-white">
//                 Explore More Literary Conversations
//               </p>
//               <p className="text-sm text-slate-400">
//                 Discover more videos on our YouTube channel.
//               </p>
//             </div>
//           </div>

//           <a
//             href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-full border border-[#D4A72C] px-6 py-3 text-sm font-semibold text-[#D4A72C] transition hover:bg-[#D4A72C] hover:text-[#071E3D]"
//           >
//             Explore Videos
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default InterviewsSection;

import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  ArrowUpRight,
  Mic2,
  BookOpen,
} from "lucide-react";

const interviews = [
  {
    title: "प्रो. (डॉ.) अजीत कुमार जैन की साहित्यिक यात्रा",
    category: "लेखक संवाद",
    image: "/img1.png",
    views: "191 व्यूज़",
    duration: "1:07:51",
  },
  {
    title: "आस्था, अर्पण, चुनौतियाँ एवं समाधान",
    category: "साहित्यिक वार्ता",
    image: "/img2.png",
    views: "231 व्यूज़",
    duration: "1:01:46",
  },
  {
    title: "एक युवा व्यक्ति के लिए सबसे मूलभूत समस्या क्या है?",
    category: "युवा संवाद",
    image: "/img3.png",
    views: "164 व्यूज़",
    duration: "—",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const InterviewsSection = () => {
  return (
    <section
      id="interviews"
      className="relative overflow-hidden bg-[#FDFBF7] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4A72C]" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C99722]">
                From Our YouTube Channel
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#071E3D] md:text-5xl">
              ऐसी आवाज़ें जो
              <span className="block text-[#C99722]">
                प्रेरित और जोड़ती हैं।
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              लेखकों, कवियों, विद्वानों और प्रतिष्ठित व्यक्तित्वों के साथ
              सार्थक संवाद, साहित्यिक चर्चाएँ और प्रेरणादायक सत्र देखें।
            </p>
          </div>

          <a
            href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit items-center gap-3 rounded-full bg-[#123E73] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0d315d]"
          >
            यूट्यूब चैनल देखें

            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* Videos */}
        <div className="grid gap-7 md:grid-cols-3">
          {interviews.map((item, index) => (
            <motion.a
              key={item.title}
              href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[1.5rem] bg-[#123E73] shadow-xl shadow-[#071E3D]/10"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#123E73] shadow-2xl transition duration-300 group-hover:scale-110">
                    <Play
                      size={25}
                      fill="currentColor"
                      className="ml-1"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-[#D4A72C] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#071E3D]">
                    {item.category}
                  </span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 rounded bg-black/75 px-2 py-1 text-xs font-medium text-white">
                  {item.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold leading-snug text-white transition group-hover:text-[#D4A72C]">
                  {item.title}
                </h3>

                <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
                  <span className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#D4A72C]" />
                    स्वयं सिद्ध साहित्यिक संस्थान जयपुर राजस्थान
                  </span>

                  <span>{item.views}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#071E3D] px-7 py-6 md:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4A72C]">
              <Mic2 size={21} className="text-[#071E3D]" />
            </div>

            <div>
              <p className="font-semibold text-white">
                और अधिक साहित्यिक संवाद देखें
              </p>

              <p className="text-sm text-slate-400">
                हमारे यूट्यूब चैनल पर और अधिक वीडियो देखें।
              </p>
            </div>
          </div>

          <a
            href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#D4A72C] px-6 py-3 text-sm font-semibold text-[#D4A72C] transition hover:bg-[#D4A72C] hover:text-[#071E3D]"
          >
            वीडियो देखें
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default InterviewsSection;