import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import Ditems from '../ProductCarousel/ProductCarousel'

export default function PopularItems() {

  return (
    <>
        <SectionHeader 
            title="The most popular coffees"
            text="SLOW DOWN. DRINK BETTER"
        />
      <div className='w-full bg-creamlight'>
            <Ditems />
      </div>
    </>
  )
}
