import React, { useContext } from "react";
import Context from "../context/context";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";

function EnterScreen() {
  const { setActivePanel, init } = useContext(Context);

  async function handleSubmit() {
    let name =
      document.querySelector("#firstName").value +
      " " +
      document.querySelector("#lastName").value;

    let response = await fetch("http://68.183.12.32:8080/getMatch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: { name: JSON.stringify(name) },
    }).then(console.log(response));
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
              style={{
                height: "36px",
                width: "36px",
                paddingRight: "1rem",
              }}
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
          <h1 style={{ fontSize: "50px", marginBottom: "3rem" }}>Вход</h1>
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
              <strong>Назад</strong>
            </button>
            <button
              className="startButton"
              type="submit"
              form="survey-form"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit();
                setActivePanel(4);
              }}
            >
              Продолжить
            </button>
          </div>

          {/* <div style={{ marginTop: "3rem" }}>
            <button
              className="startButton"
              type="submit"
              form="survey-form"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit();
                setActivePanel(4);
              }}
            >
              <strong>Войти</strong>
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default EnterScreen;
