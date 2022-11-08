
import React from 'react'
import "../Styles/Signin.css"
import "../Styles/bootstrap.css"


function Signin() {
  return ( 
        
<div className="container-signin">
  <div className="frame3">
    <div className="nav">
      <ul className="links">
        <li className="signin-active"><a className="btn" href="google.com">Sign in</a></li>
        <li className="signup-inactive"><a className="btn" href="google.com">Sign up </a></li>
      </ul>
    </div>

    <div ng-app ng-init="checked = false">
				<form className="form-signin" action="" method="post" name="form">
          <label for="username">Username</label>
          <input className="form-styling" type="text" name="username" placeholder=""/>
          <label for="password">Password</label>
          <input className="form-styling" type="text" name="password" placeholder=""/>
          <input type="checkbox" id="checkbox"/>
          <label for="checkbox" ><span className="ui"></span>Keep me signed in</label>
          <div className="btn-animate">
            <a className="btn-signin" href="google.com">Sign in</a>
          </div>
				</form>
      </div>
      
  

  </div>
</div>


   );
}

export default Signin;