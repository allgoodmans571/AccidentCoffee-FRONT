import React, { useContext } from "react";
import Context from "../context/context";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";

function Registration() {
  async function handleSubmit() {
    let name =
      document.querySelector("#firstName").value +
      " " +
      document.querySelector("#lastName").value;
    let position = document.querySelector("#position").value;
    let email = document.querySelector("#corpEmail").value;
    let telegram = document.querySelector("#telegram").value;
    let data = { name, position, email, telegram };
    console.log(data);

    let response = await fetch("http://localhost:8080/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
  }

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
