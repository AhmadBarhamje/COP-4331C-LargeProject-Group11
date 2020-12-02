import React, { useState } from "react";

import api from "../api";

function ChangePassword() {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");

  const goLoginPage = async (event) => {
    event.preventDefault();
    window.location.href = "/";
  };

  //onSubmit={doForgotpass}
  const changePasswordCaller = async (event) => {
    event.preventDefault();
    console.log("access token", localStorage.getItem("accessToken"));
    var obj = { password: password, newPassword: newPassword };
    let res;
    try {
      res = await api.changepass(obj);
      console.log("res from change", res);
      if (res.data.success) {
        setMessage("password Changed Successfully");
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
        <span id='inner-title'>Change Password</span>
        <br />
        <form>
          <input
            type='password'
            id='loginName'
            class='fadeIn second'
            placeholder='Current Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type='password'
            id='Email'
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
            class='fadeIn second'
            placeholder='New Password'
          />
          <br />
          {/* ref={(c) => (NewPassword = c)} /> */}
          <br />
          <input
            type='submit'
            id='loginButton'
            className='buttons'
            value='Reset Password'
            onClick={changePasswordCaller}
          />
          <br />
          <span id='loginResult'>{message}</span>
        </form>
        <div id='formFooter'>
          <span class='a underlineHover' onClick={goLoginPage}>
            Back to Login
          </span>
        </div>
      </div>
    </div>
  );
}
export default ChangePassword;
