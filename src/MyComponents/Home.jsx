import React from 'react'
import Bg_image from "./Interview.jpeg"

const Home = () => {
    return (
        <div className='home-page'>
            <div className="Bg-Home">
                <img className="home-image" src={Bg_image} alt="Your Company" />
            </div>
            <div className='Home-header'>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item-signup ">
                        <a className="nav-link active" aria-current="page" href="#">Login</a>
                    </li>
                </ul>
            </div>
            <div className="Home-content-heading">
                <h1>
                    Dream.Decipher.Discover
                </h1>
            </div>
            <p></p>
        </div>
    )
}

export default Home