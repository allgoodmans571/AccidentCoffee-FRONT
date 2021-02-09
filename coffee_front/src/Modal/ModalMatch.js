import React, { useContext } from "react";
import "./ModalItem.css";
import Context from "../context/context";
import iconExit from "../images/iconExit.svg";

function ModalMatch() {
  const { hanldeModal, modal, match, showMatch } = useContext(Context);

  let countID = 0;
  // console.log(modal);
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
              <div>
                <img
                  style={{ marginTop: "0rem" }}
                  className="profilePhoto"
                  src={
                    modal.linkImage
                      ? modal.linkImage
                      : "https://institute.asiakz.com/files/default/avatar.png"
                  }
                  alt="Фото коллеги №2"
                />
              </div>
              <div style={{ marginBottom: "6rem" }}>
                <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                  {modal.name ? modal.name : "name"}
                </p>
                <p style={{ fontSize: "20px", marginTop: "-1rem" }}>
                  {modal.position ? modal.position : "position"}
                </p>
                {/* <p>Telegramm: {modal.telegram}</p> */}

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
                    <strong>Жизненная позиция:</strong> <p>{modal.lifePos}</p>
                  </li>
                  <br />
                  <li>
                    <strong>Командный статус:</strong> <p>{modal.teamStatus}</p>
                  </li>
                </ol>
              </div>
              <div className="personalChoose">
                <ol>
                  <li>
                    <strong>Место работы:</strong> <p>{modal.workPlace}</p>
                  </li>
                  <br />
                  <li>
                    <strong>В отношениях с проектом:</strong>{" "}
                    <p>{modal.projectTime}</p>
                  </li>
                </ol>
              </div>
            </div>
            <hr noshade="noshade" width="90%" color="#e4e4e4" />
            <div
              style={{
                margin: "2rem 0 2rem 3.5rem",
              }}
              className="personalTags"
            >
              <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                Интересы:
                {modal.tags
                  ? modal.tags.map((tag) => {
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
                margin: "1.5rem 0 2rem 0",
                width: "250px",
                fontSize: "20px",
                height: "50px",
                box: "border-box",
                borderRadius: "6rem",
                color: "#ffffff",
                border: "none",
                outline: "none",
              }}
              // onClick={() => showMatch()}
            >
              Продолжить поиск
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalMatch;
