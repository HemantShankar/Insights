import React from 'react'
import { Link } from "react-router-dom";
import sample from "./assests/Bg-Video.mp4"
import Bg_image from "./assests/Interview.jpeg"
import logo_img from "./assests/insights-logo.png"
import './Landing.css'

const Home = () => {
    return (
        <div className='home-page'>
            <div className="header-home">
                <div className="header-home-logo">
                    <img className="logo-img-home" src={logo_img} alt="Your Company" />
                </div>
                <div className='Home-header-link'>
                    <ul className="nav nav-pills">
                        {/* <li className="nav-item">
                            <Link  className="nav-link" to="#">Active</Link>  
                        </li> */}
                        <li className="nav-item-signup ">
                            <Link  className="nav-link active" aria-current="page" to="Signup">Signup </Link>  
                        </li>
                    </ul>
                </div>
            </div>
            <video className='videotag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <img className='Bg-image-home' src={Bg_image} alt="background-image" />
            <div className="Home-content-heading">
                <h1>
                    Dream.Decipher.Discover
                </h1>
            </div>
            <div className="para-home">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sunt assumenda quod corporis unde sint ipsam</p>
            </div>
            {/* <Link  className="home-login" aria-current="page" href="#">Login</Link>   */}
            <div className="home-login">
                <Link  className="btn btn-primary my_button" to="Login" role="button">Discover Now</Link>  
            </div>

        </div>
    )
}

export default Home