// import React from "react";
// import { ArrowRight, Play, CalendarDays, Sparkles } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="relative min-h-[calc(100vh-85px)] overflow-hidden bg-[#ffff]">

//       {/* Background Decorative Elements */}
//       <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-[#123E73]/5 blur-3xl" />
//       <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-[#D4A72C]/10 blur-3xl" />

//       {/* Decorative Lines */}
//       <div className="absolute top-0 right-[10%] h-full w-px bg-[#D4A72C]/10 hidden lg:block" />
//       <div className="absolute top-0 right-[30%] h-full w-px bg-[#123E73]/5 hidden lg:block" />

//       <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">

//         <div className="min-h-[calc(100vh-85px)] grid lg:grid-cols-2 items-center gap-12 py-16 lg:py-20">

//           {/* LEFT CONTENT */}
//           <div className="max-w-2xl">

//             {/* Small Label */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#123E73]/5 border border-[#123E73]/10 mb-7">

//               <Sparkles
//                 size={15}
//                 className="text-[#C99722]"
//               />

//               <span className="text-[#123E73] text-sm font-semibold tracking-wide">
//                 Celebrating Literature • Knowledge • Culture
//               </span>

//             </div>


//             {/* Main Heading */}
//             <h1 className="text-5xl sm:text-6xl lg:text-[72px] leading-[1.05] font-bold text-[#123E73] tracking-tight">

//               Where
//               <span className="block text-[#C99722]">
//                 Literature
//               </span>

//               <span className="block">
//                 Comes Alive.
//               </span>

//             </h1>


//             {/* Description */}
//             <p className="mt-7 text-lg lg:text-xl leading-8 text-gray-600 max-w-xl">

//               SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN is a literary and cultural
//               platform dedicated to bringing writers, poets, thinkers and
//               literature lovers together through meaningful events,
//               conversations and creative expressions.

//             </p>


//             {/* Buttons */}
//             <div className="mt-9 flex flex-wrap items-center gap-4">

//               <a
//                 href="/events"
//                 className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#123E73] text-white font-semibold shadow-lg shadow-[#123E73]/20 hover:bg-[#0D315B] transition-all duration-300"
//               >

//                 <CalendarDays size={19} />

//                 Explore Events

//                 <ArrowRight
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />

//               </a>


//               <a
//                 href="/interviews"
//                 className="group inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[#123E73]/20 bg-white text-[#123E73] font-semibold hover:border-[#C99722] hover:text-[#C99722] transition-all duration-300"
//               >

//                 <span className="w-8 h-8 rounded-full bg-[#123E73] text-white flex items-center justify-center group-hover:bg-[#C99722] transition">
//                   <Play
//                     size={14}
//                     fill="currentColor"
//                   />
//                 </span>

//                 Watch Interviews

//               </a>

//             </div>


//             {/* Bottom Stats */}
//             <div className="mt-12 pt-7 border-t border-gray-200 flex flex-wrap gap-8">

//               <div>
//                 <h3 className="text-2xl font-bold text-[#123E73]">
//                   700+
//                 </h3>

//                 <p className="text-sm text-gray-500 mt-1">
//                   Literary Videos
//                 </p>
//               </div>


//               <div className="w-px bg-gray-200 hidden sm:block" />


//               <div>
//                 <h3 className="text-2xl font-bold text-[#123E73]">
//                   100+
//                 </h3>

//                 <p className="text-sm text-gray-500 mt-1">
//                   Literary Voices
//                 </p>
//               </div>


//               <div className="w-px bg-gray-200 hidden sm:block" />


//               <div>
//                 <h3 className="text-2xl font-bold text-[#123E73]">
//                   Jaipur
//                 </h3>

//                 <p className="text-sm text-gray-500 mt-1">
//                   Rajasthan, India
//                 </p>
//               </div>

//             </div>

//           </div>


//           {/* RIGHT VISUAL */}
//           <div className="relative flex justify-center lg:justify-end">

//             {/* Outer Glow */}
//             <div className="absolute w-[430px] h-[430px] lg:w-[560px] lg:h-[560px] rounded-full bg-[#D4A72C]/10 blur-2xl" />


//             {/* Gold Circle */}
//             <div className="relative w-[350px] h-[350px] sm:w-[430px] sm:h-[430px] lg:w-[540px] lg:h-[540px] rounded-full border border-[#D4A72C]/50 flex items-center justify-center">

