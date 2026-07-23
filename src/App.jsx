import { useState } from "react";
import "./App.css";
import useTeams from "./hooks/useLeagues";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("Arsenal");

  const { teams, loading, error } = useTeams(searchTerm);

  console.log("Current search:", searchTerm);
  console.log("Teams:", teams);

  return (
    <div className="App">
      <h1>Sports Team Finder ⚽</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <h2>Teams Found: {teams.length}</h2>
    </div>
  );
}

export default App;