import React, { useContext } from "react";
import "./ModalItem.css";
import Context from "../context/context";
import iconExit from "../images/iconExit.svg";

function ModalItem() {
  const { hanldeModal, modal } = useContext(Context);

  let countID = 0;
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
                  style={{
                    margin: "0 46rem",
                    width: "30px",
                    height: "30px",
                    box: "border-box",
                    borderRadius: "0.25rem",
                    color: "#808080",
                    border: "none",
                    outline: "none",
                    backgroundImage: `url(${iconExit})`,
                  }}
                  onClick={() => hanldeModal(false)}
                />
                <img
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
                <p>Telegramm: info.telegram</p>

                {/* todo поставить стрелку в угол */}
              </div>
            </div>
            <hr noshade="noshade" width="90%" color="#e4e4e4" />
            <div className="personalData">
              <div className="personalChoose">
                <ol>
                  <li>
                    <strong>Жизненная позиция:</strong> <p>info.lifePos</p>
                  </li>
                  <br />
                  <li>
                    <strong>Командный статус:</strong> <p>info.comStatus</p>
                  </li>
                </ol>
              </div>
              <div className="personalChoose">
                <ol>
                  <li>
                    <strong>Место работы:</strong> <p>info.workPlace</p>
                  </li>
                  <br />
                  <li>
                    <strong>В отношениях с проектом:</strong>{" "}
                    <p>info.projectTime</p>
                  </li>
                </ol>
              </div>
            </div>
            <hr noshade="noshade" width="90%" color="#e4e4e4" />
            <div className="personalTags">
              <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                Интересы:
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
