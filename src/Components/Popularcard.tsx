import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    category: "Car & Vehicles",
    title: "Red Luxury Car",
    location: "West Orange, New York",
    image: "src/img/f2.jpg",
  },
  {
    id: 2,
    category: "Real Estate",
    title: "House with Swimming Pool",
    location: "West Orange, New York",
    image: "src/img/f3.jpg",
  },
  {
    id: 3,
    category: "Furniture",
    title: "Wooden Chair & Table",
    location: "West Orange, New York",
    image: "src/img/f4.jpeg",
  },
  {
    id: 4,
    category: "Electronics",
    title: "iPhone X",
    location: "West Orange, New York",
    image: "src/img/f1.jpeg",
  },
  {
    id: 5,
    category: "Real Estate",
    title: "Modern House",
    location: "West Orange, New York",
    image: "src/img/f6.jpg",
  },
];

function Popularcard() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-center text-2xl font-semibold text-teal-500">
        Popular Products
      </h2>
      <p className="text-center text-gray-500 mb-6">
        Lorem Ipsum Dolor Sit Amet
      </p>

      {/* First div for the first 3 products */}
      <div className="grid md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg overflow-hidden group shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-cover group-hover:opacity-80 transition"
            />
            <div className="absolute bottom-3 left-3 text-white rounded-lg">
              <div className="text-xs bg-teal-500 px-3 py-1 w-22 rounded-full flex justify-center items-center whitespace-nowrap">
                {product.category}
              </div>

              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm">{product.location}</p>
            </div>

            {/* Heart Icon */}
            <button className="absolute bottom-3 right-3 bg-[#ffffff57] w-10 h-10 p-2 rounded-full hover:bg-gray-100">
              <FontAwesomeIcon icon={faHeart} className="text-white" />
            </button>
          </div>
        ))}
      </div>

      {/* Second div for the last 2 products */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {products.slice(3, 5).map((product) => (
          <div
            key={product.id}
            className="relative rounded-lg overflow-hidden group shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-cover group-hover:opacity-80 transition"
            />
            <div className="absolute bottom-3 left-3 text-white rounded-lg">
              <div className="text-xs bg-teal-500 px-3 py-1 w-22 rounded-full flex justify-center items-center whitespace-nowrap">
                {product.category}
              </div>

              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm">{product.location}</p>
            </div>

            {/* Heart Icon */}
            <button className="absolute bottom-3 right-3 bg-[#ffffff57] w-10 h-10 p-2 rounded-full hover:bg-gray-100">
              <FontAwesomeIcon icon={faHeart} className="text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popularcard;
