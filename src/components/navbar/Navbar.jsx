import React from "react";
import { HiShoppingBag, HiMiniMoon } from "react-icons/hi2";
import { BiSolidUser } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidSearch } from "react-icons/bi";

const Dropdown = ({ title, items }) => (
  <li className="relative group cursor-pointer flex items-center gap-1 transition duration-300 hover:translate-y-1">
    {title} <IoIosArrowDown />
    <ul className="absolute top-6 pt-4 hidden group-hover:block bg-creamlight shadow-xl rounded-xl leading-8 text-brown">
      {items.map((item, i) => (
        <li
          key={i}
          className={`w-40 p-2 text-center hover:bg-black/5 ${
            i !== items.length - 1 ? "border-b-2 border-black/20" : ""
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  </li>
);

export default function Topbar() {
  return (
  <>
    <div className="fixed top-0 z-50 text-sm py-1 text-center font-semibold w-full bg-creamdark">
      <p>Free Shipping Always. Get 10% off your first ritual with code: SLOWMORNINGS</p>
    </div>
    <div className="fixed w-full top-7 py-1.5 px-5 z-50 bg-creamlight">
      <div className="flex justify-between items-center text-[15px] text-brown font-semibold">

        {/* Left Side */}
        <ul className="flex gap-6 items-center">
          <li>Home</li>
          <li>Explore</li>

          <Dropdown
            title="Single Coffee"
            items={[
              "Colombia",
              "Ethiopia",
              "Chocolate",
              "Brazil",
              "Costa Rica",
              "Kenya-AA",
              "Sumatra",
            ]}
          />

          <Dropdown
            title="Blended Coffee"
            items={[
              "Daily Blend",
              "House Blend",
              "Morning Blend",
              "Breakfast Blend",
              "Classic Blend",
              "Harmony Blend",
              "Golden Blend",
              "Balanced Blend",
            ]}
          />
          <li>Products</li>
        </ul>

        {/* Right Side */}
        <ul className="flex gap-6 items-center">
          <li>About</li>
          <li>FAQs</li>

          <li>
            <button className="text-2xl rounded-4xl transition hover:translate-y-1">
              <BiSolidSearch />
            </button>
          </li>

          <li>
            <button className=" text-2xl rounded-4xl transition hover:translate-y-1">
              <HiMiniMoon />
            </button>
          </li>

          <li>
            <button className="text-2xl rounded-4xl transition hover:translate-y-1">
              <HiShoppingBag />
            </button>
          </li>

          <li>
            <button className="text-2xl rounded-4xl transition hover:translate-y-1">
              <BiSolidUser />
            </button>
          </li>

        </ul>
      </div>
    </div>
    </>
  );
}
