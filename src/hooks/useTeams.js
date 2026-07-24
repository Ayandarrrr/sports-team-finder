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
        const response = await fetch(
          `https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=${encodeURIComponent(
          `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${encodeURIComponent(
            leagueName
          )}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch teams.");
        }

        const data = await response.json();

        console.log("Teams from API:", data.teams);

        // Remove youth and non-senior teams
        const filteredTeams = (data.teams || []).filter((team) =>
          !team.strTeam.match(
            /U21|U23|U18|Women|Youth|Academy|Reserves/i
          )
        );

        setTeams(filteredTeams);

        setTeams(data.teams || []);
      } catch (err) {
        setError(err.message);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTeams();
  }, [leagueName]);

  return {
    teams,
    loading,
    error,
  };
  return { teams, loading, error };
}

export default useTeams;