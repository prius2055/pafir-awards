import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero">
        <h2>Welcome to</h2>
        <h1>
          PAFIR AWARDS <br />
          2024
        </h1>
        <p className="hero-paragraph">
          Pinnacle Awards for Finance, ICT, and Real estate (PAFIR)
        </p>
        <div className="hero-date-venue">
          <p>22nd November, 2024</p>
          <p>
            @ Oriental Hotel, 3 Lekki-Epe Expressway, Victoria Island, Lagos
          </p>
        </div>
      </div>
      <Link to="/nominate" className="hero-btn">
        Click here to nominate
      </Link>
      <div id="about">
        <p>
          The Pinnacle Awards for Finance, ICT, and Real Estate (PAFIR Awards)
          is an esteemed annual event that celebrates excellence, innovation,
          and leadership in three pivotal sectors: Finance, Information and
          Communication Technology (ICT), and Real Estate. Our mission is to
          recognize and honour the outstanding achievements of organizations and
          individuals who have made significant contributions to their
          respective fields, driving growth, development, and transformation.
        </p>
      </div>
    </div>
  );
};

export default Hero;
