import React, {useState} from 'react';
import api from '../api';

function Register()
{
    var registerName;
    var registerPassword;

    const [message,setMessage] = useState('');

    const doRegister = async event => 
    {
        event.preventDefault();

        var obj = {userName:registerName.value,
                   password:registerPassword.value};
        let res
        try
        {    
            res = await api.register(obj); 
            console.log(res);
            if( res.data.id === -3 )
            {
                setMessage('Username already taken');
            }
            else if (res.data.id === -4)
            {
                setMessage('Email is in use')
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
            <span id="inner-title">Register</span><br />
            <form onSubmit={doRegister}> 
                <input type="text" id="loginName" class="fadeIn second" placeholder="Username"/><br />
                <input type="email" class="fadeIn third" id="email" placeholder="Email"/><br />
                <input type="password" class="fadeIn third" id="loginPassword" placeholder="Password"/><br />
                <input type="password" class="fadeIn third" id="loginPassword" placeholder="Confirm Password"/><br />
                <input type="submit" id="loginButton" className="buttons" value = "Register"
                onClick={doRegister} />
            </form>
            <span id="loginResult"></span>
            <div id="formFooter">
                <a class="underlineHover">Already Registered?</a>

            </div>

        </div>
    </div>

    );
};

export default Register;