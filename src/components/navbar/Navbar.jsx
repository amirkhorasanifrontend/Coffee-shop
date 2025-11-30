import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiShoppingBag, HiMiniMoon } from "react-icons/hi2";
import { BiSolidUser } from "react-icons/bi";
import { RiSearchFill } from "react-icons/ri";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { GiCoffeeBeans } from "react-icons/gi";

export default function Topbar() {
  return (
    <div className="fixed w-full top-0 px-5 py-3.5 shadow-lg z-50 bg-creamlight">
      <ul className="flex gap-6 items-center font-semibold text-brown">

        {/* Logo */}
        <li className="flex items-center">
          <GiCoffeeBeans className="text-5xl" />
          <p className="text-4xl ml-1 font-black text-initial">Coffee</p>
        </li>

        {/* Search */}
        <li className="relative">
          <input
            type="text"
            placeholder="Search Coffee"
            className="bg-black/10 px-4 h-12 w-65 rounded-4xl"
          />
          <IoSearchCircleSharp className="absolute text-5xl top-0 right-0.5" />
        </li>

        {/* Main menu */}
        <li>Home</li>
        <li>Explore</li>

        {/* Single Coffee dropdown */}
        <li className="flex items-center gap-1 cursor-pointer transition-all ease-in-out duration-300 hover:translate-y-2 group relative">
          Single Coffee <IoIosArrowDown />
          <ul className="text-green top-6 pt-4 absolute hidden group-hover:block shadow-lg leading-8 rounded-xl bg-creamlight">
            {["Colombia", "Ethiopia", "Chocolate", "Brazil", "Costa Rica", "Kenya-AA", "Sumatra"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`hover:bg-black/5 text-center p-2 ${
                    index !== 6 ? "border-b-2 border-black/30" : ""
                  } w-40`}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </li>

        {/* Blended Coffee dropdown */}
        <li className="flex items-center gap-1 cursor-pointer transition-all ease-in-out duration-300 hover:translate-y-2 group relative">
          Blended Coffee <IoIosArrowDown />
          <ul className="text-green top-6 pt-4 absolute hidden group-hover:block shadow-lg leading-8 rounded-xl bg-creamlight">
            {[
              "Daily Blend",
              "House Blend",
              "Morning Blend",
              "Breakfast Blend",
              "Classic Blend",
              "Harmony Blend",
              "Golden Blend",
              "Balanced Blend",
            ].map((item, index) => (
              <li
                key={index}
                className={`hover:bg-black/5 text-center p-2 ${
                  index !== 7 ? "border-b-2 border-black/30" : ""
                } w-40`}
              >
                {item}
              </li>
            ))}
          </ul>
        </li>

        <li>Products</li>
        <li>About</li>
        <li>FAQs</li>

        {/* Buttons */}
        <li>
          <button className="cursor-pointer bg-black/10 p-3 text-2xl rounded-4xl transition-all ease-in-out duration-300 hover:translate-y-1">
            <HiMiniMoon />
          </button>
        </li>

        <li>
          <button className="cursor-pointer bg-black/10 p-3 text-2xl rounded-4xl transition-all ease-in-out duration-300 hover:translate-y-1">
            <HiShoppingBag />
          </button>
        </li>

        <li>
          <button className="cursor-pointer w-35 bg-black/10 p-3 text-2xl rounded-4xl transition-all ease-in-out duration-300 hover:translate-y-1">
            <BiSolidUser />
          </button>
        </li>

      </ul>
    </div>
  );
}
