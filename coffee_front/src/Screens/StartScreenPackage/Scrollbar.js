import React from "react";
import ScroollbarItem from "./ScrollbarItem";

function Scroollbar() {
  const [dataItem] = React.useState({
    linkImage:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.ru%2Ficon%2F12438%2F%25D0%25BF%25D0%25BE%25D0%25BB%25D1%258C%25D0%25B7%25D0%25BE%25D0%25B2%25D0%25B0%25D1%2582%25D0%25B5%25D0%25BB%25D1%258C-%25D0%25B1%25D0%25B5%25D0%25B7-%25D0%25BF%25D0%25BE%25D0%25BB%25D0%25BE%25D0%25B2%25D1%258B%25D1%2585-%25D0%25BF%25D1%2580%25D0%25B8%25D0%25B7%25D0%25BD%25D0%25B0%25D0%25BA%25D0%25BE%25D0%25B2&psig=AOvVaw1rjMJiI5CEtQk3sgWpmfS1&ust=1612429548955000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiJ1aauze4CFQAAAAAdAAAAABAJ",
    name: "Vika",
    age: "18 ^^",
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
              ageItem={item.age}
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
              ageItem={item.age}
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
              ageItem={item.age}
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
              ageItem={item.age}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Scroollbar;
