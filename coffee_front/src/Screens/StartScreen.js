import React, { useContext } from "react";
import Context from "../context";

function StartScreen() {
  const { setActivePanel } = useContext(Context);

  return (
    <div className="conteainer">
      <div className="title">
        <div className="logoHadler">
          <div className="logo">
            <image href=""></image>
            <h1>Logo</h1>
          </div>
        </div>
        <div className="taglineHadler">
          <div className="tagline">
            <h1>Tagline</h1>
          </div>
        </div>
      </div>
      <div className="content">
        <button
          className="startButton"
          type="submit"
          onClick={() => setActivePanel(1)}
        >
          Начать
        </button>
        <div className="description">
          <p style={{ paddingTop: "5rem" }}>
            ITinder - это сайт знакомств для нашей команды.
          </p>
          <p>
            Здесь ты можешь получше узнать компанию через людей, найти эксперта,
            единомышленника, бадди или просто приятно провести время с
            интересным собеседником
          </p>
          <p>Как это работает?</p>
          <li
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <ul></ul>
          </li>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
