import React, { useContext } from "react";
import "./ModalItem.css";
import Context from "../context/context";
import icon from "../images/icon.png";

function ModalMatch() {
  const { match, showMatch, dataStateMatch } = useContext(Context);

  let countID = 0;
  return (
    <div>
      {match && (
        <div className="modal">
          <button className="backgroundButton" onClick={() => showMatch()} />
          <div className="profile">
            <h1
              style={{
                color: "#fa71cd",
              }}
            >
              Это мэтч!
            </h1>
            <hr noshade="noshade" width="90%" color="#e4e4e4" />
            <div className="personalInfo">
              <div
                style={{
                  marginTop: "0rem",
                }}
                className="profilePhoto"
              >
                <div
                  style={{
                    backgroundImage: `url(${
                      dataStateMatch.image !== "undefined"
                        ? dataStateMatch.image
                        : icon
                    })`,
                    maxWidth: "100%",
                    height: "100%",
                    backgroundSize: "250px auto",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
              <div style={{ marginBottom: "6rem" }}>
                <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {dataStateMatch.name ? dataStateMatch.name : "name"}
                </p>
                <p style={{ fontSize: "20px", marginTop: "-1rem" }}>
                  {dataStateMatch.position
                    ? dataStateMatch.position
                    : "position"}
                </p>
                {/* <p>Telegramm: {dataState.telegram}</p> */}

                <button
                  className="startButton"
                  style={{
                    width: "150px",
                    fontSize: "12px",
                    height: "30px",
                    box: "border-box",
                    borderRadius: "6rem",
                    color: "#ffffff",
                    border: "none",
                    outline: "none",
                  }}
                  // onClick={() => showMatch()}
                >
                  Написать в телеграм
                </button>
                <button
                  className="startButton"
                  style={{
                    marginLeft: "1rem",
                    fontSize: "12px",
                    width: "150px",
                    height: "30px",
                    box: "border-box",
                    borderRadius: "6rem",
                    color: "#ffffff",
                    border: "none",
                    outline: "none",
                  }}
                  // onClick={() => showMatch()}
                >
                  Написать на почту
                </button>
                {/* todo поставить стрелку в угол */}
              </div>
            </div>
            <hr noshade="noshade" width="90%" color="#e4e4e4" />
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
              <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                Интересы:
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
            <hr noshade="noshade" width="90%" color="#e4e4e4" />
            <button
              className="startButton"
              style={{
                margin: "1rem 0 1.2rem 0",
                width: "250px",
                fontSize: "20px",
                height: "50px",
                box: "border-box",
                borderRadius: "6rem",
                color: "#ffffff",
                border: "none",
                outline: "none",
              }}
              onClick={() => showMatch()}
            >
              Показать всех
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalMatch;
