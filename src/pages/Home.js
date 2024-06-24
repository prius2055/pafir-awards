import React from 'react';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
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
          <p>18th November, 2024</p>
          <p>@ Eko Hotels and Suites, Lagos</p>
        </div>
      </div>

      <button className="hero-btn">Click to nominate</button>

      <div className="about-paragraph">
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

export default Home;