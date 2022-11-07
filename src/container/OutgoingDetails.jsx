import React from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SelectModal from "../components/SelectModal";
import Sort from "../components/Sort";
import Wrapper from "../components/Wrapper";
const OutgoingDetails = () => {
  return (
    <Wrapper>
      <Navbar title="통합조회" />
      <Container>
        <div className="">
          <h1 className="w-full text-center bg-[#D7D7D7] p-1">상세정보</h1>
        </div>
        <Sort />
        <div></div>
      </Container>
    </Wrapper>
  );
};

export default OutgoingDetails;
