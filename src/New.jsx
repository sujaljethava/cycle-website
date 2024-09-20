import React from "react";

const New  = (n1) =>{
    return (
        <>
        <div className="new-child">
            <div className="new-inner-child">
            <a href="#">
                        <img src={n1.image} alt="" />
                    </a>
                    <p>NEW</p>
                    <div className="Quiek-view">
                        <span className="q1"><a href="#">Quiek view</a></span>
                    </div>
                    <div className="new-box">
                        <span className="f1">{n1.title}</span>
                        <span className="f2">{n1.price}</span>
                        <div className="new-btn">
                            <a href="#">ADD TO CART</a>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default New