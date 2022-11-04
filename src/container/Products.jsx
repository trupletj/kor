import React from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";

const Products = () => {
  return (
    <Wrapper>
      <Navbar title="통합조회" />
      <Container>
        <section className="border-b-2 mb-4 last:mb-0">
          <ul>
            <li>
              <div className="flex w-full text-sm mb-2">
                <div className="w-1/4 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>어린이제품 안전특별법 > 안전확인</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p>문서구분 : 인증서 (CB064R1114-2001)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex w-full text-sm mb-2">
                <div className="w-1/4 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>어린이제품 안전특별법 > 안전확인</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p>문서구분 : 인증서 (CB064R1114-2001)</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex w-full text-sm mb-2">
                <div className="w-1/4 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>어린이제품 안전특별법 > 안전확인</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p>문서구분 : 인증서 (CB064R1114-2001)</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="border-b-2 mb-4 last:mb-0">
          <ul>
            <li>
              <div className="flex w-full text-sm mb-2">
                <div className="w-1/4 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>어린이제품 안전특별법 > 안전확인</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p>문서구분 : 인증서 (CB064R1114-2001)</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="border-b-2 mb-4 last:mb-0">
          <ul>
            <li>
              <div className="flex w-full text-sm mb-2">
                <div className="w-1/4 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-3/4 flex flex-col justify-between  pl-2">
                  <p>영유아 원목 장난감</p>
                  <span>
                    <p>어린이제품 안전특별법 > 안전확인</p>
                  </span>
                  <p>제조업체명 : Ningbo</p>
                  <p>문서구분 : 인증서 (CB064R1114-2001)</p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Products;
