import React, { useState, useEffect } from "react";
import "./signUp.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../realEstateLogo.png";
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
        <img
          style={{
            width: "20%",

            marginLeft: "40%",
            marginRight: "40%",
          }}
          src={logo}
          alt="Logo"
        />
        <h2 className="action_text">Create New Account</h2>
        <form>
          <div>
            <input
              className="Input_box"
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
              className="Input_box"
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
              className="Input_box"
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
