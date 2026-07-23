function LeagueCard({ league }) {
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
        <strong>Founded:</strong> {league.intFormedYear}
      </p>

      <p>
        <strong>Current Season:</strong> {league.strCurrentSeason}
      </p>

    </div>
  );
}

export default LeagueCard;