import React, { useState } from 'react';

const testimonials = [
  {
    name: "Robert Spears",
    image: "https://via.placeholder.com/80",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde justo."
  },
  {
    name: "Anna Johnson",
    image: "https://via.placeholder.com/80",
    text: "Doloremque sint facilis quidem eos eveniet accusamus fugiat iste porro voluptate. Ex quo harum accusamus consequatur corporis!"
  },
  {
    name: "Michael Brown",
    image: "https://via.placeholder.com/80",
    text: "Accusantium dolores perferendis dolorum, voluptatem laboriosam necessitatibus quam quae, sint odio amet aspernatur."
  }
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center text-center py-16 bg-gray-50">
      <h2 className="text-teal-500 text-2xl font-semibold mb-2">Testimonials</h2>
      <div className="w-16 h-1 bg-teal-500 mb-6"></div>
      <img
        src={testimonials[current].image}
        alt={testimonials[current].name}
        className="w-20 h-20 rounded-full border-2 border-gray-300 mb-4"
      />
      <p className="text-gray-700 font-semibold">{testimonials[current].name}</p>
      <p className="text-gray-500 italic max-w-2xl px-4">
        “{testimonials[current].text}”
      </p>
      <div className="flex space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${index === current ? 'bg-teal-400' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
      <div className="flex justify-between w-full max-w-lg mt-6">
        <button onClick={prevSlide} className="text-gray-400 hover:text-gray-600">
          <i className="fas fa-chevron-left text-2xl"></i>
        </button>
        <button onClick={nextSlide} className="text-gray-400 hover:text-gray-600">
          <i className="fas fa-chevron-right text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
