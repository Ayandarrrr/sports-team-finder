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
      <h1>⚽ Football League Finder</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <p>Leagues Found: {leagues.length}</p>
      )}

      <div className="league-container">
        {leagues.map((league) => (
          <LeagueCard
            key={league.idLeague}
            league={league}
          />
        ))}
      </div>
    </div>
  );
}

export default App;