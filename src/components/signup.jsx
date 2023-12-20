import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const SignUpForm = () => {
    const history = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    selectedEvent: '', // To store the selected event
    agreePrivacyPolicy: false, // New state for the checkbox
  });

  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventChange = (e) => {
    setFormData({ ...formData, selectedEvent: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.agreePrivacyPolicy) {
      // Proceed with form submission
      console.log(formData);
      history.push('/welcome'); // Replace '/welcome' with the route to your welcome page/component
    } else {
      // Show an alert or message informing the user to agree to the privacy policy
      alert('Please agree to the privacy policy to proceed.');
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
        <div className="privacy-policy selected-text">
        <label htmlFor="agreePolicy" className="checkbox-label">
          <input
            type="checkbox"
            id="agreePolicy"
            name="agreePolicy"
            checked={formData.agreePolicy}
            onChange={handleCheckboxChange}
          />
          <span className="checkbox-custom"></span>
          <span>I agree with the privacy policy</span>
        </label>
      </div>

        <button type="submit" className="btn-btns-secondary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
