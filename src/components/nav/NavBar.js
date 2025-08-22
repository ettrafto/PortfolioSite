import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NavBar.css';
import Modal from './util/Modal';
import NavIcons from './NavIcons';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
          ☰
        </div>

        <div className="nav-name-container">
          <div className="nav-name">EVAN TRAFTON</div>
        </div>

        <ul className="nav-links">
          <li><span><Link to="/">HOME</Link></span></li>
          <li><span><Link to="/work">WORK</Link></span></li>
          <li><span><Link to="/about">ABOUT</Link></span></li>
          <li><span><Link to="/consulting">CONSULTING</Link></span></li>
          <li><span><Link to="/contact">CONTACT</Link></span></li>
        </ul>
        <NavIcons/>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="nav-dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/consulting" onClick={() => setMenuOpen(false)}>Consulting</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li className="external-links">
              <a href="https://github.com/ettrafto"><img src="/icons/inverseGithub.webp" /></a>
              <a href="https://www.linkedin.com/in/evan-trafton"><img src="/icons/inverseLinkedIn.webp" /></a>
              <a onClick={openModal}><img src="/icons/inverseResume.webp" /></a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default NavBar;
