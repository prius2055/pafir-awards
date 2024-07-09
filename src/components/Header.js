import React, { useState } from 'react';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../img/pafir-logo.png';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="desktop-header">
        <p>
          <em>Celebrating excellence, honouring greatness</em>
        </p>
        <div className="desktop-header-link">
          <a href="https://web.facebook.com/profile.php?id=61561559525104">
            <FaFacebook className="icon" />
          </a>

          <a href="https://x.com/pafirawards">
            <FaTwitter className="icon" />
          </a>
          <a href="https://wa.me/2348028097752">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>

      <header>
        {!isMenuOpen && (
          <a href="#hero">
            <img src={Logo} alt="Pafir logo" className="logo" />
          </a>
        )}
        <nav>
          {!isMenuOpen && (
            <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
          )}

          {isMenuOpen && (
            <ul className="mobile-nav">
              <AiOutlineClose className="btn-close" onClick={toggleMenu} />

              <a href="#hero">
                <li className="nav-list" onClick={toggleMenu}>
                  Home
                </li>
              </a>

              <a href="#about">
                <li className="nav-list" onClick={toggleMenu}>
                  About Us
                </li>
              </a>

              <a href="#category">
                <li className="nav-list" onClick={toggleMenu}>
                  Categories
                </li>
              </a>

              <a href="#contact">
                <li className="nav-list" onClick={toggleMenu}>
                  Sponsorship
                </li>
              </a>

              <a href="#contact">
                <li className="nav-list" onClick={toggleMenu}>
                  Contact
                </li>
              </a>
            </ul>
          )}

          <ul className="desktop-nav">
            <a href="#hero">
              <li className="nav-list">About</li>
            </a>
            <a href="#category">
              <li className="nav-list">Categories</li>
            </a>
            <a href="#sponsorship">
              <li className="nav-list">Sponsorship</li>
            </a>
            <a href="#contact">
              <li className="nav-list">Contact</li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
