import { Link } from "react-router-dom"
import DividingHeader from "../UI/DividingHeader"

const LeaderBox = ({scoring_name, score, image, name, position})=>{
    return(<div className="flex w-full h-[74px] justify-center items-center px-8 py-2 gap-4 text-gay-600 border border-gray-300">
        <h2 className="text-blue text-xl font-semibold flex-1 border-r border-gray-300 h-full flex justify-start items-center">{scoring_name}</h2>
        <h3 className="text-xl font-semibold border-r border-gray-300 h-full flex justify-start items-center pr-4">{score}</h3>
        {
          !position ? <div className="flex flex-row flex-1 justify-center items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img className="object-cover" src={image} />
          </div>
          <div className="flex flex-1 flex-col">
            <Link to={""} className="text-xl  hover:text-blue duration-200  ">
              {name}
            </Link>
            {/* <p className="text-base  text-gray-500 duration-200  ">
                {player.team}
              </p> */}
          </div>
        </div> :         <h3 className="text-xl font-semibold h-full flex justify-start items-center ">#{position}</h3>

        }
      </div>)
}
const Leader = ({leader, title})=>{
    return(
        <div className="flex flex-col gap-2">
        <DividingHeader header={title}/>
      <LeaderBox scoring_name={"PR"} score={leader.pr.score} image={leader.pr.image} name={leader.pr.name} position={leader?.pr?.position}/>
      <LeaderBox scoring_name={"Points"} score={leader.points.score} image={leader.points.image} name={leader.points.name} position={leader?.points?.position}/>
      <LeaderBox scoring_name={"Scoring %"} score={leader.scoringPct.score} image={leader.scoringPct.image} name={leader.scoringPct.name} position={leader?.scoringPct?.position}/>
      <LeaderBox scoring_name={"P/PA"} score={leader["ppa"].score} image={leader["ppa"].image} name={leader["ppa"].name} position={leader?.ppa?.position}/>
      <LeaderBox scoring_name={"Wins"} score={leader["wins"].score} image={leader["wins"].image} name={leader["wins"].name} position={leader?.wins?.position}/>
      <LeaderBox scoring_name={"Win %"} score={leader["winPct"].score} image={leader["winPct"].image} name={leader["winPct"].name} position={leader?.winPct?.position}/>
      <LeaderBox scoring_name={"10-0"} score={leader["10-0"].score} image={leader["10-0"].image} name={leader["10-0"].name} position={leader?.["10-0"]?.position}/>
      <LeaderBox scoring_name={"DBRO"} score={leader["dbro"].score} image={leader["dbro"].image} name={leader["dbro"].name} position={leader?.dbro?.position}/>
      <LeaderBox scoring_name={"B/R"} score={leader["b/r"].score} image={leader["b/r"].image} name={leader["b/r"].name} position={leader?.["b/r"]?.position}/>
      <LeaderBox scoring_name={"8BB"} score={leader["8bb"].score} image={leader["8bb"].image} name={leader["ma"].name} position={leader?.["8bb"]?.position}/>
      <LeaderBox scoring_name={"CtC"} score={leader["ctc"].score} image={leader["ctc"].image} name={leader["ctc"].name} position={leader?.["ctc"]?.position}/>
      <LeaderBox scoring_name={"Match Wins"} score={leader["matchWins"].score} image={leader["matchWins"].image} name={leader["matchWins"].name} position={leader?.matchWins?.position}/>
      <LeaderBox scoring_name={"Match Winning %"} score={leader["matchWinPerc"].score} image={leader["matchWinPerc"].image} name={leader["matchWinPerc"].name} position={leader?.matchWinPerc?.position}/>
      <LeaderBox scoring_name={"Sweep"} score={leader["sweep"].score} image={leader["sweep"].image} name={leader["sweep"].name} position={leader?.sweep?.position}/>
      <LeaderBox scoring_name={"W/S/L"} score={leader["wsl"].score} image={leader["wsl"].image} name={leader["wsl"].name} position={leader?.wsl?.position}/>
      <LeaderBox scoring_name={"MA"} score={leader["ma"].score} image={leader["ma"].image} name={leader["ma"].name} position={leader?.ma?.position}/>
      <LeaderBox scoring_name={"O MA"} score={leader["oma"].score} image={leader["oma"].image} name={leader["oma"].name} position={leader?.oma?.position}/>
      <LeaderBox scoring_name={"MIP"} score={leader["mip"].score} image={leader["mip"].image} name={leader["mip"].name} position={leader?.mip?.position}/>
      <LeaderBox scoring_name={"Games Broke"} score={leader["gamesBroke"].score} image={leader["gamesBroke"].image} name={leader["gamesBroke"].name} position={leader?.gamesBroke?.position}/>
      <LeaderBox scoring_name={"Games Racked"} score={leader["gamesRacked"].score} image={leader["gamesRacked"].image} name={leader["gamesRacked"].name} position={leader?.gamesRacked?.position}/>
     
      
      
      
      
      
      
      
      </div>
    )
}
export default Leader