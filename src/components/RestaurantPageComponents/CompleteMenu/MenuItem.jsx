import React from "react";
import { FaStar } from "react-icons/fa";

const MenuItem = (data) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-gray-200">
      <div className="flex-1 w-full md:w-auto">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 border border-green-500 flex items-center justify-center flex-shrink-0">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="font-semibold text-lg">{data.title}</h3>
        </div>
        <div className="flex justify-between items-center mt-2 md:mt-1">
          <p className="font-bold text-lg">₹359</p>
          <div className="md:hidden">
            <button className="px-4 py-1 bg-white text-green-600 border border-green-600 rounded font-semibold hover:bg-green-50">
              ADD
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-1 text-sm text-green-600 mt-1">
          <FaStar className="text-green-600" />
          <span className="text-green-600 font-bold">{data.rating}</span>
          <span className="text-gray-500 font-bold">({data.ratingcount})</span>
        </div>
        <p className="text-base font-bold text-gray-600 mt-2">
          {data.description}
        </p>
      </div>
      <div className="flex flex-row md:flex-col items-center md:items-end mt-4 md:mt-0 w-full md:w-auto">
        <div className="relative w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${data.img}`}
            alt="Combo meal"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4 md:ml-0 flex flex-col items-center md:items-end">
          <button className="hidden md:block mt-2 px-4 py-1 bg-white text-green-600 border border-green-600 rounded font-semibold hover:bg-green-50">
            ADD
          </button>
          <span className="text-xs text-gray-500 mt-1">Customisable</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
