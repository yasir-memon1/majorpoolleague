import { Link } from "react-router-dom";
import DividingHeader from "../UI/DividingHeader";
import Leader from "./Leader";

const Leaders = ({ leaders, title1="Men", title2="Women" }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 md:gap-12">
      <Leader leader={leaders.men} title={title1}/>
      <Leader leader={leaders.women} title={title2}/>
    </div>
  );
};
export default Leaders;
