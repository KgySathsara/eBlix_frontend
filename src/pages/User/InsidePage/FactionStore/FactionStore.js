import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import contactus from '../../../../assets/plant.jpg';
import image1 from '../../../../assets/pic7.jpg'; 
import image2 from '../../../../assets/pic8.jpg'; 
import image3 from '../../../../assets/pic9.jpg';
import './FactionStore.css';

const FactionStore = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>Welcome to Prisco Plantation</h1>
            <h3>
              At Prisco Plantation, we are dedicated to growing and nurturing the finest plants. 
              Our commitment to quality ensures that every plant we cultivate is healthy, vibrant, and ready to thrive.
            </h3>
          </div>
        </div>
      </div>

      <div className="AnimalFeed">
        <div className="feed-gallery">
          <div className="feed-item">
            <img src={image1} alt="Plant 1" className="feed-image" />
          </div>
          <div className="feed-item">
            <img src={image2} alt="Plant 2" className="feed-image" />
          </div>
          <div className="feed-item">
            <img src={image3} alt="Plant 3" className="feed-image" />
          </div>
        </div>
        <p>At Prisco Plantation, we pride ourselves on producing high-quality plants that are perfect for any environment. Our plants are carefully grown to ensure they are healthy and vibrant, providing you with the best options for your garden, home, or business. With our dedication to sustainable practices, you can trust that our plants are not only beautiful but also environmentally friendly.</p>
      </div>
    </section>
  );
};

export default FactionStore;

