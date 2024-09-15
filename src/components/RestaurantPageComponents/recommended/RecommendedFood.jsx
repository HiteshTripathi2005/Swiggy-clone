import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const RecommendedFood = ({ data }) => {
  const scrollContainerRef = useRef(null);

  const mainData =
    data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.carousel;

  console.log(data);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 350;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!mainData || mainData.length === 0) {
    return <div className="text-center text-gray-500">No deals available</div>;
  }

  return (
    <div className="w-full flex justify-center items-center mt-5">
      <div className="w-[90%] md:w-[60%] overflow-x-hidden px-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold font-playfair">Top Picks</h1>
          <div className="flex gap-3">
            <button
              aria-label="Scroll left"
              className="bg-[#d7d8d9] text-black px-2 py-2 rounded-full md:px-3 md:py-3 transition-colors duration-300 hover:bg-gray-300 hover:text-black hover:shadow-lg"
              onClick={() => scroll("left")}
            >
              <GoArrowLeft />
            </button>
            <button
              aria-label="Scroll right"
              className="bg-[#d7d8d9] text-black px-2 py-2 rounded-full md:px-3 md:py-3 transition-colors duration-300 hover:bg-gray-300 hover:text-black hover:shadow-lg"
              onClick={() => scroll("right")}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex items-center justify-start gap-4 overflow-x-auto md:overflow-x-hidden"
        >
          {mainData.map((item, i) => (
            <div
              key={i}
              className="relative min-w-[250px] md:min-w-[400px] min-h-[200px] flex-shrink-0"
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${item.creativeId}`}
                alt={item.dish.info.name || "Food Image"}
                className="w-full h-[200px] md:h-[300px] object-cover rounded-3xl"
              />
              <h1 className="absolute bottom-4 left-4 text-white text-sm md:text-lg">
                ₹
                {item.dish.info.defaultPrice / 100 ||
                  item.dish.info.price / 100}
              </h1>
              <button className="absolute bottom-4 right-4 bg-white text-green-600 border py-1 px-4 md:px-8 text-center rounded-2xl text-xs md:text-lg transition-transform duration-300 transform hover:scale-105">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedFood;
