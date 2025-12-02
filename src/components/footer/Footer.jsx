import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brown text-gray-200 pt-16 pb-6 mt-10 relative">

      {/* Top Circle */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <div className="w-10 h-10 bg-creamlight text-green rounded-full flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Right Column */}
        <div className="space-y-4 leading-8 text-sm text-gray-300">
          <img
            src=""
            alt="Golden Coffee"
            className="w-40"
          />

          <p>
            Our mission is to lead in production quality, product excellence, services,
            and distribution. We aim to become a model for Iranian manufacturers and the
            main reference for coffee culture in Iran.
          </p>

          <p>
            We believe the perception of Iranian products must improve, and we work
            passionately to make that happen.
          </p>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Quick Access</h3>

          <ul className="space-y-3 font-semibold text-sm">
            <li className="flex items-center"><span className="mr-2">–</span>Privacy Policy</li>
            <li className="flex items-center"><span className="mr-2">–</span>Return Policy</li>
            <li className="flex items-center"><span className="mr-2">–</span>Terms of Use</li>
            <li className="flex items-center"><span className="mr-2">–</span>Order Registration</li>
            <li className="flex items-center"><span className="mr-2">–</span>FAQ</li>

            <li className="flex items-center text-[#fbbf24]">
              <span className="mr-2">–</span>Career Opportunities
            </li>

            <li className="flex items-center"><span className="mr-2">–</span>Contact Us</li>
          </ul>
        </div>

        {/* Left Column */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg mb-4">Stay in Touch</h3>

          <div className="text-sm text-gray-300 space-y-2">
            <p>33 Alborz St, Ghabadian Sharghi Alley, Mirdamad Blvd</p>
            <p>021-6789012</p>
            <p>0901133628</p>

            <div className="flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M16 12H8m0 0l4 4m-4-4l4-4" />
              </svg>
              info@Coffee.com
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-2 mt-4">

            <a
              href="#"
              className="bg-creamdark text-black px-6 py-2 rounded-xl flex items-center gap-2"
            >
              <span>@golden_coffee</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </a>

            <a
              href="#"
              className="border border-[#F4BE78] text-[#F4BE78] px-6 py-2 rounded-xl flex items-center gap-2"
            >
              <span>@golden_coffee</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M14 10l-2-2m0 0l-2 2m2-2v8" />
              </svg>
            </a>

          </div>
        </div>

      </div>

      <div className="text-center text-xs text-gray-400 mt-10 border-t border-gray-600 pt-4">
        Copyright © 2023 Golden Coffee. All rights reserved.
      </div>
    </footer>
  );
}
