import React, { useContext } from "react";
import "./ModalItem.css";
import ModalContext from "../context/modelContext";

function ModalItem() {
  const { hanldeModal, modal } = useContext(ModalContext);

  return (
    <ModalContext.Provider value={{ hanldeModal }}>
      {modal.isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Modal title</h1>
            <button onClick={() => hanldeModal(false)}>Close modal</button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export default ModalItem;
