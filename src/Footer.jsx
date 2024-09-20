import React from 'react'
import { FaCcVisa, FaCcDiscover, FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa6";
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-inner-main">
                        <div className="footer-child">
                            <div className="footer-inner-child">
                                <p>Contact Us</p>
                                <div className="footer-box">
                                    <p>ADDRESS:</p>
                                    <span className='f1'>Etrend Bicycle</span>
                                    <span className='f1'>130 Street, Arizona 85002</span>
                                    <span className='f1'>United States </span>
                                    <p>MAIL US:</p>
                                    <span className='f2'>admin@123gmail.com</span>
                                    <p>PHONE:</p>
                                    <span className='f2'>(123)456 7890</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-child">
                            <div className="footer-inner-child">
                                <p>Products</p>
                                <ul className="footer-text">
                                    <li>
                                       <Link to="#"> Prices drop </Link>
                                       </li>
                                    <li>
                                       <Link to="#">  New products</Link>
                                       </li>
                                    <li>
                                       <Link to="#">Best sales</Link> 
                                       </li>
                                    <li>
                                       <Link to="#"> Sitemap</Link>
                                       </li>
                                    <li>
                                       <Link to="#"> Stores</Link>
                                       </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-child">
                            <div className="footer-inner-child">
                                <p>Our company</p>
                                <ul className="footer-text">
                                    <li> 
                                      <Link to="#">Delivery</Link>  </li>
                                    <li> 
                                      <Link to="#">  Legal Notice</Link></li>
                                    <li> 
                                      <Link to="#"> Terms and conditions of use</Link> </li>
                                    <li> 
                                      <Link to="#"> About us</Link> </li>
                                    <li> 
                                      <Link to="#">  Secure payment</Link></li>
                                    <li> 
                                      <Link to="#">  Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-child">
                            <div className="footer-inner-child">
                                <p>Newsletter</p>
                                <div className="footer-email">
                                    <p>Enter your email address for our mailing list to keep yourself updated.</p>
                                    <input type="email" name="email" id="" placeholder='Enter your email....' />
                                    <div className="footer-btn">
                                        <a href="#">SUBSCRIBE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-main">
                <div className="container">
                    <div className="bottom-inner-main">
                        <div className="bottom-child">
                            <div className="bottom-inner-child">
                                <div className="bottom">
                                    <p> © 2024 - Ecommerce software by PrestaShop™</p>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-child">
                            <div className="bottom-inner-child">
                                <ul className="bottom1">
                                    <li>
                                        <Link to="#"> <FaCcVisa /></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><FaCcPaypal /></Link>
                                    </li>
                                    <li>
                                        <Link href="#"><FaCcDiscover /></Link>
                                    </li>
                                    <li>
                                        <Link to="#" link href="#"><FaCcMastercard /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer
