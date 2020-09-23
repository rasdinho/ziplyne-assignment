import React, { Component } from 'react';
import NavBar from './NavBar';
import Logo from '../images/WithDropShadow.png';
import '../css/header.css';

class Header extends Component {
    render() {
        return (
            <header className="container-he">
                <div id="zip-logo">
                    <img className="logo" src={Logo} alt='logo'/>
                </div>

                <NavBar />
            </header>
        );
    }
}

export default Header;