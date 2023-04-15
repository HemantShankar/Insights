import React from 'react'
import { Link } from "react-router-dom";
import { SlOptions } from "react-icons/sl"
import logo_img from "./assests/insights-logo-w.png"
import Bg_image from "./assests/About-Bg.jpg"
import './About.css'
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import './footer.css'

const About = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/Home">
                        <img src={logo_img} alt="Insights" width="50" height="40" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <SlOptions />
                        </span>
                    </button>
                    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/UserProfile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Experience">Experience</Link>
                            </li><li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                        </ul>
                        <div className="search">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search.." aria-label="Search" />
                                <button class="btn btn-outline-success  " type="submit">Search</button>
                            </form>
                        </div>

                    </div>
                </div>
            </nav>
            <div className='bg-photo'>
                <img className='Bg' src={Bg_image} alt="Background" />
            </div>

            <div className="Page">
                <div className="Half">
                    <h1 className='head-about'>About Us</h1>
                    <p>We aim to create a platform,  where alumni of our institue can share their interview experiences of their interview with a specific company. So that, if the same company visits our campus again. Then, people appearing for their interview can get the insights of the company and it's interview process. This content can range from an overview of the interview process to insights into company.</p>
                </div>
                <div className="other-Half">
                    <p>Employers across all industries utilize interviewing as one of the biggest determining factors in the hiring process.Interviews offer a chance and an opportunity for the recruiter and the hiring manager to meet the candidate and assess their qualifications and capabilities. Ultimately, interviews are important because it is the first face-to-face between the recruiter, the hiring manager, and the candidate.</p>
                    <div className="read-div">
                        <a className='read' href="https://careeremployer.com/interview/why-are-interviews-so-important/">Read More</a>
                    </div>
                </div>
            </div>

            <footer className="footerContent">
                <p className='footer-para'>
                    Copyright &copy; Hemant Shankar
                    <br />
                    Follow:
                </p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/i__.savvy/"><BsInstagram /></a>
                    <a href="https://www.linkedin.com/in/hemant-shankar/"><BsLinkedin /></a>
                    <a href="https://twitter.com/i___hemant"><BsTwitter /></a>
                </div>

            </footer>
        </>
    )
}

export default About