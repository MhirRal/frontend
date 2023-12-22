import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const history = useNavigate();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Successful login
        // Get the user's channel from the API or localStorage
        const userChannel = 'Mobile Legends'; // Example channel received from the server

        if (userChannel === 'Mobile Legends') {
          history('/user_ml');
        } else if (userChannel === 'Valorant') {
          history('/user_val');
        } else {
          // Redirect to admin if not a user
          history('/admin');
        }
      } else {
        // Handle failed login (e.g., display an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="formed-wrapper">
      <form onSubmit={handleSignIn}>
        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleInputChange}
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            className="show-hide-button"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit" className="btn-btns-secondary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
