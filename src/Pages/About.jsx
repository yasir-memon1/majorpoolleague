import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import PageHeader from "../UI/PageHeader";
import banner from "../assets/State Champ Banner small.jpg";
import poster from "../assets/biggestpartyposter.jpg";
import placeHolder from "../assets/player-placeholder.png";
import {
  faArrowAltCircleRight,
  faCalendar,
  faCircle,
  faEarthAmerica,
  faFlagUsa,
  faLocation,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import MatchResults from "../Components/MatchResults";
import Table from "../UI/Table";
import Leaders from "../Components/Leaders";
import { Link } from "react-router-dom";

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
  {
    id: 5,
    team1: { name: "Hot Pockets", score: 42, image: placeHolder },
    team2: { name: "Balls in Hand", score: 87, image: placeHolder },
  },
  {
    id: 6,
    team1: { name: "FELT That!", score: 75, image: placeHolder },
    team2: { name: "Ohhh Those Guys!", score: 74, image: placeHolder },
  },
  {
    id: 7,
    team1: { name: "T-Bone's Crew", score: 68, image: placeHolder },
    team2: { name: "On the Rail", score: 83, image: placeHolder },
  },
  {
    id: 8,
    team1: { name: "2 OGs & a Noob", score: 79, image: placeHolder },
    team2: { name: "Late Arrivals", score: 70, image: placeHolder },
  },
  {
    id: 9,
    team1: { name: "Those People", score: 72, image: placeHolder },
    team2: { name: "The Girthy Sirs", score: 71, image: placeHolder },
  },
  {
    id: 10,
    team1: { name: "Chalk Dirty to Me", score: 54, image: placeHolder },
    team2: { name: "Nerf Herders", score: 67, image: placeHolder },
  },
  {
    id: 11,
    team1: { name: "Lucky 13", score: 70, image: placeHolder },
    team2: { name: "Work in Progress", score: 55, image: placeHolder },
  },
  {
    id: 12,
    team1: { name: "On the Rail", score: 85, image: placeHolder },
    team2: { name: "8 Ball Majik", score: 18, image: placeHolder },
  },
  {
    id: 13,
    team1: { name: "Those People", score: 80, image: placeHolder },
    team2: { name: "Me & Randy Travis", score: 47, image: placeHolder },
  },
  {
    id: 14,
    team1: { name: "FELT That!", score: 63, image: placeHolder },
    team2: { name: "The A Team", score: 75, image: placeHolder },
  },
  {
    id: 15,
    team1: { name: "2 OGs & a Noob", score: 77, image: placeHolder },
    team2: { name: "Gwen SteffIan", score: 64, image: placeHolder },
  },
];

const TEAM_HEADERS = [
  {
    name: "Team",
  },
  {
    name: "Games",
    desc: "Games",
  },
  {
    name: "PR",
    desc: "PR",
  },
  {
    name: "PTS",
    desc: "Points",
  },
  {
    name: "UEW",
    desc: "Unearned Wins",
  },
  {
    name: "DB/RO",
    desc: "DB/RO",
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
    name: "CC",
    desc: "CC",
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
    name: "W%",
    desc: "Win %",
  },
  {
    name: "EWA",
    desc: "Earned Win Avg",
  },
  {
    name: "PA",
    desc: "PA",
  },
  {
    name: "PTS/PA",
    desc: "PTS/PA",
  },
  {
    name: "4f4",
    desc: "4f4",
  },
  {
    name: "5f5",
    desc: "5f5",
  },
  {
    name: "PS",
    desc: "Points Streak",
  },
  {
    name: "WS",
    desc: "Win Streak",
  },
  {
    name: "AVG",
    desc: "Scoring Avg",
  },
  {
    name: "GA",
    desc: "Game Avg",
  },
  {
    name: "O GA",
    desc: "Opponents",
  },
  {
    name: "MA",
    desc: "MA",
  },
  {
    name: "O MA",
    desc: "O MA",
  },
  {
    name: "MIP",
    desc: "MIP",
  },
];

