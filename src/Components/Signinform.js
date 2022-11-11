
import React from 'react'
import {useState,useEffect} from "react"
import "../Styles/Signin.css"
import "../Styles/bootstrap.css"


function Signin() {
  
  let [flag, setflag]= useState(true);

  useEffect(()=>{
      setflag(true);    
  },[]);

  function trigger(e){
          if(e.target.classList.contains("a")){
              e.target.style.borderBottom="solid 2px #1059FF";
              document.querySelector(".b").style.borderBottom="";              
            }else{
              e.target.style.borderBottom="solid 2px #1059FF";
              document.querySelector(".a").style.borderBottom="";              
          }
  }

  return ( 
<div className="container-signin">
  <div className="frame3">
    <div className="nav">
      <ul className="links">
        {flag && <li className="signin-active "><button className="btn a"  onClick={trigger}>Sign in</button></li>}
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