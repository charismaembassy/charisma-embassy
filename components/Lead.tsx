"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import ImageContainer from "./ImageContainer";
import pastor from "@/public/pastor2.jpg";
import pastorWife from "@/public/pastor2.jpg";

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

const Lead: React.FC = () => {
  return (
    <section className="lg:pt-10 bg-gradient-to-r from-white via-gray-100/50 to-gray-50/50">
      <div className="width-flex-between gap-10">
        {/* Text Section */}
        <motion.div
          className="flex-1 flex flex-col gap-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl text-red-900/95 sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight">
            Our Lead <span className="underline">Pastor</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-lg font-light leading-7 lg:leading-8  lg:tracking-wider text-gray-700 text-justify">
            Apostle Emmanuel Iren is the visionary founder and lead pastor of
            Celebration Church International, a dynamic teaching ministry
            dedicated to spreading the gospel and helping people discover their
            purpose in Christ. With a passion for the Word of God and a heart
            for missions, Apostle Iren has led the church to establish Over 30
            campuses across Nigeria, North America, and the UK, all while
            inspiring countless lives to grow in their faith and embrace the
            life-changing power of Christ.
          </p>
          <div className="border-l-4 border-[#D2431B]/95">
            <Link
              href="/about"
              className="px-4 lg:px-6 py-3 font-semibold text-red-900/95 border border-gray-700 ease-in-out transition duration-300 text-center rounded-e-full text-sm"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-end w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative w-full lg:w-[80%] h-[500px] lg:h-[500px] rounded-2xl grayscale-75">
            <ImageContainer src={pastor} alt="pastor" styles="rounded-2xl" />
            <div className="absolute top-0 bottom-0 right-0 left-0" />
            <div className="absolute -left-20 -top-11 bottom-10 right-20 hidden lg:block">
              <motion.div
                className="relative h-full w-full rounded-2xl overflow-hidden shadow-[6px_6px_10px_rgba(0,0,0,0.6)]"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute top-0 bottom-0 right-0 left-0 z-10" />
                <ImageContainer
                  src={pastorWife}
                  alt="pastor's wife"
                  styles=""
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lead;
