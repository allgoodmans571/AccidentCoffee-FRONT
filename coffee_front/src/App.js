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
    updateBase();
  }, []);

  function updateBase() {
    fetch("https://tinderteam.ru/api/getAllUsers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setArr(data);
      });
  }

  const reducerMatch = (stateMatch, actionMatch) => {
    switch (actionMatch.type) {
      case "initMatch":
        return {
          image: actionMatch.linkImage,
          name: actionMatch.name,
          position: actionMatch.position,
          email: actionMatch.email,
          telegram: actionMatch.telegram,
        };
      case "addMatch":
        return {
          ...stateMatch,
          lifePos: actionMatch.lifePos,
          teamStatus: actionMatch.teamStatus,
          wordPlace: actionMatch.wordPlace,
          projectTime: actionMatch.projectTime,
          tags: actionMatch.tags,
        };
      default:
        return stateMatch;
    }
  };

  const [dataStateMatch, dispatchDataMatch] = useReducer(reducerMatch, {
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

  const initMatch = (linkImage, name, position, email, telegram) =>
    dispatchDataMatch({
      type: "initMatch",
      linkImage,
      name,
      position,
      email,
      telegram,
    });

  const addMatch = (lifePos, teamStatus, wordPlace, projectTime, tags) =>
    dispatchDataMatch({
      type: "addMatch",
      lifePos,
      teamStatus,
      wordPlace,
      projectTime,
      tags,
    });

  async function findMatch(nameUser) {
    let name = nameUser ? nameUser : dataState.name;
    console.log(name);
    let response = await fetch("https://tinderteam.ru/api/getMatch", {
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
        initMatch(
          `${data.image}`,
          `${data.name}`,
          `${data.position}`,
          `${data.email}`,
          `${data.telegram}`
        );
        addMatch(
          `${data.lifePos}`,
          `${data.teamStatus}`,
          `${data.wordPlace}`,
          `${data.projectTime}`,
          data.tags
        );
      });
    await showMatch();
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
    // <Loader />,
  ];

  // function loadingScreen(value) {
  //   return(<Loader />);
  // }

  async function send() {
    console.log(dataState);
    let response = await fetch("https://tinderteam.ru/api/registration", {
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

        initMatch,
        addMatch,
        dataStateMatch,

        updateBase
      }}
    >
      <div className="App">{components[statePage]}</div>
    </Context.Provider>
  );
}

export default App;
