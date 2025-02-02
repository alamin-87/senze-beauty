import React from 'react'
import '../Signup/Signup.css'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";



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
                    <Link to="#"><img src="images/logo.png" alt="logo" className='logo' /></Link>
                    <Link to="#"><img src="images/logo1.png" alt="logo1" className='logo1' /></Link>
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
            <div className="form">
              <div className="signup_form_content">
                <h2>Create an account</h2>
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>
              <div className="signup_form">
                <form>
                  <label>Name</label>
                  <input type="text" placeholder='Enter your name' required />
                  <label>Email</label>
                  <input type="email" placeholder='Enter your Email ID' required />
                  <label>Phone number</label>
                  <input type="number" placeholder='Enter your phone number' required />
                  <label>Password</label>
                  <input type="text" placeholder='Enter password' required />
                  <label>Confirm password</label>
                  <input type="text" placeholder='confirm password' required />
                  <button type='submit'>Create account</button>
                </form>
              </div>
              <div className="extra_signup">
                <p> <span></span>Or login with<span></span></p>
                <div className="extra_signup_icon">
                  <a href="#"><FaFacebook /> Facebook</a>
                  <a href="#"><FaGoogle /> Google</a>
                </div>
              </div>
            </div>
            <div className="img">
              <img src="images/Img_frame.png " alt="img_frame" />
            </div>
      </section>
    </>
  )
}

export default Signup