//               {/* Inner Circle */}
//               <div className="absolute inset-5 rounded-full border border-[#123E73]/10" />

//               {/* Logo */}
//               <div className="relative z-10 w-[300px] sm:w-[370px] lg:w-[470px] aspect-square rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden">

//                 <img
//                   src="/swayam-shida-logo.png"
//                   alt="SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN"
//                   className="w-full h-full object-contain"
//                 />

//               </div>

//             </div>


//             {/* Floating Card - Events */}
//             <div className="absolute z-20 -left-2 sm:left-0 lg:-left-8 top-16 bg-white rounded-2xl shadow-xl border border-[#D4A72C]/20 px-5 py-4 flex items-center gap-3">

//               <div className="w-11 h-11 rounded-xl bg-[#123E73] flex items-center justify-center">
//                 <CalendarDays
//                   size={20}
//                   className="text-white"
//                 />
//               </div>

//               <div>
//                 <p className="text-xs text-gray-500">
//                   Upcoming
//                 </p>

//                 <p className="font-bold text-[#123E73]">
//                   Literary Events
//                 </p>
//               </div>

//             </div>


//             {/* Floating Card - Knowledge */}
//             <div className="absolute z-20 -right-2 sm:right-0 lg:-right-5 bottom-14 bg-white rounded-2xl shadow-xl border border-[#D4A72C]/20 px-5 py-4">

//               <p className="text-xs text-gray-500">
//                 A platform for
//               </p>

//               <p className="font-bold text-[#123E73]">
//                 Knowledge & Creativity
//               </p>

//               <div className="flex gap-1 mt-2">

//                 <span className="w-2 h-2 rounded-full bg-[#D4A72C]" />
//                 <span className="w-2 h-2 rounded-full bg-[#123E73]" />
//                 <span className="w-2 h-2 rounded-full bg-[#D4A72C]" />

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* Bottom Decorative Wave */}
//       <div className="absolute bottom-0 left-0 right-0 h-8 bg-white/60 rounded-t-[50%]" />

