import React, { useContext } from "react";
import ModalItem from "../Modal/ModalItem";
import ModalMatch from "../Modal/ModalMatch";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";
import ScroollbarItem from "../Screens/StartScreenPackage/ScrollbarItem";
import Context from "../context/context";
import ModalEmptyDB from "../Modal/ModalEmtyDB";

function MainScreen() {
  const {
    arr,
    match,
    findMatch,
    dataState,
    setActivePanel,
    init,
    add,
  } = useContext(Context);

  let countID = 0;

  return (
    <div>
      <div className="headerMain">
        <div className="logotype">
          <img
            style={{ height: "36px", width: "36px", paddingRight: "1rem" }}
            src={icon}
            alt="icon"
          />
          <img
            style={{
              borderWidth: "0px",
              height: "23px",
              width: "97px",
              marginBottom: "5px",
            }}
            src={logo}
            alt="logo"
          />
        </div>
        <div className="navButtons">
          {arr.length > 1 && !match && (
            <button
              className="navButton1"
              type="submit"
              onClick={() => {
                findMatch();
              }}
            >
              Подобрать
            </button>
          )}
          <button
            className="navButton"
            onClick={() => {
              init("", "", "", "", "");
              add("", "", "", "", []);
              setActivePanel(0);
            }}
          >
            В главное меню
          </button>
        </div>
      </div>

      <div className="mainBlock">
        {arr.length > 1 ? (
          <div className="itemsBar">
            {arr.map((item) => {
              countID++;
              if (item.name !== dataState.name) {
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
              }
            })}
          </div>
        ) : (
          <ModalEmptyDB />
        )}
      </div>
      <ModalItem />
      <ModalMatch />
    </div>
  );
}

export default MainScreen;
