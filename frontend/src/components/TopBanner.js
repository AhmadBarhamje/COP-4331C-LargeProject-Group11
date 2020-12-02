import React from 'react';
import api from '../api';

function TopBanner()
{

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;

    const backdash = event => 
    {
	    event.preventDefault();
        window.location.href = '/cards';

    };    

  return(
   <div class="loggedInDiv topbanner fadeIn fourth">
   <span id="userName">Logged In As {firstName} {lastName}</span>
   <button type="button" id="logoutButton" class="buttons" 
     onClick={backdash}> Go Back </button>
   </div>
  );

};


export default TopBanner;
