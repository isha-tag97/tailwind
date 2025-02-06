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
} from "@fortawesome/free-solid-svg-icons";
import Popularcard from "./Components/Popularcard";
import Trending from "./Components/Trending";
import Testimonial from "./Components/Testimonial";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";

const services = [
  { serviceName: "Real Estate", count: "3,921", icon: faBuilding },
  { serviceName: "Books & Magazines", count: "398", icon: faBook },
  { serviceName: "Furniture", count: "1,229", icon: faCouch },
  { serviceName: "Electronics", count: "32,891", icon: faTv },
  { serviceName: "Cars & Vehicles", count: "29,221", icon: faCar },
  { serviceName: "Other", count: "219", icon: faEllipsisH },
];

const featuredAds = [
  {
    category: "Electronics",
    title: "iPhone X gray",
    location: "Don St, Brooklyn, New York",
    reviews: "3 Reviews",
    image: "src/img/f1.jpeg",
  },
  {
    category: "Cars & Vehicles",
    title: "Red Luxury Car",
    location: "Don St, Brooklyn, New York",
    reviews: "3 Reviews",
    image: "src/img/f2.jpg",
  },
  {
    category: "Real Estate",
    title: "House with Swimming Pool",
    location: "Don St, Brooklyn, New York",
    reviews: "3 Reviews",
    image: "src/img/f3.jpg",
  },
  {
    category: "Furniture",
    title: "Wooden Chair & Table",
    location: "Don St, Brooklyn, New York",
    reviews: "3 Reviews",
    image: "src/img/f4.jpeg",
  },
];

const ServiceCard = ({ serviceName, count, icon }) => (
  <div className="flex flex-col items-center justify-center p-4">
    <div className="text-teal-500 text-3xl mb-2">
      <FontAwesomeIcon icon={icon} />
    </div>
    <p className="text-gray-500 text-sm text-center mb-2">{serviceName}</p>
    <p className="text-black-500 text-sm bg-gray-300 rounded-xl px-2 py-1 text-center">
      {count}
    </p>
  </div>
);

const FeaturedAdCard = ({ category, title, location, reviews, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <span className="text-gray-500 text-sm bg-gray-300 rounded-xl px-2 py-1">
        {category}
      </span>
      <h6 className="text-teal-500 text-lg whitespace-nowrap">{title}</h6>
      <p className="text-gray-500 text-sm">{location}</p>
      <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
        <span>{reviews}</span>
        <button className="relative text-teal-500 bg-gray-100 w-[28px] h-[28px] bottom-[85px] rounded-3xl hover:text-teal-600">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  </div>
);

const Test = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
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

        {/* Services Section */}
        <div className="relative bottom-[50px] bg-white rounded-lg mt-4 w-[80%] grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-4">
          {services.map((service) => (
            <ServiceCard key={service.serviceName} {...service} />
          ))}
        </div>

        {/* Featured Ads Section */}
        <div className="mt-6 w-[80%] mx-auto">
          <h2 className="text-2xl font-bold mb-4">Featured Ads</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {featuredAds.map((ad, index) => (
              <FeaturedAdCard key={index} {...ad} />
            ))}
          </div>
        </div>
      </div>
      <Popularcard />
      <Trending />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
};

export default Test;
