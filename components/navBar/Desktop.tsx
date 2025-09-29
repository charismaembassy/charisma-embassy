"use client";

import { navbarData } from "@/utils/_data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Desktop: React.FC = () => {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`hidden lg:block fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-red-900/95 shadow-md backdrop-blur-sm translate-y-0"
          : "bg-transparent translate-y-2"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto h-[70px] flex items-center justify-between px-6 xl:px-0">
        {/* Logo / Brand */}
        <div className="text-white font-extrabold tracking-wide text-xl relative group">
          COGCC
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center justify-center gap-8">
          {navbarData.map((nav) => (
            <li
              key={nav.label}
              className={`relative text-sm font-medium tracking-wider transition-colors duration-300 ${
                path === nav.href ? "text-white" : "text-gray-200"
              } hover:text-white`}
            >
              <Link href={nav.href} className="relative group">
                {nav.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <Link
          href="/contact"
          className="bg-white text-red-800 font-semibold px-6 py-2 rounded shadow hover:shadow-md transition-all duration-300 hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Desktop;
