import React from 'react'
import '../Styles/Main.css';
import '../Styles/bootstrap.css';
import {Link} from "react-router-dom"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main() {
  return (  
      <>

        
    <section className="heading">
        <div className="punchline">
            <h2 className="display-3">GIVE THE GIFT OF LIFE</h2>
            <h1 className="motto text-danger">DONATE BLOOD</h1>
        </div>
        <div className="row mt-2">
            <div className="b1 col-6">
                <h1 className="count-1">157 <i className="fa-solid fa-raindrops"></i></h1>
                <p className="count-description">New blood requests </p>
            </div>
            <div className="b1 col-6">
                <h1 className="count-2">43</h1>
                <p className="count-description">Available Blood Packets</p>
            </div>
        </div>
    </section>


    <main className="main-options">
        <div className="square">
            <i className="fa-sharp fa-solid fa-magnifying-glass btn-icon"></i>
            <Link to="/register" class="text-center">Registration</Link>
        </div>

        <div className="square">
            <i className="fa-regular fa-hospital btn-icon"></i>
            <Link to="/transaction" class="text-center">Blood Bank</Link>
        </div>

        <div className="square">
            <i className="fa-regular fa-envelope btn-icon"></i>
            <Link to="/request" class="text-center">Requests</Link>
        </div>

        <div className="square">
            <i className="fa-sharp fa-solid fa-gears btn-icon"></i>
            <Link to="/" class="text-center">Other</Link>
        </div>

    </main>
      
      
      </>
   );
}

export default Main;