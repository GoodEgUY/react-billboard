import React, { useState, useEffect } from "react";
import "./header.css"
import Popup from "../Pop-up/Popup";
import CityModal from "../CItyModal/CityModal";

const Header = () => {
  const [city, setCity] = useState();
  const [popupOpened, setPopupOpened] = useState(false);
  const [cityModalOpened, setCityModalOpened] = useState(false);

  useEffect(() => {
    const isSelectCity = localStorage.getItem("selectCity");

    if (!isSelectCity) {
      setCityModalOpened(true);
    } else {
      setCity(isSelectCity);
    }
  }, []);

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
        <a href="/"><h2 className="logo">React-BillBoard</h2></a>
      </div>
      <div className="headerRight">
      <a href="/about" className="navLink">Обьявления</a>
        
        <button onClick={() => setPopupOpened(true)} className="orderBtn">
          Заказать звонок
        </button>

        <button onClick={() => setCityModalOpened(true)} className="orderBtn">
          {city ?? "Город"}
        </button>
        <a href="/about" className="navLink">О нас</a>
      </div>
    </header>
  );
};
export default Header;
