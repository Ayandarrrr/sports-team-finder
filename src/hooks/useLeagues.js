import { useState, useEffect } from "react";

function useLeagues(searchTerm) {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchLeagues() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch leagues.");
        }

        const data = await response.json();

        const footballLeagues = (data.leagues || []).filter(
          (league) =>
            league.strSport === "Soccer" &&
            league.strLeague
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
        );

        setLeagues(footballLeagues);
      } catch (err) {
        setError(err.message);
        setLeagues([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLeagues();
  }, [searchTerm]);

  return {
    leagues,
    loading,
    error,
  };
}

export default useLeagues;