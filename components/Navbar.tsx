"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#700342]/95 backdrop-blur-lg shadow-lg"
          : "bg-[#700342]"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 md:h-24 px-6 md:px-10 flex items-center justify-between">

        <a href="#">
          <Image
            src="/images/logo.png"
            alt="The Shimmora Bar"
            width={scrolled ? 150 : 180}
            height={70}
            priority
            className="object-contain transition-all duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[#F9EDF0]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="uppercase tracking-[2px] text-sm hover:text-white transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-[#700342] border-t border-white/10 px-6 py-4 flex flex-col">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-[#F9EDF0] uppercase tracking-[2px] border-b border-white/10 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}