"use client";

import React from "react";
import ImageContainer from "./ImageContainer";
import { motion, Variants } from "framer-motion";
import { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  index: number;
  img: StaticImageData;
  description?: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: i * 0.4, // stagger effect based on index
    },
  }),
};

const Card: React.FC<CardProps> = ({ title, index, img, description }) => {
  return (
    <motion.div
      className="flex flex-col"
      variants={fadeInUp}
      initial="hidden"
      animate="show" // 🔹 will trigger right after component mounts
      custom={index}
    >
      {/* Image Section */}
      <motion.div className="relative h-[400px] overflow-hidden rounded-xl">
        <ImageContainer
          src={img}
          alt={title}
          styles="object-cover grayscale transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
      </motion.div>

      {/* Text Section */}
      <motion.div className="mt-4 px-3">
        <p className="font-semibold text-2xl my-3 truncate">{title}</p>
        <p className="font-light text-lg md:text-justify text-gray-500">
          {description ??
            "Celebration Church Worship is the music ministry of Celebration Church International, dedicated to creating inspiring music with a strong foundation in faith. Led by our founder, Apostle Emmanuel Iren, our mission is to produce songs that deepen individuals' relationship with Christ and spread a message of hope and joy through music."}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
