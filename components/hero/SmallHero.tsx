"use client";

import Link from "next/link";
import React from "react";
import ImageContainer from "../ImageContainer";
import { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

interface SmallHeroProps {
  header: string;
  para1?: string;
  para2?: string;
  link1?: string;
  link2?: string;
  imgSrc: StaticImageData;
  headerTextColor?: string;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SmallHero: React.FC<SmallHeroProps> = ({
  header,
  para1,
  para2,
  link1,
  link2,
  imgSrc,
  headerTextColor,
}) => {
  return (
    <section className="relative h-[80vh] lg:h-[70vh] flex items-center justify-center">
      {/* Background image */}
      <ImageContainer
        src={imgSrc}
        alt="City of God Covenant Church"
        styles="object-cover gray-scale-100"
      />
      <div className="absolute bg-black/50 top-0 bottom-0 left-0 right-0" />

      {/* Animated Content */}
      <motion.div
        className="width text-center absolute text-white space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className={`text-2xl md:text-5xl font-serif font-bold mb-3 ${headerTextColor}`}
          variants={fadeUpVariants}
        >
          {header}
        </motion.h1>

        {para1 && (
          <motion.p
            className="text xl:text-lg tracking-wide font-extralight mb-2 lg:mb-3 text-white"
            variants={fadeUpVariants}
          >
            {para1}
          </motion.p>
        )}

        {para2 && (
          <motion.p
            className="text-base xl:text-xl mb-10 max-w-3xl mx-auto font-light leading-relaxed text-white tracking-wide"
            variants={fadeUpVariants}
          >
            {para2}
          </motion.p>
        )}

        <motion.div
          className="flex justify-center gap-4 text-sm xl:text-lg"
          variants={fadeUpVariants}
        >
          {link1 && (
            <Link
              href={link1}
              className="px-6 py-3 bg-red-900/95 text-white font-light tracking-wider"
            >
              Our Branches
            </Link>
          )}
          {link2 && (
            <Link
              href={link2}
              className="px-6 py-3 border border-white text-gray-800 font-semibold bg-white"
            >
              <span className="hidden md:inline-block">Learn More About</span>{" "}
              Our Mission
            </Link>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SmallHero;
