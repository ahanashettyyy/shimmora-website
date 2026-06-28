"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#700342]/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-24 px-6 md:px-10 flex items-center justify-between">

        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="The Shimmora Bar"
            width={scrolled ? 145 : 170}
            height={60}
            className="transition-all duration-300 max-w-[170px] w-auto"
            priority
          />
        </div>

        <div className="hidden md:flex gap-10 text-white uppercase tracking-[2px] text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-white"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${open ? "block" : "hidden"} bg-[#700342]/95`}>
        <div className="px-6 pb-6 pt-4 flex flex-col gap-4 text-white uppercase tracking-[2px]">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}