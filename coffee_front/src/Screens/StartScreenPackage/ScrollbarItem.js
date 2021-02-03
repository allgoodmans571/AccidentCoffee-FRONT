import React from "react";

function ScroollbarItem({ linkItem, nameItem, positionItem }) {
  let image = linkItem;
  let name = nameItem;
  let position = positionItem;

  return (
    <div>
      <button
        className="btn_open_profile_startPanel"
        style={{
          backgroundImage: `url(${image}`,
        }}
      >
        <div className="itemInfo">
          <p style={{fontSize: '25px', marginBottom: '-0.5rem'}}>
            <strong>{name}</strong>
          </p>
          <p>{position}</p>
        </div>
      </button>
    </div>
  );
}

export default ScroollbarItem;
