import React from 'react'

import { Link } from "react-router-dom";


import { SlOptions } from "react-icons/sl"
import logo_img from "./assests/insights-logo-w.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark" >
      <div className="container-fluid">
        <a className="navbar-brand" to="/">
          <img src={logo_img} alt="Insights" width="50" height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <SlOptions />
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar