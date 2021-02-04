import React, { useContext } from "react";
import Context from "../context/context";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";

function PersonalData() {
  const { setActivePanel } = useContext(Context);

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
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="Maximum">Беру максимум от возможности</option>
              <option value="MovingGuy">Всегда в движении</option>
              <option value="Trusty">Верю в карму</option>
              <option value="Best">Стремлюсь быть лучше, чем вчера</option>
              <option value="Pumping">Прокачиваю осознанность</option>
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
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="Motivator">
                Мотиватор - вдохновляю и поддерживаю
              </option>
              <option value="Сritic">Критик, а вернее улучшатель</option>
              <option value="Explorer">
                Исследователь - знаю где и как реализовать идею
              </option>
              <option value="Generator">
                Генератор - придумываю идеи 24/7
              </option>
              <option value="Seeker">В поисках себя</option>
            </select>
          </label>
          <label className="selectInput">
            <p>
              <strong>Место работы</strong>
            </p>
            <select
              style={{ width: "16rem" }}
              className="input_fields"
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="Office">Офис</option>
              <option value="House">Дом</option>
              <option value="Everywhere">И тут и там</option>
              <option value="Coworking">Коворкинг</option>
              <option value="Caffee">Кафе</option>
            </select>
          </label>
          <label className="selectInput">
            <p>
              <strong>В отношениях с проектом</strong>
            </p>
            <select
              style={{ width: "16rem" }}
              className="input_fields"
              required
            >
              <option defaultValue>Выбрать</option>
              <option value="0-1">0-1 месяца</option>
              <option value="1-3">1-3 месяца</option>
              <option value="3-6">3-6 месяца</option>
              <option value="YearSoon">Скоро год</option>
              <option value="otherDay">На днях</option>
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
              id="telegram"
              name="telegram"
              placeholder="Telegram"
              required
            />
          </label>
          {/* <div id="list">
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    cass="input_checkbox"
                    name="prefer"
                    value="Educational_institution"
                    type="checkbox"
                  />
                  Спорт
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Family"
                    type="checkbox"
                  />
                  Готовка
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Relationship"
                    type="checkbox"
                  />
                  Музыка
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Society"
                    type="checkbox"
                  />
                  Фильмы
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Psychical_deviations"
                    type="checkbox"
                  />
                  Сериалы
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  Языки
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  ЗОЖ
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  ЭКО
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  ИТ
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  Киберспорт
                </label>
              </div>
              <div id="list_element">
                <label className="lable_checkbox">
                  <input
                    className="input_checkbox"
                    name="prefer"
                    value="Other"
                    type="checkbox"
                  />
                  Вечеринки
                </label>
              </div>
            </div> */}
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
              onClick={() => setActivePanel(1)}
            >
              Предыдущий шаг
            </button>
            <button
              className="startButton"
              type="submit"
              form="survey-form"
              onClick={() => setActivePanel(3)}
            >
              Начать общаться
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PersonalData;
