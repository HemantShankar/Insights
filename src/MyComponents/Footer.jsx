import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import './footer.css'

const Footer = () => {
  return (
    <footer className="footerContent">
      <p className='footer-para'>
        Copyright &copy; Hemant Shankar
        <br />
        Follow:
      </p>
      <div className="social-icons">
        <a href="https://www.instagram.com/i__.savvy/"><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/hemant-shankar/"><BsLinkedin /></a>
        <a href="https://twitter.com/i___hemant"><BsTwitter /></a>
      </div>

    </footer>
  )
}

export default Footer