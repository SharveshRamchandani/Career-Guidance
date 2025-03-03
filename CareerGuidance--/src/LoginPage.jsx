import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import loginLogo from "./images/login_logo.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.open("http://localhost:3000/auth/google", "_self");
  };

  return (
    <div className="career-portal-container">
      <div className="image-container">
        <img src={loginLogo} alt="Career Portal" />
      </div>
      <div className="login-form-container">
        <h1 style={{ color: "#004F9E", fontFamily: "Poppins", fontWeight: "700" }}>
          Career Portal
        </h1>
        <div className="login-form">
          <h2 style={{ color: "#004F9E", fontFamily: "Poppins", fontWeight: "700" }}>
            Login
            <div style={{ backgroundColor: "#004F9E", height: "2px", width: "100%" }}></div>
          </h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
            <button type="submit" className="login-button">Login</button>
          </form>
          <div className="social-login">
            <button onClick={handleGoogleLogin} className="google-login-button">
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
