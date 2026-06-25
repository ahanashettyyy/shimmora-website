import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#53002b] text-[#F9EDF0] pt-24 pb-10">
      <div className="max-w-[1320px] mx-auto px-10">

        {/* Top Footer */}
        <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-24 items-start pb-16">

          {/* Left */}
          <div className="flex flex-col">
            <Image
              src="/images/logo.png"
              alt="The Shimmora Bar"
              width={220}
              height={80}
              className="mb-8"
            />

            <p className="text-[#F9EDF0]/80 leading-9 max-w-[320px]">
              Luxury glitter and face art experiences for weddings,
              concerts, birthdays, festivals and unforgettable celebrations.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h3 className="text-3xl mb-8">Quick Links</h3>

            <ul className="space-y-5 text-[#F9EDF0]/80">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-white transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        {/* Right */}
{/* Right */}
<div>
  <h3 className="text-3xl mb-8">Get in Touch</h3>

  <div className="space-y-6 text-[#F9EDF0]/80">

    <p>
      <span className="font-semibold text-white">IG:</span>{" "}
      <a
        href="https://instagram.com/shimmorabar"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:underline transition"
      >
        @shimmorabar
      </a>
    </p>

    <p>
      <span className="font-semibold text-white">Phone:</span>{" "}
      <a
        href="https://wa.me/919110832295"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:underline transition"
      >
        +91 9110832295
      </a>
    </p>

    <p>
      <span className="font-semibold text-white">Mail:</span>{" "}
      <a
        href="mailto:theshimmorabar@gmail.com"
        className="hover:text-white hover:underline transition"
      >
        theshimmorabar@gmail.com
      </a>
    </p>

    <p>
      <span className="font-semibold text-white">Location:</span>{" "}
      Bangalore, India
    </p>

    {/* QR Code */}
    <div className="pt-6">
      <Image
  src="/images/qr-code.png"
  alt="Scan QR"
  width={150}
  height={150}
  className="rounded-2xl bg-white p-3 shadow-lg"
/>

      <p className="text-sm text-[#F9EDF0]/60 mt-3">
        Scan to connect instantly
      </p>
    </div>

  </div>
</div>

          

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#C13494]/30 pt-8 flex items-center justify-between text-sm text-[#F9EDF0]/70">
          <p>© 2026 The Shimmora Bar. All rights reserved.</p>

          <p>Designed by @ahanashetty8@gmail.com ✨</p>
        </div>

      </div>
    </footer>
  );
}