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

  const {
    leagues,
    loading,
    error,
  } = useLeagues(searchTerm);

  const {
    teams,
    loading: teamsLoading,
    error: teamsError,
  } = useTeams(selectedLeague);

  return (
    <div className="App">
      <header>
        <h1>⚽ Football League Finder</h1>
        <p>Search football leagues and explore their teams.</p>
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
      {loading && <p>Loading leagues...</p>}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {!loading && !error && (
        <>
          <h3 className="league-count">
            {leagues.length} leagues found
          </h3>
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
        </>
      )}

      {selectedLeague && (
        <>
          <h1>Teams in {selectedLeague}</h1>

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
    </div>
  );
}

export default App;