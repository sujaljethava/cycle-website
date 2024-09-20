import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Brand = () =>{
    const options = {
        loop: true,
        margin: 50,
        items: 4,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,// This stops autoplay on hover,
        smartSpeed: 1200,

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
                items: 5
            }
        }
    };
    return (
        <>
             <OwlCarousel className='owl-theme' {...options}>
                <div class='item'>
                    <img src="assests/img/b1.jpg" alt="" />
                </div>

                <div class='item'>
                    <img src="assests/img/b2.jpg" alt="" />
                </div>

                <div class='item'>
                    <img src="assests/img/b3.jpg" alt="" />
                </div>

                <div class='item'>
                    <img src="assests/img/b4.jpg" alt="" />
                </div>

                <div class='item'>
                    <img src="assests/img/b2.jpg" alt="" />
                </div>

                <div class='item'>
                    <img src="assests/img/b1.jpg" alt="" />
                </div>

                <div class='item'>
                    <img src="assests/img/b5.jpg" alt="" />
                </div>
            </OwlCarousel>
        </>
    )
}
export default Brand