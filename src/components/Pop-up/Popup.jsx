import React from "react";
import "./popup.css"


function Popup(props) {
    const [name, setName] = React.useState();
    const [phone, setPhone] = React.useState();
    function saveInfo() {
        if (name.length && phone.length <= 2) {
            alert("Введите корректные данный");
        } else {
            alert(`${name},обратный звонок заказан на номер: ${phone}`);
        }
    }
    return (
        <div className="popupWrapper">
            <div className="popupBody">
                <h2>Заполните информацию</h2>
                <form>
                    <input type="text" placeholder="Имя" onChange={e => setName(e.target.value)} />
                    <input type="phone" placeholder="Телефон" onChange={e => setPhone(e.target.value)} />
                    <button onClick={saveInfo} className="popupBtn">Сохранить</button>
                </form>
                <img src="./images/cross.png" className="popupClose" onClick={props.closePopup} alt="Close" />
            </div>
        </div>
    );
}
export default Popup;