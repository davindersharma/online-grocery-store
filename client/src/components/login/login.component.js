import React, { useEffect, useState } from "react";
import "./login.css";
import fb from "./fb.png";
import gp from "./gp.png";
import tw from "./tw.png";
import axios from "axios";

const LoginPage = () => {
  const [register, setRegister] = useState({
    userId: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const OnChangeUserId = (e) => {
    setRegister({ ...register, userId: e.target.value });
  };
  const OnChangeEmail = (e) => {
    setRegister({ ...register, email: e.target.value });
    setLogin({ ...login, email: e.target.value });
  };
  const OnChangePassword = (e) => {
    setRegister({ ...register, password: e.target.value });
    setLogin({ ...login, password: e.target.value });
  };

  const registerMove = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  };
  const loginMove = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
  };

  const Login = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/user/login", {
      email: login.email,
      password: login.password,
    });
    if (res.data) {
      localStorage.removeItem("loggedIn");
      alert("Welcome");
      localStorage.setItem("loggedIn", true);
    }
    window.location = "/";
  };

  const Register = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/user/register", {
      userId: register.userId,
      email: register.email,
      password: register.password,
    });
    console.log(res.data);
  };

  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div id="btn"></div>
          <button type="button" className="toggle-btn" onClick={loginMove}>
            Log In
          </button>
          <button type="button" className="toggle-btn" onClick={registerMove}>
            Register
          </button>
        </div>
        <div className="social-icons">
          <img src={fb} alt="" />
          <img src={gp} alt="" />
          <img src={tw} alt="" />
        </div>
        <form id="login" onSubmit={Login} className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="User ID"
            onChange={OnChangeEmail}
            required
          />
          <input
            type="text"
            className="input-field"
            placeholder="Enter Password"
            onChange={OnChangePassword}
            required
          />
          <input type="checkbox" className="check-box" />
          <span>Remember Password</span>
          <button type="submit" className="submit-btn">
            Log in
          </button>
        </form>
        <form id="register" onSubmit={Register} className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="User ID"
            onChange={OnChangeUserId}
            required
          />
          <input
            type="Email"
            className="input-field"
            onChange={OnChangeEmail}
            placeholder="Email id"
            required
          />
          <input
            type="text"
            className="input-field"
            onChange={OnChangePassword}
            placeholder="Enter Password"
            required
          />
          <input type="checkbox" className="check-box" />
          <span>I agree to the terms and conditions</span>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
