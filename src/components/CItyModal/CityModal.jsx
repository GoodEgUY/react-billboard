import React from "react";
import "./citymodal.css";

const CityModal = ({ closeFunc, setCity }) => {
  const cityHandler = async (city) => {
    await localStorage.setItem("selectCity", city);
    setCity(city);
    closeFunc();
  };

  return (
    <div className="popupWrapper">
      <div className="cityModalBody">
        <h2>Выберите город</h2>

        <div className="selectBox">
          <button onClick={() => cityHandler("Киев")} className="cityButton">
            Киев
          </button>
          <button onClick={() => cityHandler("Харьков")} className="cityButton">
            Харьков
          </button>
          <button onClick={() => cityHandler("Одесса")} className="cityButton">
            Одесса
          </button>
        </div>
        <button className="cityBtn" onClick={closeFunc}>
          Сохранить
        </button>

        <img src="../images/cross.png" className="popupClose" alt="Close" />
      </div>
    </div>
  );
};
export default CityModal;
