import React from 'react'
import Bg_image from "./assests/Interview.jpeg"
import './userprofile.css'

const UserProfile = () => {
    return (
        <>
            <div className='User-heading'>
                <h1>User Profile</h1>
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
                        <div className="occu" id='segment'>
                            <div className="tag">Occupation:</div>
                            <div className="tag-ans">Working Professional</div>
                        </div>
                        <div className="comp" id='segment'>
                            <div className="tag">Company:</div>
                            <div className="tag-ans">E-Cell</div>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quibusdam debitis asperiores, libero quas, aspernatur nemo architecto recusandae dicta, veniam nisi fugit maiores dolorum aperiam atque ex deleniti laudantium odit.</p>
                </div>
            </div>
        </>
    )
}

export default UserProfile