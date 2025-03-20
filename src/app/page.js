import React from 'react'
import Hero from './component/Hero'
import Services from './component/Services'
import About from './component/About'
import Menu from './component/Menu'
import Team from './component/Team'

function page() {
  return (
    <div>
      <Hero/>
      <Services/>
      <About/>
      <Menu/>
      <Team/>
    </div>
  )
}

export default page