import React from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectModal from "../components/SelectModal";
import Sort from "../components/Sort";
import Wrapper from "../components/Wrapper";

const OutgoingInformation = () => {
  return (
    <Wrapper>
      <Navbar title="발신정보" />
      <Container>
        <div>
          <ul>
            <li className="shadow-md rounded-md my-3 relative">
              <div className="w-full bg-[#D7D7D7] flex flex-row rounded-sm p-1">
                <div className="w-1/12"></div>
                <div className="w-1/3 flex items-center justify-center">
                  발 신
                </div>
                <div className="w-2/12 flex items-center justify-center">
                  {">"}
                </div>
                <div className="w-1/3 flex items-center justify-center">
                  수 신
                </div>
                <div className="w-1/12"></div>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <div className="flex flex-col items-start justify-center border-b border-r border-[#D9DAD9] py-1 px-2">
                  <span className="flex flex-row">
                    <p>회사명 </p> : <p>시큐오넷</p>
                  </span>
                  <span className="flex flex-row">
                    <p>담당자 </p> : <p>김시남</p>
                  </span>
                </div>
                <div className="flex flex-col items-start justify-center border-b border-[#D9DAD9] py-1 px-2">
                  <span className="flex flex-row ">
                    <p>회사명 </p> : <p>주식회사 헌트</p>
                  </span>
                  <span className="flex flex-row">
                    <p>담당자 </p> : <p>이정재</p>
                  </span>
                </div>
                <div className="col-span-2 flex flex-col px-2 py-1 my-2">
                  <span className="flex flex-row">
                    <p>제조자 제시 모델명</p> : <p>피카피카 원목 완구</p>
                  </span>
                  <span className="flex flex-row">
                    <p>제조업체명 </p> : <p>Ningbo</p>
                  </span>
                  <span className="flex flex-row">
                    <p>발신일 </p> : <p> 2022.05.21</p>
                  </span>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 text-xs">
                <ul>
                  <li>
                    <span className="bg-[#D9DAD9] text-white p-0.5 rounded">
                      신고서
                    </span>
                    <span className="bg-[#D9DAD9] text-white p-0.5 rounded ml-1">
                      성적서 2
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default OutgoingInformation;
