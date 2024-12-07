import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import contactus from '../../../../assets/Animal-Feed.jpg';
import image1 from '../../../../assets/pic1.jpg';
import image2 from '../../../../assets/pic5.jpg';
import image3 from '../../../../assets/pic6.jpg';
import './MensFactionStore.css';

const MensFactionStore = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>Welcome to Prisco Animal Feeds</h1>
            <h3>
              At Prisco Animal Feeds, we provide top-quality feed products for your livestock. Our
              commitment to excellence ensures your animals get the best nutrition available.
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
        <p>Our premium animal feed is expertly crafted to meet the nutritional needs of your livestock, whether they're cattle, poultry, or any other farm animals. Rich in essential vitamins, minerals, and proteins, our feed promotes healthy growth, boosts immunity, and enhances overall well-being. Carefully balanced to support every stage of life, our feed helps your animals thrive, ensuring they get the best care possible. Trust us to provide the nourishment your livestock deserves</p>
      </div>
    </section>
  );
};

export default MensFactionStore;