const playerData = [
  {
    name: "John Doe",
    v: 10,
    pr: 5,
    points: 50,
    pa: 20,
    scoring: "75%",
    ppa: 2.5,
    w: 8,
    l: 2,
    winpct: "80%",
    thirties: 3,
    eightball: 1,
    breakrun: 2,
    tenzeros: 1,
    winstrk: 5,
    ma: 15,
    m: 10,
  },
  {
    name: "Jane Smith",
    v: 8,
    pr: 4,
    points: 40,
    pa: 18,
    scoring: "70%",
    ppa: 2.2,
    w: 6,
    l: 3,
    winpct: "66%",
    thirties: 2,
    eightball: 0,
    breakrun: 1,
    tenzeros: 0,
    winstrk: 3,
    ma: 12,
    m: 8,
  },
  {
    name: "John Doe",
    v: 10,
    pr: 5,
    points: 50,
    pa: 20,
    scoring: "75%",
    ppa: 2.5,
    w: 8,
    l: 2,
    winpct: "80%",
    thirties: 3,
    eightball: 1,
    breakrun: 2,
    tenzeros: 1,
    winstrk: 5,
    ma: 15,
    m: 10,
  },
  {
    name: "Jane Smith",
    v: 8,
    pr: 4,
    points: 40,
    pa: 18,
    scoring: "70%",
    ppa: 2.2,
    w: 6,
    l: 3,
    winpct: "66%",
    thirties: 2,
    eightball: 0,
    breakrun: 1,
    tenzeros: 0,
    winstrk: 3,
    ma: 12,
    m: 8,
  },
  {
    name: "John Doe",
    v: 10,
    pr: 5,
    points: 50,
    pa: 20,
    scoring: "75%",
    ppa: 2.5,
    w: 8,
    l: 2,
    winpct: "80%",
    thirties: 3,
    eightball: 1,
    breakrun: 2,
    tenzeros: 1,
    winstrk: 5,
    ma: 15,
    m: 10,
  },
  {
    name: "Jane Smith",
    v: 8,
    pr: 4,
    points: 40,
    pa: 18,
    scoring: "70%",
    ppa: 2.2,
    w: 6,
    l: 3,
    winpct: "66%",
    thirties: 2,
    eightball: 0,
    breakrun: 1,
    tenzeros: 0,
    winstrk: 3,
    ma: 12,
    m: 8,
  },
  {
    name: "John Doe",
    v: 10,
    pr: 5,
    points: 50,
    pa: 20,
    scoring: "75%",
    ppa: 2.5,
    w: 8,
    l: 2,
    winpct: "80%",
    thirties: 3,
    eightball: 1,
    breakrun: 2,
    tenzeros: 1,
    winstrk: 5,
    ma: 15,
    m: 10,
  },
  {
    name: "Jane Smith",
    v: 8,
    pr: 4,
    points: 40,
    pa: 18,
    scoring: "70%",
    ppa: 2.2,
    w: 6,
    l: 3,
    winpct: "66%",
    thirties: 2,
    eightball: 0,
    breakrun: 1,
    tenzeros: 0,
    winstrk: 3,
    ma: 12,
    m: 8,
  },
];

