import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MdMenu, MdSearch, MdSettings } from "react-icons/md";

import Logo from "../assets/Logo";

const Navbar = (props) => {
  const [menuDropDownShow, setMenuDropDownShow] = useState(false);
  const [settingsDropDownShow, setSettingsDropDownShow] = useState(false);

  const handleMenuButton = () => {
    setMenuDropDownShow(!menuDropDownShow);
    setSettingsDropDownShow(false);
  };
  const handleSettingsButton = () => {
    setSettingsDropDownShow(!settingsDropDownShow);
    setMenuDropDownShow(false);
  };
  return (
    <header className="absolute w-full left-0 top-0 z-20">
      <div
        className=" h-12 bg-[#1B1C1E]     
               flex justify-between items-center
              px-2 text-[#D9DAD9] text-2xl
"
      >
        <div className="w-1/3 flex items-center">
          <button className="" type="button" onClick={handleMenuButton}>
            <MdMenu />
          </button>
        </div>

        <div className="w-1/3 flex items-center justify-center text-base text-white">
          {props.title ? props.title : <Logo />}
        </div>

        <div className="flex flex-row w-1/3 justify-end items-center">
          <MdSearch />
          <button className="ml-2" onClick={handleSettingsButton}>
            <MdSettings />
          </button>
        </div>
      </div>
      {menuDropDownShow && (
        <div className="absolute top-12 left-0 bg-[#1B1C1E] text-white text-2xl">
          <ul>
            <li className="py-3 px-6 border-b border-[#D9DAD9] last:border-none">
              <Link to="/integrate">통합조회</Link>
            </li>
            <li className="py-3 px-6 border-b border-[#D9DAD9] last:border-none">
              <Link to="/products">제품조회</Link>
            </li>
            <li className="py-3 px-6 border-b border-[#D9DAD9] last:border-none ">
              <Link to="/outgoing">발신정보</Link>
            </li>
          </ul>
        </div>
      )}
      {settingsDropDownShow && (
        <div className="absolute top-12 right-0 bg-[#1B1C1E] text-white text-2xl ">
          <ul>
            <li className="py-3 px-6 border-b border-[#D9DAD9] last:border-none">
              <Link to="/user">마이페이지</Link>
            </li>
            <li className="py-3 px-6 border-b border-[#D9DAD9] last:border-none">
              로그아웃
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
