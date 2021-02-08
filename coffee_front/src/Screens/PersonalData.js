import React, { useContext, useState } from "react";
import Context from "../context/context";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";

function PersonalData() {
  const { setActivePanel, add, send } = useContext(Context);
  const [render, setRender] = useState(0);

  function ForceUpdate() {
    return () => setRender((render) => render + 1); // update the state to force render
  }

  function handleSubmitData() {
    let userLifePos = document.querySelector("#lifePos").value;
    let userTeamStatus = document.querySelector("#teamStatus").value;
    let userWordPlace = document.querySelector("#wordPlace").value;
    let userProjectTime = document.querySelector("#projectTime").value;
    let userTags = document.querySelector("#tags").value;
    userTags = userTags.split(", ");

    setTimeout(() => {
      add(
        `${userLifePos}`,
        `${userTeamStatus}`,
        `${userWordPlace}`,
        `${userProjectTime}`,
        userTags
      );
    }, 0);

    setTimeout(() => {
      send();
    }, 0);
  }

  return (
    <div
      style={{
        marginTop: "6rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form id="survey-form">
        <div id="dataForm">
          <div>
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
                marginBottom: "5px",
              }}
              src={logo}
              alt="logo"
            />
          </div>
          <h1 style={{ fontSize: "50px", marginBottom: "3rem" }}>
            Расскажи о себе
          </h1>
          <label className="selectInput">
            <p>
              <strong>Жизненная позиция</strong>
            </p>
            <select
              style={{ width: "16rem" }}
              className="input_fields"
              id="lifePos"
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="Беру максимум от возможности">
                Беру максимум от возможности
              </option>
              <option value="Всегда в движении">Всегда в движении</option>
              <option value="Верю в карму">Верю в карму</option>
              <option value="Стремлюсь быть лучше, чем вчера">
                Стремлюсь быть лучше, чем вчера
              </option>
              <option value="Прокачиваю осознанность">
                Прокачиваю осознанность
              </option>
              {/* <img
                src="https://d1icd6shlvmxi6.cloudfront.net/gsc/CA794E/3d/db/df/3ddbdfa3fb6c4834b9c82d4e6835cbf7/images/registration/u360.svg?token=a462677d509c493189a2c82a4c5d2f91f8c0490378547d0238713423b74af1e7"
              ></img> */}
            </select>
          </label>
          <label className="selectInput">
            <p>
              <strong>Командный статус</strong>
            </p>
            <select
              style={{ width: "16rem" }}
              className="input_fields"
              id="teamStatus"
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="Мотиватор - вдохновляю и поддерживаю">
                Мотиватор - вдохновляю и поддерживаю
              </option>
              <option value="Критик, а вернее улучшатель">
                Критик, а вернее улучшатель
              </option>
              <option value="Исследователь - знаю где и как реализовать идею">
                Исследователь - знаю где и как реализовать идею
              </option>
              <option value="Генератор - придумываю идеи 24/7">
                Генератор - придумываю идеи 24/7
              </option>
              <option value="В поисках себя">В поисках себя</option>
            </select>
          </label>
          <label className="selectInput">
            <p>
              <strong>Место работы</strong>
            </p>
            <select
              style={{ width: "16rem" }}
              className="input_fields"
              id="wordPlace"
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="Офис">Офис</option>
              <option value="Дом">Дом</option>
              <option value="И тут и там">И тут и там</option>
              <option value="Коворкинг">Коворкинг</option>
              <option value="Кафе">Кафе</option>
            </select>
          </label>
          <label className="selectInput">
            <p>
              <strong>В отношениях с проектом</strong>
            </p>
            <select
              style={{ width: "16rem" }}
              className="input_fields"
              id="projectTime"
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="0-1 месяца">0-1 месяца</option>
              <option value="1-3 месяца">1-3 месяца</option>
              <option value="3-6 месяца">3-6 месяца</option>
              <option value="Скоро год">Скоро год</option>
              <option value="На днях">На днях</option>
            </select>
          </label>
          <label
            style={{ width: "auto" }}
            className="selectInput"
            htmlFor="telegram"
          >
            <p>
              <strong>Введи теги, через запятую</strong>
            </p>
            <input
              style={{ width: "23rem" }}
              className="input_fields_text"
              type="test"
              id="tags"
              name="tags"
              placeholder="Теги"
              required
            />
          </label>
          <div
            className="selectInput"
            style={{
              marginTop: "3rem",
              gridTemplateColumns: "43% 50%",
            }}
          >
            <button
              className="req_Back_Button"
              type="submit"
              onClick={() => setActivePanel(0)}
            >
              <strong>Предыдущий шаг</strong>
            </button>
            <button
              className="startButton"
              type="submit"
              form="survey-form"
              onClick={(event) => {
                event.preventDefault();
                handleSubmitData();
                ForceUpdate();
                setActivePanel(3);
              }}
            >
              <strong>Начать общаться</strong>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalData;
