import React from 'react';
import logo from '../../logo.svg';
import './navbar.scss'

function Navbar(props) {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours company" />
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="/">home</a>
        </li>
        <li>
          <a className="nav-link" href="/">about</a>
        </li>
        <li>
          <a className="nav-link" href="/">tours</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
