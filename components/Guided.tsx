import Link from "next/link";
import React from "react";
import programs from "@/public/efrain-maldonado-knHd12cdRK4-unsplash.jpg";
import programs1 from "@/public/pastor2.jpg";
import programs2 from "@/public/tye-doring-yT71caKUv9U-unsplash.jpg";
import programs4 from "@/public/singer.jpg";
import ImageContainer from "./ImageContainer";

const Guided = () => {
  return (
    <section className="width text-center">
      <p className="text-base sm:text-lg md:text-3xl font-bold text-indigo-900">
        Guided by Grace — Leading with Love
      </p>
      <p className=" font-light tracking-wider leading-tight text-lg my-3 md:my-5">
        Shepherds after God&rsquo;s heart, they nurture growth,
        <br className="hidden md:flex" /> build unity, and
        <span className="font-medium text-red-900/95">
          {" "}
          point every soul to Christ.
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10 lg:px-10">
        <div className="relative h-[200px] lg:h-[200px] rounded-xl overflow-hidden -rotate-3 lg:-rotate-12 grayscale-100">
          <div className="absolute top-0 bottom-0 right-0 left-0 z-10" />
          <ImageContainer src={programs} alt="programs" />
        </div>

        <div className="relative h-[200px] lg:h-[400px] rounded-xl overflow-hidden rotate-3 lg:rotate-0">
          <div className="absolute top-0 bottom-0 right-0 left-0 z-10" />
          <ImageContainer src={programs1} alt="programs" />
        </div>
        <div className="relative h-[200px] lg:h-[200px] rounded-xl overflow-hidden -rotate-3 md:rotate-3  lg:-rotate-12 grayscale-100">
          <div className="absolute top-0 bottom-0 right-0 left-0 z-10" />
          <ImageContainer src={programs2} alt="programs" />
        </div>
        <div className="relative h-[200px] lg:h-[300px] rounded-xl overflow-hidden rotate-3 md:-rotate-3 lg:rotate-6 grayscale-100">
          <div className="absolute top-0 bottom-0 right-0 left-0 z-10" />
          <ImageContainer src={programs4} alt="programs" />
        </div>
      </div>
    </section>
  );
};

export default Guided;
