import { useState } from "react";
import LeaguesShowcase from "../Components/LeaguesShowcase";
import LeagueSelector from "../UI/LeagueSelector";
import Page from "../UI/Page";
import placeholder from "../assets/league-placeholder.png"
import Dropdown from "../UI/Dropdown";

const leagues = [
  
  
  
  
 
  
  
  
  {
    name:     "Aberdeen IronBirds",
    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:       "Albuquerque Isotopes",
    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:         "Akron RubberDucks",

    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:       "Albuquerque Isotopes",
    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:       "Amarillo Sod Poodles",

    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:       "Asheville Tourists",
    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:       "Augusta GreenJackets",
    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:       "Beloit Sky Carp",
    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:        "Biloxi Shuckers",
    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:       "Binghamton Rumble Ponies",
    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  {
    name:       "Bowling Green Hot Rods",
    image: placeholder,
    teams: ["Akron RubberDucks",
  "Albuquerque Isotopes",
  "Altoona Curve",
  "Amarillo Sod Poodles",
  "Asheville Tourists",
  "Augusta GreenJackets",
  "Beloit Sky Carp",
  "Biloxi Shuckers",
  "Binghamton Rumble Ponies",
  "Birmingham Barons",
  "Bowling Green Hot Rods",]
  },
  
  
].sort();

const CITIES = [
  "Phoenix",
  "Tucson",
  "Mesa",
  "Chandler",
  "Gilbert",
  "Glendale",
  "Scottsdale",
  "Peoria",
  "Tempe",
  "Surprise"
]
const LeaguesByGeo = ()=>{
    const [selectedCity, setSelectedCity] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleSelectCity = (value) => {
      setSelectedCity(value);
      setIsOpen(false);
    }
    return (
        <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-4">
            <LeagueSelector selected={"geo"}/>
            <div className="max-w-64 mx-auto"><Dropdown name={"Select a City"} values={CITIES} onChange={handleSelectCity} isOpen={isOpen} selectedValue={selectedCity} onToggle={() => setIsOpen(!isOpen)}  /></div>
            <LeaguesShowcase leagues={leagues} />
          </div>
        </div>
      </div>
    </Page>
    )
}
export default LeaguesByGeo