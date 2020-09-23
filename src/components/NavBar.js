
import React, { Component } from 'react';



class NavBar extends Component {
    render() {
        return (
            <nav id="navbar">
                <a href="/product">Product</a>
                <a href="/solution">Solution</a>
                <a href="/pricing">Pricing</a>
                <a href="/customer-stories">Customer Stories</a>
                <a href="/resources">Resources</a>
                <button>Request A Demo</button>
                <div id="signout-icon">
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </nav>
        
        );
    }
}

export default NavBar;