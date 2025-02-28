import React from "react";
import "./LoginPage.css";
import loginLogo from "./images/login_logo.png";
// Import Google OAuth provider and Google Login button
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
const LoginPage = () => {
  const handleLoginSuccess = (response) => {
    console.log("Login Success:", response);
    // Handle login success (e.g., redirect to dashboard)
  };

  const handleLoginFailure = (response) => {
    console.log("Login Failed:", response);
    // Handle login failure
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="career-portal-container">
        <div className="image-container">
          <img src={loginLogo} alt="Career Portal" />
        </div>
        <div className="login-form-container">
          <h1 style={{color: "#004F9E",fontFamily:"Poppins",fontWeight:"700"}}>Career Portal</h1>
          <div className="login-form">
            <h2 style={{color: "#004F9E", fontFamily:"Poppins",fontWeight:"700"}}>Login<div style={{backgroundColor:"#004F9E",height:"2px",width:"50px",alignItems:"center"}}></div></h2>
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
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={handleLoginFailure}
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
