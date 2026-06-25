import { ArrowRight } from "lucide-react";
export default function CTA() {
  return (
    <section
      id="contact"
      className="py-40"
      style={{
        background:
          "linear-gradient(135deg,#700342,#C13494)",
      }}
    >

      <div className="max-w-5xl mx-auto text-center text-white px-8">

        <p className="uppercase tracking-[4px] mb-5">
          LET'S CREATE MAGIC
        </p>

        <h2 className="text-6xl font-light leading-tight mb-8">
          Ready to sparkle
          <br />
          at your next event?
        </h2>

        <p className="text-xl mb-12 text-[#F9EDF0]">
          Weddings, concerts, birthdays,
          festivals and everything in between.
        </p>

       <a
  href="https://wa.me/919110832295?text=Hi! I'd like to book The Shimmora Bar for my event."
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    inline-flex
    items-center
    gap-3
    bg-[#F9EDF0]
    text-[#700342]
    px-10
    py-5
    rounded-full
    hover:bg-white
    transition-all
    duration-300
  "
>
  BOOK YOUR EVENT

  <ArrowRight
    size={18}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</a>
      </div>

    </section>
  );
}