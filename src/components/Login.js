import React, { useState, useEffect } from "react";
import "boxicons";

const Login = (props) => {
  const users = [{ username: "nanthu16", password: "dorion@96" }];
  const { set, setlog } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function authUser() {
    let user = users.filter((use) => use.username === username);
    console.log(user);
    if (user.length < 1) {
      return alert("User is not registered");
    }
    console.log(user[0].password, password);
    if (user[0].password === password) {
      set(false);
      setlog(true);
    } else {
      return alert("Password is incorrect");
    }
  }
  return (
    <div className="popup">
      <div id="logContainer">
        <span className="close" onClick={() => set(false)}>
          <box-icon type="solid" name="x-square" size="3.4em"></box-icon>
        </span>
        <div id="logcard">
          <h2>Login</h2>
          <form action="#">
            <div className="inputbox">
              <box-icon name="user"></box-icon>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label for="username">Username</label>
            </div>
            <div className="inputbox">
              <box-icon
                name="lock-alt"
                type="solid"
                className="icon"
              ></box-icon>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label for="password">Password</label>
            </div>
            <button type="submit" className="btn" onClick={authUser}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;