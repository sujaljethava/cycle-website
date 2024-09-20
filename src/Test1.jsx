import React from "react";

const Test1 = (t) =>{
    return (
        <>
         <div className="test-inner-child">
              <img src={t.image} alt="" />
                    <div className="test-box">
                        <p><span className='t1'>{t.name}</span>-Customer</p>
                        <img src="assests/img/test-icon.jpg" alt="" />
                        <p className='t2'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
              </div>
        </>
    )
}
export default Test1