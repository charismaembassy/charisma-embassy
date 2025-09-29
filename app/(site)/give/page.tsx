import SmallHero from "@/components/hero/SmallHero";
import React from "react";
import heroImage from "@/public/sophie-spree-9zJcrli2WCU-unsplash.jpg";
import AccountDetails from "@/components/AccountDetails";

const give = () => {
  return (
    <div>
      <SmallHero
        header="Our mission, powered by your generosity."
        headerTextColor="bg-gradient-to-r from-gray-100 via-red-900/90 to-gray-50 bg-clip-text text-transparent"
        imgSrc={heroImage}
        para2="Together, we can bring the gospel to a billion lives in ten thousand cities—your gift makes it possible."
      />
      <AccountDetails />
    </div>
  );
};

export default give;
