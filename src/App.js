import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ProductSection from './components/ProductSection';
import ThirdPage from './components/ThirdPage'



function App() {
  return (
    <div className="app">
      
      <HomePage />
      <ProductSection />
      <ThirdPage />

    </div>
  );
}

export default App;
