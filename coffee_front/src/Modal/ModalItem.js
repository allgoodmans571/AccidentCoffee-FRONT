import React, { useContext } from "react";
import "./ModalItem.css";
import Context from "../context/context";
import iconExit from "../images/iconExit.svg";
import icon from "../images/icon.png";

function ModalItem() {
  const { hanldeModal, modal } = useContext(Context);
  let countID = 0;

  function getTelegramName() {
    var name = modal.telegram.split("@");
    if (name.length > 1) {
      window.open(`https://t.me/${name[1]}`);
    } else {
      window.open(`https://t.me/${name[0]}`);
    }
  }

  return (
    <div>
      {modal.isOpen && (
        <div className="modal">
          <button
            className="backgroundButton"
            onClick={() => hanldeModal(false)}
          />
          <div className="profile">
            <div className="personalInfo">
              <div>
                <button
                  className="exitButton"
                  style={{
                    backgroundImage: `url(${iconExit})`,
                  }}
                  onClick={() => hanldeModal(false)}
                />
                <div className="profilePhoto">
                  <div
                    style={{
                      backgroundImage: `url(${
                        modal.image !== "undefined" ? modal.image : icon
                      })`,
                      maxWidth: "100%",
                      height: "100%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              </div>
              <div style={{ marginBottom: "3rem" }}>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                  {modal.name ? modal.name : "name"}
                </p>
                <p style={{ fontSize: "16px", marginTop: "-1rem" }}>
                  {modal.position ? modal.position : "position"}
                </p>
                <button
                  className="startButton"
                  style={{
                    width: "135px",
                    fontSize: "12px",
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
            <div className="personalTags">
              <h4 style={{ marginTop: "-0.2rem",marginBottom: "-0.5rem", textAlign: "center" }}>
                Интересы:
              </h4>
              <p>
                {modal.tags.map((tag) => {
                  countID++;
                  return (
                    <strong style={{ fontWeight: "normal" }} key={countID}>
                      {tag}
                    </strong>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalItem;
