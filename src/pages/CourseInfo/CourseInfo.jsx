import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { IoEarthSharp } from "react-icons/io5";
import { PiCoffeeBeanDuotone } from "react-icons/pi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { LuTruck, LuTicketPercent, LuRefreshCw } from "react-icons/lu";
import { GiCrown } from "react-icons/gi";
import FAQAccordion from '../../components/FAQAccordion/FAQAccordion';
import FeedbackBox from '../../components/Feedback/FeedbackBox ';

export default function CourseInfo() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        links={[
          { id: 1, title: "Home", to: "/" },
          { id: 2, title: "Espresso Coffee", to: "/" },
          { id: 3, title: "Coffee beans", to: "/explore" },
          { id: 4, title: "Coffee beans Daily Belend", to: "/course-info" }
        ]}
      />
      <div className='flex justify-center items-start gap-6'>
        <div className='bg-creamdark relative border-4 border-green-950/5 rounded-2xl p-6 w-full max-w-3xl'>
          <div className='text-brown relative font-semibold'>
            <p>YOUR EVERYDAY RESET</p>
            <p className="text-5xl  font-black text-initial text-brown leading-17">Daily Belend</p>
            <p className='text-green'>Balanced . Smooth . Versatile</p>
            <img className='absolute w-33 -top-2 right-0 transition-transform duration-400 hover:scale-105' src='public/IMG_20251125_232833 - Copy.png'/>
          </div>
          <div className='border-t-2 border-black/25 mt-5 pt-5'>
            <p className='text-creamdark2 font-semibold text-[17px]'>Daily Blend is designed for quiet focus and gentle energy - the kind of
            coffee that supports your flow without taking over. Whether it's work,
            journaling, or your second cup before noon, this one's your go-to.</p>
            <div className='flex font-semibold mt-4 justify-center text-green gap-3'>
              <div className='bg-creamlight flex px-4 py-3 gap-1 rounded-xl shadow-lg'><GiCrown className='text-2xl'/>Species : 100% Arabica</div>
              <div className='bg-creamlight flex px-4 py-3 gap-1 rounded-xl shadow-lg'><PiCoffeeBeanDuotone className='text-2xl'/>Caffeine content :  Low</div>
              <div className='bg-creamlight flex px-4 py-3 gap-1 rounded-xl shadow-lg'><IoEarthSharp className='text-2xl'/>Origin : Africa&Asia</div>
            </div>
          </div>
          <FAQAccordion />
        </div>

        <div className='p-3 border-4 border-green-950/5 rounded-2xl bg-creamdark w-full max-w-90'>
          
          <div>
              <div className='flex rounded-xl w-full relative gap-2 py-2 px-2 border-3 border-black/25 mb-3'>
                <IoMdAddCircleOutline className='text-2xl text-green'/>
                <p className='font-semibold text-brown'>Coffee weight : 250g</p>
                <p className='flex text-green font-semibold justify-end right-2 absolute'>$34.00</p>
              </div>
              <div className='flex bg-creamlight rounded-xl w-full relative gap-2 py-2 px-2 border-3 border-green-950/50 mb-3'>
                <IoMdAddCircle className='text-2xl text-green'/>
                <p className='font-semibold text-brown'>Coffee weight : 500g</p>
                <p className='flex text-green font-semibold justify-end right-2 absolute'>$48.00</p>
              </div>
              <div className='flex rounded-xl w-full relative gap-2 py-2 px-2 border-3 border-black/25 mb-3'>
                <IoMdAddCircleOutline className='text-2xl text-green'/>
                <p className='font-semibold text-brown'>Coffee weight : 750g</p>
                <p className='flex text-green font-semibold justify-end right-2 absolute'>$52.00</p>
              </div>
            </div>
          
          <div className='px-3 rounded-2xl py-4 border-3 border-green-950/15'>
            <p className='font-semibold text-xl'>Price : $48.00</p>
          <div className='flex text-brown text-4xl font-semibold gap-20.5 rounded-4xl py-1 my-4 bg-creamlight items-center border-3 border-green-950/50 justify-center'>
            <IoMdAddCircle />
            <p className='text-2xl'>1</p>
            <IoIosRemoveCircle />
          </div>
          <button className='w-full bg-green py-2 rounded-3xl text-creamlight shadow-xl font-semibold'>Add to Cart</button>
          </div>

      <div className="flex p-2 rounded-2xl mt-4 border-3 border-green-950/15" >
        <LuTruck className="text-5xl mr-4 text-green" />
        <p className="font-semibold text-brown">
          Enjoy free shipping<br />on every order
        </p>
      </div>

      <div className="flex p-2 rounded-2xl mt-4 border-3 border-green-950/15">
        <LuTicketPercent className="text-5xl mr-4 text-green" />
        <p className="font-semibold text-brown">
          Save 10% with<br />every subscription
        </p>
      </div>

      <div className="flex p-2 rounded-2xl mt-4 border-3 border-green-950/15">
        <LuRefreshCw className="text-5xl mr-4 text-green" />
        <p className="font-semibold text-brown">
          No stress - pause<br />or cancel anytime
        </p>
      </div>

      <div className="flex p-2 rounded-2xl mt-4 border-3 border-green-950/15">
        <GiCrown className="text-5xl mr-4 text-green" />
        <p className="font-semibold text-brown">
          Early access to new seasonal<br />blends and limited drops
        </p>
      </div>
        </div>
      </div>
      <FeedbackBox />
    </>
  )
}
