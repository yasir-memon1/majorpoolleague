import { useState } from "react";
import LeaguesShowcase from "../Components/LeaguesShowcase";
import LeagueSelector from "../UI/LeagueSelector";
import Page from "../UI/Page";
import placeholder from "../assets/league-placeholder.png"

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
const LeaguesBySize = ()=>{
    const [selectedSize, setSelectedSize] = useState(3);
    return (
        <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-4">
            <LeagueSelector selected={"size"}/>
            <div className="flex justify-center items-center gap-0 mt-3">
                <button onClick={()=>setSelectedSize(3)} className={`${selectedSize===3 ? "bg-blue text-white" : "bg-transparent text-blue"} h-10  w-16 text-lg font-semibold  border-2 border-blue border-r-0 flex justify-center items-center rounded-s-xl duration-200 ease-in-out`}>3</button>
                <button onClick={()=>setSelectedSize(5)} className={`${selectedSize===5 ? "bg-blue text-white" : "bg-transparent text-blue"} h-10  w-16 text-lg font-semibold border-2 border-blue border-l-0 flex justify-center items-center rounded-e-xl duration-200 ease-in-out`}>5</button>
            </div>
            <LeaguesShowcase leagues={leagues} />
          </div>
        </div>
      </div>
    </Page>
    )
}
export default LeaguesBySize