import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 mb-auto max-w-[576px] mx-auto">
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
