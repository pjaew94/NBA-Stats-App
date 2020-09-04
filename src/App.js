import React, { useState } from "react";

import { playerFirstNameStats } from "./api/apiController";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [stats, setStats] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await playerFirstNameStats(query);

      setStats(data);
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
      >

      </input>
    </div>
  );
};

export default App;
