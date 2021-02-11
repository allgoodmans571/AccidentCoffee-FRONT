import React, { useContext, useEffect } from "react";
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

  let showingArr = arr;

  function filtr(value) {
    let newArr = [];
    console.log(value);
    console.log(showingArr);
    for (let i = 0; i < showingArr.length; i++) {
      for (let j = 0; j < showingArr[i].tags.length; j++) {
        console.log(showingArr[i].tags[j]);
        if (showingArr[i].tags[j] !== value) {
          newArr.join(showingArr[i]);
          console.log(showingArr[i]);
        }
      }
    }
    console.log(newArr);
    showingArr = newArr;
    console.log(showingArr);
  }

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
        <button
          style={{
            marginRight: "2rem",
            width: "12rem",
          }}
          className="startButton"
          onClick={() => {
            init("", "", "", "", "");
            add("", "", "", "", []);
            setActivePanel(0);
          }}
        >
          В главное меню
        </button>
      </div>

      <div className="mainBlock">
        <div></div>
        <div className="tags">
          <p
            style={{
              fontSize: "17px",
            }}
          >
            По интересам:
          </p>
          <div className="tag">
            <button onClick={() => filtr("cпорт")}>cпорт</button>
          </div>
          <div className="tag">
            <button>сериалы</button>
          </div>
          <div className="tag">
            <button>фильмы</button>
          </div>
          <div className="tag">
            <button>готовка</button>
          </div>
          <div className="tag">
            <button>музыка</button>
          </div>
          <div className="tag">
            <button>зож</button>
          </div>
          <div className="tag">
            <button>эко</button>
          </div>
          <div className="tag">
            <button>ит</button>
          </div>
          <div className="tag">
            <button>языки</button>
          </div>
          <div className="tag">
            <button>киберспорт</button>
          </div>
          {!match && (
            <button
              style={{
                margin: "3rem 0 0 0",
                height: "2.5rem",
                width: "12rem",
              }}
              className="startButton"
              id="matchButton"
              type="submit"
              onClick={() => {
                findMatch();
              }}
            >
              Подобрать
            </button>
          )}
        </div>
        {showingArr.length > 1 ? (
          <div className="itemsBar">
            {showingArr.map((item) => {
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
