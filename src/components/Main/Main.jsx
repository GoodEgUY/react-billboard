import React from "react";
import "./main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes , Route, Link} from "react-router-dom";
import Page from "../Page/Page";
import Home from "../Home/Home";
const Main = () => {
  return (
    <>
      <Header />
      <Router>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Page />} />
        <Route path="/about" element={<Page />} />
       </Routes>
          
      </Router>
      <Footer />
    </>
  );
};

export default Main;
