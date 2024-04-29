import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const LoginForm = () => {
 const navigate = useNavigate();
 const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // add login logic
    navigate('/start');
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in to your account</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            // required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            // required
          />
        </div>
        <button type="submit" className="sign-in-button">Sign in</button>
        <p className="signup-text">
            Don't have an account?&nbsp;
            <strong><a href="/register" className="signup-link">Sign up</a></strong>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
