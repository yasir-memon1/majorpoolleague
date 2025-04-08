import { Link } from "react-router-dom";
import logo from "../assets/Logo2.jpg";
import Input from "../UI/Input";
import RegPage from "../UI/RegPage";
const LOLoginPage = () => {
  return (
    <RegPage>

          <div>
            <h3 className="font-semibold text-gray-600">Sign in</h3>
            <p className="text-gray-600 leading-snug">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque inventore reiciendis ipsum eos veritatis magnam, quas
              voluptates fuga sequi voluptas dolores iusto eaque perferendis
              modi ullam dolor tempora ducimus alias?
            </p>
          </div>

          <Input label={"Username"} type={"text"} placeholder={"Username"} />
          <Input label={"Password"} type={"password"} placeholder={"Password"} />

          <div className="flex gap-2 justify-start items-center">
          <input id="remember-me" type="checkbox"/>
          <label htmlFor="remember-me" className="text-gray-600 leading-tight text-sm">Remember me</label>
          </div>

          <div>
            <button className="bg-white font-semibold text-blue hover:bg-blue hover:text-white duration-200 py-2 rounded-sm w-full border-2 border-blue">
              Sign in
            </button>
          </div>
          <hr className="border-gray-300"/>
          <div>
            <p className="text-gray-600">Don't have an account? <Link className="text-blue" to="/signup">Sign up!</Link></p>
          </div>
    </RegPage>
  );
};
export default LOLoginPage;
