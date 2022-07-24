import React, { useState } from "react";
import Popup from "../Pop-up/Popup";
import CityModal from "../CItyModal/CityModal";

const Header = () => {
  const [city, setCity] = useState();
  const [popupOpened, setPopupOpened] = useState(false);
  const [cityModalOpened, setCityModalOpened] = useState(false);
  return (
    <header>
      {cityModalOpened ? (
        <CityModal
          closeFunc={() => setCityModalOpened(false)}
          city={city}
          setCity={setCity}
        />
      ) : null}
      {popupOpened ? <Popup closePopup={() => setPopupOpened(false)} /> : null}
      <div>
        <h2 className="logo">React-BillBoard</h2>
      </div>
      <div className="headerRight">
        <button onClick={() => setPopupOpened(true)} className="orderBtn">
          Заказать звонок
        </button>

        <button onClick={() => setCityModalOpened(true)} className="orderBtn">
          {city ?? "Город"}
        </button>
      </div>
    </header>
  );
};
export default Header;
