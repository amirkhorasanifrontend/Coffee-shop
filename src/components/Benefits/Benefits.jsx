import React from 'react'
import { LuTruck, LuTicketPercent, LuRefreshCw } from "react-icons/lu";
import { GiCrown } from "react-icons/gi";

export default function Benefits() {
  return (
    <div className="flex justify-center bg-creamdark relative py-10 gap-10">

      <div className="flex border-r-2 pr-10 border-black/30">
        <LuTruck className="text-5xl mr-4 text-green" />
        <p className="font-semibold text-brown">
          Enjoy free shipping<br />on every order
        </p>
      </div>

      <div className="flex border-r-2 pr-10 border-black/30">
        <LuTicketPercent className="text-5xl mr-4 text-green" />
        <p className="font-semibold text-brown">
          Save 10% with<br />every subscription
        </p>
      </div>

      <div className="flex border-r-2 pr-10 border-black/30">
        <LuRefreshCw className="text-5xl mr-4 text-green" />
        <p className="font-semibold text-brown">
          No stress - pause<br />or cancel anytime
        </p>
      </div>

      <div className="flex">
        <GiCrown className="text-5xl mr-4 text-green" />
        <p className="font-semibold text-brown">
          Early access to new seasonal<br />blends and limited drops
        </p>
      </div>

    </div>
  );
}
