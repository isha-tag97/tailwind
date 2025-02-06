import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Robert Spears",
    image: "src/img/c1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde justo."
  },
  {
    name: "Anna Johnson",
    image: "src/img/c2.jpeg",
    text: "Doloremque sint facilis quidem eos eveniet accusamus fugiat iste porro voluptate. Ex quo harum accusamus consequatur corporis!"
  },
  {
    name: "Michael Brown",
    image: "src/img/c3.jpg",
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
    <div className="relative w-full py-6 bg-gray-50 flex flex-col items-center text-center">
      <h2 className="text-teal-500 text-2xl font-semibold mb-1">Testimonials</h2>
      <div className="w-16 h-1 bg-teal-500 mb-3"></div>

      <div className="relative h-56 w-full max-w-4xl overflow-hidden rounded-lg md:h-80">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-2 border-gray-300 mb-2"
            />
            <p className="text-gray-700 font-semibold">{testimonial.name}</p>
            <div className="flex items-center space-x-8">
              <FontAwesomeIcon icon={faChevronLeft} className="text-teal-500 text-lg cursor-pointer bg-gray-300 p-2 h-5 w-5 rounded-full" onClick={prevSlide} />
              <p className="text-gray-500 italic max-w-2xl px-4">
                “{testimonial.text}”
              </p>
              <FontAwesomeIcon 
  icon={faChevronRight} 
  className="text-teal-500 text-lg cursor-pointer bg-gray-300 p-2 h-5 w-5 rounded-full" 
  onClick={nextSlide} 
/>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === current ? "bg-teal-400" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
