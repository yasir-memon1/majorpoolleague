import { Link } from "react-router-dom"
import DividingHeader from "../UI/DividingHeader"

const POWBox = ({team,  image, name, position})=>{
    return(<div className="flex w-full h-[74px] justify-center items-center pr-8 py-2 gap-4 text-gay-600 border border-gray-300">
        <h2 className="text-blue text-xl font-semibold  border-r border-gray-300 px-4 w-16 h-14 flex justify-center items-center">#{position + 1}</h2>
        
        <div className="flex flex-row flex-1 justify-center items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img className="object-cover" src={image} />
          </div>
          <div className="flex flex-1 flex-col">
            <Link to={""} className="text-xl  hover:text-blue duration-200  ">
              {name}
            </Link>
             <p className="text-base  text-gray-500 duration-200  ">
                {team}
              </p> 
          </div>
        </div> 

        
      </div>)
}
const PlayersOfWeek = ({pow, title})=>{
    console.log(pow)
    return(
        <div className="flex flex-col gap-2">
            
        <DividingHeader header={title}/>
      {
        pow.map((player, index)=> {
            return <POWBox   image={player.image} name={player.name} team={player.team} position={index}/>

        })
      }
      
      
     
      
      
      
      
      
      
      
      </div>
    )
}
export default PlayersOfWeek