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
  const [userName, setName] = useState("name");

  function setUserName(name) {
    // console.log(name);
    setName(userName);
    // console.log(userName);
  }

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

  // const [matchModal, setMatchModal] = React.useState({
  //   isOpen: false,
  //   image: "",
  //   name: "",
  //   position: "",
  //   email: "",
  //   telegram: "",
  //   lifePos: "",
  //   teamStatus: "",
  //   workPlace: "",
  //   projectTime: "",
  //   tags: [],
  // });

  function findMatch() {
    let name = dataState.name;
    let response = fetch("http://68.183.12.32:8080/getMatch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        init(
          `${data.image}`,
          `${data.name}`,
          `${data.position}`,
          `${data.email}`,
          `${data.telegram}`
        );
        add(
          `${data.lifePos}`,
          `${data.teamStatus}`,
          `${data.wordPlace}`,
          `${data.projectTime}`,
          data.tags
        );
      });
    setTimeout(() => showMatch(), 500);
  }

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

  // TODO передавать объект, избавиться от такой кучи аргументов
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
    // console.log(action.wordPlace);
    switch (action.type) {
      case "init":
        return {
          image: action.linkImage,
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
    image: "",
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

  const init = (linkImage, name, position, email, telegram) =>
    dispatchData({ type: "init", linkImage, name, position, email, telegram });

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

  const [match, setMatch] = useState(false);

  function showMatch() {
    setMatch(!match);
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
        match,
        showMatch,
        findMatch,
        setUserName,
      }}
    >
      <div className="App">{components[statePage]}</div>
    </Context.Provider>
  );
}

export default App;
