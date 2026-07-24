import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import LeagueCard from "./components/LeagueCard";
import TeamCard from "./components/TeamCard";
import useLeagues from "./hooks/useLeagues";
import useTeams from "./hooks/useTeams";

function App() {
  const [searchTerm, setSearchTerm] = useState("England");
  const [selectedLeague, setSelectedLeague] = useState("");

  const { leagues, loading, error } = useLeagues(searchTerm);

  const {
    teams,
    loading: teamsLoading,
    error: teamsError,
  } = useTeams(selectedLeague);

  return (
    <div className="App">
      <h1>⚽ Football League Finder</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {loading && <p>Loading leagues...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <p>Leagues Found: {leagues.length}</p>

          <div className="league-container">
            {leagues.map((league) => (
              <LeagueCard
                key={league.idLeague}
                league={league}
                onViewTeams={setSelectedLeague}
              />
            ))}
          </div>

          {selectedLeague && (
            <>
              <button
                className="view-btn"
                onClick={() => setSelectedLeague("")}
              >
                ← Back to Leagues
              </button>

              <h2>{selectedLeague} Teams</h2>

              {teamsLoading && <p>Loading teams...</p>}

              {teamsError && <p>{teamsError}</p>}

              <div className="league-container">
                {teams.map((team) => (
                  <TeamCard
                    key={team.idTeam}
                    team={team}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;