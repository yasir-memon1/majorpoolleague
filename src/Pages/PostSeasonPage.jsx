import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DividingHeader from "../UI/DividingHeader";
import Page from "../UI/Page";
import PageHeader from "../UI/PageHeader";
import banner from "../assets/State Champ Banner small.jpg";
import poster from "../assets/biggestpartyposter.jpg";
import placeHolder from "../assets/player-placeholder.png"
import {
  faArrowAltCircleRight,
  faCalendar,
  faLocation,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import MatchResults from "../Components/MatchResults";
import Table from "../UI/Table";
import Leaders from "../Components/Leaders";

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
        desc: "Games"
    },
    {
        name: "PR",
        desc: "PR"
    },
    {
        name: "PTS",
        desc: "Points"
    },
    {
        name: "UEW",
        desc: "Unearned Wins"
    },
    {
        name: "DB/RO",
        desc: "DB/RO"
    },
    {
        name: "B&R",
        desc: "B&R"
    },
    {
        name: "8BB",
        desc: "8BB"
    },
    {
        name: "CC",
        desc: "CC"
    },
    {
        name: "W",
        desc: "Wins"
    },
    {
        name: "L",
        desc: "Losses"
    },
    {
        name: "W%",
        desc: "Win %"
    },
    {
        name: "EWA",
        desc: "Earned Win Avg"
    },
    {
        name: "PA",
        desc: "PA"
    },
    {
        name: "PTS/PA",
        desc: "PTS/PA"
    },
    {
        name: "4f4",
        desc: "4f4"
    },
    {
        name: "5f5",
        desc: "5f5"
    },
    {
        name: "PS",
        desc: "Points Streak"
    },
    {
        name: "WS",
        desc: "Win Streak"
    },
    {
        name: "AVG",
        desc: "Scoring Avg"
    },
    {
        name: "GA",
        desc: "Game Avg"
    },
    {
        name: "O GA",
        desc: "Opponents"
    },
    {
        name: "MA",
        desc: "MA"
    },
    {
        name: "O MA",
        desc: "O MA"
    },
    {
        name: "MIP",
        desc: "MIP"
    }
]

