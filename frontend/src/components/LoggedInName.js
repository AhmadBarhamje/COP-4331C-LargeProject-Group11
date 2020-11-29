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
   <div class="loggedInDiv topbanner fadeIn fourth">
   <span id="userName">Logged In As {firstName} {lastName}</span>
   <button type="button" id="logoutButton" class="buttons" 
     onClick={doLogout}> Log Out </button>
   </div>
  );

};


export default LoggedInName;
