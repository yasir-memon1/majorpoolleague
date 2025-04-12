import { Link } from "react-router-dom";

const PlayersShowcase = ({players, ally, opponent}) => {
    const totalTeams = players.length;
  const baseColumnSize = Math.floor(totalTeams / 3);
  const remainder = totalTeams % 3;

  const col1Size = baseColumnSize + (remainder >= 1 ? 1 : 0);
  const col2Size = baseColumnSize + (remainder === 2 ? 1 : 0);
  const col3Size = baseColumnSize;
  const column1 = players.slice(0, col1Size);
  const column2 = players.slice(col1Size, col1Size + col2Size);
  const column3 = players.slice(col1Size + col2Size);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              <ul className="col-span-1 px-4 gap-2 md:gap-4">
                {column1.map((player, index) => (
                  <div
                    key={index}
                    className={`${ (index !== 0) && "border-t-[1px] mt-4" } ${player.mvp && "border-blue border-2 border-t-4"} px-2 py-6 md:px-4 md:py-4  gap-4 relative  font-semibold text-base text-gray-700  flex justify-center items-center`}
                  >
                    {
                      player.mvp && <div className="absolute w-full top-0 text-center font-bold text-base flex justify-center items-center  md:text-lg  ">
                      <h3 className="bg-blue text-white w-max mx-auto px-4 rounded-b-lg flex justify-center items-center pb-1 ">MVP</h3>

                    </div>
                    }
                    <div className="md:w-20 md:h-20 w-16 h-16 rounded-full overflow-hidden">
                    <img className="object-cover" src={player.image}/>
                    </div>
                    <div className="flex flex-1 flex-col">
                    <Link to={(!ally && !opponent) ? "/player/name" : `/head-to-head/${ally}/${opponent}`} className="text-lg md:text-xl  hover:text-blue duration-200  ">{player.name}</Link>
                    <p className="text-base leading-none  text-gray-500 duration-200  ">{player.team}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img src={player.team_image} className="object-cover"/>
                    </div>

                  </div>
                ))}
              </ul>
              <ul className="col-span-1 px-4 gap-2 md:gap-4">
                {column2.map((player, index) => (
                  <li
                    key={index}
                    className={`${ (index !== 0) && "border-t-[1px] mt-4" } ${player.mvp && "border-blue border-2 border-t-4"} px-2 py-6 md:px-4 md:py-4 gap-4  font-semibold text-base text-gray-700  flex justify-center items-center`}
                  >
                    {
                      player.mvp && <div className="absolute w-full top-0 text-center font-bold text-base flex justify-center items-center  md:text-lg  ">
                      <h3 className="bg-blue text-white w-max mx-auto px-4 rounded-b-lg flex justify-center items-center pb-1 ">MVP</h3>

                    </div>
                    }
                    <div className="md:w-20 md:h-20 w-16 h-16 rounded-full overflow-hidden">
                    <img className="object-cover" src={player.image}/>
                    </div>
                    <div className="flex flex-1 flex-col">
                    <Link to={(!ally && !opponent) ? "/player/name" : `/head-to-head/${ally}/${opponent}`} className="text-lg md:text-xl  hover:text-blue duration-200  ">{player.name}</Link>
                    <p className="text-base leading-none  text-gray-500 duration-200  ">{player.team}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img src={player.team_image} className="object-cover"/>
                    </div>

                  </li>
                ))}
              </ul>
              <ul className="col-span-1 px-4 gap-2 md:gap-4">
                {column3.map((player, index) => (
                  <li
                    key={index}
                    className={`${ (index !== 0) && "border-t-[1px] mt-4" }  ${player.mvp && "border-blue border-2 border-t-4"} px-2 py-6 md:px-4 md:py-4 gap-4  font-semibold text-base text-gray-700  flex justify-center items-center`}
                  >
                    {
                      player.mvp && <div className="absolute w-full top-0 text-center font-bold text-base flex justify-center items-center  md:text-lg  ">
                      <h3 className="bg-blue text-white w-max mx-auto px-4 rounded-b-lg flex justify-center items-center pb-1 ">MVP</h3>

                    </div>
                    }
                    <div className="md:w-20 md:h-20 w-16 h-16 rounded-full overflow-hidden">
                    <img className="object-cover" src={player.image}/>
                    </div>
                    <div className="flex flex-1 flex-col">
                    <Link to={(!ally && !opponent) ? "/player/name" : `/head-to-head/${ally}/${opponent}`} className="text-lg md:text-xl hover:text-blue duration-200  ">{player.name}</Link>
                    <p className="text-base leading-none  text-gray-500 duration-200  ">{player.team}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full overflow-hidden">
                        <img src={player.team_image} className="object-cover"/>
                    </div>

                  </li>
                ))}
              </ul>
              
              
            </div>
    )
};

export default PlayersShowcase