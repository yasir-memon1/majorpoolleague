import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import LeaguesByGeo from './Pages/LeaguesByGeo'
import Table from './UI/Table'
import CalenderPage from './Pages/CalenderPage'
import LeaguesByName from './Pages/LeaguesByName'
import LeaguesBySize from './Pages/LeaguesBySize'
import TopPlayers from './Pages/TopPlayers'
import TopSeasons from './Pages/TopSeasons'
import TopTeams from './Pages/TopTeams'
import TopMatches from './Pages/TopMatches'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Table/>}/>
      <Route path='/calendar' element={<CalenderPage/>}/>
      <Route path='/leagues-by-geography' element={<LeaguesByGeo/>}/>
      <Route path='/leagues-by-name' element={<LeaguesByName/>}/>
      <Route path='/leagues-by-size' element={<LeaguesBySize/>}/>

      <Route path="/top-100-current-players" element={<TopPlayers title={"Top 100 Current Players"}/>}/>
      <Route path="/top-100-championship-players" element={<TopPlayers title={"Top 100 Championship Players"}/>}/>
      <Route path="/top-100-tournament-players" element={<TopPlayers title={"Top 100 Tournament Players"}/>}/>
      <Route path="/top-100-seasons" element={<TopSeasons title={"Top 100 Seasons"}/>}/>
      <Route path="/top-100-top-tournament-matches" element={<TopMatches title={"Top 100 Top Tournament Matches"}/>}/>
      <Route path="/top-100-team-matches" element={<TopMatches title={"Top 100 Team Matches"}/>}/>
      <Route path="/top-100-current-teams" element={<TopTeams title={"Top 100 Current Teams"}/>}/>
      <Route path="/top-100-teams" element={<TopTeams title={"Top 100 Teams"}/>}/>
      <Route path="/top-100-tournament-teams" element={<TopTeams title={"Top 100 Tournament Teams"}/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
