import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowUpRight,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./icons/SocialIcons";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#071E3D] py-24"
    >
      {/* Background Decoration */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#123E73] opacity-40 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4A72C] opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#D4A72C]" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A72C]">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Let's Stay Connected
            <span className="block text-[#D4A72C]">
              Through Literature.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Have a question, want to participate in an event, or wish to
            connect with SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN? We'd love to hear
            from you.
          </p>
        </motion.div>


        {/* Main Contact Area */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-[#123E73]/60 p-8 md:p-10"
          >

            <h3 className="text-2xl font-bold text-white">
              Connect With Us
            </h3>

            <p className="mt-3 leading-7 text-slate-300">
              Reach out to us for literary events, collaborations,
              participation and other enquiries.
            </p>


            {/* Contact Items */}
            <div className="mt-9 space-y-6">

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4A72C]">
                  <MapPin
                    size={21}
                    className="text-[#071E3D]"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>


              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4A72C]">
                  <Phone
                    size={20}
                    className="text-[#071E3D]"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Phone
                  </p>

                  <a
                    href="tel:+919414966976"
                    className="mt-1 block font-semibold text-white transition hover:text-[#D4A72C]"
                  >
                    +91 94149 66976
                  </a>
                </div>
              </div>


              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4A72C]">
                  <Mail
                    size={20}
                    className="text-[#071E3D]"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Email
                  </p>

                  <a
                    href="mailto:info@swayamsiddhasahityik.org"
                    className="mt-1 block break-all font-semibold text-white transition hover:text-[#D4A72C]"
                  >
                    info@swayamsiddhasahityik.org
                  </a>
                </div>
              </div>

            </div>


            {/* Social */}
            <div className="mt-10 border-t border-white/10 pt-7">

              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                Follow Our Journey
              </p>

              <div className="flex gap-3">

                <a
                  href="https://www.facebook.com/share/g/18PBbY3VGA/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#D4A72C] hover:bg-[#D4A72C] hover:text-[#071E3D]"
                >
                  <FacebookIcon size={18} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#D4A72C] hover:bg-[#D4A72C] hover:text-[#071E3D]"
                >
                  <InstagramIcon size={18} />
                </a>

                <a
                  href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#D4A72C] hover:bg-[#D4A72C] hover:text-[#071E3D]"
                >
                  <YoutubeIcon size={18} />
                </a>

              </div>
            </div>

          </motion.div>


          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-white p-8 md:p-10"
          >

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C99722]">
                Send A Message
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#071E3D]">
                We'd Love To Hear From You.
              </h3>
            </div>


            <form className="space-y-5">

              {/* Name + Email */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#071E3D]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-[#FDFBF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#D4A72C] focus:ring-2 focus:ring-[#D4A72C]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#071E3D]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200 bg-[#FDFBF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#D4A72C] focus:ring-2 focus:ring-[#D4A72C]/20"
                  />
                </div>

              </div>


              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#071E3D]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-200 bg-[#FDFBF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#D4A72C] focus:ring-2 focus:ring-[#D4A72C]/20"
                />
              </div>


              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#071E3D]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-slate-200 bg-[#FDFBF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#D4A72C] focus:ring-2 focus:ring-[#D4A72C]/20"
                />
              </div>


              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#071E3D]">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#FDFBF7] px-4 py-3.5 text-sm outline-none transition focus:border-[#D4A72C] focus:ring-2 focus:ring-[#D4A72C]/20"
                />
              </div>


              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#071E3D] px-6 py-4 font-semibold text-white transition duration-300 hover:bg-[#123E73]"
              >
                Send Message

                <Send
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

            </form>

          </motion.div>

        </div>


        {/* Map / Location CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-white/10 bg-white/5 px-7 py-6 md:flex-row"
        >

          <div className="flex items-center gap-4">
            <MapPin
              size={22}
              className="text-[#D4A72C]"
            />

            <div>
              <p className="font-semibold text-white">
                SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Jaipur, Rajasthan, India
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=SWYAM+SIDDHA+SAHITYIK+SANSTHAN+JAIPUR+RAJASTHAN"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full border border-[#D4A72C]/50 px-5 py-2.5 text-sm font-semibold text-[#D4A72C] transition hover:bg-[#D4A72C] hover:text-[#071E3D]"
          >
            Open In Maps

            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;