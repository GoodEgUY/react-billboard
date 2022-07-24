import React from "react";
import "./home.css"

const Home = () => {
  return (
    <div className="home">
        <h1 className="logo1">React-BillBoard</h1>
      <h2>На нашем сайте собраны тысячи обьявлений о продаже автомобилей</h2>
      <a href="/products">
        <div className="continueBtn">
            <p>Перейти</p>
        </div>
      </a>
    </div>
  );
};

export default Home;
