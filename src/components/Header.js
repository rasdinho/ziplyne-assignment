import React from 'react';
import NavBar from './NavBar';
import '../css/header.css';

const Header = ({clickToggleButton, controleToggleBtn}) => { //for when a user is trying to use a toggle btn
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
                    
                    {clickToggleButton? //if this user click the toggle btn it will display the side menu
                    <NavBar />
                    : null    
                    }                    
                </div>
        </header>
        );
}

export default Header;