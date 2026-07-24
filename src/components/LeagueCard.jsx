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

  return (
    <div className="league-card">
      <img
        src={league.strBadge}
        alt={league.strLeague}
        className="league-badge"
      />

      <h2>{league.strLeague}</h2>

      <p>
        <strong>Country:</strong>{" "}
        {league.strCountry}
      </p>

      <p>
        <strong>Sport:</strong>{" "}
        {league.strSport}
      </p>

      <p>
        <strong>Founded:</strong>{" "}
        {league.intFormedYear}
      </p>

      <p>
        <strong>Season:</strong>{" "}
        {league.strCurrentSeason}
      </p>

      <button
        className="view-btn"
        onClick={() =>
          setShowTeams(!showTeams)
        }
      >
        {showTeams
          ? "Hide Teams ▲"
          : "View Teams ▼"}
      </button>

      {showTeams && (
        <div className="teams-section">

          {loading && (
            <p>Loading teams...</p>
          )}

          {error && (
            <p>{error}</p>
          )}

          {!loading &&
            !error &&
            teams.length > 0 && (
              <div className="team-list">

                {teams.map((team) => (
                  <TeamCard
                    key={team.idTeam}
                    team={team}
                  />
                ))}

              </div>
            )}

          {!loading &&
            !error &&
            teams.length === 0 && (
              <p>
                No teams found for this
                league.
              </p>
            )}
        </div>
      )}
    </div>
  );
}

export default LeagueCard;