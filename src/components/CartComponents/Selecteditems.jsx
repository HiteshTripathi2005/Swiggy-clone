import React, { useState, useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Breadcrum from "../Common/breadcrum/Breadcrum";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SelectedItems = () => {
  const [data, setData] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  const loadDataFromLocalStorage = () => {
    const storedData = JSON.parse(localStorage.getItem("selected")) || [];
    const storedQuantities =
      JSON.parse(localStorage.getItem("quantities")) || {};

    const initialQuantities = storedData.reduce((acc, item, index) => {
      acc[item.id] = storedQuantities[item.id] || 1;
      return acc;
    }, {});

    setData(storedData);
    setQuantities(initialQuantities);
  };

  const updateLocalStorage = (newData, newQuantities) => {
    localStorage.setItem("selected", JSON.stringify(newData));
    localStorage.setItem("quantities", JSON.stringify(newQuantities));
  };

  const handleQuantityChange = (itemId, change) => {
    const newQuantities = {
      ...quantities,
      [itemId]: Math.max(0, (quantities[itemId] || 0) + change),
    };

    if (newQuantities[itemId] === 0) {
      const newData = data.filter((item) => item.id !== itemId);
      const { [itemId]: _, ...updatedQuantities } = newQuantities;

      updateLocalStorage(newData, updatedQuantities);
      setData(newData);
      setQuantities(updatedQuantities);

      toast.info("Item removed from the cart", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      updateLocalStorage(data, newQuantities);
      setQuantities(newQuantities);
    }
  };

  const calculateTotalPrice = () => {
    return data
      .reduce((total, item) => {
        const price = item.finalPrice || item.defaultPrice || item.price || 0;
        return total + (price / 100) * (quantities[item.id] || 1);
      }, 0)
      .toFixed(2);
  };

  if (data.length === 0) {
    return (
      <div className="flex flex-col gap-5 items-center justify-center h-screen px-4">
        <h1 className="text-center text-xl font-bold">Your cart is empty</h1>
        <NavLink
          className="px-4 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition duration-300 text-sm"
          to="/"
        >
          Browse Menu
        </NavLink>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrum currentroute="Cart" />
      <h1 className="text-2xl font-bold mb-4 mt-5">Your Cart</h1>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fit/${item.imageId}`}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">
                  {item?.name || "No title"}
                </h3>
                <p className="text-sm text-gray-600 mb-1 line-clamp-2">
                  {item?.description || "No description"}
                </p>
                <div className="flex items-center space-x-1 mb-1">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-sm font-bold">
                    {item?.ratings?.aggregatedRating?.rating || 0}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({item?.ratings?.aggregatedRating?.ratingCountV2 || 0})
                  </span>
                </div>
                <p className="font-bold text-lg">
                  ₹
                  {(
                    (item?.finalPrice ||
                      item?.defaultPrice ||
                      item?.price ||
                      0) / 100
                  ).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center border border-gray-300 rounded-full">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="px-3 py-1 text-green-600"
                >
                  <BiMinus />
                </button>
                <span className="px-3 py-1 font-semibold">
                  {quantities[item.id]}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="px-3 py-1 text-green-600"
                >
                  <BiPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-white shadow-md rounded-lg p-4 sticky bottom-0">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-xl font-bold">₹{calculateTotalPrice()}</span>
        </div>
        <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-green-700 transition duration-300">
          Checkout
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SelectedItems;
