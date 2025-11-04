import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/layout/Hero'
import AiTools from '../components/layout/AiTools'
import Footer from '../components/layout/Footer'
import Pricing from '../components/layout/Pricing'
import Testimonial from '../components/layout/Testimonials'

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AiTools/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </>

  )
}

export default Home