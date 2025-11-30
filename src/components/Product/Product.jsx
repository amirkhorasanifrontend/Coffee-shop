import React from 'react'
import { PiCoffeeBeanDuotone, PiStarFill, PiStarDuotone } from "react-icons/pi";

export default function Product({ src, title, text, status, price }) {
  return (
    <div className="mx-3 h-150 relative w-77">
      <div>
        <div className="flex justify-center">
          <img className="w-50 relative z-10" src={src} alt={title} />
        </div>

        <div className="bg-creamlight hover:shadow-xl rounded-2xl relative -top-33 pt-30 transition-transform duration-400 hover:scale-103">

          {/* Title */}
          <div className="flex justify-center items-center">
            <p className="text-4xl font-black text-initial text-brown">{title}</p>
          </div>

          {/* Price */}
          <div className="absolute top-0 left-0 m-2 font-bold bg-creamdark rounded-xl px-2 py-0.5 text-brown text-base">
            <p>{price} $</p>
          </div>

          {/* Discount */}
          <div className="absolute top-0 right-0 m-2 font-semibold bg-creamdark2 rounded-xl px-2 py-0.5 text-creamdark text-base">
            <p>12%</p>
          </div>

          {/* Description short text */}
          <div className="flex justify-center items-center text-sm pb-1.5 font-semibold text-green">
            <p>{text}</p>
          </div>

          {/* Details */}
          <div className="text-creamdark2 pt-1.5 border-t-2 border-black/10 text-sm font-medium">

            {/* Stars */}
            <div className="flex justify-center pb-0.5 text-green text-xl">
              <PiStarFill />
              <PiStarFill />
              <PiStarFill />
              <PiStarFill />
              <PiStarDuotone />
            </div>

            {/* Paragraphs */}
            <div className="flex justify-center"><p>Crafted for slow starts and</p></div>
            <div className="flex justify-center"><p>reflective mornings.entle lowtaHfeineCalm</p></div>
            <div className="flex justify-center"><p>Blend offers a gentle,</p></div>
            <div className="flex justify-center"><p>lowcaffeineexperience compromising</p></div>
            <div className="flex justify-center pb-2"><p>depth.With subtle, mellow notes</p></div>

          </div>

          {/* Status */}
          <div className="flex text-[15px] border-t-2 border-black/10 pt-2 font-semibold text-green justify-center items-center">
            <p>{status}</p>
          </div>

          {/* Button */}
          <div className="flex justify-center items-center">
            <button className="bg-green font-semibold flex px-21 py-1.5 rounded-xl text-white my-4 transition-all ease-in-out duration-300 hover:translate-y-1">
              View Coffee <PiCoffeeBeanDuotone className="text-xl ml-1.5 mt-0.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
