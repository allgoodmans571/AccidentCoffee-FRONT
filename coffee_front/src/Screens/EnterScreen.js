import React, { useContext, useEffect } from "react";
import Context from "../context/context";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";

function EnterScreen() {
  const { setActivePanel, init, add, findMatch, arr } = useContext(Context);

  function checkParams() {
    let userFirstName = document.querySelector("#firstName").value;
    let userLastName = document.querySelector("#lastName").value;

    if (userFirstName.length !== 0 && userLastName.length !== 0) {
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

  async function handleSubmit() {
    let newData;
    let name =
      document.querySelector("#firstName").value +
      " " +
      document.querySelector("#lastName").value;

    let response = await fetch("http://68.183.12.32:8080/getMatch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        newData = data;
        init(
          `${data.image}`,
          `${name}`,
          `${data.position}`,
          `${data.email}`,
          `${data.telegram}`
        );
        add(
          `${data.lifePos}`,
          `${data.teamStatus}`,
          `${data.wordPlace}`,
          `${data.projectTime}`,
          data.tags
        );
        console.log(data);
      });

    if (newData) {
      arr.length > 1 && findMatch(name);
      setActivePanel(4);
    }
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
        <div>
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
              onChange={checkParams}
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
              onChange={checkParams}
              className="input_fields_text"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Фамилия"
              required
            />
          </label>

          <div className="buttons_Enter">
            <button
              className="req_Back_Button"
              type="submit"
              style={{
                width: "13rem",
              }}
              onClick={() => setActivePanel(0)}
            >
              <strong>Назад</strong>
            </button>
            <button
              style={{
                width: "13rem",
              }}
              className="startButton"
              id="idStartBtn"
              type="submit"
              form="survey-form"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              Продолжить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EnterScreen;
