// import React from "react";
// import { motion } from "framer-motion";
// import {
//   CalendarDays,
//   MapPin,
//   Clock3,
//   ArrowUpRight,
//   Sparkles,
//   Mic2,
//   BookOpen,
//   Users,
// } from "lucide-react";

// const events = [
//   {
//     title: "Literary Conversations",
//     description:
//       "An engaging evening of conversations, ideas and literary expressions with writers and poetry enthusiasts.",
//     time: "04:00 PM",
//     location: "Jaipur, Rajasthan",
//     type: "Literary Event",
//     icon: Mic2,
//   },
//   {
//     title: "Author & Poet Meet",
//     description:
//       "A gathering that brings authors, poets and literature lovers together to celebrate creativity and storytelling.",
//     time: "05:00 PM",
//     location: "Jaipur, Rajasthan",
//     type: "Author Meet",
//     icon: BookOpen,
//   },
//   {
//     title: "Sahityik Sanskritik Sandhya",
//     description:
//       "An evening celebrating literature, culture, poetry, music and the richness of Indian traditions.",
//     time: "06:00 PM",
//     location: "Jaipur, Rajasthan",
//     type: "Cultural Program",
//     icon: Sparkles,
//   },
//   {
//     title: "Sahityik Gatherings",
//     description:
//       "Community events that celebrate regional literature, language and cultural heritage.",
//     time: "05:30 PM",
//     location: "Jaipur, Rajasthan",
//     type: "Cultural Event",
//     icon: Users,
//   },
//   {
//     title: "Poetry & Creative Writing",
//     description:
//       "A platform for poets and writers to share original work and connect with a wider literary community.",
//     time: "04:30 PM",
//     location: "Jaipur, Rajasthan",
//     type: "Poetry Event",
//     icon: BookOpen,
//   },
//   {
//     title: "Workshops & Learning",
//     description:
//       "Hands-on sessions on writing, storytelling and literary craft for aspiring and established voices.",
//     time: "11:00 AM",
//     location: "Jaipur, Rajasthan",
//     type: "Workshop",
//     icon: Mic2,
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 35 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const Events = () => {
//   return (
//     <>
//       {/* ================= PAGE HEADER ================= */}
//       <section className="relative overflow-hidden bg-[#FDFBF6] pb-16 pt-16 lg:pb-20 lg:pt-20">

//         <div className="absolute top-0 -left-32 h-96 w-96 rounded-full bg-[#123E73]/5 blur-3xl" />
//         <div className="absolute bottom-0 -right-32 h-[420px] w-[420px] rounded-full bg-[#D4A72C]/10 blur-3xl" />

//         <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="mx-auto max-w-3xl text-center"
//           >
//             <div className="mb-5 flex items-center justify-center gap-3">
//               <span className="h-[2px] w-10 bg-[#D4A72C]" />
//               <span className="text-sm font-bold uppercase tracking-[4px] text-[#C99722]">
//                 Our Events
//               </span>
//             </div>

//             <h1 className="text-5xl font-bold leading-tight text-[#123E73] sm:text-6xl">
//               Where Ideas
//               <span className="block text-[#C99722]">Meet Inspiration.</span>
//             </h1>

//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
//               Explore literary conversations, poetry gatherings, author
//               interactions and cultural programs that bring remarkable
//               voices together.
//             </p>
//           </motion.div>

//         </div>
//       </section>


//       {/* ================= FEATURED EVENT ================= */}
//       <section className="relative bg-white pb-8">
//         <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="relative overflow-hidden rounded-[2rem] border-2 border-[#D4A72C]/30 bg-[#123E73] shadow-xl"
//           >
//             <div className="grid lg:grid-cols-[0.35fr_1fr]">

//               {/* Highlight */}
//               <div className="flex flex-col items-center justify-center bg-[#D4A72C] px-8 py-10 text-center">
//                 <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#123E73]/70">
//                   Featured Event
//                 </span>

//                 <div className="mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#123E73]">
//                   <Mic2 size={42} className="text-[#D4A72C]" />
//                 </div>

//                 <div className="mt-6 h-px w-16 bg-[#123E73]/30" />

//                 <span className="mt-5 text-sm font-semibold text-[#123E73]/80">
//                   Literary Event
//                 </span>
//               </div>


//               {/* Details */}
//               <div className="relative p-8 md:p-12 lg:p-14">

//                 <div className="absolute right-8 top-8 opacity-10">
//                   <Sparkles size={100} className="text-[#D4A72C]" />
//                 </div>

//                 <span className="relative inline-flex rounded-full border border-[#D4A72C]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D4A72C]">
//                   Literary Event
//                 </span>

//                 <h3 className="relative mt-6 max-w-2xl text-3xl font-bold text-white md:text-4xl">
//                   Literary Conversations
//                 </h3>

//                 <p className="relative mt-5 max-w-2xl leading-8 text-white/70">
//                   An engaging evening of conversations, ideas and literary
//                   expressions bringing together writers, poets, thinkers and
//                   literature lovers.
//                 </p>

//                 <div className="relative mt-8 flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:flex-wrap">

//                   <div className="flex items-center gap-2">
//                     <Clock3 size={18} className="text-[#D4A72C]" />
//                     04:00 PM
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <MapPin size={18} className="text-[#D4A72C]" />
//                     Jaipur, Rajasthan
//                   </div>

//                 </div>

//                 <a
//                   href="mailto:info@swayamsiddhasahityik.org"
//                   className="group relative mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A72C] px-6 py-3.5 text-sm font-bold text-[#123E73] transition hover:scale-105"
//                 >
//                   Event Details

//                   <ArrowUpRight
//                     size={17}
//                     className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                   />
//                 </a>

//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </section>


//       {/* ================= ALL EVENTS ================= */}
//       <section className="relative overflow-hidden bg-white py-16 lg:py-20">
//         <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="mb-12 flex items-center gap-4"
//           >
//             <CalendarDays className="text-[#C99722]" size={23} />
//             <h2 className="text-2xl font-bold text-[#123E73]">
//               All Events
//             </h2>
//             <div className="h-px flex-1 bg-[#123E73]/10" />
//           </motion.div>


//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//             {events.map((event, index) => {
//               const Icon = event.icon;

//               return (
//                 <motion.div
//                   key={event.title}
//                   variants={fadeUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.08 }}
//                   className="group relative overflow-hidden rounded-[1.7rem] border-2 border-[#D4A72C]/30 bg-white p-7 shadow-[0_18px_45px_rgba(7,30,61,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A72C]"
//                 >

//                   {/* Top */}
//                   <div className="flex items-start justify-between">

//                     <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123E73] text-[#D4A72C] transition-all duration-300 group-hover:bg-[#D4A72C] group-hover:text-[#123E73]">
//                       <Icon size={26} strokeWidth={2} />
//                     </div>

//                     <span className="rounded-full bg-[#D4A72C]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#9B7614]">
//                       {event.type}
//                     </span>

//                   </div>


//                   {/* Content */}
//                   <h3 className="mt-7 text-2xl font-bold leading-tight text-[#123E73]">
//                     {event.title}
//                   </h3>

//                   <p className="mt-4 text-[15px] leading-7 text-gray-600">
//                     {event.description}
//                   </p>


//                   {/* Details */}
//                   <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">

//                     <div className="flex items-center gap-3 text-sm text-gray-600">
//                       <Clock3 size={17} className="text-[#C99722]" />
//                       {event.time}
//                     </div>

//                     <div className="flex items-center gap-3 text-sm text-gray-600">
//                       <MapPin size={17} className="text-[#C99722]" />
//                       {event.location}
//                     </div>

//                   </div>


//                   {/* CTA */}
//                   <a
//                     href="mailto:info@swayamsiddhasahityik.org"
//                     className="mt-7 flex items-center gap-2 text-sm font-bold text-[#123E73] transition group-hover:text-[#C99722]"
//                   >
//                     Know More
//                     <ArrowUpRight
//                       size={17}
//                       className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
//                     />
//                   </a>

//                 </motion.div>
//               );
//             })}

//           </div>

//         </div>
//       </section>


//       {/* ================= CTA ================= */}
//       <section className="relative overflow-hidden bg-[#FDFBF6] py-16 lg:py-20">
//         <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col items-center justify-between gap-6 rounded-[1.8rem] border-2 border-[#D4A72C]/30 bg-[#123E73] px-8 py-10 shadow-xl sm:px-12 md:flex-row"
//           >
//             <div className="text-center md:text-left">
//               <h3 className="text-2xl font-bold text-white sm:text-3xl">
//                 Stay Connected With Our Events.
//               </h3>
//               <p className="mt-2 text-white/70">
//                 Follow our latest literary programs and announcements.
//               </p>
//             </div>

//             <a
//               href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
//               target="_blank"
//               rel="noreferrer"
//               className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D4A72C] px-7 py-3.5 font-bold text-[#123E73] shadow-lg transition-transform hover:scale-105"
//             >
//               Follow Us
//               <ArrowUpRight size={18} />
//             </a>
//           </motion.div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Events;
import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Clock3,
  ArrowUpRight,
  Sparkles,
  Mic2,
  BookOpen,
  Users,
  Trophy,
  Award,
} from "lucide-react";

const events = [
  {
    title: "साहित्यिक संवाद",
    description:
      "लेखकों और कविता प्रेमियों के साथ संवाद, विचारों और साहित्यिक अभिव्यक्तियों से भरी एक रोचक साहित्यिक संध्या।",
    time: "04:00 PM",
    location: "जयपुर, राजस्थान",
    type: "साहित्यिक कार्यक्रम",
    icon: Mic2,
  },
  {
    title: "लेखक एवं कवि मिलन",
    description:
      "एक ऐसा साहित्यिक समागम जो रचनात्मकता और कहानी कहने की कला का उत्सव मनाने के लिए लेखकों, कवियों और साहित्य प्रेमियों को एक साथ लाता है।",
    time: "05:00 PM",
    location: "जयपुर, राजस्थान",
    type: "लेखक मिलन",
    icon: BookOpen,
  },
  {
    title: "साहित्यिक सांस्कृतिक संध्या",
    description:
      "साहित्य, संस्कृति, कविता, संगीत और भारतीय परंपराओं की समृद्ध विरासत को समर्पित एक विशेष संध्या।",
    time: "06:00 PM",
    location: "जयपुर, राजस्थान",
    type: "सांस्कृतिक कार्यक्रम",
    icon: Sparkles,
  },
  {
    title: "साहित्यिक समागम",
    description:
      "क्षेत्रीय साहित्य, भाषा और सांस्कृतिक विरासत का उत्सव मनाने वाले सामुदायिक कार्यक्रम।",
    time: "05:30 PM",
    location: "जयपुर, राजस्थान",
    type: "सांस्कृतिक कार्यक्रम",
    icon: Users,
  },
  {
    title: "कविता एवं रचनात्मक लेखन",
    description:
      "कवियों और लेखकों के लिए अपनी मौलिक रचनाएँ साझा करने और व्यापक साहित्यिक समुदाय से जुड़ने का एक मंच।",
    time: "04:30 PM",
    location: "जयपुर, राजस्थान",
    type: "कविता कार्यक्रम",
    icon: BookOpen,
  },
  {
    title: "कार्यशालाएँ एवं शिक्षण",
    description:
      "उभरते और स्थापित रचनाकारों के लिए लेखन, कहानी कहने और साहित्यिक कला पर आधारित व्यावहारिक सत्र।",
    time: "11:00 AM",
    location: "जयपुर, राजस्थान",
    type: "कार्यशाला",
    icon: Mic2,
  },
];

const missionParagraphs = [
  "हिन्दी की सेवा भी राष्ट्र की ही सेवा है। हिन्दी राष्ट्रभाषा के शिखर पर विराजमान हो, इसी संकल्पना व कामना के साथ हम सब मिलजुल कर आगे बढ़ते रहें, प्रयासरत रहें। हम सभी साहित्य अनुरागी राष्ट्र की आराधना में संकल्पित होकर साहित्य साधना में समर्पित रहें, इसी कामना के साथ स्वयं सिद्धा संस्था आगे बढ़ रही है।",
  "हमारा लक्ष्य हिन्दी के विकास के साथ-साथ साहित्य के माध्यम से समाज में जागरूकता लाना भी है। हिन्दी साहित्य द्वारा सांस्कृतिक चेतना का विकास हो सके, इसी शृंखला में साहित्य के साथ-साथ सामयिक, सामाजिक व राष्ट्रीय समस्याओं व विषयों पर संवाद, चर्चा, परिचर्चा का आयोजन लगभग तीन वर्षों से निरंतर किया जाता रहा है। इसी के साथ काव्यात्मक प्रवृत्तियों के उत्थान हेतु कवि सम्मेलन, एकल काव्य पाठ भी समय-समय पर आयोजित किए जाते रहे हैं।",
];

const regularActivities = [
  {
    title: "ऑनलाइन चर्चा-परिचर्चा",
    description:
      "प्रत्येक सोमवार व शुक्रवार सांय 4 बजे साहित्य, सामयिक, सामाजिक व राष्ट्रीय विषयों पर संवाद, चर्चा व परिचर्चा।",
    icon: Users,
  },
  {
    title: "नवोदित प्रतिभाओं को मंच",
    description:
      "फ़ेसबुक पटल व यूट्यूब चैनल पर एकल काव्य पाठ व कवि गोष्ठियों के माध्यम से नवोदित प्रतिभाशाली बहनों को मंच मिले, खुला आकाश मिले, वृहद् संसार मिले — यह प्रयास रहता है।",
    icon: Mic2,
  },
  {
    title: "स्वयं सिद्धा यूट्यूब चैनल",
    description:
      "कवि सम्मेलन, एकल काव्य पाठ, काव्य गोष्ठी और हर सप्ताह ज्वलंत, सामाजिक, राष्ट्रीय, भावात्मक, मनोवैज्ञानिक व सामयिक विषयों पर वार्ताएँ। युगपुरुषों, साहित्यकारों की जयंतियों, राष्ट्रीय पर्वों व सामाजिक त्योहारों पर काव्य गोष्ठी व चर्चा-परिचर्चा।",
    icon: Sparkles,
  },
];

const festivalCompetitions = [
  "दीपावली",
  "रक्षाबंधन",
  "नवरात्रि",
  "जन्माष्टमी",
  "हिन्दी दिवस",
  "शिक्षक दिवस",
  "गणेश चतुर्थी",
  "सावन में लहरिया उत्सव",
];

