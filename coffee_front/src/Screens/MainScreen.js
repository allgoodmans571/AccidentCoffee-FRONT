import React, { useContext } from "react";
import ModalItem from "../Modal/ModalItem";
import icon from "../images/icon.png";
import logo from "../images/logo.svg";
import ScroollbarItem from "../Screens/StartScreenPackage/ScrollbarItem";
import Context from "../context/context";

function MainScreen() {
  const { arr } = useContext(Context);
  let linkImage = "https://institute.asiakz.com/files/default/avatar.png";

  console.log(arr);

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
            }}
            src={logo}
            alt="logo"
          />
        </div>
        <div className="navBar">
          <a
            style={{
              textDecoration: "none",
              color: "black",
            }}
            href="#"
          >
            <strong>Все сотрудники</strong>
          </a>
          <a
            style={{
              textDecoration: "none",
              color: "black",
            }}
            href="#"
          >
            Тебя лайкнули
          </a>
        </div>
        <div>
          <div className="matchProfileBar">
            <div className="matchProfilePos">
              <div>
                {/* <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/CA794E/1d/25/3c/1d253caeb3d44c40b6b3398654d52746/images/catalog/bell_u393.svg?token=40eed1adeb061c7a788567509288b01c20eecfe4d3e07343f4392cf842406f5f" /> */}
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    alignItems: "center",
                  }}
                >
                  Мэтч!
                </a>
              </div>
              <div className="profileButton">
                <img src="https://institute.asiakz.com/files/default/avatar.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainBlock">
        <div></div>
        <div className="tags">
          <p
            style={{
              fontSize: "20px",
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
      <ModalItem />
    </div>
  );
}

export default MainScreen;
