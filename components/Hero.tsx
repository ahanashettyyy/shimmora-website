"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Glitter from "@/components/Glitter";

export default function Hero() {
  return (
    <section
      className="min-h-screen text-white flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, #700342 0%, #A1146E 45%, #C13494 100%)",
      }}
    >
         <Glitter />
      <div className="flex-1 flex flex-col md:flex-row items-center px-6 md:px-24 pt-24">

        {/* Left Side */}
        <motion.div
  className="w-full md:w-1/2"
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>

          <p className="uppercase tracking-[6px] mb-4">
            Bangalore Based
          </p>

          <h1 className="text-4xl md:text-[92px] tracking-tight font-light leading-tight">
            The Shimmora Bar 
          </h1>

          <p className="text-base md:text-xl mt-6 max-w-md leading-relaxed">
            Face glitter, body glitter art and magical
            event experiences for weddings,
            concerts and celebrations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">

<a
  href="https://wa.me/919110832295?text=Hi! I'd like to book The Shimmora Bar for my event."
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="group bg-[#F9EDF0] text-[#700342] px-5 py-3 rounded-full flex items-center gap-3 hover:bg-[#700342] hover:text-white transition-all duration-300">

    BOOK NOW

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />

  </button>
</a>

 <a
  href="#gallery"
  className="group inline-flex items-center gap-3 border border-[#F9EDF0] text-[#F9EDF0] px-5 py-3 rounded-full hover:bg-[#F9EDF0] hover:text-[#700342] transition-all duration-300"
>
  VIEW GALLERY

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>
          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
  className="w-full md:w-1/2 flex justify-center mt-8 md:mt-16"
  initial={{ opacity: 0, x: 60, scale: 0.9 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{
    duration: 1,
    delay: 0.2,
    ease: "easeOut",
  }}
>

          <div className="relative w-full md:w-[85%] max-w-[360px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(112,3,66,0.35)] blur-[0.3px] ">

            <Image
              src="/images/hero.jpeg"
              alt="The Shimmora Bar"
              fill
              className="object-cover object-center"
              priority
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}