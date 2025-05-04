import { useRef, useState, useEffect } from "react";
import Dropdown from "../UI/Dropdown";
import placeholder from "../assets/league-placeholder (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Match = () => {
  return (
    <div className="snap-start px-1.5">
      <div className="relative overflow-hidden flex group h-[84px] w-[160px] border border-gray-400 rounded-lg justify-start items-start flex-col py-1 px-2 shrink-0">
        <div className="text-gray-600 font-bold text-xs">Match</div>
        <div className="flex-1 flex-col justify-center items-center w-full px-2 py-1 text-base font-bold text-gray-800">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <img src={placeholder} className="h-5" />
              <h3>LOU</h3>
            </div>
            <h3>4</h3>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <img src={placeholder} className="h-5" />
              <h3>LOU</h3>
            </div>
            <h3>4</h3>
          </div>
        </div>
        <div className="absolute w-full h-full bg-gray-100 top-0 left-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex justify-center items-center text-base font-semibold text-blue cursor-pointer">
          <Link to="/match">View Match</Link>
        </div>
      </div>
    </div>
  );
};

const MatchesNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedGame, setSelectedGame] = useState("8 Ball");
  const [currentDate, setCurrentDate] = useState({ month: "APR", day: "16" });
  const scrollRef = useRef(null);
  const dateRefs = useRef([]);

  const handleToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleGameChange = (value) => {
    setSelectedGame(value);
    setOpenDropdown(null);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  // Track scroll position and update the sticky date
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const updateStickyDate = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      let lastVisibleDate = { month: "APR", day: "16" }; // Default to first date

      dateRefs.current.forEach((dateRef, index) => {
        if (dateRef) {
          const rect = dateRef.getBoundingClientRect();
          const containerRect = scrollContainer.getBoundingClientRect();
          // Check if the date marker is at or near the left edge of the container
          if (rect.left <= containerRect.left + 10) {
            lastVisibleDate = dateRef.dataset;
          }
        }
      });

      setCurrentDate(lastVisibleDate);
    };

    scrollContainer.addEventListener("scroll", updateStickyDate);
    return () => scrollContainer.removeEventListener("scroll", updateStickyDate);
  }, []);

  // Data for dates (you can expand this as needed)
  const dates = [
    { month: "APR", day: "16" },
    { month: "APR", day: "17" },
  ];

  return (
    <div className="bg-white pt-[66px] md:pt-[100px] lg:pt-[74px] w-full">
      <div className="flex justify-start items-center flex-col md:flex-row w-full h-[153px] text-sm md:h-[100px] max-w-full">
        <div className="flex justify-start md:justify-center items-center w-full md:w-auto md:h-full p-2 md:p-4 shrink-0">
          <Dropdown
            name={"Game"}
            values={[{ name: null, values: ["8 Ball", "9 Ball", "10 Ball", "Scotch"] }]}
            isOpen={openDropdown === "game"}
            onToggle={() => handleToggle("game")}
            selectedValue={selectedGame}
            onChange={handleGameChange}
            width="w-32 text-sm font-semibold border-gray-400 hover:border-gray-500 border"
          />
        </div>
        <div className="flex h-full max-w-full flex-1 items-center overflow-hidden relative">
          {/* Sticky Date Display */}
          <div className="absolute left-0 h-full p-2 flex flex-col leading-none text-gray-700 justify-center items-center font-bold text-base z-20 bg-white border-x border-gray-300">
            <p>{currentDate.month}</p>
            <p>{currentDate.day}</p>
          </div>
          <div
            className="flex-1 p-2 px-4 overflow-x-auto h-full scrollbar-none snap-x snap-mandatory ml-[50px]"
            ref={scrollRef}
          >
            <div className="flex h-full">
              {/* Date Marker for APR 16 */}
              <div
                ref={(el) => (dateRefs.current[0] = el)}
                data-month="APR"
                data-day="16"
                className="h-full p-2 flex flex-col leading-none text-transparent justify-center items-center font-bold text-base shrink-0"
              >
                <p>APR</p>
                <p>16</p>
              </div>
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              {/* Date Marker for APR 17 */}
              <div
                ref={(el) => (dateRefs.current[1] = el)}
                data-month="APR"
                data-day="17"
                className="h-full p-2 flex flex-col leading-none  text-gray-700 justify-center items-center font-bold text-base shrink-0"
              >
                <p>APR</p>
                <p>17</p>
              </div>
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
              <Match />
            </div>
          </div>
          <div className="bg-white flex h-full p-4 flex-col sm:flex-row justify-center items-center gap-2 shrink-0 border-l border-gray-400">
            <div
              onClick={scrollLeft}
              className="w-6 h-6 flex justify-center items-center text-blue bg-white border border-blue rounded-full hover:bg-blue hover:text-white duration-200 cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div
              onClick={scrollRight}
              className="w-6 h-6 flex justify-center items-center text-blue bg-white border border-blue rounded-full hover:bg-blue hover:text-white duration-200 cursor-pointer"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesNav;