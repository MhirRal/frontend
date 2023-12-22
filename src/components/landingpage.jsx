// LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import info from '../image/info.png';

function LandingPage() {
  const history = useNavigate();

  const handleGetStarted = () => {
    // Redirect to the login page (or the route you've set up for your Login component)
    history('/welcome'); // Assuming '/welcome' is the route for the Login component
  };

  return (
    <div className="container landing-page">
      <div className="row">
        <div className="col-md-6 mt-5 px-5 d-flex flex-column align-items-center logo">
          <img src={info} width={450} alt="Logo" />
          <button className="btn-get-started" onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="col-md-6 mt-5 pt-5 content">
          <p className='first'>InfoGuild is an announcement system designed exclusively for CSU-Gaming and Multiplayer Esports Enthusiasts members. Its primary objective is to streamline communication by facilitating the seamless delivery of announcements to members through their respective channels. Our platform aims to enhance the overall experience for our community, providing a centralized hub for important updates and information tailored to the specific interests and channels of our diverse member base. Join us in this simplified platform that keeps everyone in the loop, making sure you get the news that matters to you!</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
