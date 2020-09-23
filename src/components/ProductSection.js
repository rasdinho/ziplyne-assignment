import React, { Component } from 'react';

class ProductSection extends Component {
    render() {
        return (
            <div>
                <section id="secondpage">
                    <div data-aos="fade-in" className="second-title">
                        <h1 id="firstpage-titile">Lorem Ipsum Dolor Lorem Ipsum Dolor Amet.</h1>
                    </div>
                    <div id="secondpage-details">
                        <div id="product-img" data-aos="flip-left">
                            <img src={require('../images/Untitled design (15).png')} alt="product"/>
                        </div>
                        <div id="about-product">
                            <div id="diamond" data-aos="zoom-in">
                                <img src={require("../images/Diamond.png")} alt="."/>
                                <p data-aos="fade-in">Ziplyne enables you, your customers and employees to navigate the hills and valleys of The SaaS Terrain. ... Ziplyne is an Enterprise SaaS technology Company Focused On Simplifying User Experiences For All Web Appplications And Websites.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="lastpart">

                    </div>
                </section>
                
            </div>
        );
    }
}

export default ProductSection;