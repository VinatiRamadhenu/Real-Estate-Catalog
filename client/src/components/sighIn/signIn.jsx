import React from "react";
import { Link } from "react-router-dom";
import "./signIn.css";
function SignIn() {
  return (
    <div className="mainContainer">
      <div className="mainDiv">
        <h1>Logo</h1>
        <h2>Enter your credentials to access your account</h2>
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

          <button id="signInButton" type="submit">
            Sign In
          </button>
        </form>

        <Link to="signup">
          <h3>Sign Up</h3>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
