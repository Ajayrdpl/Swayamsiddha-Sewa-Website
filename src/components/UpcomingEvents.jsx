// import React from "react";
// import { motion } from "framer-motion";
// import {
//   CalendarDays,
//   MapPin,
//   Clock3,
//   ArrowUpRight,
//   Sparkles,
// } from "lucide-react";

// const upcomingEvents = [
//   {
//     month: "OCT",
//     day: "12",
//     title: "Literary Conversations",
//     description:
//       "An engaging evening of conversations, ideas and literary expressions with writers and poetry enthusiasts.",
//     time: "04:00 PM",
//     location: "Jaipur, Rajasthan",
//     type: "Literary Event",
//   },
//   {
//     month: "NOV",
//     day: "08",
//     title: "Author & Poet Meet",
//     description:
//       "A gathering that brings authors, poets and literature lovers together to celebrate creativity and storytelling.",
//     time: "05:00 PM",
//     location: "Jaipur, Rajasthan",
//     type: "Author Meet",
//   },
//   {
//     month: "DEC",
//     day: "21",
//     title: "Sahityik Sanskritik Sandhya",
//     description:
//       "An evening celebrating literature, culture, poetry, music and the richness of Indian traditions.",
//     time: "06:00 PM",
//     location: "Jaipur, Rajasthan",
//     type: "Cultural Program",
//   },
// ];

// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 35,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };

// const UpcomingEvents = () => {
//   return (
//     <section
//       id="upcoming-events"
//       className="relative overflow-hidden bg-[#FDFBF7] py-24"
//     >
//       {/* Background */}
//       <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D4A72C]/10 blur-3xl" />

