import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./container/Home";
import Integration from "./container/Integration";
import MyPage from "./container/MyPage";
import Products from "./container/Products";

const App = () => {
  return (
    <Routes>
      <Route path="/user" element={<MyPage />} />
      <Route path="/integrate" element={<Integration />} />
      <Route path="/products" element={<Products />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
