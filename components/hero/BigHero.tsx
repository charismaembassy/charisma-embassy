"use client";

import heroImage from "@/public/hero3.jpg";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ImageContainer from "../ImageContainer";

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
    transition: { duration: 0.8, ease: "easeOut" }, // ✅ now matches Variants type
  },
};

const BigHero: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] lg:min-h-[calc(100vh-65px)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageContainer
          src={heroImage}
          alt="City of God Covenant Church"
          styles="object-cover gray-scale-100"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center min-h-[100vh] lg:min-h-[calc(100vh-65px)] px-4 sm:px-6 md:px-12 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="show"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl text-center text-white space-y-6">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            variants={fadeUpVariants}
          >
            Discover Faith. Experience Community. Live with Purpose.
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl font-light"
            variants={fadeUpVariants}
          >
            City of God Covenant Church — Where faith meets everyday life.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            variants={fadeUpVariants}
          >
            At City of God Covenant Church, we&apos;re more than a Sunday
            service — we&apos;re a family. We gather to encounter God, grow
            together, and impact our city with His love. Whether you&apos;re new
            to church, rediscovering your faith, or looking for a place to
            belong, you&apos;ll find a warm, welcoming community here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUpVariants}
          >
            <Link
              href="#visit"
              className="w-full sm:w-auto px-6 py-3 rounded bg-white text-indigo-700 font-semibold shadow hover:bg-gray-100 transition text-center"
            >
              Join us for worship
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-6 py-3 rounded border border-white font-semibold hover:bg-white hover:text-indigo-700 ease-in-out transition duration-300 text-center"
            >
              Who we are
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default BigHero;
