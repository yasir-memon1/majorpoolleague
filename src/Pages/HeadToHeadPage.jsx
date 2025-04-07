import LeaguesShowcase from "../Components/LeaguesShowcase";
import PlayersShowcase from "../Components/PlayersShowcase";
import LeagueSelector from "../UI/LeagueSelector";
import Page from "../UI/Page";
import PageHeader from "../UI/PageHeader";
import placeholder from "../assets/player-placeholder.png";
import teamPlaceholder from "../assets/league-placeholder (1).png";
import Search from "../UI/Search";
import pfpPlaceholder from "../assets/player-placeholder.png";

const players = [
  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },
  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },

  {
    name: "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
  },
].sort();

const HeadToHeadPage = () => {
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-center  items-center  gap-4">
              <div className="w-36 h-36 rounded-full flex justify-center items-center border-2 overflow-hidden border-blue">
                <img src={pfpPlaceholder} />
              </div>
              <div className="">
                <h1 className="text-4xl font-semibold">Player Name</h1>
                <p className="text-gray-500 text-base">Team Name</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <PageHeader heading="Recent Opponents" />
              <Search />
            </div>
            <PlayersShowcase players={players} ally={"player"} opponent={"opponent"} />
          </div>
        </div>
      </div>
    </Page>
  );
};
export default HeadToHeadPage;
