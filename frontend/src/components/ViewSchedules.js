import React, { useState } from "react";
import api from "../api";

function ViewSchedules() {

    const doRegister = async event =>
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
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/cards"; }} >
          Dashboard
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/availability"; }} >
          Update Availability
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/editgroups"; }} >
          Create/Delete group
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/editusers"; }} >
          Add/Remove Users
        </span>

        <br />
        <p>List of groups</p> 
        <p>When you click on a group it would go to <a href = '/selectedgroup'>this page</a></p>
  </div>
</div>
  );
}

export default ViewSchedules;
