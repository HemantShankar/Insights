import React from 'react'
import { Link } from "react-router-dom";
import Bg_image from "./assests/signup.jpg"
import logo_img from "./assests/insights-logo.png"
import './login-signup.css'
import axios from 'axios';


const Signup = () => {

    // function signUp() {
    //     axios.post('http://localhost:8000/api/register/', {
    //         body: {
    //             username: "admin",
    //             email: "admin@gmail.com",
    //             passowrd: "admin123",
    //         }
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }
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
                    {/* <div className="username">
                        <label htmlFor="inputprofession" className="form-label">You are a :</label>
                        <input className="form-check-input-1 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Student
                        </label>
                        <input className="form-check-input-2 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Working Professional
                        </label>
                    </div> */}
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="inputfirstname" className="form-label">First Name :</label>
                            <input type="text" className="form-control" aria-label="First name" />
                        </div>
                        <div className="col">
                            <label htmlFor="inputsurname" className="form-label">Last Name :</label>
                            <input type="text" className="form-control" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email :</label>
                        <input type="email" placeholder='name@example.com' className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Username :</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputusername" className="form-label">Password :</label>
                        <input type="username" className="form-control" id="inputEmail4" />
                    </div>

                    <div className="col-md-6">
                        {/* <label htmlFor="inputprofession" className="form-label">You are a :</label>
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Your Profession
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Student</a></li>
                                <li><a class="dropdown-item" href="#">Working Professional</a></li>
                            </ul>
                        </div> */}
                        {/* <input className="form-check-input-1 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Student
                        </label>
                        <input className="form-check-input-2 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Working Professional
                        </label> */}
                    </div>



                    {/* <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">You are working at :</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Company/Institute Name" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">Role :</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="SDE / PhD" />
                    </div> */}.
                    <div className="col-0" >
                        <Link type="submit" onClick={() => {
                            // signUp();
                        }}
                        to="/Login" className="btn btn-primary" id='submit_button'>Create Account &#8702;</Link>
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