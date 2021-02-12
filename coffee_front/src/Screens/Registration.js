import React, { useContext, useEffect } from "react";
import Context from "../context/context";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";
import cameraImage from "../images/cameraImage.svg";
<script
  type="text/javascript"
  src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"
></script>;

function Registration() {
  const { setActivePanel, init } = useContext(Context);
  let userPic;

  function checkParams() {
    let userFirstName = document.querySelector("#firstName").value;
    let userLastName = document.querySelector("#lastName").value;
    let userPosition = document.querySelector("#position").value;
    let userEmail = document.querySelector("#corpEmail").value;
    let userTelegram = document.querySelector("#telegram").value;

    if (
      userFirstName.length !== 0 &&
      userLastName.length !== 0 &&
      userPosition.length !== 0 &&
      userEmail.length !== 0 &&
      userTelegram.length !== 0
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

  async function handleSubmit() {
    let userName =  
      document.querySelector("#firstName").value +
      " " +
      document.querySelector("#lastName").value;
    let userPosition = document.querySelector("#position").value;
    let userEmail = document.querySelector("#corpEmail").value;
    let userTelegram = document.querySelector("#telegram").value;

    init(
      `${userPic}`,
      `${userName}`,
      `${userPosition}`,
      `${userEmail}`,
      `${userTelegram}`
    );
  }

  function handleFiles() {
    var reader = new FileReader(),
      input = document.getElementById("loaderPhoto").files[0];

    reader.addEventListener(
      "loadend",
      function (result) {
        document.querySelector(
          ".loadPhoto"
        ).style.background = `url(${result.target.result})`;
        document.querySelector(".loadPhoto").style.backgroundSize =
          "300px auto";

        document.querySelector(".loadPhoto").style.backgroundRepeat =
          "no-repeat";
        document.querySelector(".loadPhoto").style.backgroundPosition =
          "center";

        userPic = result.target.result;
        // console.log(userPic);
      },
      false
    );
    reader.readAsDataURL(input);
  }
  return (
    <div
      className="reqPanel"
      style={{
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
          <h1 style={{ marginBottom: "3rem" }}>Регистрация</h1>
          <div className="inputReq">
            <label
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "10rem",
                backgroundSize: "cover",
              }}
              htmlFor="loaderPhoto"
              className="loadPhoto"
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "40% 0",
                }}
                src={cameraImage}
                alt="место для фото"
              />
            </label>
            <div className="fields">
              <input
                style={{
                  position: "absolute",
                  opacity: 0,
                  top: "-100%",
                }}
                id="loaderPhoto"
                type="file"
                multiple
                onChange={handleFiles}
                accept="image/jpeg,image/png"
                name="file"
              />
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
              <label htmlFor="position">
                <input
                  onChange={checkParams}
                  className="input_fields_text"
                  type="text"
                  id="position"
                  name="position"
                  placeholder="Позиция"
                  required
                />
              </label>
              <label htmlFor="corpEmail">
                <input
                  onChange={checkParams}
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
                  onChange={checkParams}
                  className="input_fields_text"
                  type="text"
                  id="telegram"
                  name="telegram"
                  placeholder="Telegram"
                  required
                />
              </label>
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <button
              className="startButton"
              type="submit"
              form="survey-form"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit();
                // setData(data);
                setActivePanel(3);
              }}
            >
              <strong>Следующий шаг</strong>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
