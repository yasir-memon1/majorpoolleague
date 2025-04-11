import { useState } from "react"
import Page from "../UI/Page"
import PageHeader from "../UI/PageHeader"
import Table from "../UI/Table"
import Dropdown from "../UI/Dropdown"
import CustomDatePicker from "../Components/DatePicker"
const REGULAR_HEADERS = [
   
    {
        name: "Team",
    },
    {
        name: "MW",
        desc: "MW"
    },
    {
        name: "ML",
        desc: "ML"
    },
    {
        name: "MW%",
        desc: "MW%"
    },
    {
        name: "MB",
        desc: "MB"
    },
    {
        name: "STRK",
        desc: "Streak"
    },
    {
        name: "GW",
        desc: "GW"
    },
    {
        name: "GL",
        desc: "GL"
    },
    {
        name: "GW%",
        desc: "GW%"
    },
    {
        name: "L12G",
        desc: "L12G"
    },
    {
        name: "PTS",
        desc: "PTS"
    },
    {
        name: "PA",
        desc: "PA"
    },
    {
        name: "P/PA",
        desc: "P/PA"
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
        name: "PR",
        desc: "PR"
    },
    {
        name: "AVG",
        desc: "Shooting Avg"
    },
    {
        name: "MA",
        desc: "MA"
    },
    {
        name: "O MA",
        desc: "O MA"
    },
    
    
]
const PLAYOFF_HEADERS = [
    {
        name: "Leaders",
        desc: "Division/Non-Division Leaders"
    },
    {
        name: "MW",
        desc: "MW"
    },
    {
        name: "ML",
        desc: "ML"
    },
    {
        name: "MW%",
        desc: "MW%"
    },
    {
        name: "WCGB",
        desc: "WCGB"
    },
    {
        name: "STRK",
        desc: "Streak"
    },
    {
        name: "GW",
        desc: "GW"
    },
    {
        name: "GL",
        desc: "GL"
    },
    {
        name: "GW%",
        desc: "GW%"
    },
    {
        name: "L12G",
        desc: "L12G"
    },
    {
        name: "Pts",
        desc: "Points"
    },
    {
        name: "PA",
        desc: "PA"
    },
    {
        name: "P/PA",
        desc: "P/PA"
    },
    {
        name: "DB/RO",
        desc: "DB/RO"
    },
    {
        name: "B%R",
        desc: "B%R"
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
        name: "PR",
        desc: "PR"
    },
    {
        name: "AVG",
        desc: "Shooting Avg"
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
        name: "Current STRK",
        desc: "Current Streak"
    },
    {
        name: "Games Behind",
        desc: "Games Behind"
    },
    
]

const StandingsPage = ()=>{
   
    const [openDropdown, setOpenDropdown] = useState(null); 
    const [division, setDivision] = useState("MLP")
    const [season, setSeason] = useState("Regular Season")
    const [league, setLeague] = useState(null)
    const [type, setType] = useState("players")

    const handleToggle = (dropdownName) => {
        setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
      };

      const handleClassChange = (value) => {
        if (openDropdown === 'Season') {
          setSeason(value)
        } else if (openDropdown === 'Division') {
          setDivision(value)
        }
        else if (openDropdown === 'League') {
          setLeague(value)
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
    return (
        <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-1">
            <PageHeader heading="Standings" />
            <div className="flex justify-start items-center gap-3">
                <button className={`text-2xl font-semibold ${type === "teams" ? "text-blue underline underline-offset-4" : "text-gray-500"} hover:text-blue duration-200`} onClick={()=>{type !== "teams" && setType("teams"); setGender({male: true, female: true})}}>Teams</button>
                <button className={`text-2xl font-semibold ${type === "players" ? "text-blue underline underline-offset-4" : "text-gray-500"} hover:text-blue duration-200`} onClick={()=>{type !== "players" && setType("players"); setGender({male: true, female: true})}}>Players</button>
            </div>
           
            <div className="mt-5">
            <CustomDatePicker/>
            </div>
           
            <div className='flex justify-start items-center gap-2 mt-5 flex-wrap'>
            <Dropdown onChange={handleClassChange} name="Season" values={[{name: null, values:["Regular Season" ,"Post Season Races", "Play-Off"]}]} isOpen={openDropdown === 'Season'}
        onToggle={() => handleToggle('Season')} selectedValue={season}/>
            {season === "Regular Season" && <Dropdown onChange={handleClassChange} name="Division" values={[{name: null, values:["Division" ,"League", "MLP"]}]} isOpen={openDropdown === 'Division'}
        onToggle={() => handleToggle('Division')} selectedValue={division}/>}
        {season === "Play-Off" && <Dropdown onChange={handleClassChange} name="League" values={[{name: null, values:["3-Person" ,"5-Person"]}]} isOpen={openDropdown === 'League'}
        onToggle={() => handleToggle('League')} selectedValue={league}/>}
          </div>
            <Table tableHeaders={season === "Regular Season" ? REGULAR_HEADERS : PLAYOFF_HEADERS} data={playerData}/>
          </div>
        </div>
      </div>
    </Page>
    )
}
export default StandingsPage