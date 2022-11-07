import React from "react";
import { BsChevronCompactLeft, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
const ProductDetails = () => {
  return (
    <Wrapper>
      <Navbar title="통합조회" />
      <Container>
        <div className="w-full text-center bg-[#D7D7D7] p-1 my-2 relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <BsChevronCompactLeft />
          </div>
          <h1 className="">상세정보</h1>
        </div>
        <div className="mb-4 border-b-2 pb-2">
          <table className="table-auto text-sm w-full">
            <tbody>
              <tr>
                <td className="font-bold">어린이제품명</td>
                <td>완구(부속서 6)</td>
              </tr>
              <tr>
                <td className="font-bold">제조자 제시 모델명</td>
                <td>영유아 원목제품</td>
              </tr>
              <tr>
                <td className="font-bold">안전기준상의 모델 </td>
                <td> 작동완구, 영유아용 완구(3세 미만)</td>
              </tr>
              <tr>
                <td className="font-bold">제조국명 </td>
                <td>중국</td>
              </tr>
              <tr>
                <td className="font-bold">제조업체명</td>
                <td>Ningbo</td>
              </tr>
              <tr>
                <td className="font-bold">신고확인증 번호</td>
                <td>CB064R854-2001</td>
              </tr>
              <tr>
                <td className="font-bold">유효기간</td>
                <td>2027.03.10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-6">
          <div className="flex items-center justify-between mb-2">
            <input
              id="default-checkbox"
              type="checkbox"
              className="w-4 h-4 mx-2   rounded border-gray-600 checked:appearance-none checked:bg-gray-400"
            />
            <div className="w-full">
              <div className="flex w-full text-sm">
                <div className="w-1/5 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-4/5 flex flex-col justify-center  pl-2">
                  <p>영유아 원목 장난감</p>
                  <p>{"(B064R1114-2001)"}</p>
                </div>
              </div>
            </div>
            <Link to="/product-details-report">
              <BsChevronRight />
            </Link>
          </div>
          <div className="flex items-center justify-between mb-2">
            <input
              id="default-checkbox"
              type="checkbox"
              className="w-4 h-4 mx-2 text-blue-600 bg-gray-100 rounded border-gray-600 checked:appearance-none checked:bg-gray-400"
            />
            <div className="w-full">
              <div className="flex w-full text-sm">
                <div className="w-1/5 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-4/5 flex flex-col justify-center  pl-2">
                  <p>영유아 원목 장난감</p>
                  <p>{"(B064R1114-2001)"}</p>
                </div>
              </div>
            </div>
            <Link to="/product-details-report">
              <BsChevronRight />
            </Link>
          </div>
          <div className="flex items-center justify-between mb-2">
            <input
              id="default-checkbox"
              type="checkbox"
              className="w-4 h-4 mx-2 text-blue-600 bg-gray-100 rounded border-gray-600 checked:appearance-none checked:bg-gray-400"
            />
            <div className="w-full">
              <div className="flex w-full text-sm">
                <div className="w-1/5 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-4/5 flex flex-col justify-center  pl-2">
                  <p>영유아 원목 장난감</p>
                  <p>{"(B064R1114-2001)"}</p>
                </div>
              </div>
            </div>
            <Link to="/product-details-report">
              <BsChevronRight />
            </Link>
          </div>
          <div className="flex items-center justify-between mb-2">
            <input
              id="default-checkbox"
              type="checkbox"
              className="w-4 h-4 mx-2 text-blue-600 bg-gray-100 rounded border-gray-600 checked:appearance-none checked:bg-gray-400"
            />
            <div className="w-full">
              <div className="flex w-full text-sm">
                <div className="w-1/5 aspect-square overflow-hidden">
                  <img
                    src="https://picsum.photos/200/600 "
                    className="object-cover h-28 w-28 "
                  />
                </div>
                <div className="w-4/5 flex flex-col justify-center  pl-2">
                  <p>영유아 원목 장난감</p>
                  <p>{"(B064R1114-2001)"}</p>
                </div>
              </div>
            </div>
            <Link to="/product-details-report">
              <BsChevronRight />
            </Link>
          </div>
        </div>

        <div className="w-full flex items-center justify-center my-2">
          <Link
            to="/document-send"
            className="bg-[#2E3192] text-white px-10 py-1 rounded"
          >
            문 서 발 송
          </Link>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ProductDetails;
