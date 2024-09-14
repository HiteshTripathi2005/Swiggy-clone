import React from "react";
import { IoIosBicycle, IoIosPin, IoIosStar, IoIosTime } from "react-icons/io";

const RestaurantInfo = ({ data }) => {
  const mainData = data?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="w-full flex justify-center px-4 mt-4">
      <div className="w-full lg:w-1/2 flex flex-col bg-white rounded-xl border border-gray-200 shadow-lg p-4 sm:p-5">
        {/* Restaurant Name */}
        <div className="w-full">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            {mainData.name}
          </h1>
        </div>

        {/* Rating, Cost for Two */}
        <div className="flex items-center text-gray-700 mt-2 text-sm sm:text-base">
          <div className="flex items-center">
            <IoIosStar className="text-white bg-green-700 rounded-full p-[2px]" />
            <span className="font-semibold ml-1">{mainData.avgRating}</span>
            <span className="text-xs sm:text-sm text-gray-500 ml-1">
              ({mainData.totalRatingsString})
            </span>
          </div>
          <span className="ml-2">•</span>
          <span className="ml-2 font-semibold">
            {mainData.costForTwoMessage}
          </span>
        </div>

        {/* Cuisines */}
        <div className="mt-2">
          <p className="text-xs sm:text-sm font-semibold text-orange-500 underline">
            {mainData.cuisines.join(", ")}
          </p>
        </div>

        {/* Outlet and Delivery Time */}
        <div className="mt-2 text-xs sm:text-sm text-gray-700">
          <p className="flex items-center font-bold">
            <IoIosPin className="text-gray-500" />
            <span className="ml-2 font-normal">{mainData.areaName}</span>
          </p>
          <p className="flex items-center mt-1">
            <IoIosTime className="text-gray-500" />
            <span className="ml-2">{mainData.sla.slaString}</span>
          </p>
        </div>

        {/* Distance and Delivery Fee */}
        <div className="flex items-center mt-3 text-gray-600 border-t pt-3 text-xs sm:text-sm">
          <IoIosBicycle className="text-gray-600" />
          <span className="ml-2">
            {mainData?.feeDetails?.message?.replace(/<\/?b>/g, "") ||
              "Delivered & charged by the restaurant"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
