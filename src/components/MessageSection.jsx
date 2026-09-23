// import React from "react";
// import { motion } from "framer-motion";
// import { Quote, ArrowUpRight, Feather } from "lucide-react";

// const MessageSection = () => {
//   return (
//     <section
//       id="message"
//       className="relative overflow-hidden bg-[#FDFBF7] py-24"
//     >
//       {/* Decorative background */}
//       <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D4A72C]/10 blur-3xl" />
//       <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#123E73]/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

//         {/* Small Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-12"
//         >
//           <div className="flex items-center gap-3">
//             <span className="h-px w-10 bg-[#D4A72C]" />

//             <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C99722]">
//               A Message From Our Leadership
//             </span>
//           </div>
//         </motion.div>

//         {/* Main */}
//         <div className="grid overflow-hidden rounded-[2.5rem] bg-[#071E3D] lg:grid-cols-[0.85fr_1.15fr]">

//           {/* Image Side */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="relative min-h-[500px] overflow-hidden"
//           >
//             <img
//               src="/img6.png"
//               alt="Literary gathering"
//               className="absolute inset-0 h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D] via-transparent to-transparent" />

//             {/* Gold frame */}
//             <div className="absolute inset-6 rounded-[1.8rem] border border-[#D4A72C]/40" />

//             {/* Quote icon */}
//             <div className="absolute bottom-10 left-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A72C]">
//               <Quote
//                 size={25}
//                 className="text-[#071E3D]"
//               />
//             </div>
//           </motion.div>

//           {/* Message */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="flex flex-col justify-center p-8 md:p-12 lg:p-16"
//           >

//             <div className="mb-6 flex items-center gap-3">
//               <Feather
//                 size={21}
//                 className="text-[#D4A72C]"
//               />

//               <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A72C]">
//                 Our Vision
//               </span>
//             </div>

//             <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
//               Keeping Literature
//               <span className="block text-[#D4A72C]">
//                 Alive & Relevant.
//               </span>
//             </h2>

//             <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-300">
//               <p>
//                 Literature has the unique power to preserve memories,
//                 connect generations and open new ways of understanding
//                 the world around us.
//               </p>

//               <p>
//                 Through SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN, we aim to create
//                 meaningful spaces where writers, poets, thinkers and
//                 literature lovers can come together, exchange ideas and
//                 celebrate the richness of our literary heritage.
//               </p>

//               <p>
//                 Our journey is guided by a simple belief — when voices
//                 come together, ideas grow and society moves forward.
//               </p>
//             </div>

//             {/* Signature */}
//             <div className="mt-9 border-t border-white/10 pt-7">

//               <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

//                 <div>
//                   <p className="text-xl font-semibold text-white">
//                     SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN
//                   </p>

//                   <p className="mt-1 text-sm text-[#D4A72C]">
//                     Jaipur, Rajasthan
//                   </p>
//                 </div>

//                 <div className="text-left sm:text-right">
//                   <p className="font-serif text-2xl italic text-white/80">
//                     Literature • Culture • Dialogue
//                   </p>

//                   <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
//                     Our Continuing Journey
//                   </p>
//                 </div>

//               </div>

//             </div>

//           </motion.div>
//         </div>

//         {/* Bottom quote */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto mt-12 max-w-3xl text-center"
//         >
//           <Quote
//             size={26}
//             className="mx-auto mb-4 text-[#D4A72C]"
//           />

//           <p className="font-serif text-2xl font-medium italic leading-relaxed text-[#123E73] md:text-3xl">
//             “Words become powerful when they become a part of people's
//             lives.”
//           </p>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default MessageSection;

import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowUpRight, Feather } from "lucide-react";

const MessageSection = () => {
  return (
    <section
      id="message"
      className="relative overflow-hidden bg-[#FDFBF7] py-24"
    >
      {/* Decorative background */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#D4A72C]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#123E73]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Small Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4A72C]" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C99722]">
              Message from Our Leadership
            </span>
          </div>
        </motion.div>

        {/* Main */}
        <div className="grid overflow-hidden rounded-[2.5rem] bg-[#071E3D] lg:grid-cols-[0.85fr_1.15fr]">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[500px] overflow-hidden"
          >
            <img
              src="/img6.png"
              alt="साहित्यिक समागम"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071E3D] via-transparent to-transparent" />

            {/* Gold frame */}
            <div className="absolute inset-6 rounded-[1.8rem] border border-[#D4A72C]/40" />

            {/* Quote icon */}
            <div className="absolute bottom-10 left-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A72C]">
              <Quote
                size={25}
                className="text-[#071E3D]"
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center p-8 md:p-12 lg:p-16"
          >

            <div className="mb-6 flex items-center gap-3">
              <Feather
                size={21}
                className="text-[#D4A72C]"
              />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A72C]">
                Our Vision
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              साहित्य को
              <span className="block text-[#D4A72C]">
                जीवंत और प्रासंगिक बनाए रखना।
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-[16px] leading-8 text-slate-300">
              <p>
                साहित्य में स्मृतियों को संरक्षित करने, पीढ़ियों को जोड़ने
                और हमारे आसपास की दुनिया को समझने के नए रास्ते खोलने की
                अद्वितीय शक्ति है।
              </p>

              <p>
                स्वयं सिद्ध साहित्यिक संस्थान जयपुर राजस्थान के माध्यम से,
                हमारा उद्देश्य ऐसे सार्थक मंच तैयार करना है जहाँ लेखक,
                कवि, विचारक और साहित्य प्रेमी एक साथ आ सकें, विचारों का
                आदान-प्रदान कर सकें और हमारी समृद्ध साहित्यिक विरासत का
                उत्सव मना सकें।
              </p>

              <p>
                हमारी यात्रा एक सरल विश्वास से प्रेरित है — जब आवाज़ें
                एक साथ आती हैं, तो विचार विकसित होते हैं और समाज आगे बढ़ता है।
              </p>
            </div>

            {/* Signature */}
            <div className="mt-9 border-t border-white/10 pt-7">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                <div>
                  <p className="text-xl font-semibold text-white">
                    स्वयं सिद्ध साहित्यिक संस्थान जयपुर राजस्थान
                  </p>

                  <p className="mt-1 text-sm text-[#D4A72C]">
                    जयपुर, राजस्थान
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <p className="font-serif text-2xl italic text-white/80">
                    साहित्य • संस्कृति • संवाद
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
                    Our Continuing Journey
                  </p>
                </div>

              </div>

            </div>

          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <Quote
            size={26}
            className="mx-auto mb-4 text-[#D4A72C]"
          />

          <p className="font-serif text-2xl font-medium italic leading-relaxed text-[#123E73] md:text-3xl">
            “शब्द तब शक्तिशाली बनते हैं, जब वे लोगों के जीवन का हिस्सा बन जाते हैं।”
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MessageSection;