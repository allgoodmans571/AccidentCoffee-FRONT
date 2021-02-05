import React, { useContext } from "react";
import Context from "../context/context";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";

function Registration() {
  const { setActivePanel, init } = useContext(
    Context
  );
  // const { init } = useContext(PersonalDataContext);

  async function handleSubmit() {
    let userName =
      document.querySelector("#firstName").value +
      " " +
      document.querySelector("#lastName").value;
    let userPosition = document.querySelector("#position").value;
    let userEmail = document.querySelector("#corpEmail").value;
    let userTelegram = document.querySelector("#telegram").value;

    init(`${userName}`, `${userPosition}`, `${userEmail}`, `${userTelegram}`);
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
        <div id="reqForm">
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
            Регистрация
          </h1>
          <label htmlFor="firstName">
            <input
              className="input_fields_text"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Имя"
              required
            />
          </label>
          <label htmlFor="lastName">
            <input
              className="input_fields_text"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Фамилия"
              required
            />
          </label>
          <label htmlFor="position">
            <input
              className="input_fields_text"
              type="text"
              id="position"
              name="position"
              placeholder="Должность"
              required
            />
          </label>
          <label htmlFor="corpEmail">
            <input
              className="input_fields_text"
              type="email"
              id="corpEmail"
              name="corpEmail"
              placeholder="Рабочая почта"
              required
            />
          </label>
          <label htmlFor="telegram">
            <input
              className="input_fields_text"
              type="test"
              id="telegram"
              name="telegram"
              placeholder="Telegram"
              required
            />
          </label>
          <div style={{ marginTop: "3rem" }}>
            <button
              className="startButton"
              type="submit"
              form="survey-form"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit();
                // setData(data);
                setActivePanel(2);
              }}
            >
              Следующий шаг
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
