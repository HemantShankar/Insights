import React from 'react'
import Bg_image from "./assests/Interview.jpeg"
import { AiOutlineLike } from "react-icons/ai"
import Bg_image1 from "./assests/google-logo.jpg"
import './userprofile.css'

const UserProfile = () => {
    return (
        <>
            <div className='User-heading'>
                <p>User Profile</p>
            </div>
            <div className="cover">
                <div className="info">
                    <div className="vertical-1">
                        <div className='profile-photo'>
                            <img id='dp' src={Bg_image} alt="Your Picture" />
                        </div>
                        <div className="welcome-text">
                            <h1 id='text'>Welcome, Hemant</h1>
                            <p id='submit-num'>05 Submissions</p>
                        </div>
                    </div>

                    <div className="personal-info">
                        <div className="name" id='segment'>
                            <div className="tag">Name:</div>
                            <div className="tag-ans">Hemant Shankar</div>
                        </div>
                        <div className="email" id='segment'>
                            <div className="tag">E-mail:</div>
                            <div className="tag-ans">hemantshankar9595@gmail.com</div>
                        </div>
                        <div className="comp" id='segment'>
                            <div className="tag">Company:</div>
                            <div className="tag-ans">E-Cell</div>
                        </div>
                        <div className="occu" id='segment'>
                            <div className="tag">Role:</div>
                            <div className="tag-ans">Head of Operations</div>
                        </div>
                        <div className="Inst" id='segment'>
                            <div className="tag">Institute:</div>
                            <div className="tag-ans">National Institute of Technology, Agartala</div>
                        </div>
                        <div className="batch" id='segment'>
                            <div className="tag">Batch:</div>
                            <div className="tag-ans">2020-2025</div>
                        </div>
                    </div>

                    <button type="input" className="btn btn-primary text-center my_button" id='edit_button'>Edit</button>
                </div>

                <div className="submissions">
                    <h1 className='heading-submissions'>Your Submissions</h1>
                    <div className="submission-list">
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
                                    &#8901; 2 days ago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile