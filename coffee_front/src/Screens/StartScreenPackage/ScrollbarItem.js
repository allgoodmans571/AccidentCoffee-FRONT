import React, { useContext } from "react";
import ModalContext from "../../context/modelContext";

function ScroollbarItem({ linkItem, nameItem, positionItem }) {
  const { hanldeModal } = useContext(ModalContext);

  let image = linkItem;
  let name = nameItem;
  let position = positionItem;

  return (
    <div className="scroollbarItem">
      <button
        className="btn_open_profile_startPanel"
        style={{ backgroundImage: `url(${image}` }}
        onClick={() => hanldeModal(true)}
      >
        <div className="itemInfo">
          <p style={{ fontSize: "25px", marginBottom: "-0.5rem" }}>
            <strong>{name}</strong>
          </p>
          <p>{position}</p>
        </div>
      </button>
    </div>
  );
}

export default ScroollbarItem;
