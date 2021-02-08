import React, { useContext } from "react";
import "./ModalItem.css";
import Context from "../context/context";

function ModalItem() {
  const { hanldeModal, modal } = useContext(Context);

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
                <img
                  className="profilePhoto"
                  src={modal.image}
                  alt="Фото коллеги №2"
                />
                <button
                  style={{
                    position: 'relative',
                    left: 0,
                    bottom: 0,
                    width: "40px",
                    height: "40px",
                    box: "border-box",
                    border: "2px solid #ccc",
                    borderRadius: "0.25rem",
                  }}
                  onClick={() => hanldeModal(false)}
                ></button>
              </div>
              <div>
                <p style={{ fontSize: "25px" }}>
                  <strong>{modal.name}</strong>
                </p>
                <p style={{ fontSize: "20px", marginTop: "-1rem" }}>
                  {modal.position}
                </p>
                <p>Telegramm: info.telegram</p>
              </div>
            </div>
            <div className="personalData">
              <div className="personalChoose">
                <ol>
                  <li>
                    <strong>Жизненная позиция:</strong> <p>info.lifePos</p>
                  </li>
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
                  <li>
                    <strong>В отношениях с проектом:</strong>{" "}
                    <p>info.projectTime</p>
                  </li>
                </ol>
              </div>
            </div>
            <div className="tags">
              <div className="personalTags">
                <p style={{ color: "#56c1ff" }}>
                  {modal.tags.map((tag) => {
                    return (
                      //TODO кошмар переделать
                      <strong key={tag}> {tag} &nbsp;</strong>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalItem;
