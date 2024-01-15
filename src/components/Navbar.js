import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import MobileMenu from './MobileMenu';
import './MobileMenu.css';

function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = scrollY > 50 ? 'navbar navbar-scroll' : 'navbar';

  return (
    <nav className={navbarClass}>
      <Link to='home' smooth={true} duration={500} className="navbar-logo" data-hover="Kendal Hammond">Kendal Hammond <span className='class-of'>RB/LB - Class of '24</span></Link>
      <ul className="navbar-links">
        <li><Link to="weight-room" smooth={true} duration={500} data-hover="Weight Room">Weight Room</Link></li>
        <li><Link to="rb-highlights" smooth={true} duration={500} data-hover="RB Highlights">RB Highlights</Link></li>
        <li className="dropdown">
          <a href="#socials" className="dropbtn" data-hover="Socials">Socials</a>
          <div className="dropdown-content">
            <a href="https://www.instagram.com/kendal_hammond23/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href="https://twitter.com/KendalHammond33" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <a href="https://www.hudl.com/profile/14860462/Kendal-Hammond" target="_blank" rel="noopener noreferrer">
              HUDL
            </a>
          </div>
        </li>
      </ul>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuVisible ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      <MobileMenu isVisible={isMobileMenuVisible} closeMenu={toggleMobileMenu} />
    </nav>
  );
}

export default Navbar;



//      <div className="navbar-logo">Kendal Hammond <span className='class-of'><span className='red'>R</span><span className='blue'>B</span> - Class of '<span className='red'>2</span><span className='blue'>4</span></span></div>