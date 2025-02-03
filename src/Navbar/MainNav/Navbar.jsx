import React from 'react'
import '../MainNav/Navbar.css'
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { MdSignalWifiStatusbar4Bar } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import ResNav from '../ResNav/ResNav';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="container">
            <div className="navbar_row">
                <div className="navbar_col1">
                    {/* <span ><MdSignalWifiStatusbar4Bar className='navbar_icon' /></span> */}
                    <span ><ResNav /></span>
                </div>
                <div className="navbar_col2">
                    <Link to="#"><img src="images/logo.png" alt="logo" className='navbar_logo' /></Link>
                    <Link to="#"><img src="images/logo1.png" alt="logo1" className='navbar_logo1' /></Link>
                </div>
                <div className="navbar_col3">
                    <div className="navbar_icon1">
                    <Link to="#"><FaFacebookF/> </Link>
                    </div>
                    <div className="navbar_icon1">
                    <Link to="#"><FaInstagram  /> </Link>
                    </div>
                    <div className="navbar_icon1">
                    <Link to="#"><IoLogoTwitter /> </Link>
                    </div>
                    <div className="navbar_icon1">
                    <Link to="#" className='logout_icon'><HiOutlineLogout /> </Link>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar