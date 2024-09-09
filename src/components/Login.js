import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';  // Adjust the import path
import './Login.css'; // Ensure you have appropriate styles in this CSS file

function Login() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email/Phone:", emailOrPhone, "Password:", password);
    login();
    navigate('/appointments');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fas fa-user icon"></i> {/* Ensure font-awesome is included in your project */}
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-text">
          Not a member? <Link to="/signup">Signup now</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

