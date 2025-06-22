import React, { useEffect } from 'react';
import '../assets/css/UserDropdown.scss';
import Avatar from '../assets/images/avatar.jpg'; // Adjust the path

const UserDropdown = () => {
  // Bootstrap dropdown toggle setup
  useEffect(() => {
    import('bootstrap/js/dist/dropdown');
  }, []);

  return (
    <div className="dropdown user-dropdown">
      <button
        className="btn user-button dropdown-toggle"
        type="button"
        id="userDropdownMenu"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="avatar-wrapper">
          <img src={Avatar} alt="User" className="avatar" />
        </div>
        <span className="username">John123</span>
      </button>

      <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="userDropdownMenu">
        <li><a className="dropdown-item" href="#/profile">Profile</a></li>
        <li><a className="dropdown-item" href="#/settings">Settings</a></li>
        <li><a className="dropdown-item" href="#/logout">Logout</a></li>
      </ul>
    </div>
  );
};

export default UserDropdown;
