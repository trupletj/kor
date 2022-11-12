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
            <ul className="w-full border-b border-[#D9DAD9] text-[25px]">
              <li className="flex my-4">
                <label className="w-1/4 font-bold">E-mail</label>
                <input
                  className="border-b border-[#D9DAD9] mx-2 w-3/4"
                  type="text"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </li>
              <li className="flex  my-4">
                <label className="w-1/4 font-bold">수신회사</label>
                <input
                  className="border-b border-[#D9DAD9] mx-2 w-3/4"
                  type="text"
                  {...register("Receiving company", { required: true })}
                />
              </li>
              <li className="flex  my-4">
                <label className="w-1/4 font-bold">수신자명</label>
                <input
                  className="border-b border-[#D9DAD9] mx-2 w-3/4"
                  type="text"
                  {...register("Receiving company", { required: true })}
                />
              </li>
              <li className="flex my-4">
                <label className="w-1/4 font-bold">제 목</label>

                <input
                  className="border-b border-[#D9DAD9] mx-2 w-3/4 text-sm"
                  placeholder="[(주)시큐어넷] 인증정보를 전달 드립니다"
                  type="text"
                  {...register("Recipient name", { required: true })}
                />
              </li>
              <li className="flex my-4 items-center">
                <label className="w-1/4 font-bold">내 용</label>

                <textarea
                  className="border border-[#D9DAD9] mx-2 w-3/4 h-[150px]"
                  {...register("content", {})}
                />
              </li>
            </ul>
          </div>
          <div className="w-full ">
            <ul className="text-[22px]">
              <li className="w-full relative my-4">
                <div className="flex items-stretch justify-between rounded shadow-md">
                  <div
                    className="text-[17px] p-1 bg-[#D9DAD9] rounded-l"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    안 전 확 인 신 고 서
                  </div>
                  <div
                    className="w-full
                  "
                  >
                    <div className="flex h-full w-full px-2 text-[22px] items-center">
                      <img
                        src="https://picsum.photos/200/600 "
                        className="object-cover h-[120px] w-[130px]"
                      />

                      <div className=" flex flex-col justify-between pl-2">
                        <p>영유아 원목 장난감</p>
                        <p>제조업체명 : Ningbo</p>
                        <p>문서구분 : B064R1114-2001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-full relative my-4">
                <div className="flex items-stretch justify-between rounded shadow-md">
                  <div
                    className="text-[17px] p-1 bg-[#C2CFFE] rounded-l"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    안 전 확 인 신 고 서
                  </div>
                  <div
                    className="w-full
                  "
                  >
                    <div className="flex h-full w-full px-2 text-[22px] items-center">
                      <img
                        src="https://picsum.photos/200/600 "
                        className="object-cover h-[120px] w-[130px]"
                      />

                      <div className=" flex flex-col justify-between pl-2">
                        <p>영유아 원목 장난감</p>
                        <p>제조업체명 : Ningbo</p>
                        <p>문서구분 : B064R1114-2001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="w-full relative my-4">
                <div className="flex items-stretch justify-between rounded shadow-md">
                  <div
                    className="text-[17px] p-1 bg-[#C2CFFE] rounded-l"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    안 전 확 인 신 고 서
                  </div>
                  <div
                    className="w-full
                  "
                  >
                    <div className="flex h-full w-full px-2 text-[22px] items-center">
                      <img
                        src="https://picsum.photos/120/130?random=3 "
                        className="object-cover h-[120px] w-[130px]"
                      />

                      <div className=" flex flex-col justify-between pl-2">
                        <p>영유아 원목 장난감</p>
                        <p>제조업체명 : Ningbo</p>
                        <p>문서구분 : B064R1114-2001</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
        <div
          className="w-full h-[72px]
              absolute left-0 bottom-0
              flex justify-center items-center
              z-30 shadow
             
"
        >
          <button className="bg-[#B7B7B7] w-[155px] h-[45px] text-[25px] font-bold border-emboss text-white rounded mx-2">
            취 소
          </button>
          <button
            type="submit"
            className="bg-[#2E3192]  w-[155px] h-[45px] text-[25px] font-bold border-emboss text-white rounded mx-2"
          >
            발 송
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default DocumentSend;
