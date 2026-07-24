function TeamCard({ team }) {
  return (
    <div className="league-card">
      <img
        src={team.strTeamBadge}
        alt={team.strTeam}
        className="league-badge"
      />

      <h2>{team.strTeam}</h2>

      <p>
        <strong>Founded:</strong> {team.intFormedYear}
      </p>

      <p>
        <strong>Stadium:</strong> {team.strStadium}
      </p>

      <p>
        <strong>Country:</strong> {team.strCountry}
      </p>
    </div>
  );
}

export default TeamCard;