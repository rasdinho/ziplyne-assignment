// import React, { Component } from 'react';

// class ProductSection extends Component {
//     render() {
//         return (
//             <div>
//                 <section id="secondpage">
//                     <div className="second-title">
//                         <h1 id="firstpage-titile">Lorem Ipsum Dolor Lorem Ipsum Dolor Amet.</h1>
//                     </div>
//                     <div id="secondpage-details">
//                         <div id="product-img">
//                             <img src={require('../images/Untitled design (15).png')} alt="product"/>
//                         </div>
//                         <div id="about-product">
//                             <div id="diamond">
//                                 <img src={require("../images/Diamond.png")} alt="."/>
                                
//                                 <p> <em id='ziplyne-word'>  <span id="ziplyne-span">Z</span>
//                                                             <span id="ziplyne-span">i</span>
//                                                             <span id="ziplyne-span">p</span>
//                                                             <span id="ziplyne-span">l</span>
//                                                             <span id="ziplyne-span">y</span>
//                                                             <span id="ziplyne-span">n</span>
//                                                             <span id="ziplyne-span">e</span></em> <br/>enables you, your customers and employees to navigate the hills and valleys of The SaaS Terrain. ... Ziplyne is an Enterprise SaaS technology Company Focused On Simplifying User Experiences For All Web Appplications And Websites.</p>
//                             </div>
                            
//                         </div>
//                     </div>
//                     <div className="lastpart">

//                     </div>
//                 </section>
                
//             </div>
//         );
//     }
// }

// export default ProductSection;


import React, { Component } from 'react';

class ProductSection extends Component {
    render() {
        return (
            <div>
                <section id="product">
                    <div data-aos="fade-up" className="section-title">
                        <h1>Lorem Ipsum Dolor Lorem Ipsum Dolor Amet.</h1>
                    </div>
                    <div id="product-details">
                        <div id="product-img" data-aos="flip-left">
                            <img src={require("../images/Untitled design (15).png")} alt="ziplyne-product"/>
                        </div>
                        <div id="about-product">
                            <div id="diamond" data-aos="zoom-in">
                                <img src={require("../images/Diamond.png")} alt=""/>
                                <p data-aos="fade-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="banner">

                    </div>
                </section>
                
            </div>
        );
    }
}

export default ProductSection;