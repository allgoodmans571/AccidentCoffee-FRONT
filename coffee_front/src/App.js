import "./App.css";
import React from "react";
import Context from "./context";
import StartScreen from "./Screens/StartScreen";
import Registration from "./Screens/Registration";

function App() {
  const [registration, setReqstate] = React.useState(false);

  function showRegPanel() {
    setReqstate(!registration);
    console.log(registration);
  }

  return (
    <Context.Provider value={{ showRegPanel }}>
      <div className="App">
        {!registration ? <StartScreen /> : <Registration />}
      </div>
    </Context.Provider>
  );
}

export default App;
