import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NavIcons from './NavIcons';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className='nav-name-container'>
        <div className='nav-name'>EVAN TRAFTON</div>
      </div>
      <ul className='nav-links'>
        <li><span><Link to="/">HOME</Link></span></li>
        <li><span><Link to="/work">WORK</Link></span></li>
        <li><span><Link to="/about">ABOUT</Link></span></li>
        <li><span><Link to="/contact">CONTACT</Link></span></li>
      </ul>
      <NavIcons />
    </nav>
  );
};

export default NavBar;
