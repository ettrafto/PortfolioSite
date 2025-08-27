// NavBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NavBar.css';
import Modal from './util/Modal';
import NavIcons from './NavIcons';

function useIsMobile(max = 999) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= max);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${max}px)`);
    const onChange = e => setIsMobile(e.matches);
    mq.addEventListener?.('change', onChange);
    mq.addListener?.(onChange);
    return () => {
      mq.removeEventListener?.('change', onChange);
      mq.removeListener?.(onChange);
    };
  }, [max]);
  return isMobile;
}

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile(999);

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  // Lock scroll ONLY on mobile when menu is open
  useEffect(() => {
    if (isMobile && menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobile, menuOpen]);

  // Close when clicking/tapping outside OR pressing Escape
  useEffect(() => {
    if (!isMobile || !menuOpen) return;

    const handlePointerDown = (e) => {
      const btn = buttonRef.current;
      const menu = menuRef.current;
      const target = e.target;

      // If click is inside the dropdown or the hamburger, ignore
      if (menu?.contains(target) || btn?.contains(target)) return;

      setMenuOpen(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown, { capture: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, { capture: true });
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile, menuOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav className="navbar">
        <button
          ref={buttonRef}
          className="hamburger"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          ☰
        </button>

        <div className="nav-name-container">
          <div className="nav-name">EVAN TRAFTON</div>
        </div>

        {/* Desktop links unchanged */}
        <ul className="nav-links">
          <li><span><Link to="/">HOME</Link></span></li>
          <li><span><Link to="/work">WORK</Link></span></li>
          <li><span><Link to="/about">ABOUT</Link></span></li>
          <li><span><Link to="/consulting">CONSULTING</Link></span></li>
          <li><span><Link to="/contact">CONTACT</Link></span></li>
        </ul>
        <NavIcons/>
      </nav>

      {/* Backdrop still closes on click */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            className="nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.ul
            ref={menuRef}
            id="mobile-menu"
            className="nav-dropdown"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/work" onClick={() => setMenuOpen(false)}>Work</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/consulting" onClick={() => setMenuOpen(false)}>Consulting</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li className="external-links">
              <a href="https://github.com/ettrafto"><img src="/icons/inverseGithub.webp" alt="GitHub" /></a>
              <a href="https://www.linkedin.com/in/evan-trafton"><img src="/icons/inverseLinkedIn.webp" alt="LinkedIn" /></a>
              <a onClick={openModal}><img src="/icons/inverseResume.webp" alt="Resume" /></a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>

      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default NavBar;
