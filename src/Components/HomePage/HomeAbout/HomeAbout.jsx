import React from 'react'
import '../HomeAbout/HomeAbout.css'
import { Link } from 'react-router'

const HomeAbout = () => {
  return (
    <>
    <section className='home_about'>
        <div className="container">
            <div className="home_about_row">
                <div className="home_about_col1">
                    <img src="images/heroimg2.png" alt="hero" />
                </div>
                <div className="home_about_col2">
                    <h2>About us</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in</p>
                    <Link to="#">Schedule Visit</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeAbout