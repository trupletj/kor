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
    <div className="mt-2 relative w-full text-[15px]">
      <div className="relative w-full">
        <h1 className="w-full text-center bg-[#D7D7D7] p-1">
          {options[selectedNum]}
        </h1>
        <button
          onClick={handleShowModal}
          className="absolute right-0 top-0 bottom-0 flex items-center justify-center bg-[#D7D7D7] text-[12px] px-4"
        >
          선택 ▼
        </button>
      </div>
      {modalShow && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-70 overflow-y-auto h-full w-full px-4 z-50">
            <div className="relative   max-w-[480px] top-[56px] mx-auto text-center ">
              <div className=" w-full bg-[#D7D7D7] flex flex-col">
                {options.map((option, i) => {
                  return (
                    <button
                      key={i}
                      className="border-b-2 border-[#D9DAD9] p-2 overflow-hidden"
                      onClick={() => handleSelectOption(i)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              <h1
                onClick={() => setModalShow(false)}
                className="text-right text-[12px] text-white mt-1 "
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
