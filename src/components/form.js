import React from "react";
import './form.css';

const Form = () => {
    return (
        <div>
            <center>
          <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
          <main id="wrapper">
            <div className="container">
              <form action="#" id="appoint-form" method="POST">
                <center>  <h1 id="form-head">Student Medical Appointment </h1></center>
              
                <center>
                <input type="text" id="id" className="person-detail" placeholder="Student id*" name="uid" maxLength={15} required />
                <input type="text" id="name" className="person-detail" placeholder="Student name*" name="uname" maxLength={20} required />
                <select id="dropdown">
                  <option value="select your dept" disabled selected>Select Your Dept </option>
                  <option value="balasore">CSE </option>
                  <option value="bhadrak">IT </option>
                  <option value="baripada">AIDS </option>
                  <option value="baripada">EEE </option>
                  <option value="baripada">MECH </option>
                  <option value="baripada">ECE</option>
                  <option value="baripada">CIVIL</option>
                  <option value="baripada">OTHERS</option>
                </select>
                <select id="dropdown">
                  <option value="select your sec" disabled selected>Select Your Section </option>
                  <option value="balasore">A</option>
                  <option value="bhadrak">B </option>
                  <option value="baripada">C </option>
                  </select>
                <input type="tel" id="mobile" className="person-detail" name="ucontact" placeholder="Mobile number*" maxLength={10} required />
                <input type="email" placeholder="Email Id*" id="email" className="person-detail" name="uemail" required />
                <input type="text" id="city" className="person-detail" placeholder="City*" name="ucity" maxLength={50} required />
                </center>
                
            
               <center>
                
                
                  <select id="dropdown">
                  <option value="select your sex" disabled selected>Select Your Gender </option>
                  <option value="balasore">Female</option>
                  <option value="bhadrak">Male</option>
                  <option value="baripada">Others</option>
                  </select>
                  <select id="dropdown">
                  <option value="select your symptoms" disabled selected>Symptoms </option>
                  <option value="balasore">Fever </option>
                  <option value="bhadrak">Cold </option>
                  <option value="baripada">Diabetes </option>
                  <option value="baripada">BloodPressure </option>
                  <option value="baripada">Allergies </option>
                  <option value="baripada">Tremors</option>
                  <option value="baripada">Sore Throat </option>
                  <option value="baripada">Others </option>
                </select>
                  <select id="dropdown">
                  <option value="select your bloodgrp" disabled selected>Select Your Bloodgrp</option>
                  <option value="balasore">A+ve</option>
                  <option value="bhadrak">B+ve</option>
                  <option value="baripada">O+ve </option>
                  <option value="baripada">A-ve</option>
                  <option value="baripada">B-ve </option>
                  <option value="baripada">O-ve</option>
                  <option value="baripada">AB+ve</option>
                  <option value="baripada">AB-ve</option>
                </select>
                
                <select id="dropdown">
                  <option value="requested for" disabled selected>Requested For </option>
                  <option value="balasore">Medical-Evalution</option>
                  <option value="bhadrak">FullBody-Checkup</option>
                  <option value="baripada">Regular</option>
                  </select>
                  <select id="dropdown">
                  <option value="disability" disabled selected>Disabled Person </option>
                  <option value="balasore">No</option>
                  <option value="bhadrak">Yes</option>
                  </select>

                  </center>

<center>
                <button type="submit" id="submit" value="Submit" onclick> BOOK </button></center>
              </form>
            </div>
          </main>
          </center>
        </div>
      );
    }
    export default Form;