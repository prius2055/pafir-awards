import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../img/pafir-logo.png';
import { AiOutlineClose } from 'react-icons/ai';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
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
                  <li className="nav-list" onClick={toggleMenu}>
                    Home
                  </li>
                </a>

                <a href="#about">
                  <li className="nav-list" onClick={toggleMenu}>
                    Finance
                  </li>
                </a>

                <a href="#category">
                  <li className="nav-list" onClick={toggleMenu}>
                    ICT
                  </li>
                </a>

                <a href="#contact">
                  <li className="nav-list" onClick={toggleMenu}>
                    Real estate
                  </li>
                </a>
              </ul>
            )}

            <ul className="desktop-nav">
              <li className="nav-list">About</li>
              <li class="nav-list">Categories</li>
              <li class="nav-list">Sponsorship</li>

              <li className="nav-list">Contact</li>
            </ul>
          </nav>

          {!isMenuOpen && <img src={Logo} alt="Pafir logo" className="logo" />}
        </header>
      </div>
      <div>
        <h2>Nomination results</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Finance</th>
              </tr>
              <tr>
                <th>Sn</th>
                <th>Name of Nominee</th>
                <th>Category</th>
                <th>user email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr Stanley</td>
                <td>Bank bank of the year</td>
                <td>prius@mail.com</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>ICT</th>
              </tr>
              <tr>
                <th>Sn</th>
                <th>Name of Nominee</th>
                <th>Category</th>
                <th>user email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr Stanley</td>
                <td>Bank bank of the year</td>
                <td>prius@mail.com</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>Real estate</th>
              </tr>
              <tr>
                <th>Sn</th>
                <th>Name of Nominee</th>
                <th>Category</th>
                <th>user email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr Stanley</td>
                <td>Bank bank of the year</td>
                <td>prius@mail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
