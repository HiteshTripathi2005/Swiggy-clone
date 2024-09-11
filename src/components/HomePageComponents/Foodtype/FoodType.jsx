import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const FoodType = ({ data }) => {
  const scrollContainerRef = useRef(null);

  const imgData =
    data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];

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

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col w-[75%] mt-5 overflow-hidden">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold font-playfair">
              {(data?.data?.cards[0]?.card?.card?.id || "").replace(/_/g, " ")}?
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              className="bg-[#d7d8d9] text-black px-[10px] py-[10px] rounded-full"
              onClick={() => scroll("left")}
            >
              <GoArrowLeft />
            </button>
            <button
              className="bg-[#d7d8d9] text-black px-[10px] py-[10px] rounded-full"
              onClick={() => scroll("right")}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div ref={scrollContainerRef} className="flex gap-5 overflow-x-hidden">
          {imgData.map((item, i) => (
            <img
              key={i}
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
              alt="foodimg"
              className="w-full h-48"
            />
          ))}
        </div>
        <hr className="mt-5 border-gray-300 mb-5" />
      </div>
    </div>
  );
};

export default FoodType;
