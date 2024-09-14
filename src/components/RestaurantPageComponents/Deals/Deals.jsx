import React, { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Deals = ({ data }) => {
  const scrollContainerRef = useRef(null);

  const offerData =
    data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];

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
    <div className="w-full flex items-center justify-center px-4 mt-5">
      <div className="w-full max-w-[90%] md:max-w-[60%] overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold  max-sm:text-xl">Deals for you</h1>
          <div className="flex gap-3">
            <button
              aria-label="Scroll left"
              className="bg-[#d7d8d9] text-black px-2 py-2 rounded-full md:px-3 md:py-3"
              onClick={() => scroll("left")}
            >
              <GoArrowLeft />
            </button>
            <button
              aria-label="Scroll right"
              className="bg-[#d7d8d9] text-black px-2 py-2 rounded-full md:px-3 md:py-3"
              onClick={() => scroll("right")}
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-hidden max-md:overflow-x-auto"
        >
          {offerData.map((item, i) => (
            <div
              key={i}
              className="flex border rounded-3xl h-[80px] min-w-[200px] md:min-w-[300px] p-2 md:p-4 items-center flex-shrink-0"
            >
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${item.info.offerLogo}`}
                alt="offer logo"
                className="w-8 h-8 md:w-12 md:h-12"
              />
              <div className="flex flex-col justify-center ml-2 md:ml-4 w-full">
                <div className="font-bold truncate text-xs md:text-sm">
                  {item.info.header}
                </div>
                <h1 className="truncate text-xs md:text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  {item.info.couponCode || item.info.description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
