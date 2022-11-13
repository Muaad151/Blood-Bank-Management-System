import React from 'react';
import '../Styles/Donorform.css'
import '../Styles/bootstrap.css'

function Donorform() {
  return (
      
    <div class="container-details ">
    <div class="frame">
      <h3 class="donor_head">DONOR DETAILS</h3>
      <br/>
      <div ng-app ng-init="checked = false" class="parent_form">
        <form class="form-signin  justify-content-center" action="" method="post" name="form">
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <label for="d_name">Name</label>
              <input class="form-styling" type="text" name="d_name" placeholder="" />
              <label for="d_phone_num">Phone Number</label>
              <input class="form-styling" type="tel" name="d_phone_num" placeholder="" />
              <label for="d_mail">Email</label>
              <input class="form-styling" type="email" name="d_mail" placeholder="" />
              <label for="d_dob">Date of Birth</label>
              <input class="form-styling" type="date" name="d_dob" placeholder="" />
              <label for="d_blood_grp">Blood group</label>
              <br/>
              <select class="form-styling" required name="d_blood_grp" id="d_blood_grp">
                <option disabled selected> Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>

              </select>
              <label for="d_Rh">Rh group</label>
              <br/>


               <input type="radio" name="Rh_grp" value="POSITIVE"/>
               <label for="POSITIVE" class="ab">POSITIVE</label><br/>
               <input type="radio" name="Rh_grp" value="NEGATIVE"/>
               <label for="NEGATIVE" class="ab">NEGATIVE</label>
              <br/>

            </div>
            <div class="col-md-12 col-lg-6">
              <label for="d_age">Age</label>
              <input class="form-styling" type="text" name="d_age" placeholder="" />
              <label for="d_address">Address</label>
              <input class="form-styling" type="text" name="d_address" placeholder="" />
              <label for="date_of_last_donation">date of last donation</label>
              <input class="form-styling" type="date" name="date_of_last_donation" placeholder="" />
              <label for="number_of_donations">number of donations</label>
              <input class="form-styling" type="number" name="date_of_last_donation" placeholder="" />
              <label for="d_gender">Gender</label>
              <br/>
              <select class="form-styling" required name="gender">
                <option disabled selected> Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>

              </select>
          

              <br/>
              <br/>
            </div>
          </div>
            <button className="btn btn-info abc">Register</button>
        </form>
      </div>
    </div>
</div>

   );
}

export default Donorform;


