import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light fixed-bottom bottom-nav">
        <div className="container justify-content-around">
          <NavLink to='/home' className="btn btn-link">
          <div className="tab-item-icon home-fill"></div>
            Home
          </NavLink>
          <NavLink to='/task' className="btn btn-link text-center">
          <div className="tab-item-icon task-fill"></div>
            Task
          </NavLink>
          <NavLink to='/team' className="btn btn-link">
          <div className="tab-item-icon team-fill"></div>
            Team
          </NavLink>
          <NavLink to='/vip' className="btn btn-link">
          <div className="tab-item-icon vip-fill"></div>
            Vip
          </NavLink>
          <NavLink to='/me' className="btn btn-link">
          <div className="tab-item-icon me-fill"></div>
            Me
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;