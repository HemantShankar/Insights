import React from 'react'
import Bg_image from "./assests/Interview.jpeg"

const UserProfile = () => {
    return (
        <>
            <div className='User-heading'>
                <h1>User Profile</h1>
            </div>
            <div className="cover">
                <div className="info">
                    <div className='profile-photo'>
                        <img id='dp' src={Bg_image} alt="Your Picture" />
                    </div>
                    <div className="welcome-text">
                        <h1 id='text'>Welcome, Hemant</h1>
                        <p id='submit-num'>05 Submissions</p>
                    </div>
                    
                </div>

                <div className="submissions">
                    <h1>Submissions</h1>
                </div>
            </div>
        </>
    )
}

export default UserProfile