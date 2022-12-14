import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DocumentSend from "./container/DocumentSend";

import Home from "./container/Home";
import Integration from "./container/Integration";
import MyPage from "./container/MyPage";
import OutgoingDetails from "./container/OutgoingDetails";
import OutgoingInformation from "./container/OutgoingInformation";
import ProductDetails from "./container/ProductDetails";
import ProductDetailsReport from "./container/ProductDetailsReport";
import ProductInquiry from "./container/ProductInquiry";
import Search from "./container/Search";

const App = () => {
  return (
    <Routes>
      <Route path="/user" element={<MyPage />} />
      <Route path="/integrate" element={<Integration />} />
      <Route path="/search" element={<Search />} />
      <Route path="/products" element={<ProductInquiry />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route
        path="/product-details-report"
        element={<ProductDetailsReport />}
      />
      <Route path="/outgoing" element={<OutgoingInformation />} />
      <Route path="/outgoing-details" element={<OutgoingDetails />} />
      <Route path="/document-send" element={<DocumentSend />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
