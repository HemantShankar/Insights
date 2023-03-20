import React from 'react'
import Bg_image from "./Interview.jpeg"
import logo_img from "./insights-logo.png"

const Home = () => {
    return (
        <div className='home-page'>
            <div className="header-home">
                <div className="header-home-logo">
                    <img className="logo-img-home" src={logo_img} alt="Your Company" />
                </div>
                <div className='Home-header-link'>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Active</a>
                        </li>
                        <li className="nav-item-signup ">
                            <a className="nav-link active" aria-current="page" href="#">Signup </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Bg-Home">
                <img className="home-image" src={Bg_image} alt="Your Company" />
            </div>
            <div className="Home-content-heading">
                <h1>
                    Dream.Decipher.Discover
                </h1>
            </div>
            <div className="para-home">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sunt assumenda quod corporis unde sint ipsam</p>
            </div>
            {/* <a className="home-login" aria-current="page" href="#">Login</a> */}
            <div className="home-login">
                <a class="btn btn-primary" href="#" role="button">Login &#8702;</a>
            </div>

        </div>
    )
}

export default Home