const LeaguesShowcase = ({leagues}) => {
    const totalTeams = leagues.length;
  const baseColumnSize = Math.floor(totalTeams / 3);
  const remainder = totalTeams % 3;

  const col1Size = baseColumnSize + (remainder >= 1 ? 1 : 0);
  const col2Size = baseColumnSize + (remainder === 2 ? 1 : 0);
  const col3Size = baseColumnSize;
  const column1 = leagues.slice(0, col1Size);
  const column2 = leagues.slice(col1Size, col1Size + col2Size);
  const column3 = leagues.slice(col1Size + col2Size);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ul className="col-span-1 px-4 gap-4">
                {column1.map((league, index) => (
                  <li
                    key={index}
                    className={`${ (index !== 0) && "border-t-[1px]" } py-4  font-semibold text-base text-gray-700  flex flex-col justify-center items-center`}
                  >
                    <img className="w-full" src={league.image}/>
                    <h3 className="text-xl  hover:text-blue duration-200 my-2 ">{league.name}</h3>
                    <ul className="w-full">
                      {league.teams.map((team, index) => (
                        <li key={index} className="text-sm mb-1 text-gray-700 font-normal">
                          {team}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <ul className="col-span-1 px-4 gap-4">
                {column2.map((league, index) => (
                  <li
                    key={index}
                    className={`${ (index !== 0) && "border-t-[1px]" } py-4  font-semibold text-base text-gray-700  flex flex-col justify-center items-center`}
                  >
                    <img className="w-full" src={league.image}/>
                    <h3 className="text-xl  hover:text-blue duration-200 my-2 ">{league.name}</h3>
                    <ul className="w-full">
                      {league.teams.map((team, index) => (
                        <li key={index} className="text-sm mb-1 text-gray-700 font-normal">
                          {team}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <ul className="col-span-1 px-4 gap-4">
                {column3.map((league, index) => (
                  <li
                    key={index}
                    className={`${ (index !== 0) && "border-t-[1px]" } py-4  font-semibold text-base text-gray-700  flex flex-col justify-center items-center`}
                  >
                    <img className="w-full" src={league.image}/>
                    <h3 className="text-xl  hover:text-blue duration-200 my-2 ">{league.name}</h3>
                    <ul className="w-full">
                      {league.teams.map((team, index) => (
                        <li key={index} className="text-sm mb-1 text-gray-700 font-normal">
                          {team}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              
            </div>
    )
};

export default LeaguesShowcase