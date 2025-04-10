import React from 'react'

//Home Component Imports
import HomeHero from '../components/home/homeHero'
import About from '../components/home/about'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <HomeHero />
        <About />
    </div>
  )
}

export default Home