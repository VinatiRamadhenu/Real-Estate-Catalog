import React, { useState, useEffect } from "react";
import "../components/signup/signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatched, setPasswordMatched] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordMatched(false);
    } else {
      setPasswordMatched(true);
    }
  }, [confirmPassword]);
  const signUpHandler = async (e) => {
    e.preventDefault();
    if (passwordMatched) {
      try {
        const response = await axios.post("http://localhost:5001/signup", {
          email: email,
          password: password,
        });
        if (response.status === 201) {
          toast.success("Sign Up successful");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (error) {
        if (error.response && error.response.status === 500) {
          toast.error("Internal Server error");
        } else {
          console.error("Error:", error);
        }
      }
    }
  };
  return (
    <div className="mainContainer">
      <div className="mainDiv">
        <h1>Logo</h1>
        <h2>Create New Account</h2>
        <form>
          <div>
            <input
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              required
              placeholder="Mail ID"
            />
          </div>
          <div>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              type="password"
              required
              placeholder="Password"
            />
          </div>
          <div>
            <input
              value={confirmPassword}
              name="confirmPassword"
              type="text"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password "
            />
          </div>
          {!passwordMatched ? (
            <p style={{ color: "red" }}>password not matched</p>
          ) : (
            <></>
          )}
          <button id="signUpButton" type="submit" onClick={signUpHandler}>
            Sign up
          </button>
        </form>
        <ToastContainer />

        <Link to="/">
          <h3>Sign In</h3>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
