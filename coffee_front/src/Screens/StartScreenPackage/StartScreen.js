import React, { useContext } from "react";
import Context from "../../context/context";
import ModalItem from "../../Modal/ModalItem";
import Scroollbar from "./Scrollbar";
import icon from "../../images/icon.png";
import logo from "../../images/logo.svg";

function StartScreen() {
  const { setActivePanel } = useContext(Context);

  return (
    <div className="conteainer">
      <div className="imageList">
        <Scroollbar />
      </div>

      <div className="title">
        <div className="logo">
          <img
            style={{ height: "36px", width: "36px", paddingRight: "1rem" }}
            src={icon}
            alt="icon"
          />
          <img
            style={{
              borderWidth: "0px",
              height: "23px",
              width: "97px",
            }}
            src={logo}
            alt="logo"
          />
        </div>
        <p style={{ fontSize: "55px", margin: 0, paddingBottom: "1rem" }}>
          <strong>
            Знакомься. Общайся.
            <br />
            Развивай нетворкинг
          </strong>
        </p>
        <p style={{ fontSize: "21px", paddingBottom: "2.5rem" }}>
          Здесь ты можешь получше узнать компанию через людей, найти эксперта,
          единомышленника, бадди или просто приятно провести время с интересным
          собеседником.
        </p>
        <div
          style={{
            display: "flex",
          }}
        >
          <button
            className="startButton"
            type="submit"
            onClick={() => setActivePanel(2)}
          >
            <strong>Создать профиль</strong>
          </button>
          <button
            style={{
              marginLeft: "3rem",
            }}
            className="startButton"
            type="submit"
            onClick={() => setActivePanel(1)}
          >
            <strong>Войти</strong>
          </button>
        </div>
      </div>
      <ModalItem />
    </div>
  );
}

export default StartScreen;
