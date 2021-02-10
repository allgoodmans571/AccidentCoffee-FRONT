import React, { useState } from "react";
import "./ModalItem.css";

function ModalEmptyDB() {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div>
      {isEmpty && (
        <div className="modal">
          <button
            className="backgroundButton"
            onClick={() => {
              console.log(isEmpty);
              setIsEmpty(!isEmpty);
            }}
          />
          <div className="profile">
            <h1> Пользователей пока нет, зайдите позже</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalEmptyDB;
