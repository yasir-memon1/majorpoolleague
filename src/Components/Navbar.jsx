import React, { useState } from "react";
import logo from "../assets/Logo2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Link,  useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) setActiveSubmenu(null); 
  };

  const openSubmenu = (menu) => setActiveSubmenu(menu);
  const closeSubmenu = () => setActiveSubmenu(null);

  const navItems = [
    {
      label: "Find a League",
      link: "/leagues-by-geography",
      submenu: [{
        label: "Leagues by Name",
        link: "/leagues-by-name",
      }, 
        {
          label: "Leagues by Geography",
          link: "/leagues-by-geography",
        },
         {
          label: "Leagues by Size",
          link: "/leagues-by-size",
        }],
    },
    { label: "Calendar", link: "/calendar" },
    { label: "Stats", link: "/stats" },
    { label: "Weekly Scores", link: "/weekly-scores" },
    { label: "Standings", link: "/standings" },
    { label: "Players", link: "/players" },
    {
      label: "Top 100",
      link: "/top-100",
      submenu: [
        {
          label: "Top 100 Current Players",
          link: "/top-100-current-players",
        },
        {
          label: "Top 100 Seasons",
          link: "/top-100-seasons",
        },
        {
          label: "Top 100 Championship Players",
          link: "/top-100-championship-players",
        },
        {
          label: "Top 100 Tournament Players",
          link: "/top-100-tournament-players",
        },
        {
          label: "Top 100 Top Tournament Matches",
          link: "/top-100-top-tournament-matches",
        },
        {
          label: "Top 100 Current Teams",
          link: "/top-100-current-teams",
        },
        {
          label: "Top 100 Team Matches",
          link: "/top-100-team-matches",
        },
        {
          label: "Top 100 Teams",
          link: "/top-100-teams",
        },
        {
          label: "Top 100 Tournament Teams",
          link: "/top-100-tournament-teams",
        },
      ],
    },
    { label: "more",
      link: "/signup",
      submenu: [
        {
          label: "Hall of Fame",
          link: "/hall-of-fame",
        },
        {
          label: "Newsletters",
          link: "/newsletters",
        },
        {
          label: "Shop",
          link: "/shop",
        },
        {
          label: "Post Season",
          link: "/post-season",
        },
        {
          label: "History (AZPL Champions)",
          link: "/history",
        },
        {
          label: "About (About Us)",
          link: "/about",
        },
        {
          label: "LO Sign In",
          link: "/signin",
        },
        {
          label : "Sign Up Here",
          link : "/signup"
        },
        {
          label: "Vote for HoF!",
          link: "/vote"
        },
      ]
     },
    
  ];
  const navigate = useNavigate()
  return (
    <nav className="bg-white w-full h-auto fixed top-0  border-b-2 shadow-md z-[999]">
      <div className="hidden md:flex max-w-7xl 2xl:px-10 flex-wrap items-center justify-between mx-auto p-2">
        <Link
          to="/"
          className="flex items-center space-x-3  mb-2 rtl:space-x-reverse"
        >
          <img src={logo} className="h-12" alt="Flowbite Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Major League Pool
          </span> */}
        </Link>{" "}
        <div className="w-full md:block md:w-auto">
        <ul className="flex flex-col flex-wrap md:gap-y-2 justify-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.link}
                className="block py-2 px-3   rounded-sm bg-transparent text-gray-900 hover:text-blue md:p-0 ease-in-out duration-300"
              >
                {item.label === "more" ? <FontAwesomeIcon icon={faEllipsis} /> : item.label}
              </Link>
              {item.submenu && (
                <ul className="absolute  right-0 mt-2 w-48 drop-shadow-2xl font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm ease-in-out duration-300 transition-transform invisible group-hover:visible" style={{zIndex: 1}}>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.link}
                        className="block px-4 py-2 hover:bg-blue rounded-md duration-200 ease-in-out hover:text-white"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between px-4 py-3">
      <Link
          to="/"
          className="flex items-center space-x-3   rtl:space-x-reverse"
        >
          <img src={logo} className="h-10" alt="Flowbite Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Major League Pool
          </span> */}
        </Link>{" "}
        <button onClick={toggleMobileMenu} className="text-blue">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed  top-0 left-0 h-full w-[50vw] sm:w-64 bg-white transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-blue">
        <Link
          to="/"
          className="flex items-center space-x-3   rtl:space-x-reverse"
        >
          <img src={logo} className="h-10" alt="Flowbite Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Major League Pool
          </span> */}
        </Link>{" "}
          <button onClick={toggleMobileMenu} className="text-blue hover:text-red transition ease-in-out duration-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="py-2">
          {navItems.map((item, index) => (
            <li key={index} className="border-b border-blue ">
              <button
                onClick={() => item.submenu ? openSubmenu(item.label) : navigate(item.link)}
                className="w-full flex justify-between font-semibold items-center px-4 py-3 text-blue duration-200 ease-in-out hover:bg-blue hover:text-white"
              >
                <span>{item.label}</span>
                {item.submenu && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeSubmenu && (
        <div
          className={`fixed  top-0 left-0 h-full w-64 bg-blue transform ${
            activeSubmenu ? "translate-x-[50vw] sm:translate-x-64" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="flex h-[65px] items-center justify-between px-4 py-3 border-b border-gray-700">
            <button onClick={closeSubmenu} className="text-white hover:text-red duration-200 ease-in-out">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="text-lg font-semibold text-white">{activeSubmenu}</div>
            <div></div>
          </div>
          <ul className="py-2">
            {navItems
              .find((item) => item.label === activeSubmenu)
              ?.submenu.map((subItem, subIndex) => (
                <li key={subIndex} className="border-b  border-white">
                  <Link
                    to={subItem.link}
                    className="block px-4 py-3 text-white hover:bg-white duration-300 ease-in-out hover:text-blue"
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}

      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
        />
      )}
    </nav>
  );
};

export default Navbar;
