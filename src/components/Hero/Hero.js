import React from 'react';
import { Link } from 'react-router-dom'; 
import header from '../../assets/a.jpg';
import './hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <img src={header} alt="Hero" />
            <div className="overlay">
            <h1>High-Quality Fashion, Tailored for You</h1>
            <h3>Welcome to Kgy Sathsara's Shop!</h3>
                <div className="buttons">
                    <Link to="/UserAbout">
                        <button className="button1">About</button>
                    </Link>
                    <Link to="/Contactus">
                        <button className="button2">Call Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
