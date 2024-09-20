import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slide = () => {

    const options = {
        loop: true,
        margin: 20,
        items: 4,
        nav:false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1000,
       autoplayHoverPause: true,// This stops autoplay on hover,

       responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    }
    };

    return (
        <>
            <OwlCarousel className='owl-theme' {...options}>
                <div class='item'>
                    <a href="#">
                        <img src="assests/img/shop1.jpg" alt="" />
                    </a>
                        <p>Shop</p>
                </div>
                <div class='item'>
                    <a href="#">
                        <img src="assests/img/shop2.jpg" alt="" />
                    </a>
                    <p>Electronics</p>
                </div>
                <div class='item'>
                    <a href="#">
                        <img src="assests/img/shop3.jpg" alt="" />
                    </a>
                    <p>Sale</p>
                </div>
                <div class='item'>
                    <a href="#">
                        <img src="assests/img/shop4.jpg" alt="" />
                    </a>
                    <p>Fashion</p>
                </div>
                <div class='item'>
                    <a href="#">
                        <img src="assests/img/shop5.jpg" alt="" />
                    </a>
                    <p>Mobiles</p>
                </div>
                <div class='item'>
                    <a href="#">
                        <img src="assests/img/shop6.jpg" alt="" />
                    </a>
                    <p>Sports</p>
                </div>

            </OwlCarousel>
        </>
    )
}
export default Slide

