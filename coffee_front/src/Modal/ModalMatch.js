import React, { useContext } from "react";
import "./ModalItem.css";
import Context from "../context/context";
import icon from "../images/icon.png";
import iconExit from "../images/iconExit.svg";

function ModalMatch() {
  const { match, showMatch, dataStateMatch } = useContext(Context);

  function getTelegramName() {
    var name = dataStateMatch.telegram.split("@");
    if (name.length > 1) {
      window.open(`https://t.me/${name[1]}`);
    } else {
      window.open(`https://t.me/${name[0]}`);
    }
  }

  function getEmail() {
    window.open(`mailto:${dataStateMatch.email}`);
  }

  let countID = 0;
  return (
    <div>
      {match && (
        <div className="modal">
          <button className="backgroundButton" onClick={() => showMatch()} />
          <div className="profile">
            <button
              className="exitButton"
              style={{
                backgroundImage: `url(${iconExit})`,
              }}
              onClick={() => showMatch(false)}
            />
            <h1
              style={{
                color: "#fa71cd",
                marginTop: "-1rem",
              }}
            >
              <strong
                style={{
                  marginTop: "2rem",
                }}
              >
                It is a MATCH!
              </strong>
              {/* <p style={{ fontSize: "20px" }}>
                Лови профиль, с которым у тебя совпали интересы и взгляды
              </p> */}
            </h1>
            {/* <hr noshade="noshade" width="90%" color="#e4e4e4" /> */}
            <div className="personalInfo">
              <div className="profilePhoto">
                <div
                  style={{
                    backgroundImage: `url(${
                      dataStateMatch.image !== "undefined"
                        ? dataStateMatch.image
                        : icon
                    })`,
                    maxWidth: "100%",
                    height: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
              <div style={{ marginBottom: "2rem" }}>
                <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {dataStateMatch.name ? dataStateMatch.name : "name"}
                </p>
                <p style={{ fontSize: "20px", marginTop: "-1rem" }}>
                  {dataStateMatch.position
                    ? dataStateMatch.position
                    : "position"}
                </p>
                <div className="matchBtnBlock">
                  <button
                    className="startButton"
                    style={{
                      width: "125px",
                      fontSize: "10px",
                      height: "30px",
                      box: "border-box",
                      borderRadius: "6rem",
                      color: "#ffffff",
                      border: "none",
                      outline: "none",
                    }}
                    onClick={getTelegramName}
                  >
                    Написать в телеграм
                  </button>
                  <button
                    className="startButton"
                    id="emailButton"
                    style={{
                      fontSize: "10px",
                      width: "125px",
                      height: "30px",
                      box: "border-box",
                      borderRadius: "6rem",
                      color: "#ffffff",
                      border: "none",
                      outline: "none",
                    }}
                    onClick={getEmail}
                  >
                    Написать на почту
                  </button>
                </div>
                {/* todo поставить стрелку в угол */}
              </div>
            </div>
            <div className="personalData">
              <div className="personalChoose">
                <ol>
                  <li>
                    <strong>Жизненная позиция:</strong>{" "}
                    <p>{dataStateMatch.lifePos}</p>
                  </li>
                  <br />
                  <li>
                    <strong>Командный статус:</strong>{" "}
                    <p>{dataStateMatch.teamStatus}</p>
                  </li>
                </ol>
              </div>
              <div className="personalChoose">
                <ol>
                  <li>
                    <strong>Место работы:</strong>{" "}
                    <p>{dataStateMatch.wordPlace}</p>
                  </li>
                  <br />
                  <li>
                    <strong>В отношениях с проектом:</strong>{" "}
                    <p>{dataStateMatch.projectTime}</p>
                  </li>
                </ol>
              </div>
            </div>
            <hr noshade="noshade" width="90%" color="#e4e4e4" />
            <div className="personalTags">
              <h4
                style={{
                  marginTop: "-0.2rem",
                  marginBottom: "-0.5rem",
                  textAlign: "center",
                }}
              >
                Интересы:
              </h4>{" "}
              <p>
                {dataStateMatch.tags
                  ? dataStateMatch.tags.map((tag) => {
                      countID++;
                      return (
                        <strong style={{ fontWeight: "normal" }} key={countID}>
                          {tag}
                        </strong>
                      );
                    })
                  : ""}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalMatch;
