import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";
import Wrapper from "../components/Wrapper";

const MyPage = () => {
  return (
    <Wrapper>
      <Navbar title="마이페이지" />
      <Container>
        <UserForm />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default MyPage;
