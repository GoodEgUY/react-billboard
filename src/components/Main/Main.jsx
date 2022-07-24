import React from "react";
import "./main.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

const Main = () => {
  return (
    <>
      <Header />
      <div>
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default Main;
