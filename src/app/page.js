import React from 'react'
import Hero from './component/Hero'
import Services from './component/Services'
import About from './component/About'
import Menu from './component/Menu'
import Team from './component/Team'
import Testimonials from './component/Testimonials'
import Reservation from './component/Reservation'


function page() {
  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      <Menu/>
      <Reservation/>
      <Team/>
      <Testimonials/>
      
    </div>
  )
}

export default page