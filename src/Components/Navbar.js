import React from 'react'
import '../Styles/Navbar.css';
import '../Styles/bootstrap.css';
import Logo from '../logo.svg'


function Navbar() {
  return (  
    <>

    <div className="container-md">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">

             <img src={Logo} alt="Logo" id="Layer_1" />
            

                    <a className="navbar-brand" href="google.com">Navbar</a>
                    <div className="collapse navbar-collapse  text-white" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active  text-white" aria-current="page" href="google.com">Home</a>
                            <a className="nav-link  text-white" href="google.com">Features</a>
                            <a className="nav-link  text-white" href="google.com">Pricing</a>
                        </div>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="custom-btn btn-16">Sign in</button>
                        <button className="custom-btn btn-16">Log in</button>
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