import React from "react";
import { MdArrowBackIos, MdMenu, MdCropSquare } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="w-full h-12 bg-[#1B1C1E]
              absolute left-0 bottom-0
              flex justify-around items-center
              text-[#D9DAD9] text-2xl
"
    >
      <MdMenu className="rotate-90" />
      <MdCropSquare />
      <MdArrowBackIos />
    </footer>
  );
};

export default Footer;
