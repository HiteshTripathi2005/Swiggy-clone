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
      <div className="w-[90%] flex items-center justify-between lg:w-[95%]">
        {/* Logo and Location Section */}
        <div className="flex items-center gap-12 lg:gap-6 sm:ml-2 max-[400px]:gap-5">
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
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item, index) => (
            <NavLink to={item.page} key={index}>
              <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200">
                {item.icon}
                <p className="text-xl font-suse text-center">{item.label}</p>
              </div>
            </NavLink>
          ))}
        </div>

        {/* Icons for Smaller Screens */}
        <div className="flex items-center gap-5 lg:hidden ">
          {navIcons.map((item, index) => (
            <NavLink to={item.page} key={index}>
              <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200">
                {item.icon}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

const navItems = [
  {
    label: "Swiggy Corporate",
    page: "/making",
    icon: <IoBagOutline className="text-xl" />,
  },
  {
    label: "Search",
    page: "/making",
    icon: <IoIosSearch className="text-xl" />,
  },
  {
    label: "Offers",
    page: "/making",
    icon: <BiSolidOffer className="text-xl" />,
  },
  { label: "Help", page: "/making", icon: <IoHelpBuoy className="text-xl" /> },
  {
    label: "Sign In",
    page: "/making",
    icon: <IoLogInOutline className="text-xl" />,
  },
  {
    label: "Cart",
    page: "/cart",
    icon: <PiShoppingCart className="text-xl" />,
  },
];

const navIcons = [
  {
    icon: <IoIosSearch className="text-2xl" aria-label="Search" />,
    page: "/making",
  },
  {
    icon: <FaRegUserCircle className="text-2xl" aria-label="User" />,
    page: "/making",
  },
  {
    icon: <PiShoppingCart className="text-2xl" aria-label="Cart" />,
    page: "/cart",
  },
];

export default Navbar;
