import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Trending() {
  return (
    <div className="bg-gray-100 py-8 px-32">
      <div className="container mx-auto">
        <h2 className="text-1xl font-semibold text-teal-500 mb-6">Trending Today</h2>
        <div className="grid grid-cols-2 gap-6"> {/* 2 columns, 3 rows */}
          
          {/* Card 1 */}
          <div className="bg-white shadow-md overflow-hidden flex rounded-lg relative">
            <img
              src="/src/img/f1.jpeg"
              alt="House with Swimming Pool"
              className="w-[40%] h-[215px] object-cover"
            />
            <div className="p-3 flex flex-col justify-between w-[50%]">
              <div>
                <span className="text-sm text-gray-500">Real Estate</span>
                <h3 className="text-lg font-semibold mt-2">House with Swimming Pool</h3>
                <p className="text-sm text-gray-600">Don St, Brooklyn, New York</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">(3 Reviews)</span>
                </div>
              </div>
            </div>
            {/* Heart Icon */}
            <div className="absolute top-2 right-2 text-teal-500 bg-gray-100 w-7 h-7 rounded-full hover:text-teal-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md overflow-hidden flex rounded-lg relative">
            <img
              src="/src/img/f2.jpg"
              alt="Red Luxury Car"
              className="w-[40%] h-[215px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between w-[50%]">
              <div>
                <span className="text-sm text-gray-500">Cars & Vehicles</span>
                <h3 className="text-lg font-semibold mt-2">Red Luxury Car</h3>
                <p className="text-sm text-gray-600">Don St, Brooklyn, New York</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">(3 Reviews)</span>
                </div>
              </div>
            </div>
            {/* Heart Icon */}
            <div className="absolute top-2 right-2 text-teal-500 bg-gray-100 w-7 h-7 rounded-full hover:text-teal-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md overflow-hidden flex rounded-lg relative">
            <img
              src="/src/img/f3.jpg"
              alt="Wooden Chair & Table"
              className="w-[40%] h-[215px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between w-[50%]">
              <div>
                <span className="text-sm text-gray-500">Furniture</span>
                <h3 className="text-lg font-semibold mt-2">Wooden Chair & Table</h3>
                <p className="text-sm text-gray-600">Don St, Brooklyn, New York</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">(3 Reviews)</span>
                </div>
              </div>
            </div>
            {/* Heart Icon */}
            <div className="absolute top-2 right-2 text-teal-500 bg-gray-100 w-7 h-7 rounded-full hover:text-teal-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md overflow-hidden flex rounded-lg relative">
            <img
              src="/src/img/f4.jpeg"
              alt="House with Swimming Pool"
              className="w-[40%] h-[215px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between w-[50%]">
              <div>
                <span className="text-sm text-gray-500">Real Estate</span>
                <h3 className="text-lg font-semibold mt-2">House with Swimming Pool</h3>
                <p className="text-sm text-gray-600">Don St, Brooklyn, New York</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">(3 Reviews)</span>
                </div>
              </div>
            </div>
            {/* Heart Icon */}
            <div className="absolute top-2 right-2 text-teal-500 bg-gray-100 w-7 h-7 rounded-full hover:text-teal-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-md overflow-hidden flex rounded-lg relative">
            <img
              src="/src/img/f5.jpeg"
              alt="iPhone X Gray"
              className="w-[40%] h-[215px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between w-[50%]">
              <div>
                <span className="text-sm text-gray-500">Electronics</span>
                <h3 className="text-lg font-semibold mt-2">iPhone X Gray</h3>
                <p className="text-sm text-gray-600">Don St, Brooklyn, New York</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">(3 Reviews)</span>
                </div>
              </div>
            </div>
            {/* Heart Icon */}
            <div className="absolute top-2 right-2 text-teal-500 bg-gray-100 w-7 h-7 rounded-full hover:text-teal-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white shadow-md overflow-hidden flex rounded-lg relative">
            <img
              src="/src/img/f6.jpg"
              alt="Wooden Chair & Table"
              className="w-[40%] h-[215px] object-cover"
            />
            <div className="p-4 flex flex-col justify-between w-[50%]">
              <div>
                <span className="text-sm text-gray-500">Electronics</span>
                <h3 className="text-lg font-semibold mt-2">Wooden Chair & Table</h3>
                <p className="text-sm text-gray-600">Don St, Brooklyn, New York</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                  <span className="ml-2 text-sm text-gray-600">(3 Reviews)</span>
                </div>
              </div>
            </div>
            {/* Heart Icon */}
            <div className="absolute top-2 right-2 text-teal-500 bg-gray-100 w-7 h-7 rounded-full hover:text-teal-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Trending;
