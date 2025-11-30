import React from 'react'
import Navbar from '../navbar/Navbar'
import Landing from '../landing/Landing'
import SectionHeader from '../SectionHeader/SectionHeader'
import ScrollingTicker from '../scrollingticker/ScrollingTicker'

export default function Header() {
  return (
    <>
      <Navbar />
      <Landing />
      <ScrollingTicker />
      <SectionHeader />
    </>
  )
}
