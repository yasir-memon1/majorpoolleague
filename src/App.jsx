import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Home from './Pages/Home'
import StatsPage from './Pages/StatsPage'
import StandingsPage from './Pages/StandingsPage'
import PlayersPage from './Pages/PlayersPage'
import PlayerProfile from './Pages/PlayerProfile'
import HeadToHeadPage from './Pages/HeadToHeadPage'
import HeadToHeadPlayer from './Pages/HeadToHeadPlayer'
import HOF from './Pages/HOF'
import VoteForHOF from './Pages/VoteForHOF'
import LOLoginPage from './Pages/LOLoginPage'
import SignUpPage from './Pages/SignUpPage'
import NewsLetterPage from './Pages/NewsLetterPage'
import PostSeasonPage from './Pages/PostSeasonPage'
import Shop from './Pages/Shop'
import WeeklyScoresPage from './Pages/WeeklyScoresPage'
import Division from './Pages/Division'
import AboutPage from './Pages/About'
import Champions from './Pages/Champions'
import Championship from './Pages/Championship'
import { useEffect } from 'react'
import MatchesNav from './Components/MatchesNav'
import MatchPage from './Pages/MatchPage'
import PlayerJoin from './Pages/PlayerJoin'
import Rules from './Pages/Rules'
import Policies from './Pages/Policies'
import Memberships from './Pages/Memberships'

function App() {

  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [location])
  return (
    <>
    <Navbar/>
    <MatchesNav/>
    <Routes>
      <Route path='/majorpoolleague' element={<Home/>}/>
      <Route path='/calendar' element={<CalenderPage/>}/>
      <Route path='/stats' element={<StatsPage/>}/> 
      <Route path='/standings' element={<StandingsPage/>}/>
      <Route path='/newsletters' element={<NewsLetterPage/>}/>
      <Route path='/post-season' element={<PostSeasonPage/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/weekly-scores' element={<WeeklyScoresPage/>}/>
      <Route path='/division/:name' element={<Division/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path="/match" element={<MatchPage/>}/>
      <Route path="/join" element={<PlayerJoin/>}/>
      <Route path="/rules" element={<Rules/>}/>
      <Route path="/policies" element={<Policies/>}/>


      <Route path="/history" element={<Champions/>}/>
      <Route path="/championship/:name" element={<Championship/>}/>

      <Route path='/players' element={<PlayersPage/>}/>
      <Route path='/player/:name' element={<PlayerProfile/>}/>
      <Route path="head-to-head/:player" element={<HeadToHeadPage/>}/>
      <Route path="head-to-head/:player/:opponent" element={<HeadToHeadPlayer/>}/>

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

      <Route path="/hall-of-fame" element={<HOF/>}/>
      <Route path="/vote" element={<VoteForHOF/>}/>

      <Route path="/signin" element={<LOLoginPage/>}/>
      <Route path="/signup" element={<Memberships/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
