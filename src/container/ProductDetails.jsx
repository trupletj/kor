import React from "react";

import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import SelectModal from "../components/SelectModal";
import Sort from "../components/Sort";
import Wrapper from "../components/Wrapper";
const ProductDetails = () => {
  return (
    <Wrapper>
      <Navbar title="통합조회" />
      <Container>
        <SelectModal />
        <Sort />
        <ul>
          <li className="border-b-2 mb-4 last:mb-0 px-2 text-sm">
            <ProductList />
          </li>
        </ul>
      </Container>
    </Wrapper>
  );
};

export default ProductDetails;
