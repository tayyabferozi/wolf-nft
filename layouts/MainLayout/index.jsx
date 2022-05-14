import React from "react";
import Footer from "./Footer";

import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div id="main-layout">
      <img
        src="/assets/imgs/circle-top.png"
        alt="circle"
        className="bg-vector circle-top"
      />
      <img
        src="/assets/imgs/circle-1.png"
        alt="circle"
        className="bg-vector circle-1"
      />
      <img
        src="/assets/imgs/circle-2.png"
        alt="circle"
        className="bg-vector circle-2"
      />
      <img
        src="/assets/imgs/circle-3.png"
        alt="circle"
        className="bg-vector circle-3"
      />
      <img
        src="/assets/imgs/bg-hero-1.png"
        alt="circle"
        className="bg-vector bg-1"
      />
      <img
        src="/assets/imgs/bg-hero-2.png"
        alt="circle"
        className="bg-vector bg-2"
      />

      <Header />

      <div id="main-body">{children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
