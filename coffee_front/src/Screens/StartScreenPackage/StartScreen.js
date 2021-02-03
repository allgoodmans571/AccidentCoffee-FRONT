import React, { useContext } from "react";
import Context from "../../context/context";
import ModalItem from "../../Modal/ModalItem";
import Scroollbar from "./Scrollbar";

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
            src="https://d1icd6shlvmxi6.cloudfront.net/gsc/CA794E/3d/db/df/3ddbdfa3fb6c4834b9c82d4e6835cbf7/images/itinder/u204.png?token=afde4c978eab558f011e1d20f1dc98d523aa77f47e404f12a8ca239f04e45094"
            alt="icon"
          />
          <img
            style={{
              borderWidth: "0px",
              height: "23px",
              width: "97px",
              filter: "grayscale(100%)",
            }}
            src="https://d1icd6shlvmxi6.cloudfront.net/gsc/CA794E/bd/0d/4a/bd0d4a7342664cd0a848d844e9424fe5/images/itinder/u59.svg?token=6c250b6ccef3cd1397a99cfe177cadf674d2af8c8788fae1cd20f82e46759a7e"
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
        <button
          className="startButton"
          type="submit"
          onClick={() => setActivePanel(1)}
        >
          <strong>Создать профиль</strong>
        </button>
      </div>
      <ModalItem />
    </div>
  );
}

export default StartScreen;
