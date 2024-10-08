import { Breadcrumbs, Typography } from "@mui/joy";
import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrum = (props) => {
  return (
    <div className="w-full flex justify-center px-4 mt-4">
      <Breadcrumbs size="xs">
        <NavLink
          className={"text-gray-500 hover:text-black hover:underline"}
          to={"/"}
        >
          Home
        </NavLink>
        <Typography className={"font-bold"}>{props.currentroute}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrum;
