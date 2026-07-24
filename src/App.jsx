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

      {loading && <h2>Loading leagues...</h2>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <>
          <h3>Leagues Found: {leagues.length}</h3>

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

      {selectedLeague && (
        <>
          <hr />

          <h2>{selectedLeague}</h2>

          <button
            className="view-btn"
            onClick={() => setSelectedLeague("")}
          >
            ← Back to Leagues
          </button>

          {teamsLoading && <h3>Loading teams...</h3>}

          {teamsError && <p>{teamsError}</p>}

          {!teamsLoading && !teamsError && (
            <>
              {teams.length > 0 ? (
                <div className="league-container">
                  {teams.map((team) => (
                    <TeamCard
                      key={team.idTeam}
                      team={team}
                    />
                  ))}
                </div>
              ) : (
                <h3>No teams found for this league.</h3>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;