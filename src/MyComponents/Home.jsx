import React from 'react'
import logo_img from "./assests/logo-black.png"
import { AiFillHome } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { AiOutlineSearch } from "react-icons/ai"
import { BiBookAdd } from "react-icons/bi"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { AiOutlineLike } from "react-icons/ai"
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
                    <a className='left-button' href="#">
                        <div className="icon">
                            <AiFillHome />
                        </div>
                        <div className="button-name">
                            Home
                        </div>
                    </a>
                </div>

                <div className='left-button'>
                    <a className='left-button' href="#">
                        <div className="icon">
                            <CgProfile />
                        </div>
                        <div className="button-name">
                            Profile
                        </div>
                    </a>
                </div>

                <div className='left-button'>
                    <a className='left-button' href="#">
                        <div className="icon">
                            <AiOutlineSearch />
                        </div>
                        <div className="button-name">
                            <input className='search-box' type="text" placeholder="Search" />
                        </div>
                    </a>
                </div>

                <div className='left-button'>
                    <a className='left-button' href="https://www.instagram.com/i__.savvy/">
                        <div className="icon">
                            <BiBookAdd />
                        </div>
                        <div className="button-name">
                            Add Experience
                        </div>
                    </a>
                </div>

                <div className='left-button'>
                    <a className='left-button' href="#">
                        <div className="icon">
                            <AiOutlineInfoCircle />
                        </div>
                        <div className="button-name">
                            About
                        </div>
                    </a>
                </div>

                <div className='left-button logout'>
                    <a className='left-button' href="https://www.instagram.com/i__.savvy/">
                        <div className="icon">
                            <BiLogOut />
                        </div>
                        <div className="button-name">
                            Log Out
                        </div>
                    </a>
                </div>
            </div>
            <div className="second-part">
                <div className="hor-main">
                    <div className="sort">
                        <h4 className='sort-head'>Sort: </h4>
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Choose</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Latest first</a></li>
                            <li><a className="dropdown-item" href="#">Oldest first</a></li>
                            <li><a className="dropdown-item" href="#">Most liked</a></li>
                            <li><a className="dropdown-item" href="#">Company</a></li>
                        </ul>
                    </div>

                    <div className="filter">
                        <h4 className="fliter-head">Filter:</h4>
                        <input className='filter-input' type="text" placeholder='Company Name' />
                    </div>
                </div>

                <div className="content-box">
                    <div className="upper-part">
                        <img className='content-picture' src={Bg_image1} alt="Your Picture" />
                        <div className="name">
                            <div className="name-up">
                                Hemant Shankar
                            </div>
                            <div className="name-down">
                                SDE at Oracle Pvt. Ltd.
                            </div>
                        </div>
                    </div>
                    <div className="middle-part">
                        <div className="hor-content">
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Company:
                                </div>
                                <div className="attribute-name-answer">
                                    Oracle Pvt. Ltd.
                                </div>
                            </div>
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Role:
                                </div>
                                <div className="attribute-name-answer">
                                    Front-End Enginner
                                </div>
                            </div>
                        </div>

                        <div className="hor-content">
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Difficulty:
                                </div>
                                <div className="attribute-name-answer">
                                    Hard
                                </div>
                            </div>
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    No. of Rounds:
                                </div>
                                <div className="attribute-name-answer">
                                    03
                                </div>
                            </div>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                Round#01: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                Round#02: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                Round#03: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                Key Takeaway: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>

                        <div className="hor-content">
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Accepted the Offer:
                                </div>
                                <div className="attribute-name-answer">
                                    Yes
                                </div>
                            </div>
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Final CTC:
                                </div>
                                <div className="attribute-name-answer">
                                    12 LPA
                                </div>
                            </div>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                What to expect: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>
                    </div>
                    <div className="lower-part">
                        <div className="like">
                            <AiOutlineLike />
                        </div>
                        <div className="like-count">
                            15 Likes
                        </div>
                        <div className="days">
                            &#8901; 2 days ago
                        </div>
                    </div>
                </div>

                <div className="content-box">
                    <div className="upper-part">
                        <img className='content-picture' src={Bg_image1} alt="Your Picture" />
                        <div className="name">
                            <div className="name-up">
                                Hemant Shankar
                            </div>
                            <div className="name-down">
                                SDE at Oracle Pvt. Ltd.
                            </div>
                        </div>
                    </div>
                    <div className="middle-part">
                        <div className="hor-content">
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Company:
                                </div>
                                <div className="attribute-name-answer">
                                    Oracle Pvt. Ltd.
                                </div>
                            </div>
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Role:
                                </div>
                                <div className="attribute-name-answer">
                                    Front-End Enginner
                                </div>
                            </div>
                        </div>

                        <div className="hor-content">
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Difficulty:
                                </div>
                                <div className="attribute-name-answer">
                                    Hard
                                </div>
                            </div>
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    No. of Rounds:
                                </div>
                                <div className="attribute-name-answer">
                                    03
                                </div>
                            </div>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                Round#01: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                Round#02: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                Round#03: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                Key Takeaway: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>

                        <div className="hor-content">
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Accepted the Offer:
                                </div>
                                <div className="attribute-name-answer">
                                    Yes
                                </div>
                            </div>
                            <div className="attribute-name">
                                <div className="attribute-name-tag">
                                    Final CTC:
                                </div>
                                <div className="attribute-name-answer">
                                    12 LPA
                                </div>
                            </div>
                        </div>

                        <div className="hor-content">
                            <p className="round-head">
                                What to expect: 
                            </p>
                            <p className='round-content'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, nam, distinctio quibusdam itaque maiores cum veritatis delectus corporis vero repellendus facilis deserunt iusto in accusamus, qui dolorum minus. Fugiat, minus?
                            </p>
                        </div>
                    </div>
                    <div className="lower-part">
                        <div className="like">
                            <AiOutlineLike />
                        </div>
                        <div className="like-count">
                            15 Likes
                        </div>
                        <div className="days">
                            &#8901; 3 days ago
                        </div>
                    </div>
                </div>
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