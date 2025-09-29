"use client";

import { navbarData } from "@/utils/_data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";

const Mobile: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="lg:hidden fixed top-0 left-0 w-full z-50">
      {/* Top bar */}
      <div
        className={`flex items-center justify-between h-[65px] px-4 transition-all duration-500 ${
          scrolled
            ? "bg-red-900/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="font-bold text-white tracking-widest text-lg">
          COGCC
        </div>
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          <HiOutlineBars3 size={30} className="text-white" />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-red-800 text-white transform transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header inside menu */}
        <div className="flex items-center justify-between h-[65px] px-4 border-b border-red-700">
          <div className="font-bold tracking-widest text-lg">COGCC</div>
          <button
            onClick={() => setOpen(false)}
            className="p-1 transition-transform duration-300 hover:rotate-90"
          >
            <IoCloseOutline size={30} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 mt-10 px-6">
          {navbarData.map((nav, i) => (
            <li
              key={nav.label}
              className={`relative text-lg font-medium tracking-wide transition-colors duration-300 ${
                path === nav.href ? "text-white" : "text-gray-300"
              } hover:text-white`}
              style={{
                animation: open
                  ? `fadeSlideIn 0.4s ease forwards ${i * 0.1 + 0.2}s`
                  : "none",
                opacity: 0,
              }}
              onClick={() => setOpen(false)}
            >
              <Link href={nav.href} className="relative group">
                {nav.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action */}
        <div className="mt-10 px-6">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-white text-red-800 font-semibold px-6 py-2 rounded-full shadow hover:scale-105 hover:shadow-md transition-transform duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Keyframes for link animation */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Mobile;
