import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import contactus from '../../../../assets/FactionStore.jpeg';
import image1 from '../../../../assets/pic3.jpeg'; 
import image2 from '../../../../assets/pic5.jpeg'; 
import image3 from '../../../../assets/pic10.jpeg';
import './FactionStore.css';

const FactionStore = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>Welcome to Faction Store</h1>
            <h3>
              At Kgy Sathsara, we offer high-quality fashion that blends style, comfort, and durability. Discover timeless classics and trendy designs, crafted with care and a commitment to sustainability.
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
      </div>
    </section>
  );
};

export default FactionStore;

