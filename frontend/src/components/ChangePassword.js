import React, { useState } from "react";

import api from "../api";

function ChangePassword() {
  var CurrentPassword;
  var NewPassword;

  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
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
            onClick={changePasswordCaller}
            className='buttons'
            value='Reset Password'
          />
        </form>
        <div id="formFooter">
         <span class="a underlineHover">Back to Dashboard<span/>
    	</div>
      </div>
    </div>
  );
}
export default ChangePassword;
