import React from 'react'
import HeroSection from './components/HeroSection'
import HireSection from "./components/HireMe/HireSection";
import NavBar from './components/NavBar'
import OurServices from './components/ourServices/OurServices'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <WhyChooseUs/>
      <OurServices/>
      <HireSection/>
    </>
  )
}

export default App