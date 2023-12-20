import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const history = useNavigate();

  const [loginData, setLoginData] = useState({
    username: '',
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

  const handleSignIn = (e) => {
    e.preventDefault();
    // Here you can implement your login logic,
    // such as sending the data to the server for authentication
    console.log('Login Data:', loginData);

    // For now, let's simulate a successful login by navigating to the welcome page
    history('/welcome'); // Replace '/welcome' with your welcome page route
  };

  return (
    <div className="formed-wrapper">
      <form onSubmit={handleSignIn}>
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={loginData.username}
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
