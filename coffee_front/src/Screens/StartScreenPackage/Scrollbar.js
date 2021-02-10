import React, { useContext } from "react";
import ScroollbarItem from "./ScrollbarItem";
import Context from "../../context/context";
import icon from "../../images/icon.png";

function Scroollbar() {
  const { arr } = useContext(Context);
  let linkImage = icon;

  let countID = 0;
  return (
    <div className="scrollBar">
      <div className="scrollBarLine_1">
        {arr.map((item) => {
          countID++;
          return (
            <ScroollbarItem
              linkItem={item.image}
              nameItem={item.name}
              positionItem={item.position}
              emailUser={item.email}
              telegramItem={item.telegram}
              lifePosItem={item.lifePos}
              teamStatusItem={item.teamStatus}
              workPlaceItem={item.wordPlace}
              projectTimeItem={item.projectTime}
              tagsItem={item.tags}
              key={countID}
            />
          );
        })}
      </div>
      <div className="scrollBarLine_2">
        {arr.map((item) => {
          countID++;
          return (
            <ScroollbarItem
              linkItem={item.image}
              nameItem={item.name}
              positionItem={item.position}
              emailUser={item.email}
              telegramItem={item.telegram}
              lifePosItem={item.lifePos}
              teamStatusItem={item.teamStatus}
              workPlaceItem={item.wordPlace}
              projectTimeItem={item.projectTime}
              tagsItem={item.tags}
              key={countID}
            />
          );
        })}
      </div>
      <div className="scrollBarLine_3">
        {arr.map((item) => {
          countID++;
          return (
            <ScroollbarItem
              linkItem={item.image}
              nameItem={item.name}
              positionItem={item.position}
              emailUser={item.email}
              telegramItem={item.telegram}
              lifePosItem={item.lifePos}
              teamStatusItem={item.teamStatus}
              workPlaceItem={item.wordPlace}
              projectTimeItem={item.projectTime}
              tagsItem={item.tags}
              key={countID}
            />
          );
        })}
      </div>
      <div className="scrollBarLine_4">
        {arr.map((item) => {
          countID++;
          return (
            <ScroollbarItem
              linkItem={item.image}
              nameItem={item.name}
              positionItem={item.position}
              emailUser={item.email}
              telegramItem={item.telegram}
              lifePosItem={item.lifePos}
              teamStatusItem={item.teamStatus}
              workPlaceItem={item.wordPlace}
              projectTimeItem={item.projectTime}
              tagsItem={item.tags}
              key={countID}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Scroollbar;
