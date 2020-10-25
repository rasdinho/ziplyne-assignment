import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer'



function App() {
  return (
    <div className="app">
      
      <HomePage />
      <ProductSection />
      <Footer />

    </div>
  );
}

export default App;
