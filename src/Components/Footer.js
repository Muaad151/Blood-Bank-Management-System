import React from 'react'
import '../Styles/Footer.css';
import '../Styles/bootstrap.css';


function Footer() {
  return ( 

  <footer className="site-footer fluid">
    <div className="container">
        <div className="row kas">
            <div className="col-sm-12 col-md-6">
                <h6>About</h6>
                <p className="text-justify">This is a group Project made as a part of DBMS lab.The main purpose of blood bank management web application system DBMS mini project is to provide the blood bank with an easier way to store and retrieve data and keep a record of the
                    availability of blood in the blood bank.</p>
            </div>


            <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                    <li><a href="http://scanfcode.com/about/">About Us</a></li>
                    <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                    <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                </ul>
            </div>
        </div>
        <hr/>
    </div>
    <div className="container">
        <div className="row ">
            <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved
                </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                    <li><a className="facebook" href="google.com"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="twitter" href="google.com"><i className="fa fa-twitter"></i></a></li>
                    <li><a className="dribbble" href="google.com"><i className="fa fa-dribbble"></i></a></li>
                    <li><a className="linkedin" href="google.com"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

   );
}

export default Footer;