import React, { useState } from "react";
import api from "../api";

function SelectedGroup() {

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
        
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/viewschedules"; }} >
          {" "}
          Go Back to Groups
        </span>
        

        <br />
        <p>Name's Group</p> 
        <p>Schedule</p>
  </div>
</div>
  );
}

export default SelectedGroup;
