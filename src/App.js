import React from "react";
import "./App.css";
import { Home } from "./Home";
import { SideBar } from "./SideBar";


function App() {
  return (
    <div className="App">
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
