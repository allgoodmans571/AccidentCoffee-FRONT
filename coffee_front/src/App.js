import "./App.css";
import React from "react";
import Context from "./context";
import StartScreen from "./Screens/StartScreen";
import Registration from "./Screens/Registration";
import PersonalData from "./Screens/PersonalData";

function App() {
  const [statePage, setStatePage] = React.useState(0);
  const components = [<StartScreen />, <Registration />, <PersonalData />];

  function showActivePanel(i) {
    setStatePage(i);
  }

  return (
    <Context.Provider value={{ showActivePanel }}>
      <div className="App">{components[statePage]}</div>
    </Context.Provider>
  );
}

export default App;
