import React from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sort from "../components/Sort";
import Wrapper from "../components/Wrapper";

const Integration = () => {
  return (
    <Wrapper>
      <Navbar title="통합조회" />
      <Container>
        <Sort />

        <section className="border-b-2 mb-4 last:mb-0">
          <ul>
            <li>
              <div className="flex w-full text-sm mb-4">
                <div className="w-24 h-24 overflow-hidden">
                  <img
                    src="https://picsum.photos/200/300?random=1"
                    className="object-cover h-24 w-24 "
                  />
                </div>
                <div className="flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>{"어린이제품 안전특별법 > 안전확인"}</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p className="">
                    문서구분 :{" "}
                    <span className=" text-[#008AFF]">
                      인증서 (CB064R1114-2001)
                    </span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex w-full text-sm mb-4">
                <div className="w-24 h-24 overflow-hidden">
                  <img
                    src="https://picsum.photos/200/300?random=2"
                    className="object-cover h-24 w-24 "
                  />
                </div>
                <div className="flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>{"어린이제품 안전특별법 > 안전확인"}</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p className="">
                    문서구분 :{" "}
                    <span className=" text-[#008AFF]">
                      인증서 (CB064R1114-2001)
                    </span>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex w-full text-sm mb-4">
                <div className="w-24 h-24 overflow-hidden">
                  <img
                    src="https://picsum.photos/200/300?random=3"
                    className="object-cover h-24 w-24 "
                  />
                </div>
                <div className=" flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>{"어린이제품 안전특별법 > 안전확인"}</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p className="">
                    문서구분 :{" "}
                    <span className=" text-[#008AFF]">
                      인증서 (CB064R1114-2001)
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="border-b-2 mb-4 last:mb-0">
          <ul>
            <li>
              <div className="flex w-full text-sm mb-4">
                <div className="w-24 h-24 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/300?random=4"
                    className="object-cover h-24 w-24 "
                  />
                </div>
                <div className=" flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>{"어린이제품 안전특별법 > 안전확인"}</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p className="">
                    문서구분 :{" "}
                    <span className=" text-[#008AFF]">
                      인증서 (CB064R1114-2001)
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="border-b-2 mb-4 last:mb-0">
          <ul>
            <li>
              <div className="flex w-full text-sm mb-4">
                <div className="w-24 h-24 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/300?random=5"
                    className="object-cover h-24 w-24 "
                  />
                </div>
                <div className="flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>{"어린이제품 안전특별법 > 안전확인"}</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p className="">
                    문서구분 :{" "}
                    <span className=" text-[#008AFF]">
                      인증서 (CB064R1114-2001)
                    </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </Container>
    </Wrapper>
  );
};

export default Integration;
