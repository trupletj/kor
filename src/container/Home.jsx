import React from "react";

import Search from "../assets/Search";
import Logo from "../assets/Logo";
import Settings from "../assets/Settings";
import BurgerMenu from "../assets/BurgerMenu";

const Home = () => {
  return (
    <div className="relative h-screen max-w-[550px] mx-auto">
      <header
        className="w-full h-16 bg-[#1B1C1E]
                    absolute left-0 top-0
                    flex justify-center items-center
                    text-white text-2xl
"
      >
        <BurgerMenu />
        <Logo />
        <Search />
        <Settings />
      </header>
      <footer
        className="w-full h-16 bg-[#1B1C1E]
                    absolute left-0 bottom-0
                    flex justify-center items-center
                    text-white text-2xl
  "
      >
        Footer Navigation Menu
      </footer>
    </div>
  );
};

export default Home;
