// import React from "react";
// import { motion } from "framer-motion";
// import {
//   CalendarDays,
//   MapPin,
//   ArrowUpRight,
//   Mic2,
//   BookOpen,
//   Users,
// } from "lucide-react";

// const events = [
//   {
//     number: "01",
//     type: "LITERARY EVENT",
//     title: "Literary Conversations",
//     description:
//       "Meaningful conversations with writers, poets, thinkers and distinguished voices from the world of literature.",
//     date: "Upcoming",
//     location: "Jaipur, Rajasthan",
//     icon: Mic2,
//     image:
//       "/img5.png",
//   },
//   {
//     number: "02",
//     type: "POETRY & AUTHORS",
//     title: "Author & Poet Meet",
//     description:
//       "An engaging platform where readers and literature enthusiasts connect with authors and poets.",
//     date: "Upcoming",
//     location: "Jaipur, Rajasthan",
//     icon: BookOpen,
//     image:
//       "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
//   },
//   {
//     number: "03",
//     type: "CULTURAL EVENT",
//     title: "Sahityik Gatherings",
//     description:
//       "Celebrating literature, culture and creative expression through thoughtfully curated gatherings.",
//     date: "Upcoming",
//     location: "Jaipur, Rajasthan",
//     icon: Users,
//     image:
//       "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
//   },
// ];

// const EventsSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#FDFBF6] py-24 lg:py-32">

//       {/* Background */}
//       <div className="absolute inset-0">

//         <div className="absolute left-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-[#D4A72C]/10 blur-[120px]" />

//         <div className="absolute right-[-150px] bottom-0 h-[500px] w-[500px] rounded-full bg-[#123E73]/5 blur-[120px]" />

//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage:
//               "linear-gradient(#123E73 1px, transparent 1px), linear-gradient(90deg, #123E73 1px, transparent 1px)",
//             backgroundSize: "70px 70px",
//           }}
//         />

//       </div>


//       <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">


//         {/* ================= HEADER ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="mb-16"
//         >

//           <div className="mb-5 flex items-center gap-3">

//             <span className="h-[2px] w-10 bg-[#D4A72C]" />

//             <span className="text-sm font-bold uppercase tracking-[4px] text-[#C99722]">
//               Our Events
//             </span>

//           </div>


//           <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

//             <h2 className="text-4xl font-bold leading-tight text-[#123E73] sm:text-5xl lg:text-6xl">

//               Where
//               <span className="text-[#C99722]"> Ideas </span>

//               <br />

//               Meet Inspiration.

//             </h2>


//             <p className="max-w-xl text-lg leading-8 text-gray-600 lg:ml-auto">

//               Explore literary conversations, poetry gatherings,
//               author interactions and cultural programs that bring
//               remarkable voices together.

//             </p>

//           </div>

//         </motion.div>



//         {/* ================= FEATURED EVENT ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="group relative mb-8 min-h-[430px] overflow-hidden rounded-[32px] shadow-xl"
//         >

//           {/* Image */}

//           <img
//             src="/bg1.png"
//             alt="Literary event audience"
//             className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
//           />


//           {/* Overlay */}

//           <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B]/90 via-[#123E73]/70 to-[#123E73]/20" />


//           {/* Gold Overlay */}

//           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/60 via-transparent to-transparent" />


//           {/* Content */}

//           <div className="relative z-10 flex min-h-[430px] items-end p-8 sm:p-10 lg:p-14">

//             <div className="max-w-3xl">

//               <div className="mb-5 flex flex-wrap items-center gap-3">

//                 <span className="rounded-full border border-[#D4A72C]/50 bg-[#D4A72C]/15 px-4 py-2 text-xs font-bold tracking-[2px] text-[#F2CD6E] backdrop-blur-md">
//                   FEATURED PROGRAM
//                 </span>

//                 <span className="text-white/40">
//                   •
//                 </span>

//                 <span className="text-sm text-white/80">
//                   Jaipur, Rajasthan
//                 </span>

//               </div>


//               <h3 className="text-4xl font-bold leading-tight text-white sm:text-5xl">

//                 Celebrating the

//                 <span className="text-[#E4BB46]">
//                   {" "}Power of Words.
//                 </span>

//               </h3>


//               <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">

//                 Literary conversations, creative expressions and
//                 meaningful interactions that celebrate the timeless
//                 power of literature.

//               </p>


//               <div className="mt-7 flex flex-wrap gap-5">

//                 <div className="flex items-center gap-2 text-sm text-white/80">

//                   <CalendarDays
//                     size={17}
//                     className="text-[#E4BB46]"
//                   />

//                   Upcoming Programs

//                 </div>


//                 <div className="flex items-center gap-2 text-sm text-white/80">

//                   <MapPin
//                     size={17}
//                     className="text-[#E4BB46]"
//                   />

//                   Jaipur, Rajasthan

//                 </div>

//               </div>

//             </div>


//             {/* Button */}

