import React, {useState} from 'react';
import api from '../api';

function Login()
{
    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');

    const goRegisterPage = async event =>
    {
            event.preventDefault();
            window.location.href = '/register';
    }
    
    const doForgetPassword = async (event) => {
    event.preventDefault();
    window.location.href = "/forgotpassword";
  };

    const doLogin = async event => 
    {
        event.preventDefault();

        var obj = {userName:loginName.value,
                   password:loginPassword.value};
        let res
        try
        {    
            res = await api.login(obj); 
            console.log(res);
            if( res.data.id === -1 )
            {
                setMessage('User/Password combination incorrect');
            }
            else if (res.data.id === -2)
            {
                setMessage('Account not verified')
            }
            else
            {
                var user = {id:res.data.id,
                            firstName:res.data.firstName,
                            lastName:res.data.lastName,
                            userName:res.data.userName}
                localStorage.setItem('user_data', JSON.stringify(user));
                var accessToken = JSON.stringify(res.data.accessToken);
                localStorage.setItem('accessToken', accessToken)

                console.log(localStorage.getItem('accessToken'));
                setMessage('');
                window.location.href = '/cards';
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
            <span id="inner-title">Welcome</span><br />
	    <form onSubmit={doLogin}>
            <input type="text" id="loginName" class="fadeIn second" placeholder="Username"
                ref={(c) => loginName = c} /><br />
            <input type="password" class="fadeIn third" id="loginPassword" placeholder="Password"
                ref={(c) => loginPassword = c} /><br />
            <input type="submit" id="loginButton" className="buttons" value = "Log in"
            onClick={doLogin} />
            </form>
            <span id="loginResult">{message}</span>
        <div id="formFooter">
               <a class="underlineHover" onClick={goRegisterPage}>Register</a> <br />
               <a class="underlineHover" onClick={doForgetPassword}>Forgot Password?</a>
    	</div>

        </div>
	</div>
    );
};

export default Login;
