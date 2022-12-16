import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebaseApp";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    //Login login
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        //Signed In, redirect to home page
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="on"
            required
          />
          <button type="submit" onClick={login} className="login__signInBtn">
            Sign in
          </button>
        </form>
        <p>
          By signing-in your are agreed to Amazon's Conditions of use & Sale.
          Please see our privacy Notice, our Cookies Notice and our
          Interest-Based Adz Notice.
        </p>
        <Link to="/register">
          <button className="login__registerBtn">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
