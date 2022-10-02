//import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import Start from "./Start";

function App() {
  const [name, setName] = React.useState("Jiyeon");

  return (
    <div
      className="App"
      style={{
        maxWidth: "350px",
        margin: "auto",
      }}>
      <Start name={name} />
    </div>
  );
}


export default App;
