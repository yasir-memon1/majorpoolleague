import LeaguesShowcase from "../Components/LeaguesShowcase";
import PlayersShowcase from "../Components/PlayersShowcase";
import LeagueSelector from "../UI/LeagueSelector";
import Page from "../UI/Page";
import PageHeader from "../UI/PageHeader";
import placeholder from "../assets/player-placeholder.png"
import teamPlaceholder from "../assets/league-placeholder (1).png"
import Search from "../UI/Search";

const players = [
  
  
  
  
 
  
  
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  
  {
    name:     "John Smith",
    image: placeholder,
    team_image: teamPlaceholder,
    team: "Albuquerque Isotopes",
    
  },
  

  
  
  
].sort();

const PlayersPage = () => {
  
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-between items-center">
            <PageHeader heading="Players" />
            <Search/>
            </div>
            <PlayersShowcase players={players} />
          </div>
        </div>
      </div>
    </Page>
  );
};
export default PlayersPage;
