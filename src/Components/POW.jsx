import { Link } from "react-router-dom";
import DividingHeader from "../UI/DividingHeader";
import Leader from "./Leader";
import PlayersOfWeek from "./PlayersOfWeek";



const POW = ({ pow }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-12">
      <PlayersOfWeek pow={pow.men} title={"Men"}/>
      <PlayersOfWeek pow={pow.women} title={"Women"}/>
    </div>
  );
};
export default POW;
