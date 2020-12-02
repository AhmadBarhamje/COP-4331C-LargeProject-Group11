import React, { useState } from "react";
import api from "../api";

function Availability() {


const submitSchedule = async event =>
{
    const res = await api.protected();
};
const resetSchedule = async event =>
{
    const res = await api.protected();
};
const selectAll = async event =>
{
    const res = await api.protected();
};

  const [message, setMessage] = useState("");
  

  var _ud = localStorage.getItem("user_data");
  var ud = JSON.parse(_ud);
  var userId = ud.id;
  var firstName = ud.firstName;
  var lastName = ud.lastName;
  

  const app_name = "cop4331-group11-large";
  function buildPath(route) {
    if (process.env.NODE_ENV === "production") {
      return "https://" + app_name + ".herokuapp.com/" + route;
    } else {
      return "http://localhost:5000/" + route;
    }
  }


  return (
    <div class='wrapper fadeIn first'>
      <div id='cardUIDiv'>
        <br />
       
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/changepassword"; }} >
          {" "}
          Change Password
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/viewschedules"; }} >
          View Groups
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/cards"; }} >
          Dashboard
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/editgroups"; }} >
          Create/Delete group
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/editusers"; }} >
          Add/Remove Users
        </span>
        <br />
        <input type="button" id="submitScheduleButton" className="buttons" value = "Submit" onClick={submitSchedule} />
        <input type="button" id="resetScheduleButton" className="buttons" value = "Reset" onClick={resetSchedule} />
        <input type="button" id="selectAllScheduleButton" className="buttons" value = "Select All" onClick={selectAll} />

        <br />
        <p>Schedule goes here</p>

        </div>
    </div>

        
 
  );
}

export default Availability;
