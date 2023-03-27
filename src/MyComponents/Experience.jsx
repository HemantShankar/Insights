import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className="page">
      <div className="exp-heading">
        <h2>Interview Experience</h2>
      </div>

      <form action="action.php">
        <div className='hor-inp'>
          <div className="half">
            <h4>Company Name: </h4>
            <input type="text" className="input input-name" aria-label="Company name" />
          </div>
          <div className="other-half">
            <h4>Role: </h4>
            <input type="text" className="input input-role" aria-label="Role" />
          </div>
        </div>

        <div className='hor-inp'>
          <div className="half">
            <h4>Difficulty: </h4>
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
            <h4>Number of Rounds: </h4>
            <input type="text" className="input input-rounds" aria-label="Company name" />
          </div>
        </div>
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



  )
}

export default Experience