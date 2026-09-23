// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Mic2,
//   BookOpen,
//   GraduationCap,
//   Feather,
//   Users,
//   Sparkles,
// } from "lucide-react";

// const initiatives = [
//   {
//     number: "01",
//     icon: Mic2,
//     title: "Literary Conversations",
//     text: "Curated dialogues with writers, poets and thinkers exploring ideas that shape literature and culture.",
//   },
//   {
//     number: "02",
//     icon: BookOpen,
//     title: "Author & Poet Meets",
//     text: "Bringing readers face-to-face with authors and poets through readings, discussions and book talks.",
//   },
//   {
//     number: "03",
//     icon: GraduationCap,
//     title: "Workshops & Learning",
//     text: "Hands-on sessions on writing, storytelling and literary craft for aspiring and established voices.",
//   },
//   {
//     number: "04",
//     icon: Feather,
//     title: "Poetry & Creative Writing",
//     text: "Platforms for poets and writers to share original work and connect with a wider literary community.",
//   },
//   {
//     number: "05",
//     icon: Users,
//     title: "Sahityik Gatherings",
//     text: "Community events that celebrate regional literature, language and cultural heritage.",
//   },
//   {
//     number: "06",
//     icon: Sparkles,
//     title: "Cultural Programs",
//     text: "Festivals and celebrations that honour creativity, knowledge and meaningful cultural expression.",
//   },
// ];

// const InitiativesSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#FDFBF6] py-24 lg:py-32">
//       <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-16 max-w-2xl"
//         >
//           <div className="mb-5 flex items-center gap-3">
//             <span className="h-[2px] w-10 bg-[#D4A72C]" />
//             <span className="text-sm font-bold uppercase tracking-[4px] text-[#C99722]">
//               Our Initiatives
//             </span>
//           </div>

//           <h2 className="text-4xl font-bold leading-tight text-[#123E73] sm:text-5xl">
//             What We
//             <span className="text-[#C99722]"> Do.</span>
//           </h2>

//           <p className="mt-5 text-lg leading-8 text-gray-600">
//             Programs and initiatives that bring literature, knowledge and
//             culture closer to the community.
//           </p>
//         </motion.div>

//         {/* Initiatives Cards */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {initiatives.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={item.number}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.08 }}
//                 className="
//                   group relative overflow-hidden
//                   rounded-[1.8rem]
//                   border-2 border-[#D4A72C]/30
//                   bg-white
//                   p-7
//                   shadow-[0_18px_45px_rgba(7,30,61,0.12)]
//                   transition-all duration-300
//                   hover:-translate-y-2
//                   hover:border-[#D4A72C]
//                   hover:shadow-[0_22px_55px_rgba(7,30,61,0.18)]
//                 "
//               >

//                 {/* Big Number */}
//                 <span
//                   className="
//                     absolute right-6 top-3
//                     text-[64px]
//                     font-black
//                     leading-none
//                     text-[#D4A72C]/[0.15]
//                   "
//                 >
//                   {item.number}
//                 </span>

//                 {/* Icon */}
//                 <div
//                   className="
//                     relative z-10
//                     flex h-14 w-14
//                     items-center justify-center
//                     rounded-2xl
//                     bg-[#D4A72C]
//                     text-[#071E3D]
//                     transition-all duration-300
//                     group-hover:scale-110
//                   "
//                 >
//                   <Icon size={25} strokeWidth={2} />
//                 </div>

//                 {/* Title */}
//                 <h3
//                   className="
//                     relative z-10
//                     mt-7
//                     text-[22px]
//                     font-bold
//                     leading-tight
//                     text-[#071E3D]
//                   "
//                 >
//                   {item.title}
//                 </h3>

//                 {/* Description */}
//                 <p
//                   className="
//                     relative z-10
//                     mt-4
//                     text-[15px]
//                     leading-7
//                     text-slate-600
//                   "
//                 >
//                   {item.text}
//                 </p>

//                 {/* Bottom */}
//                 <div
//                   className="
//                     relative z-10
//                     mt-7
//                     flex items-center gap-2
//                     text-sm font-semibold
//                     text-[#C99722]
//                     transition-colors duration-300
//                   "
//                 >
//                   Discover More

//                   <ArrowUpRight
//                     size={17}
//                     className="
//                       transition-transform duration-300
//                       group-hover:translate-x-1
//                       group-hover:-translate-y-1
//                     "
//                   />
//                 </div>

//                 {/* Gold bottom border */}
//                 <div
//                   className="
//                     absolute bottom-0 left-0
//                     h-[3px] w-full
//                     bg-[#D4A72C]
//                   "
//                 />

//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default InitiativesSection;
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mic2,
  BookOpen,
  GraduationCap,
  Feather,
  Users,
  Sparkles,
} from "lucide-react";

const initiatives = [
  {
    number: "01",
    icon: Mic2,
    title: "साहित्यिक संवाद",
    text: "लेखकों, कवियों और विचारकों के साथ सार्थक संवाद, जो साहित्य और संस्कृति को आकार देने वाले विचारों की खोज करते हैं।",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "लेखक एवं कवि मिलन",
    text: "पाठकों को लेखकों और कवियों से रूबरू कराने के लिए पाठ, चर्चाओं और पुस्तक संवादों का आयोजन।",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "कार्यशालाएँ एवं शिक्षण",
    text: "उभरते और स्थापित रचनाकारों के लिए लेखन, कहानी कहने और साहित्यिक कला पर व्यावहारिक सत्र।",
  },
  {
    number: "04",
    icon: Feather,
    title: "कविता एवं रचनात्मक लेखन",
    text: "कवियों और लेखकों को अपनी मौलिक रचनाएँ साझा करने और व्यापक साहित्यिक समुदाय से जुड़ने के लिए मंच प्रदान करना।",
  },
  {
    number: "05",
    icon: Users,
    title: "साहित्यिक समागम",
    text: "सामुदायिक कार्यक्रम जो क्षेत्रीय साहित्य, भाषा और सांस्कृतिक विरासत का उत्सव मनाते हैं।",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "सांस्कृतिक कार्यक्रम",
    text: "ऐसे उत्सव और समारोह जो रचनात्मकता, ज्ञान और सार्थक सांस्कृतिक अभिव्यक्ति का सम्मान करते हैं।",
  },
];

const InitiativesSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF6] py-24 lg:py-32">
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#D4A72C]" />
            <span className="text-sm font-bold uppercase tracking-[4px] text-[#C99722]">
              Our Initiatives
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#123E73] sm:text-5xl">
            हम
            <span className="text-[#C99722]"> क्या करते हैं।</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            ऐसे कार्यक्रम और पहल जो साहित्य, ज्ञान और संस्कृति को समुदाय के
            और करीब लाते हैं।
          </p>
        </motion.div>

        {/* Initiatives Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="
                  group relative overflow-hidden
                  rounded-[1.8rem]
                  border-2 border-[#D4A72C]/30
                  bg-white
                  p-7
                  shadow-[0_18px_45px_rgba(7,30,61,0.12)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-[#D4A72C]
                  hover:shadow-[0_22px_55px_rgba(7,30,61,0.18)]
                "
              >

                {/* Big Number */}
                <span
                  className="
                    absolute right-6 top-3
                    text-[64px]
                    font-black
                    leading-none
                    text-[#D4A72C]/[0.15]
                  "
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative z-10
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    bg-[#D4A72C]
                    text-[#071E3D]
                    transition-all duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={25} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3
                  className="
                    relative z-10
                    mt-7
                    text-[22px]
                    font-bold
                    leading-tight
                    text-[#071E3D]
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    relative z-10
                    mt-4
                    text-[15px]
                    leading-7
                    text-slate-600
                  "
                >
                  {item.text}
                </p>

                {/* Bottom */}
                <div
                  className="
                    relative z-10
                    mt-7
                    flex items-center gap-2
                    text-sm font-semibold
                    text-[#C99722]
                    transition-colors duration-300
                  "
                >
                  और जानें

                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                {/* Gold bottom border */}
                <div
                  className="
                    absolute bottom-0 left-0
                    h-[3px] w-full
                    bg-[#D4A72C]
                  "
                />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InitiativesSection;