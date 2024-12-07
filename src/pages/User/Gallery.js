import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CustomFooter from '../../components/Footer/CustomFooter';
import contactus from '../../assets/bg1.png';
import './user.css';
import { Card, Button, InputNumber, Row, Col, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';

const { Meta } = Card;

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [quantity, setQuantity] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('http://localhost:8000/api/gallery')
      .then(response => {
        setGalleries(response.data.galleries);
        const initialQuantity = {};
        response.data.galleries.forEach(gallery => {
          initialQuantity[gallery.id] = 1;
        });
        setQuantity(initialQuantity);
      })
      .catch(error => {
        console.error('Error fetching galleries:', error);
      });
  }, []);

  const handleAddToCart = (gallery) => {
    const selectedQuantity = quantity[gallery.id] || 1;
    addToCart(gallery, selectedQuantity);
    message.success(`${gallery.name} added to cart!`);
  };

  const handleQuantityChange = (value, galleryId) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [galleryId]: value,
    }));
  };

  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>IMAGE GALLERY</h1>
            <h3>View Our Gallery. Our Image Album Will Help You To Get An Idea About Our Work</h3>
          </div>
        </div>
      </div>
      <div className="gallery-container">
        {galleries.map((gallery) => (
          <Card
            key={gallery.id}
            hoverable
            className="gallery-card"
            cover={<img alt={gallery.name} src={gallery.image_url} className="gallery-image" />}
          >
            <Meta title={gallery.name} description={gallery.description} />
            <p>Available Quantity: {gallery.quantity}</p>
            <p>Price: ${gallery.price}</p>
            <Row gutter={16} align="middle" justify="space-between">
              <Col>
                <span>Quantity</span> 
                <InputNumber
                  min={1}
                  value={quantity[gallery.id]}
                  onChange={(value) => handleQuantityChange(value, gallery.id)}
                  style={{ marginRight: 4, marginLeft: 8 }}
                />
              </Col>
              <Col>
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => handleAddToCart(gallery)}
                >
                  Add to Cart
                </Button>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
      <CustomFooter />
    </section>
  );
};

export default Gallery;
