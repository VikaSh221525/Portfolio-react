import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProject from './components/FeaturedProject'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      {/* <Landing /> */}
      {/* <Marquee/>
      <About/>
      <Eyes/>
      <FeaturedProject/>
      <Cards/>
      <Footer/> */}
    </div>
  )
}

export default App