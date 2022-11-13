import React from 'react'
import "../Styles/bootstrap.css"
import "../Styles/Recieverform.css"
import swal from "sweetalert"
import axios from 'axios'

function Recieverform() {
  const formSubmit=(e)=>{
      e.preventDefault();

      console.log(e.target.p_name.value)

      axios.post("http://localhost:4000/reg_patient",{
            p_name:e.target.p_name.value,
            p_phone_num:e.target.p_phone_num.value,
            p_mail:e.target.p_mail.value,
            no_of_donations:e.target.no_of_donations.value,
            p_dob:e.target.p_dob.value,
            p_blood_grp:e.target.p_blood_grp.value,
            p_height:e.target.p_height.value,
            p_age:e.target.p_age.value,
            p_address:e.target.p_address.value,
            p_weight:e.target.p_weight.value  
          })
          .then((res)=>{
              if(res===true){
                swal("Matching Donor Found","","success")
              }
              else{
                swal("Sorry! No Matching Donor Found ","","warning")
              }
          })
          .catch((err)=>{
            console.log(err);
          }
      );
  }
  return ( 

  <div className="container-details ">
    <div className="frame2">
      <h3 className="donor_head">PATIENT DETAILS</h3>
      <div ng-app ng-init="checked = false" className="parent_form">
        <form className="form-signin  justify-content-center"  name="form" onSubmit={formSubmit}>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <label for="p_name">Name</label>
              <input className="form-styling" type="text" id="p_name" placeholder="" />
              <label for="p_phone_num">Phone Number</label>
              <input className="form-styling" type="number" id="p_phone_num" placeholder="" />
              <label for="p_mail">Email</label>
              <input className="form-styling" type="email" id="p_mail" placeholder="" />
              <label for="p_dob">Date of Birth</label>
              <input className="form-styling" type="date" id="p_dob" placeholder="" />
              <label for="p_blood_grp">Blood group</label>
              <br/>
              <select className="form-styling" required id="p_blood_grp" >
                <option disabled selected> Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>

              </select>
              <label for="p_height">HEIGHT</label>
              <input className="form-styling" type="number" id="p_height" placeholder="" />
            </div>

            <div className="col-md-12 col-lg-6">
              <label for="p_age">Age</label>
              <input className="form-styling" type="number" id="p_age" placeholder="" />
              <label for="p_address">Address</label>
              <input className="form-styling" type="text" id="p_address" placeholder="" />
              <label for="no_of_donations">Number of Transaction</label>
              <input className="form-styling" type="number" id="no_of_donations" placeholder='0'/>
              <label for="d_gender">Gender</label>
              <select className="form-styling" required id="gender">
                <option disabled selected> Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>

              </select>
              <label for="p_weight">WEIGHT</label>
              <input className="form-styling" type="number" id="p_weight" placeholder="" />
              <label for="p_Rh">Rh group</label>


              <input type="radio" id="Rh_grp" value="POSITIVE"/>
               <label for="POSITIVE" class="ab">POSITIVE</label>
               <input type="radio" name="Rh_grp" value="NEGATIVE"/>
               <label for="NEGATIVE" class="ab">NEGATIVE</label>

            </div>
          </div>
          <br/>
          <br/>
          <button type="submit" className="btn btn-info abc">Register</button>

        </form>

      </div>
    </div>
  </div>


   );
}

export default Recieverform;
