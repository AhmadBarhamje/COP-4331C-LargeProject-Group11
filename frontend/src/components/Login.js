import React, {useState} from 'react';
import api from '../api';

function Login()
{
    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');

    const doLogin = async event => 
    {
        event.preventDefault();

        var obj = {userName:loginName.value,
                   password:loginPassword.value};
        var js = JSON.stringify(obj);
        let res
        try
        {    
            res = await api.login(obj); 

            if( res.data.id === -1 )
            {
                setMessage('User/Password combination incorrect');
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
        <div id="loginDiv">
            <form onSubmit={doLogin}>
            <span id="inner-title">PLEASE LOG IN</span><br />
            <input type="text" id="loginName" placeholder="Username"
                ref={(c) => loginName = c} /><br />
            <input type="password" id="loginPassword" placeholder="Password"
                ref={(c) => loginPassword = c} /><br />
            <input type="submit" id="loginButton" className="buttons" value = "Do It"
            onClick={doLogin} />
            </form>
            <span id="loginResult">{message}</span>
        </div>
    );
};

export default Login;