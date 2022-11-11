import React from 'react'
import "../Styles/Navbar2.css"
import Logo from  "../logo.svg";
import {Link} from "react-router-dom"
function Navbar2() {
  return ( 

    <div className="container-fluid navbar-danger">
    <nav className="navbar nav_ navbar-expand-md">
      <div className="container-fluid">

      <img src={Logo} alt="Logo" id="Layer_1" />


        <Link className="navbar-brand" to="/">Life Bank</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  text-white" id="navbarNavAltMarkup">
          <div className="navbar-nav">

          </div>
        </div>
        <form className="form-inline my-2 my-lg-0">
            <Link className="custom-btn btn-16" to="/signin">Sign in</Link>
        </form>
      </div>
    </nav>
  </div>




   );
}

export default Navbar2;