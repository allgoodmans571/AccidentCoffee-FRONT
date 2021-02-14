import React, { useContext, useEffect } from "react";
import Context from "../context/context";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";

function PersonalData() {
  const {
    setActivePanel,
    add,
    send,
    findMatch,
    arr,
    dataState,
    updateBase,
  } = useContext(Context);

  let userTags = [];
  let tegsUsed = 0;

  function checkParams() {
    let userLifePos = document.querySelector("#lifePos").value;
    let userTeamStatus = document.querySelector("#teamStatus").value;
    let userWordPlace = document.querySelector("#workPlace").value;
    let userProjectTime = document.querySelector("#projectTime").value;
    var inputs = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        tegsUsed++;
      }
    }

    console.log(tegsUsed);
    if (
      userLifePos !== "Выбрать" &&
      userTeamStatus !== "Выбрать" &&
      userWordPlace !== "Выбрать" &&
      userProjectTime !== "Выбрать" &&
      tegsUsed > 0
    ) {
      document.querySelector(".startButton").removeAttribute("disabled");

      document.querySelector(".startButton").style.background =
        "linear-gradient(to right, #fa76cf, #c571f5)";
    } else {
      document
        .querySelector(".startButton")
        .setAttribute("disabled", "disabled");
      document.querySelector(".startButton").style.background =
        "rgba(0, 0, 0, 0.15)";
    }
  }

  useEffect(() => {
    checkParams();
  }, []);

  function handleSubmitData() {
    let userLifePos = document.querySelector("#lifePos").value;
    let userTeamStatus = document.querySelector("#teamStatus").value;
    let userWordPlace = document.querySelector("#workPlace").value;
    let userProjectTime = document.querySelector("#projectTime").value;

    var inputs = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        userTags.push(inputs[i].value);
        console.log(inputs[i].value);
      }
    }

    console.log(userTags);

    add(
      `${userLifePos}`,
      `${userTeamStatus}`,
      `${userWordPlace}`,
      `${userProjectTime}`,
      userTags
    );
    console.log(dataState.name);
  }

  return (
    <div
      style={{
        marginTop: "1rem",
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
          <h1 style={{ marginBottom: "3rem" }}>Расскажи о себе</h1>
          <label className="selectInput">
            <p>
              <strong>Жизненная позиция</strong>
            </p>
            <select
              style={{ width: "16rem" }}
              className="input_fields"
              id="lifePos"
              onChange={() => {
                checkParams();
                handleSubmitData();
              }}
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="Беру максимум от возможностей">
                Беру максимум от возможностей
              </option>
              <option value="Всегда в движении">Всегда в движении</option>
              <option value="Верю в карму">Верю в карму</option>
              <option value="Стремлюсь быть лучше, чем вчера">
                Стремлюсь быть лучше, чем вчера
              </option>
              <option value="Прокачиваю осознанность">
                Прокачиваю осознанность
              </option>
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
              onChange={() => {
                checkParams();
                handleSubmitData();
              }}
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="Мотиватор - вдохновляю и поддерживаю">
                Мотиватор - вдохновляю и поддерживаю
              </option>
              <option value="Критик - а вернее, улучшатель">
                Критик - а вернее, улучшатель
              </option>
              <option value="Исследователь - знаю где и как реализовать любую идею">
                Исследователь - знаю где и как реализовать любую идею
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
              id="workPlace"
              onChange={() => {
                checkParams();
                handleSubmitData();
              }}
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="Офис">Офис</option>
              <option value="Дом">Дом</option>
              <option value="И дома, и в офисе">И дома, и в офисе</option>
              <option value="Внешний коворкинг">Внешний коворкинг</option>
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
              onChange={() => {
                checkParams();
                handleSubmitData();
              }}
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="0-1 месяца">0-1 месяца</option>
              <option value="1-3 месяца">1-3 месяца</option>
              <option value="3-6 месяца">3-6 месяца</option>
              <option value="Скоро год">Скоро год</option>
              <option value="Только что познакомились">
                Только что познакомились
              </option>
            </select>
          </label>
          <label
            // style={{ width: "auto" }}
            className="selectInput"
            htmlFor="telegram"
          >
            <p>
              <strong>Интересы (Отметь сколько хочешь тегов)</strong>
            </p>
            <div className="tegsLabel">
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="sport"
                  value="Авторское кино"
                  type="checkbox"
                />
                Авторское кино
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="serials"
                  value="Документальное кино"
                  type="checkbox"
                />
                Документальное кино
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="films"
                  value="Драмы"
                  type="checkbox"
                />
                Драмы
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cook"
                  value="Комедии"
                  type="checkbox"
                />
                Комедии
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="music"
                  value="Сериалы"
                  type="checkbox"
                />
                Сериалы
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="zoj"
                  value="Бизнес литература"
                  type="checkbox"
                />
                Бизнес литература
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="IT"
                  value="Художественная литература"
                  type="checkbox"
                />
                Художественная литература
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="languages"
                  value="Индивидуальный спорт"
                  type="checkbox"
                />
                Индивидуальный спорт
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Командный спорт"
                  type="checkbox"
                />
                Командный спорт
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Киберспорт"
                  type="checkbox"
                />
                Киберспорт
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Инди-музыка"
                  type="checkbox"
                />
                Инди-музыка
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Поп-музыка"
                  type="checkbox"
                />
                Поп-музыка
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Тяжелая музыка"
                  type="checkbox"
                />
                Тяжелая музыка
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Электронная музыка"
                  type="checkbox"
                />
                Электронная музыка
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Походный туризм"
                  type="checkbox"
                />
                Походный туризм
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Автомобильный туризм"
                  type="checkbox"
                />
                Автомобильный туризм
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Экстремальный туризм"
                  type="checkbox"
                />
                Экстремальный туризм
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Архитектура"
                  type="checkbox"
                />
                Архитектура
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Животные"
                  type="checkbox"
                />
                Животные
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Инностранные языки"
                  type="checkbox"
                />
                Инностранные языки
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Кухни мира"
                  type="checkbox"
                />
                Кухни мира
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Экология"
                  type="checkbox"
                />
                Экология
              </label>
              <label className="lable_checkbox">
                <input
                  onChange={() => {
                    checkParams();
                    handleSubmitData();
                  }}
                  className="input_checkbox"
                  name="prefer"
                  id="cybersport"
                  value="Работа 24/7"
                  type="checkbox"
                />
                Работа 24/7
              </label>
            </div>
          </label>
          <div className="inputReq">
            <button
              className="req_Back_Button"
              type="submit"
              onClick={() => setActivePanel(2)}
            >
              <strong>Предыдущий шаг</strong>
            </button>
            <button
              className="startButton"
              type="submit"
              form="survey-form"
              onClick={(event) => {
                event.preventDefault();
                send();
                if (dataState) {
                  setTimeout(() => {
                    setActivePanel(4);
                    updateBase();
                  }, 500);
                  arr.length > 1 && findMatch(dataState.name);
                }
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
