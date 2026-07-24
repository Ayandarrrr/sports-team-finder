function TeamCard({ team }) {
  return (
    <div className="team-row">
      <div className="team-left">
        <img
          src={
            team.strTeamBadge ||
            "https://via.placeholder.com/60?text=⚽"
          }
          alt={team.strTeam}
          className="team-badge"
        />

        <div className="team-info">
          <h3>{team.strTeam}</h3>

          <p>
            🏟 <strong>Stadium:</strong>{" "}
            {team.strStadium || "Unknown"}
          </p>

          <p>
            🌍 <strong>Country:</strong>{" "}
            {team.strCountry || "Unknown"}
          </p>

          <p>
            📅 <strong>Founded:</strong>{" "}
            {team.intFormedYear || "N/A"}
          </p>

          {team.strWebsite && (
            <a
              href={`https://${team.strWebsite.replace(
                /^https?:\/\//,
                ""
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="team-link"
            >
              🌐 Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;