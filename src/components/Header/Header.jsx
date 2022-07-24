import React, { useState } from "react";
import Popup from "../Pop-up/Popup";

const Header = () => {
  const [popupOpened, setPopupOpened] = useState(false);

  return (
    <header>
      {popupOpened ? <Popup closePopup={() => setPopupOpened(false)} /> : null}
      <div>
        <h2 className="logo">React-BillBoard</h2>
      </div>
      <div className="headerRight">
        <button onClick={() => setPopupOpened(true)} className="orderBtn">
          Заказать звонок
        </button>
        <a href="#" className="headerIcon">
          <img src="/cart.png" alt="card" width={30} height={30} />
        </a>
        <a href="#" className="headerIcon">
          <img src="/profile.png" alt="card" width={30} height={30} />
        </a>
        <span>Мой пррофиль</span>
      </div>
    </header>
  );
};
export default Header;
