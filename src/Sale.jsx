import React from 'react'
import Second from "./Second";
import Drop1 from "./Drop1";
import { Link } from "react-router-dom";

const Sale = () => {
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
                        <span className="f1">/</span>
                        <span className='s1'><Link to="/Sale">Sale</Link></span>
                    </div>
                    <div className='second-inner-main'>
                        <div className='second-inner-child'>
                            <div className='second-child'>

                                <div className='second-nav'>
                                    <p>SALE</p>
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
                                    <p className='second-s1'> SALE</p>
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

export default Sale
