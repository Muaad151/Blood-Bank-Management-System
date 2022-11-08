import React from 'react'
import "../Styles/bootstrap.css"
import "../Styles/Recieverform.css"



function Recieverform() {
  return ( 

  <div className="container-details ">
    <div className="frame2">
      <h3 className="donor_head">PATIENT DETAILS</h3>
      <div ng-app ng-init="checked = false" className="parent_form">
        <form className="form-signin  justify-content-center" action="" method="post" name="form">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <label for="p_name">Name</label>
              <input className="form-styling" type="text" name="p_name" placeholder="" />
              <label for="p_phone_num">Phone Number</label>
              <input className="form-styling" type="tel" name="p_phone_num" placeholder="" />
              <label for="p_mail">Email</label>
              <input className="form-styling" type="email" name="p_mail" placeholder="" />
              <label for="p_dob">Date of Birth</label>
              <input className="form-styling" type="date" name="p_dob" placeholder="" />
              <label for="p_blood_grp">Blood group</label>
              <br/>
              <select className="form-styling" required name="p_blood_grp" id="p_blood_grp">
                <option disabled selected> Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>

              </select>
              <label for="p_height">HEIGHT</label>
              <input className="form-styling" type="tel" name="p_height" placeholder="" />
            </div>

            <div className="col-md-12 col-lg-6">
              <label for="p_age">Age</label>
              <input className="form-styling" type="text" name="p_age" placeholder="" />
              <label for="p_address">Address</label>
              <input className="form-styling" type="text" name="p_address" placeholder="" />
              <label for="number_of_transaction">Number of Transaction</label>
              <input className="form-styling" type="number" name="number_of_donations" placeholder="" />
              <label for="d_gender">Gender</label>
              <select className="form-styling" required name="gender">
                <option disabled selected> Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>

              </select>
              <label for="p_weight">WEIGHT</label>
              <input className="form-styling" type="number" name="p_weight" placeholder="" />
              <label for="p_Rh">Rh group</label>


              <input type="radio" name="Rh_grp" value="POSITIVE"/>
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