//       <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#123E73]/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
//         >
//           <div>
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-px w-10 bg-[#D4A72C]" />

//               <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C99722]">
//                 What's Coming Next
//               </span>
//             </div>

//             <h2 className="text-4xl font-bold leading-tight text-[#071E3D] md:text-5xl">
//               Upcoming
//               <span className="text-[#C99722]"> Events.</span>
//             </h2>

//             <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
//               Join us for upcoming literary gatherings, conversations and
//               cultural programs that celebrate the power of words and ideas.
//             </p>
//           </div>

//           <a
//             href="#contact"
//             className="group flex w-fit items-center gap-3 rounded-full bg-[#071E3D] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#123E73]"
//           >
//             View All Events

//             <ArrowUpRight
//               size={18}
//               className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </a>
//         </motion.div>


//         {/* Featured Event */}
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative mb-8 overflow-hidden rounded-[2rem] bg-[#071E3D]"
//         >
//           <div className="grid lg:grid-cols-[0.35fr_1fr]">

//             {/* Date */}
//             <div className="flex flex-col items-center justify-center bg-[#D4A72C] px-8 py-10 text-center">
//               <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#071E3D]/70">
//                 Featured Event
//               </span>

//               <span className="mt-4 text-7xl font-black leading-none text-[#071E3D]">
//                 12
//               </span>

//               <span className="mt-2 text-2xl font-bold text-[#071E3D]">
//                 OCT
//               </span>

//               <div className="mt-5 h-px w-16 bg-[#071E3D]/30" />

//               <span className="mt-5 text-sm font-semibold text-[#071E3D]/80">
//                 2026
//               </span>
//             </div>


//             {/* Details */}
//             <div className="relative p-8 md:p-12 lg:p-14">

//               <div className="absolute right-8 top-8 opacity-10">
//                 <Sparkles size={100} className="text-[#D4A72C]" />
//               </div>

//               <span className="relative inline-flex rounded-full border border-[#D4A72C]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D4A72C]">
//                 Literary Event
//               </span>

//               <h3 className="relative mt-6 max-w-2xl text-3xl font-bold text-white md:text-4xl">
//                 Literary Conversations
//               </h3>

//               <p className="relative mt-5 max-w-2xl leading-8 text-slate-300">
//                 An engaging evening of conversations, ideas and literary
//                 expressions bringing together writers, poets, thinkers and
//                 literature lovers.
//               </p>

//               <div className="relative mt-8 flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:flex-wrap">

//                 <div className="flex items-center gap-2">
//                   <Clock3
//                     size={18}
//                     className="text-[#D4A72C]"
//                   />
//                   04:00 PM
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <MapPin
//                     size={18}
//                     className="text-[#D4A72C]"
//                   />
//                   Jaipur, Rajasthan
//                 </div>

//               </div>

//               <a
//                 href="#contact"
//                 className="group relative mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A72C] px-6 py-3.5 text-sm font-bold text-[#071E3D] transition hover:scale-105"
//               >
//                 Event Details

//                 <ArrowUpRight
//                   size={17}
//                   className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </a>

//             </div>
//           </div>
//         </motion.div>


//         {/* Event Cards */}
//         <div className="grid gap-6 md:grid-cols-3">

//           {upcomingEvents.map((event, index) => (
//             <motion.div
//               key={event.title}
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{
//                 delay: index * 0.1,
//               }}
//               whileHover={{
//                 y: -7,
//               }}
//               className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(7,30,61,0.05)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(7,30,61,0.12)]"
//             >

//               {/* Top */}
//               <div className="flex items-start justify-between">

//                 <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-[#071E3D] text-white">
//                   <span className="text-[10px] font-bold tracking-wider text-[#D4A72C]">
//                     {event.month}
//                   </span>

//                   <span className="text-2xl font-black">
//                     {event.day}
//                   </span>
//                 </div>

//                 <span className="rounded-full bg-[#D4A72C]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#9B7614]">
//                   Upcoming
//                 </span>

//               </div>


//               {/* Content */}
//               <h3 className="mt-7 text-2xl font-bold leading-tight text-[#071E3D]">
//                 {event.title}
//               </h3>

//               <p className="mt-4 text-[15px] leading-7 text-slate-600">
//                 {event.description}
//               </p>


//               {/* Details */}
//               <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">

//                 <div className="flex items-center gap-3 text-sm text-slate-600">
//                   <Clock3
//                     size={17}
//                     className="text-[#C99722]"
//                   />

//                   {event.time}
//                 </div>

//                 <div className="flex items-center gap-3 text-sm text-slate-600">
//                   <MapPin
//                     size={17}
//                     className="text-[#C99722]"
//                   />

//                   {event.location}
//                 </div>

//               </div>


//               {/* CTA */}
//               <a
//                 href="#contact"
//                 className="mt-7 flex items-center gap-2 text-sm font-bold text-[#123E73] transition group-hover:text-[#C99722]"
//               >
//                 Know More

//                 <ArrowUpRight
//                   size={17}
//                   className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </a>


//               {/* Bottom gold line */}
//               <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D4A72C] transition-all duration-500 group-hover:w-full" />

//             </motion.div>
//           ))}

//         </div>


//         {/* Calendar CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-[#123E73]/10 bg-[#123E73]/5 px-7 py-6 md:flex-row"
//         >
//           <div className="flex items-center gap-4">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071E3D]">
//               <CalendarDays
//                 size={21}
//                 className="text-[#D4A72C]"
//               />
//             </div>

//             <div>
//               <p className="font-semibold text-[#071E3D]">
//                 Stay Connected With Our Events
//               </p>

//               <p className="mt-1 text-sm text-slate-500">
//                 Follow our latest literary programs and announcements.
//               </p>
//             </div>
//           </div>

//           <a
//             href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
//             target="_blank"
//             rel="noreferrer"
//             className="rounded-full bg-[#071E3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D4A72C] hover:text-[#071E3D]"
//           >
//             Follow Us
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Clock3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const upcomingEvents = [
  {
    month: "अक्टूबर",
    day: "12",
    title: "साहित्यिक संवाद",
    description:
      "लेखकों और कविता प्रेमियों के साथ संवाद, विचारों और साहित्यिक अभिव्यक्तियों से भरी एक रोचक साहित्यिक संध्या।",
    time: "04:00 PM",
    location: "जयपुर, राजस्थान",
    type: "साहित्यिक कार्यक्रम",
  },
  {
    month: "नवंबर",
    day: "08",
    title: "लेखक एवं कवि मिलन",
    description:
      "रचनात्मकता और कहानी कहने की कला का उत्सव मनाने के लिए लेखकों, कवियों और साहित्य प्रेमियों को एक साथ लाने वाला विशेष आयोजन।",
    time: "05:00 PM",
    location: "जयपुर, राजस्थान",
    type: "लेखक मिलन",
  },
  {
    month: "दिसंबर",
    day: "21",
    title: "साहित्यिक सांस्कृतिक संध्या",
    description:
      "साहित्य, संस्कृति, कविता, संगीत और भारतीय परंपराओं की समृद्ध विरासत का उत्सव मनाने वाली विशेष संध्या।",
    time: "06:00 PM",
    location: "जयपुर, राजस्थान",
    type: "सांस्कृतिक कार्यक्रम",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const UpcomingEvents = () => {
  return (
    <section
      id="upcoming-events"
      className="relative overflow-hidden bg-[#FDFBF7] py-24"
    >
      {/* Background */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D4A72C]/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#123E73]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4A72C]" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C99722]">
                आगे क्या होने वाला है
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#071E3D] md:text-5xl">
              आगामी
              <span className="text-[#C99722]"> कार्यक्रम।</span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              हमारे आगामी साहित्यिक समागमों, संवादों और सांस्कृतिक कार्यक्रमों
              में शामिल हों, जो शब्दों और विचारों की शक्ति का उत्सव मनाते हैं।
            </p>
          </div>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-3 rounded-full bg-[#071E3D] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#123E73]"
          >
            सभी कार्यक्रम देखें

            <ArrowUpRight
              size={18}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>


        {/* Featured Event */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-8 overflow-hidden rounded-[2rem] bg-[#071E3D]"
        >
          <div className="grid lg:grid-cols-[0.35fr_1fr]">

            {/* Date */}
            <div className="flex flex-col items-center justify-center bg-[#D4A72C] px-8 py-10 text-center">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#071E3D]/70">
                विशेष कार्यक्रम
              </span>

              <span className="mt-4 text-7xl font-black leading-none text-[#071E3D]">
                12
              </span>

              <span className="mt-2 text-2xl font-bold text-[#071E3D]">
                अक्टूबर
              </span>

              <div className="mt-5 h-px w-16 bg-[#071E3D]/30" />

              <span className="mt-5 text-sm font-semibold text-[#071E3D]/80">
                2026
              </span>
            </div>


            {/* Details */}
            <div className="relative p-8 md:p-12 lg:p-14">

              <div className="absolute right-8 top-8 opacity-10">
                <Sparkles size={100} className="text-[#D4A72C]" />
              </div>

              <span className="relative inline-flex rounded-full border border-[#D4A72C]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D4A72C]">
                साहित्यिक कार्यक्रम
              </span>

              <h3 className="relative mt-6 max-w-2xl text-3xl font-bold text-white md:text-4xl">
                साहित्यिक संवाद
              </h3>

              <p className="relative mt-5 max-w-2xl leading-8 text-slate-300">
                लेखकों, कवियों, विचारकों और साहित्य प्रेमियों को एक साथ
                लाने वाली संवाद, विचारों और साहित्यिक अभिव्यक्तियों से
                भरपूर एक रोचक साहित्यिक संध्या।
              </p>

              <div className="relative mt-8 flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:flex-wrap">

                <div className="flex items-center gap-2">
                  <Clock3
                    size={18}
                    className="text-[#D4A72C]"
                  />
                  04:00 PM
                </div>

                <div className="flex items-center gap-2">
                  <MapPin
                    size={18}
                    className="text-[#D4A72C]"
                  />
                  जयपुर, राजस्थान
                </div>

              </div>

              <a
                href="#contact"
                className="group relative mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A72C] px-6 py-3.5 text-sm font-bold text-[#071E3D] transition hover:scale-105"
              >
                कार्यक्रम की जानकारी

                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          </div>
        </motion.div>


        {/* Event Cards */}
        <div className="grid gap-6 md:grid-cols-3">

          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
              }}
              className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(7,30,61,0.05)] transition-all duration-300 hover:shadow-[0_18px_40px_rgba(7,30,61,0.12)]"
            >

              {/* Top */}
              <div className="flex items-start justify-between">

                <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-[#071E3D] text-white">
                  <span className="text-[10px] font-bold tracking-wider text-[#D4A72C]">
                    {event.month}
                  </span>

                  <span className="text-2xl font-black">
                    {event.day}
                  </span>
                </div>

                <span className="rounded-full bg-[#D4A72C]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#9B7614]">
                  आगामी
                </span>

              </div>


              {/* Content */}
              <h3 className="mt-7 text-2xl font-bold leading-tight text-[#071E3D]">
                {event.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-slate-600">
                {event.description}
              </p>


              {/* Details */}
              <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Clock3
                    size={17}
                    className="text-[#C99722]"
                  />

                  {event.time}
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin
                    size={17}
                    className="text-[#C99722]"
                  />

                  {event.location}
                </div>

              </div>


              {/* CTA */}
              <a
                href="#contact"
                className="mt-7 flex items-center gap-2 text-sm font-bold text-[#123E73] transition group-hover:text-[#C99722]"
              >
                और जानें

                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>


              {/* Bottom gold line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D4A72C] transition-all duration-500 group-hover:w-full" />

            </motion.div>
          ))}

        </div>


        {/* Calendar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-[#123E73]/10 bg-[#123E73]/5 px-7 py-6 md:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071E3D]">
              <CalendarDays
                size={21}
                className="text-[#D4A72C]"
              />
            </div>

            <div>
              <p className="font-semibold text-[#071E3D]">
                हमारे कार्यक्रमों से जुड़े रहें
              </p>

              <p className="mt-1 text-sm text-slate-500">
                हमारे नवीनतम साहित्यिक कार्यक्रमों और घोषणाओं से जुड़े रहें।
              </p>
            </div>
          </div>

          <a
            href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#071E3D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#D4A72C] hover:text-[#071E3D]"
          >
            हमसे जुड़ें
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default UpcomingEvents;