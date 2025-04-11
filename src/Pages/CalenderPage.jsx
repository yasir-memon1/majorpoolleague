import React, { useState } from "react";
import CustomDatePicker from "../Components/DatePicker";
import Dropdown from "../UI/Dropdown";
import PageHeader from "../UI/PageHeader";
import Page from "../UI/Page";
import Event from "../Components/Event";
import eventPlaceHolder from "../assets/event-placeholder.jpg";
import MatchResults from "../Components/MatchResults";
import DividingHeader from "../UI/DividingHeader";
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

const CalenderPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-05-05"));
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const handleToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected Date:", date);
  };

  const handleClassChange = (value) => {
    if (openDropdown === "Class") {
      setSelectedClass(value);
    } else if (openDropdown === "Leagues") {
      setSelectedLeague(value);
    }
    setOpenDropdown(null);
  };
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };
  return (
    <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl flex flex-col gap-4  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-4">
            <div className="flex justify-between items-center w-full">
              <PageHeader heading="Calendar of Events" />
              <h3 className="text-lg font-semibold text-gray-600">
                {formatDate(selectedDate)}
              </h3>
            </div>
            <CustomDatePicker />
            <div className="flex justify-start items-center gap-2">
              <Dropdown
                onChange={handleClassChange}
                name="Class"
                values={[
                  { name: null, values: ["All", "AZPL", "AZPL Rookies"] },
                ]}
                isOpen={openDropdown === "Class"}
                onToggle={() => handleToggle("Class")}
                selectedValue={selectedClass}
              />
              <Dropdown
                onChange={handleClassChange}
                name="Leagues"
                values={[
                  { name: null, values: ["All", "AZPL", "AZPL Rookies"] },
                ]}
                isOpen={openDropdown === "Leagues"}
                onToggle={() => handleToggle("Leagues")}
                selectedValue={selectedLeague}
              />
            </div>
          </div>
          <div className="w-full  flex justify-center items-center flex-col gap-4 ">
          <div className="min-h-36 w-full flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
              <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                May 4, 2025
              </div>
              <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                <div className="flex flex-col  justify-center items-center mx-6 my-10">
                  <h1 className="text-2xl text-blue font-semibold">Happy Birthday</h1>
                  <h1 className="text-3xl text-blue font-semibold"> Player Name</h1>
                </div>
              </div>
            </div>
            <div className="min-h-36 w-full flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
              <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                May, 2025
              </div>
              <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                <div className="grid grid-cols-3 gap-12 mx-6 my-10">
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                </div>
              </div>
            </div>
            <div className="min-h-36 w-full flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
              <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                2025
              </div>
              <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                <div className="grid grid-cols-3 gap-12 mx-6 my-10">
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                </div>
              </div>
            </div>
            <div className="min-h-36 w-full flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
              <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                2024
              </div>
              <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                <div className="grid grid-cols-3 gap-12 mx-6 my-10">
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                </div>
              </div>
            </div>
            <div className="min-h-36 w-full flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
              <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                2023
              </div>
              <div className="flex-1 flex justify-center py-6 gap-4 flex-col items-center">
                <div className="grid grid-cols-3 gap-12 mx-6 my-10">
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                  <Event
                    image={eventPlaceHolder}
                    name={"Event XYZ"}
                    startTime={"6:00 PM"}
                    startDate={"May 5, 2025"}
                    endDate={"May 10, 2025"}
                    details={
                      "This is an event, lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                    }
                    endTime={"7:00 PM"}
                    location={"Dozer's Club"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-12 ">
                <div className="min-h-36 flex flex-col justify-center items-center border-2 overflow-hidden border-blue rounded-sm">
                  <div className="w-full flex font-semibold justify-center items-center bg-blue py-4 text-white text-2xl">
                    THIS WEEK'S MATCHES
                  </div>
                  <div className="flex-1 w-full px-6 flex justify-center py-6 gap-4 flex-col items-center">
                    <DividingHeader header={"Division-1"} />
                    <MatchResults matches={matches} />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Page>
  );
};

export default CalenderPage;
