import React, { useState } from 'react';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../img/pafir-logo.png';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <ul className="desktop-header">
        <li>
          <img src="" alt="facebook logo" />
        </li>
        <li>
          <i>
            <img src="" alt="twitter logo" />
          </i>
        </li>
        <li>
          <em>Celebrating excellence, honouring greatness</em>
        </li>
      </ul>

      <header>
        <span>AWARDS 2024</span>
        <nav>
          {!isMenuOpen && (
            <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
          )}

          {isMenuOpen && (
            <ul className="mobile-nav">
              <AiOutlineClose className="btn-close" onClick={toggleMenu} />

              <a href="#home">
                {' '}
                <li className="nav-list" onClick={toggleMenu}>
                  Home{' '}
                </li>
              </a>

              <a href="#about">
                <li className="nav-list" onClick={toggleMenu}>
                  About Us
                </li>
              </a>

              <a href="#category">
                <li className="nav-list" onClick={toggleMenu}>
                  Categories{' '}
                </li>
              </a>

              <a href="#contact">
                <li className="nav-list" onClick={toggleMenu}>
                  Sponsorship{' '}
                </li>
              </a>

              <a href="#contact">
                {' '}
                <li className="nav-list" onClick={toggleMenu}>
                  Contact{' '}
                </li>
              </a>
            </ul>
          )}

          <ul className="desktop-nav">
            <li className="nav-list">About</li>
            <li className="nav-list">Categories</li>
            <li className="nav-list">Sponsorship</li>

            <li className="nav-list">Contact</li>
          </ul>
        </nav>

        {!isMenuOpen && <img src={Logo} alt="Pafir logo" className="logo" />}
      </header>
    </div>
  );
};

export default Header;
