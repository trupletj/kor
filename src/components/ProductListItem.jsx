import React, { useState } from "react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ProductListItem = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="relative">
        <div className="flex w-full mb-2">
          <div className="w-1/4 h-full aspect-square overflow-hidden ">
            <img
              src="https://picsum.photos/200/600 "
              className="object-cover h-28 w-28 "
            />
          </div>
          <div className="w-3/4 flex flex-col justify-between  pl-2 mb-3">
            <Link to="/product-details" className="font-bold">
              영유아 원목 장난감
            </Link>
            <span>
              <p>{"어린이제품 안전특별법 > 안전확인"}</p>
            </span>
            <p>제조업체명 : Ningbo</p>
            <p>문서구분 : 인증서 (CB064R1114-2001)</p>
          </div>
        </div>
        <div
          onClick={() => setShow(!show)}
          className="absolute bottom-2 right-2 text-xs"
        >
          <span className="bg-[#555555] text-white p-1 rounded">
            모델추가 1 {show ? "▲" : "▼"}
          </span>
        </div>
      </div>
      {show && (
        <Swiper
          className="mb-2"
          slidesPerView={4}
          spaceBetween={10}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <img src="https://picsum.photos/200/300"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/200/300"></img>
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default ProductListItem;
