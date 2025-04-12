import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import PageHeader from "../UI/PageHeader";
import banner from "../assets/State Champ Banner small.jpg";
import poster from "../assets/biggestpartyposter.jpg";
import placeHolder from "../assets/player-placeholder.png"
import teamPlaceholder from "../assets/league-placeholder (1).png"
import eventPicPlaceholder from "../assets/league-placeholder.png";

import {
  faArrowAltCircleRight,
  faCalendar,
  faLocation,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import MatchResults from "../Components/MatchResults";
import Table from "../UI/Table";
import Leaders from "../Components/Leaders";
import PlayersShowcase from "../Components/PlayersShowcase";
import TeamsShowcase from "../Components/TeamsShowcase";
const matches = [
    {
      id: 1,
      team1: { name: "Wicked Crew",  image: placeHolder },
      team2: { name: "Balls Matter", image: placeHolder },
    },
    {
      id: 2,
      team1: { name: "Lucky 13", image: placeHolder },
      team2: { name: "Tempe Elks",  image: placeHolder },
    },
    {
      id: 3,
      team1: { name: "Get Lucky",  image: placeHolder },
      team2: { name: "Those People",  image: placeHolder },
    },
    {
      id: 4,
      team1: { name: "A*R*T",  image: placeHolder },
      team2: { name: "Chalk Dirty to Me", image: placeHolder },
    },
    {
      id: 5,
      team1: { name: "Hot Pockets", image: placeHolder },
      team2: { name: "Balls in Hand",  image: placeHolder },
    },
    {
      id: 6,
      team1: { name: "FELT That!",  image: placeHolder },
      team2: { name: "Ohhh Those Guys!",  image: placeHolder },
    },
    
  ];


  const TEAM_HEADERS = [
    {
        name: "Team",
    },
    {
        name: "Games",
        desc: "Games"
    },
    {
        name: "PR",
        desc: "PR"
    },
    {
        name: "PTS",
        desc: "Points"
    },
    {
        name: "UEW",
        desc: "Unearned Wins"
    },
    {
        name: "DB/RO",
        desc: "DB/RO"
    },
    {
        name: "B&R",
        desc: "B&R"
    },
    {
        name: "8BB",
        desc: "8BB"
    },
    {
        name: "CC",
        desc: "CC"
    },
    {
        name: "W",
        desc: "Wins"
    },
    {
        name: "L",
        desc: "Losses"
    },
    {
        name: "W%",
        desc: "Win %"
    },
    {
        name: "EWA",
        desc: "Earned Win Avg"
    },
    {
        name: "PA",
        desc: "PA"
    },
    {
        name: "PTS/PA",
        desc: "PTS/PA"
    },
    {
        name: "4f4",
        desc: "4f4"
    },
    {
        name: "5f5",
        desc: "5f5"
    },
    {
        name: "PS",
        desc: "Points Streak"
    },
    {
        name: "WS",
        desc: "Win Streak"
    },
    {
        name: "AVG",
        desc: "Scoring Avg"
    },
    {
        name: "GA",
        desc: "Game Avg"
    },
    {
        name: "O GA",
        desc: "Opponents"
    },
    {
        name: "MA",
        desc: "MA"
    },
    {
        name: "O MA",
        desc: "O MA"
    },
    {
        name: "MIP",
        desc: "MIP"
    }
]

const playerData = [
    { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
    { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
    { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
    { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
    { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
    { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
    { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
    { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
  ]

  const leaders = {
    men: {
      pr: {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    points: {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    scoringPct: {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "ppa": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "wins": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    winPct: {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "10-0": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    dbro: {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "b/r": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "8bb": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "ctc": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "matchWins": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "matchWinPerc": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "sweep": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "wsl": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "ma": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "oma": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "mip": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "gamesBroke": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    },
    "gamesRacked": {
        score: 5480,
        name: "Fred Stanfield",
        image: placeHolder,
        team: "Team name"
    }
    },
    women: {
        pr: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        points: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        scoringPct: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "ppa": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "wins": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        winPct: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "10-0": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        dbro: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "b/r": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "8bb": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "ctc": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "matchWins": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "matchWinPerc": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "sweep": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "wsl": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "ma": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "oma": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "mip": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "gamesBroke": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "gamesRacked": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        }
    }
  }
  const teams = [{
    name: "Albuquerque Isotopes",
    image: teamPlaceholder
  },
  {
    name: "Albuquerque Isotopes",
    image: teamPlaceholder
  },

  {
    name: "Albuquerque Isotopes",
    image: teamPlaceholder
  },

  {
    name: "Albuquerque Isotopes",
    image: teamPlaceholder
  },

  {
    name: "Albuquerque Isotopes",
    image: teamPlaceholder
  },
]

  
  const players = [
    
    
    
    
   
    
    
    
    {
      name:     "John Smith",
      image: placeHolder,
      team_image: teamPlaceholder,
      team: "Albuquerque Isotopes",
      
      
    },
    {
      name:     "John Smith",
      image: placeHolder,
      team_image: teamPlaceholder,
      team: "Albuquerque Isotopes",
      
    },
    
    {
      name:     "John Smith",
      image: placeHolder,
      team_image: teamPlaceholder,
      team: "Albuquerque Isotopes",
      mvp: true
      
    },
    
    {
      name:     "John Smith",
      image: placeHolder,
      team_image: teamPlaceholder,
      team: "Albuquerque Isotopes",
      
    },
    
    {
      name:     "John Smith",
      image: placeHolder,
      team_image: teamPlaceholder,
      team: "Albuquerque Isotopes",
      
    },
    
    {
      name:     "John Smith",
      image: placeHolder,
      team_image: teamPlaceholder,
      team: "Albuquerque Isotopes",
      
    },
    
    {
      name:     "John Smith",
      image: placeHolder,
      team_image: teamPlaceholder,
      team: "Albuquerque Isotopes",
      
    },
    
    {
      name:     "John Smith",
      image: placeHolder,
      team_image: teamPlaceholder,
      team: "Albuquerque Isotopes",
      
    },
    
    {
      name:     "John Smith",
      image: placeHolder,
      team_image: teamPlaceholder,
      team: "Albuquerque Isotopes",
      
    },
  ]

  const PLAYER_HEADERS = [
    {
        name: "Player",
    },
    
    {
        name: "R",
        desc: "R"
    },
    {
        name: "Team Name",
        desc: "Team Name"
    },
    {
        name: "PR",
        desc: "PR"
    },
    {
        name: "Team Wins",
        desc: "Team Wins"
    },
    {
        name: "Team Loss",
        desc: "Team Loss"
    },
    {
        name: "Team W/L%",
        desc: "Team W/L%"
    },
    {
        name: "Match Saves",
        desc: "Match Saves"
    },
    {
        name: "Blown Save",
        desc: "Blown Save"
    },
    {
        name: "Points",
        desc: "Points"
    },
    {
        name: "PA",
        desc: "PA"
    },
    {
        name: "Scoring %",
        desc: "Scoring %"
    },
    {
        name: "P/PA",
        desc: "P/PA"
    },
    {
        name: "Game Wins",
        desc: "Game Wins"
    },
    {
        name: "Game Losses",
        desc: "Game Losses"
    },
    {
        name: "Win %",
        desc: "Win %"
    },
    {
        name: "10-0",
        desc: "10-0"
    },
    {
        name: "DBRO",
        desc: "DBRO"
    },
    {
        name: "B/R",
        desc: "B/R"
    },
    {
        name: "8BB",
        desc: "8BB"
    },
    {
        name: "8BB/S",
        desc: "8BB/S"
    },
    {
        name: "Early 8",
        desc: "Early 8"
    },
    {
        name: "S8",
        desc: "S8"
    },
    {
        name: "8WP",
        desc: "8WP"
    },
    {
        name: "CtC",
        desc: "CtC"
    },
    {
        name: "Match Wins",
        desc: "Match Wins"
    },
    {
        name: "Match Losses",
        desc: "Match Losses"
    },
    {
        name: "Match Winning %",
        desc: "Match Winning %"
    },
    {
        name: "Sweep",
        desc: "Sweep"
    },
    {
        name: "W/S D",
        desc: "W/S D"
    },
    {
        name: "W/S L",
        desc: "W/S L"
    },
    {
        name: "MA",
        desc: "MA"
    },
    {
        name: "O MA",
        desc: "O MA"
    },
    {
        name: "AT MA",
        desc: "AT MA"
    },
    {
        name: "MIP",
        desc: "MIP"
    },
    {
        name: "Games Broke",
        desc: "Games Broke"
    },
    {
        name: "Games Racked",
        desc: "Games Racked"
    },
    {
        name: "M",
        desc: "M"
    },
    
    
]
const Championship = () => {
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
        <div className="flex flex-col w-full gap-3  md:gap-6">
        <PageHeader heading={"Summer 2024"} />

            <img src={banner} className=" w-full md:w-2/3 mx-auto" />

            

           
            <DividingHeader
              header={"Date & Location"}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 md:gap-12">
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex justify-center items-center bg-blue py-4 text-white text-2xl">
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="flex-1 flex justify-center py-6  flex-col  items-center">
                <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                May 4, 2009
                  </h2>
                 
                </div>
              </div>
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
              <div className="w-full flex justify-center items-center bg-blue py-4 text-white text-2xl">
              <FontAwesomeIcon icon={faMapPin} />
                </div>
                <div className="flex-1 flex justify-center py-6 gap-2 flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-blue">
                  Mill's Modern Social
                  </h3>
                  <p className="text-slate-600 text-center font-semibold">
                    The Home of the AZPL State Championships!
                  </p>
                  <p className="text-slate-600 text-sm font-semibold">
                    7012 E Hampton Rd, Mesa
                  </p>
                </div>
              </div>
            </div>
           
            <DividingHeader header={"Matches"}/>
            <h3 className="text-center w-full text-blue text-xl md:text-2xl font-semibold">Finals</h3>
            <MatchResults matches={matches.slice(0,1)}/>
            <h3 className="text-center w-full text-blue text-xl md:text-2xl font-semibold">Semi Finals</h3>
            <MatchResults matches={matches.slice(0,2)}/>
            <h3 className="text-center w-full text-blue text-xl md:text-2xl font-semibold">Quarter Finals</h3>
            <MatchResults matches={matches}/>
            <DividingHeader header={"Players"}/>
            <h3 className="text-center w-full text-blue text-xl md:text-2xl font-semibold">Division 1</h3>
            <PlayersShowcase players={players} />
            <h3 className="text-center w-full text-blue text-xl md:text-2xl font-semibold">Division 2</h3>
            <PlayersShowcase players={players} />
            <DividingHeader header={"Teams"}/>
            <TeamsShowcase teams={teams}/>
            <DividingHeader header={"EVENT PICS"} />
                <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="w-full h-full flex justify-center items-center rounded overflow-hidden">
                    <img
                      src={eventPicPlaceholder}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center items-center rounded overflow-hidden">
                    <img
                      src={eventPicPlaceholder}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center items-center rounded overflow-hidden">
                    <img
                      src={eventPicPlaceholder}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
            <DividingHeader header={"Leaders"}/>
            <Table tableHeaders={PLAYER_HEADERS} data={playerData}/>
            <DividingHeader header={"Players of the Week - Men"}/>
            <Table tableHeaders={PLAYER_HEADERS} data={playerData}/>
            <DividingHeader header={"Players of the Week - Women"}/>
            <Table tableHeaders={PLAYER_HEADERS} data={playerData}/>
            <DividingHeader header={"Championship Leaders"}/>
            <Leaders leaders={leaders}/>
            <DividingHeader header={"Top Rookie Men & Women"}/>
            <Table tableHeaders={PLAYER_HEADERS} data={playerData}/>
            <DividingHeader header={"Player Stats Session"}/>
            <Table tableHeaders={PLAYER_HEADERS} data={playerData}/>
            <DividingHeader header={"Women of the AZPL"}/>
            <Table tableHeaders={PLAYER_HEADERS} data={playerData}/>
            <DividingHeader header={"Top 10 of Championship"}/>
            <Table tableHeaders={PLAYER_HEADERS} data={playerData}/>
   



            
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Championship;
