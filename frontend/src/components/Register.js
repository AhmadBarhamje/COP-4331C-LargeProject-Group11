import React, {useState} from 'react';
import api from '../api';

function Register()
{
    var registerUsername;
    var registerPassword;
    var registerEmail;
    var firstName;
    var lastName;

    const [message,setMessage] = useState('');

    const goLoginPage = async event =>
    {
            event.preventDefault();
            window.location.href = '/';
    }

    const doRegister = async event => 
    {
        event.preventDefault();

        var obj = 
        {
            userName:registerUsername.value,
            password:registerPassword.value,
            email:registerEmail.value,
            firstName:firstName.value,
            lastName:lastName.value           
        
        };
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
                setMessage('Check email to activate account')
            
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
                <input type="text" id="firstName" class="fadeIn second" placeholder="First Name"/><br />
                <input type="text" id="lastName" class="fadeIn second" placeholder="Last name"/><br />
                <input type="text" id="registerUsername" class="fadeIn second" placeholder="Username"/><br />
                <input type="email"  id="registerEmail" class="fadeIn third" placeholder="Email"/><br />
                <input type="password"  id="registerPassword" class="fadeIn third" placeholder="Password"/><br />
                <input type="password"  id="registerPassword" class="fadeIn third" placeholder="Confirm Password"/><br />
                <input type="submit" id="registerButton" className="buttons" value = "Register" onClick={doRegister} />
            </form>
            <span id="registerResult"></span>
            <div id="formFooter">
                <a class="underlineHover" onClick={goLoginPage}>Already Registered?</a>

            </div>

        </div>
    </div>

    );
};

export default Register;