import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./container/Home";
import MyPage from "./container/MyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/user" element={<MyPage />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
