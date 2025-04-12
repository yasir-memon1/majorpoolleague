import { Link } from "react-router-dom";

const TeamsShowcase = ({teams}) => {
    const totalTeams = teams.length;
  const baseColumnSize = Math.floor(totalTeams / 3);
  const remainder = totalTeams % 3;

  const col1Size = baseColumnSize + (remainder >= 1 ? 1 : 0);
  const col2Size = baseColumnSize + (remainder === 2 ? 1 : 0);
  const col3Size = baseColumnSize;
  const column1 = teams.slice(0, col1Size);
  const column2 = teams.slice(col1Size, col1Size + col2Size);
  const column3 = teams.slice(col1Size + col2Size);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ul className="col-span-1 px-4 gap-2 md:gap-4">
                {column1.map((team, index) => (
                  <li
                    key={index}
                    className={`${ (index !== 0) && "mt-4" } border-[1px] py-4 px-4 gap-4  font-semibold text-base text-gray-700  flex justify-center items-center`}
                  >
                    <div className="md:w-20 md:h-20 w-16 h-16 rounded-full overflow-hidden">
                    <img className="object-cover" src={team.image}/>
                    </div>
                    <div className="flex flex-1 flex-col">
                    <Link  className="text-lg md:text-xl leading-tight  hover:text-blue duration-200  ">{team.name}</Link>
                    </div>
                   

                  </li>
                ))}
              </ul>
              <ul className="col-span-1 px-4 gap-2 md:gap-4">
                {column2.map((team, index) => (
                  <li
                    key={index}
                    className={`${ (index !== 0) && "mt-4" } border-[1px] py-4 px-4 gap-4  font-semibold text-base text-gray-700  flex justify-center items-center`}
                  >
                    <div className="md:w-20 md:h-20 w-16 h-16 rounded-full overflow-hidden">
                    <img className="object-cover" src={team.image}/>
                    </div>
                    <div className="flex flex-1 flex-col">
                    <Link  className="text-lg md:text-xl leading-tight  hover:text-blue duration-200  ">{team.name}</Link>
                    </div>
                    

                  </li>
                ))}
              </ul>
              <ul className="col-span-1 px-4 gap-2 md:gap-4">
                {column3.map((team, index) => (
                  <li
                    key={index}
                    className={`${ (index !== 0) && "mt-4" } border-[1px] py-4 px-4 gap-4  font-semibold text-base text-gray-700  flex justify-center items-center`}
                  >
                    <div className="md:w-20 md:h-20 w-16 h-16 rounded-full overflow-hidden">
                    <img className="object-cover" src={team.image}/>
                    </div>
                    <div className="flex flex-1 flex-col">
                    <Link  className="text-lg md:text-xl leading-tight  hover:text-blue duration-200  ">{team.name}</Link>
                    </div>
                   

                  </li>
                ))}
              </ul>
              
              
            </div>
    )
};

export default TeamsShowcase