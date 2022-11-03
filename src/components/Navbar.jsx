import React from "react";

import Search from "../assets/Search";
import Logo from "../assets/Logo";
import Settings from "../assets/Settings";
import BurgerMenu from "../assets/BurgerMenu";

const Navbar = () => {
  return (
    <header
      className="w-full h-12 bg-[#1B1C1E]
               absolute left-0 top-0
               flex justify-between items-center
              px-2
"
    >
      <div className="w-1/3">
        <BurgerMenu />
      </div>

      <div className="w-1/3 flex items-center justify-center">
        <Logo />
      </div>

      <div className="flex flex-row w-1/3 justify-end items-center">
        <Search />
        <Settings />
      </div>
    </header>
  );
};

export default Navbar;
