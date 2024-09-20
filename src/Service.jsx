import React from 'react'

const Service = (i) => {
    return (

       
                    <div className="cy-child">
                        <div className="cy-child-main">
                            <div className="cy-img">
                                <img src={i.image} alt="" />
                            </div>
                            <div className="cy-contect">
                                <p className='p1'>{i.p1}</p>
                                <p className='p2'>{i.p2}</p>
                            </div>
                        </div>
                    </div>

    )
}

export default Service
