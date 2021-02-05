import "./App.css";
import React, { useEffect, useReducer, useState } from "react";
import Context from "./context/context";
import StartScreen from "./Screens/StartScreenPackage/StartScreen";
import Registration from "./Screens/Registration";
import PersonalData from "./Screens/PersonalData";
import MainScreen from "./Screens/MainScreen";
// import Profile from "./Screens/Profile";

function App() {
  const [arr, setArr] = useState([]);

  const [dataItem] = React.useState({
    linkImage: "https://institute.asiakz.com/files/default/avatar.png",
    name: "Vika",
    position: "Графический дизайнер",
    id: 1,
  });

  
  useEffect(() => {
    fetch("http://68.183.12.32:8080/getAllUsers")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArr(data);
      }
      );
  }, []);

  // function setArr(newArr) {
  //   arr = newArr;
  //   console.log(arr.length);
  // }
  console.log(arr);

  const [statePage, setStatePage] = React.useState(0);
  const [modal, setModal] = React.useState({
    isOpen: false,
  });
  const components = [
    <StartScreen />,
    <Registration />,
    <PersonalData />,
    <MainScreen />,
  ];

  // arr.push({
  //   linkImage: "https://institute.asiakz.com/files/default/avatar.png",
  //   name: "Vika",
  //   position: "Графический дизайнер",
  //   id: 1,
  // });
  // let arr = [
  //   dataItem,
  //   dataItem,
  //   dataItem,
  //   dataItem,
  //   dataItem,
  //   dataItem,
  //   dataItem,
  //   dataItem,
  //   dataItem,
  //   dataItem,
  // ];

  // arr.users.push({
  //   linkImage: "https://institute.asiakz.com/files/default/avatar.png",
  //   name: "Fedor",
  //   position: "Графический дизайнер",
  //   id: 2,
  // });

  function adder(userList) {
    userList.map((user) => {
      arr.users.push({
        linkImage: "https://institute.asiakz.com/files/default/avatar.png",
        name: user.name,
        position: user.position,
        id: user._id,
      });
    });
  }

  async function send() {
    // console.log(dataState);
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
      {/* <div className="App">
        <MainScreen />
      </div> */}
    </Context.Provider>
  );
}

export default App;
