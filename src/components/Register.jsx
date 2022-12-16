import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebaseApp";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();
    //Register Code
    createUserWithEmailAndPassword(auth, email, password)
      .then((_) => {
        // Adding Name and phone of user
        const user = auth.currentUser;
        user.displayName = name;
        user.email = email;
        console.log(user);
        //create user and return to home page
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon Logo"
        />
      </Link>
      <div className="register__container">
        <h1>Create an Account</h1>
        <form>
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <h5>Phone No.</h5>
          <input
            type="number"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
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
            required
            autoComplete="on"
          />
          <button
            type="submit"
            onClick={register}
            className="register__signInBtn"
          >
            Register
          </button>
        </form>
        <p>
          By signing-up your are agreed to Amazon's Conditions of use & Sale.
          Please see our privacy Notice, our Cookies Notice and our
          Interest-Based Adz Notice.
        </p>
        <Link to="/login">
          <button className="register__haveAccountrBtn">
            Already Have an Account?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
