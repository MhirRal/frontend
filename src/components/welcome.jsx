import React from 'react';
import info from '../image/info.png';

function welcome() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 text-center">
          <div>
            <img src={info} alt="" style={{ width: '200px', marginBottom: '20px' }} />
            <p>New Member?</p>
            <button className="btn btn-primary mr-3">Sign Up</button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <p>Already a Member?</p>
            <button className="btn btn-secondary">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default welcome;
