import React from "react";
import ScroollbarItem from "./ScrollbarItem";

function Scroollbar() {
  const [dataItem] = React.useState({
    linkImage:
      "https://institute.asiakz.com/files/default/avatar.png",
    name: "Vika",
    position: "Графический дизайнер",
  });

  let arr = [
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
    dataItem,
  ];

  return (
    <div className="scrollBar">
      <div className="scrollBarLine_1">
        {arr.map((item) => {
          return (
            <ScroollbarItem
              linkItem={item.linkImage}
              nameItem={item.name}
              positionItem={item.position}
            />
          );
        })}
      </div>
      <div className="scrollBarLine_2">
        {arr.map((item) => {
          return (
            <ScroollbarItem
              linkItem={item.linkImage}
              nameItem={item.name}
              positionItem={item.position}
            />
          );
        })}
      </div>
      <div className="scrollBarLine_3">
        {arr.map((item) => {
          return (
            <ScroollbarItem
              // key={""}
              linkItem={item.linkImage}
              nameItem={item.name}
              positionItem={item.position}
            />
          );
        })}
      </div>
      <div className="scrollBarLine_4">
        {arr.map((item) => {
          return (
            <ScroollbarItem
              linkItem={item.linkImage}
              nameItem={item.name}
              positionItem={item.position}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Scroollbar;
