import { useState, useEffect } from "react";

function useTeams(searchTerm) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!searchTerm.trim()) {
      setTeams([]);
      return;
    }

    async function fetchTeams() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=${encodeURIComponent(searchTerm)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch teams.");
        }

        const data = await response.json();

        setTeams(data.teams || []);
      } catch (err) {
        setError(err.message);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTeams();
  }, [searchTerm]);

  return { teams, loading, error };
}

export default useTeams;