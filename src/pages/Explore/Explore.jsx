import React from 'react'
import Navbar from './../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ItemsBox from '../../components/itemsbox/ItemsBox'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import MainBar from '../../components/CoffeeFilterBar/CoffeeFilterBar'
import Pagination from '../../components/pagination/Pagination'

export default function Explore() {
  return (
    <>
      <Navbar />
      <div className='bg-creamdark pt-25'>
      <SectionHeader 
        title="Explore our collection"
        text=""
      />
        <MainBar />
        <ItemsBox />
      </div>
      <Pagination /><br></br><br></br>
      <Footer />
    </>
  )
}
