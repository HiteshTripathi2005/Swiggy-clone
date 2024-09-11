import { BiSolidOffer } from "react-icons/bi";
import SwiggyLogo from "../../../img/logos/SwiggyLogo";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline, IoHelpBuoy, IoLogInOutline } from "react-icons/io5";
import { PiShoppingCart } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full h-20 shadow-md">
      <div className="w-[80%] flex items-center justify-between max-[1200px]:w-[95%] max-[1000px]:hidden">
        <div className="flex items-center gap-12">
          <div>
            <NavLink to={"/"}>
              <SwiggyLogo />
            </NavLink>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <p className="font-suse text-sm border-b-2 border-black hover:border-orange-500 hover:text-orange-500 duration-200 font-bold">
              Other
            </p>
            <FaAngleDown className="text-orange-500  " />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200">
            <IoBagOutline className="text-xl" />
            <p className="text-xl font-suse text-center">Swiggy Corporate</p>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200">
            <IoIosSearch className="text-xl" />
            <p className="text-xl font-suse text-center">Search</p>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200">
            <BiSolidOffer className="text-xl" />
            <p className="text-xl font-suse text-center">Offers</p>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200">
            <IoHelpBuoy className="text-xl" />
            <p className="text-xl font-suse text-center">Help</p>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200">
            <IoLogInOutline className="text-xl" />
            <p className="text-xl font-suse text-center">Sign In</p>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-500 cursor-pointer transition-all duration-200">
            <PiShoppingCart className="text-xl" />
            <p className="text-xl font-suse text-center">Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
