import React, { useContext } from "react";
import ModalItem from "../Modal/ModalItem";
import ModalMatch from "../Modal/ModalMatch";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";
import ScroollbarItem from "../Screens/StartScreenPackage/ScrollbarItem";
import Context from "../context/context";
import ModalEmptyDB from "../Modal/ModalEmtyDB";

function MainScreen() {
  const { arr, findMatch, dataState } = useContext(Context);
  let linkImage = icon;
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
            <button>cпорт</button>
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
          <button
            style={{
              margin: "3rem 0 0 0",
              height: "2.5rem",
              width: "12rem",
            }}
            className="startButton"
            type="submit"
            onClick={() => {
              findMatch();
            }}
          >
            Подобрать
          </button>
        </div>
        {arr.length > 1 ? (
          <div className="itemsBar">
            {arr.map((item) => {
              countID++;
              if (item.name != dataState.name) {
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
