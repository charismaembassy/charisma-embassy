import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = () => {
  return (
    <header>
      <Desktop />
      <Mobile />
    </header>
  );
};

export default Navbar;
