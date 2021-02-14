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
              setIsEmpty(!isEmpty);
            }}
          />
          <div className="profile">
            <h1>
              {" "}
              Готово! Ты один из первых, еще не все собрались 😉 Зайди в профиль
              попозже.
              <br />
              <br />
              P.S Скоротать ожидания помогут книги по нетворкингу. Ищи их на
              эл.почте
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalEmptyDB;
