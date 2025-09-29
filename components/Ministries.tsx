import React from "react";
import Card from "./Card";
import img1 from "@/public/janay-peters-nlpVEwSfQd0-unsplash.jpg";
import img2 from "@/public/leiada-krozjhen-rqaAWQgy05U-unsplash.jpg";
import img3 from "@/public/ufoma-ojo-FYq7zbi7iRE-unsplash.jpg";

const Ministries = () => {
  return (
    <section className="width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3">
      {[
        { title: "Campus Ministry", img: img3 },
        { title: "Youth Ministry", img: img2 },
        { title: "Celeb Kids & Teens", img: img1 },
      ].map((item, i) => (
        <Card {...item} key={i} index={i} />
      ))}
    </section>
  );
};

export default Ministries;
