import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>This website was created in collaboration of Kendal Hammond and Jake Hammond.</p>
          <p>Athlete Inquiries: kendalham@gmail.com</p>
          <p>Want a page like this? Contact: jake23012@gmail.com</p>

        </div>
        <div className="social-links">
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
      </div>
    </footer>
  );
};

export default Footer;

