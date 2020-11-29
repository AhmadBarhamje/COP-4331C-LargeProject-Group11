import React from 'react';
import api from '../api';

function LoggedInName()
{

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;

    const doLogout = event => 
    {
	    event.preventDefault();
        let _userData = localStorage.getItem('user_data');
        let userData = JSON.parse(_userData);
        api.logout({userId: userData.id});
        localStorage.removeItem('user_data');
        localStorage.removeItem('accessToken')
        window.location.href = '/';

    };    

  return(
   <div id="loggedInDiv fadeIn fourth" style="  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background-color: #fff;
  height: 60px;
  width: 100%;
  max-width: 1500px;
  position: relative;
  padding-left:10px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: left;">
   <span id="userName">Logged In As {firstName} {lastName}</span>
   <button type="button" id="logoutButton" class="buttons" 
     onClick={doLogout}> Log Out </button>
   </div>
  );

};


export default LoggedInName;
