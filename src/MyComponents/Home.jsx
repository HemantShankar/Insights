import React from 'react'
import logo_img from "./assests/insights-logo.png"
import { AiFillHome } from "react-icons/ai"
import Bg_image1 from "./assests/google-logo.jpg"
import Bg_image2 from "./assests/warner-music.png"
import Bg_image3 from "./assests/Fb.jpg"
import Bg_image4 from "./assests/vaseline.jpg"
import Bg_image5 from "./assests/walmart.jpg"
import Bg_image6 from "./assests/volkswagen.jpg"
import Bg_image7 from "./assests/Coca.jpg"
import Bg_image8 from "./assests/ebay.jpg"
import './Home.css'

const Home = () => {
    return (
        <div className='Home-page'>
            <div className="first-part">
                <img className="logo-home" src={logo_img} alt="Your Company" />
                <div className='left-button'>
                    <a className='left-button' href="https://www.instagram.com/i__.savvy/">
                        <AiFillHome />
                        <div className="button-name">
                            Home
                        </div>
                    </a>
                </div>
            </div>
            <div className="second-part">
                <h1>Help</h1>
            </div>

            <div className="third-part">
                <h2 className='sec-head'>Interesting Facts</h2>
                <div className="hor-fact">
                    <div className="fact fact-1">
                        <img className='fact-img' src={Bg_image1} alt="Your Picture" />
                        <h4 className='fact-head'>Google</h4>
                        <p className="fact-para">
                            It is not common knowledge but Google was originally named BackRub. Larry Page and Sergey Brin renamed their company ‘Google’ in 1997.
                        </p>
                    </div>
                    <div className="fact fact-2">
                        <img className='fact-img' src={Bg_image2} alt="Your Picture" />
                        <h4 className='fact-head'>Warner Music</h4>
                        <p className="fact-para">
                            For a long time, Warner Music held the copyrights to “Happy Birthday”. This meant that the company could collect royalties from anyone who ever sang it
                        </p>
                    </div>
                </div>

                <div className="hor-fact">
                    <div className="fact fact-3">
                        <img className='fact-img' src={Bg_image3} alt="Your Picture" />
                        <h4 className='fact-head'>Facebook</h4>
                        <p className="fact-para">
                            Facebook is primarily blue in colour because its owner and chief, Mark Zuckerberg suffers from red-green colour blindness. Blue is the only colour he sees best.
                        </p>
                    </div>
                    <div className="fact fact-4">
                        <img className='fact-img' src={Bg_image4} alt="Your Picture" />
                        <h4 className='fact-head'>Vaseline</h4>
                        <p className="fact-para">
                            Founder of Vaseline ate a spoonful of the product every day. It was his unfaltering belief in his product that birthed this habit which continued until his death at the age of 96.
                        </p>
                    </div>
                </div>

                <div className="hor-fact">
                    <div className="fact fact-5">
                        <img className='fact-img' src={Bg_image5} alt="Your Picture" />
                        <h4 className='fact-head'>Walmart</h4>
                        <p className="fact-para">
                            Every week, without fail, nearly one-third of the US’s population visits the Walmart stores. That’s about 100 million customers visiting Walmart to satisfy their shopping needs.
                        </p>
                    </div>
                    <div className="fact fact-6">
                        <img className='fact-img' src={Bg_image6} alt="Your Picture" />
                        <h4 className='fact-head'>Volkswagen</h4>
                        <p className="fact-para">
                            Volkswagen Group owns some of the world’s biggest auto brands. The groups sells Audi, Bentley, Bugatti, Lamborghini, Porsche, SEAT, and Škoda. It also sells motorcycles under the Ducati brand.
                        </p>
                    </div>
                </div>

                <div className="hor-fact">
                    <div className="fact fact-7">
                        <img className='fact-img' src={Bg_image7} alt="Your Picture" />
                        <h4 className='fact-head'>Coca-Cola</h4>
                        <p className="fact-para">
                            Coca-Cola has around 3500 beverages and 500 products under its catalog.
                        </p>
                    </div>
                    <div className="fact fact-8">
                        <img className='fact-img' src={Bg_image8} alt="Your Picture" />
                        <h4 className='fact-head'>eBay</h4>
                        <p className="fact-para">
                            eBay has 25 million sellers and 157 million registered buyers. The number keeps increasing every second.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home