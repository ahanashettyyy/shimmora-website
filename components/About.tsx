import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F9EDF0] py-32"
    >
      <div className="max-w-7xl mx-auto px-10">

        <p className="uppercase tracking-[5px] text-[#C13494] mb-4">
          WHO WE ARE
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Left */}

          <div>
             
            <h2 className="text-5xl md:text-6xl font-light text-[#700342] leading-tight mb-4">
              We create unforgettable glitter experiences.
            </h2>

            <p className="text-lg text-gray-700 leading-8 mb-8">
              The Shimmora Bar transforms celebrations with luxury face glitter, body art and premium event experiences. Whether it's weddings, concerts, birthdays or college festivals—we bring sparkle that people remember.
            </p>

           <a
  href="#services"
  className="
    inline-flex
    items-center
    gap-3
    bg-[#700342]
    text-white
    px-8
    py-4
    rounded-full
    hover:bg-[#C13494]
    transition-all
    duration-300
    group
  "
>
  Learn More

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>

          </div>

          {/* Right */}

          <div>

            <div className="w-full aspect-square rounded-[40px] bg-[#C13494]/20 border-2 border-dashed border-[#C13494] flex items-center justify-center">

              <p className="text-[#700342]">
                ABOUT IMAGE
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}