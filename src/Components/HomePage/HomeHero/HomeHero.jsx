import React from 'react'
import '../HomeHero/HomeHero.css'

const HomeHero = () => {
  return (
    <>
     <section className='home_hero_section'>
      <div className="container">
        <div className="home_hero_row">
           <div className="home_hero_img">
            <img src="images/Hero-img1.png" alt="img" />
           </div>
           <div className="home_hero_text">
            <h2>All for the sake of your <span>beauty</span></h2>
           </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default HomeHero