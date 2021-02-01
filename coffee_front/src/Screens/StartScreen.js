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
          style={{
            box: "border-box",
            border: "2px solid #ccc",
            borderRadius: "0.25rem",
          }}
          className="startButton"
          type="submit"
          onClick={() => setActivePanel(1)}
        >
          Начать
        </button>
        <div className="description">
          <p style={{ fontSize: "25px" }}>
            ITinder - это сайт знакомств для нашей команды.
          </p>
          <p style={{ fontSize: "25px" }}>
            Здесь ты можешь получше узнать компанию через людей, найти эксперта,
            единомышленника, бадди или просто приятно провести время с
            интересным собеседником
          </p>
          <p>Как это работает?</p>
          <ul style={{ listStyle: "none", margin: "2rem", padding: 0 }}>
            <li>1 шаг. Регистрируешься</li>
            <li>2 шаг. Заполняешь профиль - отвечаешьна 5 вопросов </li>
            <li>3 шаг. Ждешь в ответ профиль коллеги с похожими интересами</li>
            <li>
              4 шаг. Вы списываетесь и выбираете удобное время и формат для
              встречи
            </li>
          </ul>
          <p>Если остались вопросы - пиши *рассылка*</p>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
