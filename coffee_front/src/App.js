import "./App.css";
import React, { useEffect, useReducer, useState } from "react";
import Context from "./context/context";
import StartScreen from "./Screens/StartScreenPackage/StartScreen";
import Registration from "./Screens/Registration";
import PersonalData from "./Screens/PersonalData";
import MainScreen from "./Screens/MainScreen";
import EnterScreen from "./Screens/EnterScreen";
// import Profile from "./Screens/Profile";

function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("http://68.183.12.32:8080/getAllUsers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setArr(data);
      });
  }, []);

  const [statePage, setStatePage] = React.useState(0);
  const [modal, setModal] = React.useState({
    isOpen: false,
    image: "",
    name: "",
    position: "",
    email: "",
    telegram: "",
    lifePos: "",
    teamStatus: "",
    workPlace: "",
    projectTime: "",
    tags: [],
  });

  function hanldeModal(
    operUser,
    imageUser,
    nameUser,
    positionUser,
    emailUser,
    telegramUser,
    lifePosUser,
    teamStatusUser,
    workPlaceUser,
    projectTimeUser,
    tagsUser
  ) {
    setModal({
      isOpen: operUser,
      image: imageUser,
      name: nameUser,
      position: positionUser,
      email: emailUser,
      telegram: telegramUser,
      lifePos: lifePosUser,
      teamStatus: teamStatusUser,
      workPlace: workPlaceUser,
      projectTime: projectTimeUser,
      tags: tagsUser,
    });
  }

  const components = [
    <StartScreen />,
    <EnterScreen />,
    <Registration />,
    <PersonalData />,
    <MainScreen />,
  ];

  async function send() {
    console.log(dataState);
    let response = await fetch("http://68.183.12.32:8080/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(dataState),
    });
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "init":
        return {
          name: action.name,
          position: action.position,
          email: action.email,
          telegram: action.telegram,
        };
      case "add":
        return {
          ...state,
          lifePos: action.lifePos,
          teamStatus: action.teamStatus,
          wordPlace: action.wordPlace,
          projectTime: action.projectTime,
          tags: action.tags,
        };
      default:
        return state;
    }
  };

  const [dataState, dispatchData] = useReducer(reducer, {
    name: "",
    position: "",
    email: "",
    telegram: "",
    lifePos: "",
    teamStatus: "",
    wordPlace: "",
    projectTime: "",
    tags: [],
  });

  const init = (name, position, email, telegram) =>
    dispatchData({ type: "init", name, position, email, telegram });
  const add = (lifePos, teamStatus, wordPlace, projectTime, tags) =>
    dispatchData({
      type: "add",
      lifePos,
      teamStatus,
      wordPlace,
      projectTime,
      tags,
    });

  function setActivePanel(i) {
    setStatePage(i);
  }

  return (
    <Context.Provider
      value={{
        setActivePanel,
        hanldeModal,
        modal,
        init,
        add,
        send,
        dataState,
        arr,
      }}
    >
      <div className="App">{components[statePage]}</div>
    </Context.Provider>
  );
}

export default App;
