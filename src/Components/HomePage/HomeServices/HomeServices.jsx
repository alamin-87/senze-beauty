import React from 'react'
import '../HomeServices/HomeServices.css'
import { Link } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowCircleLeft } from "react-icons/fa";


const HomeServices = () => {
  return (
    <>
    <section className='home_services'>
        <div className="container">
            <div className="home_services_row">
                <div className="home_services_row_button">
                    <button className='home_services_button1'><IoIosArrowBack /></button>
                    <button className='home_services_button2'><FaArrowCircleLeft /></button>
                </div>
                <div className="home_services_row_content">
                  <div className="home_services_col1">
                    <div className="home_services_row_main_img">  
                      <img src="images/home_services_img1.png" alt="img1" />
                    </div>
                    <div className="home_services_row_body_img">
                      <div className="home_services_row_body_allimg">
                      <img src="images/home_services_img2.png" alt="img2" />
                      <img src="images/home_services_img3.png" alt="img3" />
                      <img src="images/home_services_img4.png" alt="img4" />
                      </div>
                    </div>
                  </div>
                  <div className="home_services_col2">
                    <div className="home_services_col2_header">
                        <h2>Hair Treatment</h2>
                    </div>
                    <div className="home_services_col2_body">
                        <div className="home_services_col2_body_span">
                            <span></span>
                        </div>
                        <div className="home_services_col2_body_text">
                            <h3>Hair Treatment Type 1</h3>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua.</p>
                            <h3>Price</h3>
                            <p>Hair Extension type 1 . USD 50.00</p>
                            <Link to="#">Schedule Visit</Link>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HomeServices