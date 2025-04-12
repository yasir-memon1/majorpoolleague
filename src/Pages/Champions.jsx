import { Link } from "react-router-dom";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import placeHolder from "../assets/player-placeholder.png";
import HallOfFamer from "../Components/HallOfFamer";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Champion from "../Components/Champion";
import eventPicPlaceholder from "../assets/league-placeholder.png";

const Champions = () => {
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900 flex justify-start items-center flex-col gap-3 sm:gap-5 md:gap-10">
          <div className="text-center flex flex-col gap-4">
            <div>
              <DividingHeader header={"HISTORY"} size="text-4xl" />
              <h3 className="text-center text-lg md:text-3xl font-semibold text-blue">
                AZPL CHAMPIONS
              </h3>
            </div>
            <p className="text-gray-500 text-sm sm:text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              repellat. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Accusamus voluptatibus vero molestiae, doloribus architecto
              natus omnis libero eius? Ducimus beatae quos eligendi amet
              voluptatem quas earum minima corrupti voluptatum incidunt? Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
              itaque? Animi earum praesentium excepturi? Odit ab, corrupti
              aliquid eaque nobis odio, optio accusamus exercitationem omnis
              nulla harum in? Vitae, reiciendis! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nulla molestiae quod reprehenderit
              ullam doloribus nesciunt, obcaecati, recusandae nostrum eveniet
              aut at totam ad, esse magnam beatae! Et earum explicabo quis?
            </p>
          </div>
          <div className="flex flex-col justify-start items-center w-full gap-4">
            <DividingHeader header={"CURRENT CHAMPIONS"} />
            <div className="grid grid-cols-1 gap-12 w-full">
              <div className="min-h-36 flex flex-col justify-start items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                  Summer 2024
                </div>
                <h3 className="text-center my-2 text-3xl font-semibold text-blue">
                  Team Name
                </h3>
                <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                </div>
                <DividingHeader header={"EVENT PICS"} />
                <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="w-full h-full flex justify-center items-center rounded overflow-hidden">
                    <img
                      src={eventPicPlaceholder}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center items-center rounded overflow-hidden">
                    <img
                      src={eventPicPlaceholder}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center items-center rounded overflow-hidden">
                    <img
                      src={eventPicPlaceholder}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <DividingHeader header={"PAST CHAMPIONS"} />
            <div className="grid grid-cols-1 gap-12 w-full">
              <div className="min-h-36 flex flex-col justify-start items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                  Summer 2024
                </div>
                <h3 className="text-center my-2 text-3xl font-semibold text-blue">
                  Team Name
                </h3>
                <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                </div>
                <DividingHeader header={"EVENT PICS"} />
                <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="w-full h-full flex justify-center items-center rounded overflow-hidden">
                    <img
                      src={eventPicPlaceholder}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center items-center rounded overflow-hidden">
                    <img
                      src={eventPicPlaceholder}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-full flex justify-center items-center rounded overflow-hidden">
                    <img
                      src={eventPicPlaceholder}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="min-h-36 flex flex-col justify-start items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                  Summer 2024
                </div>
                <h3 className="text-center my-2 text-3xl font-semibold text-blue">
                  Team Name
                </h3>
                <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                </div>
              </div>
              <div className="min-h-36 flex flex-col justify-start items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                  Summer 2024
                </div>
                <h3 className="text-center my-2 text-3xl font-semibold text-blue">
                  Team Name
                </h3>
                <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                  <Champion
                    name={"Player Name"}
                    placeHolder={placeHolder}
                    description={
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default Champions;
