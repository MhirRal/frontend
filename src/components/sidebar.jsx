import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/Admin');
  const isAdminMLPath = location.pathname.startsWith('/admin_ml');
  const isAdminValPath = location.pathname.startsWith('/admin_val');
  const shouldDisplayChannels = isAdminPath || isAdminMLPath || isAdminValPath;

  const [showChannels, setShowChannels] = useState(false);

  const toggleChannels = () => {
    setShowChannels(prevState => !prevState);
  };

  return (
    <div className="sidebar">
      {shouldDisplayChannels && (
        <button className="sidebar-btn btn btn-primary" onClick={toggleChannels}>
          Channels
        </button>
      )}
      {shouldDisplayChannels && showChannels && (
        <div className="sidebar-channel-list channel-list">
          {isAdminPath && (
            <>
              <Link to="/admin_ml" className="link-style">
                <p>Mobile Legends</p>
              </Link>
              <Link to="/admin_val" className="link-style">
                <p>Valorant</p>
              </Link>
            </>
          )}
          {isAdminMLPath && (
             <>
             <Link to="/admin_ml" className="link-style">
               <p>Mobile Legends</p>
             </Link>
             <Link to="/admin_val" className="link-style">
               <p>Valorant</p>
             </Link>
           </>
          )}
          {isAdminValPath && (
             <>
             <Link to="/admin_ml" className="link-style">
               <p>Mobile Legends</p>
             </Link>
             <Link to="/admin_val" className="link-style">
               <p>Valorant</p>
             </Link>
           </>
          )}
        </div>
      )}
      <div className="sidebar-footer">
        <button className="sidebar-btn btn btn-third logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
