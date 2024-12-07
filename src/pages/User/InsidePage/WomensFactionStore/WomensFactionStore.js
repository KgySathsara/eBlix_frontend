import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import './WomensFactionStore.css'; // Import the CSS file
import contactus from '../../../../assets/WomensFactionStore.jpeg';
import image1 from '../../../../assets/pic11.jpeg'; // Replace with your image path
import image2 from '../../../../assets/womenfaction.jpg'; // Replace with your image path
import image3 from '../../../../assets/pic12.jpg'; // Replace with your image path

const WomensFactionStore = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>Welcome to Womens Faction Store</h1>
            <h3>
              At Kgy Sathsara, we offer high-quality fashion that blends style, comfort, and durability. Discover timeless classics and trendy designs, crafted with care and a commitment to sustainability.
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
      </div>
    </section>
  );
};

export default WomensFactionStore;
