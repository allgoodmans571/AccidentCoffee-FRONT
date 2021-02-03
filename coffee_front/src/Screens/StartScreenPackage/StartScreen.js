import React, { useContext } from "react";
import Context from "../../context";
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
            src="https://d1icd6shlvmxi6.cloudfront.net/gsc/CA794E/bd/0d/4a/bd0d4a7342664cd0a848d844e9424fe5/images/itinder/u58.png?token=bd489fe7dc138dcbcf622d5599ec2917cb3b753d23f266e2e99bae2eab29558d"
          />
          <img
            style={{
              borderWidth: "0px",
              height: "23px",
              width: "97px",
              filter: "grayscale(100%)",
            }}
            src="https://d1icd6shlvmxi6.cloudfront.net/gsc/CA794E/bd/0d/4a/bd0d4a7342664cd0a848d844e9424fe5/images/itinder/u59.svg?token=6c250b6ccef3cd1397a99cfe177cadf674d2af8c8788fae1cd20f82e46759a7e"
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
          style={{}}  
          className="startButton"
          type="submit"
          onClick={() => setActivePanel(1)}
        >
          <strong>Создать профиль</strong>
        </button>
      </div>

      {/* <div className="content">
        <div className="description">
          <p style={{ fontSize: "32px" }}>
            ITinder - это сайт знакомств для нашей команды.
          </p>
          <p style={{ fontSize: "21px" }}>
            Здесь ты можешь получше узнать компанию через людей, найти эксперта,
            единомышленника, бадди или просто приятно провести время с
            интересным собеседником.
          </p>
          <p style={{ marginBottom: "-1rem" }}>Как это работает?</p>
          <div style={{ display: "flex" }}>
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
            
          </div>
          <p>Если остались вопросы - пиши *рассылка*</p>
        </div>
      </div> */}
    </div>
  );
}

export default StartScreen;
