import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useSelector } from 'react-redux';

function App() {
  const isMenuOpen = useSelector((store) => store.isMenuOpen);

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

