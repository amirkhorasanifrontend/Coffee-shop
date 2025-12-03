import React, { useEffect, useState } from "react";
import { FaLeaf } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { PiCoffeeBeanFill } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import Typewriter from "typewriter-effect";

export default function Landing() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // نرخ قابل قبول‌تر: هر 16ms تقریباً 60fps
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 1463) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Side images */}
      <img
        className="w-87 mt-35 absolute right-0"
        src="public/file_00000000628c71fdb8cbae4160e823a5.png"
        alt="side right"
      />
      <img
        className="w-87 mt-35 absolute left-0"
        src="public/IMG_20251126_113936.png"
        alt="side left"
      />

      {/* Main hero section */}
      <div className="flex flex-col justify-center mt-16 items-center">
        <p className="text-4xl font-semibold text-number text-green">
          {counter}
        </p>
        <p className="font-semibold text-creamdark2">
          A pack of coffee is sold every weekend
        </p>

        <h1 className="text-[7.5rem] font-semibold text-initial text-brown">
          Coffee For
        </h1>
        <h1 className="text-[7.5rem] font-semibold text-initial text-brown leading-5">
          Calm Mornings
        </h1>

        {/* <-- اینجا: <p> تبدیل شد به <div> چون Typewriter بلوکی رندر می‌کنه */}
        <div className="font-semibold text-lg leading-30 text-green">
          <Typewriter
            onInit={(type) => {
              type
                .typeString(
                  '"Experience coffee the way it was meant to be freshly roasted, perfectly brewed, and made for true coffee lovers"'
                )
                .pauseFor(2000)
                .deleteAll()
                .typeString(
                  '"Awaken your day with a cup crafted to inspire, energize, and bring out the best in you"'
                )
                .pauseFor(2000)
                .start();
            }}
            options={{ loop: true }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-4">
        <button className="cursor-pointer transition-all ease-in-out duration-300 hover:translate-y-1 bg-green text-white px-8 py-2.5 rounded-4xl">
          Sign in | Login
        </button>
        <button className="cursor-pointer transition-all ease-in-out duration-300 hover:translate-y-1 text-green font-semibold px-6 py-2 rounded-4xl border-2 border-green-900">
          Take coffee quiz
        </button>
      </div>

      {/* Feature section */}
      <div className="flex justify-center items-center">
        <img className="w-140 py-8 z-10" src="public/IMG_20251125_232833 - Copy.png" alt="main coffee" />

        <div>
          {/* Left features */}
          <div className="absolute left-60">
            <div className="transition-transform duration-400 hover:scale-104">
              <FaLeaf className="relative -top-42 text-green text-4xl" />
              <p className="text-3xl relative -top-40 w-70 font-black text-initial text-brown border-b-2">
                Organic &<br />Ethically<br />Sourced
              </p>
              <p className="text-m relative -top-38 w-70 text-creamdark2">
                We partner with farms that <br />prioritize sustainability and
                fair<br />trade.
              </p>
            </div>

            <div className="transition-transform duration-400 hover:scale-104">
              <FaBoxOpen className="relative -top-21 text-green text-4xl" />
              <p className="text-3xl relative -top-20 w-85 font-black text-initial text-brown border-b-2">
                Delivered to <br />Your Door
              </p>
              <p className="text-m relative -top-18 w-70 text-creamdark2">
                Indicates packaging and <br />seamless delivery.
              </p>
            </div>
          </div>

          {/* Right features */}
          <div className="absolute right-50">
            <div className="text-right transition-transform duration-400 hover:scale-104">
              <SiCoffeescript className="relative left-16 -top-42 text-green text-4xl" />
              <p className="text-3xl relative -top-40 w-70 font-black text-initial text-brown border-b-2">
                Roasted Weekly, <br /> Always Fresh
              </p>
              <p className="text-m relative -top-38 w-70 text-creamdark2">
                Represents roasting, warmth <br />and freshness
              </p>
            </div>

            <div className="text-right transition-transform duration-400 hover:scale-104">
              <PiCoffeeBeanFill className="relative left-30 -top-21 text-green text-4xl" />
              <p className="text-3xl relative -top-20 w-85 font-black text-initial text-brown border-b-2">
                Crafted for Calm
              </p>
              <p className="text-m relative -top-18 w-70 text-creamdark2">
                Evokes mindfulness, relaxation <br />and wellness
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