const leaders = {
  men: {
    pr: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    points: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    scoringPct: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    ppa: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    wins: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    winPct: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    "10-0": {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    dbro: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    "b/r": {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    "8bb": {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    ctc: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    matchWins: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    matchWinPerc: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    sweep: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    wsl: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    ma: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    oma: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    mip: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    gamesBroke: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    gamesRacked: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
  },
  women: {
    pr: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    points: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    scoringPct: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    ppa: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    wins: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    winPct: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    "10-0": {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    dbro: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    "b/r": {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    "8bb": {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    ctc: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    matchWins: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    matchWinPerc: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    sweep: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    wsl: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    ma: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    oma: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    mip: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    gamesBroke: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
    gamesRacked: {
      score: 5480,
      name: "Fred Stanfield",
      image: placeHolder,
      team: "Team name",
    },
  },
};

const PLAYER_HEADERS = [
  {
    name: "Player",
  },
  {
    name: "Team",
  },
  {
    name: "Games",
    desc: "Games",
  },
  {
    name: "PR",
    desc: "PR",
  },
  {
    name: "PTS",
    desc: "Points",
  },
  {
    name: "UEW",
    desc: "Unearned Wins",
  },
  {
    name: "DB/RO",
    desc: "DB/RO",
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
    name: "CC",
    desc: "CC",
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
    name: "W%",
    desc: "Win %",
  },
  {
    name: "EWA",
    desc: "Earned Win Avg",
  },
  {
    name: "PA",
    desc: "PA",
  },
  {
    name: "PTS/PA",
    desc: "PTS/PA",
  },
  {
    name: "4f4",
    desc: "4f4",
  },
  {
    name: "5f5",
    desc: "5f5",
  },
  {
    name: "PS",
    desc: "Points Streak",
  },
  {
    name: "WS",
    desc: "Win Streak",
  },
  {
    name: "AVG",
    desc: "Scoring Avg",
  },
  {
    name: "GA",
    desc: "Game Avg",
  },
  {
    name: "O GA",
    desc: "Opponents",
  },
  {
    name: "MA",
    desc: "MA",
  },
  {
    name: "O MA",
    desc: "O MA",
  },
  {
    name: "MIP",
    desc: "MIP",
  },
];
const AboutPage = () => {

  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-3  md:gap-6">
            <PageHeader heading={"About Us"} />

            <img src={banner} className=" w-full md:w-2/3 mx-auto" />

            <DividingHeader header={"About Us"} />
            <div>
              <div className="flex w-full justify-around leading-tight items-center text-base sm:text-lg md:text-2xl font-semibold text-blue">
                <h3 className="flex-1 text-center">3-person teams</h3>
                <h3 className="flex-1 text-center border-x border-gray-300">14-match season</h3>
                <h3 className="flex-1 text-center">BCA/ACS Sanctioned</h3>
              </div>
              <h3 className="text-center text-xl mb-2 leading-tight sm:text-3xl font-semibold text-blue mt-3">
                Every Team in the LEAGUE Wins CASH!
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 md:gap-12">
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex justify-center items-center bg-blue py-4 text-white text-2xl">
                  <FontAwesomeIcon icon={faFlagUsa} />
                </div>
                <div className="flex-1 flex justify-center py-6 gap-2 flex-col items-start">
                  <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                    <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} />
                    Qualify to play in the AZPL State Championships!
                  </h2>
                  <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                    <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} /> 4
                    days of pool 3 times a year!
                  </h2>
                  <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                    <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} /> 56
                    teams qualify for the championships!
                  </h2>
                  <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                    <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} />{" "}
                    Over $15,000 in the tournament prize pool this season!
                  </h2>
                </div>
              </div>
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex justify-center items-center bg-blue py-4 text-white text-2xl">
                  <FontAwesomeIcon icon={faEarthAmerica} />
                </div>
                <div className="flex-1 flex justify-center px-4 py-6 gap-2 flex-col items-center">
                  <h3 className="text-base md:text-xl font-semibold text-center text-blue">
                    Qualify for the AZPL Globe Trot in September and Whiskey Row
                    Run in March!
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-sm sm:text-base text-justify">
              The Arizona Pool Leagues was created in February 2003 with our
              first session beginning on May 7th. The AZPL was designed with the
              casual pool player in mind. We pride ourselves on being an
              amateur, beer-drinking, have-fun pool league. It is meant for the
              not-so-serious player to come down and have some fun, shoot some
              pool, drink a few beers (though not necessarily in that order) and
              win some cash too! When I created the league the thought was 'Why
              do we need to go to Vegas when we can have a big Championship
              right here'. Hence we have 3 State Championships a year since
              2003! Ironically, we are now sanctioned for those who do want to
              go to Vegas.
            </p>
            <p className="text-gray-600 text-sm sm:text-base text-justify">
              8-ball. Teams of 3 players. Round-robin format. You’ll play every
              person on the other team one game each. It’s a pre-determined
              breaking order with the home team breaking 5 times and the away
              team 4. In the opening round the visiting team breaks first. In
              the second round the home team breaks. In the final round it’s
              split home / away / home on the breaks. Simple scoring! It’s a
              point for each ball down. 3 points for the 8! A win is 10! Hit an
              8-ball break and that’s a win! Call your ball & pocket! Ball in
              hand rules apply! Handicapped based on your performance in the
              league! Anyone can play from beginners to Fargo superstars! Score
              the most and allow the fewest and you can win player of the week
              honors and win an exclusive AZPL Player of the Week lapel pin! We
              also offer lapel pins for when you score your first 30-point game,
              win your 100th game and score your 1,000th point because it takes
              a lot of balls to score a thousand points!
            </p>
            <p className="text-gray-600 text-sm sm:text-base text-justify">
              We keep track of all of your stats! Every single point you score!
              Every win! All kinds of stats! Every single game you play!
              All-Time! Check out the site and see 19+ years of stats for every
              player to ever play in the league! Regular season and championship
              stats! All scores are entered within 48 hours of submission. Just
              send a pic of the full scoresheet! We enter the scores for you!
              And you can print the scoresheets right off the website complete
              with up-to-date stats of both teams!
            </p>

            <DividingHeader
              header={
                "61 consecutive championship tournaments in Arizona since 2003!"
              }
            />

            <p className="text-gray-600 text-sm sm:text-base text-justify">
              Teams are competing for 56 spots in the 62nd AZPL State
              Championships at Dozer's Grill in Mesa! You’ll play 14 matches
              during the season. At the end of the season each division has so
              many allotted spots in the championships based on the number of
              teams in the division. There are currently 55 guaranteed spots
              spread out across all divisions in the two brackets. The rest of
              the teams qualify to play in the wild card tournament on Friday
              night for the 56th spot!
            </p>

            <DividingHeader header={"Not your normal bracket!"} />
            <p className="text-gray-600 text-sm sm:text-base text-justify">
              Your win/loss percentage determines your start time in the
              tournament. In the main bracket the first place teams start at 7pm
              Saturday where-as the bump-in teams begin play at 9am. The higher
              you rank the later your start time. Number one team gets pole
              position! You can see how important it is to be higher in the
              standings for a better start time. For teams that have the same
              winning percentage the tie-breaker goes to points scored making
              EVERY POINT COUNT! In both brackets the opening round is the wild
              card round and a battle for the home table. It begins at 9am. Once
              the table is won that is your table to lose and you can see on the
              bracket who your next opponent will be all day long. From that
              point on you are the home team and all of your opponents will be
              challenging you for that table as the away team. No need to move
              around to a new table each match! Until you lose that is. Then you
              flip into the left side of the bracket and you’ll be challenging
              for that table. If you lose twice on Saturday you’ll be out of the
              main bracket but you’ll be coming back on Sunday in the Third
              Elimination bracket in a battle for 9th place and a cash prize of
              $1,000! And to guarantee you’ll play two matches on Sunday if you
              lose your first match in the 3rd Elim bracket you’ll go into ‘I
              Guarantee You'll Play TWO on Sunday’ bracket to win a free season
              in the league and give it another try next season!{" "}
            </p>

            <DividingHeader header={"What can YOU win?"} />

            <p className="text-gray-600 text-sm sm:text-base text-justify">
              What can you win? Your team can win up to $1,000 for a first place
              finish in your division and no less than $50 for a last place
              finish. 1st & 2nd place teams win trophies! You can win $100 and a
              trophy if you are the division MVP. $150 and a trophy if you are
              the league MVP. You can win from $50 up to $500 if you have a top
              10 all-time caliber season.{" "}
            </p>

            <p className="text-gray-600 text-sm sm:text-base text-justify">
              If your team qualifies for the state championship tournament (only
              56 teams qualify) you can win over $4,000! Top 8 are in the money!
              1st, 2nd & 3rd place in the championships win trophies! First
              place wins the exclusive AZPL Championship green shirts! If you
              are the tournament MVP you win $100-150! If you have a top 10
              all-time caliber tournament weekend you can win from $25-$250!{" "}
            </p>

            <h3 className="text-center text-xl leading-tight sm:text-3xl font-semibold text-blue mt-3">
              Every Team in the LEAGUE Wins CASH!
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 md:gap-12">
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex justify-center items-center bg-blue py-4 text-white font-semibold text-lg sm:text-2xl">
                  Thursday night
                </div>
                <div className="flex-1 flex justify-center w-full py-6 gap-2 flex-col items-start">
                <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} />
                    Scotch Doubles
                  </h2>
                  <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                    <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} />{" "}
                    Singles 8-ball tournament
                  </h2>
                </div>
              </div>
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
              <div className="w-full flex justify-center items-center bg-blue py-4 text-white font-semibold text-lg sm:text-2xl">
              Friday Night
                </div>
                <div className="flex-1 flex justify-center py-6 w-full gap-2 flex-col items-start">
                <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} />
                    10-ball tournament singles tournament
                  </h2>
                  <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                    <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} />{" "}
                    9-ball tournament singles tournament
                  </h2>
                  <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                    <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} />{" "}
                    8-ball singles tournament
                  </h2>
                  <h2 className="text-blue flex-1 text-base md:text-xl font-semibold  text-left px-4 ">
                    <FontAwesomeIcon className="w-2 mr-2" icon={faCircle} />{" "}
                    8-Ball Break & Run Derby
                  </h2>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-base leading-tight sm:text-lg text-center">
              All have cash payouts with entry fees ranging from free if you hit
              an 8-ball break for 8-Ball Break & Run Derby or $20 per person
              depending on the event!
            </p>

            
            <DividingHeader header={"How much does it cost to join?"} />

            <p className="text-gray-600 text-sm sm:text-base text-justify">
              Another great question! There is a $20 annual due for BCA (renews
              in January), a $15 annual due for ACS (renews in June) and a $15
              seasonal player entry (renews every season). Those are the 1 time
              per year/season fees. The weekly dues are typically $13 per week!
            </p>
            <DividingHeader header={"Get your team signed up today!"} />

            <p className="text-gray-600 text-sm sm:text-base text-justify">
              Currently we have 79 teams in 10 divisions in Tempe, Phoenix,
              Globe and Flagstaff and always looking for more areas to join in
              the fun! Want to play in the AZPL but there isn't a division set
              up near you? We’re always looking for league representatives to
              promote growth! You can even make a few bucks every week being the
              rep! All you need are 12 players to get a division started! Just 4
              teams! It will grow from there! We’ll provide you with posters to
              promote the league and materials to get the division started!
              Contact me if you'd like to get a division started ANYWHERE!
              Nationwide!
            </p>

              

            <div>
            <div className="flex w-full justify-around leading-tight items-center text-base sm:text-lg md:text-2xl font-semibold text-blue">
            <h3 className="flex-1 text-center">Small teams</h3>
                <h3 className="flex-1 border-x border-gray-300 text-center">Short season</h3>
                <h3 className="flex-1 text-center">Huge Payouts!</h3>
              </div>
              <h3 className="text-center text-xl mb-2 leading-tight sm:text-3xl font-semibold text-blue mt-3">
                It's the way a pool league should be!
              </h3>
            </div>

            <div className="mx-auto">
                <button className="px-4 py-2 text-lg font-semibold text-white bg-blue  rounded mx-auto border-blue border-2 hover:bg-white hover:text-blue duration-200">Host MLP at your Establishment</button>
            </div>
            <div className="mx-auto">
                <Link to={"/join"} className="px-4 py-2 text-lg font-semibold text-white bg-blue  rounded mx-auto border-blue border-2 hover:bg-white hover:text-blue duration-200">Join Now</Link>
            </div>
          
          
            


            <p className="text-base md:text-lg italic text-justify font-semibold text-gray-600">
            We at the Arizona Pool Leagues hope you enjoy your time with us and look forward to shooting with you.
            </p>


            <div>
                <p className="text-gray-600 text-base md:text-lg text-left font-semibold">Michael Kerin</p>
                <p className="text-gray-600 text-base md:text-lg text-left font-semibold">League Operator</p>
                <p className="text-gray-600 text-base md:text-lg text-left font-semibold">Arizona's Pool League</p>
            </div>



          </div>
        </div>
      </div>
    </Page>
  );
};
export default AboutPage;
