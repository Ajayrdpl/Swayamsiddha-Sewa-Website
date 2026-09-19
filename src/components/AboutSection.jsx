import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BookOpen,
  Users,
  Award,
  Sparkles,
  Quote,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#071E3D] py-24 lg:py-32">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-180px] top-[10%] h-[450px] w-[450px] rounded-full bg-[#D4A72C]/10 blur-[120px]" />
        <div className="absolute right-[-150px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-[#1B5A96]/20 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>


      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-end"
        >

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#D4A72C]" />

              <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4A72C]">
                About The Institution
              </span>

            </div>

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

              Where Stories

              <span className="block text-[#D4A72C]">
                Find Their Voice.
              </span>

            </h2>

          </div>


          <p className="max-w-xl text-lg leading-8 text-white/65 lg:ml-auto">

            SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN brings together literature,
            knowledge and culture through meaningful conversations,
            literary gatherings and creative expressions.

          </p>

        </motion.div>


        {/* ================= MAIN FEATURE ================= */}

        <div className="grid gap-6 lg:grid-cols-12">


          {/* BIG CARD */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0D3768] p-8 sm:p-10 lg:col-span-7 lg:p-12"
          >

            {/* Decorative Circle */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D4A72C]/20 transition-transform duration-700 group-hover:scale-110" />

            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />


            {/* Gold Glow */}
            <div className="absolute right-20 top-20 h-32 w-32 rounded-full bg-[#D4A72C]/10 blur-3xl" />


            <div className="relative z-10">

              <div className="mb-10 flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A72C] shadow-lg shadow-[#D4A72C]/20">

                  <BookOpen
                    size={27}
                    className="text-[#071E3D]"
                  />

                </div>


                <span className="text-7xl font-serif leading-none text-white/[0.06]">
                  “
                </span>

              </div>


              <h3 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">

                Preserving Literature.
                <br />

                <span className="text-[#D4A72C]">
                  Inspiring Generations.
                </span>

              </h3>


              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">

                From literary conversations and author interactions to
                cultural gatherings and creative events, we create spaces
                where ideas are shared, stories are celebrated and voices
                are heard.

              </p>


              <motion.div whileHover={{ x: 5 }}>
                <Link
                  to="/about"
                  className="mt-9 inline-flex items-center gap-3 font-semibold text-[#D4A72C]"
                >

                  Discover Our Story

                  <ArrowUpRight size={19} />

                </Link>
              </motion.div>

            </div>

          </motion.div>


          {/* ================= RIGHT FEATURE ================= */}

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">


            {/* COMMUNITY */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-[28px] border border-[#D4A72C]/20 bg-gradient-to-br from-[#123F73] to-[#09294F] p-7"
            >

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#D4A72C]/10 transition-transform duration-500 group-hover:scale-150" />


              <div className="relative z-10">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">

                  <Users
                    size={22}
                    className="text-[#D4A72C]"
                  />

                </div>


                <h4 className="text-2xl font-bold text-white">
                  A Community of Voices
                </h4>


                <p className="mt-3 leading-7 text-white/60">

                  Connecting authors, poets, speakers, readers and
                  literature enthusiasts through shared experiences.

                </p>


                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#D4A72C]">

                  Writers

                  <span className="h-1 w-1 rounded-full bg-[#D4A72C]" />

                  Poets

                  <span className="h-1 w-1 rounded-full bg-[#D4A72C]" />

                  Thinkers

                </div>

              </div>

            </motion.div>


            {/* EXCELLENCE */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-[28px] border border-[#D4A72C]/20 bg-gradient-to-br from-[#B98316] to-[#76500B] p-7"
            >

              <div className="absolute -right-12 -bottom-16 h-44 w-44 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125" />


              <div className="relative z-10">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">

                  <Award
                    size={22}
                    className="text-white"
                  />

                </div>


                <h4 className="text-2xl font-bold text-white">
                  Celebrating Excellence
                </h4>


                <p className="mt-3 leading-7 text-white/75">

                  Recognising creativity, knowledge and meaningful
                  contributions to literature and culture.

                </p>


                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">

                  Creativity

                  <span className="h-1 w-1 rounded-full bg-white" />

                  Knowledge

                  <span className="h-1 w-1 rounded-full bg-white" />

                  Culture

                </div>

              </div>

            </motion.div>

          </div>

        </div>


        {/* ================= BELIEF STRIP ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-[#0A294E] p-7 sm:p-8"
        >

          <div className="absolute left-0 top-0 h-full w-1 bg-[#D4A72C]" />


          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex gap-5">

              <Quote
                size={34}
                className="mt-1 shrink-0 text-[#D4A72C]"
              />

              <div>

                <p className="text-xs font-bold uppercase tracking-[3px] text-[#D4A72C]">
                  Our Belief
                </p>

                <p className="mt-2 text-xl font-semibold leading-8 text-white sm:text-2xl">
                  Every story has the power to connect, inspire and create change.
                </p>

              </div>

            </div>


            <motion.a
              href="/events"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#D4A72C] px-6 py-3.5 font-bold text-[#071E3D] shadow-lg shadow-[#D4A72C]/10"
            >

              Explore Events

              <ArrowUpRight size={18} />

            </motion.a>

          </div>

        </motion.div>


        {/* Bottom Accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mx-auto mt-16 h-px max-w-xs bg-gradient-to-r from-transparent via-[#D4A72C] to-transparent"
        />

      </div>

    </section>
  );
};

export default AboutSection;