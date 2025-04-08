import { Link } from "react-router-dom";
import logo from "../assets/Logo2.jpg";
import Input from "../UI/Input";
const RegPage = ({children}) => {
  return (
    <div className="w-full h-full py-16  min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="max-w-md mx-auto bg-white border-[1px] mt-[72px] border-gray-300 flex-col  flex justify-center items-center rounded-sm">
        <div className="flex justify-center items-center py-4 gap-2 border-b-[1px] border-gray-300 w-full">
          <img src={logo} alt="" className=" h-8 mt-2" />
          <h1 className="text-5xl font-bold text-blue leading-tight">MLP</h1>
        </div>

        <div className="flex flex-col gap-8 px-12 py-8">
          {children}
        </div>
      </div>
    </div>
  );
};
export default RegPage;
