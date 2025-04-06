import { Link } from "react-router-dom"

const LeagueSelector = ({selected})=>{
    return(
        <div className="flex justify-center items-center text-xl text-center   border-b-[1px] ">
              <Link to={"/leagues-by-geography"} className={`${selected === "geo" ? "border-blue " : "border-transparent hover:border-blue"} text-gray-900 flex-1 py-3 hover:text-blue border-b-4  cursor-pointer  duration-200 ease-in-out`}>
                <h2>Leagues By Geography</h2>
              </Link>
              <Link to={"/leagues-by-name"} className={`${selected === "name" ? "border-blue " : "border-transparent hover:border-blue"} text-gray-900 flex-1 py-3 hover:text-blue border-b-4  cursor-pointer  duration-200 ease-in-out`}>
              <h2>Leagues By Name</h2>
              </Link>
              <Link to={"/leagues-by-size"} className={`${selected === "size" ? "border-blue " : "border-transparent hover:border-blue"} text-gray-900 flex-1 py-3 hover:text-blue border-b-4  cursor-pointer  duration-200 ease-in-out`}>
              <h2>Leagues By Size</h2>
              </Link>
            </div>
    )
}
export default LeagueSelector