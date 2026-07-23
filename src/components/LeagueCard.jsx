function LeagueCard({ league }) {
  return (
    <div className="league-card">
      <h2>{league.strLeague}</h2>

      <p>
        <strong>Country:</strong> {league.strCountry}
      </p>

      <p>
        <strong>Sport:</strong> {league.strSport}
      </p>

      <p>
        <strong>League Type:</strong>{" "}
        {league.strLeagueAlternate || "N/A"}
      </p>
    </div>
  );
}

export default LeagueCard;