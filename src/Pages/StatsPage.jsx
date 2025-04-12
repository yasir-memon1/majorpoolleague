import { useState } from "react"
import Page from "../UI/Page"
import PageHeader from "../UI/PageHeader"
import Table from "../UI/Table"
import placeHolder from "../assets/player-placeholder.png"
import teamPlaceholder from "../assets/league-placeholder (1).png"
import Dropdown from "../UI/Dropdown"
import { set } from "date-fns"
import DividingHeader from "../UI/DividingHeader"
import POW from "../Components/POW"
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

const StatsPage = ()=>{
    const [type, setType] = useState("players")
    const [gender, setGender] = useState({
        male: true,
        female: true
    })
    const [openDropdown, setOpenDropdown] = useState(null); 
    const [history, setHistory] = useState("2025")
    const [pool, setPool] = useState(null)
    const [size, setSize] = useState("All AZPL")
    const [season, setSeason] = useState("Regular Season")
    const [split, setSplit] = useState(null)
    const handleToggle = (dropdownName) => {
        setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
      };

      const handleClassChange = (value) => {
        if (openDropdown === 'Timeframe') {
          setHistory
        } else if (openDropdown === 'Season') {
          setSeason(value)
        }
        else if (openDropdown === 'Size') {
            setSize(value)
          }
          else if (openDropdown === 'Pool') {
            setPool(value)
          }
          else if (openDropdown === 'Split') {
            setSplit(value)
          }
        setOpenDropdown(null); 
      };
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
      console.log(Headers)

      
        const pow = {
          men: [
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
          ],
          women:  [
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
            {
                name: "Fred Stanfield",
                image: placeHolder,
                team: "Team name"
            },
          ]
        }
    return (
        <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-1">
            <PageHeader heading="Statistics" />
            <DividingHeader header="Players of the Week" />
            <POW pow={pow} />
            <DividingHeader header="Statistics" />
            <div className="flex justify-start items-center gap-3">
                <button className={`text-lg sm:text-2xl font-semibold ${type === "teams" ? "text-blue underline underline-offset-4" : "text-gray-500"} hover:text-blue duration-200`} onClick={()=>{type !== "teams" && setType("teams"); setGender({male: true, female: true})}}>Teams</button>
                <button className={`text-lg sm:text-2xl font-semibold ${type === "players" ? "text-blue underline underline-offset-4" : "text-gray-500"} hover:text-blue duration-200`} onClick={()=>{type !== "players" && setType("players"); setGender({male: true, female: true})}}>Players</button>
            </div>
            <div className="flex justify-start items-center gap-3">
                <button className={`text-base sm:text-xl font-semibold ${gender.male ? "text-blue underline underline-offset-4" : "text-gray-500"} hover:text-blue duration-200`} onClick={()=>{setGender({male: !gender.male, female: gender.female})}}>Men</button>
                <button className={`text-base sm:text-xl font-semibold ${gender.female  ? "text-blue underline underline-offset-4" : "text-gray-500"} hover:text-blue duration-200`} onClick={()=>{setGender({male: gender.male, female: !gender.female})}}>Women</button>
            </div>
            <div className='flex justify-start items-center gap-2 mt-5 flex-wrap'>
            <Dropdown onChange={handleClassChange} name="Timeframe" values={[{name:"History", values:["AT Totals", "AT by Season"]}, {name:"Seasons", values:["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000",]}]} isOpen={openDropdown === 'Timeframe'}
        onToggle={() => handleToggle('Timeframe')} selectedValue={history}/>
           <Dropdown onChange={handleClassChange} name="Season" values={[{name: null, values:["Regular season", "Post season", "Championship Game", "All Star Game"]}]} isOpen={openDropdown === 'Season'}
        onToggle={() => handleToggle('Season')} selectedValue={season}/>
        <Dropdown onChange={handleClassChange} name="Size" values={[{name: null, values:["All AZPL" ,"3 Person", "5 Person"]}]} isOpen={openDropdown === 'Size'}
        onToggle={() => handleToggle('Size')} selectedValue={size}/>
        <Dropdown onChange={handleClassChange} name="Player Pool" values={[{name: null, values:["Qualified Players", "All Players", "Rookies"]}]} isOpen={openDropdown === 'Pool'}
        onToggle={() => handleToggle('Pool')} selectedValue={pool}/>
        <Dropdown onChange={handleClassChange} name="Split" values={[{name: "Game", values:["Home/Away", "Racking/Breaking", "On Diamonds", "On Other Tables"]}, {name: "Score", values: ["Team is ahead","Team is behind","Team is tied", "In games won by team", "In games lost by team", "After a win", "After a loss"]}, {name: "Opponent", values: ["Male", "Female"]}, {name: "Order", values: ["Shooting First", "Shooting Second", "Shooting Third", "Shooting Fourth", "Shooting Fifth", "Shooting Sixth"]}, {name: "Round", values: ["First Round", "Second Round", "Third Round", "Fourth Round", "Tie Breaker"]}, {name: "Inning", values: ["First Inning", "Second Inning", "Third Inning", "Fourth Inning", "Fifth Inning", "Sixth Inning", "Seventh Inning", "Eighth Inning", "Nineth Inning", "Tenth Inning", "Eleventh Inning", "Twelfth Inning", "Extra Innings"]}]} isOpen={openDropdown === 'Split'}
        onToggle={() => handleToggle('Split')} selectedValue={split}/>
          </div>
            <Table tableHeaders={type === "players" ? PLAYER_HEADERS : TEAM_HEADERS} data={playerData}/>
          </div>
        </div>
      </div>
    </Page>
    )
}
export default StatsPage