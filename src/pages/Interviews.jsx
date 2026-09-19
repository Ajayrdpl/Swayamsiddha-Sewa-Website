import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, Mic2, BookOpen } from "lucide-react";

const interviews = [
  {
    title: "Literary Journey of Prof. (Dr.) Ajit Kumar Jain",
    category: "Author Conversation",
    image: "/img1.png",
    views: "191 views",
    duration: "1:07:51",
  },
  {
    title: "Faith, Offerings, Challenges & Solutions",
    category: "Literary Talk",
    image: "/img2.png",
    views: "231 views",
    duration: "1:01:46",
  },
  {
    title: "What Is the Most Basic Problem for a Young Person?",
    category: "Youth Conversation",
    image: "/img3.png",
    views: "164 views",
    duration: "—",
  },
  {
    title: "Poetry, Culture and the Voice of a Generation",
    category: "Poet Conversation",
    image: "/img4.png",
    views: "212 views",
    duration: "48:32",
  },
  {
    title: "Stories That Shape Us: A Conversation on Craft",
    category: "Literary Talk",
    image: "/img5.png",
    views: "178 views",
    duration: "55:10",
  },
  {
    title: "Celebrating Regional Literature & Heritage",
    category: "Cultural Conversation",
    image: "/img6.png",
    views: "203 views",
    duration: "1:12:04",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Interviews = () => {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section className="relative overflow-hidden bg-[#FDFBF6] pb-8 pt-16 lg:pb-10 lg:pt-20">

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
                From Our YouTube Channel
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-[#123E73] sm:text-6xl">
              Voices That
              <span className="block text-[#C99722]">Inspire & Connect.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Watch meaningful conversations, literary discussions and
              inspiring sessions featuring writers, poets, scholars and
              distinguished personalities.
            </p>

            <a
              href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#123E73] px-7 py-4 font-semibold text-white shadow-lg shadow-[#123E73]/20 transition-all duration-300 hover:bg-[#0D315B]"
            >
              View YouTube Channel
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

        </div>
      </section>


      {/* ================= VIDEO GRID ================= */}
      <section className="relative overflow-hidden bg-white pb-16 pt-8 lg:pb-20 lg:pt-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
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
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.5rem] border-2 border-[#D4A72C]/30 bg-[#123E73] shadow-xl transition-colors duration-300 hover:border-[#D4A72C]"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#123E73] shadow-2xl transition duration-300 group-hover:scale-110">
                      <Play size={25} fill="currentColor" className="ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-[#D4A72C] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#123E73]">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 rounded bg-black/75 px-2 py-1 text-xs font-medium text-white">
                    {item.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold leading-snug text-white transition group-hover:text-[#D4A72C]">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex items-center justify-between text-sm text-white/60">
                    <span className="flex items-center gap-2">
                      <BookOpen size={16} className="text-[#D4A72C]" />
                      SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN
                    </span>

                    <span>{item.views}</span>
                  </div>
                </div>
              </motion.a>
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
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D4A72C]">
                <Mic2 size={21} className="text-[#123E73]" />
              </div>

              <div className="text-center md:text-left">
                <p className="font-semibold text-white">
                  Explore More Literary Conversations
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Discover more videos on our YouTube channel.
                </p>
              </div>
            </div>

            <a
              href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D4A72C] px-7 py-3.5 font-bold text-[#123E73] shadow-lg transition-transform hover:scale-105"
            >
              Explore Videos
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Interviews;
