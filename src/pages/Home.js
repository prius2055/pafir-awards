import React from 'react';
import Header from '../components/Header';
import Category from '../components/Category';
import Process from '../components/Process';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Process />
    </>
  );
};

export default Home;
