import { BiSolidOffer } from "react-icons/bi";
import SwiggyLogo from "../../../img/logos/SwiggyLogo";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline, IoHelpBuoy, IoLogInOutline } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import SelectLocation from "../location/SelectLocation";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full h-20 shadow-md">
      <div className="w-[80%] flex items-center justify-between max-[1200px]:w-[95%]">
        {/* Logo and Location Section */}
        <div className="flex items-center gap-12 max-[1000px]:gap-6 max-sm:ml-2">
          <NavLink to={"/"}>
            <SwiggyLogo />
          </NavLink>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="font-suse text-sm border-b-2 border-black hover:border-orange-500 hover:text-orange-500 duration-200 font-bold">
              <SelectLocation />
            </div>
            <FaAngleDown className="text-orange-500" />
          </div>
        </div>

        {/* Links for Larger Screens */}
        <div className="flex items-center gap-10 max-[1000px]:hidden">
          {navItems.map((item, index) => (
            <NavLink to={"/making"}>
              <div
                key={index}
                className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200"
              >
                {item.icon}
                <p className="text-xl font-suse text-center">{item.label}</p>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Icons for Smaller Screens */}
        <div className="flex items-center gap-5 min-[1000px]:hidden">
          {navIcons.map((icon, index) => (
            <NavLink to={"/making"}>
              <div
                key={index}
                className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200"
              >
                {icon}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

const navItems = [
  { label: "Swiggy Corporate", icon: <IoBagOutline className="text-xl" /> },
  { label: "Search", icon: <IoIosSearch className="text-xl" /> },
  { label: "Offers", icon: <BiSolidOffer className="text-xl" /> },
  { label: "Help", icon: <IoHelpBuoy className="text-xl" /> },
  { label: "Sign In", icon: <IoLogInOutline className="text-xl" /> },
  { label: "Cart", icon: <PiShoppingCart className="text-xl" /> },
];

const navIcons = [
  <IoIosSearch className="text-2xl" />,
  <FaRegUserCircle className="text-2xl" />,
  <PiShoppingCart className="text-2xl" />,
];

export default Navbar;
