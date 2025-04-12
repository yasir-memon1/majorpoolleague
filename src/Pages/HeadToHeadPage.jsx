import LeaguesShowcase from "../Components/LeaguesShowcase";
import PlayersShowcase from "../Components/PlayersShowcase";
import LeagueSelector from "../UI/LeagueSelector";
import Page from "../UI/Page";
import PageHeader from "../UI/PageHeader";
import placeholder from "../assets/player-placeholder.png";
import teamPlaceholder from "../assets/league-placeholder (1).png";
import Search from "../UI/Search";
import pfpPlaceholder from "../assets/player-placeholder.png";
import Leaders from "../Components/Leaders";
import DividingHeader from "../UI/DividingHeader";

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


  const leaders = {
    men: {
      pr: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    points: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    scoringPct: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "ppa": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "wins": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    winPct: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "10-0": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    dbro: {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "b/r": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "8bb": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "ctc": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "matchWins": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "matchWinPerc": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "sweep": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "wsl": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "ma": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "oma": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "mip": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "gamesBroke": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    },
    "gamesRacked": {
        score: 5480,
        name: "Fred Stanfield",
        image: pfpPlaceholder,
        team: "Team name",
        position: 12
    }
    },
    women: {
        pr: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        points: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        scoringPct: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "ppa": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "wins": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        winPct: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "10-0": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        dbro: {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "b/r": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "8bb": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "ctc": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "matchWins": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "matchWinPerc": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "sweep": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "wsl": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "ma": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "oma": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "mip": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "gamesBroke": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        },
        "gamesRacked": {
            score: 5480,
            name: "Fred Stanfield",
            image: pfpPlaceholder,
            team: "Team name"
        }
    }
  }

const HeadToHeadPage = () => {
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-center  items-center  gap-4">
              <div className="md:w-36 md:h-36 h-24 w-24 rounded-full flex justify-center items-center border-2 overflow-hidden border-blue">
                <img src={pfpPlaceholder} />
              </div>
              <div className="">
                <h1 className="text-2xl md:text-4xl font-semibold">Player Name</h1>
                <p className="text-gray-500 text-base">Team Name</p>
              </div>
            </div>
            <div className="w-full hidden md:block">
            <DividingHeader header={"Leaders"}/>
            </div>
            <Leaders leaders={leaders} title1="Player Name" title2="Leaders"/>
            <div className="flex sm:flex-row gap-4 flex-col justify-between items-center">
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
