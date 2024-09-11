import React from "react";
import { IoIosStar } from "react-icons/io";

const RestaurantInfo = ({ data }) => {
  const mainData = data.data.cards[2].card.card.info;

  console.log(mainData);
  return (
    <div className="w-full h-[200px] flex justify-center">
      <div className="w-1/2 h-full flex flex-col items-center bg-white rounded-3xl border shadow-2xl">
        <div className="mt-5 ml-5">
          <h1 className="text-2xl font-bold">{mainData.name}</h1>
        </div>
        <div className="w-11/12 border border-gray-300 h-2/4 rounded-3xl pl-4 pt-2">
          <div className="flex items-center gap-1 tracking-tight">
            <IoIosStar className="text-white bg-green-700 rounded-full p-[2px]" />
            <span className="font-semibold">{mainData.avgRating} </span>
            <span className=" font-semibold ">
              ({mainData.totalRatingsString})
            </span>
            <span className="font-semibold">
              {" "}
              • {mainData.costForTwoMessage}
            </span>
          </div>
          <div>
            <p className="font-semibold text-sm underline text-orange-500">
              {mainData.cuisines.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
