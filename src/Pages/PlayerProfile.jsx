import Accolades from "../Components/Accolades";
import Leaders from "../Components/Leaders";
import ShopItem from "../Components/ShopItem";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import Table from "../UI/Table";
import coverPlaceholder from "../assets/league-placeholder.png";
import pfpPlaceholder from "../assets/player-placeholder.png";
import {Link} from "react-router-dom"
import shirtPlaceholder from "../assets/pool-placeholder.jpg";
import { useState } from "react";



const Headers = [
  {
    name: "Season",
    key: "season"
  },
  {
    name: "Team",
    key: "team"
  },
  
    {
        name: "R",
        desc: "Victories",
      },
      {
        name: "PR",
        desc: "PR",
      },
      {
        name: "Points",
        desc: "Points",
      },
      {
        name: "PA",
        desc: "PA",
      },
      {
        name: "Scoring%",
        desc: "Score",
      },
      {
        name: "P/PA",
        desc: "P/PA",
      },
      {
        name: "W",
        desc: "W",
      },
      {
        name: "L",
        desc: "L",
      },
      {
        name: "Win %",
        desc: "Win %",
      },
      {
        name: "10-0",
        desc: "10-0",
      },
      {
        name: "DB/RO",
        desc: "DB/RO",
      },
      {
        name: "B/R",
        desc: "Break run",
      },
      {
        name: "8BB",
        desc: "8BB",
      },
      {
        name: "8BB/S",
        desc: "8BB/S",
      },
      {
        name: "Early 8",
        desc: "Early 8",
      },
      {
        name: "S8",
        desc: "S8",
      },
      {
        name: "WP",
        desc: "WP",
      },
      {
        name: "CtC",
        desc: "CtC",
      },
      {
        name: "Match Wins",
        desc: "Match Wins",
      },
      {
        name: "Match Losses",
        desc: "Match Losses",
      },
      {
        name: "Match Winning &",
        desc: "Match Winning &",
      },
      {
        name: "Sweep",
        desc: "Sweep",
      },
      {
        name: "MA",
        desc: "MA",
      },
      {
        name: "OMA",
        desc: "OMA",
      },
      {
        name: "O ATMA",
        desc: "O ATMA",
      },
      {
        name: "AT MA*",
        desc: "AT MA*",
      },
      {
        name: "MIP",
        desc: "MIP",
      },
      {
        name: "Games Broke",
        desc: "Games Broke",
      },
      {
        name: "Games Racked",
        desc: "Games Racked",
      },
      {
        name: "Total Matches",
        desc: "Total Matches",
      },
]

