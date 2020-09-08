import React, { useState } from "react";
import { getPlayerList } from "../api/apiController";

import "./playerSearch.scss";
const ListPlayers = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await getPlayerList(query);

      setList(data);
      console.log(data);
      setQuery("");
    }
  };

  return (
    <div className="player_list_container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
    
      />


      <div className="player_list">
        {list
          ? list.map((player) => {
                return (
                  <div className="listed_player" key={player.PlayerId}>
                    <img src={player.PhotoUrl} alt=''></img>
                    {player.FirstName}
                    {player.LastName}
                    {player.Position}
                    {Math.floor(player.Height/12)}'{player.Height%12}
                    {player.Weight} lbs
                    {player.Salary}
                    {player.Team}
                  </div>
                );
            })
          : null}
      </div>
    </div>
  );
};

export default ListPlayers;
