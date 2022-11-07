import React from 'react'
import '../Styles/Main.css';
import '../Styles/bootstrap.css';
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
            <a href="google.com">Find Donor</a>
        </div>

        <div className="square">
            <i className="fa-regular fa-hospital btn-icon"></i>
            <a href="google.com">Blood Bank</a>
        </div>

        <div className="square">
            <i className="fa-regular fa-envelope btn-icon"></i>
            <a href="google.com">Requests</a>
        </div>

        <div className="square">
            <i className="fa-sharp fa-solid fa-gears btn-icon"></i>
            <a href="google.com">Other</a>
        </div>

    </main>
      
      
      </>
   );
}

export default Main;