import React, { useState } from "react";
import api from "../api";

function ForgotPassword() {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const forgotPasswordCaller = async (event) => {
    event.preventDefault();
    console.log("access token", localStorage.getItem("accessToken"));
    var obj = { userName: userName, email: email };
    let res;
    try {
      res = await api.forgotpass(obj);
      console.log("res from change", res);
      if (res.data.success) {
        setMessage("Check Your Email");
      } else {
        setMessage(res.data.error);
      }
    } catch (e) {
      alert(e.toString());
      return;
    }
  };
  return (
    <div class='wrapper fadeInDown'>
      <div id='loginDiv'>
        <span id='inner-title'>password recovery</span>
        <br />
        <form>
          <input
            type='text'
            id='loginName'
            class='fadeIn second'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Username'
          />
          <br />
          <input
            type='text'
            id='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class='fadeIn second'
            placeholder='Type in your email'
          />
          <br />

          <br />
          <input
            type='submit'
            onClick={forgotPasswordCaller}
            id='loginButton'
            className='buttons'
            value='Continue'
          />
          <br />
          <span id='loginResult'>{message}</span>
        </form>
      </div>
    </div>
  );
}
export default ForgotPassword;
