import React from 'react';
// import ReactDOM from 'react'

// class Footer extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>should work now </h1>
//             </div>
//         );
//     }
// }

// export default Footer;

const img1 = "https://s3.eu-central-1.amazonaws.com/test.18feb.web.v2/18feb_v2_pic1.jpg";


class Footer extends React.Component {
  render() {
    return(
      <div className="MainPage">
        <div className="Header">
          <div className="left-container">18feb</div>
          <div className="right-container">
            <span>New Collection</span>
            <span>Women</span>
            <span>Men</span>
            <span>Kids</span>
          </div>
        </div>
        <img src={img1} alt="testpic" />
      </div>
    );
  }
}
 export default Footer;



