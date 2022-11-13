import React, { useState } from "react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ProductListItem = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full my-4">
      <div className="relative">
        <div className="flex w-full mb-[12px]">
          <div className="w-[84px] overflow-hidden mr-[12px]">
            <img
              src="https://picsum.photos/140/130?random=4"
              className="object-contain w-[84px] "
            />
          </div>
          <div className=" flex flex-col justify-between mb-3 list-text-format">
            <Link to="/product-details" className="list-header-format">
              영유아 원목 장난감
            </Link>
            <span>
              <p>{"어린이제품 안전특별법 > 안전확인"}</p>
            </span>
            <p>제조업체명 : Ningbo</p>
            <p>문서구분 : 2015.11.30</p>
          </div>
        </div>
        <div
          onClick={() => setShow(!show)}
          className="absolute bottom-2 right-0 text-[10px]"
        >
          <span className="bg-[#555555] text-white p-1 rounded">
            모델추가 1 {show ? "▲" : "▼"}
          </span>
        </div>
      </div>
      {show && (
        <Swiper
          className="mb-1"
          slidesPerView={4}
          spaceBetween={10}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <div className="w">
              <img
                className="w-[72px] h-[72px] object-cover"
                src="https://picsum.photos/200/300?random=1"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[72px] h-[72px] object-cover"
              src="https://picsum.photos/200/300?random=2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[72px] h-[72px] object-cover"
              src="https://picsum.photos/200/300?random=3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-[72px] h-[72px] object-cover"
              src="https://picsum.photos/200/300?random=4"
            />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
};

export default ProductListItem;
