"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Glitter from "@/components/Glitter";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen text-white"
      style={{
        background:
          "linear-gradient(135deg,#700342 0%,#A1146E 45%,#C13494 100%)",
      }}
    >
      <Glitter />

      {/* Floating Images */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 pointer-events-none"
      >

        {/* BIG CENTER IMAGE */}

        <div
          className="
          absolute
          left-1/2
          top-[52%]
          -translate-x-1/2
          -translate-y-1/2
          w-[260px]
          h-[260px]
          md:w-[420px]
          md:h-[420px]
          rounded-full
          bg-white/10
          border
          border-white/30
          backdrop-blur-md
          overflow-hidden
          "
        >
          {/* Replace later */}

          <div className="w-full h-full flex items-center justify-center text-white/60">
            MAIN PHOTO
          </div>

          {/*
          Later:

          <Image
          src="/images/banner-main.jpg"
          fill
          className="object-cover"
          />
          */}
        </div>

        {/* TOP LEFT */}

        <div
          className="
          absolute
          left-[8%]
          top-[18%]
          w-24
          h-24
          md:w-40
          md:h-40
          rounded-full
          bg-white/10
          border
          border-white/30
          backdrop-blur-md
          overflow-hidden
          "
        >
          <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
            Photo
          </div>
        </div>

        {/* TOP RIGHT */}

        <div
          className="
          absolute
          right-[8%]
          top-[12%]
          w-20
          h-20
          md:w-32
          md:h-32
          rounded-full
          bg-white/10
          border
          border-white/30
          backdrop-blur-md
          overflow-hidden
          "
        >
          <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
            Photo
          </div>
        </div>

        {/* LEFT */}

        <div
          className="
          absolute
          left-[12%]
          bottom-[20%]
          w-20
          h-20
          md:w-28
          md:h-28
          rounded-full
          bg-white/10
          border
          border-white/30
          backdrop-blur-md
          "
        />

        {/* RIGHT */}

        <div
          className="
          absolute
          right-[10%]
          bottom-[18%]
          w-24
          h-24
          md:w-36
          md:h-36
          rounded-full
          bg-white/10
          border
          border-white/30
          backdrop-blur-md
          "
        />

      </motion.div>

      {/* Hero Content */}

      <div
        className="
        relative
        z-20
        max-w-6xl
        mx-auto
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        text-center
        px-6
        "
      >

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="
          uppercase
          tracking-[5px]
          text-sm
          mb-6
          "
        >
          Bangalore Based
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .3 }}
          className="
          font-light
          leading-none
          tracking-tight
          text-6xl
          sm:text-7xl
          lg:text-[110px]
          "
        >
          The
          <br />
          Shimmora Bar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="
          mt-8
          max-w-2xl
          text-base
          sm:text-lg
          lg:text-xl
          leading-8
          text-white/90
          "
        >
          Luxury glitter experiences,
          premium face art,
          body glitter and magical moments
          for weddings, concerts,
          birthdays and unforgettable celebrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0,y:30 }}
          animate={{ opacity: 1,y:0 }}
          transition={{ delay:.7 }}
          className="
          mt-12
          flex
          flex-col
          sm:flex-row
          gap-5
          w-full
          sm:w-auto
          "
        >

          <a
            href="https://wa.me/919110832295?text=Hi! I'd like to book The Shimmora Bar for my event."
            target="_blank"
            className="
            group
            bg-white
            text-[#700342]
            rounded-full
            px-8
            py-4
            flex
            justify-center
            items-center
            gap-3
            font-medium
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
            border-white
            rounded-full
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
                  </motion.div>

        {/* Decorative glow behind heading */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[500px]
            h-[500px]
            md:w-[700px]
            md:h-[700px]
            rounded-full
            bg-white/5
            blur-3xl
            -z-10
          "
        />

      </div>

      {/* Bottom Gradient Fade */}
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