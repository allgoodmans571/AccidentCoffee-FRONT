import React, { useContext } from "react";
import "./ModalItem.css";
import Context from "../context/context";

function ModalItem() {
  const { hanldeModal, modal } = useContext(Context);

  return (
    <div>
      {modal.isOpen && (
        <div className="modal">
          <div className="profile">
            <div>
              <div className="personalInfo">
                <img
                  className="profilePhoto"
                  src={modal.image}
                  alt="Фото коллеги №2"
                />
                <p style={{ fontSize: "15px" }}>{modal.name}</p>
                <p>{modal.position}</p>
                <p>
                  {/* Telegramm: {info.telegram} */}
                  <br />
                  {/* Email: {info.email} */}
                </p>
              </div>
            </div>
            <div className="personalData">
              {/* <h1 style={{ marginTop: '3rem'}}>Личный профиль</h1> */}
              <div className="personalTags">
                <p style={{ color: "#56c1ff" }}>
                  {modal.tags.map((tag) => {
                    return (
                      //TODO кошмар переделать
                      <strong key={tag}>
                        {" "}
                        &nbsp; &nbsp; {tag} &nbsp; &nbsp;
                      </strong>
                    );
                  })}
                </p>
              </div>
              <div className="personalChoose">
                <ol>
                  <li>
                    <strong>Жизненная позиция:</strong> info.lifePos
                  </li>
                  <li>
                    <strong>Командный статус:</strong> info.comStatus
                  </li>
                  <li>
                    <strong>Место работы:</strong> info.workPlace
                  </li>
                  <li>
                    <strong>В отношениях с проектом:</strong> info.projectTime
                  </li>
                </ol>
              </div>
              <button
                style={{
                  backgroundColor: "white",
                  fontSize: "15px",
                  width: "40%",
                  padding: "15px",
                  margin: "auto",
                  box: "border-box",
                  border: "2px solid #ccc",
                  borderRadius: "0.25rem",
                }}
                onClick={() => hanldeModal(false)}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalItem;
