import React, { useState } from "react";
import api from "../api";

function EditGroups() {

    const [message, setMessage] = useState("");
    var groupName;

const addGroup = async event =>
{
    event.preventDefault();
    console.log("access token", localStorage.getItem("accessToken"));
    var obj = {  name:groupName.value };
    let res;
    try {
      res = await api.createSchedule(obj);
      console.log("res from change", res);
      if (res.data.success) {
        setMessage("Group Added");
      } else {
        setMessage(res.data.error);
      }
    } catch (e) {
      alert(e.toString());
      return;
    }
  };




const deleteGroup = async event =>
{
    event.preventDefault();
    
    console.log("access token", localStorage.getItem("accessToken"));
    var obj = {  name:groupName };
    let res;
    try {
      res = await api.deleteSchedule(obj);
      console.log("res from change", res);
      if (res.data.success) {
        setMessage("Group Deleted");
      } else {
        setMessage(res.data.error);
      }
    } catch (e) {
      alert(e.toString());
      return;
    }
};
/* wasnt sure what this is or if its needed

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
*/
 

    
  


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
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/cards"; }} >
          Dashboard
        </span>
        <span id='menu' class='fadeIn third' onClick={(e) => { e.preventDefault(); window.location = "/editusers"; }} >
          Add/Remove Users
        </span>
        <br />
            <span id="inner-title" class= 'fadeIn third'>ADD OR DELETE GROUPS</span><br /><br />
            
            <form id="registerForm" class= 'fadeIn third'> 
            <input type="text" id="groupName" class="fadeIn second" placeholder="Enter Group Name" ref={(c) => groupName = c} 
            required/><br />
            <input type="button" id="addButton" className="buttons" value = "Add" onClick={addGroup} />
            <input type="button" id="deleteButton" className="buttons" value = "Delete" onClick={deleteGroup} />
            </form>
            <span id="editGroupResult">{message}</span>
            

    </div>
        </div>

        
 
  );
}

export default EditGroups;
