import useLeagues from "./hooks/useLeagues";
import SearchBar from "./components/SearchBar";
import LeagueCard from "./components/LeagueCard";
import "./App.css";


function App() {

  const {
    leagues,
    loading,
    error,
    searchLeagues
  } = useLeagues();


  return (
    <div className="App">

      <h1>⚽ Sports Team Finder</h1>

      <p className="subtitle">
        Search football leagues and discover teams
      </p>


      <SearchBar onSearch={searchLeagues} />


      {
        loading && (
          <p className="loading">
            Loading leagues...
          </p>
        )
      }


      {
        error && (
          <p className="error">
            {error}
          </p>
        )
      }


      <div className="league-container">

        {
          leagues.map((league)=>(
            <LeagueCard
              key={league.idLeague}
              league={league}
            />
          ))
        }

      </div>


    </div>
  )
}


export default App;