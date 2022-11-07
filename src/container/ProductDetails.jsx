import React from "react";
import { BsChevronCompactLeft } from "react-icons/bs";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectModal from "../components/SelectModal";
import Sort from "../components/Sort";
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
        <div>
          <table className="table-auto">
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
                <td> 작동완구, 영유아용 완구(3세 미만), 목재</td>
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
        <div>
          <div>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-900 checked:appearance-none checked:bg-rose-600"
              />
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default ProductDetails;
