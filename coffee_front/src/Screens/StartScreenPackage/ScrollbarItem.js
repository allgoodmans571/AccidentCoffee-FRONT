import React, { useContext } from "react";
import Context from "../../context/context";

function ScroollbarItem({
  linkItem,
  nameItem,
  positionItem,
  emailUser,
  telegramItem,
  lifePosItem,
  teamStatusItem,
  workPlaceItem,
  projectTimeItem,
  tagsItem,
}) {
  const { hanldeModal } = useContext(Context);

  let image = linkItem;
  let name = nameItem;
  let position = positionItem;

  return (
    <div className="scroollbarItem">
      <button
        className="btn_open_profile"
        style={{ backgroundImage: `url(${image}` }}
        onClick={() =>
          hanldeModal(
            true,
            linkItem,
            nameItem,
            positionItem,
            emailUser,
            telegramItem,
            lifePosItem,
            teamStatusItem,
            workPlaceItem,
            projectTimeItem,
            tagsItem
          )
        }
      >
        <div className="itemInfo">
          <p
            style={{
              fontSize: "21px",
              marginBottom: "-0.5rem",
            }}
          >
            <strong>{name}</strong>
          </p>
          <p>{position}</p>
        </div>
      </button>
    </div>
  );
}

export default ScroollbarItem;
