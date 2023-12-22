import React from 'react';

const Navbar = ({ game }) => {
  const handleClick = () => {
    alert('Button clicked');
  };

  return (
    <div className="navbar-right">
      <h1 className="navbar-title">{game === 'ml' ? 'Mobile Legends' : 'Valorant'}</h1>
      <button className="navbar-button" onClick={handleClick}>
        Members
      </button>
    </div>
  );
};

export default Navbar;
