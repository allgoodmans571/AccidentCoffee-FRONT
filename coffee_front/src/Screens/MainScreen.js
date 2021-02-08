import React, { useContext } from "react";
import ModalItem from "../Modal/ModalItem";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";
import ScroollbarItem from "../Screens/StartScreenPackage/ScrollbarItem";
import Context from "../context/context";

function MainScreen() {
  const { hanldeModal, dataState, arr } = useContext(Context);
  let linkImage = "https://institute.asiakz.com/files/default/avatar.png";
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
        <div>
          <div className="matchProfileBar">
            <div className="matchProfilePos">
              <button
                className="profileButton"
                onClick={() => {
                  hanldeModal(
                    true,
                    dataState.linkImage,
                    dataState.name,
                    dataState.position,
                    dataState.email,
                    dataState.telegram,
                    dataState.lifePos,
                    dataState.comStatus,
                    dataState.wordPlace,
                    dataState.projectTime,
                    dataState.tags
                  );
                }}
              ></button>
            </div>
          </div>
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
            <a>cпорт</a>
          </div>
          <div className="tag">
            <a>сериалы</a>
          </div>
          <div className="tag">
            <a>фильмы</a>
          </div>
          <div className="tag">
            <a>готовка</a>
          </div>
          <div className="tag">
            <a>музыка</a>
          </div>
          <div className="tag">
            <a>зож</a>
          </div>
          <div className="tag">
            <a>эко</a>
          </div>
          <div className="tag">
            <a>ит</a>
          </div>
          <div className="tag">
            <a>языки</a>
          </div>
          <div className="tag">
            <a>киберспорт</a>
          </div>
        </div>
        <div className="itemsBar">
          {arr.map((item) => {
            countID++;
            return (
              <ScroollbarItem
                linkItem={item.linkImage ? item.linkImage : linkImage}
                nameItem={item.name}
                positionItem={item.position}
                telegramItem={item.telegram}
                lifePosItem={item.lifePos}
                emailUser={item.email}
                comStatusItem={item.teamStatus}
                workPlaceItem={item.wordPlace}
                projectTimeItem={item.projectTime}
                tagsItem={item.tags}
                key={countID}
              />
            );
          })}
        </div>
      </div>
      <ModalItem />
    </div>
  );
}

export default MainScreen;
