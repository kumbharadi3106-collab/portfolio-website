import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          Aditya Kumbhar
        </NavLink>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((page) => (
            <li key={page}>
              <NavLink
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