const GameLogHeaders = [
  {
    name: "Date",
    key: "date"
  },
  {
    name: "Team",
    key: "team"
  },
  {
    name: "Opponent",
    key: "opponent"
  },
  
    {
        name: "R",
        desc: "Victories",
      },
      {
        name: "PR",
        desc: "PR",
      },
      {
        name: "Points",
        desc: "Points",
      },
      {
        name: "PA",
        desc: "PA",
      },
      {
        name: "Scoring%",
        desc: "Score",
      },
      {
        name: "P/PA",
        desc: "P/PA",
      },
      {
        name: "W",
        desc: "W",
      },
      {
        name: "L",
        desc: "L",
      },
      {
        name: "Win %",
        desc: "Win %",
      },
      {
        name: "10-0",
        desc: "10-0",
      },
      {
        name: "DB/RO",
        desc: "DB/RO",
      },
      {
        name: "B/R",
        desc: "Break run",
      },
      {
        name: "8BB",
        desc: "8BB",
      },
      {
        name: "8BB/S",
        desc: "8BB/S",
      },
      {
        name: "Early 8",
        desc: "Early 8",
      },
      {
        name: "S8",
        desc: "S8",
      },
      {
        name: "WP",
        desc: "WP",
      },
      {
        name: "CtC",
        desc: "CtC",
      },
      {
        name: "Match Wins",
        desc: "Match Wins",
      },
      {
        name: "Match Losses",
        desc: "Match Losses",
      },
      {
        name: "Match Winning &",
        desc: "Match Winning &",
      },
      {
        name: "Sweep",
        desc: "Sweep",
      },
      {
        name: "MA",
        desc: "MA",
      },
      {
        name: "OMA",
        desc: "OMA",
      },
      {
        name: "O ATMA",
        desc: "O ATMA",
      },
      {
        name: "AT MA*",
        desc: "AT MA*",
      },
      {
        name: "MIP",
        desc: "MIP",
      },
      {
        name: "Games Broke",
        desc: "Games Broke",
      },
      {
        name: "Games Racked",
        desc: "Games Racked",
      },
      {
        name: "Total Matches",
        desc: "Total Matches",
      },
]
const SplitHeaders = [
  {
    name: "Split",
    key: "date"
  },
  {
    name: "Team",
    key: "team"
  },
  {
    name: "Opponent",
    key: "opponent"
  },
  
    {
        name: "R",
        desc: "Victories",
      },
      {
        name: "PR",
        desc: "PR",
      },
      {
        name: "Points",
        desc: "Points",
      },
      {
        name: "PA",
        desc: "PA",
      },
      {
        name: "Scoring%",
        desc: "Score",
      },
      {
        name: "P/PA",
        desc: "P/PA",
      },
      {
        name: "W",
        desc: "W",
      },
      {
        name: "L",
        desc: "L",
      },
      {
        name: "Win %",
        desc: "Win %",
      },
      {
        name: "10-0",
        desc: "10-0",
      },
      {
        name: "DB/RO",
        desc: "DB/RO",
      },
      {
        name: "B/R",
        desc: "Break run",
      },
      {
        name: "8BB",
        desc: "8BB",
      },
      {
        name: "8BB/S",
        desc: "8BB/S",
      },
      {
        name: "Early 8",
        desc: "Early 8",
      },
      {
        name: "S8",
        desc: "S8",
      },
      {
        name: "WP",
        desc: "WP",
      },
      {
        name: "CtC",
        desc: "CtC",
      },
      {
        name: "Match Wins",
        desc: "Match Wins",
      },
      {
        name: "Match Losses",
        desc: "Match Losses",
      },
      {
        name: "Match Winning &",
        desc: "Match Winning &",
      },
      {
        name: "Sweep",
        desc: "Sweep",
      },
      {
        name: "MA",
        desc: "MA",
      },
      {
        name: "OMA",
        desc: "OMA",
      },
      {
        name: "O ATMA",
        desc: "O ATMA",
      },
      {
        name: "AT MA*",
        desc: "AT MA*",
      },
      {
        name: "MIP",
        desc: "MIP",
      },
      {
        name: "Games Broke",
        desc: "Games Broke",
      },
      {
        name: "Games Racked",
        desc: "Games Racked",
      },
      {
        name: "Total Matches",
        desc: "Total Matches",
      },
]
const Ball9Header = [
    {
        name: "Wins",
        desc: "Wins",
      },
      {
        name: "Losses",
        desc: "Losses",
      },
      {
        name: "Winning &",
        desc: "Winning &",
      },
      {
        name: "Match Wins",
        desc: "Match Wins",
      },
      {
        name: "Match Winning %",
        desc: "Match Winning %",
      },
      {
        name: "Sweep",
        desc: "Sweep",
      },
      {
        name: "W/S/L",
        desc: "W/S/L",
      },
      {
        name: "Games Broke",
        desc: "Games Broke",
      },
      {
        name: "Games Racked",
        desc: "Games Racked",
      },
    ]
const scotchHeaders = [
    {
        name: "Teammate",
        desc: "Teammate",
      },
      {
        name: "R",
        desc: "R",
      },
      {
        name: "PR",
        desc: "PR",
      },
      {
        name: "Points",
        desc: "Points",
      },
      {
        name: "PA",
        desc: "PA",
      },
      {
        name: "Scoring %",
        desc: "Scoring %",
      },
      {
        name: "P/PA",
        desc: "P/PA",
      },
      {
        name: "W",
        desc: "W",
      },
      {
        name: "L",
        desc: "L",
      },
      {
        name: "Win %",
        desc: "Win %",
      },
      {
        name: "10-0",
        desc: "10-0",
      },
      {
        name: "DBRO",
        desc: "DBRO",
      },
      {
        name: "B/R",
        desc: "B/R",
      },
      {
        name: "8BB",
        desc: "8BB",
      },
      {
        name: "8BB/S",
        desc: "8BB/S",
      },
      {
        name: "Early 8",
        desc: "Early 8",
      },
      {
        name: "S8",
        desc: "S8",
      },
      {
        name: "WP",
        desc: "WP",
      },
      {
        name: "CtC",
        desc: "CtC",
      },
      {
        name: "Match Wins",
        desc: "Match Wins",
      },
      {
        name: "Match Losses",
        desc: "Match Losses",
      },
      {
        name: "Match Winning %",
        desc: "Match Winning %",
      },
      {
        name: "Sweep",
        desc: "Sweep",
      },
      {
        name: "MA",
        desc: "MA",
      },
      {
        name: "OMA",
        desc: "OMA",
      },
      {
        name: "O ATMA",
        desc: "O ATMA",
      },
      {
        name: "AT MA*",
        desc: "AT MA*",
      },
      {
        name: "MIP",
        desc: "MIP",
      },
      {
        name: "Games Broke",
        desc: "Games Broke",
      },
      {
        name: "Games Racked",
        desc: "Games Racked",
      },
      {
        name: "Total Matches",
        desc: "Total Matches",
      },
]

const Ball8Headers = [
  
{
    name: "Team",
    key: "team"
},
{
    name: "Games",
    desc: "Games",
    key: "games"
},
{
    name: "PR",
    desc: "PR",
    key: "pr",

},
{
    name: "PTS",
    desc: "Points",
    key: "pts",

},
{
    name: "UEW",
    desc: "Unearned Wins",
    key: "uew",
},
{
    name: "DB/RO",
    desc: "DB/RO",
    key: "dbro",
},
{
    name: "B&R",
    desc: "B&R",
    key: "br",
},
{
    name: "8BB",
    desc: "8BB",
    key: "8bb",
},
{
    name: "W",
    desc: "Wins",
    key: "w",
},
{
    name: "L",
    desc: "Losses",
    key: "l",
},
{
    name: "W%",
    desc: "Win %",
    key: "wp",
},
{
    name: "EWA",
    desc: "Earned Win Avg",
    key: "ewa",
},
{
    name: "PA",
    desc: "PA",
    key: "pa",
},
{
    name: "PTS/PA",
    desc: "PTS/PA",
    key: "ptspa",
},
{
    name: "4f4",
    desc: "4f4",
    key: "4f4",
},
{
    name: "5f5",
    desc: "5f5",
    key: "5f5",
},
{
    name: "WS",
    desc: "Win Streak",
    key: "ws",
},
{
    name: "AVG",
    desc: "Scoring Avg",
    key: "avg",
},
{
    name: "GA",
    desc: "Game Avg",
    key: "ga",
},
{
    name: "O GA",
    desc: "Opponents",
    key: "oga",
},
{
    name: "MA",
    desc: "MA",
    key: "ma",
},
{
    name: "O MA",
    desc: "O MA",
    key: "oma",
},
{
    name: "MIP",
    desc: "MIP",
    key: "mip",
}
]

  const leaders = {
    men: {
      pr: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    points: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    scoringPct: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "ppa": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "wins": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    winPct: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "10-0": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    dbro: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "b/r": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "8bb": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "ctc": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "matchWins": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "matchWinPerc": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "sweep": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "wsl": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "ma": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "oma": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "mip": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "gamesBroke": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "gamesRacked": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    }
    },
    women: {
        pr: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        points: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        scoringPct: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "ppa": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "wins": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        winPct: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "10-0": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        dbro: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "b/r": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "8bb": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "ctc": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "matchWins": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "matchWinPerc": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "sweep": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "wsl": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "ma": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "oma": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "mip": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "gamesBroke": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "gamesRacked": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        }
    }
  }

