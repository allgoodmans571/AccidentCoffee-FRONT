import React from "react";

function Registration() {
  return (
    <div className="backgroundReqForm">
      <form id="survey-form">
        <div id="form">
          <label htmlFor="login">
            <p>Login</p>
            <input
              className="input_fields"
              type="text"
              id="login"
              name="login"
              placeholder="Enter your login..."
              required
            />
          </label>
          <label htmlFor="email">
            <p>Email</p>
            <input
              className="input_fields"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
              required
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              className="input_fields"
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password..."
              required
            />
          </label>
          <label htmlFor="passwordConfirmation">
            <p>Password confirmation</p>
            <input
              className="input_fields"
              type="text"
              id="passwordConfirmation"
              name="passwordConfirmation"
              placeholder="Password confirmation..."
              required
            />
          </label>
          <div className="reqButton">
            <p>Register</p>
            <button className="input_fields" type="submit" form="survey-form">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
