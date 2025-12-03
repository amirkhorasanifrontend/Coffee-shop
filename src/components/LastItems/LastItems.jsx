import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import Products from '../Products/products'
import AboutUs from '../Benefits/Benefits'
import PopularItems from '../popularItems/PopularItems'
import MassagesUsers from '../Testimonial/Testimonial'
import ScrollingTicker from '../scrollingticker/ScrollingTicker'
import productsData from '../../data/Products';

export default function LastItems() {
  return (
<>
    <div className='bg-creamdark pt-8'>      
        <SectionHeader 
                title='The newest coffees'
                text='Every day is diffrent, and so is every morning.'
            />
        <Products products={productsData} />
        <AboutUs />
    </div>
    <ScrollingTicker />
    <div className='pt-8'>
      <PopularItems />
    </div>
    <MassagesUsers />
</>
  )
}
