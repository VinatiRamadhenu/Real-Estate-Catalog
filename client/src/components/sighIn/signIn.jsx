import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import "./signIn.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../realEstateLogo.png";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const payload = { email: email, password: password };
    try {
      const response = await axios.post(
        "https://therealstatebackend.onrender.com/signin",
        payload
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid credentials");
      } else {
        console.error("Error:", error);
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
        <h2 className="action_text">
          Enter your credentials to access your account
        </h2>
        <form onSubmit={submitHandler}>
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
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              placeholder="Password"
            />
          </div>

          <button id="signInButton" type="submit">
            Sign In
          </button>
        </form>
        <ToastContainer />

        <Link to="signup">
          <h3>Sign Up</h3>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
