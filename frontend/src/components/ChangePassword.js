import React, { useState } from "react";

import api from "../api";

function ChangePassword() {
  var CurrentPassword;
  var NewPassword;

  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
	
  window.onload = readCookie();
  function readCookie() {
  var user = -1;
  var data = document.cookie;
  var splits = data.split(",");
// if other data is wanted from the cookie, will be split in the tokens array. Here for future usage if required
  for (var i = 0; i < splits.length; i++) {
        var thisOne = splits[i].trim();
        var tokens = thisOne.split("=");
        if (tokens[0] == "user") {
            user = parseInt(tokens[1].trim());
        }
        if (user > 0) {
            return user;
        } else {
            window.location.href = '/';
        }
    }
}

    const goLoginPage = async event =>
    {
            event.preventDefault();
            window.location.href = '/';
    }
	
  //onSubmit={doForgotpass}
  const changePasswordCaller = async (event) => {
    event.preventDefault();
    console.log("access token", localStorage.getItem("accessToken"));
    var obj = { password: password, newPassword: newPassword };
    let res;
    try {
      res = await api.changePassword(obj);
      console.log("res from change", res);
      if (res.data.success) {
        alert("password Changed Successfully");
      } else {
        alert(res.data.error);
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
            type='text'
            id='loginName'
            class='fadeIn second'
            placeholder='Current Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type='text'
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
        </form>
        <div id="formFooter">
         <span class="a underlineHover" onClick={goLoginPage}>Back to Dashboard</span>
    	</div>
      </div>
    </div>
  );
}
export default ChangePassword;
