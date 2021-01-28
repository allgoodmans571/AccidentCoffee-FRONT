import React, { useContext } from "react";
import Context from "../context";

function StartScreen() {
  const { showRegPanel } = useContext(Context);

  return (
    <div className="conteainer">
      <div className="title">
        <div className="logoHadler">
          <div className="logo">
            <image href=""></image>
            <h1>Logo</h1>
          </div>
        </div>
        <div className="taglineHadler">
          <div className="tagline">
            <h1>Tagline</h1>
          </div>
        </div>
      </div>
      <div className="content">
        <button
          className="startButton"
          type="submit"
          onClick={() => showRegPanel()}
        >
          Start
        </button>
        <div className="description">
          <p style={{ paddingTop: "5rem" }}>
            Placeholder, placeholder, , placeholder, placeholder, placeholder,
            placeholder, placeholder, placeholder, placeholder, placeholder,
            placeholder, placeholder, placeholder
          </p>
        </div>
      </div>
    </div>
  );
}

export default StartScreen;
