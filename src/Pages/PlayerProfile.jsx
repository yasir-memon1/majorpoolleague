import Accolades from "../Components/Accolades";
import Leaders from "../Components/Leaders";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import Table from "../UI/Table";
import coverPlaceholder from "../assets/league-placeholder.png";
import pfpPlaceholder from "../assets/player-placeholder.png";
import {Link} from "react-router-dom"


const Headers = [
  {
      name: "Player Name",
  },
  {
      name: "V",
      desc: "Victories"
  },
  {
      name: "PR",
      desc: "PR"
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
      name: "Scoring%",
      desc: "Score"
  },
  {
      name: "P/PA",
      desc: "P/PA"
  },
  {
      name: "W",
      desc: "W"
  },
  {
      name: "L",
      desc: "L"
  },
  {
      name: "Win %",
      desc: "Win %"
  },
  {
      name: "30s",
      desc: "30s"
  },
  {
      name: "8 Ball Break",
      desc: "8 Ball Break"
  },
  {
      name: "Break run",
      desc: "Break run"
  },
  {
      name: "10-0s",
      desc: "10-0s"
  },
  {
      name: "Win Strk",
      desc: "Win Strk"
  },
  {
      name: "MA",
      desc: "MA"
  },
  {
      name: "M",
      desc: "M"
  },
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


const PlayerData = [
  { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
  { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
  { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
  { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
  { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
  { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
  { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
  { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
]
const PlayerProfile = () => {
  return (
    <div className="bg-gray-100 py-[66px] min-h-screen">
      <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900 flex flex-col justify-start gap-4">
        <div className="h-[25vh] w-full overflow-hidden flex items-center justify-center">
          <img src={coverPlaceholder} alt="" className="object-cover" />
        </div>

        <div className="flex justify-start items-center px-8 gap-4">
          <div className="w-36 h-36 rounded-full flex justify-center items-center border-2 overflow-hidden border-blue">
            <img src={pfpPlaceholder} />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">Player Name</h1>
            <p className="text-gray-500 text-base">Team Name</p>
          </div>
          <div>
            <Link to={"/head-to-head/player"} className="bg-blue text-white px-4 py-2 rounded-lg text-base">
              Head to Head
            </Link>
          </div>
        </div>

        <div className="flex justify-start items-center px-12 gap-4">
          <ul>
            <li><span className="font-semibold text-gray-900">Player's Full Name</span></li>
            <li><span className="font-semibold text-gray-900">Born:</span> May 4th, 2002</li>
            <li><span className="font-semibold text-gray-900">Status:</span> Active</li>
            <li><span className="font-semibold text-gray-900">Bio:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam vero eaque ducimus, illum esse quisquam est rerum saepe ut tenetur magnam impedit iusto cupiditate harum velit voluptas atque animi deserunt.</li>
          </ul>
        </div>
        <div className="mt-4 px-12">
        <DividingHeader header={"Career Totals"}/>
        <Table tableHeaders={Headers} data={PlayerData}/>
        <DividingHeader header={"All Time Totals"}/>
        <Table tableHeaders={Headers} data={PlayerData}/>
        <DividingHeader header={"8-Ball Stats"}/>
        <Table tableHeaders={Headers} data={PlayerData}/>
        <DividingHeader header={"9-Ball Stats"}/>
        <Table tableHeaders={Headers} data={PlayerData}/>
        <DividingHeader header={"10-Ball Stats"}/>
        <Table tableHeaders={Headers} data={PlayerData}/>
        <DividingHeader header={"Scotch Stats"}/>
        <Table tableHeaders={Headers} data={PlayerData}/>
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
