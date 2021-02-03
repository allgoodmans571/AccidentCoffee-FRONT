import "./App.css";
import React from "react";
import Context from "./context";
import StartScreen from "./Screens/StartScreenPackage/StartScreen";
import Registration from "./Screens/Registration";
import PersonalData from "./Screens/PersonalData";
import Profile from "./Screens/Profile";

function App() {
  const [statePage, setStatePage] = React.useState(0);
  const components = [<StartScreen />, <Registration />, <PersonalData />, <Profile/>];

  function setActivePanel(i) {
    setStatePage(i);
  }

  return (
    <Context.Provider value={{ setActivePanel }}>
      <div className="App">{components[statePage]}</div>
    </Context.Provider>
  );
}

export default App;
