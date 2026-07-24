import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import LeagueCard from "./components/LeagueCard";
import useLeagues from "./hooks/useLeagues";

function App() {
  const [searchTerm, setSearchTerm] = useState("England");
  const [selectedLeague, setSelectedLeague] = useState("");

  const { leagues, loading, error } = useLeagues(searchTerm);

  return (
    <div className="App">
      <h1>⚽ Football League Finder</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <p>Leagues Found: {leagues.length}</p>

          {selectedLeague && (
            <h2>Selected League: {selectedLeague}</h2>
          )}

          <div className="league-container">
            {leagues.map((league) => (
              <LeagueCard
                key={league.idLeague}
                league={league}
                onViewTeams={setSelectedLeague}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;