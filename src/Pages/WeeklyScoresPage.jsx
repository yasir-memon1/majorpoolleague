import MatchResults from "../Components/MatchResults";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import PageHeader from "../UI/PageHeader";
import Table from "../UI/Table";
import placeHolder from "../assets/player-placeholder.png";

const matches = [
  {
    id: 1,
    team1: { name: "Wicked Crew", score: 84, image: placeHolder },
    team2: { name: "Balls Matter", score: 58, image: placeHolder },
  },
  {
    id: 2,
    team1: { name: "Lucky 13", score: 67, image: placeHolder },
    team2: { name: "Tempe Elks", score: 51, image: placeHolder },
  },
  {
    id: 3,
    team1: { name: "Get Lucky", score: 66, image: placeHolder },
    team2: { name: "Those People", score: 73, image: placeHolder },
  },
  {
    id: 4,
    team1: { name: "A*R*T", score: 66, image: placeHolder },
    team2: { name: "Chalk Dirty to Me", score: 77, image: placeHolder },
  },
];

const pending_matches = [
  {
    id: 1,
    team1: { name: "Wicked Crew", image: placeHolder },
    team2: { name: "Balls Matter", image: placeHolder },
  },
  {
    id: 2,
    team1: { name: "Lucky 13", image: placeHolder },
    team2: { name: "Tempe Elks", image: placeHolder },
  },
  {
    id: 3,
    team1: { name: "Get Lucky", image: placeHolder },
    team2: { name: "Those People", image: placeHolder },
  },
  {
    id: 4,
    team1: { name: "A*R*T", image: placeHolder },
    team2: { name: "Chalk Dirty to Me", image: placeHolder },
  },
];
const WeeklyScoresPage = () => {
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-1 flex-row justify-between items-center">
              <PageHeader heading="Weekly Scores" />
              <h2 className="text-xl font-semibold text-gray-700">Week 4</h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-12 ">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                    MONDAY
                  </div>
                  <div className="flex-1 w-full px-6 flex justify-center py-6 gap-4 flex-col items-center">
                    <DividingHeader header={"Division-1"} />
                    <MatchResults matches={matches} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-12">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                    TUESDAY
                  </div>
                  <div className="flex-1 w-full px-6 flex justify-center py-6 gap-4 flex-col items-center">
                    <DividingHeader header={"Division-1"} />
                    <MatchResults matches={matches} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-12">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                    WEDNESDAY
                  </div>
                  <div className="flex-1 w-full px-6 flex justify-center py-6 gap-4 flex-col items-center">
                    <DividingHeader header={"Division-1"} />
                    <MatchResults matches={matches} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-12">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                    THURSDAY
                  </div>
                  <div className="flex-1 w-full px-6 flex justify-center py-6 gap-4 flex-col items-center">
                    <DividingHeader header={"Division-1"} />
                    <MatchResults matches={matches} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-12">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                    FRIDAY
                  </div>
                  <div className="flex-1 w-full px-6 flex justify-center py-6 gap-4 flex-col items-center">
                    <DividingHeader header={"Division-1"} />
                    <MatchResults matches={matches} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-12">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                    SATURDAY
                  </div>
                  <div className="flex-1 w-full px-6 flex justify-center py-6 gap-4 flex-col items-center">
                    <DividingHeader header={"Division-1"} />
                    <MatchResults matches={pending_matches} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-12">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                    SUNDAY
                  </div>
                  <div className="flex-1 w-full px-6 flex justify-center py-6 gap-4 flex-col items-center">
                    <DividingHeader header={"Division-1"} />
                    <MatchResults matches={pending_matches} />
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
export default WeeklyScoresPage;
