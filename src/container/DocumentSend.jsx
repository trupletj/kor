import React from "react";
import { useForm } from "react-hook-form";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectModal from "../components/SelectModal";
import Sort from "../components/Sort";
import Wrapper from "../components/Wrapper";

const DocumentSend = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Wrapper>
      <Navbar title="통합조회" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <div className="w-full">
            <ul className="w-full border-b border-[#D9DAD9]">
              <li className="flex my-2">
                <label className="w-1/4">E-mail</label>
                <input
                  className="border-b border-[#D9DAD9] mx-2 w-3/4"
                  type="text"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </li>
              <li className="flex  my-2">
                <label className="w-1/4">수신회사</label>
                <input
                  className="border-b border-[#D9DAD9] mx-2 w-3/4"
                  type="text"
                  {...register("Receiving company", { required: true })}
                />
              </li>
              <li className="flex  my-2">
                <label className="w-1/4">수신자명</label>
                <input
                  className="border-b border-[#D9DAD9] mx-2 w-3/4"
                  type="text"
                  {...register("Receiving company", { required: true })}
                />
              </li>
              <li className="flex my-2">
                <label className="w-1/4">제 목</label>

                <input
                  className="border-b border-[#D9DAD9] mx-2 w-3/4 text-sm"
                  placeholder="[(주)시큐어넷] 인증정보를 전달 드립니다"
                  type="text"
                  {...register("Recipient name", { required: true })}
                />
              </li>
              <li className="flex my-2 items-center">
                <label className="w-1/4">Email</label>

                <textarea
                  className="border border-[#D9DAD9] mx-2 w-3/4"
                  {...register("content", {})}
                />
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ul>
              <li className="w-full relative my-2">
                <div className="flex items-stretch justify-between rounded shadow-md">
                  <div
                    className="text-[10px] p-1 bg-[#D9DAD9] rounded-l"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    안 전 확 인 신 고 서
                  </div>
                  <div
                    className="w-full
                  "
                  >
                    <div className="flex w-full text-xs p-2">
                      <div className="w-1/4 aspect-square overflow-hidden">
                        <img
                          src="https://picsum.photos/200/600 "
                          className="object-cover h-28 w-28 "
                        />
                      </div>
                      <div className="w-3/4 flex flex-col justify-between  pl-2">
                        <p>영유아 원목 장난감</p>
                        <span>
                          <p>{"어린이제품 안전특별법 > 안전확인"}</p>
                        </span>
                        <p>제조업체명 : Ningbo</p>
                        <p>문서구분 : 인증서 (CB064R1114-2001)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
        <div
          className="w-full h-12 
              absolute left-0 bottom-0
              flex justify-center items-center
              z-30 shadow
             
"
        >
          <button className="bg-[#D9DAD9] px-4  text-white rounded mx-2">
            취 소
          </button>
          <button
            type="submit"
            className="bg-[#2E3192] px-4  text-white rounded mx-2"
          >
            발 송
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default DocumentSend;
