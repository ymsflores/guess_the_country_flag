import React, { useState } from 'react';
import './App.css'; 

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    // Handle the sign-up logic here
    console.log('User Signed Up:', formData);
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign up to start playing</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
            <label htmlFor="username">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
            <label htmlFor="username">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="sign-in-button">Sign up</button>
        <p className="signup-text">
          Already have an account?&nbsp;
          <a href="/login" className="signup-link">
            <strong>Sign in</strong>
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
