import React from 'react'
import '../Login/Login.css'
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <>
    <section className='login'>
            <nav className='login_navbar'>
                <div className="login_navbar_row">
                    <div className="login_navbar_col1">
                        <span ><FaArrowLeft className='login_icon' /></span>
                    </div>
                    <div className="login_navbar_col2">
                        <Link to="#"><img src="images/logo.png" alt="logo" className='login_logo' /></Link>
                        <Link to="#"><img src="images/logo1.png" alt="logo1" className='login_logo1' /></Link>
                    </div>
                    <div className="login_navbar_col3">
                        <div className="login_icon1">
                        <Link to="#"><FaFacebookF/> </Link>
                        </div>
                        <div className="login_icon1">
                        <Link to="#"><FaInstagram  /> </Link>
                        </div>
                        <div className="login_icon1">
                        <Link to="#"><IoLogoTwitter /> </Link>
                        </div>
                    </div>
                </div>
            </nav>
                <div className="login_form_main">
                  <div className="login_form_content">
                    <h2>Login to your account</h2>
                    <p>Do not have an account? <Link to="/signup">Signup</Link></p>
                  </div>
                  <div className="login_form">
                    <form>
                      <label>Email</label>
                      <input type="email" placeholder='Enter your Email ID' required />
                      <label>Password</label>
                      <input type="text" placeholder='Enter password' required />
                      <button type='submit'>Login account</button>
                    </form>
                  </div>
                  <div className="extra_login">
                    <p> <span></span>Or login with<span></span></p>
                    <div className="extra_login_icon">
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

export default Login