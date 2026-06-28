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

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 relative z-10">

        {/* TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center max-w-4xl mx-auto"
        >

          <p className="uppercase tracking-[6px] text-sm text-[#F9EDF0]/80 mb-5">
            Bangalore Based
          </p>

          <h1
            className="
            text-5xl
            sm:text-6xl
            lg:text-[95px]
            font-light
            leading-none
            tracking-tight
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
            Luxury face glitter,
            body glitter and magical event experiences
            for weddings,
            concerts,
            birthdays and unforgettable celebrations.
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
              rounded-full
              border
              border-[#F9EDF0]
              px-8
              py-4
              flex
              justify-center
              items-center
              gap-3
              hover:bg-white
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

        {/* ========================================= */}
        {/* DESKTOP COLLAGE */}
        {/* ========================================= */}

        <div className="hidden md:flex justify-center mt-24">

          <div
            className="
            relative
            w-full
            max-w-6xl
            h-[520px]
            "
          >
                        {/* Left Large */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: .3 }}
              className="
              absolute
              left-0
              top-28
              w-72
              h-72
              rounded-full
              overflow-hidden
              border-4
              border-white/20
              shadow-2xl
              "
            >
              <Image
                src="/images/hero.jpeg"
                alt=""
                fill
                className="object-cover scale-110"
              />
            </motion.div>

            {/* Center */}

            <motion.div
              initial={{ opacity: 0, scale: .8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: .4 }}
              className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2

              w-[360px]
              h-[360px]

              rounded-full
              overflow-hidden
              border-[5px]
              border-white/30
              shadow-[0_35px_100px_rgba(0,0,0,.35)]
              z-20
              "
            >
              <Image
                src="/images/hero.jpeg"
                alt=""
                fill
                priority
                className="object-cover scale-110"
              />
            </motion.div>

            {/* Right Large */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: .5 }}
              className="
              absolute
              right-0
              top-28

              w-72
              h-72

              rounded-full
              overflow-hidden
              border-4
              border-white/20
              shadow-2xl
              "
            >
              <Image
                src="/images/hero.jpeg"
                alt=""
                fill
                className="object-cover scale-110"
              />
            </motion.div>

            {/* Top Left */}

            <div
              className="
              absolute
              left-[18%]
              top-0

              w-28
              h-28

              rounded-full
              overflow-hidden
              border-2
              border-white/20
              "
            >
              <Image
                src="/images/hero.jpeg"
                alt=""
                fill
                className="object-cover scale-110"
              />
            </div>

            {/* Top Right */}

            <div
              className="
              absolute
              right-[18%]
              top-0

              w-28
              h-28

              rounded-full
              overflow-hidden
              border-2
              border-white/20
              "
            >
              <Image
                src="/images/hero.jpeg"
                alt=""
                fill
                className="object-cover scale-110"
              />
            </div>

            {/* Bottom Left */}

            <div
              className="
              absolute
              left-[26%]
              bottom-0

              w-32
              h-32

              rounded-full
              overflow-hidden
              border-2
              border-white/20
              "
            >
              <Image
                src="/images/hero.jpeg"
                alt=""
                fill
                className="object-cover scale-110"
              />
            </div>

            {/* Bottom Right */}

            <div
              className="
              absolute
              right-[26%]
              bottom-0

              w-32
              h-32

              rounded-full
              overflow-hidden
              border-2
              border-white/20
              "
            >
              <Image
                src="/images/hero.jpeg"
                alt=""
                fill
                className="object-cover scale-110"
              />
            </div>

          </div>
        </div>

        {/* ========================================= */}
        {/* MOBILE COLLAGE */}
        {/* ========================================= */}

        <div className="md:hidden mt-16">
                    <div className="flex flex-col items-center gap-5">

            {/* Top */}

            <div className="flex gap-5">

              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/20">
                <Image
                  src="/images/hero.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/20">
                <Image
                  src="/images/hero.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* Main */}

            <div className="relative w-56 h-56 rounded-full overflow-hidden border-[4px] border-white/30 shadow-2xl">

              <Image
                src="/images/hero.jpeg"
                alt=""
                fill
                priority
                className="object-cover"
              />

            </div>

            {/* Middle */}

            <div className="flex gap-5">

              <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/20">

                <Image
                  src="/images/hero.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />

              </div>

              <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/20">

                <Image
                  src="/images/hero.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />

              </div>

            </div>

            {/* Bottom */}

            <div className="flex gap-5">

              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/20">

                <Image
                  src="/images/hero.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />

              </div>

              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-white/20">

                <Image
                  src="/images/hero.jpeg"
                  alt=""
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-[72%]
        -translate-x-1/2
        -translate-y-1/2

        w-[700px]
        h-[700px]

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