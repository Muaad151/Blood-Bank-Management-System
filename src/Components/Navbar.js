import React from 'react'
import '../Styles/Navbar.css';
import '../Styles/bootstrap.css';
import Logo from '../arjun.svg'
import {Link} from "react-router-dom"


function Navbar() {
  return (  
    <>

    <div className="container-md">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">

             <img src={Logo} alt="Logo" id="Layer_1" />
                    <Link className="navbar-brand" to="/">Life Bank</Link>
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

<div className="wave_">
    <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}></div>
        </div>
        <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style={{backgroundImage: "url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
        </div>
    </div>
</div>

</>

   );
}

export default Navbar;