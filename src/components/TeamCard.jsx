function TeamCard({ team }) {
  return (
    <div className="team-card">
      <img
        src={
          team.strTeamBadge ||
          team.strBadge ||
          "https://via.placeholder.com/80?text=⚽"
        }
        alt={team.strTeam}
        className="team-badge"
      />

      <h4>{team.strTeam}</h4>

      <p>{team.strStadium}</p>

      <p>{team.strCountry}</p>
    </div>
  );
}

export default TeamCard;