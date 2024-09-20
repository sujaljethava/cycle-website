import axios from 'axios';
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const signin = (e) => {
        e.preventDefault()

        const params = new FormData()
  
        params.set("email" , email.current.value)
        params.set("password" , password.current.value)

            axios.post('http://localhost/cycle/login.php' , params)
            .then(function (response) {
                if(response.data.status == 'no')
                    {
                    toast(response.data.status);
                }
                else{
                    toast(response.data.status);
                    localStorage.setItem("name" , response.data.userdata.name)
                    console.log(response.data.userdata.name)

                    setTimeout(()=>{
                        navigate("/")
                    },1500)

                }

            })
         
    }
    return (
        <>
                <ToastContainer />

            <div className="lo-main">
                <div className="container">
                    <div className='lo-text'>
                        <span> <Link to="/"> Home</Link></span>
                        <span className="l1">/</span>
                        <span className='l2'><Link to="/Login">Log in to Your Account</Link></span>
                    </div>

                    <div className="lo-inner-main">
                        <div className="lo-child">
                            <div className="lo-inner-child">
                                <p>Log in to your account</p>
                                <form onSubmit={signin}>
                                <div className="log-contact">
                                    <div className="lo1">
                                        <div className="lo-label">
                                            <label For="email">Email</label>
                                        </div>
                                        <div className="lo-control">
                                            <input type='text' name="email" ref={email} />
                                        </div>
                                    </div>
                                    <div className="lo1">
                                        <div className="lo-label">
                                            <label For="password">Password</label>
                                        </div>
                                        <div className="lo-control">
                                            <input type='password' name="password" ref={password} />
                                        </div>
                                    </div>
                                    <div className="lo1">
                                        <div className="login-btn">
                                            <input type="submit" name='submit'value="login" className='btn0' />
                                        </div>
                                    </div>
                                    <div className="lo1">
                                        <div className="login1">
                                            <Link to="/Ragi">
                                                <p>No acoount?Create one here</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login


