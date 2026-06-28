"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F9EDF0] py-28 md:py-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="max-w-3xl"
        >

          <p className="uppercase tracking-[5px] text-[#C13494] mb-4">
            WHO WE ARE
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            text-[#700342]
            leading-tight
            "
          >
            We create unforgettable glitter experiences.
          </h2>

          <p
            className="
            mt-8
            text-lg
            md:text-xl
            text-gray-700
            leading-9
            max-w-2xl
            "
          >
            The Shimmora Bar transforms celebrations with
            luxury face glitter, body art and premium event
            experiences. Whether it's weddings, concerts,
            birthdays or college festivals—we bring sparkle
            that people remember.
          </p>

          <a
            href="#services"
            className="
            inline-flex
            items-center
            gap-3
            mt-10

            rounded-full
            bg-[#700342]
            text-white

            px-7
            py-4

            hover:scale-105
            transition
            "
          >
            Learn More

            <ArrowRight size={18}/>
          </a>

        </motion.div>

        {/* IMAGE COMPOSITION */}

        <div
          className="
          mt-20
          flex
          justify-center
          "
        >

          <div
            className="
            relative

            w-full
            max-w-4xl

            h-[340px]

            md:h-[420px]
            "
          >
            {/* Left Large */}

<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="
  absolute
  left-0
  top-12

  w-44
  h-44

  md:w-72
  md:h-72

  rounded-[32px]
  overflow-hidden
  shadow-2xl
  "
>
  <Image
    src="/images/hero.jpeg"
    alt="The Shimmora Bar"
    fill
    className="object-cover hover:scale-105 transition duration-500"
  />
</motion.div>

{/* Center Main */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.35 }}
  className="
  absolute
  left-1/2
  -translate-x-1/2

  top-0

  w-56
  h-72

  md:w-[340px]
  md:h-[420px]

  rounded-[40px]
  overflow-hidden
  shadow-[0_30px_80px_rgba(0,0,0,.18)]
  z-20
  "
>
  <Image
    src="/images/hero.jpeg"
    alt="The Shimmora Bar"
    fill
    className="object-cover hover:scale-105 transition duration-500"
  />
</motion.div>

{/* Right Medium */}

<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
  className="
  absolute
  right-0
  bottom-10

  w-44
  h-44

  md:w-64
  md:h-64

  rounded-[32px]
  overflow-hidden
  shadow-2xl
  "
>
  <Image
    src="/images/hero.jpeg"
    alt="The Shimmora Bar"
    fill
    className="object-cover hover:scale-105 transition duration-500"
  />
</motion.div>

{/* Decorative Card */}

<div
  className="
  absolute

  left-[18%]
  bottom-0

  hidden
  md:flex

  items-center
  justify-center

  w-36
  h-20

  rounded-2xl

  bg-white
  shadow-xl
  "
>
  <div className="text-center">
    <p className="text-[#700342] text-2xl font-semibold">50+</p>
    <p className="text-xs tracking-[3px] text-gray-500 uppercase">
      Events
    </p>
  </div>
</div>

{/* Decorative Circle */}

<div
  className="
  absolute

  right-[20%]
  top-6

  w-6
  h-6

  rounded-full

  bg-[#C13494]
  opacity-70
  "
/>
          </div>
        </div>

      </div>
    </section>
  );
}