import { useState } from "react";
import { Link } from "react-router-dom";
import MatchView from "./MatchView";

const MatchResults = ({ matches }) => {
  const [isViewingMatch, setIsViewingMatch] = useState(false)
  const closePopup = ()=>{
    setIsViewingMatch(false)
  }
  return (
    <div className="grid grid-cols-1  w-full   gap-4">
      {isViewingMatch && <MatchView close={closePopup} match={matches[0]}/>}
      {matches.map((match, index) => (
        <div className="flex justify-center group items-center w-full flex-1 gap-0" onClick={() => setIsViewingMatch(true)}>
          <div
            key={index}
            className={`
             py-4 gap-4 flex-1 border px-8 group-hover:border-blue duration-200 font-semibold text-base text-gray-600  flex justify-center items-center`}
          >
            {match.team1.score && match.team2.score && (
              <div
                className={`text-xl font-semibold  ${
                  match.team1.score > match.team2.score
                    ? "text-blue"
                    : "text-red"
                }`}
              >
                {match.team1.score > match.team2.score ? "W" : "L"}
              </div>
            )}
            <div className="flex flex-row flex-1 justify-center items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img className="object-cover" src={match.team1.image} />
              </div>
              <div className="flex flex-1 flex-col">
                <Link
                  to={""}
                  className="text-xl leading-none  hover:text-blue duration-200  "
                >
                  {match.team1.name}
                </Link>
                {/* <p className="text-base  text-gray-500 duration-200  ">
                {player.team}
              </p> */}
              </div>
            </div>
            <div
              className={`text-xl font-semibold  ${
                match.team1.score > match.team2.score ? "text-blue" : "text-red"
              }`}
            >
              {(match.team1.score && match.team2.score) && match.team1.score}
            </div>
          </div>
          <div className="w-max ">
            
              <span className="h-[1px] bg-gray-300 w-8 block group-hover:bg-blue duration-200 relative text-gray-300 group-hover:text-blue"><p className="absolute bg-white bottom-1/2 leading-[0] left-1/2 h-[5px] -translate-x-1/2 translate-y-1/2">vs</p></span>
          </div>
          <div
            key={index}
            className={` py-4 gap-4 flex-1 px-8 border group-hover:border-blue duration-200  font-semibold text-base text-gray-600  flex flex-row-reverse justify-center items-center`}
          >
                    {match.team1.score && match.team2.score && (

            <div
              className={`text-xl font-semibold  ${
                match.team2.score > match.team1.score ? "text-blue" : "text-red"
              }`}
            >
              {match.team2.score > match.team1.score ? "W" : "L"}
            </div>
      )}
            <div className="flex flex-row-reverse flex-1 justify-center items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img className="object-cover" src={match.team2.image} />
              </div>
              <div className="flex flex-1 flex-col">
                <Link
                  to={""}
                  className="text-xl leading-none text-right  hover:text-blue duration-200  "
                >
                  {match.team2.name}
                </Link>
                {/* <p className="text-base  text-gray-500 duration-200  ">
                {player.team}
              </p> */}
              </div>
            </div>
            {match.team1.score && match.team2.score && (

            <div
              className={`text-xl font-semibold  ${
                match.team2.score > match.team1.score ? "text-blue" : "text-red"
              }`}
            >
              {match.team2.score}
            </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchResults;
