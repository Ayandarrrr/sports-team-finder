import { useEffect, useState } from "react";

const API_URL =
  "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";

export default function useLeagues() {
  const [leagues, setLeagues] = useState([]);
  const [filteredLeagues, setFilteredLeagues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const sportsLeagues = data.leagues.filter(
          (league) => league.strSport === "Soccer"
        );

        setLeagues(sportsLeagues);
        setFilteredLeagues(sportsLeagues);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load leagues");
        setLoading(false);
      });
  }, []);


  const searchLeagues = (value) => {
    const search = value.toLowerCase();

    const results = leagues.filter((league) =>
      league.strLeague.toLowerCase().includes(search) ||
      league.strCountry?.toLowerCase().includes(search)
    );

    setFilteredLeagues(results);
  };


  return {
    leagues: filteredLeagues,
    loading,
    error,
    searchLeagues
  };
}