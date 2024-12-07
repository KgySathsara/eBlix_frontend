import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import './WomensFactionStore.css'; // Import the CSS file
import contactus from '../../../../assets/Chicken-Product.jpg';
import image1 from '../../../../assets/pic11.jpg'; // Replace with your image path
import image2 from '../../../../assets/Chicken-Product.jpg'; // Replace with your image path
import image3 from '../../../../assets/pic12.jpg'; // Replace with your image path

const WomensFactionStore = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>Welcome to Prisco Chicken</h1>
            <h3>
              At Prisco Chicken, we are dedicated to providing high-quality poultry products that are 
              fresh, healthy, and delicious. Our commitment to excellence ensures that every product meets 
              the highest standards for quality and taste.
            </h3>
          </div>
        </div>
      </div>

      <div className="AnimalFeed">
        <div className="feed-gallery">
          <div className="feed-item">
            <img src={image1} alt="Chicken Product 1" className="feed-image" />
          </div>
          <div className="feed-item">
            <img src={image2} alt="Chicken Product 2" className="feed-image" />
          </div>
          <div className="feed-item">
            <img src={image3} alt="Chicken Product 3" className="feed-image" />
          </div>
        </div>
        <p>Prisco Chicken offers premium poultry products that are carefully processed to retain maximum flavor and nutrition. Our range of chicken products is perfect for any meal, ensuring you get the best quality in every bite. Trust Prisco Chicken to bring you the finest poultry, every time.</p>
      </div>
    </section>
  );
};

export default WomensFactionStore;
