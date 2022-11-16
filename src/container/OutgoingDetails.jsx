import React from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectModal from "../components/SelectModal";
import Sort from "../components/Sort";
import Wrapper from "../components/Wrapper";
const OutgoingDetails = () => {
  return (
    <Wrapper>
      <Navbar title="통합조회" />
      <Container>
        <div>
          <section className="border-b border-[#D9DAD9] mt-4 mb-4 py-2 text-[16px] ">
            <ul>
              <li className="py-1">
                <h1 className="font-bold">발신일</h1>
                <h1 className="text-[13px]">2022.05.21 13:07</h1>
              </li>
              <li className="py-1">
                <h1 className="font-bold">발신자</h1>
                <h1 className="text-[13px]">시큐어넷 - 김시남</h1>
              </li>
              <li className="py-1">
                <h1 className="font-bold">수신자</h1>
                <h1 className="text-[13px]">
                  주식회사 헌트 - 이정재 - handsome@guy.com
                </h1>
              </li>
              <li className="py-1">
                <h1 className="font-bold">제목</h1>
                <h1 className="text-[13px]">
                  [(주)시큐오넷] 피카피카 원목 완구 인증정보를 전달 드립니다.
                </h1>
              </li>
              <li className="py-1">
                <h1 className="font-bold">내용</h1>
                <h1 className="text-[13px]">인증서 정보 확인 부탁드립니다</h1>
              </li>
            </ul>
          </section>
          <div className="flex flex-col items-start mb-2 w-full">
            <div className="bg-[#D9DAD9] px-3 py-1 rounded-t dropshadow  text-[15px]">
              안전확인 신고서
            </div>
            <div className="p-2 dropshadow rounded-sm w-full px-4">
              <div className="flex w-full ">
                <div className="w-[100px] aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/400/600 "
                    className="object-cover h-[100px] w-[100px] "
                  />
                </div>
                <div className="flex flex-col items-start  justify-center text-left pl-2">
                  <p>피카피카 원목 완구</p>

                  <p>제조업체명 : Ningbo</p>
                  <p>문서구분 : CB064R1114-2001</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full ">
            <div className="bg-[#c2cffe] px-3 py-1 rounded-t dropshadow  text-[15px]">
              안전확인 신고서
            </div>
            <div className="p-2 dropshadow rounded-sm w-full px-4">
              <div className="flex w-full  ">
                <div className="w-[100px] aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/500/600 "
                    className="object-cover h-[100px] w-[100px] "
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-center  pl-2">
                  <p>피카피카 원목 완구</p>

                  <p>제조업체명 : Ningbo</p>
                  <p>문서구분 : H111-22-00123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default OutgoingDetails;
