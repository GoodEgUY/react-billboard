import React, { useState } from "react";
import Popup from "../Pop-up/Popup";
import CityModal from "../CItyModal/CityModal";

const Header = () => {
  const [city, setCity] = useState();
  const [popupOpened, setPopupOpened] = useState(false);
  const [cityModalOpened, setCityModalOpened] = useState(true)
  return (
    <header>
      {cityModalOpened ? <CityModal/> : null }
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
        <span>{city ?? "Украина"}</span>
      </div>
    </header>
  );
};
export default Header;
