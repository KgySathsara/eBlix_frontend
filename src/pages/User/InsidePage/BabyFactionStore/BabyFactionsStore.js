import React from 'react';
import Navbar from '../../../../components/Navbar/Navbar';
import './BabyFactionsStore.css'; 
import contactus from '../../../../assets/Breaders.jpg';
import image1 from '../../../../assets/pic2.jpg'; 
import image2 from '../../../../assets/pic3.jpg';
import image3 from '../../../../assets/pic10.jpg';

const BabyFactionsStore = () => {
  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>Welcome to Prisco Breeders</h1>
            <h3>
              At Prisco Breeders, we specialize in providing high-quality breeding services. Our
              commitment to excellence ensures the best care and nutrition for your animals, giving
              them the foundation for a healthy and productive life.
            </h3>
          </div>
        </div>
      </div>

      <div className="AnimalFeed">
        <div className="feed-gallery">
          <div className="feed-item">
            <img src={image1} alt="Breeder 1" className="feed-image" />
          </div>
          <div className="feed-item">
            <img src={image2} alt="Breeder 2" className="feed-image" />
          </div>
          <div className="feed-item">
            <img src={image3} alt="Breeder 3" className="feed-image" />
          </div>
        </div>
        <p>At Prisco Breeders, we offer expert breeding services that ensure the best genetic traits in your livestock. Our experienced team uses the latest techniques to support healthy and successful breeding, delivering outstanding results that improve the quality of your herd.</p>
      </div>
    </section>
  );
};

export default BabyFactionsStore;
