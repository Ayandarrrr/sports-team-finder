import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
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

      <h2>Leagues Found: {leagues.length}</h2>

      <div>
        {leagues.map((league) => (
          <div
            key={league.idLeague}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              margin: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{league.strLeague}</h3>
            <p>
              <strong>Country:</strong> {league.strCountry}
            </p>
            <p>
              <strong>Sport:</strong> {league.strSport}
            </p>
            <p>
              <strong>League Type:</strong> {league.strLeagueAlternate || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;