import React from "react";
import "../components/signup/signUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="mainContainer">
      <div className="mainDiv">
        <h1>Logo</h1>
        <h2>Create New Account</h2>
        <form>
          <div>
            <input name="email" type="email" required placeholder="Mail ID" />
          </div>
          <div>
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div>
            <input
              name="confirmPassword"
              type="text"
              required
              placeholder="Confirm Password "
            />
          </div>
          <button id="signUpButton" type="submit">
            Sign up
          </button>
        </form>

        <Link to="/">
          <h3>Sign In</h3>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
