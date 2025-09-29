import React from "react";
import ImageContainer from "./ImageContainer";
import programs from "@/public/christ-hakopian-BpLS--lmh5E-unsplash.jpg";
import programs1 from "@/public/roger-ce-hdIhpLM0r-Y-unsplash.jpg";
import programs2 from "@/public/brad-halcrow-VKyC0zys5HY-unsplash.jpg";

const Branches = () => {
  return (
    <section className=" bg-gray-100" id="branches">
      <div className="width flex flex-col md:flex-row gap-5 lg:gap-10">
        <div>
          <p className="text-gray-600 tracking-wider font-extralight lg:text-lg">
            — COGCC —
          </p>
          <p className="text-gray-800 font-extrabold text-3xl lg:text-5xl">
            Our Esteemed <br />
            Branches
          </p>
        </div>
        <div className="flex-2/3 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5">
          <div className="relative rounded-2xl overflow-hidden h-[300px] group cursor-pointer">
            <div className="absolute lg:-translate-x-96 group-hover:translate-x-0 duration-500 transition ease-in-out top-0 bottom-0 right-0 left-0 z-20 flex items-center justify-center lg:backdrop-blur-xl bg-black/50">
              <p className=" font-extrabold text-2xl text-white tracking-widest lg:-translate-x-96 group-hover:translate-x-0 duration-1000 transition ease-in-out">
                CHOBA BRANCH
              </p>
            </div>
            <ImageContainer
              src={programs2}
              alt="programs"
              styles="transition-transform duration-500 group-hover:scale-150 lg:animate-pulse group-hover:animate-none lg:animate-pulse group-hover:animate-none"
            />
          </div>
          <div className="relative rounded-2xl h-[300px] overflow-hidden group cursor-pointer">
            <div className="absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center lg:backdrop-blur-xl lg:-translate-x-96 group-hover:translate-x-0 duration-500 transition ease-in-out bg-black/50">
              <p className=" font-extrabold text-2xl text-white tracking-widest lg:-translate-x-96 group-hover:translate-x-0 duration-1000 transition ease-in-out ">
                CHOBA BRANCH
              </p>
            </div>
            <ImageContainer
              src={programs1}
              alt="programs"
              styles="transition-transform duration-500 group-hover:scale-150 lg:animate-pulse group-hover:animate-none lg:animate-pulse group-hover:animate-none"
            />
          </div>
          <div className="relative rounded-2xl h-[300px] md:col-span-2 overflow-hidden group cursor-pointer">
            <div className="absolute top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center lg:backdrop-blur-xl lg:-translate-x-[800px] group-hover:translate-x-0 duration-700 transition ease-in-out bg-black/50">
              <p className=" font-extrabold text-2xl text-white tracking-widest lg:-translate-x-[800px] group-hover:translate-x-0 duration-1000 transition ease-in-out">
                CHOBA BRANCH
              </p>
            </div>
            <ImageContainer
              src={programs}
              alt="programs"
              styles="transition-transform duration-500 group-hover:scale-150 lg:animate-pulse group-hover:animate-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
