import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

function UserML() {

 return (
    <div className="admin-container">
      <div className="sidebar-wrapper">
        <Sidebar />
      </div>
      <div className="content-wrapper">
      <Navbar game="ml" />
      </div>
    </div>
 );
}

export default UserML;