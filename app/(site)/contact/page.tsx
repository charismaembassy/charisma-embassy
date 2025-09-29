import React from "react";
import SmallHero from "@/components/hero/SmallHero";
import heroImage from "@/public/christ-hakopian-BpLS--lmh5E-unsplash.jpg";
import Map from "@/components/Map"

const contact = () => {
  return (
    <div>
      <SmallHero
        header="Do you have questions?"
        headerTextColor="bg-gradient-to-r from-gray-100 via-red-900/90 to-gray-50 bg-clip-text text-transparent"
        imgSrc={heroImage}
        para2="We’d love to hear from you.
Together, let’s build faith, hope, and community."
      />
      {/* <Map lat={6.5244} lng={3.3792} placeName="Lagos, Nigeria" /> */}
    </div>
  );
};

export default contact;
