import React from 'react';
import info from '../image/info.png';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const history = useNavigate();

  const handleSignUp = () => {
    history('/signup');
  }

  const handleSignIn = () => {
    history('/signin');
  }
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 text-center">
          <div>
            <img src={info} alt="" style={{ width: '250px', marginBottom: '20px' }} />
            <p>New Member?</p>
            <button className="btn-btn-primary mr-3" onClick={handleSignUp}>Sign Up</button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <p>Already a Member?</p>
            <button className="btn-btn-secondary" onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
