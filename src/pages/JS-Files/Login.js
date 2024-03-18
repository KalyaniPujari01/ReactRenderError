import React from "react";
import "../CSS-Files/Login.css";

export default function Login() {
  // const inlinestyle = {};
  return (
    <div className="main-login">
      <div className="login">
        <form action="validate" method="post" className="form-login">
          <p>LOGIN</p>
          <br />

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input-fields"
          />
          <br />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input-fields"
          />
          <br></br>
          <br />
          <input type="submit" value="SIGN IN" className="loginbtn" />
          <br />
          <br />
          <a href="#">Forgot Password?</a>
        </form>
      </div>
    </div>
  );
}
