import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isAdminComponent = location.pathname.includes('/admin'); // Check if it's an admin component

  const [showChannels, setShowChannels] = useState(false);

  const toggleChannels = () => {
    setShowChannels(!showChannels);
  };

  if (isAdminComponent) {
    return (
      <div className="sidebar">
        <button className="sidebar-btn btn btn-primary" onClick={toggleChannels}>
          Channels
        </button>
        {showChannels && (
          <div className="sidebar-channel-list channel-list">
            <Link to="/admin_ml" className="link-style">
              <p>Mobile Legends</p>
            </Link>
            <Link to="/admin_val" className="link-style">
              <p>Valorant</p>
            </Link>
          </div>
        )}
        <div className="sidebar-footer">
          <button className="sidebar-btn btn btn-danger logout-btn">Logout</button>
        </div>
      </div>
    );
  } else {
    // For user components (user_ml and user_val)
    return (
      <div className="sidebar">
        <div className="sidebar-footer">
          <button className="sidebar-btn btn btn-danger logout-btn">Logout</button>
        </div>
      </div>
    );
  }
};

export default Sidebar;
