import React from 'react'
import Bg_image from "./assests/Interview.jpeg"
import logo_img from "./assests/insights-logo.png"
import './login-signup.css'

const login = () => {
    return (
        <>
            <div className="right-content">
                <ul className="nav nav-pills">
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> */}
                    <li className="nav-item-signup ">
                        <a className="nav-link active" aria-current="page" href="#">Sign Up</a>
                    </li>
                </ul>
                <div className="login-form">
                    <div className="in-form">
                        <div>
                            <img className="logo-img" src={logo_img} alt="Your Company" />
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login to your account</h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Signup for your account</a>
                            </p>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <div className="mb-3 align-items-center">
                            <label htmlFor="inputPassword6" className="form-label">Password</label>
                            <input type="password" id="inputPassword6" className="form-control" aria-labelledby="passwordHelpInline" />
                        </div>

                        <div className="submit-button text-center">
                            <input className="btn btn-primary " type="submit" value="Submit"></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className="left-content">
                <img className="image-interview" src={Bg_image} alt="Your Company" />
            </div>
        </>
    )
}

export default login