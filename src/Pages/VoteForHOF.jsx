import { Link } from "react-router-dom";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import placeHolder from "../assets/player-placeholder.png";
import HallOfFamer from "../Components/HallOfFamer";
import PageHeader from "../UI/PageHeader";
import MailInput from "../UI/MailInput";
import { useState } from "react";

const players = [
    { id: 1, name: "Michael Kerin", description: "Top 8-ball player", team: "WinSum" },
    { id: 2, name: "Ryan Fedora", description: "Great 9-ball player", team: "Black Shirts" },
    { id: 3, name: "Jane Smith", description: "Scotch doubles expert", team: "Blue Team" },
    { id: 4, name: "Michael", description: "Top 8-ball player", team: "WinSum" },
    { id: 5, name: "Ryan", description: "Great 9-ball player", team: "Black Shirts" },
    { id: 6, name: "Jane", description: "Scotch doubles expert", team: "Blue Team" },
    { id: 7, name: "Kerin", description: "Top 8-ball player", team: "WinSum" },
    { id: 8, name: "Fedora", description: "Great 9-ball player", team: "Black Shirts" },
    { id: 9, name: "Smith", description: "Scotch doubles expert", team: "Blue Team" },
  ];

const VoteForHOF = () => {
    const [checkedPlayers, setCheckedPlayers] = useState([]);
    const handleCheckboxChange = (player) => {
        setCheckedPlayers((prev) => {
          if (prev.some((p) => p.id === player.id)) {
            // If already checked, remove it
            return prev.filter((p) => p.id !== player.id);
          } else {
            // If not checked, add it with relevant data
            return [...prev, { id: player.id, name: player.name, team: player.team }];
          }

        });
      };
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900 flex justify-start items-center flex-col gap-10">
          <div className="text-left flex flex-col gap-4">
            <div>
              <PageHeader heading={"Vote for Hall Of Fame"} />
            </div>
            <p className="text-gray-500 text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              repellat. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Accusamus voluptatibus vero molestiae, doloribus architecto
              natus omnis libero eius? Ducimus beatae quos eligendi amet
              voluptatem quas earum minima corrupti voluptatum incidunt? Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
              itaque? Animi earum praesentium excepturi? Odit ab, corrupti
              aliquid eaque nobis odio, optio accusamus exercitationem omnis
              nulla harum in? Vitae, reiciendis! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nulla molestiae quod reprehenderit
              ullam doloribus nesciunt, obcaecati, recusandae nostrum eveniet
              aut at totam ad, esse magnam beatae! Et earum explicabo quis?
            </p>
          </div>
          <MailInput />
          <div className="flex flex-col justify-start items-center w-full gap-4">
            <DividingHeader header={"INDUCTEES"} />
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  w-full border-[1px] border-gray-200">
        {players.map((player) => (
          <li key={player.id}>
            <input
              type="checkbox"
              id={`player-${player.id}`}
              value=""
              className="hidden"
              checked={checkedPlayers.some((p) => p.id === player.id)}
              onChange={() => handleCheckboxChange(player)}
            />
            <label
              htmlFor={`player-${player.id}`}
              className={`${checkedPlayers.some((p) => (p.id === player.id)) ? "bg-blue hover:bg-[#1094F9] text-white hover:text-gray-200" : "bg:white hover:bg-gray-50  text-gray-500 hover:text-gray-600"} inline-flex duration-200 group items-center justify-between w-full p-5   border-2 border-gray-200  cursor-pointer    hover:text-gray-600   hover:bg-gray-50 `}
            >
              <div className="flex gap-4 justify-center items-center">
                <div className="w-20 h-20 flex justify-center items-center overflow-hidden rounded-full">
                <img src={placeHolder}/>
                </div>
                <div>
                <div className={`w-full  text-lg duration-200 font-semibold ${checkedPlayers.some((p) => (p.id === player.id)) ? "text-white" : "text-blue"}`}>{player.name}</div>
                <div className="w-full  text-base font-semibold">{player.team}</div>
                <div className="w-full text-sm">{player.description}</div>
                </div>
              </div>
            </label>
          </li>
        ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start items-center w-full gap-4">
            <Link
              to="/vote-for-hof"
              className=" text-lg text-white bg-blue px-4 py-2 flex justify-center  items-center rounded-md border-2 border-blue mb-4  hover:text-blue hover:bg-white duration-200 font-semibold"
            >
              Cast Vote
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default VoteForHOF;
