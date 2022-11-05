import React from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdMenu, MdCropSquare } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer
      className="w-full h-12 bg-[#1B1C1E]
              absolute left-0 bottom-0
              flex justify-around items-center
              text-[#D9DAD9] text-2xl
"
    >
      <MdMenu className="rotate-90" />
      <button onClick={() => navigate("/")}>
        <MdCropSquare />
      </button>
      <button onClick={() => navigate(-1)}>
        <MdArrowBackIos />
      </button>
    </footer>
  );
};

export default Footer;
