import React from 'react'
import { Link } from 'react-router-dom'
const Admin = () => {
    return (
        <>
            <div className="admin-main">
                <div className="container">
                    <div className="admin-inner-main">
                        <div className="admin-text">
                            <p>Admin Panel</p>
                        </div>
                        <div className="admin-inner-child">
                            <div className="admin-child">
                                <ul className="ad">
                                    <li> <Link to=""> Manage User</Link></li>
                                    <li> <Link to=""> Manage Product</Link></li>
                                    <li> <Link to=""> Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin
