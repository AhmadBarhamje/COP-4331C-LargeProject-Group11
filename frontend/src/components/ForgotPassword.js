import React, {useState} from 'react';
import api from '../api';

function ForgotPassword()
{
    var loginName;
    var userEmail;
    
    const [message,setMessage] = useState('');

    const doForgotpass = async event => 
    {
        event.preventDefault();

        var obj = {userName:loginName.value,
                   email:userEmail.value};
        let res
        try
        {    
            res = await api.login(obj); 
            console.log(res);

		var user = {userName:res.data.userName
			    email:res.data.email}
 }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }    
    };


    return(
	<div class="wrapper fadeInDown">
        <div id="loginDiv">
            <span id="inner-title">password recovery</span><br />
	    <form onSubmit={doForgotpass}>
            <input type="text" id="loginName" class="fadeIn second" placeholder="Username"/><br />
                ref={(c) => loginName = c} /><br />                    
	    <input type="text" id="loginName" class="fadeIn second" placeholder="Type in your email"/><br />
                ref={(c) => userEmail = c} /><br />            
	   <input type="submit" id="loginButton" className="buttons" value = "Continue"
            onClick={doForgotpass} />
            </form>

        </div>
	</div>
    );
};
