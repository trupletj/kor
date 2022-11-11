import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MdMenu, MdSearch, MdSettings } from "react-icons/md";

import Logo from "../assets/Logo";
import SearchButton from "../assets/SearchButton";
import SettingsButton from "../assets/SettingsButton";
import MenuButton from "../assets/MenuButton";

const Navbar = (props) => {
  const navigate = useNavigate();

  const [menuDropDownShow, setMenuDropDownShow] = useState(false);
  const [settingsDropDownShow, setSettingsDropDownShow] = useState(false);
  const [searchBarShow, setSearchBarShow] = useState(false);

  const handleMenuButton = () => {
    setMenuDropDownShow(!menuDropDownShow);
    setSettingsDropDownShow(false);
    setSearchBarShow(false);
  };
  const handleSettingsButton = () => {
    setSettingsDropDownShow(!settingsDropDownShow);
    setMenuDropDownShow(false);
    setSearchBarShow(false);
  };
  const handleSearchButton = () => {
    setSearchBarShow(!searchBarShow);
    setMenuDropDownShow(false);
    setSettingsDropDownShow(false);
  };
  return (
    <header className="absolute w-full left-0 top-0 z-20">
      <div
        className=" h-[72px] bg-[#1B1C1E]     
               flex justify-between items-center
              px-2 text-[#D9DAD9] text-2xl
"
      >
        <div className="w-1/3 flex items-center">
          <button className="" type="button" onClick={handleMenuButton}>
            <MenuButton />
          </button>
        </div>
        {searchBarShow ? (
          <input
            placeholder="검색어 입력...."
            type="text"
            className="bg-[#D9DAD9] w-full text-white text-sm p-2"
          />
        ) : (
          <div className="w-1/3 flex items-center justify-center text-base text-white">
            {props.title ? props.title : <Logo />}
          </div>
        )}

        <div className="flex flex-row w-1/3 justify-end items-center">
          <button onClick={handleSearchButton}>
            <SearchButton />
          </button>
          <button className="ml-2" onClick={handleSettingsButton}>
            <SettingsButton />
          </button>
        </div>
      </div>
      {menuDropDownShow && (
        <div className="absolute top-[72px] left-0 bg-[#1B1C1E] text-white text-[28px] w-[200px] text-center">
          <ul>
            <li
              onClick={() => setMenuDropDownShow(false)}
              className="py-3 px-6 border-b-[2px] border-[#464646] last:border-none"
            >
              <Link to="/integrate">통합조회</Link>
            </li>
            <li
              onClick={() => setMenuDropDownShow(false)}
              className="py-3 px-6 border-b-[2px] border-[#464646] last:border-none"
            >
              <Link to="/products">제품조회</Link>
            </li>
            <li
              onClick={() => setMenuDropDownShow(false)}
              className="py-3 px-6 border-b-[2px] border-[#464646] last:border-none "
            >
              <Link to="/outgoing">발신정보</Link>
            </li>
          </ul>
        </div>
      )}
      {settingsDropDownShow && (
        <div className="absolute top-[72px] right-0 bg-[#1B1C1E] text-white text-[28px] w-[200px] text-center ">
          <ul>
            <li className="py-3 px-6 border-b-[2px] border-[#464646] last:border-none">
              <Link to="/user">마이페이지</Link>
            </li>
            <li
              className="py-3 px-6 border-b-[2px
            ] border-[#464646] last:border-none"
            >
              로그아웃
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
