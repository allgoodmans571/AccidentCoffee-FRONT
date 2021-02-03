import React from "react";

function ScroollbarItem({ linkItem, nameItem, ageItem }) {
  let image = linkItem;
  let name = nameItem;
  let age = ageItem;

  return (
    <div>
      <button
        style={{
          margin: "2rem 2rem 0 0",
          borderRadius: "1rem",
          border: 'none',
          height: "310px",
          width: "240px",
        //   background: `url(${image}) no-repeat scroll 0 0 transparent`,
          textAlign: "left",
        }}
      >
        Имя: {name}
        <br />
        Возраст: {age}
      </button>
    </div>
  );
}

export default ScroollbarItem;
