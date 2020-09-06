import React, { useState } from "react";

import { getPlayerList } from "./api/apiController";

import "./App.scss";

const App = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await getPlayerList(query);

      setList(data);
      console.log(data)
      setQuery("");
    }
  };


  return (
    <div className="main_container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
    <div className='player_list'>
        {list ? list.map((player) => {
        if (player.yearsPro === 0) {
          return null
        } else {
          return <div className='listed_player' key={player.playerId}>
            {player.firstName}
            {player.lastName}
            {/* {player.leagues.standard.pos} */}
            {/* {player.leagues.standard.jersey} */}
            <div>{Math.floor(player.heightInMeters * 39.3701/12)}'{Math.floor(player.heightInMeters * 39.3701%12)} </div>
            {player.weightInKilograms*2.20462}
        </div>
        }
    }) : null}
    </div>
    </div>
    
  );
};

export default App;
