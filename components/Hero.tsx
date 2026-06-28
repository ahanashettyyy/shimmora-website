"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Glitter from "@/components/Glitter";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #700342 0%, #A1146E 45%, #C13494 100%)",
      }}
    >
      <Glitter />

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-14 px-6 sm:px-8 lg:px-16 pt-28 pb-16">

        {/* LEFT */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-sm mb-5 opacity-90">
            Bangalore Based
          </p>

          <h1 className="font-light leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[92px]">
            The
            <br />
            Shimmora Bar
          </h1>

          <p className="mt-8 text-base sm:text-lg lg:text-xl leading-8 max-w-xl mx-auto lg:mx-0 opacity-90">
            Face glitter, body glitter art and magical event experiences for
            weddings, concerts and unforgettable celebrations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

            <a
              href="https://wa.me/919110832295?text=Hi! I'd like to book The Shimmora Bar for my event."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto"
            >
              <div className="bg-[#F9EDF0] text-[#700342] px-8 py-4 rounded-full flex justify-center items-center gap-3 hover:bg-white transition-all duration-300">

                BOOK NOW

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </div>
            </a>

            <a
              href="#gallery"
              className="group w-full sm:w-auto border border-[#F9EDF0] px-8 py-4 rounded-full flex justify-center items-center gap-3 hover:bg-[#F9EDF0] hover:text-[#700342] transition-all duration-300"
            >
              VIEW GALLERY

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(112,3,66,0.35)]">

            <Image
              src="/images/hero.jpeg"
              alt="The Shimmora Bar"
              fill
              priority
              className="object-cover"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}