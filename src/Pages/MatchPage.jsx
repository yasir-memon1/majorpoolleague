import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import Table from "../UI/Table";
import placeholder from "../assets/league-placeholder (1).png";
import playerPlaceholder from "../assets/player-placeholder.png";

const HEADERS = [
  {
    name: "Player Name",
  },

  {
    name: "PTS",
    desc: "Points",
  },

  {
    name: "B&R",
    desc: "B&R",
  },
  {
    name: "8BB",
    desc: "8BB",
  },
  {
    name: "T/R",
    desc: "T/R",
  },

  {
    name: "W",
    desc: "Wins",
  },
  {
    name: "L",
    desc: "Losses",
  },
  {
    name: "Win Avg",
    desc: "Win Average",
  },

  {
    name: "PA",
    desc: "PA",
  },
];

const playerData = [
  {
    name: "John Doe",
    accolade: "(W, 1-0)",
    pts: 10,
    bnr: 5,
    eightbb: 50,
    tnr: 20,
    w: "75%",
    l: 2.5,
    wavg: 8,
    pa: 2,
  },
  {
    name: "John Doe",
    accolade: "Losing Player (WP)",
    pts: 10,
    bnr: 5,
    eightbb: 50,
    tnr: 20,
    w: "75%",
    l: 2.5,
    wavg: 8,
    pa: 2,
  },
  {
    name: "John Doe",
    accolade: "Winning Player (WP)",
    pts: 10,
    bnr: 5,
    eightbb: 50,
    tnr: 20,
    w: "75%",
    l: 2.5,
    wavg: 8,
    pa: 2,
  },
];
const MatchPage = () => {
  return (
    <Page>
      <div className="max-w-7xl  mx-auto p-4  text-slate-900 flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col w-full gap-3  md:gap-6 bg-white px-4 md:px-10 py-4 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10  border-b py-4  border-gray-300">
            <div className="flex justify-around items-center">
              <div className="flex justify-center items-center flex-row-reverse sm:flex-col-reverse md:flex-row gap-4 ">
                <div className="flex justify-center flex-col sm:items-center md:items-end">
                  <h2 className="text-lg font-semibold ">Team Name</h2>
                  <p className="text-gray-500 font-semibold">2-5</p>
                  <p>10 INT West</p>
                </div>
                <div className="flex justify-center items-center w-24 h-24 rounded-full bg-blue">
                  <img src={placeholder} className="w-20 " />
                </div>
              </div>

              <div>
                <h2 className="text-6xl font-bold">1</h2>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <h2 className="text-2xl font-bold ">Final/11</h2>
            </div>

            <div className="flex justify-around sm:justify-between items-center">
              <div>
                <h2 className="text-6xl font-bold">2</h2>
              </div>

              <div className="flex justify-center items-center flex-row-reverse sm:flex-col md:flex-row gap-4 ">
                <div className="flex justify-center items-center w-24 h-24 rounded-full bg-blue">
                  <img src={placeholder} className="w-20 " />
                </div>
                <div className="flex justify-center flex-col sm:items-center md:items-start">
                  <h2 className="text-lg font-semibold ">Team Name</h2>
                  <p className="text-gray-500 font-semibold">2-5</p>
                  <p>10 INT West</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-center gap-5 sm:gap-0 flex-col sm:flex-row items-center ">
            <div className="flex-1 w-full border-b pb-5 sm:pb-0 sm:border-b-0 sm:border-r border-gray-300">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right  ">
                  <thead className="text-sm text-gray-500 uppercase font-semibold  ">
                    <tr>
                      <th scope="col" className="px-6 py-1"></th>
                      <th scope="col" className=" py-1">
                        0
                      </th>
                      <th scope="col" className=" py-1">
                        1
                      </th>
                      <th scope="col" className=" py-1">
                        2
                      </th>
                      <th scope="col" className=" py-1">
                        3
                      </th>
                      <th scope="col" className=" py-1">
                        4
                      </th>
                      <th scope="col" className=" py-1">
                        5
                      </th>
                      <th scope="col" className=" py-1">
                        6
                      </th>
                      <th scope="col" className=" py-1">
                        7
                      </th>
                      <th scope="col" className=" py-1">
                        8
                      </th>
                      <th scope="col" className=" py-1">
                        9
                      </th>
                      <th scope="col" className=" py-1">
                        10
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white  font-semibold text-lg">
                      <th
                        scope="row"
                        className="px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Team 1
                      </th>
                      <td className=" ">0</td>
                      <td className=" ">0</td>
                      <td className=" ">0</td>
                      <td className=" ">0</td>
                      <td className=" ">0</td>
                      <td className=" ">2</td>
                      <td className=" ">3</td>
                      <td className=" ">5</td>
                      <td className=" ">8</td>
                      <td className=" ">0</td>
                      <td className=" ">1</td>
                    </tr>
                    <tr className="bg-white  font-semibold text-lg">
                      <th
                        scope="row"
                        className="px-6 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Team 2
                      </th>
                      <td className=" ">0</td>
                      <td className=" ">0</td>
                      <td className=" ">0</td>
                      <td className=" ">0</td>
                      <td className=" ">0</td>
                      <td className=" ">2</td>
                      <td className=" ">3</td>
                      <td className=" ">5</td>
                      <td className=" ">8</td>
                      <td className=" ">0</td>
                      <td className=" ">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4 h-full px-10 ">
              <div className="flex text-base gap-2 items-center">
                <p className="font-semibold text-gray-500">W:</p>
                <h2 className="font-semibold text-gray-900">Paredes, E</h2>
                <p className="text-gray-500">1-0</p>
                <div className="h-4 w-[1px] bg-gray-300"></div>
                <p className="text-gray-500">0.00 ERA</p>
              </div>
              <div className="flex text-base gap-2 items-center">
                <p className="font-semibold text-gray-500">L:</p>
                <h2 className="font-semibold text-gray-900">Paredes, E</h2>
                <p className="text-gray-500">0-1</p>
                <div className="h-4 w-[1px] bg-gray-300"></div>
                <p className="text-gray-500">0.00 ERA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-3  md:gap-6 bg-white px-4 md:px-10 py-4 rounded-xl">
          <DividingHeader header={"Player Stats"} />
          <div className="flex lg:flex-row flex-col">
            <div className=" md:border-r border-gray-300 flex flex-col">
              <h2 className="text-blue text-lg font-semibold text-center">
                Team Name
              </h2>
              <Table tableHeaders={HEADERS} data={playerData} noWidth={true} />
            </div>
            <div className="md:border-l border-gray-300 flex flex-col">
              <h2 className="text-blue text-lg font-semibold text-center">
                Team Name
              </h2>

              <Table tableHeaders={HEADERS} data={playerData} noWidth={true} />
            </div>
          </div>
          <DividingHeader header={"Innings"} />
          <div className="flex justify-center items-center md:flex-row flex-col text-gray-700 gap-10">
            <div className="flex-1 flex justify-center items-center flex-col gap-3">
            <h2 className="text-blue text-lg font-semibold text-center">
                Team Name
              </h2>
              <div className="grid grid-cols-11 grid-rows-3 w-full">
                <div className="border-2 border-b   border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-1 text-sm font-semibold">
                  <p>(B)</p>
                </div>
                <div className="border-2 border-b  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9   row-start-1 text-sm font-semibold">
                  <p>(B)</p>
                </div>
                <div className="border border-t-2 border-l-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>1</p>
                </div>
                <div className="border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>2</p>
                </div>
                <div className="border border-t-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>3</p>
                </div>
                <div className="border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>4</p>
                </div>
                <div className="border-2 border-l border-b  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>Total</p>
                </div>

                <div className="border-2 border-r col-start-1 row-start-3 border-gray-500 p-2 h-full col-span-5 flex gap-2 justify-start items-center">
                  {/* <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
                        <img src={playerPlaceholder} className=""/>
                        </div> */}
                  <h2 className="text-base sm:text-lg font-semibold">
                    Player Name
                  </h2>
                </div>

                <div className="border-b-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-b-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>5</p>
                </div>
                <div className="border-b-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>6</p>
                </div>
                <div className="border-b-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-t border-l border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-3 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>
              </div>

              <div className="grid grid-cols-11  w-full">
                <div className="border-2 border-r col-start-1 row-start-3 border-gray-500 p-2 h-full col-span-5 flex gap-2 justify-start items-center">
                  {/* <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
                        <img src={playerPlaceholder} className=""/>
                        </div> */}
                  <h2 className="text-base sm:text-lg font-semibold">
                    Player Name
                  </h2>
                </div>

                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>5</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>6</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className=" border-l border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-3 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>
              </div>

              <div className="grid grid-cols-11  w-full">
                <div className="border-2 border-r col-start-1 row-start-3 border-gray-500 p-2 h-full col-span-5 flex gap-2 justify-start items-center">
                  {/* <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
                        <img src={playerPlaceholder} className=""/>
                        </div> */}
                  <h2 className="text-base sm:text-lg font-semibold">
                    Player Name
                  </h2>
                </div>

                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>5</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>6</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className=" border-l border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-3 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>
              </div>

              <div className="grid grid-cols-11 grid-rows-4  w-full">
                <div className="  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-5 col-start-0  row-start-1 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>Round Points Total:</p>
                </div>

                <div className="border-2 border-r border-b border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-1 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-1 text-base sm:text-lg font-semibold ">
                  <p>5</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-1 text-base sm:text-lg font-semibold ">
                  <p>6</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-1 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className=" border-b border-l border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-1 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>

                <div className="  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-5 col-start-0  row-start-2 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>Handicap:</p>
                </div>

                <div className="border-2 border-y  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-2 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>

                <div className="  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-3 col-start-7  row-start-2 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>+Total=</p>
                </div>
                <div className=" border-y border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-2 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>

                <div className=" border-b  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-5 col-start-0  row-start-3 text-base font-semibold underline underline-offset-4">
                  <p></p>
                </div>

                <div className="border-2 border-t  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>

                <div className="  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-3 col-start-7  row-start-3 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>Games Won:</p>
                </div>
                <div className=" border-t border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-3 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>

                <div className="  border-gray-500 p-2 pt-0 h-full  flex text-center justify-center items-start col-span-5 col-start-0  row-start-4 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>Round Points Total:</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center flex-col gap-3">
            <h2 className="text-blue text-lg font-semibold text-center">
                Team Name
              </h2>
              <div className="grid grid-cols-11 grid-rows-3 w-full">
                <div className="border-2 border-b   border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-1 text-sm font-semibold">
                  <p>(B)</p>
                </div>
                <div className="border-2 border-b  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9   row-start-1 text-sm font-semibold">
                  <p>(B)</p>
                </div>
                <div className="border border-t-2 border-l-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>1</p>
                </div>
                <div className="border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>2</p>
                </div>
                <div className="border border-t-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>3</p>
                </div>
                <div className="border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>4</p>
                </div>
                <div className="border-2 border-l border-b  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-2 text-sm font-semibold underline underline-offset-4">
                  <p>Total</p>
                </div>

                <div className="border-2 border-r col-start-1 row-start-3 border-gray-500 p-2 h-full col-span-5 flex gap-2 justify-start items-center">
                  {/* <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
                        <img src={playerPlaceholder} className=""/>
                        </div> */}
                  <h2 className="text-base sm:text-lg font-semibold">
                    Player Name
                  </h2>
                </div>

                <div className="border-b-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-b-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>5</p>
                </div>
                <div className="border-b-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>6</p>
                </div>
                <div className="border-b-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-t border-l border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-3 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>
              </div>

              <div className="grid grid-cols-11  w-full">
                <div className="border-2 border-r col-start-1 row-start-3 border-gray-500 p-2 h-full col-span-5 flex gap-2 justify-start items-center">
                  {/* <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
                        <img src={playerPlaceholder} className=""/>
                        </div> */}
                  <h2 className="text-base sm:text-lg font-semibold">
                    Player Name
                  </h2>
                </div>

                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>5</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>6</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className=" border-l border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-3 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>
              </div>

              <div className="grid grid-cols-11  w-full">
                <div className="border-2 border-r col-start-1 row-start-3 border-gray-500 p-2 h-full col-span-5 flex gap-2 justify-start items-center">
                  {/* <div className="w-12 h-12 rounded-full flex justify-center items-center overflow-hidden">
                        <img src={playerPlaceholder} className=""/>
                        </div> */}
                  <h2 className="text-base sm:text-lg font-semibold">
                    Player Name
                  </h2>
                </div>

                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>5</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>6</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className=" border-l border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-3 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>
              </div>

              <div className="grid grid-cols-11 grid-rows-4  w-full">
                <div className="  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-5 col-start-0  row-start-1 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>Round Points Total:</p>
                </div>

                <div className="border-2 border-r border-b border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-1 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-7  row-start-1 text-base sm:text-lg font-semibold ">
                  <p>5</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-8  row-start-1 text-base sm:text-lg font-semibold ">
                  <p>6</p>
                </div>
                <div className="border-y-2 border  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-9  row-start-1 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>
                <div className=" border-b border-l border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-1 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>

                <div className="  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-5 col-start-0  row-start-2 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>Handicap:</p>
                </div>

                <div className="border-2 border-y  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-2 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>

                <div className="  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-3 col-start-7  row-start-2 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>+Total=</p>
                </div>
                <div className=" border-y border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-2 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>

                <div className=" border-b  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-5 col-start-0  row-start-3 text-base font-semibold underline underline-offset-4">
                  <p></p>
                </div>

                <div className="border-2 border-t  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-1 col-start-6  row-start-3 text-base sm:text-lg font-semibold ">
                  <p>4</p>
                </div>

                <div className="  border-gray-500 p-2 h-full  flex text-center justify-end items-center col-span-3 col-start-7  row-start-3 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>Games Won:</p>
                </div>
                <div className=" border-t border-2  border-gray-500 p-2 h-full  flex text-center justify-center items-center col-span-2 col-start-10  row-start-3 text-base sm:text-lg font-semibold">
                  <p></p>
                </div>

                <div className="  border-gray-500 p-2 pt-0 h-full  flex text-center justify-center items-start col-span-5 col-start-0  row-start-4 text-sm sm:text-base font-semibold underline underline-offset-4">
                  <p>Round Points Total:</p>
                </div>
              </div>
            </div>
          </div>
          <DividingHeader header={"-"} />
          <div className="flex justify-start items-start flex-col gap-2 text-lg text-gray-900 font-semibold">
            <div className="flex justify-center items-center gap-2">
              <h3>Early 8 (E8):</h3>
              <p className="text-gray-500 font-normal">Player Name</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <h3>Scratch on the 8 (S8):</h3>
              <p className="text-gray-500 font-normal">Player Name</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <h3>8BB & Scratch (8BBS):</h3>
              <p className="text-gray-500 font-normal">Player Name</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <h3>Venue:</h3>
              <p className="text-gray-500 font-normal">Dozer's Grill</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
export default MatchPage;
