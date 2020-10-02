import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../ContextAPI/StateProvider";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          className="login__logo"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={handleSignIn} className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Condition of Use & Sale. Please
          see our Privacy Notice, our Cookie Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={handleRegister} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
