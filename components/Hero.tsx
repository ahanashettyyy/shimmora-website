"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Glitter from "@/components/Glitter";
import Image from "next/image";

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

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 relative z-10">

        {/* TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center max-w-4xl mx-auto"
        >

          <p className="uppercase tracking-[6px] text-sm text-[#F9EDF0]/80 mb-6">
            Bangalore Based
          </p>

          <h1
            className="
            font-light
            leading-none
            tracking-tight
            text-5xl
            sm:text-6xl
            lg:text-[96px]
            "
          >
            The Shimmora Bar
          </h1>

          <p
            className="
            mt-8
            text-lg
            md:text-xl
            leading-9
            max-w-2xl
            mx-auto
            text-[#F9EDF0]/90
            "
          >
            Luxury face glitter, body glitter and magical event experiences
            for weddings, concerts, birthdays and unforgettable celebrations.
          </p>

          <div
            className="
            mt-12
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
            "
          >

            <a
              href="https://wa.me/919110832295?text=Hi! I'd like to book The Shimmora Bar for my event."
              target="_blank"
              rel="noopener noreferrer"
              className="
              group
              bg-[#F9EDF0]
              text-[#700342]
              rounded-full
              px-8
              py-4
              flex
              items-center
              justify-center
              gap-3
              hover:scale-105
              transition
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
              border
              border-[#F9EDF0]
              rounded-full
              px-8
              py-4
              flex
              items-center
              justify-center
              gap-3
              hover:bg-[#F9EDF0]
              hover:text-[#700342]
              transition
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

        {/* ===================== */}
        {/* CIRCLE BANNER */}
        {/* ===================== */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          className="mt-24 flex justify-center"
        >

          <div
            className="
            relative
            w-full
            max-w-6xl

            h-[620px]

            md:h-[500px]
            "
          >
                        {/* ===== LEFT LARGE ===== */}

            <div
              className="
              absolute

              left-[-2%]
              md:left-0

              top-52
              md:top-24

              w-40
              h-40

              sm:w-52
              sm:h-52

              md:w-72
              md:h-72

              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              shadow-2xl
              "
            />

            {/* ===== CENTER ===== */}

            <div
              className="
              absolute

              left-1/2
              -translate-x-1/2

              top-24
              md:top-10

              w-64
              h-64

              sm:w-72
              sm:h-72

              md:w-[340px]
              md:h-[340px]

              rounded-full
              bg-[#F9EDF0]/10
              border-2
              border-white/30
              backdrop-blur-md
              shadow-[0_25px_80px_rgba(0,0,0,.25)]
              z-20
              "
            />

            {/* ===== RIGHT LARGE ===== */}

            <div
              className="
              absolute

              right-[-2%]
              md:right-0

              top-52
              md:top-24

              w-40
              h-40

              sm:w-52
              sm:h-52

              md:w-72
              md:h-72

              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              shadow-2xl
              "
            />

            {/* ===== TOP LEFT ===== */}

            <div
              className="
              absolute

              left-[18%]
              md:left-[18%]

              top-8
              md:top-0

              w-20
              h-20

              md:w-28
              md:h-28

              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              "
            />

            {/* ===== TOP RIGHT ===== */}

            <div
              className="
              absolute

              right-[18%]
              md:right-[18%]

              top-8
              md:top-0

              w-20
              h-20

              md:w-28
              md:h-28

              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              "
            />

            {/* ===== BOTTOM LEFT ===== */}

            <div
              className="
              absolute

              left-[26%]
              md:left-[24%]

              bottom-20
              md:bottom-0

              w-24
              h-24

              md:w-32
              md:h-32

              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              "
            />

            {/* ===== BOTTOM RIGHT ===== */}

            <div
              className="
              absolute

              right-[26%]
              md:right-[24%]

              bottom-20
              md:bottom-0

              w-24
              h-24

              md:w-32
              md:h-32

              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              "
            />
                      </div>
        </motion.div>
      </div>

      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-[68%]
          -translate-x-1/2
          -translate-y-1/2

          w-[500px]
          h-[500px]

          md:w-[800px]
          md:h-[800px]

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
          h-32
          bg-gradient-to-b
          from-transparent
          to-[#F9EDF0]
        "
      />
    </section>
  );
}