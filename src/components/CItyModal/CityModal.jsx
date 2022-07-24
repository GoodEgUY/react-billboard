import React from "react";
import "./citymodal.css";

const CityModal = () => {
  return (
    <div className="popupWrapper">
      <div className="cityModalBody">
        <h2>Выберите город</h2>
        <form>
          <select name="" id="">
            <option value="kiev">Киев</option>
            <option value="kharkov" selected>Харьков</option>
            <option value="lviv">Львов</option>
          </select>
          <button className="popupBtn">Сохранить</button>
        </form>
        <img src="../images/cross.png" className="popupClose" alt="Close" />
      </div>
    </div>
  );
};
export default CityModal;
