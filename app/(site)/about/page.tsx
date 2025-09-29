import AboutChurch from "@/components/AboutChurch";
import SmallHero from "@/components/hero/SmallHero";
import Lead from "@/components/Lead";
import React from "react";
import heroImage from "@/public/sophie-spree-9zJcrli2WCU-unsplash.jpg";

const about = async () => {
  return (
    <div>
      <SmallHero
        header="Welcome to City of God Covenant Church"
        headerTextColor="bg-gradient-to-r from-gray-100 via-red-900/90 to-gray-50 bg-clip-text text-transparent"
        para1="*A Place of worship, Faith, prayer, and Transformation with the Lord*"
        para2="At City of God Covenant Church, you’ll find a warm, diverse community where everyone has a place. Together, we grow in faith, build lasting relationships, and make a difference in our city and beyond."
        link1="#branches"
        link2="#mission"
        imgSrc={heroImage}
      />
      <AboutChurch />
      <Lead />
    </div>
  );
};

export default about;
