import React from 'react'
import '../Styles/Main.css'
import '../Styles/bootstrap.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faHospital } from '@fortawesome/free-solid-svg-icons'
import minus from  "../minus.png";
import plus from  "../plus.png";

function Main() {
  return (
    <>
      <section className="heading">
        <div className="punchline">
          <h2 className="display-3"> GIVE THE GIFT OF LIFE </h2>
          <h1 className="motto text-danger"> DONATE BLOOD </h1>
        </div>
        <div className="row mt-2">
          <div className="b1 col-6">
            <h1 className="count-1"> 157 </h1>
            <img src={minus} alt="Logo" id="Layer_1" />
            <p className="count-description"> New blood requests </p>
          </div>
          <div className="b1 col-6">
            <h1 className="count-2"> 43 </h1>
            <img src={plus} alt="Logo" id="Layer_1" />
            <p className="count-description"> Available Blood Packets </p>
          </div>
        </div>
      </section>
      <main className="main-options">
        <div className="square">
          <Link to="/register" class="text-center abcd">
            <FontAwesomeIcon className="fa-sharp  fa-solid btn-icon" icon={faSearch}/>
            Registration
          </Link>
        </div>

        <div className="square">
          <Link to="/transaction" class="text-center abcd">
            <FontAwesomeIcon className="fa-sharp  fa-solid btn-icon" icon={faHospital} />
            Blood Bank
          </Link>
        </div>

        <div className="square">
          <Link to="/request" class="text-center abcd">
            <FontAwesomeIcon className="fa-sharp  fa-solid btn-icon" icon={faMessage}/>
            Requests
          </Link>
        </div>

        <div className="square">
          <Link to="/" class="text-center abcd ">
            <FontAwesomeIcon icon={faGear} className="fa-sharp  fa-solid btn-icon" />
            Other
          </Link>
        </div>
      </main>
    </>
  )
}

export default Main