const SeasonalStats = [
  {
    "season": 2025,
    "team": "Team Name",
    games: 100,
    pr: 0.1,
    pts: 100,
    uew: 1,
    "db/ro": 0.42,
    "bnr": 1.27,
    "8bb": 27,
    "w": 27,
    "l": 60,
    "w%": 37,
    "ewa": 0.29,
    pa: 1.3,
    "pts/pa": 0.9,
    "4f4": 1.5,
    "5f5": 3.9,
    "ws": 1,
    "avg": 37,
    "ga": 8.9,
    "oga": 1.2,
    "ma": 2.3,
    "oma": 1,
    mip:3.2


  },
  {
    "season": 2025,
    "team": "Team Name",
    games: 100,
    pr: 0.1,
    pts: 100,
    uew: 1,
    "db/ro": 0.42,
    "bnr": 1.27,
    "8bb": 27,
    "w": 27,
    "l": 60,
    "w%": 37,
    "ewa": 0.29,
    pa: 1.3,
    "pts/pa": 0.9,
    "4f4": 1.5,
    "5f5": 3.9,
    "ws": 1,
    "avg": 37,
    "ga": 8.9,
    "oga": 1.2,
    "ma": 2.3,
    "oma": 1,
    mip:3.2


  },
  {
    "season": 2025,
    "team": "Team Name",
    games: 100,
    pr: 0.1,
    pts: 100,
    uew: 1,
    "db/ro": 0.42,
    "bnr": 1.27,
    "8bb": 27,
    "w": 27,
    "l": 60,
    "w%": 37,
    "ewa": 0.29,
    pa: 1.3,
    "pts/pa": 0.9,
    "4f4": 1.5,
    "5f5": 3.9,
    "ws": 1,
    "avg": 37,
    "ga": 8.9,
    "oga": 1.2,
    "ma": 2.3,
    "oma": 1,
    mip:3.2


  },
  {
    "season": 2025,
    "team": "Team Name",
    games: 100,
    pr: 0.1,
    pts: 100,
    uew: 1,
    "db/ro": 0.42,
    "bnr": 1.27,
    "8bb": 27,
    "w": 27,
    "l": 60,
    "w%": 37,
    "ewa": 0.29,
    pa: 1.3,
    "pts/pa": 0.9,
    "4f4": 1.5,
    "5f5": 3.9,
    "ws": 1,
    "avg": 37,
    "ga": 8.9,
    "oga": 1.2,
    "ma": 2.3,
    "oma": 1,
    mip:3.2


  },
  {
    "season": 2025,
    "team": "Team Name",
    games: 100,
    pr: 0.1,
    pts: 100,
    uew: 1,
    "db/ro": 0.42,
    "bnr": 1.27,
    "8bb": 27,
    "w": 27,
    "l": 60,
    "w%": 37,
    "ewa": 0.29,
    pa: 1.3,
    "pts/pa": 0.9,
    "4f4": 1.5,
    "5f5": 3.9,
    "ws": 1,
    "avg": 37,
    "ga": 8.9,
    "oga": 1.2,
    "ma": 2.3,
    "oma": 1,
    mip:3.2


  }
]
const PlayerData = [
  {  v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
 
]
const PlayerProfile = () => {

  const [type, setType] = useState("career");
  const [session, setSession] = useState("tournament");
  return (
    <div className="bg-gray-100 py-[66px] min-h-screen ">
      <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900 flex flex-col justify-start gap-4">
        <div className="h-[25vh] w-full overflow-hidden flex items-center justify-center">
          <img src={coverPlaceholder} alt="" className="object-cover" />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-start">
        <div className="flex justify-start items-center px-0 md:px-8 gap-4 flex-1">
          <div className="md:w-36 md:h-36 w-24 h-24 rounded-full flex justify-center items-center border-2 overflow-hidden border-blue">
            <img src={pfpPlaceholder} />
          </div>
          <div className="flex-1">
            <h1 className="text-lg sm:text-2xl leading-tight font-semibold">Player Name</h1>
            <p className="text-gray-500 text-base leading-tight">Team Name</p>
          </div>
          
        </div>
        <div className="flex justify-center w-full items-center gap-7 text-lg flex-wrap gap-y-0 sm:text-xl md:text-2xl font-semibold text-gray-700 ">
            <h3 className="cursor-pointer hover:underline underline-offset-8">Summary</h3>
            <h3 className="cursor-pointer hover:underline underline-offset-8">T-Shirts</h3>
            <h3 className="cursor-pointer hover:underline underline-offset-8">Stats</h3>
            <h3 className="cursor-pointer hover:underline underline-offset-8">Awards</h3>
            <h3 className="cursor-pointer hover:underline underline-offset-8">Leaders</h3>
          </div>
        </div>

        <div className="flex justify-start items-center px-2 md:px-12 gap-4">
          <ul>
            <li><span className="font-semibold text-gray-900">Player's Full Name</span></li>
            <li><span className="font-semibold text-gray-900">Born:</span> May 4th, 2002</li>
            <li><span className="font-semibold text-gray-900">Status:</span> Active</li>
            <li><span className="font-semibold text-gray-900">Bio:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam vero eaque ducimus, illum esse quisquam est rerum saepe ut tenetur magnam impedit iusto cupiditate harum velit voluptas atque animi deserunt.</li>
          </ul>
        </div>
        <div className="mt-4 px-2 md:px-12">
        <DividingHeader header={"T-Shirts"}/>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-12 mx-6 my-10">
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={shirtPlaceholder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={shirtPlaceholder}/>
              <ShopItem name={"Pool Shirt Black"} price={"34.99"} image={shirtPlaceholder}/>

            </div>
        <DividingHeader header={"Stats"}/>
        <div className=" flex justify-center mx-auto items-center border border-gray-300 rounded-md overflow-hidden w-max ">
          <button onClick={()=>setType("career")} className={`px-4 py-3  hover:bg-gray-200 text-gray-600 duration-200 ease-in-out ${type === "career" && 'bg-gray-200'}`}>
            Career
          </button>
          <button onClick={()=>setType("gameLogs")} className={`px-4 py-3  hover:bg-gray-200 text-gray-600 border-x border-gray-300 duration-200 ease-in-out ${type === "gameLogs" && 'bg-gray-200'}`}>
            Game Logs
          </button>
          <button onClick={()=>setType("splits")} className={`px-4 py-3  hover:bg-gray-200 text-gray-600 border-r border-gray-300 duration-200 ease-in-out ${type === "splits" && 'bg-gray-200'}`}>
            Splits
          </button>
          <button  className="px-4 py-3 bg-white hover:bg-gray-200 text-gray-600 duration-200 ease-in-out">
            <Link to={"/head-to-head/player"}>Head-to-Head</Link>
          </button>



        </div>
        <hr className="my-10"/>
        {
          type === "career" && <div className=" flex justify-center mx-auto items-center border border-gray-300 rounded-md overflow-hidden w-max ">
          <button onClick={()=>setSession("tournament")} className={`px-4 py-3  hover:bg-gray-200 text-gray-600 duration-200 ease-in-out ${session === "tournament" && "bg-gray-200"}`}>
            Tournament
          </button>
          <button onClick={()=>setSession("postSeason")} className={`px-4 py-3  border-l border-gray-300  hover:bg-gray-200 text-gray-600 duration-200 ease-in-out ${session === "postSeason" && "bg-gray-200"}`}>
            Post Season
          </button>
        



        </div>
        }

        {
          type === "career" ? 
          <>
          <h2 className="px-5 text-2xl mt-5 font-semibold text-blue">Career Stats</h2>
        <Table tableHeaders={Headers} data={SeasonalStats}/>
        <h2 className="px-5 text-2xl mt-5 font-semibold text-blue">8-Ball Stats</h2>
        <Table tableHeaders={Ball8Headers} data={PlayerData}/>
        <h2 className="px-5 text-2xl mt-5 font-semibold text-blue">9-Ball Stats</h2>
        <Table tableHeaders={Ball9Header} data={PlayerData}/>
        <h2 className="px-5 text-2xl mt-5 font-semibold text-blue">10-Ball Stats</h2>
        <Table tableHeaders={Ball9Header} data={PlayerData}/>
        <h2 className="px-5 text-2xl mt-5 font-semibold text-blue">Scotch Stats</h2>
        <DividingHeader header={"Scotch Stats"}/>
        <Table tableHeaders={scotchHeaders} data={PlayerData}/></>
        :  type === "gameLogs" ? 
        
        <>
        <h2 className="px-5 text-2xl mt-5 font-semibold text-blue">Game Logs</h2>
        <Table tableHeaders={GameLogHeaders} data={SeasonalStats}/></> : 
        
        <>
                <h2 className="px-5 text-2xl mt-5 font-semibold text-blue">Splits</h2>

        <Table tableHeaders={SplitHeaders} data={SeasonalStats}/> </>
        }
        <DividingHeader header={"Accolades"}/>
        <Accolades/>
        <DividingHeader header={"Leaders"}/>
        <Leaders leaders={leaders} title1="Player Name" title2="Leaders"/>
        </div>

        
      </div>
    </div>
  );
};
export default PlayerProfile;
