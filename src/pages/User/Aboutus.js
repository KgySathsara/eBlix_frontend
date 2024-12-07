import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './about.css';
import picture from '../../assets/chicken.jpg';
import CustomFooter from '../../components/Footer/CustomFooter';

const Aboutus = () => {
  return (
    <section>
      <Navbar />
      <div className="aboutus-container">
        <div className="aboutus-image-container">
          <img alt="Prisco Chicken Product" src={picture} className="aboutus-image" />
        </div>
        <div className="aboutus-content">
          <h2 className="aboutus-title">Prisco Chicken Product</h2>
          <p className="aboutus-description">
            Prisco chicken is a premium product known for its high quality and freshness. Our chicken is sourced from the best farms, ensuring that every bite is nutritious and delicious. Perfect for all your culinary needs.
          </p>
          <p className="aboutus-readmore">Read More...</p>
        </div>
      </div>
      <CustomFooter />
    </section>
  );
};

export default Aboutus;
