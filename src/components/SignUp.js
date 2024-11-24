import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';  // Adjust the import path
import './Signup.css'; // Ensure you have appropriate styles in this CSS file

function Signup() {
  const [username, setUsername] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call signup function from AuthContext
    signup();
    // Navigate to appointments after successful signup
    navigate('/profile');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <i className="fas fa-user icon"></i>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <i className="fas fa-envelope icon"></i>
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
          <button type="submit" className="signup-btn">Signup</button>
        </form>
        <p className="login-text">
          Already a member? <Link to="/login">Login now</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
