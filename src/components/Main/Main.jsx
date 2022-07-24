import React from "react";
import "./main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes , Route, Link} from "react-router-dom";
import Page from "../Page/Page";
const Main = () => {
  return (
    <>
      <Header />
      <Router>
       <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/" element={<Page />} />
       </Routes>
          
      </Router>
      <Footer />
    </>
  );
};

export default Main;
