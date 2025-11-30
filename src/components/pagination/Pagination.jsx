import React from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function Pagination() {
  const pages = [1, 2, 3];

  return (
    <div className="flex w-full bg-creamdark justify-center items-center">
      <div className="w-full max-w-sm m-5 font-semibold flex justify-center rounded-2xl">
        <button className="bg-creamlight shadow-lg py-2 px-4 m-2 rounded-xl">
          <FaChevronLeft />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={`shadow-lg py-2 px-4 m-2 rounded-xl ${
              page === 1 ? "bg-amber-950/40" : "bg-creamlight"
            }`}
          >
            {page}
          </button>
        ))}

        <button className="bg-creamlight shadow-lg py-2 px-4 m-2 rounded-xl">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
