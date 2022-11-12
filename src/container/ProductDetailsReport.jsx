import React from "react";
import { BsChevronCompactLeft, BsChevronRight } from "react-icons/bs";

import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";

const ProductDetailsReport = () => {
  return (
    <Wrapper>
      <Navbar title="통합조회" />
      <Container>
        <div className="w-full text-center bg-[#D7D7D7] p-1 my-2 relative text-[25px]">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <BsChevronCompactLeft />
          </div>
          <h1 className="">안전확인 신고서</h1>
        </div>
        <div
          className="my-[20px]  border-b-2 flex items-center justify-center
        pb-[20px]"
        >
          <img
            src="https://picsum.photos/400/400?random=16"
            alt=""
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
        <div className="my-6 w-[400px] mx-auto text-[25px] leading-7">
          <ul>
            <li className="my-4">
              <h1 className="font-bold">어린이제품명</h1>
              <h1 className="text-[23px]">완구(부속서 6)</h1>
            </li>
            <li className="my-4">
              <h1 className="font-bold">제조자 제시 모델명</h1>
              <h1 className="text-[23px]">영유아 원목제품</h1>
            </li>
            <li className="my-4">
              <h1 className="font-bold">안전기준상의 모델 구분</h1>
              <h1 className="text-[23px]">
                비 작동완구, 영유아용 완구(3세 미만), 목재
              </h1>
            </li>
            <li className="my-4">
              <h1 className="font-bold">제조국명</h1>
              <h1 className="text-[23px]">중국</h1>
            </li>
            <li className="my-4">
              <h1 className="font-bold">제조업체명</h1>
              <h1 className="text-[23px]">Ningbo</h1>
            </li>
            <li className="my-4">
              <h1 className="font-bold">신고확인증 번호</h1>
              <h1 className="text-[23px]">CB064R854-200</h1>
            </li>
            <li className="my-4">
              <h1 className="font-bold">유효기간</h1>
              <h1 className="text-[23px]">2027.03.10</h1>
            </li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ProductDetailsReport;
