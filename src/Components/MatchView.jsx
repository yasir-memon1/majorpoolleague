import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import placeHolder from "../assets/player-placeholder.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Table from "../UI/Table";

const TEAM_HEADERS = [
  {
    name: "Team",
  },
  {
    name: "Games",
    desc: "Games",
  },
  {
    name: "PR",
    desc: "PR",
  },
  {
    name: "PTS",
    desc: "Points",
  },
  {
    name: "UEW",
    desc: "Unearned Wins",
  },
  {
    name: "DB/RO",
    desc: "DB/RO",
  },
  {
    name: "B&R",
    desc: "B&R",
  },
  {
    name: "8BB",
    desc: "8BB",
  },
  {
    name: "CC",
    desc: "CC",
  },
  {
    name: "W",
    desc: "Wins",
  },
  {
    name: "L",
    desc: "Losses",
  },
  {
    name: "W%",
    desc: "Win %",
  },
  {
    name: "EWA",
    desc: "Earned Win Avg",
  },
  {
    name: "PA",
    desc: "PA",
  },
  {
    name: "PTS/PA",
    desc: "PTS/PA",
  },
  {
    name: "4f4",
    desc: "4f4",
  },
  {
    name: "5f5",
    desc: "5f5",
  },
  {
    name: "PS",
    desc: "Points Streak",
  },
  {
    name: "WS",
    desc: "Win Streak",
  },
  {
    name: "AVG",
    desc: "Scoring Avg",
  },
  {
    name: "GA",
    desc: "Game Avg",
  },
  {
    name: "O GA",
    desc: "Opponents",
  },
  {
    name: "MA",
    desc: "MA",
  },
  {
    name: "O MA",
    desc: "O MA",
  },
  {
    name: "MIP",
    desc: "MIP",
  },
];

const playerData = [
  {
    name: "John Doe",
    v: 10,
    pr: 5,
    points: 50,
    pa: 20,
    scoring: "75%",
    ppa: 2.5,
    w: 8,
    l: 2,
    winpct: "80%",
    thirties: 3,
    eightball: 1,
    breakrun: 2,
    tenzeros: 1,
    winstrk: 5,
    ma: 15,
    m: 10,
  },
  {
    name: "Jane Smith",
    v: 8,
    pr: 4,
    points: 40,
    pa: 18,
    scoring: "70%",
    ppa: 2.2,
    w: 6,
    l: 3,
    winpct: "66%",
    thirties: 2,
    eightball: 0,
    breakrun: 1,
    tenzeros: 0,
    winstrk: 3,
    ma: 12,
    m: 8,
  },
  {
    name: "John Doe",
    v: 10,
    pr: 5,
    points: 50,
    pa: 20,
    scoring: "75%",
    ppa: 2.5,
    w: 8,
    l: 2,
    winpct: "80%",
    thirties: 3,
    eightball: 1,
    breakrun: 2,
    tenzeros: 1,
    winstrk: 5,
    ma: 15,
    m: 10,
  },
  {
    name: "Jane Smith",
    v: 8,
    pr: 4,
    points: 40,
    pa: 18,
    scoring: "70%",
    ppa: 2.2,
    w: 6,
    l: 3,
    winpct: "66%",
    thirties: 2,
    eightball: 0,
    breakrun: 1,
    tenzeros: 0,
    winstrk: 3,
    ma: 12,
    m: 8,
  },
  {
    name: "John Doe",
    v: 10,
    pr: 5,
    points: 50,
    pa: 20,
    scoring: "75%",
    ppa: 2.5,
    w: 8,
    l: 2,
    winpct: "80%",
    thirties: 3,
    eightball: 1,
    breakrun: 2,
    tenzeros: 1,
    winstrk: 5,
    ma: 15,
    m: 10,
  },
  {
    name: "Jane Smith",
    v: 8,
    pr: 4,
    points: 40,
    pa: 18,
    scoring: "70%",
    ppa: 2.2,
    w: 6,
    l: 3,
    winpct: "66%",
    thirties: 2,
    eightball: 0,
    breakrun: 1,
    tenzeros: 0,
    winstrk: 3,
    ma: 12,
    m: 8,
  },
  {
    name: "John Doe",
    v: 10,
    pr: 5,
    points: 50,
    pa: 20,
    scoring: "75%",
    ppa: 2.5,
    w: 8,
    l: 2,
    winpct: "80%",
    thirties: 3,
    eightball: 1,
    breakrun: 2,
    tenzeros: 1,
    winstrk: 5,
    ma: 15,
    m: 10,
  },
  {
    name: "Jane Smith",
    v: 8,
    pr: 4,
    points: 40,
    pa: 18,
    scoring: "70%",
    ppa: 2.2,
    w: 6,
    l: 3,
    winpct: "66%",
    thirties: 2,
    eightball: 0,
    breakrun: 1,
    tenzeros: 0,
    winstrk: 3,
    ma: 12,
    m: 8,
  },
];

