
const Blog = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-teal-500">Our Blog</h2>
        <p className="text-gray-500 mt-2">See Our Daily News & Updates</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className=" p-6 rounded-lg ">
              <img
                src="src/img/header.jpg"
                alt="Blog post"
                className="rounded-lg w-full h-40 object-cover shadow-sm"
              />
              <h3 className="mt-4 text-lg font-semibold">Many People Selling Online</h3>
              <p className="text-sm text-gray-500">
                by <span className="text-gray-700 font-medium">Mark Spiker</span> · Jan 18, 2019 · <span className="text-teal-500">News</span>
              </p>
              <p className="mt-2 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente.
              </p>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
          View All Posts
        </button>
      </div>
    </div>
  );
};

export default Blog;
