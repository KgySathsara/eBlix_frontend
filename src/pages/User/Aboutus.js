import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './about.css';
import picture from '../../assets/clothing.jpeg'; // Update this path to an appropriate image
import CustomFooter from '../../components/Footer/CustomFooter';

const Aboutus = () => {
  return (
    <section>
      <Navbar />
      <div className="aboutus-container">
        <div className="aboutus-image-container">
          <img alt="Kgy Sathsara Clothing Store" src={picture} className="aboutus-image" />
        </div>
        <div className="aboutus-content">
          <h2 className="aboutus-title">Welcome to Kgy Sathsara' Shop</h2>
          <p className="aboutus-description">
            At Kgy Sathsara, we bring you high-quality fashion designed to combine style, comfort, and durability. Whether you’re looking for timeless classics or the latest trends, our collection has something special for everyone.
          </p>
          <p className="aboutus-description">
            We take pride in curating garments that reflect individuality and personality, ensuring every piece is a perfect fit for your lifestyle. Committed to sustainability and ethical practices, Kgy Sathsara delivers fashion you can feel good about.
          </p>
          <p className="aboutus-readmore">Explore Our Collections...</p>
        </div>
      </div>
      <CustomFooter />
    </section>
  );
};

export default Aboutus;
