import React from 'react'
import { Link } from 'react-router-dom'
import { HiMiniHome } from "react-icons/hi2";

export default function Breadcrumb({ links }) {
  return (
    <>
      <div className="flex py-5 justify-center mt-17">
        <div className="bg-creamdark w-full max-w-6xl border-4 border-green-950/10 rounded-2xl shadow-lg flex items-center justify-between px-6 py-4">
          <ul className="flex text-brown items-center gap-2">
            <div className='text-[27px] rounded-lg' >
                <HiMiniHome />
            </div>
            {links.map((link, index) => (
              <li key={link.id} className="flex font-semibold items-center gap-2">
                <Link to={link.to}>
                  {link.title}
                </Link>

                {index < links.length - 1 && (
                  <span className="text-gray-500">{'>'}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
