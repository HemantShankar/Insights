import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className="page">
      <div className="exp-heading">
        <h1>Your Interview Experience</h1>
      </div>
      <form className="row g-3" id='form_signup'>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="inputfirstname" className="form-label">Company Name</label>
            <input type="text" className="form-control" aria-label="Company name" />
          </div>
          <div className="col">
            <label htmlFor="inputsurname" className="form-label">Role</label>
            <input type="text" className="form-control" aria-label="Role" />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" />
        </div>

        <div className="form-check">
          <label htmlFor="inputprofession" className="form-label">You are a :</label>
          <input className="form-check-input-1 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
            Student
          </label>
          <input className="form-check-input-2 mx-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" for="flexRadioDefault1">
            Working Professional
          </label>
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">You are working at :</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Company/Institute Name(Optional)" />
        </div>
        <div className="col-12" >
          <button type="submit" className="btn btn-primary" id='submit_button'>Create Account &#8702;</button>
        </div>
      </form>
    </div>



  )
}

export default Experience