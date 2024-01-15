import React from 'react';
import { Link } from 'react-scroll';

function MobileMenu({ isVisible, closeMenu }) {
  const menuClass = isVisible ? 'mobile-menu mobile-menu-visible' : 'mobile-menu';

  return (
    <div className={menuClass}>
      <ul className="mobile-menu-links">
        <li>
          <Link onClick={closeMenu} to="weight-room" smooth={true} duration={500}>
            Weight Room
          </Link>
        </li>
        <li>
          <Link onClick={closeMenu} to="rb-highlights" smooth={true} duration={500}>
            RB Highlights
          </Link>
        </li>
        <li>
          <a href="https://twitter.com/KendalHammond33" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kendal_hammond23/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.hudl.com/profile/14860462/Kendal-Hammond" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            HUDL
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
