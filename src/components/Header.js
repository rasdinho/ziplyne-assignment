import React from 'react';
import NavBar from './NavBar';
import '../css/header.css';

const Header = ({clickToggleButton, controleToggleBtn}) => {
        return (

            <header>
                <div id="ziplyne-logo">
                    <img src={require("../images/WithDropShadow.png")} alt=""/>
                </div>
                <nav data-aos="fade-down">
                    <a href="/product">Product</a>
                    <a href="/solution">Solution</a>
                    <a href='/pricing'>Pricing</a>
                    <a href="/stories">Customer Stories</a>
                    <a href="/resources">Resources</a>
                </nav>
                <div className="call-to-action">
                    <button className="purple">Request A Demo</button>
                    <div className="join-icon">
                        <i className="fas fa-sign-in-alt"></i>
                    </div>
                </div>
                <div id="mobile-nav" data-aos="fade-in">
                    <div id="menu-icon" onClick={controleToggleBtn}>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                        <div className="icon-line"></div>
                    </div>
                    
                    {clickToggleButton? 
                    <NavBar />
                    : null    
                    }                    
                </div>
        </header>
        );
    // }
}

export default Header;