import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import contactus from '../../../../assets/MensFactionStore.jpg';
import image1 from '../../../../assets/pic1.jpg';
import image2 from '../../../../assets/pic5.jpeg';
import image3 from '../../../../assets/pic6.jpeg';
import './MensFactionStore.css';

const MensFactionStore = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>Welcome to Mens Faction Store</h1>
            <h3>
              At Kgy Sathsara, we offer high-quality fashion that blends style, comfort, and durability. Discover timeless classics and trendy designs, crafted with care and a commitment to sustainability.
            </h3>
          </div>
        </div>
      </div>
      <div className='AnimalFeed'>
        <div className="feed-gallery">
          <div className="feed-item">
            <img src={image1} alt="Feed 1" className="feed-image" />
          </div>
          <div className="feed-item">
            <img src={image2} alt="Feed 2" className="feed-image" />
          </div>
          <div className="feed-item">
            <img src={image3} alt="Feed 3" className="feed-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MensFactionStore;
