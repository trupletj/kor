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
        <div className="grid grid-cols-2 text-xl my-10">
          <div className="flex flex-col items-center justify-center border-b border-r border-[#D9DAD9] py-5">
            <h1 className="mb-5 font-bold">인증서</h1>
            <h1 className="text-4xl text-[#2E3B6B]">13</h1>
          </div>
          <div className="flex flex-col items-center justify-center border-b border-[#D9DAD9]">
            <h1 className="mb-5 font-bold">성적서</h1>
            <h1 className="text-4xl text-[#2E3B6B]">18</h1>
          </div>
          <div className="col-span-2 flex flex-row py-5">
            <h1 className="w-1/2 flex items-center justify-center font-bold">
              TOTAL
            </h1>
            <h1 className="w-1/2 flex items-center justify-center text-4xl text-[#2E3B6B]">
              31
            </h1>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl text-center mb-6 font-bold">
            사용중인 법령 정보
          </h1>
          <ul className="text-lg">
            <li className="mb-2 flex items-center">
              <AiFillCaretRight className="w-1/12" />
              <h1>{"어린이제품 안전특별법"}</h1>
            </li>
            <li className="mb-2 flex items-center">
              <AiFillCaretRight className="w-1/12" />
              <h1>{" 전기용품 및 생활용품 안전관리법(생활)"}</h1>
            </li>
            <li className="mb-2 flex items-center">
              <AiFillCaretRight className="w-1/12" />
              <h1>{"방송통신 기자재등의 적합성 평가에 관한 고시 (전파법)"}</h1>
            </li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;
