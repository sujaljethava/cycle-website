import React from "react";
import Second from "./Second";
import Drop1 from "./Drop1";
import { Link } from "react-router-dom";


const Furniture = () => {
    return (
        <>
            <div className='second-main'>
                <div className='container'>
                    <div className='second-text'>
                        <span> <Link to="/"> Home</Link></span>
                        <span className="f1">/</span>
                        <span className='s1'><Link to="/Shop"> Shop</Link></span>
                        <span className="f1">/</span>
                        <span className='s1'><Link to="/Furniture"> Furniture</Link></span>

                    </div>
                    <div className='second-inner-main'>
                        <div className='second-inner-child'>
                            <div className='second-child'>

                                <div className='second-nav'>
                                    <p>FURNITURE</p>
                                    <ul className='nav'>
                                        <li>
                                            <Link to="#">Living room</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Kitchen</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Office</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Home Decor</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className='second-nav'>
                                    <p>FILTER BY</p>
                                    <ul className='nav'>
                                        <Drop1 />
                                    </ul>
                                </div>

                                <div className='second-nav-img'>
                                    <img src="assests/img/second1.jpg"></img>
                                </div>
                            </div>

                            <div className='second-child'>
                                <div className='second-image'>
                                    <img src="assests/img/second.jpg" alt="" />
                                    <p className='second-s1'>FURNITURE</p>
                                    <p className='second-s2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </div>
                                <Second />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Furniture