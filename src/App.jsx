import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import LeagueCard from "./components/LeagueCard";
import useLeagues from "./hooks/useLeagues";

function App() {
  const [searchTerm, setSearchTerm] = useState("England");

  const { leagues, loading, error } = useLeagues(searchTerm);

  return (
    <div className="App">
      <header>
        <h1>⚽ Football League Finder</h1>
        <p className="subtitle">
          Search football leagues and explore their teams.
        </p>
      </header>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {loading && (
        <h2 className="loading">
          Loading leagues...
        </h2>
      )}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <h3 className="league-count">
            {leagues.length} league{leagues.length !== 1 ? "s" : ""} found
          </h3>

          <div className="league-container">
            {leagues.map((league) => (
              <LeagueCard
                key={league.idLeague}
                league={league}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;