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
} from "lucide-react";

const events = [
  {
    title: "Literary Conversations",
    description:
      "An engaging evening of conversations, ideas and literary expressions with writers and poetry enthusiasts.",
    time: "04:00 PM",
    location: "Jaipur, Rajasthan",
    type: "Literary Event",
    icon: Mic2,
  },
  {
    title: "Author & Poet Meet",
    description:
      "A gathering that brings authors, poets and literature lovers together to celebrate creativity and storytelling.",
    time: "05:00 PM",
    location: "Jaipur, Rajasthan",
    type: "Author Meet",
    icon: BookOpen,
  },
  {
    title: "Sahityik Sanskritik Sandhya",
    description:
      "An evening celebrating literature, culture, poetry, music and the richness of Indian traditions.",
    time: "06:00 PM",
    location: "Jaipur, Rajasthan",
    type: "Cultural Program",
    icon: Sparkles,
  },
  {
    title: "Sahityik Gatherings",
    description:
      "Community events that celebrate regional literature, language and cultural heritage.",
    time: "05:30 PM",
    location: "Jaipur, Rajasthan",
    type: "Cultural Event",
    icon: Users,
  },
  {
    title: "Poetry & Creative Writing",
    description:
      "A platform for poets and writers to share original work and connect with a wider literary community.",
    time: "04:30 PM",
    location: "Jaipur, Rajasthan",
    type: "Poetry Event",
    icon: BookOpen,
  },
  {
    title: "Workshops & Learning",
    description:
      "Hands-on sessions on writing, storytelling and literary craft for aspiring and established voices.",
    time: "11:00 AM",
    location: "Jaipur, Rajasthan",
    type: "Workshop",
    icon: Mic2,
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
              Where Ideas
              <span className="block text-[#C99722]">Meet Inspiration.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Explore literary conversations, poetry gatherings, author
              interactions and cultural programs that bring remarkable
              voices together.
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
                  Literary Event
                </span>
              </div>


              {/* Details */}
              <div className="relative p-8 md:p-12 lg:p-14">

                <div className="absolute right-8 top-8 opacity-10">
                  <Sparkles size={100} className="text-[#D4A72C]" />
                </div>

                <span className="relative inline-flex rounded-full border border-[#D4A72C]/40 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D4A72C]">
                  Literary Event
                </span>

                <h3 className="relative mt-6 max-w-2xl text-3xl font-bold text-white md:text-4xl">
                  Literary Conversations
                </h3>

                <p className="relative mt-5 max-w-2xl leading-8 text-white/70">
                  An engaging evening of conversations, ideas and literary
                  expressions bringing together writers, poets, thinkers and
                  literature lovers.
                </p>

                <div className="relative mt-8 flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:flex-wrap">

                  <div className="flex items-center gap-2">
                    <Clock3 size={18} className="text-[#D4A72C]" />
                    04:00 PM
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-[#D4A72C]" />
                    Jaipur, Rajasthan
                  </div>

                </div>

                <a
                  href="mailto:info@swayamsiddhasahityik.org"
                  className="group relative mt-9 inline-flex items-center gap-3 rounded-full bg-[#D4A72C] px-6 py-3.5 text-sm font-bold text-[#123E73] transition hover:scale-105"
                >
                  Event Details

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
              All Events
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
                    Know More
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
                Stay Connected With Our Events.
              </h3>
              <p className="mt-2 text-white/70">
                Follow our latest literary programs and announcements.
              </p>
            </div>

            <a
              href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D4A72C] px-7 py-3.5 font-bold text-[#123E73] shadow-lg transition-transform hover:scale-105"
            >
              Follow Us
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Events;
