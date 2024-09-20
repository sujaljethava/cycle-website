import React from 'react'
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <div className='con-main'>
                <div className='container'>
                    <div className='con-text'>
                        <span> <Link to="/"> Home</Link></span>
                        <span className="c1">/</span>
                        <span className='c2'><Link to="/Contact">Contact</Link></span>
                    </div>
                    <div className="con-inner-main">
                        <div className="con-child">
                            <div className="con-inner-child">
                                <p>STORE INFORMATION</p>
                                <div className="con-block">
                                    <div className="con-icon">
                                        <FaLocationDot />
                                    </div>
                                    <div className="con-data">
                                        <span style={{ display: "block" }}>Etrend Bicycle</span>
                                        <span style={{ display: "block" }}> 130 Street, Arizona </span>
                                        <span style={{ display: "block" }}>85002</span>  United States
                                    </div>
                                </div>
                                <div className="con-block">
                                    <div className="con-icon">
                                        <IoMdCall />
                                    </div>
                                    <div className="con-data">
                                        <span style={{ display: "block" }}>Call us:</span>
                                        <span style={{ display: "block", color: "#df453e" }}> (123)456 7890</span>
                                    </div>
                                </div>
                                <div className="con-block">
                                    <div className="con-icon">
                                        <MdEmail />
                                    </div>
                                    <div className="con-data">
                                        <span style={{ display: "block" }}>Email us:</span>
                                        <span style={{ display: "block", color: "#df453e" }}> admin@123gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="con-child">
                            <div className="con-inner-child">
                                <p className='thead'>CONTACT US</p>
                                <div className="con1">
                                    <div className="label">
                                        <label For="subject1">Subject</label>
                                    </div>
                                    <div className="control">
                                        <input list='subject' name="subject1" id="subject1" placeholder='Customer Service' />
                                        <datalist id='subject'>
                                            <option value="Customer Service"></option>
                                            <option value="Webmaster"></option>
                                        </datalist>
                                    </div>
                                </div>

                                <div className="con1">
                                    <div className="label">
                                        <label For="email">Email Address</label>
                                    </div>
                                    <div className="control">

                                        <input type='text' name="email" placeholder='your@gmail.com' />
                                    </div>
                                </div>

                                <div className="con1">
                                    <div className="label">
                                        <label For="file">Attachment</label>
                                    </div>
                                    <div className="control">
                                        <input type='file' name="file" />
                                    </div>
                                </div>

                                <div className="con1">
                                    <div className="label">
                                        <label For="textarea">Message</label>
                                    </div>
                                    <div className="control">
                                        <textarea name="textarea" id="" placeholder='How can we help?'></textarea>
                                    </div>
                                </div>
                                <div className="con1">
                                    <div className="label">
                                        <label For="textarea"></label>
                                    </div>
                                    <div className="control">
                                        <Link to="#">SEND</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