const pastEvents = [
  {
    title: "शिक्षक दिवस समारोह-2026 एवं ‘शिक्षक-गौरव-सम्मान’",
    titleEn: "Teachers' Day Celebration 2026 & Shikshak Gaurav Samman",
    date: "शिक्षक दिवस 2026",
    location: "जयपुर",
    description: [
      "स्वयं सिद्धा साहित्यिक संस्थान, जयपुर, राजस्थान के तत्वावधान में शिक्षक दिवस समारोह-2026 के अवसर पर आयोजित ‘जीवन एक पाठशाला’ विषयक प्रतियोगिता के विजेताओं को गरिमामय समारोह में सम्मानित किया गया। इस अवसर पर विजेताओं एवं प्रतिभागियों को अपनी रचनाओं की प्रस्तुति का अवसर भी प्रदान किया गया। साहित्य, शिक्षा और सृजन के इस आयोजन में रचनाकारों ने अपनी प्रभावपूर्ण प्रस्तुतियों से उपस्थित साहित्यप्रेमियों को भाव-विभोर किया।",
      "समारोह में संस्था की ओर से शिक्षा एवं साहित्य के क्षेत्र में उल्लेखनीय योगदान, समर्पण, मार्गदर्शन एवं निरंतर प्रेरणा के लिए ‘शिक्षक-गौरव-सम्मान’ भी प्रदान किए गए।",
    ],
    lists: [
      {
        heading: "मंचासीन अतिथि",
        icon: Users,
        items: [
          "अध्यक्षता: डॉ. रमा सिंह — वरिष्ठ हिंदी साहित्यकार एवं सेवानिवृत्त हिंदी प्रवक्ता, पूर्व केंद्रीय हिंदी सेवा सदस्य, भारत सरकार",
          "मुख्य अतिथि: प्रो. (डॉ.) प्रेम दवे — राजस्थान विश्वविद्यालय तथा संस्थापक-निदेशक, प्रेमांजलि संगीत नृत्य संस्थान, जयपुर",
          "विशिष्ट अतिथि: सुधीर सक्सेना ‘सुधि’ — पूर्व डिप्टी न्यूज़ एडिटर, राजस्थान पत्रिका",
        ],
      },
      {
        heading: "शिक्षक-गौरव-सम्मान",
        icon: Sparkles,
        items: [
          "डॉ. दुर्गा प्रसाद अग्रवाल — पूर्व संयुक्त निदेशक, कॉलेज शिक्षा, राजस्थान",
          "आ. श्री जगदीश मोहन रावत — पूर्व निदेशक एवं उपायुक्त, केवीएस ZIET, चंडीगढ़",
        ],
      },
    ],
  },
  {
    title: "पत्रों ने जगाई संवेदनाओं की स्मृतियाँ",
    titleEn: "Panel Discussion on Letter Literature",
    date: "23 अगस्त 2026",
    location: "डॉ. राधाकृष्णन पुस्तकालय, जे.एल.एन. मार्ग, जयपुर",
    description: [
      "स्वयं सिद्धा साहित्यिक संस्थान, जयपुर, राजस्थान के तत्त्वावधान में डॉ. कृष्णा रावत द्वारा संकलित एवं सम्पादित ‘स्मृति में रचे-बसे अद्भुत पत्र’ तथा आ. साकार श्रीवास्तव ‘फ़लक’ एवं डॉ. कृष्णा रावत द्वारा सम्पादित ‘चयनित पत्र पुष्प’ पर परिचर्चा का आयोजन रविवार को किया गया।",
      "कार्यक्रम में साहित्यकारों, शिक्षाविदों एवं साहित्यप्रेमियों ने पत्र साहित्य की प्रासंगिकता, मानवीय संवेदनाओं और बदलते समय में पत्र लेखन की परम्परा पर विचार व्यक्त किए।",
    ],
    lists: [
      {
        heading: "मंचासीन अतिथि",
        icon: Users,
        items: [
          "अध्यक्षता: डॉ. सूरज सिंह नेगी — वरिष्ठ साहित्यकार एवं वरिष्ठ प्रशासनिक अधिकारी, विशिष्ट सहायक—सहकारिता एवं नागरिक उड्डयन राज्य मंत्री, राजस्थान सरकार",
          "मुख्य अतिथि: श्री टीकम चन्द बोहरा ‘अनजाना’ — वरिष्ठ साहित्यकार एवं आई.ए.एस., सदस्य—राजस्व मंडल, राजस्थान, अजमेर",
          "मंच संचालन: डॉ. आशा शर्मा — साहित्यकार, प्रधानाचार्य एवं जयपुर जिला नोडल अधिकारी, संस्कृत शिक्षा विभाग, राजस्थान",
        ],
      },
      {
        heading: "समीक्षक",
        icon: BookOpen,
        items: [
          "डॉ. सुषमा शर्मा",
          "कविता मुखर",
          "इन्द्र कुमार भंसाली",
          "ज्योत्सना सक्सेना",
        ],
      },
    ],
  },
  {
    title: "“सुनो स्वप्न रंजिता” उपन्यास का लोकार्पण",
    titleEn: "Book Launch: Novel “Suno Swapna Ranjita”",
    date: "02 अगस्त",
    location: "सन्मति भवन, अपभ्रंश साहित्य एकेडमी",
    description: [
      "अपभ्रंश साहित्य एकेडमी सन्मति भवन में प्रीति जैन द्वारा लिखित उपन्यास “सुनो स्वप्न रंजिता” का लोकार्पण प्रबोध गोविल जी की अध्यक्षता में किया गया।",
    ],
  },
  {
    title: "‘शब्द सरोवर’ एवं ‘पल-प्रतिपल’ का लोकार्पण",
    titleEn: "Book Launch: “Shabd Sarovar” & “Pal-Pratipal”",
    date: "11 जुलाई 2026",
    description: [
      "पटल प्रभारी पुष्पा माथुर की दो पुस्तकों ‘शब्द सरोवर’ एवं ‘पल-प्रतिपल’ का विधिवत् लोकार्पण मंचासीन प्रबुद्ध अतिथियों द्वारा किया गया।",
    ],
  },
  {
    title: "पुस्तक लोकार्पण, आर्टिकल 51 पर परिचर्चा एवं गणतंत्र दिवस समारोह",
    titleEn: "Book Launch, Discussion on Article 51 & Republic Day Celebration",
    date: "25 जनवरी 2026",
    description: [
      "राधा गुप्ता जी की पुस्तक “Drafting, pleading, and convincing” का लोकार्पण समारोह, आर्टिकल 51 पर परिचर्चा व गणतंत्र-दिवस के उपलक्ष्य में पूर्व दिवस पर आयोजित समारोह सम्पन्न हुआ।",
    ],
  },
  {
    title: "कहानी संग्रह एवं टीका का लोकार्पण समारोह",
    titleEn: "Launch of Story Collections & a Sanskrit Commentary",
    date: "03 अप्रैल 2024",
    location: "लाल बहादुर शास्त्री पब्लिक स्कूल, सेक्टर 5, सांगानेर",
    description: [
      "अध्यक्ष शब्द संसार श्री कृष्ण शर्मा की अध्यक्षता में डॉ बीना चतुर्वेदी द्वारा लिखित “दहलीज़ के सपने” व “सोने का पिंजरा” कहानी संग्रह का तथा ईश्वर प्रसाद चतुर्वेदी द्वारा लिखित “वेणीसंहार नाटकम्” की टीका का लोकार्पण समारोह सम्पन्न हुआ।",
    ],
  },
  {
    title: "“यथार्थ के अनुभूत” का लोकार्पण",
    titleEn: "Book Launch: “Yatharth Ke Anubhoot”",
    location: "डॉ राधाकृष्णन केंद्रीय पुस्तकालय, जयपुर",
    description: [
      "स्वयं सिद्धा साहित्यिक संस्थान के बैनर तले कमलेश माथुर की पुस्तक “यथार्थ के अनुभूत” का लोकार्पण कार्यक्रम आयोजित हुआ। कार्यक्रम के मुख्य अतिथि श्री नंद भारद्वाज थे। हिंदी और अंग्रेजी के जाने-माने साहित्यकार डॉ नरेंद्र शर्मा ‘कुसुम’ की अध्यक्षता में लोकार्पण कार्यक्रम सम्पन्न हुआ।",
    ],
  },
  {
    title: "‘कलिका’ व ‘नया जीवन’ काव्य संग्रह का लोकार्पण",
    titleEn: "Launch of Poetry Collections “Kalika” & “Naya Jeevan”",
    location: "आदर्श विद्या मंदिर, मानसरोवर, जयपुर",
    description: [
      "आदर्श विद्या मंदिर मानसरोवर के सभागार में डॉ शशि मंगल के ‘कलिका’ व ‘नया जीवन’ काव्य संग्रह का लोकार्पण समारोह आयोजित हुआ।",
    ],
  },
  {
    title: "“आदिवासी” एवं “एहसास जीवन के” का लोकार्पण",
    titleEn: "Book Launch: “Adivasi” & “Ehsaas Jeevan Ke”",
    date: "29 अक्टूबर 2023",
    location: "इटरनल हॉस्पिटल, सांगानेर",
    description: [
      "इटरनल हॉस्पिटल सांगानेर के सभागार में डॉ कंचना सक्सेना की पुस्तक “आदिवासी” व पुष्पा माथुर जी की पुस्तक “एहसास जीवन के” का लोकार्पण किया गया।",
    ],
  },
  {
    title: "निःशुल्क चिकित्सा शिविर एवं काव्य सम्मेलन",
    titleEn: "Free Medical Camp & Poets' Meet",
    date: "01 जुलाई 2023",
    time: "प्रातः 11:00 बजे",
    location: "HCG कैंसर हॉस्पिटल, जयपुर",
    description: [
      "अखिल भारतीय कायस्थ महासभा जयपुर व कायस्थ महासभा मानसरोवर व स्वयं सिद्ध साहित्य संस्थान जयपुर के संयुक्त तत्वावधान में HCG कैंसर हॉस्पिटल में निःशुल्क चिकित्सा शिविर आयोजित हुआ। डॉ विनोद शर्मा ने कैंसर के कारण व लक्षण की चर्चा की और समय पर उपचार करने पर किस तरह कैंसर से निजात पाई जा सकती है, यह जानकारी विस्तार से दी।",
      "शिविर के साथ-साथ हॉस्पिटल के कॉन्फ़्रेन्स हॉल में अभाकाम प्रदेश अध्यक्ष अरुण सक्सेना, मुख्य अतिथि प्रदेश महामंत्री धर्मेंद्र जौहरी व श्री वरूण चतुर्वेदी जी की अध्यक्षता में, सीमा वालिया जी के कुशल संचालन में कवि सम्मेलन सम्पन्न हुआ। अर्चना माथुर ने माँ वीणा पाणि की आराधना मधुर स्वर में प्रस्तुत की।",
      "काव्य पाठ की शानदार प्रस्तुतियों ने श्रोताओं को भाव विभोर कर दिया और हॉल तालियों की गड़गड़ाहट से गूंज उठा। आदरणीय धर्मेन्द्र जोहरी जी ने सभी आगन्तुक अतिथियों का व HCG हॉस्पिटल का, डॉ विनोद शर्मा जी का आभार व्यक्त किया।",
    ],
    guestsLabel: "वरिष्ठ साहित्यकारों की गरिमामय उपस्थिति",
    guests: [
      "रवि माथुर",
      "शालिनी माथुर",
      "रत्न सक्सैना",
      "किशोर पारीक जी",
      "भगवान सहाय जी पारीक",
      "इन्द्र भंसाली जी",
      "शशि पाठक",
      "पूजा उपाध्याय",
      "करुणा श्रीवास्तव",
    ],
    lists: [
      {
        heading: "काव्य पाठ",
        icon: Mic2,
        inline: true,
        items: [
          "अंजू सक्सैना",
          "ज्योत्सना सक्सैना",
          "डॉ कंचना सक्सैना",
          "पूनम केसवानी",
          "सुशीला शर्मा",
          "डॉ रीता सोलंकी",
          "ऊषा शर्मा",
          "शशि पाठक",
          "चारु सक्सैना",
          "कमलेश शर्मा",
          "पवनेश्वरी वर्मा",
          "प्रशंसा श्रीवास्तव",
          "अनुगूँज सक्सेना",
          "सौम्या श्रीवास्तव",
          "आशा सक्सैना",
          "सरोज चौहान",
          "साधना रस्तोगी",
          "इन्द्र भंसाली",
          "किशोर पारीक जी",
        ],
      },
    ],
  },
  {
    title: "लोकार्पण एवं सम्मान समारोह",
    titleEn: "Book Launch & Felicitation Ceremony",
    date: "24 दिसम्बर 2022",
    location: "ऑडिटोरियम, इटरनल मल्टीस्पेशलिटी हॉस्पिटल, जयपुर",
    description: [
      "अखिल भारतीय कायस्थ महासभा एवं स्वयंसिद्धा साहित्यिक संस्थान जयपुर राजस्थान के संयुक्त तत्वावधान में श्री अजीत सक्सैना, प्रबंधक, जयपुर विद्युत वि. नि. की अध्यक्षता में लोकार्पण एवं सम्मान समारोह सम्पन्न हुआ।",
    ],
    guestsLabel: "गरिमामय उपस्थिति",
    guests: [
      "धर्मेंद्र ज़ौहरी (प्र.म.)",
      "दीपा माथुर (म.जि.अ.)",
      "राधेश्याम सक्सैना",
      "अरुण सक्सैना (जि.अ.)",
      "ज्ञानवती सक्सैना (अध्यक्ष, स्व.सि. सा. संस्थान)",
    ],
    lists: [
      {
        heading: "पुस्तक लोकार्पण",
        icon: BookOpen,
        items: [
          "वार्षिक स्मारिका — अखिल भारतीय कायस्थ महासभा",
          "“जीने की राह” — लेखिका करूणा श्री (कथासंग्रह)",
          "“अनुभूति” — पुष्पा माथुर (काव्य संग्रह)",
          "“रिश्तों की डोर” — बृजेन्द्र मोहन माथुर (काव्य संग्रह)",
          "“रज़ा-ए-शकुन” — स्व. रघुवीर शंकर माथुर ‘रज़ा’ (काव्य संग्रह)",
          "“अज्ञेय” — ज्ञानवती सक्सैना (एवं अन्य छः कवि), सम्पादक: जितेन्द्र चौहान जी (साझा काव्य संग्रह)",
        ],
      },
      {
        heading: "सम्मान समारोह",
        icon: Sparkles,
        items: [
          "स्व. देवी सहाय सक्सेना जी की पुण्य स्मृति में आयोजित प्रतियोगिता का सम्मान समारोह",
          "करुणा श्रीवास्तव द्वारा अपने भाई स्व. अनूप श्रीवास्तव जी की स्मृति में आयोजित सम्मान समारोह",
        ],
      },
    ],
  },
];

const awards = [
  {
    title: "‘जीवन एक पाठशाला’ प्रतियोगिता के परिणाम",
    titleEn: "“Life Is a School” Competition Results",
    badge: "शिक्षक-दिवस 2026",
    description: [
      "शिक्षक-दिवस 2026 प्रतियोगिता में उत्कृष्ट रचनात्मक प्रस्तुतियों के आधार पर ‘जीवन एक पाठशाला’ प्रतियोगिता के परिणाम इस प्रकार रहे:",
    ],
    winners: [
      { prize: "प्रथम स्थान", name: "नीता भारद्वाज" },
      { prize: "प्रथम स्थान", name: "भँवर सिंह" },
      { prize: "प्रथम स्थान", name: "पूजा शर्मा" },
      { prize: "द्वितीय स्थान", name: "पंकज सोनी" },
      { prize: "द्वितीय स्थान", name: "सुशीला शर्मा" },
      { prize: "द्वितीय स्थान", name: "डॉ. श्यामसिंह पुरोहित" },
      { prize: "तृतीय स्थान", name: "अतिशा माथुर" },
      { prize: "तृतीय स्थान", name: "प्रियंका पुरोहित" },
      { prize: "सांत्वना पुरस्कार", name: "अरुण ठाकर" },
      { prize: "सांत्वना पुरस्कार", name: "सलोनी क्षितिज" },
      { prize: "सांत्वना पुरस्कार", name: "स्नेहलता सहाय" },
      { prize: "सांत्वना पुरस्कार", name: "वंदना सक्सेना" },
      { prize: "सांत्वना पुरस्कार", name: "डॉ. नेहा पारीक" },
    ],
    groups: [
      {
        heading: "सहभागिता सम्मान",
        inline: true,
        items: [
          "डॉ. पूनम केसवानी",
          "कुमकुम माथुर",
          "विमला शर्मा",
          "अर्चना निगम",
          "डॉ. मंजुला भट्ट",
          "अमिता माथुर",
          "डॉ. राजमति पोखरना सुराना",
          "अनुराधा माथुर",
          "राधा गुप्ता",
        ],
      },
      {
        heading: "शिक्षक-गौरव-सम्मान",
        note: "शिक्षा एवं साहित्य के क्षेत्र में उल्लेखनीय योगदान, समर्पण, मार्गदर्शन एवं निरंतर प्रेरणा के लिए संस्था की ओर से ‘शिक्षक-गौरव-सम्मान’ प्रदान किया गया।",
        items: [
          "डॉ. दुर्गा प्रसाद अग्रवाल — पूर्व संयुक्त निदेशक, कॉलेज शिक्षा, राजस्थान",
          "आ. श्री जगदीश मोहन रावत — पूर्व निदेशक एवं उपायुक्त, केवीएस ZIET, चंडीगढ़",
        ],
      },
    ],
  },
  {
    title: "दीपावली काव्य प्रतियोगिता — “तमसो मा ज्योतिर्गमय”",
    titleEn: "Diwali Poetry Competition — “From Darkness to Light”",
    badge:
      "स्मृति शेष शिक्षाविद् स्व. जगमेहन सक्सैना जी भाई साहब की स्मृति में",
    description: [
      "स्वयं सिद्धा साहित्यिक संस्थान जयपुर राजस्थान की ओर से दीपावली के पावन पर्व पर वीडियो के माध्यम से दीपावली / “तमसो मा ज्योतिर्गमय” थीम पर निःशुल्क प्रतियोगिता आयोजित की गई। सभी प्रतिभागियों द्वारा इतनी उत्कृष्ट रचनाएँ प्रस्तुत की गईं कि निर्णायक मण्डल को भी निर्णय करना मुश्किल रहा। उसके लिए सभी प्रतिभागी साधुवाद के पात्र हैं।",
      "Viewers आधारित एवं भाव, शिल्प एवं प्रस्तुति के आधार पर निर्णायक मण्डल द्वारा किया गया निर्णय इस प्रकार है:",
    ],
    winners: [
      { prize: "प्रथम पुरस्कार", name: "संगीता गुप्ता", amount: "₹2100" },
      { prize: "द्वितीय पुरस्कार", name: "पुष्पा पालीवाल", amount: "₹1100" },
      { prize: "तृतीय पुरस्कार", name: "वर्षा गुप्ता", amount: "₹700" },
      { prize: "तृतीय पुरस्कार", name: "एकता शर्मा", amount: "₹700" },
      { prize: "सांत्वना पुरस्कार", name: "कंचना सक्सैना", amount: "₹500" },
      { prize: "सांत्वना पुरस्कार", name: "रेखा गुप्ता", amount: "₹500" },
      { prize: "सांत्वना पुरस्कार", name: "कमलेश शर्मा", amount: "₹500" },
      { prize: "सांत्वना पुरस्कार", name: "सपना व्यास", amount: "₹500" },
      { prize: "सांत्वना पुरस्कार", name: "नम्रता शर्मा", amount: "₹500" },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Events = () => {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section className="relative overflow-hidden bg-[#FDFBF6] pb-16 pt-16 lg:pb-20 lg:pt-20">

        <div className="absolute top-0 -left-32 h-96 w-96 rounded-full bg-[#123E73]/5 blur-3xl" />
        <div className="absolute bottom-0 -right-32 h-[420px] w-[420px] rounded-full bg-[#D4A72C]/10 blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4A72C]" />
              <span className="text-sm font-bold uppercase tracking-[4px] text-[#C99722]">
                Our Events
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-[#123E73] sm:text-6xl">
              जहाँ विचार
              <span className="block text-[#C99722]">प्रेरणा से मिलते हैं।</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              साहित्यिक संवाद, काव्य समागम, लेखक मिलन और सांस्कृतिक कार्यक्रमों
              के माध्यम से उन विशिष्ट आवाज़ों से जुड़ें, जो हमें प्रेरित करती हैं।
            </p>
          </motion.div>

        </div>
      </section>


      {/* ================= FEATURED EVENT ================= */}
      <section className="relative bg-white pb-8">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border-2 border-[#D4A72C]/30 bg-[#123E73] shadow-xl"
          >
            <div className="grid lg:grid-cols-[0.35fr_1fr]">

              {/* Highlight */}
              <div className="flex flex-col items-center justify-center bg-[#D4A72C] px-8 py-10 text-center">
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#123E73]/70">
                  Featured Event
                </span>

                <div className="mt-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#123E73]">
                  <Mic2 size={42} className="text-[#D4A72C]" />
                </div>

                <div className="mt-6 h-px w-16 bg-[#123E73]/30" />

                <span className="mt-5 text-sm font-semibold text-[#123E73]/80">
                  साहित्यिक कार्यक्रम
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

                <p className="relative mt-5 max-w-2xl leading-8 text-white/70">
                  लेखकों, कवियों, विचारकों और साहित्य प्रेमियों को एक साथ लाने
                  वाली संवाद, विचारों और साहित्यिक अभिव्यक्तियों से भरी एक
                  रोचक साहित्यिक संध्या।
                </p>

                <div className="relative mt-8 flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:flex-wrap">

                  <div className="flex items-center gap-2">
                    <Clock3 size={18} className="text-[#D4A72C]" />
                    04:00 PM
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#D4A72C]" />
                    जयपुर, राजस्थान
                  </div>

                </div>

                <a
                  href="mailto:info@swayamsiddhasahityik.org"
                  className="group relative mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A72C] px-6 py-3.5 text-sm font-bold text-[#123E73] transition hover:scale-105"
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

        </div>
      </section>


      {/* ================= ALL EVENTS ================= */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-4"
          >
            <CalendarDays className="text-[#C99722]" size={23} />
            <h2 className="text-2xl font-bold text-[#123E73]">
              सभी कार्यक्रम
              <span className="ml-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C99722]">
                All Events
              </span>
            </h2>
            <div className="h-px flex-1 bg-[#123E73]/10" />
          </motion.div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {events.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.div
                  key={event.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[1.7rem] border-2 border-[#D4A72C]/30 bg-white p-7 shadow-[0_18px_45px_rgba(7,30,61,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A72C]"
                >

                  {/* Top */}
                  <div className="flex items-start justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#123E73] text-[#D4A72C] transition-all duration-300 group-hover:bg-[#D4A72C] group-hover:text-[#123E73]">
                      <Icon size={26} strokeWidth={2} />
                    </div>

                    <span className="rounded-full bg-[#D4A72C]/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#9B7614]">
                      {event.type}
                    </span>
                  </div>


                  {/* Content */}
                  <h3 className="mt-7 text-2xl font-bold leading-tight text-[#123E73]">
                    {event.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-gray-600">
                    {event.description}
                  </p>


                  {/* Details */}
                  <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Clock3 size={17} className="text-[#C99722]" />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <MapPin size={17} className="text-[#C99722]" />
                      {event.location}
                    </div>

                  </div>


                  {/* CTA */}
                  <a
                    href="mailto:info@swayamsiddhasahityik.org"
                    className="mt-7 flex items-center gap-2 text-sm font-bold text-[#123E73] transition group-hover:text-[#C99722]"
                  >
                    और जानें
                    <ArrowUpRight
                      size={17}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= MISSION & REGULAR ACTIVITIES ================= */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-4"
          >
            <Sparkles className="text-[#C99722]" size={23} />
            <h2 className="text-2xl font-bold text-[#123E73]">
              हमारी साहित्य साधना
              <span className="ml-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C99722]">
                Our Literary Journey
              </span>
            </h2>
            <div className="h-px flex-1 bg-[#123E73]/10" />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            {missionParagraphs.map((para) => (
              <p key={para} className="mb-5 text-lg leading-9 text-gray-600">
                {para}
              </p>
            ))}
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {regularActivities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <motion.div
                  key={activity.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[1.7rem] border-2 border-[#D4A72C]/30 bg-[#FDFBF6] p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123E73] text-[#D4A72C]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#123E73]">
                    {activity.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-gray-600">
                    {activity.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 rounded-[1.7rem] bg-[#123E73] p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-white">
              पर्वों पर ऑनलाइन प्रतियोगिताएँ एवं ऑफ़लाइन सम्मान समारोह
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              इन अवसरों पर ऑनलाइन प्रतियोगिताएँ आयोजित कर विजेता साहित्यकारों
              के सम्मान हेतु ऑफ़लाइन सम्मान समारोह आयोजित किए जाते रहे हैं।
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {festivalCompetitions.map((festival) => (
                <span
                  key={festival}
                  className="rounded-full bg-[#D4A72C] px-4 py-1.5 text-sm font-semibold text-[#123E73]"
                >
                  {festival}
                </span>
              ))}
            </div>
            <p className="mt-8 border-t border-white/15 pt-6 italic leading-8 text-white/80">
              इन सभी आयोजनों में सभी बहनों का जो सहयोग मिल रहा है, वह सराहनीय
              है; उसके लिए सभी बहनें साधुवाद की पात्र हैं। आप सभी बहनों का मैं
              हृदय से आभार व्यक्त करती हूँ।
            </p>
          </motion.div>

        </div>
      </section>


      {/* ================= PAST EVENTS ================= */}
      <section className="relative overflow-hidden bg-[#FDFBF6] py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-4"
          >
            <BookOpen className="text-[#C99722]" size={23} />
            <h2 className="text-2xl font-bold text-[#123E73]">
              सम्पन्न कार्यक्रम
              <span className="ml-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C99722]">
                Past Events
              </span>
            </h2>
            <div className="h-px flex-1 bg-[#123E73]/10" />
          </motion.div>

          <div className="space-y-8">
            {pastEvents.map((event) => (
              <motion.article
                key={event.title + event.date}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden rounded-[2rem] border-2 border-[#D4A72C]/30 bg-white shadow-[0_18px_45px_rgba(7,30,61,0.08)]"
              >
                <div className="grid lg:grid-cols-[0.32fr_1fr]">

                  {/* Date */}
                  <div className="flex flex-col items-center justify-center bg-[#123E73] px-8 py-10 text-center">
                    <CalendarDays size={38} className="text-[#D4A72C]" />
                    {event.date && (
                      <span className="mt-5 text-2xl font-bold text-white">
                        {event.date}
                      </span>
                    )}
                    {event.time && (
                      <span className="mt-2 flex items-center gap-2 text-sm text-white/75">
                        <Clock3 size={16} className="text-[#D4A72C]" />
                        {event.time}
                      </span>
                    )}
                    {event.location && (
                      <>
                        <div className="mt-5 h-px w-16 bg-[#D4A72C]/50" />
                        <span className="mt-5 flex items-start gap-2 text-sm leading-6 text-white/75">
                          <MapPin size={17} className="mt-1 shrink-0 text-[#D4A72C]" />
                          {event.location}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Details */}
                  <div className="p-8 md:p-10">
                    <span className="inline-flex rounded-full bg-[#D4A72C]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#9B7614]">
                      Completed
                    </span>

                    <h3 className="mt-5 text-3xl font-bold leading-tight text-[#123E73]">
                      {event.title}
                    </h3>

                    {event.titleEn && (
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#C99722]">
                        {event.titleEn}
                      </p>
                    )}

                    {event.description.map((para) => (
                      <p key={para} className="mt-4 leading-8 text-gray-600">
                        {para}
                      </p>
                    ))}

                    {event.guests && (
                      <>
                        <h4 className="mt-6 text-sm font-bold text-[#9B7614]">
                          {event.guestsLabel}
                        </h4>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {event.guests.map((guest) => (
                            <span
                              key={guest}
                              className="rounded-full border border-[#123E73]/15 px-3 py-1 text-sm text-[#123E73]"
                            >
                              {guest}
                            </span>
                          ))}
                        </div>
                      </>
                    )}

                    {event.lists && (
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      {event.lists.map((list) => {
                        const ListIcon = list.icon;

                        return (
                          <div
                            key={list.heading}
                            className={list.inline ? "md:col-span-2" : undefined}
                          >
                            <h4 className="flex items-center gap-2 text-lg font-bold text-[#123E73]">
                              <ListIcon size={19} className="text-[#C99722]" />
                              {list.heading}
                            </h4>

                            {list.inline ? (
                              <div className="mt-4 flex flex-wrap gap-2">
                                {list.items.map((item) => (
                                  <span
                                    key={item}
                                    className="rounded-full bg-[#D4A72C]/15 px-3 py-1 text-sm text-[#123E73]"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <ul className="mt-4 space-y-3">
                                {list.items.map((item) => (
                                  <li key={item} className="text-[15px] leading-7 text-gray-600">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    )}
                  </div>

                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>


      {/* ================= AWARDS ================= */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 flex items-center gap-4"
          >
            <Trophy className="text-[#C99722]" size={23} />
            <h2 className="text-2xl font-bold text-[#123E73]">
              सम्मान एवं पुरस्कार
              <span className="ml-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C99722]">
                Honours & Awards
              </span>
            </h2>
            <div className="h-px flex-1 bg-[#123E73]/10" />
          </motion.div>

          <div className="space-y-8">
            {awards.map((award) => (
              <motion.article
                key={award.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden rounded-[2rem] border-2 border-[#D4A72C]/30 bg-[#FDFBF6] p-8 shadow-[0_18px_45px_rgba(7,30,61,0.08)] md:p-10"
              >
                <span className="inline-flex rounded-full bg-[#D4A72C]/15 px-4 py-1.5 text-xs font-bold text-[#9B7614]">
                  {award.badge}
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-[#123E73]">
                  {award.title}
                </h3>

                {award.titleEn && (
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#C99722]">
                    {award.titleEn}
                  </p>
                )}

                {award.description.map((para) => (
                  <p key={para} className="mt-4 max-w-4xl leading-8 text-gray-600">
                    {para}
                  </p>
                ))}

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {award.winners.map((winner) => {
                    const isTop =
                      winner.prize.startsWith("प्रथम") ||
                      winner.prize.startsWith("द्वितीय");

                    return (
                      <div
                        key={winner.name}
                        className={`flex items-center gap-4 rounded-2xl border p-5 ${
                          isTop
                            ? "border-[#D4A72C] bg-[#123E73]"
                            : "border-[#123E73]/10 bg-white"
                        }`}
                      >
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                            isTop
                              ? "bg-[#D4A72C] text-[#123E73]"
                              : "bg-[#D4A72C]/15 text-[#9B7614]"
                          }`}
                        >
                          <Award size={22} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-xs font-bold ${
                              isTop ? "text-[#D4A72C]" : "text-[#9B7614]"
                            }`}
                          >
                            {winner.prize}
                          </p>
                          <p
                            className={`mt-1 text-lg font-bold ${
                              isTop ? "text-white" : "text-[#123E73]"
                            }`}
                          >
                            {winner.name}
                          </p>
                        </div>
                        {winner.amount && (
                          <span
                            className={`text-sm font-bold ${
                              isTop ? "text-[#D4A72C]" : "text-[#123E73]"
                            }`}
                          >
                            {winner.amount}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {award.groups?.map((group) => (
                  <div key={group.heading} className="mt-8">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-[#123E73]">
                      <Sparkles size={19} className="text-[#C99722]" />
                      {group.heading}
                    </h4>

                    {group.note && (
                      <p className="mt-3 max-w-4xl leading-7 text-gray-600">
                        {group.note}
                      </p>
                    )}

                    {group.inline ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#123E73]/15 bg-white px-3 py-1 text-sm text-[#123E73]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <ul className="mt-4 space-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="text-[15px] leading-7 text-gray-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </motion.article>
            ))}
          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-[#FDFBF6] py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-6 rounded-[1.8rem] border-2 border-[#D4A72C]/30 bg-[#123E73] px-8 py-10 shadow-xl sm:px-12 md:flex-row"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                हमारे कार्यक्रमों से जुड़े रहें।
              </h3>
              <p className="mt-2 text-white/70">
                हमारे नवीनतम साहित्यिक कार्यक्रमों और घोषणाओं से जुड़े रहें।
              </p>
            </div>

            <a
              href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D4A72C] px-7 py-3.5 font-bold text-[#123E73] shadow-lg transition-transform hover:scale-105"
            >
              हमसे जुड़ें
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Events;