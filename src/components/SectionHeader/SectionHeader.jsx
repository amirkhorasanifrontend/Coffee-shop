import React from 'react'

export default function SectionHeader({title, text}) {
  return (
    <>
    <div className='flex justify-center items-center'>
        <h2 className='text-5xl font-semibold text-initial text-brown'>{title}</h2>
    </div>
    <p className='flex justify-center font-semibold text-green'>{text}</p>
    <div>
        
    </div>
    </>
  )
}
