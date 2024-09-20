import React from "react";

const Shop1 = (s) =>{
    return(
        <>
         <div className='s-products'>
                      <a href="#">
                        <img src={s.image} alt="" />
                      </a>
                      <p>NEW</p>
                      <p className="on">On sale!</p>
                      <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                      </div>
                      <div className="s-box">
                        <span className="s1">{s.name}</span>
                        <span className="s2">{s.prise}</span>
                        <div className="s-btn">
                          <a href="#">ADD TO CART</a>
                        </div>
                      </div>
                  </div>
        </>
    )
}
export default Shop1