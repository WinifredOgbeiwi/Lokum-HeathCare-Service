import React from 'react'
import ArticleSection from './components/article/ArticleSection';
import FaqSection from './components/FAQsection/FaqSection';
import Footer from './components/footer/Footer';
import HeroSection from './components/HeroSection'
import HireSection from "./components/HireMe/HireSection";
import NavBar from './components/NavBar'
import OurServices from './components/ourServices/OurServices'
import ReviewSection from './components/reviewSection/ReviewSection';
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <WhyChooseUs/>
      <OurServices/>
      <HireSection/>
      <ReviewSection/>
      <ArticleSection/>
      <FaqSection/>
      <Footer/>
    </>
  )
}

export default App