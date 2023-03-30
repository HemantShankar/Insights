import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div className="whole-page">
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
            <div className="rounds round3">
              <h4 className="head4">Round#03 Experience :</h4>
              {/* <input type="text" className="input input-round" placeholder='Share your round-03 experience in max 100 words' aria-label="Round3" /> */}
              <textarea name="round3" className="Textarea" placeholder='Share your round-03 experience in max 100 words' id="" cols="55" rows="5"></textarea>
            </div>
            <div className="rounds round4">
              <h4 className="head4">Round#04 Experience :</h4>
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
              <h4 className="head4">Final CTC (in lakhs) :</h4>
              <input type="text" className="input input-rounds CTC" placeholder='Optional' aria-label="CTC" />
            </div>
          </div>

          <div className="hor-inp hor-inp-takeaway hor-expect">
            <h4 className="head4">What to expect :</h4>
            <textarea name="expect" className="Textarea" placeholder='What to expect from the company.(Optional)' id="" cols="45" rows="3"></textarea>
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
  )
}

export default Experience