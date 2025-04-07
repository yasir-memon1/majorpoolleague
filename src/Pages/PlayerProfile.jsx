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
        <DividingHeader header={"Stats"}/>
        <Table tableHeaders={Headers} data={PlayerData}/>
        </div>

        
      </div>
    </div>
  );
};
export default PlayerProfile;
