import React  from "react";

const Ride = (r1) =>{
    return (
        <>
        <div className="ride-child">
            <div className="ride-inner-child">
                <a href="#">
                  <img src={r1.image} alt="" />
                </a>
                <div className="ride-box">
                  <span className='r1'>{r1.title1}</span>
                  <span className='r2'>{r1.title2}</span>

                  <div className="ride-btn">
                    <a href="#">shop now</a>
                  </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Ride