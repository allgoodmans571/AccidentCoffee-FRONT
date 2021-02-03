import "./App.css";
import React from "react";
import Context from "./context/context";
import StartScreen from "./Screens/StartScreenPackage/StartScreen";
import Registration from "./Screens/Registration";
import PersonalData from "./Screens/PersonalData";
import Profile from "./Screens/Profile";
import ModalContext from "./context/modelContext";

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

  function setActivePanel(i) {
    setStatePage(i);
  }

  function hanldeModal(value) {
    setModal({ isOpen: value });
  }

  return (
    <Context.Provider value={{ setActivePanel }}>
      <ModalContext.Provider value={{ hanldeModal, modal }}>
        <div className="App">{components[statePage]}</div>
      </ModalContext.Provider>
    </Context.Provider>
  );
}

export default App;