const MatchView = ({ close }) => {
  return (
    <div className="fixed h-full w-full pt-[72px]  z-[100] top-0 left-0   flex justify-center items-center">
      <div
        className="w-full h-full absolute top-0 left-0  backdrop-brightness-75"
        onClick={close}
      ></div>
      <div className="h-full md:h-[80vh] flex justify-start items-center flex-col overflow-hidden  bg-white z-[100] border shadow-xl border-gray-300 rounded max-w-7xl">
        <div className="bg-blue relative font-semibold text-xl py-4 w-full flex justify-center items-center text-white gap-5">
          <h3>Team 1</h3>
          <span className="text-gray-300 text-base">vs</span>
          <h3>Team 2</h3>
          <div
            onClick={close}
            className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer group border-2 border-transparent hover:border-gray-200 duration-200 px-2 rounded-full"
          >
            <FontAwesomeIcon
              icon={faXmark}
              className="group-hover:scale-110 duration-200"
            />
          </div>
        </div>
        <div className="flex flex-col overflow-scroll justify-start md:justify-center  items-center md:flex-row h-full w-full ">
          <div className="flex flex-col gap-4 justify-center items-center h-full py-6 px-4 md:border-r border-gray-300">
            <h3 className="text-base md:text-2xl text-wrap leading-none font-semibold text-blue">
              Team 1
            </h3>
            <h3 className="text-xl md:text-3xl text-wrap leading-none font-semibold text-green-700">
              67
            </h3>

            <div className="flex justify-center items-center gap-4 flex-1 flex-row md:flex-col">
              <div className="md:w-32 w-24 aspect-square rounded overflow-hidden flex justify-center items-center">
                <img src={placeHolder} />
              </div>
              <div className="md:w-32 w-24 aspect-square  rounded overflow-hidden flex justify-center items-center">
                <img src={placeHolder} />
              </div>
              <div className=" md:w-32 w-24 aspect-square  rounded overflow-hidden flex justify-center items-center">
                <img src={placeHolder} />
              </div>
            </div>
          </div>

          <div className="flex-1 w-full md:w-1/2 sm:my-10">
            <Table tableHeaders={TEAM_HEADERS} data={playerData} />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center h-full py-6 px-4 md:border-l border-gray-300">
            <h3 className="text-base md:text-2xl text-wrap leading-none font-semibold text-blue">
              Team 2
            </h3>
            <h3 className="textxl md:text-3xl text-wrap leading-none font-semibold text-red">
              33
            </h3>
            <div className="flex justify-center items-center flex-row md:flex-col gap-4 flex-1">
              <div className="md:w-32 w-24 aspect-square rounded overflow-hidden flex justify-center items-center">
                <img src={placeHolder} />
              </div>
              <div className="md:w-32 w-24 aspect-square  rounded overflow-hidden flex justify-center items-center">
                <img src={placeHolder} />
              </div>
              <div className=" md:w-32 w-24 aspect-square  rounded overflow-hidden flex justify-center items-center">
                <img src={placeHolder} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MatchView;
