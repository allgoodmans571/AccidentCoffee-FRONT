import React, { useContext } from "react";
import "./ModalItem.css";
import ModalContext from "../context/modelContext";
import Context from "../context/context";

function ModalItem() {
  const { hanldeModal, modal } = useContext(Context);

  return (
    <Context.Provider value={{ hanldeModal }}>
      {modal.isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Modal title</h1>
            <button onClick={() => hanldeModal(false)}>Close modal</button>
          </div>
        </div>
      )}
    </Context.Provider>
  );
}

export default ModalItem;
