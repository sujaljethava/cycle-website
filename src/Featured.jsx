import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Featured = () => {
    var [data, setData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost/cycle/view.php')
            .then(function (response) {
                // console.log(response.data);
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })


    }, [])

    const navigate = useNavigate()

    const handle = (e) => {
        var id = e.target.getAttribute("data-id")
        navigate("/single/" +id)
        // alert(id)
        
    }
    const options = {
        loop: true,
        margin: 20,
        items: 4,
        nav: true,
        dots: false,
        autoplay: true,
        // autoplayTimeout: 1000,
        autoplayHoverPause: true,// This stops autoplay on hover,
        smartSpeed: 900,

        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    };
    return (
        <>
       
            {/* <OwlCarousel className='owl-theme' {...options}>/ */}
            {
            data && data.map((r)=>{
                return(
                    <>
                    
                <div class='item'>
                    <a href="#">
                        <img src={`http://localhost/cycle/assets/img/${r.img}`} alt="" />
                    </a>
                    <p>NEW</p>
                    <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                    </div>
                    <div className="featured-box">
                        <span className="f1">{r.name}</span>
                        <span className="f2">${r.price}</span>
                        <div className="featured-btn">
                            <a href="#" onClick={handle} data-id={r.id}>ADD TO CART</a>
                        </div>
                    </div>
                </div>
                    </>
                )
            })
        }
                {/* <div class='item'>
                    <a href="#">
                        <img src='assests/img/p2.jpg' alt="" />
                    </a>
                    <p>NEW</p>
                    <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                    </div>
                    <div className="featured-box">
                        <span className="f1">porro quisquam</span>
                        <span className="f2">$319.00</span>
                        <div className="featured-btn">
                            <a href="#">ADD TO CART</a>
                        </div>
                    </div>
                </div> */}
                {/* <div class='item'>
                    <a href="#">
                        <img src='assests/img/p2.jpg' alt="" />
                    </a>
                    <p>NEW</p>
                    <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                    </div>
                    <div className="featured-box">
                        <span className="f1">porro quisquam</span>
                        <span className="f2">$319.00</span>
                        <div className="featured-btn">
                            <a href="#">ADD TO CART</a>
                        </div>
                    </div> */}


                    {/* <Card image={"assests/img/p3.jpg"} title={"architecto beatae"} price={"$359.00"} /> */}

{/* 
                </div>
                <div class='item'>
                    <a href="#">
                        <img src='assests/img/p2.jpg' alt="" />
                    </a>
                    <p>NEW</p>
                    <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                    </div>
                    <div className="featured-box">
                        <span className="f1">porro quisquam</span>
                        <span className="f2">$319.00</span>
                        <div className="featured-btn">
                            <a href="#">ADD TO CART</a>
                        </div>
                    </div>
 */}

                    {/* <Card image={"assests/img/p4.jpg"} title={"reprehenderit beatae"} price={"$349.00"} /> */}

                {/* </div>
                <div class='item'>
                    <a href="#">
                        <img src='assests/img/p2.jpg' alt="" />
                    </a>
                    <p>NEW</p>
                    <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                    </div>
                    <div className="featured-box">
                        <span className="f1">porro quisquam</span>
                        <span className="f2">$319.00</span>
                        <div className="featured-btn">
                            <a href="#">ADD TO CART</a>
                        </div>
                    </div> */}


                    {/* <Card image={"assests/img/p5.jpg"} title={"Undeiste Numquam"} price={"$399.00"} /> */}

{/* 
                </div>
                <div class='item'>
                    <a href="#">
                        <img src='assests/img/p2.jpg' alt="" />
                    </a>
                    <p>NEW</p>
                    <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                    </div>
                    <div className="featured-box">
                        <span className="f1">porro quisquam</span>
                        <span className="f2">$319.00</span>
                        <div className="featured-btn">
                            <a href="#">ADD TO CART</a>
                        </div>
                    </div>
 */}

                    {/* <Card image={"assests/img/p6.jpg"} title={"aperiam dolore"} price={"$389.00"} /> */}


                {/* </div> */}
                {/* <div class='item'>
                    <a href="#">
                        <img src='assests/img/p2.jpg' alt="" />
                    </a>
                    <p>NEW</p>
                    <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                    </div>
                    <div className="featured-box">
                        <span className="f1">porro quisquam</span>
                        <span className="f2">$319.00</span>
                        <div className="featured-btn">
                            <a href="#">ADD TO CART</a>
                        </div>
                    </div> */}

                    {/* <Card image={"assests/img/p7.jpg"} title={"numquam eius"} price={"$279.00"} /> */}


                {/* </div> */}
                {/* <div class='item'>
                    <a href="#">
                        <img src='assests/img/p2.jpg' alt="" />
                    </a>
                    <p>NEW</p>
                    <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                    </div>
                    <div className="featured-box">
                        <span className="f1">porro quisquam</span>
                        <span className="f2">$319.00</span>
                        <div className="featured-btn">
                            <a href="#">ADD TO CART</a>
                        </div>
                    </div> */}


                    {/* <Card image={"assests/img/p8.jpg"} title={"modi tempora"} price={"$349.00"} /> */}

                {/* </div> */}

            {/* </OwlCarousel>  */}
        </>
    )
}
export default Featured