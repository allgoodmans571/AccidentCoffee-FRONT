import "./App.css";
import React, { useState, useReducer } from "react";
import Context from "./context/context";
import StartScreen from "./Screens/StartScreenPackage/StartScreen";
import Registration from "./Screens/Registration";
import PersonalData from "./Screens/PersonalData";
import Profile from "./Screens/Profile";
import ModalContext from "./context/modelContext";
import PersonalDataContext from "./context/personalDataContext";

function App() {
  const [statePage, setStatePage] = React.useState(0);
  const [modal, setModal] = React.useState({
    isOpen: false,
  });
  const components = [
    <StartScreen />,
    <Registration />,
    <PersonalData />,
    <Profile />,
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

  function hanldeModal(value) {
    setModal({ isOpen: value });
  }

  return (
    <Context.Provider value={{ setActivePanel }}>
      <ModalContext.Provider value={{ hanldeModal, modal }}>
        <PersonalDataContext.Provider
          value={{
            init,
            add,
            send,
          }}
        >
          <div className="App">{components[statePage]}</div>
        </PersonalDataContext.Provider>
      </ModalContext.Provider>
    </Context.Provider>
  );
}

export default App;
