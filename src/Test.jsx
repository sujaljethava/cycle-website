import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Test1 from "./Test1";

const Test = () =>{
    const options = {
        loop: true,
        margin: 20,
        items: 4,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,// This stops autoplay on hover,

        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <>
            <OwlCarousel className='owl-theme' {...options}>
                <div class='item'>
                <Test1 image={"assests/img/tes.jpg"} name={"John Deo"}/>
                </div>

                <div class='item'>
                <Test1 image={"assests/img/tes1.jpg"} name={"Sarah Enderson"}/>
                </div>

                <div class='item'>
                <Test1 image={"assests/img/tes2.jpg"} name={"Jems Paulson"}/>
                </div>

                <div class='item'>
                <Test1 image={"assests/img/tes.jpg"} name={"Mark Deo"}/>
                </div>
            </OwlCarousel>
        </>
    )
}

export default Test