import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
// import FirstImg from './images/ZLSampleDesk.png';
// import SecondImg from './images/Untitled design (15).png';
// import ThirdImg from './images/Diamond.png';
import ProductSection from './components/ProductSection';




function App() {
  return (
    <div className="app">
      
      <HomePage />
      <ProductSection />
      
      <div id="firstHalf">
          {/* <img src={FirstImg} alt='firstimg'/> */}
      </div>
      
      <div>
          <div>
            {/* <h1>this is to try is out <br /> the second line</h1> */}
              {/* <img src={SecondImg} alt='firstimg'/> */}
          </div>

          <div>
              {/* <img src={SecondImg} alt='SecondImg'/> */}
          </div>

          <div>
              {/* <img src={ThirdImg} alt='ThirdImg'/> */}
          </div>

          <div>
              {/* <img src={FirstImg} alt='firstimg'/> */}
          </div>


      </div>

    </div>
  );
}

export default App;
