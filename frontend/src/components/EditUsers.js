import React, { useState } from "react";
import api from "../api";

function EditUsers() {


const addUser = async event =>
{
    const res = await api.protected();
};
const removeUser = async event =>
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
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/availability"; }} >
          Update availability
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/editgroups"; }} >
          Create/Delete group
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/cards"; }} >
          Dashboard
        </span>
        <br />
            <span id="inner-title" class= 'fadeIn third'>ADD OR REMOVE USERS</span><br /><br />
            
            <form id="registerForm" class= 'fadeIn third' > 
            <input type="text" id="groupName" class="fadeIn second" placeholder="Enter Group Name" 
            //ref={(c) => registerUsername = c} 
            required/><br />
            <input type="text" id="userName" class="fadeIn second" placeholder="Enter Username" 
            //ref={(c) => registerUsername = c} 
            required/><br />
            <input type="button" id="addButton" className="buttons" value = "Add" onClick={addUser} />
            <input type="button" id="removeButton" className="buttons" value = "Remove" onClick={removeUser} />
            </form>
            <span id="editUserResult">{message}</span>
        </div>
    </div>

        
 
  );
}

export default EditUsers;
