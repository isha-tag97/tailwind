import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faBook,
  faCouch,
  faTv,
  faCar,
  faEllipsisH,
  faHeart,
  faLocationDot,
  faChevronRight,
  faChevronLeft,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import Popularcard from "./Components/Popularcard";
import Trending from "./Components/Trending";
import Testimonial from "./Components/Testimonial";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

const Test = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100"}>
      <div className="min-h-screen">
        {/* Header Section */}
        <div className="relative bg-cover bg-center h-[500px] flex flex-col justify-start items-center text-white bg-[url('./img/header.jpg')]">
          <header className="relative w-[1100px] mt-5 bg-white rounded-sm z-10 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
              <h1 className="text-xl font-bold text-black flex items-center">
                TEST<span className="text-teal-500">DEMO</span>
              </h1>
              <nav className="flex items-center space-x-4 text-black">
                <a href="#" className="text-teal-500 hover:text-teal-300">
                  Home
                </a>
                <div className="relative group">
                  <button className="hover:text-teal-300">About</button>
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Our Story
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Team
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Careers
                    </a>
                  </div>
                </div>
                <a href="#" className="hover:text-teal-300">
                  Blog
                </a>
                <a href="#" className="hover:text-teal-300">
                  Contact
                </a>
                <span className="text-gray-400">|</span>
                <a href="#" className="hover:text-teal-300">
                  Log in
                </a>
                <a href="#" className="text-teal-500 hover:text-teal-300">
                  Register
                </a>
                <button className="bg-teal-500 px-4 py-2 rounded-lg hover:bg-teal-600">
                  +Test
                </button>
              </nav>
            </div>
          </header>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="fixed top-5 right-5 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-teal-600 transition"
          >
            {darkMode ? (
              <FontAwesomeIcon icon={faSun} className="text-yellow-300" />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="text-gray-300" />
            )}
          </button>

          {/* Hero Content */}
          <div className="text-center px-4 mt-16">
            <h2 className="text-4xl">Largest Classifieds In The World</h2>
            <p className="mt-2 text-lg text-gray-500">
              You can buy, sell anything you want.
            </p>
            <div className="mt-6 w-[900px] shadow-md rounded-lg p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center bg-[#ffffff4f]">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="border border-gray-300 text-gray-500 rounded-sm p-2 flex-1 w-full md:w-auto bg-white"
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="Location"
                  className="border border-gray-300 rounded-sm p-2 flex-1 w-full md:w-auto text-gray-500 bg-white pr-8"
                />
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
                />
              </div>

              <select className="border border-gray-300 text-gray-500 bg-white rounded-sm p-2 flex-1 w-full md:w-auto">
                <option>All Categories</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
              <button className="bg-teal-500 text-white px-4 py-2 rounded-sm hover:bg-teal-600 w-[100px]">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        <Popularcard />
        <Trending />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default Test;
