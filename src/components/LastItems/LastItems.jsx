import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import ItemsBox from '../itemsbox/ItemsBox'
import AboutUs from '../Benefits/Benefits'
import PopularItems from '../popularItems/PopularItems'
import MassagesUsers from '../Testimonial/Testimonial'

export default function LastItems() {
  return (
<>
    <div className='bg-creamdark pt-5'>      
        <SectionHeader 
                title='The newest coffees'
                text='Every day is diffrent, and so is every morning.'
            />
        <ItemsBox />
        <AboutUs />
    </div>
    <div className='pt-8'>
      <PopularItems />
    </div>
    <MassagesUsers />
</>
  )
}
