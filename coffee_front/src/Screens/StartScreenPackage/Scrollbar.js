import React, { useContext } from "react";
import ScroollbarItem from "./ScrollbarItem";
import Context from "../../context/context";

function Scroollbar() {
  const { arr } = useContext(Context);
  let linkImage = "https://institute.asiakz.com/files/default/avatar.png";

  return (
    <div className="scrollBar">
      <div className="scrollBarLine_1">
        {arr.map((item) => {
          return (
            <ScroollbarItem
              linkItem={linkImage}
              nameItem={item.name}
              positionItem={item.position}
              key={item.id}
            />
          );
        })}
      </div>
      <div className="scrollBarLine_2">
        {arr.map((item) => {
          return (
            <ScroollbarItem
              linkItem={linkImage}
              nameItem={item.name}
              positionItem={item.position}
              key={item.id}
            />
          );
        })}
      </div>
      <div className="scrollBarLine_3">
        {arr.map((item) => {
          return (
            <ScroollbarItem
              linkItem={linkImage}
              nameItem={item.name}
              positionItem={item.position}
              key={item.id}
            />
          );
        })}
      </div>
      <div className="scrollBarLine_4">
        {arr.map((item) => {
          return (
            <ScroollbarItem
              linkItem={linkImage}
              nameItem={item.name}
              positionItem={item.position}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Scroollbar;
