import React, { useEffect } from 'react'

//Home Component Imports
import HomeHero from '../components/home/homeHero'
import About from '../components/home/about'

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts or page is refreshed
    window.scrollTo({
      top: 0,
      behavior: "instant" // Changed to instant for better user experience
    });
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <div className='flex flex-col'>
        <HomeHero />
        <About />
    </div>
  )
}

export default Home