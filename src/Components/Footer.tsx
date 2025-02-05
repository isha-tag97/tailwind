

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      {/* Newsletter Section */}
      <div className="bg-teal-500 text-center py-6">
        <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
        <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-l-md focus:outline-none text-gray-700"
          />
          <button className="bg-white text-teal-600 px-4 py-2 rounded-r-md font-semibold">Subscribe</button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="px-8 md:px-20 lg:px-32 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident rerum unde possimus molestias dolorem fuga, illo quis fugiat!
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Follow Us and Search Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
            </div>
            <div className="mt-6">
              <input
                type="text"
                placeholder="Search products..."
                className="p-2 w-2/3 rounded-l-md focus:outline-none text-gray-700"
              />
              <button className="bg-teal-500 text-white px-4 py-2 rounded-r-md">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 border-t border-gray-700">
        <p className="text-gray-500 text-sm">
          Copyright &copy; 2025 All rights reserved | This template is made with <span className="text-red-500">&#9829;</span> by TestDemo
        </p>
      </div>
    </footer>
  );
}

export default Footer;
