import React, { useRef } from "react";
import { IoIosStar } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Restaurant = ({ data }) => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  const restaurantdata =
    data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

  const headingtext = data?.data?.cards[1]?.card?.card?.header?.title;

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 800;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  function handelChange(i) {
    const dataid = restaurantdata[i].info.id;
    navigate(`/restaurant/${dataid}`);
  }

  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-[75%] flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight max-sm:text-lg">
            {headingtext}
          </h1>
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
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-hidden max-md:overflow-x-auto scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {restaurantdata.map((items, i) => (
            <div
              className="w-[273px] flex-shrink-0 hover:translate-y-0.5 hover:scale-[0.95] transition-all duration-200 cursor-pointer"
              key={i}
              onClick={() => handelChange(i)}
            >
              <div className="w-[273px] h-[182px] relative">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.info.cloudinaryImageId}`}
                  alt={items.info.name}
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/100 to-transparent rounded-b-3xl"></div>
                <h1 className="absolute bottom-2 left-2 font-bold text-lg text-white z-10">
                  {items?.info?.aggregatedDiscountInfoV3?.header}{" "}
                  {items?.info?.aggregatedDiscountInfoV3?.subHeader}
                </h1>
              </div>
              <div className="pl-4 pr-2 pt-2">
                <h1 className="font-bold">{items.info.name}</h1>
                <div className="flex items-center gap-1">
                  <IoIosStar className="text-white bg-green-700 rounded-full p-[2px]" />
                  <span className="font-semibold">{items.info.avgRating}</span>
                  <LuDot className="mt-[2px]" />
                  <span className="font-bold">{items.info.sla.slaString}</span>
                </div>
                <p className="text-gray-500 truncate">
                  {items.info.cuisines.join(", ")}
                </p>
                <p className="text-gray-500">{items.info.areaName}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="mt-5" />
      </div>
    </div>
  );
};

export default Restaurant;
