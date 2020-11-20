import React, {useState} from 'react';
import api from '../api';

function ForgotPassword()
{
    var CurrentPassword;
    var NewPassword;
    
    const [message,setMessage] = useState('');

  
    };


    return(
	<div class="wrapper fadeInDown">
        <div id="loginDiv">
            <span id="inner-title">Change Password</span><br />
	    <form onSubmit={doForgotpass}>
            <input type="text" id="loginName" class="fadeIn second" placeholder="Current Password" 
                ref={(c) => CurrentPassword = c} /><br />			    
	    <input type="text" id="Email" class="fadeIn second" placeholder="New Password"/><br />          
                ref={(c) => NewPassword = c} /><br />	    
            <input type="submit" id="loginButton" className="buttons" value = "Reset Password"/>
            </form>

        </div>
	</div>
    );
};
