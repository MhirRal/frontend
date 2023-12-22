import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const existingUsernames = ['john_doe', 'emma_smith']; // Simulated existing usernames
const existingEmails = ['john@example.com', 'emma@example.com']; // Simulated existing emails

const SignUpForm = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    // selectedEvent: '', // To store the selected event
  });

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleEventChange = (e) => {
  //   setFormData({ ...formData, selectedEvent: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    const isUsernameTaken = existingUsernames.includes(username);
    const isEmailTaken = existingEmails.includes(email);
    const isPasswordValid = password.length >= 8;

    if (isUsernameTaken) {
      alert('Username is already taken. Please choose another.');
      return;
    }

    if (isEmailTaken) {
      alert('Email is already registered. Please use another email.');
      return;
    }

    if (!isPasswordValid) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // For demonstration purposes, simulating successful sign-up
    const isSignUpSuccessful = true; // Simulated successful sign-up

    if (isSignUpSuccessful) {
      console.log(formData);
      history('/welcome'); // Redirect to '/welcome' on successful sign-up
    } else {
      console.log('Sign-up failed!');
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={handlePasswordVisibility}
            className="show-hide-button"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={handlePasswordVisibility}
            className="show-hide-button"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        {/* 
        <div className="dropdown">
          <div className="select-text">Choose Your Event!</div>
          <select id="event" name="selectedEvent" onChange={handleEventChange}>
            <option value="" hidden>
              <span className="arrow">&#9660;</span>
            </option>
            <option value="Mobile Legends">Mobile Legends</option>
            <option value="Valorant">Valorant</option>
          </select>
        </div> 
        */}
        <button type="submit" className="btn-btns-secondary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
