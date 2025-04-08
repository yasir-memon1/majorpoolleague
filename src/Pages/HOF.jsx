import { Link } from "react-router-dom";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import placeHolder from "../assets/player-placeholder.png";
import HallOfFamer from "../Components/HallOfFamer";

const HOF = () => {
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900 flex justify-start items-center flex-col gap-10">
          <div className="text-center flex flex-col gap-4">
            <div>
              <DividingHeader header={"HALL OF FAME"} size="text-4xl" />
            </div>
            <p className="text-gray-500 text-base text-justify">
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
            <DividingHeader header={"HALL OF FAMERS"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <HallOfFamer name={"Player Name"} placeHolder={placeHolder} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."}  />
              <HallOfFamer name={"Player Name"} placeHolder={placeHolder} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."}  />
              <HallOfFamer name={"Player Name"} placeHolder={placeHolder} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."}  />
              <HallOfFamer name={"Player Name"} placeHolder={placeHolder} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."}  />
              <HallOfFamer name={"Player Name"} placeHolder={placeHolder} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, repellat."}  />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-full gap-4">
            <Link to="/vote-for-hof" className=" text-lg text-white bg-blue px-4 py-2 flex justify-center font-semibold items-center rounded-md border-2 border-blue mb-4  hover:text-blue hover:bg-white duration-200 font-semibold">Vote for Hall Of Fame</Link>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default HOF;
