import { useState, useEffect } from "react";

function useLeagues(country) {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!country.trim()) {
      setLeagues([]);
      return;
    }

    async function fetchLeagues() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/search_all_leagues.php?c=${encodeURIComponent(
            country
          )}&s=Soccer`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch leagues.");
        }

        const data = await response.json();

        setLeagues(data.countries || []);
      } catch (err) {
        setError(err.message);
        setLeagues([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLeagues();
  }, [country]);

  return { leagues, loading, error };
}

export default useLeagues;