import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 mb-auto max-w-[576px] mx-auto">
      <Navbar />
      <Container>
        <div className="grid grid-cols-2 divide-x  text-2xl my-10">
          <div className="flex flex-col items-center justify-center border-b border-[#D9DAD9] py-5">
            <h1 className="mb-5">인증서</h1>
            <h1 className="text-4xl text-[#2E3B6B]">13</h1>
          </div>
          <div className="flex flex-col items-center justify-center border-b border-[#D9DAD9]">
            <h1 className="mb-5">성적서</h1>
            <h1 className="text-4xl text-[#2E3B6B]">18</h1>
          </div>
          <div className="col-span-2 flex flex-row py-5">
            <h1 className="w-1/2 flex items-center justify-center">TOTAL</h1>
            <h1 className="w-1/2 flex items-center justify-center text-4xl text-[#2E3B6B]">
              31
            </h1>
          </div>
        </div>

        <div className="px-3">
          <h1 className="text-2xl text-center">사용중인 법령 정보</h1>
          <ul className="text-lg">
            <li>▶ 어린이제품 안전특별법</li>
            <li>▶ 전기용품 및 생활용품 안전관리법(생활)</li>
            <li>▶ 방송통신 기자재등의 적합성 평가에 관한 고시 (전파법)</li>
          </ul>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
