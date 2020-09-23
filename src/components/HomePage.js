import React, { Component } from 'react';
import Header from './Header';
import Main from './Main'

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default HomePage;
