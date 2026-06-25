"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="max-w-7xl mx-auto h-24 px-10 flex items-center justify-between">

        <Image
          src="/images/logo.png"
          alt="The Shimmora Bar"
          width={scrolled ? 145 : 170}
          height={60}
          className="transition-all duration-300"
          priority
        />

        <div className="flex gap-10 text-white uppercase tracking-[2px] text-sm">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}