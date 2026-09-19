import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Award,
  Sparkles,
  Feather,
  Heart,
  ArrowUpRight,
  Quote,
  CalendarDays,
} from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "Literature",
    text: "Championing the written and spoken word through gatherings, readings and conversations.",
  },
  {
    icon: Users,
    title: "Community",
    text: "Bringing writers, poets, thinkers and readers together in a shared space of ideas.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Recognising creativity and meaningful contribution to literature and culture.",
  },
  {
    icon: Sparkles,
    title: "Culture",
    text: "Celebrating regional language, heritage and the traditions that shape our stories.",
  },
  {
    icon: Feather,
    title: "Creativity",
    text: "Encouraging original voices and creative expression across every literary form.",
  },
  {
    icon: Heart,
    title: "Belonging",
    text: "Creating a welcoming home for every literature lover, from first-time readers to authors.",
  },
];

const stats = [
  { value: "700+", label: "Literary Videos" },
  { value: "100+", label: "Literary Voices" },
  { value: "Jaipur", label: "Rajasthan, India" },
];

const AboutUs = () => {
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
                About Us
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight text-[#123E73] sm:text-6xl">
              Where Stories
              <span className="block text-[#C99722]">Find Their Voice.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN is a literary and cultural
              platform dedicated to bringing writers, poets, thinkers and
              literature lovers together through meaningful conversations,
              gatherings and creative expression.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section className="relative overflow-hidden bg-white pb-20 pt-8 lg:pb-28 lg:pt-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#D4A72C]" />
                <span className="text-sm font-bold uppercase tracking-[4px] text-[#C99722]">
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#123E73] sm:text-4xl">
                Preserving Literature.
                <span className="block text-[#C99722]">
                  Inspiring Generations.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Born from a love for the written and spoken word, SWYAM
                SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN was founded to create spaces where
                literature, knowledge and culture could thrive together.
                From intimate literary conversations to large cultural
                gatherings, we bring readers face-to-face with the authors,
                poets and thinkers who shape our stories.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Rooted in Jaipur and reaching literature lovers across
                Rajasthan and beyond, we create spaces where ideas are
                shared, stories are celebrated and voices are heard.
              </p>

              <a
                href="/events"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#123E73] px-7 py-4 font-semibold text-white shadow-lg shadow-[#123E73]/20 transition-all duration-300 hover:bg-[#0D315B]"
              >
                <CalendarDays size={19} />
                Explore Our Events
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] border-2 border-[#D4A72C]/30 bg-[#123E73] p-10 shadow-xl sm:p-12"
            >
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#D4A72C]/20" />
              <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full border border-white/10" />

              <div className="relative z-10">
                <Quote size={40} className="text-[#D4A72C]" />

                <p className="mt-6 text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
                  Every story has the power to connect, inspire and create
                  change.
                </p>

                <p className="mt-6 text-white/70">
                  — SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN
                </p>

                <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <h3 className="text-2xl font-bold text-[#D4A72C]">
                        {stat.value}
                      </h3>
                      <p className="mt-1 text-xs text-white/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="relative overflow-hidden bg-[#FDFBF6] py-20 lg:py-28">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#123E73 1px, transparent 1px), linear-gradient(90deg, #123E73 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 max-w-2xl"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4A72C]" />
              <span className="text-sm font-bold uppercase tracking-[4px] text-[#C99722]">
                What We Stand For
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-[#123E73] sm:text-5xl">
              Our Core Values.
            </h2>
          </motion.div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border-2 border-[#D4A72C]/30 bg-white p-7 shadow-[0_18px_45px_rgba(7,30,61,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A72C]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123E73] text-[#D4A72C] transition-all duration-300 group-hover:bg-[#D4A72C] group-hover:text-[#123E73]">
                    <Icon size={25} strokeWidth={2} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#123E73]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-gray-600">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
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
                Become Part of Our Literary Journey.
              </h3>
              <p className="mt-2 text-white/70">
                Join our events, share your voice, and connect with fellow
                literature lovers.
              </p>
            </div>

            <a
              href="mailto:info@swayamsiddhasahityik.org"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D4A72C] px-7 py-3.5 font-bold text-[#123E73] shadow-lg transition-transform hover:scale-105"
            >
              Get In Touch
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default AboutUs;
