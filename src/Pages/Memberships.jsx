import { Link } from "react-router-dom";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";

const Memberships = () => {
  return (
    <Page>
      <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
        <div className="flex flex-col w-full gap-3  md:gap-6">
          <DividingHeader header={"Welcome"} />
          <p className="text-gray-600 font-semibold text-xl text-center">
            Get access to your membership information, stats and much more. It
            only takes a few mins to join!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            <div className="flex justify-center items-center flex-1 h-full w-full">
              <div className="border-2 overflow-hidden border-blue flex h-full w-full flex-col justify-center items-center rounded-xl">
                <div className="flex justify-center min-h-[59px] items-center py-1 flex-1 w-full bg-blue text-white font-bold text-xl md:text-3xl">
                  <h2>New Member</h2>
                </div>
                <div className="text-center px-10 py-10 flex justify-center items-center text-gray-600 text-base md:text-lg flex-1">
                  <p>I have never played in MLP before.</p>
                </div>
                <div>
                  <div className="mb-5 ">
                    <Link
                      to={"/join"}
                      className="px-4 py-2 text-lg font-semibold text-white bg-blue  rounded-3xl mx-auto border-blue border-2 hover:bg-white hover:text-blue duration-200"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-1 h-full ">
              <div className="border-2 overflow-hidden border-blue h-full  flex flex-col justify-center items-center rounded-xl">
                <div className="flex justify-center min-h-[59px] items-center py-1 flex-1 w-full bg-blue text-white font-bold text-xl md:text-3xl">
                  <h2>Current Member</h2>
                </div>
                <div className="text-center p-10 flex justify-center items-center text-gray-600 text-base md:text-lg flex-1">
                  <p>I am a 2025 paid member but need to sign up for on Online Member Account.</p>
                </div>
                <div>
                  <div className="mb-5 ">
                    <Link
                      to={"/join"}
                      className="px-4 py-2 text-lg font-semibold text-white bg-blue  rounded-3xl mx-auto border-blue border-2 hover:bg-white hover:text-blue duration-200"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-1 h-full ">
              <div className="border-2 overflow-hidden border-blue h-full flex flex-col justify-center items-center rounded-xl">
                <div className="flex justify-center min-h-[59px] items-center py-1  flex-1 w-full bg-blue text-white font-bold text-xl md:text-3xl">
                  <h2>Returning Member</h2>
                </div>
                <div className="text-center p-10 flex justify-center items-center text-gray-600 text-base md:text-lg flex-1">
                  <p>I have played in MPL before but not in 2025.</p>
                </div>
                <div>
                  <div className="mb-5 ">
                    <Link
                      to={"/join"}
                      className="px-4 py-2 text-lg font-semibold text-white bg-blue  rounded-3xl mx-auto border-blue border-2 hover:bg-white hover:text-blue duration-200"
                    >
                      Join Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Memberships;