//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CalendarDays,
  Sparkles,
  BookOpen,
  Feather,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-99px)] overflow-hidden bg-[#FDFBF6]">

      {/* ================= BACKGROUND ================= */}

      {/* Blue Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-[550px] w-[550px] rounded-full bg-[#123E73]/20 blur-[120px]"
      />

      {/* Gold Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.07, 0.14, 0.07],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#D4A72C]/20 blur-[130px]"
      />

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(#123E73 1px, transparent 1px),
              linear-gradient(90deg, #123E73 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Floating Dots */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.25, 0.8, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[7%] top-[25%] h-2 w-2 rounded-full bg-[#D4A72C]"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[45%] top-[18%] h-3 w-3 rounded-full bg-[#123E73]/20"
      />

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[18%] left-[50%] h-2 w-2 rounded-full bg-[#D4A72C]"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">

        <div className="grid min-h-[calc(100vh-99px)] items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">

          {/* ================= LEFT CONTENT ================= */}

          <div className="relative z-20 max-w-2xl">

            {/* Label */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#123E73]/10 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-sm"
            >

              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                <Sparkles
                  size={15}
                  className="text-[#C99722]"
                />
              </motion.div>

              <span className="text-sm font-semibold tracking-wide text-[#123E73]">
                Celebrating Literature • Knowledge • Culture
              </span>

            </motion.div>


            {/* ================= HEADING ================= */}

            <h1 className="text-5xl font-bold leading-[1.03] tracking-tight text-[#123E73] sm:text-6xl lg:text-[72px]">

              {/* Where */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                }}
                className="block"
              >
                Where
              </motion.span>


              {/* Literature */}

              <motion.span
                initial={{
                  opacity: 0,
                  x: -45,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.35,
                  ease: "easeOut",
                }}
                className="relative block text-[#C99722]"
              >
                Literature

                {/* Underline */}

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "150px" }}
                  transition={{
                    duration: 0.8,
                    delay: 1,
                  }}
                  className="absolute bottom-0 left-1 h-[4px] rounded-full bg-[#D4A72C]"
                />

              </motion.span>


              {/* Comes Alive */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                }}
                className="block"
              >
                Comes Alive.
              </motion.span>

            </h1>


            {/* ================= DESCRIPTION ================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.75,
              }}
              className="mt-7 max-w-xl text-lg leading-8 text-gray-600 lg:text-xl"
            >
              SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN is a literary and cultural
              platform dedicated to bringing writers, poets, thinkers and
              literature lovers together through meaningful events,
              conversations and creative expressions.
            </motion.p>


            {/* ================= BUTTONS ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.95,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >

              {/* Explore Events */}

              <motion.a
                href="/events"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-[#123E73] px-7 py-4 font-semibold text-white shadow-lg shadow-[#123E73]/20 transition-all duration-300 hover:bg-[#0D315B]"
              >

                <CalendarDays size={19} />

                Explore Events

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </motion.a>


              {/* Watch Interviews */}

              <motion.a
                href="/interviews"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center gap-3 rounded-full border border-[#123E73]/20 bg-white/80 px-7 py-4 font-semibold text-[#123E73] backdrop-blur-sm transition-all duration-300 hover:border-[#C99722] hover:text-[#C99722]"
              >

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123E73] text-white transition group-hover:bg-[#C99722]">

                  <Play
                    size={14}
                    fill="currentColor"
                  />

                </span>

                Watch Interviews

              </motion.a>

            </motion.div>


            {/* ================= STATS ================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1.15,
              }}
              className="mt-12 flex flex-wrap gap-8 border-t border-gray-200 pt-7"
            >

              <div>
                <h3 className="text-2xl font-bold text-[#123E73]">
                  700+
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Literary Videos
                </p>
              </div>


              <div className="hidden w-px bg-gray-200 sm:block" />


              <div>
                <h3 className="text-2xl font-bold text-[#123E73]">
                  100+
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Literary Voices
                </p>
              </div>


              <div className="hidden w-px bg-gray-200 sm:block" />


              <div>
                <h3 className="text-2xl font-bold text-[#123E73]">
                  Jaipur
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Rajasthan, India
                </p>
              </div>

            </motion.div>

          </div>


          {/* =================================================
              RIGHT SIDE
              SAME LOGO — NO ROTATING CIRCLES
          ================================================= */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Soft Glow Behind Logo */}

            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.45, 0.7, 0.45],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[480px] w-[480px] rounded-full bg-[#D4A72C]/10 blur-3xl lg:h-[600px] lg:w-[600px]"
            />


            {/* Main Gold Circle */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="relative flex h-[350px] w-[350px] items-center justify-center rounded-full border border-[#D4A72C]/50 sm:h-[430px] sm:w-[430px] lg:h-[540px] lg:w-[540px]"
            >

              {/* Simple Inner Border */}

              <div className="absolute inset-5 rounded-full border border-[#123E73]/10" />


              {/* ================= SAME LOGO ================= */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex aspect-square w-[300px] items-center justify-center overflow-hidden rounded-full bg-white shadow-2xl sm:w-[370px] lg:w-[470px]"
              >

                <img
                  src="/swayam-shida-logo.png"
                  alt="SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN"
                  className="h-full w-full object-contain"
                />

              </motion.div>

            </motion.div>


            {/* ================= EVENT CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="absolute top-16 z-20 hidden rounded-2xl border border-[#D4A72C]/20 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:left-0 sm:block lg:-left-8"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123E73]">

                  <CalendarDays
                    size={20}
                    className="text-white"
                  />

                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    Upcoming
                  </p>

                  <p className="font-bold text-[#123E73]">
                    Literary Events
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ================= KNOWLEDGE CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1.2,
              }}
              className="absolute bottom-14 z-20 hidden rounded-2xl border border-[#D4A72C]/20 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md sm:right-0 sm:block lg:-right-5"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A72C]/15">

                  <Feather
                    size={18}
                    className="text-[#C99722]"
                  />

                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    A platform for
                  </p>

                  <p className="font-bold text-[#123E73]">
                    Knowledge & Creativity
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ================= BOOK ICON ================= */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 left-8 hidden h-14 w-14 items-center justify-center rounded-2xl bg-[#123E73] shadow-lg lg:flex"
            >

              <BookOpen
                size={23}
                className="text-[#D4A72C]"
              />

            </motion.div>

          </div>

        </div>

      </div>


      {/* Bottom Soft Wave */}

      <div className="absolute bottom-0 left-0 right-0 h-8 rounded-t-[50%] bg-white/60" />

    </section>
  );
};

export default Hero;