import { Link } from "react-router-dom";
import DividingHeader from "../UI/DividingHeader";
import Leader from "./Leader";

const Leaders = ({ leaders }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-12">
      <Leader leader={leaders.men} title={"Men"}/>
      <Leader leader={leaders.women} title={"Women"}/>
    </div>
  );
};
export default Leaders;
