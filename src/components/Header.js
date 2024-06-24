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
              <li className="nav-list">Home</li>
              <li className="nav-list">About Us</li>
              <li className="nav-list">Categories</li>
              <li className="nav-list">Sponsorship</li>
              <li className="nav-list">Contact</li>
            </ul>
          )}

          <ul className="desktop-nav">
            <li className="nav-list">About</li>
            <li class="nav-list">Categories</li>
            <li class="nav-list">Sponsorship</li>

            <li className="nav-list">Contact</li>
          </ul>
        </nav>

        {!isMenuOpen && <img src={Logo} alt="Pafir logo" class="logo" />}
      </header>
    </div>
  );
};

export default Header;
