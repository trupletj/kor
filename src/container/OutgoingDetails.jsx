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
          <section className="border-b-2 border-[#D9DAD9] mb-4 py-4 ">
            <ul>
              <li className="py-2">
                <h1 className="font-bold">발신일</h1>
                <h1>2022.05.21 13:07</h1>
              </li>
              <li className="py-2">
                <h1 className="font-bold">발신자</h1>
                <h1>시큐오넷 - 김시남</h1>
              </li>
              <li className="py-2">
                <h1 className="font-bold">수신자</h1>
                <h1>주식회사 헌트 - 이정재 - handsome@guy.com</h1>
              </li>
              <li className="py-2">
                <h1 className="font-bold">제목</h1>
                <h1>
                  [(주)시큐오넷] 피카피카 원목 완구 인증정보를 전달 드립니다.
                </h1>
              </li>
              <li className="py-2">
                <h1 className="font-bold">내용</h1>
                <h1>인증서 정보 확인 부탁드립니다</h1>
              </li>
            </ul>
          </section>
          <div className="text-sm flex flex-col items-start mb-4">
            <div className="bg-[#D9DAD9] py-1 px-2 rounded-t shadow">
              안전확인 신고서
            </div>
            <div className="p-2 shadow-md">
              <div className="flex w-full text-sm mb-2">
                <div className="w-1/4 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-between  pl-2">
                  <p>피카피카 원목 완구</p>

                  <p>제조업체명 : Ningbo</p>
                  <p>문서구분 : 인증서 (CB064R1114-2001)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm flex flex-col items-start">
            <div className="bg-[#C2CFFE] py-1 px-2 rounded-t shadow">
              안전확인 신고서
            </div>
            <div className="p-2 shadow-md">
              <div className="flex w-full text-sm mb-2">
                <div className="w-1/4 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-between  pl-2">
                  <p>피카피카 원목 완구</p>

                  <p>제조업체명 : Ningbo</p>
                  <p>문서구분 : 인증서 (CB064R1114-2001)</p>
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
