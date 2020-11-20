import React, {useState} from 'react';
import api from '../api';

function ForgotPassword()
{
    var loginName;
    var userEmail;
    
    const [message,setMessage] = useState('');

  
    };


    return(
	<div class="wrapper fadeInDown">
        <div id="loginDiv">
            <span id="inner-title">password recovery</span><br />
	    <form onSubmit={doForgotpass}>
            <input type="text" id="loginName" class="fadeIn second" placeholder="Username" 
                ref={(c) => loginName = c} /><br />			    
	    <input type="text" id="Email" class="fadeIn second" placeholder="Type in your email"/><br />          
                ref={(c) => userEmail = c} /><br />	    
            <input type="submit" id="loginButton" className="buttons" value = "Continue"/>
            </form>

        </div>
	</div>
    );
};
