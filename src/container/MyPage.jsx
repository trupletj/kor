import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sort from "../components/Sort";
import UserForm from "../components/UserForm";
import Wrapper from "../components/Wrapper";

const MyPage = () => {
  return (
    <Wrapper>
      <Navbar title="마이페이지" />
      <Container>
        <Sort />
        <UserForm />
      </Container>
    </Wrapper>
  );
};

export default MyPage;
