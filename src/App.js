import { useState, createContext } from "react";
import Header from "./Components/Header";
import "./app.css";
import React from "react";
import ComA from "./Components/ComA";

const AppState = createContext();
const NameContext = createContext();

function App() {
  const [data, setData] = useState("Web3Mantra");
  const [name, setname] = useState({ name: "Vibhu", age: 21 });
  return (
    <>
      <AppState.Provider value={data}>
        <NameContext.Provider value={name}>
          <Header />
          <ComA />
        </NameContext.Provider>
      </AppState.Provider>
    </>
  );
}

export default App;
export { AppState ,NameContext};
