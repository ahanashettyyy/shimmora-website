"use client";

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

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        md:px-10
        pt-36
        pb-20
        relative
        z-10
      "
      >
        {/* TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .8,
          }}
          className="
          max-w-4xl
          mx-auto
          text-center
        "
        >
          <p
            className="
            uppercase
            tracking-[6px]
            text-sm
            text-[#F9EDF0]/80
            mb-6
          "
          >
            Bangalore Based
          </p>

          <h1
            className="
            font-light
            leading-none
            tracking-tight
            text-5xl
            sm:text-6xl
            lg:text-[100px]
          "
          >
            The Shimmora Bar
          </h1>

          <p
            className="
            mt-8
            max-w-2xl
            mx-auto
            text-lg
            md:text-xl
            leading-9
            text-[#F9EDF0]/90
          "
          >
            Luxury glitter experiences, premium face glitter,
            body art and magical event styling for weddings,
            concerts, birthdays and unforgettable celebrations.
          </p>

          {/* BUTTONS */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            justify-center
            gap-5
            mt-12
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
              px-8
              py-4
              rounded-full
              flex
              items-center
              justify-center
              gap-3
              font-medium
              hover:scale-105
              transition
            "
            >
              BOOK NOW

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="#gallery"
              className="
              group
              border
              border-[#F9EDF0]
              px-8
              py-4
              rounded-full
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
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* ========================= */}
        {/* CIRCLE BANNER STARTS HERE */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .4,
            duration: 1,
          }}
          className="
          mt-24
          flex
          justify-center
        "
        >
          <div
            className="
            relative
            w-full
            max-w-6xl
            h-[420px]
            md:h-[520px]
          "
          >
                        {/* Left Large */}

            <div
              className="
              absolute
              left-0
              top-24
              w-48
              h-48
              md:w-72
              md:h-72
              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              overflow-hidden
              shadow-2xl
              "
            >
              {/* Replace later with banner1 */}
            </div>

            {/* Center Main */}

            <div
              className="
              absolute
              left-1/2
              top-10
              -translate-x-1/2
              w-64
              h-64
              md:w-[340px]
              md:h-[340px]
              rounded-full
              bg-[#F9EDF0]/10
              border-2
              border-white/30
              backdrop-blur-md
              overflow-hidden
              shadow-[0_25px_80px_rgba(0,0,0,.25)]
              z-20
              "
            >
              {/* Main Image Later */}
            </div>

            {/* Right Large */}

            <div
              className="
              absolute
              right-0
              top-24
              w-48
              h-48
              md:w-72
              md:h-72
              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              overflow-hidden
              shadow-2xl
              "
            >
            </div>

            {/* Small Top Left */}

            <div
              className="
              absolute
              left-[16%]
              top-2
              w-24
              h-24
              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              "
            />

            {/* Small Top Right */}

            <div
              className="
              absolute
              right-[16%]
              top-2
              w-24
              h-24
              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              "
            />

            {/* Small Bottom Left */}

            <div
              className="
              absolute
              left-[24%]
              bottom-0
              w-28
              h-28
              rounded-full
              bg-white/10
              border
              border-white/20
              backdrop-blur-md
              "
            />

            {/* Small Bottom Right */}

            <div
              className="
              absolute
              right-[24%]
              bottom-0
              w-28
              h-28
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