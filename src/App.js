import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./container/Home";
import Integration from "./container/Integration";
import MyPage from "./container/MyPage";
import OutgoingInformation from "./container/OutgoingInformation";
import ProductInquiry from "./container/ProductInquiry";

const App = () => {
  return (
    <Routes>
      <Route path="/user" element={<MyPage />} />
      <Route path="/integrate" element={<Integration />} />
      <Route path="/products" element={<ProductInquiry />} />
      <Route path="/outgoing" element={<OutgoingInformation />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
