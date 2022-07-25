import React, { useEffect, useState } from "react";

import Cart from "../Cart/Cart";

const Page = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="content">
      <h1>Обьявления</h1>
      <div className="main">
        {data ? (
          data.map((item) => <Cart title={item.title} description={item.id} />)
        ) : (
          <div>Sorry, no data</div>
          
        )}
        <Cart/>
      <Cart/>
      <Cart/>
      <Cart/>
      </div><Cart/>
      


    </div>
  );
};

export default Page;
