"use client";

import React from "react";
import ImageContainer from "./ImageContainer";
import programs from "@/public/Church-Flyer-Template-Preview.avif";
import programs1 from "@/public/Preview+image.avif";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { StaticImageData } from "next/image";

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ComingSoon: React.FC = () => {
  const data: StaticImageData[] = [programs, programs1,];

  return (
    <section className="bg-gradient-to-r from-white via-gray-100/50 to-gray-50/50">
      <div className="width">
        {/* Heading */}
        <motion.p
          className="text-3xl md:text-5xl font-bold uppercase mb-5 md:mb-10 text-center text-red-900/95 tracking-wider"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          Coming Soon
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.map((p, i) => (
            // IMPORTANT: apply the col-span to this motion.div (grid child)
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`${i === 1 ? "lg:col-span-2" : ""}`}
            >
              <Link href="/" className="group block h-full">
                <div className="relative h-[500px] lg:h-[500px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 z-10" />
                  <ImageContainer
                    src={p}
                    alt="programs"
                    styles="transition-transform duration-500 group-hover:scale-[105%]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
