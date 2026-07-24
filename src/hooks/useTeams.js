import { useState, useEffect } from "react";

function useTeams(leagueName) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!leagueName) {
      setTeams([]);
      return;
    }

    async function fetchTeams() {
      setLoading(true);
      setError("");

      try {
        console.log("League selected:", leagueName);

        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=${encodeURIComponent(
            leagueName
          )}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch teams.");
        }

        const data = await response.json();

        console.log("API Response:", data);

        setTeams(data.teams || []);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTeams();
  }, [leagueName]);

  return { teams, loading, error };
}

export default useTeams;