function TeamCard({ team }) {
  return (
    <div className="team-row">
      <div className="team-left">

        {team.strTeamBadge && (
          <img
            src={team.strTeamBadge}
            alt={team.strTeam}
            className="team-badge"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        )}

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
            {team.intFormedYear && team.intFormedYear !== "0"
              ? team.intFormedYear
              : "Unknown"}
          </p>

          {team.strWebsite && (
            <p>
              🌐{" "}
              <a
                href={`https://${team.strWebsite.replace(
                  /^https?:\/\//,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default TeamCard;