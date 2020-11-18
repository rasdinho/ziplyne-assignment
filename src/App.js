import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ProductSection from './components/ProductSection';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import FifthPage from './components/FifthPage';



function App() {
  return (
    <div className="app">
      
      <HomePage />
      <ProductSection />
      <ThirdPage />
      <FourthPage />
      <FifthPage />

    </div>
  );
}

export default App;
