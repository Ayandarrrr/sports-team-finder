function TeamCard({ team }) {
  // Fallback image if no badge exists
  const badge =
    team.strTeamBadge ||
    team.strBadge ||
    "https://via.placeholder.com/120?text=No+Logo";

  return (
    <div className="league-card">
      <img
        src={badge}
        alt={team.strTeam}
        className="league-badge"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/120?text=No+Logo";
        }}
      />

      <h2>{team.strTeam}</h2>

      <p>
        <strong>Founded:</strong> {team.intFormedYear || "N/A"}
      </p>

      <p>
        <strong>Country:</strong> {team.strCountry || "N/A"}
      </p>

      <p>
        <strong>Stadium:</strong> {team.strStadium || "N/A"}
      </p>
    </div>
  );
}

export default TeamCard;