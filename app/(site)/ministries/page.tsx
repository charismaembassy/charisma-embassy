import SmallHero from "@/components/hero/SmallHero";
import Ministries from "@/components/Ministries";
import React from "react";
import heroImage from "@/public/pastor.jpg";

const ministries = () => {
  return (
    <div>
      <SmallHero
        header="Get involved"
        headerTextColor="text-white"
        imgSrc={heroImage}
        para2="Celebration Church ministries are expressions of our mandate as a Church and as a community. We serve God by His Spirit - joyfully."
      />
      <Ministries />
    </div>
  );
};

export default ministries;
