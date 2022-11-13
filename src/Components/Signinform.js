
import React from 'react'
import {useState,useEffect} from "react"
import "../Styles/Signin.css"
import "../Styles/bootstrap.css"
import axios from 'axios';
import swal from 'sweetalert';
function Signin() {
  const axiosPost=(e)=>{
      console.log("HELLO WORLD");
      e.preventDefault();
      axios.post('http://localhost:4000/sign-in',{
        username:e.target.username.value,
        password:e.target.password.value
      })
      .then((res)=>{
         if(res===true){
            swal("Successfully Logged in","","success");
         }
         else{
            swal("Login Failed","","failure");
         }
      })
      .catch((err)=>{
          throw err;
      })
  }
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
				<form className="form-signin" action="" method="post" name="form" onSubmit={axiosPost}>
          <label for="username">Username</label>
          <input className="form-styling" type="text" id="username" placeholder="" required />
          <label for="password">Password</label>
          <input className="form-styling" type="password" id="password" placeholder=""/>
          <input type="checkbox" id="checkbox"/>
          <label for="checkbox" ><span className="ui"></span>Keep me signed in</label>
          <div className="" style={{marginTop:"3rem"}}>
            <button className=" abcde btn-signin">Sign in</button>
          </div>
				</form>
      </div>
      
  

  </div>
</div>


   );
}

export default Signin;