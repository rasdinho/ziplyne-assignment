import React, { Component } from 'react';
import './FifthPage.scss'

class FifthPage extends Component {
    render() {
        return (
<>

            <section className="section-a-fifthpage">
                    <div className="fifthpage-container">
                        <div>
                                <h1 id="fourth-page-h1-4">The headphones of the future.</h1>
                                <p id="fifthpage-p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                                    repudiandae rerum libero ipsum asperiores omnis mollitia, nostrum
                                    commodi placeat ea itaque modi corrupti corporis nam voluptas aut
                                    reprehenderit eaque culpa.
                                </p>
                        </div>
                        <img src="https://i.ibb.co/37Y74kv/showcase.jpg" alt="." />
                    </div>
            </section>
    {/*================================================================================================================*/}
            <section id="about" className="section-b">
                    <div className="overlay">
                        <div className="section-b-inner py-5">
                                <h3  id="fifthpage-h3" className="text-2">Loud & Clear</h3>
                                <h2  id="fifthpage-h2" className="text-5 mt-1">People Aren't Hearing All the Music</h2>
                                <p id="fifthpage-p2" className="mt-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                                    repudiandae laboriosam quia, error tempore porro ducimus voluptate
                                    laborum nostrum iure.
                                </p>
                        </div>
                    </div>
            </section>
    {/*================================================================================================================*/}
            <section className="section-c">
                    <div className="gallery">
                        <a href="https://i.ibb.co/CHLBZnp/gal2323.jpg" className="big"><img src="https://i.ibb.co/CHLBZnp/gal2323.jpg" alt=""/></a>

                        <a href="https://i.ibb.co/4pBbhfY/gal39834.jpg" className="big"><img src="https://i.ibb.co/4pBbhfY/gal39834.jpg" alt=""/></a>

                        <a href="https://i.ibb.co/xSnHP7g/gal43884.jpg" className="big"><img src="https://i.ibb.co/xSnHP7g/gal43884.jpg" alt=""/></a>

                        <a href="https://i.ibb.co/QN6Bnrb/gal4958.jpg" className="big"><img src="https://i.ibb.co/QN6Bnrb/gal4958.jpg" alt=""/></a>

                        <a href="https://i.ibb.co/dGZvj75/gal4545.jpg" className="big"><img src="https://i.ibb.co/dGZvj75/gal4545.jpg" alt=""/></a>

                        <a href="https://i.ibb.co/S6FVFNt/gal74744.jpg" className="big"><img src="https://i.ibb.co/S6FVFNt/gal74744.jpg" alt=""/></a>

                    </div>
            </section>

    




</>

        );
    }
}

export default FifthPage;
