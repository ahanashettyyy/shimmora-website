"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Glitter from "@/components/Glitter";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg,#700342 0%,#A1146E 45%,#C13494 100%)",
      }}
    >
      <Glitter />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 md:pt-32 pb-24 relative z-10">

        {/* ========================= */}
        {/* PHOTO BANNER */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center mb-12"
        >

          <div
            className="
            relative
            w-[300px]
            h-[140px]
            sm:w-[380px]
            sm:h-[170px]
            md:w-[720px]
            md:h-[220px]
            overflow-hidden
            rounded-[32px]
            shadow-[0_40px_100px_rgba(112,3,66,0.35)]
            "
          >
            <Image
              src="/images/hero.jpeg"
              alt="The Shimmora Bar event glitter"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* ========================= */}
        {/* TEXT */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mt-10 md:mt-14"
        >
          <p className="uppercase tracking-[6px] text-sm text-[#F9EDF0]/80 mb-5">
            Bangalore Based
          </p>

          <h1
            className="
            text-5xl
            sm:text-6xl
            lg:text-[90px]
            font-light
            leading-none
            tracking-tight
            "
          >
            The Shimmora Bar
          </h1>

          <p
            className="
            mt-7
            max-w-2xl
            mx-auto
            text-base
            sm:text-lg
            lg:text-xl
            leading-8
            text-[#F9EDF0]/90
            "
          >
            Luxury face glitter, body glitter and magical event experiences
            for weddings, concerts, birthdays and unforgettable celebrations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="https://wa.me/919110832295?text=Hi! I'd like to book The Shimmora Bar for my event."
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              rounded-full
              bg-[#F9EDF0]
              text-[#700342]
              px-8
              py-4
              flex
              justify-center
              items-center
              gap-3
              hover:scale-105
              transition-all
              duration-300
              "
            >
              BOOK NOW

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </a>

            <a
              href="#gallery"
              className="
              group
              rounded-full
              border
              border-[#F9EDF0]
              px-8
              py-4
              flex
              justify-center
              items-center
              gap-3
              hover:bg-[#F9EDF0]
              hover:text-[#700342]
              transition-all
              duration-300
              "
            >
              VIEW GALLERY

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </a>

          </div>
        </motion.div>

      </div>

      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-20
        -translate-x-1/2

        w-[350px]
        h-[350px]

        md:w-[700px]
        md:h-[700px]

        rounded-full
        bg-white/5
        blur-[140px]
        pointer-events-none
        "
      />

      {/* Bottom Fade */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-28
        bg-gradient-to-b
        from-transparent
        to-[#F9EDF0]
        "
      />

    </section>
  );
}