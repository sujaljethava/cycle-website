import React, { startTransition } from 'react'
import Slide from './Slide';
import Featured from './Featured';
import New from './New';
import Ride from './Ride';
import Test from './Test';
import Brand from './Brand';
import Service from './Service';

const My = () => {
  return (
    <>
    {/* banar part start */}
    <div className="banar-main">
      <img src="assests/img/banar.jpg" alt="" />
      <div className="container">
        <div className="banar-inner-main">
          <div className="banar-child">
            <div className="banar-inner-child">
                  <div className="banar-box">
                    <p className='first'>factory price</p>
                    <p className='second'>Sport Bicycle</p>
                    <p className='third'>New Arrivals</p>
                    <div className="btn">
                      <a href="#">SHOP NOW</a>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {/* banar part end */}

      {/* service part start */}

      <div className="cy-main">
            <div className="container">
                <div className="cy-inner-main">
                  <Service image={"assests/img/cy1.png"} p1={"24/7 Online Support"} p2={"Trained staffs are ready to help 24/7"}/>
                  <Service image={"assests/img/cy.png"} p1={"Money Back Guarantee"} p2={"100% money back guarantee under 7 days"}/>
                  <Service image={"assests/img/cy2.png"} p1={"Free Shipping & Return"} p2={"Free shipping on all orders over $100"}/>
                </div>
            </div>
        </div>

    {/* shop part start */}

    <div className="shop-main">
      <div className="container">
      <div className="shop-main-text">
            <p>Shop By Category</p>
        </div>
      <div className="shop-inner-main">

         <Slide/>
      </div>
      </div>
    </div>

    {/* shop part end */}

    {/* ride part start */}
    <div className="ride-main">
      <div className="container">
        <div className="ride-inner-main">
          <Ride image={"assests/img/ride1.jpg"} title1={"Pollution"} title2={"Free Ride"}/> 
          <Ride image={"assests/img/ride2.jpg"} title1={"Ride Made"} title2={"Better"}/> 
        </div>
      </div>
    </div>
      {/* ride part end */}

      {/* featured part start */}

      <div className="featured-main">
        <div className="container">
          <div className="featured-main-text">
            <p>Featured Collection</p>
          </div>
          <div className="featured-inner-main">
            
          <Featured/>
          </div>
        </div>
      </div>

      {/* big part start */}

      <div className="big-main">
        <div className="container">
          <div className="big-inner-main">
            <div className="big-child">
              <div className="big-inner-child">
                <a href="#">
                  <img src="assests/img/big.jpg" alt="" />
                  <div className="big-box">
                    <p className='b1'>Big <span style={{fontWeight:700}}>Sale</span> </p>
                    <p className='b2'>Get <span style={{color: "#df453e"}}>30%</span> off your</p>
                    <p className='b2'>order of $100</p>
                    <div className="big-btn">
                      <a href="#">SHOP NOW</a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* big part end  */}

      {/* new part start  */}

      <div className="new-main">
        <div className="container">
          <div className="new-main-text">
            <p>New Products</p>
          </div>
          <div className="new-inner-main">
            <New image={"assests/img/p11.jpg"} title={"perspiciatis unde"} price={"$99.00"}/>
            <New image={"assests/img/p10.jpg"} title={"omnis iste"} price={"$199.00"}/>
            <New image={"assests/img/p9.jpg"} title={"accusantium dolore"} price={"$299.00"}/>
            <New image={"assests/img/p12.jpg"} title={"rem aperiam"} price={"$249.00"}/>
            <New image={"assests/img/p13.jpg"} title={"adipisci velit"} price={"$289.00"}/>
            <New image={"assests/img/p1.jpg"} title={"numquam eius"} price={"$279.00"}/>
            <New image={"assests/img/p8.jpg"} title={"modi tempora"} price={"$349.00"}/>
            <New image={"assests/img/p6.jpg"} title={"dolore magnam"} price={"$399.00"}/>
          </div>
        </div>
      </div>

      {/* new part end  */}
      
      {/* test part start  */}

      <div className="test-main">
        <div className="container">
        <div className="test-main-text">
            <p>Testimonial</p>
          </div>
          <div className="test-inner-main">
            <Test/>
          </div>
        </div>
      </div>

    {/* test part end  */}

    {/* brand part start */}
    <div className="brand-main">
      <div className="container">
      <div className="brand-main-text">
            <p>Shop By Brand</p>
          </div>
          <div className="brand-inner-main">
            <Brand/>
          </div>
      </div>
    </div>
    {/* brand part end . */}
    </>
  )
}


export default My
