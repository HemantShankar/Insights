import React from 'react'
import { Link } from "react-router-dom";
import Bg_image from "./assests/signup.jpg"
import logo_img from "./assests/insights-logo.png"
import './login-signup.css'

const Signup = () => {
    return (
        <>
            <div className="right-content">
                <ul className="nav nav-pills">
                    {/* <li className="nav-item">
                        <a className="nav-link" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li> */}
                    <li className="nav-item-signup ">
                        <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                    </li>
                </ul>
                <img className="logo-img-signup" src={logo_img} alt="Your Company" />
                <form className="row g-3" id='form_signup'>
                    <h2 className='Signup_heading'>Signup for your account</h2>
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="inputfirstname" className="form-label">First Name</label>
                            <input type="text" className="form-control" aria-label="First name" />
                        </div>
                        <div className="col">
                            <label htmlFor="inputsurname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>

                    <div className="form-check">
                        <label htmlFor="inputprofession" className="form-label">You are a :</label>
                        <input className="form-check-input-1 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Student
                        </label>
                        <input className="form-check-input-2 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Working Professional
                        </label>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">You are working at :</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Company/Institute Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">Role :</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="SDE / PhD" />
                    </div>
                    <div className="col-12" >
                        <Link type="submit" className="btn btn-primary" to= "/Login" id='submit_button'>Create Account &#8702;</Link>
                    </div>
                </form>
            </div>

            <div className="left-content">
                <img className="image-interview" src={Bg_image} alt="Your Company" />
            </div>
        </>
    )
}

export default Signup