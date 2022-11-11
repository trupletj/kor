import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Form from "../components/UserForm";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <div className="grid grid-cols-2 text-xl mt-[60px]  font-extrabold">
          <div className="flex flex-col items-center justify-center  border-r-[2px] border-[#b7b7b7] pt-[10px]">
            <h1 className="">인증서</h1>
            <h1 className="text-2xl text-[#2E3B6B]">13</h1>
          </div>
          <div className="flex flex-col items-center justify-center  pt-[10px]">
            <h1 className="">성적서</h1>
            <h1 className="text-2xl text-[#2E3B6B]">18</h1>
          </div>
          <div className="col-span-2 flex flex-row border-t-[2px] border-[#b7b7b7] mt-[10px] pt-[25px]">
            <h1 className="w-1/2 flex items-center justify-center text-[40px]">
              TOTAL
            </h1>
            <h1 className="w-1/2 flex items-center justify-center text-2xl text-[#2E3B6B]">
              31
            </h1>
          </div>
        </div>

        <div className="mt-[180px]">
          <h1 className="text-xl text-center font-extrabold mb-[70px]">
            사용중인 법령 정보
          </h1>
          <ul className="text-base">
            <li className="mb-[40px] flex items-start">
              <h1 className=""> ▶{" 어린이제품 안전특별법"}</h1>
            </li>
            <li className="mb-[40px] flex items-start">
              <h1 className="">▶ {" 전기용품 및 생활용품 안전관리법(생활)"}</h1>
            </li>
            <li className="mb-[40px] flex items-start">
              {/* <AiFillCaretRight className="w-1/12 my-1" /> */}
              <h1 className="">
                ▶ {" 방송통신 기자재등의 적합성 평가에 관한 고시 (전파법)"}
              </h1>
            </li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;
