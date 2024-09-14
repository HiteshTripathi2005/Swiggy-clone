import { useNavigate } from "react-router-dom";
import React from "react";
import { IoIosStar } from "react-icons/io";
import { LuDot } from "react-icons/lu";

const DeliveryRes = ({ data }) => {
  const restaurantdata =
    data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

  const navigate = useNavigate();

  function handleChange(i) {
    const dataid = restaurantdata[i].info.id;
    navigate(`/restaurant/${dataid}`);
  }

  return (
    <div className="w-full flex justify-center mt-5">
      <div className="w-[75%] max-sm:w-[95%] grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2">
        {restaurantdata.map((items, i) => (
          <div
            className="w-full hover:translate-y-1 hover:scale-95 transition-transform duration-300 cursor-pointer"
            key={i}
            onClick={() => handleChange(i)}
            role="button"
            aria-label={`Navigate to ${items.info.name}`}
          >
            <div className="w-full h-[182px] max-sm:h-[150px] relative">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.info.cloudinaryImageId}`}
                alt={items.info.name}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/100 to-transparent rounded-b-3xl"></div>
              <h1 className="absolute bottom-2 left-2 font-bold text-lg max-sm:text-sm text-white z-10">
                {items?.info?.aggregatedDiscountInfoV3?.header}{" "}
                {items?.info?.aggregatedDiscountInfoV3?.subHeader}
              </h1>
            </div>
            <div className="pl-4 pr-2 pt-2">
              <h1 className="font-bold max-sm:text-sm">{items.info.name}</h1>
              <div className="flex items-center gap-1">
                <IoIosStar className="text-white bg-green-700 rounded-full p-1 max-sm:text-sm" />
                <span className="font-semibold max-sm:text-sm">
                  {items.info.avgRating}
                </span>
                <LuDot className="mt-[2px]" />
                <span className="font-bold max-sm:text-sm">
                  {items.info.sla.slaString}
                </span>
              </div>
              <p className="text-gray-500 truncate max-sm:text-sm">
                {items.info.cuisines.join(", ")}
              </p>
              <p className="text-gray-500 max-sm:text-sm">
                {items.info.areaName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryRes;
