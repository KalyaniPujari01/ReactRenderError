import React from "react";
import "../CSS-Files/Registration.css";

export default function Registration() {
  // const inlinestyle = {
  //   color: "red",
  //   backgroundColor: "yellow",
  // };
  // style={inlinestyle}

  return (
    <div>
      <div className="registration">
        <form action="register" method="post" className="register-form">
          <p>REGISTRATION FORM</p>

          <input
            type="text"
            placeholder="UserName"
            name="username"
            className="input-fields"
          />
          <br />
          <br />

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input-fields"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input-fields"
          />
          <br />
          <br />
          <label>Gender</label>
          <input type="radio" name="gender" value="male" />
          <label className="radiofields">male</label>
          <input type="radio" name="gender" value="female" />
          <label className="radiofields">female</label>
          <input type="radio" name="gender" value="other" />
          <label className="radiofields">others</label>
          <br />
          <br />
          <label>Role</label>
          <input type="radio" name="role" value="admin" />
          <label className="radiofields">Admin</label>
          <input type="radio" name="role" value="customer" />
          <label className="radiofields">User</label>
          <br />
          <br />
          <textarea
            name="address"
            placeholder="Enter Address"
            className="addarea"
          ></textarea>
          <br />
          <br />
          <input type="submit" value="SIGN UP" class="registerbtn" />
        </form>
      </div>
    </div>
  );
}
