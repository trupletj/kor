import React, { useState } from "react";

const SelectModal = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedNum, setSelectedNum] = useState(2);

  const options = [
    "어린이제품 안전특별법",
    "전기용품 및 생활용품 안전관리법",
    "방송통신기자재 등의 적합성평가에 관한 고시",
  ];
  const handleShowModal = () => {
    setModalShow(!modalShow);
  };
  const handleSelectOption = (i) => {
    setSelectedNum(i);
    setModalShow(!modalShow);
  };
  return (
    <div className="mt-2">
      <div className="">
        <button
          className="w-full text-center bg-[#D7D7D7] p-1"
          onClick={handleShowModal}
        >
          {options[selectedNum]}
        </button>
      </div>
      {modalShow && (
        <>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full px-4">
            <div className="relative top-14 mx-auto text-center ">
              <div className=" w-full bg-[#D7D7D7]">
                {options.map((option, i) => {
                  return (
                    <button
                      key={i}
                      className="border-b-2 border-[#D9DAD9] p-2"
                      onClick={() => handleSelectOption(i)}
                    >
                      1 {option}
                    </button>
                  );
                })}
              </div>
              <h1
                onClick={() => setModalShow(false)}
                className="text-right text-white mt-1 "
              >
                닫기 ▲
              </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectModal;
