import React from 'react'
import '../Signup/Signup.css'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";


const Signup = () => {
  return (
    <>
      <section className='signup'>
        <nav className='signup_navbar'>
            <div className="signup_navbar_row">
                <div className="signup_navbar_col1">
                    <span ><FaArrowLeft className='signup_icon' /></span>
                </div>
                <div className="signup_navbar_col2">
                    <Link to="#"><img src="images/logo.png" alt="logo" /></Link>
                </div>
                <div className="signup_navbar_col3">
                    <div className="signup_icon1">
                    <Link to="#"><FaFacebookF/> </Link>
                    </div>
                    <div className="signup_icon1">
                    <Link to="#"><FaInstagram  /> </Link>
                    </div>
                    <div className="signup_icon1">
                    <Link to="#"><IoLogoTwitter /> </Link>
                    </div>
                </div>
            </div>
        </nav>
        <div className="main_body">
            <div className="form"></div>
            <div className="img"></div>
        </div>
      </section>
    </>
  )
}

export default Signup