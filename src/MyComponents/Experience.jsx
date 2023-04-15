import React from 'react'
import { Link } from "react-router-dom";
import { SlOptions } from "react-icons/sl"
import logo_img from "./assests/insights-logo-w.png"
import './Experience.css'

const Experience = () => {
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

      <div className="whole-page">
        <div className="empty">
        </div>
        <div className="page">
          <div className="exp-heading">
            <h2>Interview Experience</h2>
          </div>

          <form action="action.php">
            <div className='hor-inp'>
              <div className="half">
                <h4 className='head4'>Company Name: </h4>
                <input type="text" className="input input-name" aria-label="Company name" />
              </div>
              <div className="other-half">
                <h4 className='head4'>Role: </h4>
                <input type="text" className="input input-role" aria-label="Role" />
              </div>
            </div>

            <div className='hor-inp'>
              <div className="half">
                <h4 className='head4'>Difficulty: </h4>
                <input className="form-check input-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" for="flexRadioDefault2">
                  Easy
                </label>
                <input className="form-check input-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                  Medium
                </label>
                <input className="form-check input-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                  Hard
                </label>
              </div>
              <div className="other-half">
                <h4 className='head4'>Number of Rounds: </h4>
                <input type="text" className="input input-rounds" aria-label="numberofrounds" />
              </div>
            </div>

            <div className="hor-inp hor-inp-rounds">
              <div className="rounds round1">
                <h4 className="head4">Round#01 Experience :</h4>
                {/* <input type="text" className="input input-round" placeholder='Share your round-01 experience in max 100 words' aria-label="Round1" /> */}
                <textarea name="round1" className="Textarea" placeholder='Share your round-01 experience in max 100 words' id="" cols="55" rows="5"></textarea>
              </div>
              <div className="rounds round2">
                <h4 className="head4">Round#02 Experience :</h4>
                {/* <input type="text" className="input input-round" placeholder='Share your round-02 experience in max 100 words' aria-label="Round2" /> */}
                <textarea name="round2" className="Textarea" placeholder='Share your round-02 experience in max 100 words' id="" cols="55" rows="5"></textarea>
              </div>
              {/* <div className="rounds round3">
              <h4 className="head4">Round#03 Experience :</h4>
              <textarea name="round3" className="Textarea" placeholder='Share your round-03 experience in max 100 words' id="" cols="55" rows="5"></textarea>
            </div> */}
              <div className="rounds round4">
                <h4 className="head4">Round#03 Experience :</h4>
                <textarea name="round4" className="Textarea" placeholder='Summarize the rest of the rounds in 100-150 words' id="" cols="55" rows="5"></textarea>
                {/* <input type="t" className="input input-round" placeholder='Summarize the experience of rest of the rounds in 100-150 words' aria-label="Round4" /> */}
              </div>
            </div>

            <div className="hor-inp hor-inp-takeaway">
              <h4 className="head4">Key Takeaway :</h4>
              <textarea name="takeaway" className="Textarea" placeholder='Your key takeaways from the interview.' id="" cols="45" rows="3"></textarea>
            </div>

            <div className="hor-inp hor-inp-accepted">
              <div className="half">
                <h4 className="head4">Accepted the Offer :</h4>
                <input className="form-check input-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" for="flexRadioDefault2">
                  Yes
                </label>
                <input className="form-check input-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                  No
                </label>
              </div>
              <div className="other-half">
                <h4 className="head4">Final CTC :</h4>
                <input type="text" className="input input-rounds CTC" placeholder='in Lakhs' aria-label="CTC" />
              </div>
            </div>

            <div className="hor-inp hor-inp-takeaway hor-expect">
              <h4 className="head4">What to expect :</h4>
              <textarea name="expect" className="Textarea" placeholder='What to expect from the company.(Write Not accepted, if you have not join the company)' id="" cols="45" rows="3"></textarea>
            </div>

            <input class="btn btn-primary me-4 mt-4 mb-2 btn-lg" type="submit" value="Submit"></input>
            <input class="btn btn-danger ms-4 mt-4 mb-2 btn-lg" type="reset" value="Reset"></input>
          </form>

          {/* <form className="row g-3" id='form_signup'>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="inputfirstname" className="form-label">Company Name</label>
            <input type="text" className="form-control mr-3" aria-label="Company name" />
          </div>
          <div className="col">
            <label htmlFor="inputsurname" className="form-label">Role</label>
            <input type="text" className="form-control" aria-label="Role" />
          </div>
        </div>

        <div className="form-check col">
          <label htmlFor="inputprofession" className="form-label">Difficulty :</label>
          <input className="form-check-input-1 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
            Easy
          </label>
          <input className="form-check-input-2 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
            Medium
          </label>
          <input className="form-check-input-2 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
            Hard
          </label>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label row">Email</label>
          <input type="email" className="form-control row" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">You are working at :</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Company/Institute Name(Optional)" />
        </div>
        <div className="col-12" >
          <button type="submit" className="btn btn-primary" id='submit_button'>Create Account &#8702;</button>
        </div>
      </form> */}
        </div>
      </div>

    </>
  )
}

export default Experience