//             <motion.a
//               href="/events"
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.96 }}
//               className="absolute bottom-8 right-8 hidden h-14 w-14 items-center justify-center rounded-full bg-[#D4A72C] text-[#123E73] shadow-xl sm:flex"
//             >

//               <ArrowUpRight size={22} />

//             </motion.a>

//           </div>

//         </motion.div>



//         {/* ================= IMAGE CARDS ================= */}

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

//           {events.map((event, index) => {

//             const Icon = event.icon;

//             return (

//               <motion.article
//                 key={event.number}
//                 initial={{
//                   opacity: 0,
//                   y: 60,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.2,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.15,
//                 }}
//                 whileHover={{
//                   y: -10,
//                 }}
//                 className="group relative overflow-hidden rounded-[28px] border border-[#123E73]/10 bg-white shadow-lg"
//               >

//                 {/* IMAGE */}

//                 <div className="relative h-60 overflow-hidden">

//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />


//                   {/* Image Overlay */}

//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />


//                   {/* Number */}

//                   <span className="absolute right-5 top-5 text-5xl font-bold text-white/30">
//                     {event.number}
//                   </span>


//                   {/* Icon */}

//                   <motion.div
//                     whileHover={{
//                       rotate: 8,
//                       scale: 1.1,
//                     }}
//                     className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C] shadow-lg"
//                   >

//                     <Icon
//                       size={21}
//                       className="text-[#123E73]"
//                     />

//                   </motion.div>

//                 </div>


//                 {/* CONTENT */}

//                 <div className="p-7">

//                   <p className="text-xs font-bold tracking-[2px] text-[#C99722]">
//                     {event.type}
//                   </p>


//                   <h3 className="mt-3 text-2xl font-bold text-[#123E73]">
//                     {event.title}
//                   </h3>


//                   <p className="mt-3 leading-7 text-gray-600">
//                     {event.description}
//                   </p>


//                   {/* Meta */}

//                   <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">

//                     <div className="flex items-center gap-2 text-sm text-gray-500">

//                       <CalendarDays size={16} />

//                       {event.date}

//                     </div>


//                     <div className="flex items-center gap-2 text-sm text-gray-500">

//                       <MapPin size={16} />

//                       {event.location}

//                     </div>

//                   </div>


//                   {/* Link */}

//                   <a
//                     href="/events"
//                     className="mt-6 inline-flex items-center gap-2 font-semibold text-[#C99722] transition-all group-hover:gap-3"
//                   >

//                     Explore Event

//                     <ArrowUpRight size={17} />

//                   </a>

//                 </div>

//               </motion.article>

//             );

//           })}

//         </div>


//         {/* Bottom CTA */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="mt-12 text-center"
//         >

//           <a
//             href="/events"
//             className="inline-flex items-center gap-2 rounded-full border border-[#123E73]/20 px-7 py-3.5 font-semibold text-[#123E73] transition-all hover:bg-[#123E73] hover:text-white"
//           >

//             Explore All Events

//             <ArrowUpRight size={18} />

//           </a>

//         </motion.div>

//       </div>

//     </section>
//   );
// };

// export default EventsSection;
import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Mic2,
  BookOpen,
  Users,
} from "lucide-react";

const events = [
  {
    number: "01",
    type: "साहित्यिक कार्यक्रम",
    title: "साहित्यिक संवाद",
    description:
      "लेखकों, कवियों, विचारकों और साहित्य जगत की प्रतिष्ठित आवाज़ों के साथ सार्थक संवाद।",
    date: "आगामी",
    location: "जयपुर, राजस्थान",
    icon: Mic2,
    image: "/img5.png",
  },
  {
    number: "02",
    type: "कविता एवं लेखक",
    title: "लेखक एवं कवि मिलन",
    description:
      "एक ऐसा मंच जहाँ पाठक और साहित्य प्रेमी लेखकों एवं कवियों से जुड़ते हैं और विचार साझा करते हैं।",
    date: "आगामी",
    location: "जयपुर, राजस्थान",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    type: "सांस्कृतिक कार्यक्रम",
    title: "साहित्यिक समागम",
    description:
      "साहित्य, संस्कृति और रचनात्मक अभिव्यक्ति का उत्सव, विशेष रूप से आयोजित साहित्यिक समागमों के माध्यम से।",
    date: "आगामी",
    location: "जयपुर, राजस्थान",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85",
  },
];

const EventsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF6] py-24 lg:py-32">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute left-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-[#D4A72C]/10 blur-[120px]" />

        <div className="absolute right-[-150px] bottom-0 h-[500px] w-[500px] rounded-full bg-[#123E73]/5 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#123E73 1px, transparent 1px), linear-gradient(90deg, #123E73 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

      </div>


      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >

          <div className="mb-5 flex items-center gap-3">

            <span className="h-[2px] w-10 bg-[#D4A72C]" />

            <span className="text-sm font-bold uppercase tracking-[4px] text-[#C99722]">
              Our Events
            </span>

          </div>


          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

            <h2 className="text-4xl font-bold leading-tight text-[#123E73] sm:text-5xl lg:text-6xl">

              जहाँ
              <span className="text-[#C99722]"> विचार </span>

              <br />

              प्रेरणा से मिलते हैं।

            </h2>


            <p className="max-w-xl text-lg leading-8 text-gray-600 lg:ml-auto">

              साहित्यिक संवाद, कविता समागम, लेखक परिचर्चा और सांस्कृतिक
              कार्यक्रमों का अनुभव करें, जहाँ साहित्य जगत की
              उल्लेखनीय आवाज़ें एक साथ आती हैं।

            </p>

          </div>

        </motion.div>


        {/* ================= FEATURED EVENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative mb-8 min-h-[430px] overflow-hidden rounded-[32px] shadow-xl"
        >

          {/* Image */}

          <img
            src="/bg1.png"
            alt="साहित्यिक कार्यक्रम में दर्शक"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />


          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3B]/90 via-[#123E73]/70 to-[#123E73]/20" />


          {/* Gold Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/60 via-transparent to-transparent" />


          {/* Content */}

          <div className="relative z-10 flex min-h-[430px] items-end p-8 sm:p-10 lg:p-14">

            <div className="max-w-3xl">

              <div className="mb-5 flex flex-wrap items-center gap-3">

                <span className="rounded-full border border-[#D4A72C]/50 bg-[#D4A72C]/15 px-4 py-2 text-xs font-bold tracking-[2px] text-[#F2CD6E] backdrop-blur-md">
                  Featured Event
                </span>

                <span className="text-white/40">
                  •
                </span>

                <span className="text-sm text-white/80">
                  जयपुर, राजस्थान
                </span>

              </div>


              <h3 className="text-4xl font-bold leading-tight text-white sm:text-5xl">

                शब्दों की

                <span className="text-[#E4BB46]">
                  {" "}शक्ति का उत्सव।
                </span>

              </h3>


              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">

                साहित्यिक संवाद, रचनात्मक अभिव्यक्तियाँ और सार्थक
                विचार-विमर्श, जो साहित्य की शाश्वत शक्ति का उत्सव मनाते हैं।

              </p>


              <div className="mt-7 flex flex-wrap gap-5">

                <div className="flex items-center gap-2 text-sm text-white/80">

                  <CalendarDays
                    size={17}
                    className="text-[#E4BB46]"
                  />

                  आगामी कार्यक्रम

                </div>


                <div className="flex items-center gap-2 text-sm text-white/80">

                  <MapPin
                    size={17}
                    className="text-[#E4BB46]"
                  />

                  जयपुर, राजस्थान

                </div>

              </div>

            </div>


            {/* Button */}

            <motion.a
              href="/events"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="absolute bottom-8 right-8 hidden h-14 w-14 items-center justify-center rounded-full bg-[#D4A72C] text-[#123E73] shadow-xl sm:flex"
            >

              <ArrowUpRight size={22} />

            </motion.a>

          </div>

        </motion.div>


        {/* ================= IMAGE CARDS ================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event, index) => {

            const Icon = event.icon;

            return (

              <motion.article
                key={event.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-[#123E73]/10 bg-white shadow-lg"
              >

                {/* IMAGE */}

                <div className="relative h-60 overflow-hidden">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />


                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />


                  {/* Number */}

                  <span className="absolute right-5 top-5 text-5xl font-bold text-white/30">
                    {event.number}
                  </span>


                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A72C] shadow-lg"
                  >

                    <Icon
                      size={21}
                      className="text-[#123E73]"
                    />

                  </motion.div>

                </div>


                {/* CONTENT */}

                <div className="p-7">

                  <p className="text-xs font-bold tracking-[2px] text-[#C99722]">
                    {event.type}
                  </p>


                  <h3 className="mt-3 text-2xl font-bold text-[#123E73]">
                    {event.title}
                  </h3>


                  <p className="mt-3 leading-7 text-gray-600">
                    {event.description}
                  </p>


                  {/* Meta */}

                  <div className="mt-6 space-y-3 border-t border-gray-200 pt-5">

                    <div className="flex items-center gap-2 text-sm text-gray-500">

                      <CalendarDays size={16} />

                      {event.date}

                    </div>


                    <div className="flex items-center gap-2 text-sm text-gray-500">

                      <MapPin size={16} />

                      {event.location}

                    </div>

                  </div>


                  {/* Link */}

                  <a
                    href="/events"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-[#C99722] transition-all group-hover:gap-3"
                  >

                    कार्यक्रम देखें

                    <ArrowUpRight size={17} />

                  </a>

                </div>

              </motion.article>

            );

          })}

        </div>


        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >

          <a
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-[#123E73]/20 px-7 py-3.5 font-semibold text-[#123E73] transition-all hover:bg-[#123E73] hover:text-white"
          >

            सभी कार्यक्रम देखें

            <ArrowUpRight size={18} />

          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default EventsSection;
