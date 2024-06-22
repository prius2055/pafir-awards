import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="home">
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
    </div>
  );
};

export default Home;
