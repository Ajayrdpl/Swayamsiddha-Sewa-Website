import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronUp,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./icons/SocialIcons";

import logo from "../assets/swayam-shida-logo.png";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#05172F] text-white">

      {/* Gold Top Line */}
      <div className="h-[3px] w-full bg-[#D4A72C]" />

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#123E73]/30 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D4A72C]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= MAIN FOOTER ================= */}

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 py-16 sm:gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">

            <a href="#" className="inline-flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-1 shadow-lg">
                <img
                  src={logo}
                  alt="SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  SWYAM SIDDHA
                </h3>

                <p className="text-sm font-medium text-slate-300">
                  SAHITYIK SANSTHAN
                </p>

                <p className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-[#D4A72C]">
                  JAIPUR RAJASTHAN
                </p>
              </div>

            </a>


            <p className="mt-7 max-w-sm text-[15px] leading-7 text-slate-400">
              A literary and cultural platform dedicated to bringing
              writers, poets, thinkers and literature lovers together
              through meaningful conversations and creative expression.
            </p>


            {/* Social */}
            <div className="mt-7 flex gap-3">

              <a
                href="https://www.facebook.com/share/g/18PBbY3VGA/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition duration-300 hover:border-[#D4A72C] hover:bg-[#D4A72C] hover:text-[#05172F]"
              >
                <FacebookIcon size={17} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition duration-300 hover:border-[#D4A72C] hover:bg-[#D4A72C] hover:text-[#05172F]"
              >
                <InstagramIcon size={17} />
              </a>

              <a
                href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition duration-300 hover:border-[#D4A72C] hover:bg-[#D4A72C] hover:text-[#05172F]"
              >
                <YoutubeIcon size={17} />
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div>

            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-4">

              {[
                ["Home", "#"],
                ["About Us", "#about"],
                ["Events", "#upcoming-events"],
                ["Interviews", "#interviews"],
                ["Gallery", "#gallery"],
                ["Contact Us", "#contact"],
              ].map(([name, link]) => (

                <li key={name}>
                  <a
                    href={link}
                    className="group flex w-fit items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    <span>{name}</span>

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />
                  </a>
                </li>

              ))}

            </ul>

          </div>


          {/* Explore */}
          <div>

            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
              Explore
            </h4>

            <ul className="mt-6 space-y-4">

              <li>
                <a
                  href="#initiatives"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Literary Initiatives
                </a>
              </li>

              <li>
                <a
                  href="#upcoming-events"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Upcoming Events
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Event Gallery
                </a>
              </li>

              <li>
                <a
                  href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  YouTube Channel
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@swayamsiddhasahityiksansthan/shorts"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  YouTube Shorts
                </a>
              </li>

            </ul>

          </div>


          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">

            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#D4A72C]">
              Contact
            </h4>

            <div className="mt-6 space-y-5">

              <div className="flex gap-3">

                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#D4A72C]"
                />

                <p className="text-sm leading-6 text-slate-400">
                  Jaipur,
                  <br />
                  Rajasthan, India
                </p>

              </div>


              <a
                href="tel:+919414966976"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Phone
                  size={17}
                  className="text-[#D4A72C]"
                />

                +91 94149 66976
              </a>


              <a
                href="mailto:info@swayamsiddhasahityik.org"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#D4A72C]"
                />

                <span className="break-all">
                  info@swayamsiddhasahityik.org
                </span>
              </a>

            </div>


            {/* YouTube CTA */}
            <a
              href="https://youtube.com/@swayamsiddhasahityiksansthan?si=ky8sfLCXQTH8TNWj"
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#D4A72C] px-5 py-3 text-sm font-bold text-[#05172F] transition duration-300 hover:scale-105"
            >
              <YoutubeIcon size={17} />

              Visit YouTube

              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

        </div>


        {/* ================= QUOTE STRIP ================= */}

        <div className="border-y border-white/10 py-8 text-center">

          <p className="font-serif text-xl italic text-slate-300 md:text-2xl">
            “Celebrating literature, culture and the voices that inspire us.”
          </p>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col justify-between gap-5 py-7 md:flex-row md:items-center">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN.
            All rights reserved.
          </p>


          <div className="flex items-center gap-6">

            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Terms & Conditions
            </a>


            {/* Back to top */}
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A72C]/40 text-[#D4A72C] transition duration-300 hover:bg-[#D4A72C] hover:text-[#05172F]"
            >
              <ChevronUp size={18} />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;