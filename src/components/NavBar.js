// import React from 'react';
// import { BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom';
// import Home from './Home'

// class NavBar extends React.Component{

//     render(){
//         return(
// <Router>


// <nav>
//                 <div className="container-fluid">
            
//                 </div>
               
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-sm-3">
//                     <a href="/home"><img src={require("./images/WithDropShadow.png")} className="logo" alt="."/></a>
//                         </div>
//                         <div className="col-sm">
//                             <Link to='/product'>Product</Link>
//                         </div>
//                         <div className="col-sm">
//                             <Link to='/solution'>Solution</Link>
//                         </div>
//                         <div className="col-sm">
//                             <Link to='/pricing'>Pricing</Link>
//                         </div>
//                         <div className="col-sm">
//                             <Link to='/customer stories'>Customer Stories</Link>
//                         </div>
//                         <div className="col-sm">
//                             <Link to='/resources'>Resources</Link>
//                         </div>
//                         <div className="col-md-2">
//                             <button>Request Demo</button>
//                         </div>
//                         <div>
//                             <i className="fas fa-sign-out-alt"></i>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//     <Switch>
//         <Route exact path="/home" render={() => <Home />} />
    


//     </Switch>

// </Router>
//         )
//     }
// }


// export default NavBar;

// import React from 'react';
// import MobileNav from '../components/MobileNav'
// const Header = ({isMenuClicked, handleMenuClick}) => {
//     return (
//         <header>
//                 <div id="logo">
//                     <img src={require("../images/logo.png")} alt=""/>
//                 </div>
//                 <nav data-aos="fade-down">
//                     <a href="/product">Product</a>
//                     <a href="/solution">Solution</a>
//                     <a href='/pricing'>Pricing</a>
//                     <a href="/stories">Customer Stories</a>
//                     <a href="/resources">Resources</a>
//                 </nav>
//                 <div className="call-to-action">
//                     <button className="purple">Request A Demo</button>
//                     <div className="join-icon">
//                         <i className="fas fa-sign-in-alt"></i>
//                     </div>
//                 </div>
//                 <div id="mobile-nav" data-aos="fade-in">
//                     <div id="menu-icon" onClick={handleMenuClick}>
//                         <div className="icon-line"></div>
//                         <div className="icon-line"></div>
//                         <div className="icon-line"></div>
//                     </div>
//                     {isMenuClicked? 
//                     <MobileNav/>
//                     : null    
//                     }
//                 </div>
//         </header>
//     );
// };

// export default Header;


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