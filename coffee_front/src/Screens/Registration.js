import React, { useContext } from "react";
import Context from "../context";

function Registration() {
  const { setActivePanel } = useContext(Context);

  return (
    <div className="backgroundReqForm">
      <form id="survey-form">
        <div id="reqForm">
          <h1>Регистрация</h1>
          <label htmlFor="login">
            <p>Логин</p>
            <input
              className="input_fields"
              type="text"
              id="login"
              name="login"
              placeholder="Введите логин..."
              required
            />
          </label>
          <label htmlFor="email">
            <p>Почта</p>
            <input
              className="input_fields"
              type="email"
              id="email"
              name="email"
              placeholder="Введите рабочую почту..."
              required
            />
          </label>
          <label htmlFor="password">
            <p>Пароль</p>
            <input
              className="input_fields"
              type="text"
              id="password"
              name="password"
              placeholder="Введите пароль..."
              required
            />
          </label>
          <label htmlFor="passwordConfirmation">
            <p>Подтверждение пароля</p>
            <input
              className="input_fields"
              type="text"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="Введите пароль..."
              required
            />
          </label>
          <div className="reqButton">
            <button
              className="input_fields"
              type="submit"
              form="survey-form"
              onClick={() => setActivePanel(2)}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
