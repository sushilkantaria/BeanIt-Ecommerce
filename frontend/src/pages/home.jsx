import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import CoffeeWebsite from './CoffeeWebsite';
import logo from './/Home/logo.png';
import coffeeVideo from './/Home/coffee-video.mp4';
import Landscape from './Home/landscape.jpeg';
import Landscape2 from './Home/landscape2.jpeg';

function Home() {
    return (
        <div className='homestyle'>
            <header>
                <div className="logo-container">
                    <img src={logo} alt="Bean It Logo" />
                </div>
            </header>
            <section className="hero-section">
                <div className="video-layout">
                    <video autoPlay muted loop>
                        <source src={coffeeVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay"></div>
                </div>
                <div className="hero-content" id="hero-section">
                    <h1>Welcome to Bean It</h1>
                    <p>Experience the finest coffee blends</p>
                    <Link to="/All" className="btn">Shop Now</Link>
                </div>
            </section>

            <section className="info-section" id="info-section">
                <div className="landscape-image">
                    <img src={Landscape} alt="Landscape" />
                </div>
                <div className="info">
                    <h2>Discover Our Coffee</h2>
                    <p>Learn about our selection of premium coffee beans sourced from around the world. From rich and robust flavors to delicate and fruity notes, our coffee will awaken your senses.</p>
                    <Link to="/origin" className="btn">Explore More</Link>
                </div>
            </section>
            
            <section className="landscape-info-section">
                <div className="landscape-image">
                    <img src={Landscape2} alt="Landscape" />
                </div>
                <div className="info">
                    <h2>About Coffee</h2>
                    <p>Discover the story behind our premium coffee beans and our commitment to quality and sustainability. From the cultivation to the cup, we ensure every step meets our high standards.</p>
                    <Link to="/facts" className="btn">Explore More</Link>
                </div>
            </section>

            <section className="coffee-cards-section">
                <h1>Bean It Fine Products</h1>
                <br />
                <div className="coffee-cards-container" id="coffee-cards-container">
                    <CoffeeWebsite/>
                    {/* Coffee cards will be dynamically generated here */}
                </div>
            </section>
        </div>
    );
}

export default Home;