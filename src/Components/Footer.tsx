import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-teal-500 text-center py-8">
        <div className="flex justify-between items-center px-20">
          <div className="text-left text-[#ffffffde]">
            <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
            <p className="text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Email"
              className="p-2 w-64 focus:outline-none text-gray-700 border-b border-white placeholder-white bg-transparent"
            />
            <button className="bg-white text-black px-4 py-2">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-8 md:px-20  pt-25 pb-30">
        {/* Flex container for sections in one row */}
        <div className="flex justify-between items-start gap-10">
          {/* About Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4  text-[#ffffffc9]">
              About
            </h3>
            <p className="text-sm text-gray-400 w-80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident rerum unde possimus molestias dolorem fuga, illo quis
              fugiat!
            </p>
          </div>

          {/* Navigation Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4  text-[#ffffffc9]">
              Navigations
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4  text-[#ffffffc9]">
              Follow Us
            </h3>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="hover:text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {/* Search Section */}
          <div className="flex-1 flex items-center border border-[#ffffff66] ">
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 w-60 focus:outline-none text-gray-700 bg-gray-800 placeholder-gray-500 rounded"
            />
            <button className="bg-teal-500 text-white px-4 py-2 ">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-6 pb-20">
        <div className="border-t border-gray-700  mx-20"></div>
        <p className="text-gray-500 text-sm mt-4">
          Copyright &copy; 2025 All rights reserved | This template is made with{" "}
          <span className="text-red-500">&#9829;</span> by TestDemo
        </p>
      </div>
    </footer>
  );
}

export default Footer;
