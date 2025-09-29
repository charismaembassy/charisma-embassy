import Card from "@/components/Card";
import SmallHero from "@/components/hero/SmallHero";
import React from "react";
import heroImage from "@/public/pastor2.jpg";
import img1 from "@/public/efrain-maldonado-knHd12cdRK4-unsplash.jpg"
import img2 from "@/public/thiago-barletta-pHb0Ztr2CFE-unsplash.jpg"
import img3 from "@/public/tye-doring-yT71caKUv9U-unsplash.jpg"

const sermons = () => {
  return (
    <div>
      <SmallHero
        header="Our mission, powered by your generosity."
        headerTextColor="bg-gradient-to-r from-gray-100 via-red-900/90 to-gray-50 bg-clip-text text-transparent"
        imgSrc={heroImage}
        para2="Together, we can bring the gospel to a billion lives in ten thousand cities—your gift makes it possible."
      />
      <section className="width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3">
        {[
          { title: "Discerning your role in this move of God", img: img3 },
          { title: "Fueling The Engine", img: img2 },
          { title: "The Working of Faith", img: img1 },
        ].map((item, i) => (
          <Card {...item} key={i} index={i} />
        ))}
      </section>
    </div>
  );
};

export default sermons;
