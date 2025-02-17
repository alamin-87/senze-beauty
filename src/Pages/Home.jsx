import React from 'react'
import HomeHero from '../Components/HomePage/HomeHero/HomeHero'
import HomeAbout from '../Components/HomePage/HomeAbout/HomeAbout'
import HomeServices from '../Components/HomePage/HomeServices/HomeServices'
import HomeContact from '../Components/HomePage/HomeContact/HomeContact'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <HomeAbout/>
    <HomeServices/>
    <HomeContact/>
    </>
  )
}

export default Home