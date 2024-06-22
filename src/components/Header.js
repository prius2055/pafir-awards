import React, { useState } from 'react';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../img/pafir-logo.png';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log(isMenuOpen);

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
              <li className="nav-list">
                <a href="#home" class="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-list">
                <a href="#about" class="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-list">
                <a href="#categories" class="nav-link">
                  Categories
                </a>
              </li>
              <li className="nav-list">
                <a href="#sponsorship" class="nav-link">
                  Sponsorship
                </a>
              </li>
              <li className="nav-list">
                <a href="#contact" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          )}

          <ul className="desktop-nav">
            <li className="nav-list">
              <a href="about.html" class="nav-link current">
                About
              </a>
            </li>
            <li class="nav-list">
              <a href="#courses" class="nav-link">
                Categories
              </a>
            </li>
            <li class="nav-list">
              <a href="#" class="nav-link">
                Sponsorship
              </a>
            </li>

            <li className="nav-list">
              <a href="#" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {!isMenuOpen && (
          <a href="index.html">
            <img src={Logo} alt="Pafir logo" class="logo" />
          </a>
        )}
      </header>
    </div>
  );
};

export default Header;
