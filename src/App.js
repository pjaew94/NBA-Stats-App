import React from "react";
import ListPlayers from "./playerSearch/listPlayers";

import nbaLogo from "./svgs/nbaLogo.svg";

import "./App.scss";

const App = () => {
  return (
    <div className="main_container">
      <div className="logo_container">
        <div className="logo_wrapper">
          <img src={nbaLogo} alt="" />
          <h1>COMPARE</h1>
        </div>
      </div>
      <div className="compare_container">
        <ListPlayers />
        <ListPlayers />
      </div>
    </div>
  );
};

export default App;
