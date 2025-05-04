import { Link } from "react-router-dom";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";

const PlayerJoin = () => {
  return (
    <Page>
      <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
        <div className="flex flex-col w-full gap-3  md:gap-6">
          <DividingHeader header={"Join Now"} />
          <div className="flex justify-center items-start sm:flex-row flex-col md:ml-16 lg:ml-32 gap-5 md:gap-10 w-max">
          <Link to={"/policies"} className="text-xl md:text-2xl  font-semibold text-blue hover:underline underline-offset-8 duration-200">League Policies</Link>
          <Link to={"/rules"} className="text-xl md:text-2xl  font-semibold text-blue hover:underline underline-offset-8 duration-200">Rules</Link>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:px-32 md:px-16 px-4 ">
            <div className="flex flex-1 md:justify-start justify-center items-center ">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="fName"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  First Name
                </label>
                <div className="min-w-44    justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="text"
                    className="outline-none px-1 py-1 bg-transparent"
                    placeholder="First Name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="lName"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  Last Name
                </label>
                <div className="min-w-44   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="text"
                    className="outline-none px-1 py-1 bg-transparent"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:justify-end justify-center items-center">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="suffix"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  Suffix
                </label>
                <div className="min-w-44   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="text"
                    className="outline-none px-1 py-1 bg-transparent"
                    placeholder="Suffix"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1  justify-center items-center col-span-1  md:col-span-3">
              <div className="flex flex-col justify-center items-start md:flex-1">
                <label
                  htmlFor="address"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  Address
                </label>
                <div className="min-w-44 md:w-full    justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="text"
                    className="outline-none px-1 py-1 bg-transparent w-full"
                    placeholder="Address"
                  />
                </div>
              </div>
            </div>


            <div className="flex flex-1 justify-center md:justify-start items-center ">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="city"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  City
                </label>
                <div className="min-w-44   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="text"
                    className="outline-none px-1 py-1 bg-transparent"
                    placeholder="City"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="state"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  State
                </label>
                <div className="min-w-44   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="text"
                    className="outline-none px-1 py-1 bg-transparent"
                    placeholder="State"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:justify-end justify-center items-center">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="zip"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  Zip Code
                </label>
                <div className="min-w-44   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="number"
                    className="outline-none px-1 py-1 bg-transparent"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
            </div>


            <div className="flex flex-1 justify-center md:justify-start items-center ">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="email"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  E-mail
                </label>
                <div className="min-w-44   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="text"
                    className="outline-none px-1 py-1 bg-transparent"
                    placeholder="E-mail"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="phone"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  Phone Number
                </label>
                <div className="min-w-44   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="phone"
                    className="outline-none px-1 py-1 bg-transparent"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:justify-end justify-center items-center">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="zip"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  Zip Code
                </label>
                <div className="min-w-44   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <input
                    type="number"
                    className="outline-none px-1 py-1 bg-transparent"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-1 md:justify-start justify-center items-center ">
              <div className="flex flex-col justify-center items-start">
                <label
                  htmlFor="email"
                  className="text-sm italic text-blue ml-1 font-semibold"
                >
                  Gender
                </label>
                <div className="w-[207px]   justify-center items-center border border-gray-500 group focus-within:border-blue transition-colors duration-200 rounded-md px-2">
                  <select
                    type="text"
                    className="outline-none px-1 py-1 w-full bg-transparent"
                    placeholder="E-mail"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
            </div>
          </form>

          

          <div className="ml-auto mr-32">
                <button  className="px-4 py-2 text-lg font-semibold text-white bg-blue  rounded mx-auto border-blue border-2 hover:bg-white hover:text-blue duration-200">Join Now</button>
            </div>
        </div>
      </div>
    </Page>
  );
};
export default PlayerJoin;