const playerData = [
    { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
    { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
    { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
    { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
    { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
    { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
    { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
    { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
  ]

  const leaders = {
    men: {
        pr: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        points: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        win: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "30s": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "8bb": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        br: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "10-0s": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        ma: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        mip: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        }
    },
    women: {
        pr: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        points: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        win: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "30s": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "8bb": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        br: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        "10-0s": {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        ma: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        },
        mip: {
            score: 5480,
            name: "Fred Stanfield",
            image: placeHolder,
            team: "Team name"
        }
    }
  }

  const PLAYER_HEADERS = [
    {
        name: "Player",
    },
    {
        name: "Team",
    },
    {
        name: "Games",
        desc: "Games"
    },
    {
        name: "PR",
        desc: "PR"
    },
    {
        name: "PTS",
        desc: "Points"
    },
    {
        name: "UEW",
        desc: "Unearned Wins"
    },
    {
        name: "DB/RO",
        desc: "DB/RO"
    },
    {
        name: "B&R",
        desc: "B&R"
    },
    {
        name: "8BB",
        desc: "8BB"
    },
    {
        name: "CC",
        desc: "CC"
    },
    {
        name: "W",
        desc: "Wins"
    },
    {
        name: "L",
        desc: "Losses"
    },
    {
        name: "W%",
        desc: "Win %"
    },
    {
        name: "EWA",
        desc: "Earned Win Avg"
    },
    {
        name: "PA",
        desc: "PA"
    },
    {
        name: "PTS/PA",
        desc: "PTS/PA"
    },
    {
        name: "4f4",
        desc: "4f4"
    },
    {
        name: "5f5",
        desc: "5f5"
    },
    {
        name: "PS",
        desc: "Points Streak"
    },
    {
        name: "WS",
        desc: "Win Streak"
    },
    {
        name: "AVG",
        desc: "Scoring Avg"
    },
    {
        name: "GA",
        desc: "Game Avg"
    },
    {
        name: "O GA",
        desc: "Opponents"
    },
    {
        name: "MA",
        desc: "MA"
    },
    {
        name: "O MA",
        desc: "O MA"
    },
    {
        name: "MIP",
        desc: "MIP"
    }
    
]
const PostSeasonPage = () => {
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-6">
            <PageHeader heading={"Post Season"} />

            <img src={banner} className="w-2/3 mx-auto" />

            <DividingHeader header={"Summer 2024 Championship"} />

            <p className="text-gray-600 text-base text-justify">
              A big congratulations goes out to Steve Deluna, Kevin “Foogie”
              Ringlero, Darryl Davis & Anthony Begay of 3 NDNs N Dat Guy! They
              defeated Going for Three, We Own the Money, Coke Fueled Rage & the
              reigning champions Ohhh Those Guys twice to go 5-0 and become the
              AZPL Summer 2024 State Champions and win $4,000!
            </p>
            <p className="text-gray-600 text-base text-justify">
              The Championships began on Thursday, August 29th at Dozer’s Grill
              with a blind draw scotch-doubles/singles tournament! If you
              haven’t been to Dozer’s you need to check it out! 20 7-foot
              Diamonds and 8 9-footers! Dart boards too! It’s a new room on the
              far east side, 7012 E Hampton to be exact. For those of you with
              kids you might remember the old Chuck E Cheese. Same place. We
              play there on Thursday nights! Check it out. Anyway, 18 players
              participated and in the end it was Sammy Martinez & Eric Culpepper
              winning the scotch side. On the singles side Mike Chapa and Doug
              Cochran battled it out to team up for the scotch. They beat Sammy
              & Eric the first time but Eric & Sammy came back to clinch the
              victory and $180! 2nd took home $120 with BC Antonio and Esteban
              Eureste split $60 for 5th!
            </p>
            <p className="text-gray-600 text-base text-justify">
              On Friday there were 4 different tournaments to play in! An
              8-ball, 9-ball & 10-ball singles tourneys as well as our own
              8-Ball Break & Run Derby. In the singles tourneys it was a race to
              1 in each round. There were 29 players in the 8-Ball tourney.
              Robert Berry & Mike Chapa split $330 for the win. Carl Stewart
              finished in 3rd and won $100. Steve Deluna was in 4th with $80.
              Aric Thompson & Chris Navas tied for 5th and won $35 each.
            </p>
            <p className="text-gray-600 text-base text-justify">
              The 9-Ball tourney had 14 players in it. Aric Thompson defeated
              Nate Holliday to take 1st place and win $140! Nate received $90
              for 2nd. Andrea “Double A” Berchtold of Daddy O’s fame finished
              3rd and won $50!
            </p>
            <p className="text-gray-600 text-base text-justify">
              Twenty players signed up for 10-ball. Mike Sandoval won the hot
              seat but it was Sammy Martinez who defeated him twice for the
              victory and $150 for 1st place! Mike took home $115 for 2nd. Mike
              Chapa finished in 3rd and won $85. Fourth paid out $50 to Robert
              Berry!
            </p>
            <p className="text-gray-600 text-base text-justify">
              In 8-Ball Break & Run Derby there were 28 participants! Leading
              the pack after the opening round was Bernardo Garcia & Robert
              Berry, both tied with 30 and Frank Caddell with 28. The cutoff was
              6 to make it to the next round! In round 2 Bernardo added 26 to
              his score to take the lead with 56. Mike Sandoval also scored 26
              to move into 2nd with 43. Equaling his 43 was Mike Chapa who
              scored 20. 20 was also the magic number to make it to the 3rd
              round! It was there that Robert Berry came roaring back with 20
              points to take the lead with 58! Mike Chapa added 14 to finish at
              57! Sandoval knocked in 11 for a final score of 54 to take 3rd! In
              the finals it was the Sandman opening with 45 points to take 1st
              and win $70! Mike Chapa finished in 2nd and took home $40! Robert
              Berry took home $20 for 3rd place!
            </p>
            <p className="text-gray-600 text-base text-justify">
              On Saturday Dozer’s opened their doors at 9am for us! The first
              teams didn’t start until 11am so there was lots of warm up time
              and breakfast too! Breakfast burritos and sandwiches! 46 teams
              played on Saturday with 13 teams playing at 11! Of those early
              birds it was the Desert Rats who went the farthest without losing
              winning 3 straight before losing to No Clue! By the end of the
              night there were just 4 undefeated teams — Ohhh Those Guys vs
              Noice Toyche Biotch and Coke Fueled Rage vs 3 NDNs N Dat Guy.
              Three other teams won 3 straight on the winner’s side — DMT We’re
              DYnoMITE, Going for Three and Ohhh Those Guys. On the left side
              there were still 8 teams in contention heading into Sunday and one
              of them was the Desert Rats who won 2 straight! They went the
              farthest of all the Saturday morning starters. Going for Three won
              5 straight on the left side before finishing the weekend in 3rd
              place with $1,500! The number #1 ranked team Shake, Rack & Run
              went 2-3 and finished in 8th with $350. They got beat by Show
              George the Money who went 3-2 to finish in 7th with $650. The 3
              Blind Mice, who started in the 21st spot won 5 straight on the
              left side after starting 1-1 and finished 6-3 to finish in 6th
              with $500. 5th place and $1,000 went to Noice Toyche Biotch who
              finished 3-2. Coke Fueled Rage took 4th and $1,000 after going
              4-2.
            </p>
            <p className="text-gray-600 text-base text-justify">
              In their first match the 3 NDNs N Dat Guy faced off against Going
              for Three. They shut them out 60-27 in 6. In their next match they
              played Daddy’s In-House champs We Own the Money. It didn’t start
              off so well as they lost the first 2 games before Foogie put out
              the fire winning 10-3. Deluna won the next one before Anthony
              Begay hit an 8-ball break in the 5th! In the 6th it was Chad with
              a win but the 3 NDNs won the next two for a 68-53 victory! Onto
              their next match against the Shamrock leaders Coke Fueled Rage!
              They started off strong in this one winning their first three to
              take a 30-17 lead into the 2nd round. The Rage finished their Coke
              by now and outscored them 27-23 while winning to make it a 53-44
              match heading into the final round. 2 10s put it out of reach as
              the NDNs win this one 73-57! In the battle for the hot seat they
              faced Ohhh Those Guys for the first time. The Sandman lead it off
              with a break & run for Those Guys but those NDNs came roaring back
              with 3 straight wins to take a 40-29 lead. It was Bernardo’s turn
              to stop the bleeding and beat Anthony 10-3 but those pesky NDNs
              won the next 3 to win 73-55 sending the champs to the left side
              and await their opponent! The loss sent the champs to the triple
              threat to close out the left side. They faced off against Going
              for Three and Coke Fueled Rage. Mike Sandoval had 2 break & runs
              and scored 32 as they beat Going for Three 69-61. Against the Rage
              they took their 1st lead in game 4 37-36 before giving it right
              back 10-5 for a 46-42 score. The next 3 were like the ’29 Yankees
              with Sandoval, Garcia and Sandoval again with a 30-10 run for a
              72-56 lead and the win! They had some unfinished business with
              some NDNs N Dat Guy…. Those 3 NDNs N Dat Guy were well rested and
              ready for action as they jumped to a 42-9 lead after 3 games,
              holding Sandoval to 2 points! In the 2nd round Those Guys snapped
              out of it and won 2 to score 24 to their 19 but Foogie beat Sandy
              10-4 for a 61-33 lead after 6 games! Needing to go 30-2 over the
              next 3 games in game 7 Bernardo beat Deluna but Steve scored 7 to
              clinch the victory! Fitting for Steve as he has been playing in
              the league since the fall of 2005! Anthony Begay has been playing
              consistently since the summer of 2008, his first 15 years in
              Flagstaff, first as a player then as the league rep! He’s now in
              charge of the Thursday Dozer’s division! Foogie & Darryl just
              started playing in the league last season. Foogie went 9-2 with
              103 points scored for a 1.689 PR to earn team MVP honors!
            </p>
            <p className="text-gray-600 text-base text-justify">
              On Sunday we also had the Third Elimination Bracket with the
              winner receiving $1,000 courtesy of Dozer’s Grill! Every team that
              lost twice on Saturday and the first two rounds Sunday went into
              this bracket. Showing up is half the battle in this one as only 22
              teams returned to compete for a grand! Of those 22 it was Lucky
              Roll & Unholy Trinity who both won 4 and split it $500 a piece!
            </p>
            <p className="text-gray-600 text-base text-justify">
              If you were unlucky enough to lose your first match on Sunday you
              fell into the “I Guarantee You’ll Play 2 on Sunday” bracket with
              the winner receiving a free season! No weekly dues for the entire
              season! 12 teams played in this bracket with No Name from
              Flagstaff pulling out the victory!
            </p>
            <p className="text-gray-600 text-base text-justify">
              Overall MVP of the tournament goes to Jim Rigney of the 3 Blind
              Mice! He went 19-3 while scoring 206 points, allowing just 112 and
              shooting a 28.09 match average for a 3.883 Power Rating! Lou Smith
              of the Desert Rats was the women’s MVP going 10-10 with 155 scored
              and 146 allowed along with a 23.25 match average for a PR of
              1.180! Harold Lyons of Going for Three led all players with 262
              points scored. He and his teammate Francisco Serrano tied with 20
              wins! Mindy Teague led the ladies with 168 points. Josh Branham
              hit 2 8-ball breaks! Mike Sandoval recorded 3 break & runs and
              Nate Holliday picked up 3 10-0s! Damien Jones of the Pool Hall
              Junkies was the most improved player shooting 4.71 points over his
              career match average!
            </p>
            <p className="text-gray-600 text-base text-justify">
              Thanks to everyone who came out to Dozer’s Grill over the weekend!
              Saw some alumni over the weekend — Randy Jacob from the Long
              Shanks stopped by as did former champions Ralph Gibson of Old
              School and a blast from way, WAY back machine 3x champion Wayne
              Larson of Lefty’s XXX fame stopped by! It was great to see
              everyone! Thanks to Dozer’s for putting in $1,000! Thanks to
              Jennifer for hanging out all weekend! Thanks to Myron for doing
              all those tips! Thanks to Diamond for setting up! Thanks to Dylan
              & AA for helping out! Thanks to Dozer’s Grill for a great weekend!
              We all had an amazing time! The staff did a great job! And thanks
              to each and every one of YOU for playing and being a part of the
              AZPL! Another amazing season in the books!
            </p>
            <p className="text-gray-600 text-base text-justify">
              Our 62nd season begins the week of September 9th! We have
              divisions Sunday thru Thursday statewide! The AZPL State
              Championships will be January 2nd thru 5th and first place will be
              $4,000!
            </p>

            <DividingHeader header={"AZPL State Championship Weekend"} />

            <div className="flex justify-center flex-col items-start    w-max mx-auto gap-4 ">
              <h2 className="text-blue text-3xl font-semibold underline underline-offset-4">
                Divisions forming across Arizona!
              </h2>

              <div className="overflow-hidden rounded-md mx-auto h-full flex justify-center items-center">
                <img className="scale-[101%] h-full" src={poster} />
              </div>
              <h3 className="text-white bg-blue text-3xl mx-auto font-semibold px-4 py-2 rounded-md ">
                GET STARTED TODAY!
              </h3>
            </div>
            <DividingHeader
              header={"How teams qualify for the State Championship tournament"}
            />
            <div>
              <p className="text-gray-600 text-base text-center">
                Teams play in the league to qualify for the State Championships.
                56 teams will qualify!{" "}
              </p>
              <p className="text-gray-600 text-base text-center">
                For teams that lose twice on Saturday fear not as we have a 3rd
                elimination bracket that plays out on Sunday for $1,000!{" "}
              </p>
            </div>
            <div className="">
              <h2 className="text-gray-500 text-2xl font-semibold text-center">
                The Biggest Party in Pool!
              </h2>
              <h2 className="text-white bg-blue px-4 py-2 my-2 text-2xl rounded-sm w-max mx-auto font-semibold">
                The AZPL 2024 Fall State Championships!
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-12">
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex justify-center items-center bg-blue py-4 text-white text-2xl">
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="flex-1 flex justify-center py-6 gap-2 flex items-center">
                  <h2 className="text-blue flex-1 text-2xl font-semibold  ">
                    January 2, 3, 4 & 5th, 2025
                  </h2>
                </div>
              </div>
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex justify-center items-center bg-blue py-4 text-white text-2xl">
                  <FontAwesomeIcon icon={faMapPin} />
                </div>
                <div className="flex-1 flex justify-center py-6 gap-2 flex-col items-center">
                  <h3 className="text-2xl font-semibold text-blue">
                    Dozer's Grill
                  </h3>
                  <p className="text-slate-600 font-semibold">
                    The Home of the AZPL State Championships!
                  </p>
                  <p className="text-slate-600 text-sm font-semibold">
                    7012 E Hampton Rd, Mesa
                  </p>
                </div>
              </div>
            </div>
            <DividingHeader header={"Order of Events"} />
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-12">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                    TUESDAY NIGHT
                  </div>
                  <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                    <h2 className="text-blue flex-1 text-2xl font-semibold  ">
                      8-Ball Scotch Doubles/Singles Tournament
                    </h2>
                    <p className="text-lg font-semibold text-center leading-tight text-gray-600">
                      7:00pm
                      <br />{" "}
                      <span className="text-base italic">
                        sign up starts at 6pm
                      </span>
                    </p>
                    <div>
                      <p className="text-gray-600 flex justify-start items-start gap-4">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          className="text-blue mt-1"
                        />
                        It's a race to the 8 every round both sides!
                      </p>
                      <p className="text-gray-600 flex justify-start items-start gap-4">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          className="text-blue mt-1"
                        />{" "}
                        Double-Elimination!
                      </p>
                      <p className="text-gray-600 flex justify-start items-start gap-4">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          className="text-blue mt-1"
                        />{" "}
                        Blind Draw!
                      </p>
                      <p className="text-gray-600 flex justify-start items-start gap-4">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          className="text-blue mt-1"
                        />{" "}
                        Limited to 64 players!
                      </p>
                    </div>
                    <p className="text-white bg-blue px-4 py-2 text-xl rounded font-semibold  flex justify-start items-center gap-4">
                      {" "}
                      $20 entry!
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-12">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue pt-4 text-white text-2xl">
                    FRIDAY NIGHT
                  </div>
                  <div className="w-full flex font-semibold justify-center items-center bg-blue pb-4 text-gray-200 text-lg">
                    FIVE EVENTS TO PLAY IN
                  </div>
                  <div className="grid grid-cols-1 gap-4 px-4 ">
                    <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                      <h2 className="text-blue flex-1 text-2xl font-semibold  ">
                        Wild Card Challenge
                      </h2>
                      <p className="text-lg font-semibold text-center leading-tight text-gray-600">
                        6pm
                      </p>
                      <div className="max-w-2xl">
                        <p className="text-gray-600 flex justify-start items-start gap-4">
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="text-blue mt-1"
                          />
                          To win the Wild Card Tournament and become the final
                          team in the State Championships you must go undefeated
                          in a single-elimination team tournament that starts at
                          6pm on Friday.
                        </p>
                        <p className="text-gray-600 flex justify-start items-start gap-4">
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="text-blue mt-1"
                          />{" "}
                          It's still 3 on 3 but it's a race to 3 wins!
                        </p>
                        <p className="text-gray-600 flex justify-start items-start gap-4">
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="text-blue mt-1"
                          />
                          Whichever team wins 3 games advances!{" "}
                        </p>
                        <p className="text-gray-600 flex justify-start items-start gap-4">
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="text-blue mt-1"
                          />
                          Final 2 teams play a full 9-game match for the final
                          spot in the tournament!{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <DividingHeader header={""} />
                  <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                    <h2 className="text-blue flex-1 text-2xl font-semibold w-full flex flex-col justify-center items-center leading-tight  ">
                      <div className="flex justify-around items-center flex-1 w-full ">
                        <p>8-Ball</p>
                        <p>9-Ball</p>
                        <p>10-Ball</p>
                      </div>
                      Singles Tournaments
                    </h2>
                    <p className="text-lg font-semibold text-center leading-tight text-gray-600">
                      7:00pm
                      <br />{" "}
                      <span className="text-base italic">
                        sign up starts at 6pm
                      </span>
                    </p>
                    <div>
                      <p className="text-gray-600 flex justify-start items-start gap-4">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          className="text-blue mt-1"
                        />
                        It's a race to 1 every round.
                      </p>
                      <p className="text-gray-600 flex justify-start items-start gap-4">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          className="text-blue mt-1"
                        />{" "}
                        You can play in TWO of the THREE!
                      </p>
                      <p className="text-gray-600 flex justify-start items-start gap-4">
                        <FontAwesomeIcon
                          icon={faArrowAltCircleRight}
                          className="text-blue mt-1"
                        />{" "}
                        Limit 32 players each!
                      </p>
                    </div>
                    <p className="text-white bg-blue px-4 py-2 text-xl rounded font-semibold  flex justify-start items-center gap-4">
                      {" "}
                      $10 entry!
                    </p>
                  </div>
                  <DividingHeader header={""} />
                  <div className="grid grid-cols-1 gap-4 px-4 ">
                    <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                      <h2 className="text-blue flex-1 text-2xl font-semibold  ">
                        8-Ball Break & Run Derby
                      </h2>
                      <p className="text-lg font-semibold text-center leading-tight text-gray-600">
                        6pm
                      </p>
                      <div className="max-w-2xl">
                        <p className="text-gray-600 flex justify-start items-start gap-4">
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="text-blue mt-1"
                          />
                          Players compete by breaking & running out the table!
                          Every player racks their own.
                        </p>
                        <p className="text-gray-600 flex justify-start items-start gap-4">
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="text-blue mt-1"
                          />{" "}
                          You get one freebie shot on the break meaning you
                          don't have to make one on the break to continue
                          shooting.
                        </p>
                        <p className="text-gray-600 flex justify-start items-start gap-4">
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="text-blue mt-1"
                          />
                          However, if you scratch your turn is over with 0. An
                          8-ball break counts as 20 points. After that every
                          ball you make counts as a point.
                        </p>
                        <p className="text-gray-600 flex justify-start items-start gap-4">
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="text-blue mt-1"
                          />
                          It doesn't matter what you shoot at - be it solids or
                          stripes - as long as the 8-ball is the last ball.
                        </p>
                        <p className="text-gray-600 flex justify-start items-start gap-4">
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="text-blue mt-1"
                          />
                          Once you successfully make the 8 you'll re-rack the
                          balls and break. You MUST make a ball on this break to
                          continue shooting. Once you miss a shot your turn is
                          over.
                        </p>
                        <DividingHeader header={"Eligibility"} />
                        <div className="flex justify-between flex-1 w-full mt-2 items-start gap-5 h-[88px]">
                          <h3 className="bg-blue flex justify-center items-center text-white text-base font-semibold px-4 py-2 rounded flex-1 h-full text-center">
                            Be in the Top 3 league leaders for 8 ball breaks or
                            Break & Runs
                          </h3>
                          <h3 className="bg-blue flex justify-center items-center text-white text-base font-semibold px-4 py-2 rounded flex-1 h-full text-center">
                            Be the league leader for 10-0s!
                          </h3>
                          <h3 className="bg-blue flex justify-center items-center text-white text-base font-semibold px-4 py-2 rounded flex-1 h-full text-center">
                            Buy your way in!
                            <br /> $10 entry!{" "}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-12">
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                  SATURDAY
                </div>
                <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                  <p className="text-white bg-red px-4 py-2 text-xl rounded font-semibold  flex justify-start items-center gap-4">
                    {" "}
                    The Main Event
                  </p>
                  <h2 className="text-blue flex-1 text-2xl font-semibold  ">
                    AZPL State Championship Team Tournament
                  </h2>
                  <p className="text-lg font-semibold text-center leading-tight text-gray-600">
                    Doors open at 8:00am
                    <br />{" "}
                    <span className="text-base italic">
                      First group of teams start at 9am!
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-12">
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                  SUNDAY
                </div>
                <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                  <p className="text-white bg-red px-4 py-2 text-xl rounded font-semibold  flex justify-start items-center gap-4">
                    {" "}
                    The Main Event
                  </p>
                  <h2 className="text-blue flex-1 text-2xl font-semibold  ">
                    AZPL State Championship Team Tournament
                  </h2>
                  <p className="text-lg font-semibold text-center leading-tight text-gray-600">
                    Doors open at 8:00am
                  </p>
                  <div className="text-center">
                    <h2 className="text-gray-600 flex-1 text-lg font-semibold leading-tight  ">
                      Continuation of both brackets as well as the start of the
                    </h2>
                    <h2 className="text-red flex-1 text-xl font-semibold  leading-tight">
                      Third Elimination brackets! Starts at 9am!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <DividingHeader header={"PRIZE POOL"}/>
            <div className="grid grid-cols-2 gap-12">
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex justify-center items-center bg-blue py-4 text-white text-2xl">
                  1st Place
                </div>
                <div className="flex-1 flex justify-center py-6 gap-2  items-center">
                  <h2 className="text-blue flex-1 text-2xl font-semibold  ">
                    $4,000
                  </h2>
                </div>
              </div>
              <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                <div className="w-full flex justify-center items-center bg-blue py-4 text-white text-2xl">
                  Prize Pool
                </div>
                <div className="flex-1 flex justify-center py-6 gap-2  items-center">
                  <h2 className="text-blue flex-1 text-2xl font-semibold  ">
                    $15,000
                  </h2>
                </div>
              </div>
            </div>
            <DividingHeader header={"Tournament Start Times"}/>
            <p className="text-center text-lg text-gray-600 text-semibold">Start times will be determined shortly after the end of the regular season!
            </p>
            <DividingHeader header={"Tournament Match Results"}/>
            <MatchResults matches={matches}/>
            <DividingHeader header={"Team Standings"}/>

            <Table tableHeaders={TEAM_HEADERS} data={playerData}/>
            <DividingHeader header={"Division Leaders"}/>
            <Leaders leaders={leaders}/>
            <DividingHeader header={"Tournament Player Standings"}/>
            <Table tableHeaders={PLAYER_HEADERS} data={playerData}/>


            
          </div>
        </div>
      </div>
    </Page>
  );
};
export default PostSeasonPage;
