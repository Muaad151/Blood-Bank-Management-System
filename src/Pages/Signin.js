import React from 'react'
import Signinfrom from "../Components/Signinform"
import Navbar2 from '../Components/Navbar2';
import Footer from '../Components/Footer';

function Signin() {
    return (
        <div className = "Signin" >
        <Navbar2 />
        <Signinfrom />
        <Footer />
        </div>


    );
}

export default Signin;