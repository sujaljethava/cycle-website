// import axios from 'axios';
// import React, { useRef } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const Ragi = () => {
//     const name = useRef()
//     const username = useRef()
//     const email = useRef()
//     const password = useRef()
//     const c_password = useRef()
//     const navigate = useNavigate()
//     const signup = (e) => {
//         e.preventDefault()

//         const params = new FormData()
//         params.set("name" , name.current.value)
//         params.set("username" , username.current.value)
//         params.set("email" , email.current.value)
//         params.set("password" , password.current.value)

//         if(password.current.value == c_password.current.value)
//         {
//             axios.post('http://localhost/cycle/registerapi.php' , params)
//             .then(function (response) {
//                 toast(response.data.status);
//                 setTimeout(()=>{
//                     navigate("/login")
//                 },1500)

//             })
//             .catch(function (error) {
//               // handle error
//               console.log(error);
//             })
//         }
//         else{
//             toast("Password not match");
//         }

//     }
//     return (
//         <>
//                 <ToastContainer />
//             <div className="lo-main">
//                 <div className="container">
//                     <div className='lo-text'>
//                         <span> <Link to="/"> Home</Link></span>
//                         <span className="l1">/</span>
//                         <span className='l2'><Link to="/Ragi">Create Your Account</Link></span>
//                     </div>

//                     <div className="lo-inner-main">
//                         <div className="lo-child">
//                             <div className="lo-inner-child">
//                                 <p>Create your account</p>
//                                 <div className="log-contact">
//                                     <form onSubmit={signup}>
//                                         <div className="lo1">
//                                             <div className="lo-label">
//                                                 <label For="name">Name</label>
//                                             </div>
//                                             <div className="lo-control">
//                                                 <input type='text' name="name" ref={name} />
//                                             </div>
//                                         </div>

//                                         <div className="lo1">
//                                             <div className="lo-label">
//                                                 <label For="username">Username</label>
//                                             </div>
//                                             <div className="lo-control">
//                                                 <input type='text' name="username" ref={username}/>
//                                             </div>
//                                         </div>

//                                         <div className="lo1">
//                                             <div className="lo-label">
//                                                 <label For="email">Email</label>
//                                             </div>
//                                             <div className="lo-control">
//                                                 <input type='text' name="email" ref={email}/>
//                                             </div>
//                                         </div>

//                                         <div className="lo1">
//                                             <div className="lo-label">
//                                                 <label For="password">Password</label>
//                                             </div>
//                                             <div className="lo-control">
//                                                 <input type='password' name="password" ref={password}/>
//                                             </div>
//                                         </div>

//                                         <div className="lo1">
//                                             <div className="lo-label">
//                                                 <label For="password">C Password</label>
//                                             </div>
//                                             <div className="lo-control">
//                                                 <input type='password' name="password" ref={c_password} />
//                                             </div>
//                                         </div>

//                                         <div className="lo1">
//                                             <div className="login-btn">
//                                                 <input type="submit" name='submit' value="submit" className='btn0' />
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Ragi


import axios from 'axios';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ragi = () => {
    const name = useRef();
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const c_password = useRef();
    const navigate = useNavigate();

    const signup = (e) => {
        e.preventDefault();

        // Get field values
        const nameValue = name.current.value;
        const usernameValue = username.current.value;
        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const c_passwordValue = c_password.current.value;

        // Validation
        if (!nameValue || !usernameValue || !emailValue || !passwordValue || !c_passwordValue) {
            toast.error("Please fill out all fields.");
            return; // Prevent further processing
        }

        if (passwordValue !== c_passwordValue) {
            toast.error("Passwords do not match.");
            return; // Prevent further processing
        }

        // Create FormData
        const params = new FormData();
        params.set("name", nameValue);
        params.set("username", usernameValue);
        params.set("email", emailValue);
        params.set("password", passwordValue);

        // Make API request
        axios.post('http://localhost/cycle/registerapi.php', params)
            .then(function (response) {
                toast.success(response.data.status);
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            })
            .catch(function (error) {
                // handle error
                console.error(error);
                toast.error("An error occurred during registration.");
            });
    };

    return (
        <>
            <ToastContainer />
            <div className="lo-main">
                <div className="container">
                    <div className='lo-text'>
                        <span><Link to="/">Home</Link></span>
                        <span className="l1">/</span>
                        <span className='l2'><Link to="/Ragi">Create Your Account</Link></span>
                    </div>

                    <div className="lo-inner-main">
                        <div className="lo-child">
                            <div className="lo-inner-child">
                                <p>Create your account</p>
                                <div className="log-contact">
                                    <form onSubmit={signup}>
                                        <div className="lo1">
                                            <div className="lo-label">
                                                <label htmlFor="name">Name</label>
                                            </div>
                                            <div className="lo-control">
                                                <input type='text' name="name" ref={name} />
                                            </div>
                                        </div>

                                        <div className="lo1">
                                            <div className="lo-label">
                                                <label htmlFor="username">Username</label>
                                            </div>
                                            <div className="lo-control">
                                                <input type='text' name="username" ref={username} />
                                            </div>
                                        </div>

                                        <div className="lo1">
                                            <div className="lo-label">
                                                <label htmlFor="email">Email</label>
                                            </div>
                                            <div className="lo-control">
                                                <input type='text' name="email" ref={email} />
                                            </div>
                                        </div>

                                        <div className="lo1">
                                            <div className="lo-label">
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <div className="lo-control">
                                                <input type='password' name="password" ref={password} />
                                            </div>
                                        </div>

                                        <div className="lo1">
                                            <div className="lo-label">
                                                <label htmlFor="c_password">Confirm Password</label>
                                            </div>
                                            <div className="lo-control">
                                                <input type='password' name="c_password" ref={c_password} />
                                            </div>
                                        </div>
                                        

                                        <div className="lo1">
                                            <div className="login-btn">
                                                <input type="submit" name='submit' value="Submit" className='btn0' />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ragi;
