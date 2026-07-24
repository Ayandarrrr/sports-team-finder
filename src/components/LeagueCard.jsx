import { useState } from "react";
import useTeams from "../hooks/useTeams";
import TeamCard from "./TeamCard";

function LeagueCard({ league }) {
  const [showTeams, setShowTeams] = useState(false);

  const {
    teams,
    loading,
    error,
  } = useTeams(showTeams ? league.strLeague : "");

function LeagueCard({ league, onViewTeams }) {
  return (
    <div className="league-card">
      <img
        src={league.strBadge}
        alt={league.strLeague}
        className="league-badge"
      />

      <h2>{league.strLeague}</h2>

      <p>
        <strong>Country:</strong> {league.strCountry}
      </p>

      <p>
        <strong>Sport:</strong> {league.strSport}
      </p>

      <p>
        <strong>Founded:</strong> {league.intFormedYear || "Unknown"}
      </p>

      <p>
        <strong>Season:</strong> {league.strCurrentSeason || "Unknown"}
      </p>


      <button
        className="view-btn"
        onClick={() => setShowTeams(!showTeams)}
      >
        {showTeams ? "▲ Hide Teams" : "▼ View Teams"}
      </button>


      {showTeams && (
        <div className="teams-section">

          {loading && <p>Loading teams...</p>}

          {error && <p>{error}</p>}


          {!loading && !error && (
            teams.length > 0 ? (

              <div className="teams-grid">

                {teams.map((team) => (
                  <TeamCard
                    key={team.idTeam}
                    team={team}
                  />
                ))}

              </div>

            ) : (
              <p>No teams found for this league.</p>
            )
          )}

        </div>
      )}

      <button
        className="view-btn"
        onClick={() => onViewTeams(league.strLeague)}
      >
        View Teams
      </button>
    </div>
  );
}

export default LeagueCard
export default LeagueCard;  
