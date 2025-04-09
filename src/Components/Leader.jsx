import { Link } from "react-router-dom"
import DividingHeader from "../UI/DividingHeader"

const LeaderBox = ({scoring_name, score, image, name})=>{
    return(<div className="flex w-full justify-center items-center px-8 py-4 gap-4 text-gay-600 border border-gray-300">
        <h2 className="text-blue text-xl font-semibold flex-1 border-r border-gray-300 h-full flex justify-start items-center">{scoring_name}</h2>
        <h3 className="text-xl font-semibold border-r border-gray-300 h-full flex justify-start items-center pr-4">{score}</h3>
        <div className="flex flex-row flex-1 justify-center items-center gap-4">
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
        </div>
      </div>)
}
const Leader = ({leader, title})=>{
    return(
        <div className="flex flex-col gap-2">
        <DividingHeader header={title}/>
      <LeaderBox scoring_name={"PR"} score={leader.pr.score} image={leader.pr.image} name={leader.pr.name}/>
      <LeaderBox scoring_name={"Points"} score={leader.points.score} image={leader.points.image} name={leader.points.name}/>
      <LeaderBox scoring_name={"Wins"} score={leader.win.score} image={leader.win.image} name={leader.win.name}/>
      <LeaderBox scoring_name={"30s"} score={leader["30s"].score} image={leader["30s"].image} name={leader["30s"].name}/>
      <LeaderBox scoring_name={"8 Ball Break"} score={leader["8bb"].score} image={leader["8bb"].image} name={leader["8bb"].name}/>
      <LeaderBox scoring_name={"10-0s"} score={leader["10-0s"].score} image={leader["10-0s"].image} name={leader["10-0s"].name}/>
      <LeaderBox scoring_name={"MA"} score={leader["ma"].score} image={leader["ma"].image} name={leader["ma"].name}/>
     
      
      
      
      
      
      
      
      </div>
    )
}
export default Leader