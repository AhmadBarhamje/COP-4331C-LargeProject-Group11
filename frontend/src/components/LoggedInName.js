import React from 'react';
import api from '../api';

function LoggedInName()
{

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;

    console.log(_ud);
    console.log(localStorage.getItem('accessToken'));
    const doLogout = event => 
    {
	    event.preventDefault();

        // call logout api here
        localStorage.removeItem('user_data');
        localStorage.removeItem('accessToken')
        // delete refresh cookie here
        window.location.href = '/';

    };    

  return(
   <div id="loggedInDiv">
   <span id="userName">Logged In As {firstName} {lastName}</span><br />
   <button type="button" id="logoutButton" className="buttons" 
     onClick={doLogout}> Log Out </button>
   </div>
  );

};


export default LoggedInName;