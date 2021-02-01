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
            <h1 style={{ fontSize: "120px", margin: 0, padding: 0 }}>
              ITinder
            </h1>
            <p style={{ fontSize: "35px", margin: 0, padding: 0 }}>
              Знакомься. Общайся. Развивайнетворкинг
            </p>
          </div>
        </div>
        <div className="imageList">{/*TODO место для картинок */}</div>
      </div>
      <div className="content">
        <div className="description">
          <p style={{ fontSize: "32px" }}>
            ITinder - это сайт знакомств для нашей команды.
          </p>
          <p style={{ fontSize: "21px" }}>
            Здесь ты можешь получше узнать компанию через людей, найти эксперта,
            единомышленника, бадди или просто приятно провести время с
            интересным собеседником.
          </p>
          <p style={{marginBottom: "-1rem" }}>Как это работает?</p>
          <div style={{ display: "flex"}}>
            <ul style={{ listStyle: "none", margin: "2rem", padding: 0 }}>
              <li>1 шаг. Регистрируешься</li>
              <li>2 шаг. Заполняешь профиль - отвечаешь на 5 вопросов </li>
              <li>
                3 шаг. Ждешь в ответ профиль коллеги с похожими интересами
              </li>
              <li>
                4 шаг. Вы списываетесь и выбираете удобное время и формат для
                встречи
              </li>
            </ul>
            <button
              style={{}}
              className="startButton"
              type="submit"
              onClick={() => setActivePanel(1)}
            >
              Создать профиль
            </button>
          </div>
          <p>Если остались вопросы - пиши *рассылка*</p>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
