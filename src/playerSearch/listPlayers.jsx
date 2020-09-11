import React, { useState, useEffect } from "react";
import { getPlayerList, getAllStars } from "../api/apiController";
import SuggestedCard from './suggestedCard'

import "./playerSearch.scss";

import { RiSearch2Line } from "react-icons/ri";

const ListPlayers = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [listExists, setListExists] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllStars();
      setSuggested(data);
    }

    fetchData()
  });

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await getPlayerList(query);

      setList(data);
      if (list) {
        setListExists(true);
      } else {
        setListExists(false);
      }
      setQuery("");
    }
  };

  return (
    <div className="player_list_container">
      <div className="input container">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <button className="search_button" onClick={search}>
          <RiSearch2Line />
        </button>
      </div>

      <div className="player_list">
        {listExists ? (
          <ul className="headers">
            <li className="headshot"></li>
            <li className="name">NAME</li>
            <li className="position">POS</li>
            <li className="height">HT</li>
            <li className="weight">WT</li>
            <li className="team">TEAM</li>
            <li className="salary">SALARY</li>
          </ul>
        ) : null}

        {list
          ? list.map((player) => {
              return (
                <ul className="listed_player" key={player.PlayerId}>
                  <li>
                    <img src={player.PhotoUrl} alt=""></img>
                  </li>
                  <li>
                    {player.FirstName} {player.LastName} {player.Jersey}
                  </li>
                  <li>{player.Position}</li>
                  <li>
                    {Math.floor(player.Height / 12)}'{player.Height % 12}
                  </li>
                  <li>{player.Weight} lbs</li>
                  <li>{player.Team}</li>
                  <li>{player.Salary}</li>
                </ul>
              );
            })
          : null}

        {!listExists ? (
          <div className="suggested_container">
            <SuggestedCard />
            
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ListPlayers;
