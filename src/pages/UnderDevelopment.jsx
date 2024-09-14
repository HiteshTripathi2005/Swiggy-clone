import React from "react";
import { NavLink } from "react-router-dom";

const UnderDevelopment = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen bg-black">
      <h1 className="text-4xl text-white text-center">
        Page is under development plz go back to home
      </h1>
      <NavLink
        to={"/"}
        className="text-white text-2xl border px-7 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-500"
      >
        Home
      </NavLink>
    </div>
  );
};

export default UnderDevelopment;
