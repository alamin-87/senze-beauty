import React from 'react'
import '../HomeContact/HomeContact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HomeContact = () => {
  return (
    <>
    <section className='home_contact'>
        <div className="container">
            <div className="home_contact_row">
                <div className="home_contact_col1">
                    <form>
                        <h2>Contact us</h2>
                        <div className="form_input_name">
                            <div className="form_input_first_name">
                              <label>First name</label> <br />
                              <input type="text"  required/> 
                            </div>
                            <div className="form_input_last_name">
                              <label>Last  name</label> <br />
                              <input type="text"  required/>
                            </div>
                        </div>
                        <div className="form_input_phn_mail">
                            <div className="form_input_phn">
                              <label>Phone</label> <br />
                              <input type="number" required/> 
                            </div>
                            <div className="form_input_mail">
                              <label>Email</label> <br />
                              <input type="email" required/>
                            </div>
                        </div>
                        <label>Message</label> <br />
                        <input className='input_message' type="text"  required/> <br />
                        <input className='input_submit' type="submit" />
                    </form>
                </div>
                <div className="home_contact_col2">
                    <div className="home_contact_col2_header">
                        <h2>Give us a call or visit our 
                        Beauty salon</h2>
                    </div>
                    <div className="home_contact_col2_address">
                        <h3>ADDRESS</h3>
                        <p>817 N Wilson Rd Radcliff, 
                        KY 40160, Kentucky.</p>
                    </div>
                    <div className="home_contact_col2_call">
                        <div className="home_contact_col2_call_header">
                            <h3>CALL US</h3>
                        </div>
                        <div className="home_contact_col2_call_details">
                            <FaPhoneAlt />
                            <p>+1(931) - 266 - 6101</p>
                        </div>
                        <div className="home_contact_col2_call_details">
                            <CiMail />
                            <p>info@sanzebeauty.com</p>
                        </div>
                    </div>
                    <div className="home_contact_col2_icon">
                        <div className="home_contact_col2_icon_header">
                        Social media
                        </div>
                        <div className="home_contact_col2_icon_contact">
                           <div className="home_contact_col2_icon_contact1"><FaFacebook /></div>
                           <div className="home_contact_col2_icon_contact1"><FaInstagram /></div>
                           <div className="home_contact_col2_icon_contact1"><FaTwitter /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeContact