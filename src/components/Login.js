import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  const handleInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
    console.log(login);
  };
  const handleLogin = e => {
    e.preventDefault();
    axios
      .post("https://fierce-crag-88546.herokuapp.com/accounts/login", login)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/dashboard");
      })
      .catch(err => console.log(err.message));
  };
  return (
    <form onSubmit={handleLogin}>
      <div classname="nameContainer">
      <input
        type="text"
        name="username"
        placeholder="username"
        value={login.username}
        onChange={handleInput}
      />
      </div>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={login.password}
        onChange={handleInput}
      />
      <button type="submit">Log in</button>
      <button>Logout</button>
    </form>
  );
};
export default Login;
